import {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  Droplets,
  Dumbbell,
  HeartPulse,
  Microscope,
  Pill,
  ScanLine,
  Scissors,
  ShieldCheck,
  Siren,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  Droplets,
  Dumbbell,
  HeartPulse,
  Microscope,
  Pill,
  ScanLine,
  Scissors,
  ShieldCheck,
  Siren,
  Stethoscope,
  Syringe,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Stethoscope;
}
