import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { addMinutes } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CalendarDays, Clock3, ClipboardList, FileText, UserRound } from "lucide-react";
import { patientsStorage } from "@/lib/storage";
import type { Appointment, Patient as StoredPatient } from "@/types/appointment";
import { useToast } from "@/hooks/use-toast";

const appointmentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  patientId: z.string().nullable(),
  type: z.enum(["consultation", "follow-up", "procedure"]).optional(),
  status: z.enum(["scheduled", "completed", "cancelled", "no-show"]).optional(),
  duration: z.enum(["30", "60", "120"]).optional(),
  start: z.string().min(1, "Start is required"),
  end: z.string().min(1, "End is required"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof appointmentSchema>;
type AppointmentDuration = NonNullable<FormData["duration"]>;
type AppointmentType = NonNullable<FormData["type"]>;
type AppointmentStatus = NonNullable<FormData["status"]>;

type PatientOption = { id: string; name: string };
type AppointmentDialogAppointment = Partial<Appointment> & {
  duration?: AppointmentDuration | number;
  start?: string;
  end?: string;
};
type AppointmentDialogSubmitData = FormData & {
  patientName?: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // optional explicit mode, otherwise inferred from `appointment`
  mode?: "create" | "edit";
  // legacy initial values
  initialValues?: Partial<FormData>;
  patients?: PatientOption[];
  onSubmit?: (data: FormData) => Promise<void> | void;
  saving?: boolean;
  // added compatibility props
  selectedDate?: Date | null;
  onAppointmentCreated?: (data: AppointmentDialogSubmitData) => void;
  onUpdated?: (data: AppointmentDialogSubmitData) => void;
  onDelete?: () => Promise<void> | void;
  // if provided, dialog acts as edit form
  appointment?: AppointmentDialogAppointment;
  refreshTrigger?: number;
};

// helper to convert Date/ISO to datetime-local string (YYYY-MM-DDTHH:mm)
function toDateTimeLocal(value?: string | Date) {
  const d = value ? new Date(value) : new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  const YYYY = d.getFullYear();
  const MM = pad(d.getMonth() + 1);
  const DD = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  return `${YYYY}-${MM}-${DD}T${hh}:${mm}`;
}

// helper to round a date up to the next interval (minutes)
function roundToInterval(date: Date, minutes = 15) {
  const d = new Date(date);
  const ms = 1000 * 60 * minutes;
  return new Date(Math.ceil(d.getTime() / ms) * ms);
}

export default function AppointmentDialog({
  open,
  onOpenChange,
  mode,
  initialValues,
  patients,
  onSubmit,
  saving = false,
  selectedDate = null,
  onAppointmentCreated,
  onUpdated,
  onDelete,
  appointment,
  refreshTrigger = 0,
}: Props) {
  // Determine effective mode: explicit mode wins, otherwise presence of `appointment` means edit
  const effectiveMode: "create" | "edit" = mode ?? (appointment ? "edit" : "create");

  const mergedInitial = useMemo<Partial<FormData> | undefined>(() => {
    if (!appointment) return initialValues;

    const normalizedDuration = String(appointment.duration ?? "30") as AppointmentDuration;

    return {
      title: appointment.title,
      patientId: appointment.patientId ?? null,
      type: appointment.type ?? "consultation",
      status: appointment.status ?? "scheduled",
      duration: normalizedDuration,
      start: appointment.startTime ?? appointment.start,
      end: appointment.endTime ?? appointment.end,
      notes: appointment.notes ?? "",
    };
  }, [appointment, initialValues]);

  const defaultValues = useMemo<FormData>(() => {
    const rawDefaultStart =
      selectedDate ?? (mergedInitial?.start ? new Date(mergedInitial.start) : new Date());
    const defaultStart = appointment
      ? new Date(mergedInitial?.start ?? rawDefaultStart)
      : roundToInterval(rawDefaultStart, 15);
    const duration = String(mergedInitial?.duration ?? "30") as AppointmentDuration;

    return {
      title: mergedInitial?.title ?? "",
      patientId: mergedInitial?.patientId ?? null,
      type: (mergedInitial?.type ?? "consultation") as AppointmentType,
      status: (mergedInitial?.status ?? "scheduled") as AppointmentStatus,
      duration,
      start: mergedInitial?.start
        ? toDateTimeLocal(mergedInitial.start)
        : toDateTimeLocal(defaultStart),
      end: mergedInitial?.end
        ? toDateTimeLocal(mergedInitial.end)
        : toDateTimeLocal(addMinutes(defaultStart, Number(duration))),
      notes: mergedInitial?.notes ?? "",
    };
  }, [appointment, mergedInitial, selectedDate]);

  const { register, handleSubmit, setValue, watch, formState, reset } = useForm<FormData>({
    resolver: zodResolver(appointmentSchema),
    mode: "onChange",
    defaultValues,
  });

  const startValue = watch("start");
  const durationValue = watch("duration");
  const endValue = watch("end");
  const statusValue = watch("status");
  const patientIdValue = watch("patientId");
  // local patients state: prefer prop but fall back to the configured storage source
  const [localPatients, setLocalPatients] = useState<PatientOption[]>(patients ?? []);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (startValue && durationValue) {
      const startDate = new Date(startValue);
      const durationMinutes = Number(durationValue);
      if (isFinite(startDate.getTime()) && [30, 60, 120].includes(durationMinutes)) {
        const expectedEnd = toDateTimeLocal(addMinutes(startDate, durationMinutes));
        if (expectedEnd !== endValue) {
          setValue("end", expectedEnd, { shouldDirty: true, shouldValidate: true });
        }
      }
    }
  }, [startValue, durationValue, endValue, setValue]);

  useEffect(() => {
    if (open) {
      reset(defaultValues);
    }
  }, [open, reset, defaultValues]);

  useEffect(() => {
    const selectedPatientId = mergedInitial?.patientId ?? null;
    if (!open || !selectedPatientId || !localPatients.length) {
      return;
    }

    const hasMatchingPatient = localPatients.some((patient) => patient.id === selectedPatientId);
    if (hasMatchingPatient && patientIdValue !== selectedPatientId) {
      setValue("patientId", selectedPatientId, { shouldDirty: false, shouldValidate: true });
    }
  }, [open, mergedInitial?.patientId, localPatients, patientIdValue, setValue]);

  useEffect(() => {
    if (patients && patients.length) {
      setLocalPatients(patients);
      return;
    }

    if (!open) {
      return;
    }

    let isMounted = true;

    const loadPatients = async () => {
      try {
        const storedPatients = await patientsStorage.getAll();
        const mapped = storedPatients.map((p: StoredPatient & { _id?: string; patientId?: string; name?: string }) => {
          const id = p.id ?? p._id ?? p.patientId ?? String(p.email ?? p.name ?? Math.random());
          const fullName = `${p.firstName ?? ""} ${p.lastName ?? ""}`.trim();
          const name = (p.name ?? fullName) || p.email || "Unknown";
          return { id, name };
        });

        if (isMounted) {
          setLocalPatients(mapped);
        }
      } catch {
        if (isMounted) {
          setLocalPatients([]);
        }
      }
    };

    loadPatients();

    return () => {
      isMounted = false;
    };
  }, [patients, open, refreshTrigger]);

  const submit = async (data: FormData) => {
    // enrich with patientName if available
    const patient = (localPatients || patients).find((p) => p.id === data.patientId);
    const enriched: AppointmentDialogSubmitData = {
      ...data,
      patientName: patient ? patient.name : undefined,
    };

    if (effectiveMode === "create") {
      if (onAppointmentCreated) {
        onAppointmentCreated(enriched);
      }
    } else {
      if (onUpdated) {
        onUpdated(enriched);
      }
    }

    if (onSubmit) {
      await onSubmit(enriched);
    }

    try {
      onOpenChange(false);
    } catch (e) {
      // ignore
    }
  };

  const handleDelete = async () => {
    if (!onDelete) {
      return;
    }

    try {
      await onDelete();
      setDeleteConfirmOpen(false);
    } catch (error) {
      toast({
        title: "Delete failed",
        description: error instanceof Error ? error.message : "Unable to delete appointment",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden border-border/70 p-0 shadow-2xl sm:max-w-[800px]">
        <div className="max-h-[600px] overflow-y-auto" data-testid="booking-dialog">
          <div className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-background px-5 py-4 sm:px-6">
            <DialogHeader className="space-y-2 text-left">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                  <ClipboardList className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <DialogTitle className="text-lg font-semibold tracking-tight">
                    {effectiveMode === "create" ? "Create Appointment" : "Edit Appointment"}
                  </DialogTitle>
                  <DialogDescription className="max-w-2xl text-xs leading-relaxed">
                    Book a patient, choose the visit type and duration, and keep the schedule aligned automatically.
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
          </div>

          <form onSubmit={handleSubmit(submit)}>
            <div className="space-y-4 px-5 py-5 sm:px-6">
              {/* Box 1: Title and Patient */}
              <section className="rounded-2xl border border-border/60 bg-muted/20 p-3 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-[60%_40%]">
                  <div className="space-y-1.5">
                    <Label htmlFor="title" className="flex items-center gap-2">
                      <ClipboardList className="h-3.5 w-3.5 text-muted-foreground" />
                      Title
                    </Label>
                    <Input id="title" {...register("title")} className="h-10 border-border/70 bg-background/80" />
                  </div>

                  <div className="space-y-1.5 pr-3">
                    <Label htmlFor="patientId" className="flex items-center gap-2">
                      <UserRound className="h-3.5 w-3.5 text-muted-foreground" />
                      Patient
                    </Label>
                    <Select
                      onValueChange={(val) =>
                        setValue("patientId", val ?? null, { shouldDirty: true, shouldValidate: true })
                      }
                      value={watch("patientId") ?? undefined}
                    >
                      <SelectTrigger
                        id="patientId"
                        data-testid="patient-select"
                        className="h-10 border-border/70 bg-background/80"
                      >
                        <SelectValue placeholder="Select patient" />
                      </SelectTrigger>
                      <SelectContent>
                        {localPatients.map((p) => (
                          <SelectItem key={p.id} value={p.id} data-testid={`patient-option-${p.id}`}>
                            {p.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>

              {/* Box 2: Type and Duration */}
              <section className="rounded-2xl border border-border/60 bg-muted/20 p-3 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-[60%_40%]">
                  <div className="space-y-1.5">
                    <Label htmlFor="type">Type</Label>
                    <Select
                      onValueChange={(val) =>
                        setValue("type", (val ?? "consultation") as AppointmentType, {
                          shouldDirty: true,
                          shouldValidate: true,
                        })
                      }
                      value={watch("type") ?? "consultation"}
                    >
                      <SelectTrigger
                        id="type"
                        data-testid="appointment-type-select"
                        className="h-10 border-border/70 bg-background/80"
                      >
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation" data-testid="appointment-type-option-consultation">Consultation</SelectItem>
                        <SelectItem value="follow-up" data-testid="appointment-type-option-follow-up">Follow-up</SelectItem>
                        <SelectItem value="procedure" data-testid="appointment-type-option-procedure">Procedure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5 pr-3">
                    <Label htmlFor="duration">Duration</Label>
                    <Select
                      onValueChange={(val) =>
                        setValue("duration", (val ?? "30") as AppointmentDuration, {
                          shouldDirty: true,
                          shouldValidate: true,
                        })
                      }
                      value={watch("duration") ?? "30"}
                    >
                      <SelectTrigger
                        id="duration"
                        data-testid="duration-select"
                        className="h-10 border-border/70 bg-background/80"
                      >
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30" data-testid="duration-option-30">Half Hour (30 min)</SelectItem>
                        <SelectItem value="60" data-testid="duration-option-60">Full Hour (60 min)</SelectItem>
                        <SelectItem value="120" data-testid="duration-option-120">Double Hour (120 min)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>

              {effectiveMode === "edit" && (
                <section className="rounded-2xl border border-border/60 bg-muted/20 p-3 shadow-sm">
                  <div className="space-y-1.5 pr-3">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      onValueChange={(val) =>
                        setValue("status", (val ?? "scheduled") as FormData["status"], {
                          shouldDirty: true,
                          shouldValidate: true,
                        })
                      }
                      value={statusValue ?? "scheduled"}
                    >
                      <SelectTrigger
                        id="status"
                        data-testid="appointment-status-select"
                        className="h-10 border-border/70 bg-background/80"
                      >
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scheduled" data-testid="appointment-status-option-scheduled">Scheduled</SelectItem>
                        <SelectItem value="completed" data-testid="appointment-status-option-completed">Completed</SelectItem>
                        <SelectItem value="cancelled" data-testid="appointment-status-option-cancelled">Cancelled</SelectItem>
                        <SelectItem value="no-show" data-testid="appointment-status-option-no-show">No-show</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </section>
              )}

              {/* Box 3: Date (start/end) and Note */}
              <section className="rounded-2xl border border-border/60 bg-muted/20 p-3 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-[60%_40%]">
                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="start" className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
                        Start
                      </Label>
                      <Input
                        id="start"
                        data-testid="appointment-start-input"
                        type="datetime-local"
                        {...register("start")}
                        className="h-10 border-border/70 bg-background/80"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="end" className="flex items-center gap-2">
                        <Clock3 className="h-3.5 w-3.5 text-muted-foreground" />
                        End
                      </Label>
                      <Input
                        id="end"
                        data-testid="appointment-end-input"
                        type="datetime-local"
                        {...register("end")}
                        className="h-10 border-border/70 bg-background/80"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 pr-3">
                    <Label htmlFor="notes" className="flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                      Notes
                    </Label>
                    <Textarea
                      id="notes"
                      data-testid="appointment-notes"
                      {...register("notes")}
                      rows={4}
                      className="min-h-[110px] border-border/70 bg-background/80"
                    />
                  </div>
                </div>
              </section>
            </div>

            <Separator />

            <DialogFooter className="gap-3 px-5 py-3 sm:px-6">
              {effectiveMode === "edit" && onDelete && (
                <Button
                  type="button"
                  variant="destructive"
                  data-testid="delete-appointment-btn"
                  onClick={() => setDeleteConfirmOpen(true)}
                  className="h-10"
                >
                  Delete
                </Button>
              )}
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="h-10 border-border/70">
                Cancel
              </Button>
              <Button
                type="submit"
                data-testid="booking-submit-btn"
                disabled={saving || !formState.isValid}
                className="h-10 px-5 shadow-sm"
              >
                {saving ? "Saving..." : effectiveMode === "create" ? "Create" : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent data-testid="delete-appointment-confirm-dialog">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete appointment?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The appointment will be removed from the schedule.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="cancel-delete-btn">Cancel</AlertDialogCancel>
            <AlertDialogAction data-testid="confirm-delete-btn" onClick={() => void handleDelete()}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Dialog>
  );
}
