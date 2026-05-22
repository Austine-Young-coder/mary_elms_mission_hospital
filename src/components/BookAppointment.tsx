import { useState } from "react";
import { z } from "zod";
import { CalendarIcon, CheckCircle2, Phone } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20).regex(/^[0-9+\-\s()]+$/, "Invalid phone"),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  department: z.string().min(1, "Select a department"),
  date: z.date({ required_error: "Pick a date" }),
  time: z.string().min(1, "Select a time"),
  notes: z.string().trim().max(500).optional(),
});

const departments = ["General Medicine", "Emergency Care", "Maternity & Pediatrics", "Laboratory", "Pharmacy", "Other"];
const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export function BookAppointment() {
  const [date, setDate] = useState<Date | undefined>();
  const [department, setDepartment] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      department,
      date,
      time,
      notes: fd.get("notes"),
    });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitted(true);
    toast.success("Appointment request received. We'll call to confirm shortly.");
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-card border border-border p-10 text-center shadow-[var(--shadow-soft)]">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
        <h3 className="text-2xl font-bold mt-4">Request received</h3>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">
          Thank you. A member of our team will call you shortly to confirm your appointment.
        </p>
        <Button asChild variant="outline" className="mt-6">
          <a href="tel:+2348036151096"><Phone className="w-4 h-4 mr-2" /> Or call us now</a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-[var(--shadow-soft)] space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full name"><Input name="name" required maxLength={100} placeholder="Jane Okonkwo" /></Field>
        <Field label="Phone"><Input name="phone" required maxLength={20} type="tel" placeholder="+234 800 000 0000" /></Field>
      </div>
      <Field label="Email (optional)"><Input name="email" type="email" maxLength={255} placeholder="you@example.com" /></Field>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Department">
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger><SelectValue placeholder="Choose department" /></SelectTrigger>
            <SelectContent>
              {departments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred time">
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger><SelectValue placeholder="Pick a time" /></SelectTrigger>
            <SelectContent>
              {times.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Preferred date">
        <Popover>
          <PopoverTrigger asChild>
            <Button type="button" variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))} initialFocus className={cn("p-3 pointer-events-auto")} />
          </PopoverContent>
        </Popover>
      </Field>

      <Field label="Notes (optional)">
        <Textarea name="notes" maxLength={500} placeholder="Briefly describe your reason for visit" rows={3} />
      </Field>

      <Button type="submit" size="lg" className="w-full">Request appointment</Button>
      <p className="text-xs text-muted-foreground text-center">
        For emergencies, please call <a href="tel:+2348036151096" className="text-primary font-medium">+234 803 615 1096</a> directly.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  );
}
