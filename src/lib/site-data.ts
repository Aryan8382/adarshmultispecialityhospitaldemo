import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import doctor5 from "@/assets/doctor-5.jpg";
import doctor6 from "@/assets/doctor-6.jpg";
import galReception from "@/assets/gallery-reception.jpg";
import galOt from "@/assets/gallery-ot.jpg";
import galIcu from "@/assets/gallery-icu.jpg";
import galMri from "@/assets/gallery-mri.jpg";
import galRoom from "@/assets/gallery-room.jpg";
import galEmergency from "@/assets/gallery-emergency.jpg";
import galLab from "@/assets/gallery-lab.jpg";

export const HOSPITAL = {
  name: "Aadarsh Multispeciality Hospital",
  short: "Aadarsh Hospital",
  tagline: "Compassionate care, advanced medicine",
  phone: "+91 98765 43210",
  emergency: "+91 98765 00108",
  email: "care@aadarshhospital.in",
  address: "Plot 14, Ring Road, Civil Lines, Nagpur, Maharashtra 440001",
  hours: "OPD 8:00 AM – 9:00 PM · Emergency & ICU 24×7",
};

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  department: string;
  qualifications: string;
  experience: string;
  languages: string;
  opd: string;
  bio: string;
  image: string;
};

export const DOCTORS: Doctor[] = [
  {
    slug: "arun-deshmukh",
    name: "Dr. Arun Deshmukh",
    specialty: "Senior Interventional Cardiologist",
    department: "Cardiology",
    qualifications: "MBBS, MD (Medicine), DM (Cardiology)",
    experience: "24 years",
    languages: "English, Hindi, Marathi",
    opd: "Mon–Sat · 10:00 AM – 1:00 PM",
    bio: "Leads the cath lab team with over 9,000 angioplasties performed. Special interest in primary PCI for heart attack and structural heart disease.",
    image: doctor1,
  },
  {
    slug: "priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Obstetrician & Gynaecologist",
    department: "Obstetrics & Gynaecology",
    qualifications: "MBBS, MS (Obs & Gynae), Fellowship in Laparoscopy",
    experience: "16 years",
    languages: "English, Hindi",
    opd: "Mon–Fri · 11:00 AM – 3:00 PM",
    bio: "Specialises in high-risk pregnancy, painless delivery and minimally invasive gynaec surgery with a strong focus on mother-and-baby wellbeing.",
    image: doctor2,
  },
  {
    slug: "rohit-kulkarni",
    name: "Dr. Rohit Kulkarni",
    specialty: "Orthopaedic & Joint Replacement Surgeon",
    department: "Orthopaedics",
    qualifications: "MBBS, MS (Ortho), Fellowship in Arthroplasty",
    experience: "18 years",
    languages: "English, Hindi, Marathi",
    opd: "Mon, Wed, Fri · 9:00 AM – 12:00 PM",
    bio: "Performs computer-navigated knee and hip replacements, sports injury arthroscopy and complex trauma reconstruction.",
    image: doctor3,
  },
  {
    slug: "meera-nair",
    name: "Dr. Meera Nair",
    specialty: "Consultant Paediatrician & Neonatologist",
    department: "Paediatrics",
    qualifications: "MBBS, MD (Paediatrics), Fellowship in Neonatology",
    experience: "13 years",
    languages: "English, Hindi, Malayalam",
    opd: "Tue–Sun · 10:00 AM – 2:00 PM",
    bio: "Heads our Level-III NICU, caring for premature newborns, childhood asthma, growth concerns and immunisation programmes.",
    image: doctor4,
  },
  {
    slug: "rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    specialty: "Consultant Neurologist & Stroke Specialist",
    department: "Neurology",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    experience: "21 years",
    languages: "English, Hindi",
    opd: "Mon–Sat · 4:00 PM – 7:00 PM",
    bio: "Runs our 24×7 stroke-thrombolysis pathway, epilepsy clinic and advanced electrophysiology (EEG, NCV, EMG) services.",
    image: doctor5,
  },
  {
    slug: "ananya-rao",
    name: "Dr. Ananya Rao",
    specialty: "Consultant Radiologist",
    department: "Radiology & Imaging",
    qualifications: "MBBS, MD (Radiodiagnosis)",
    experience: "11 years",
    languages: "English, Hindi, Telugu",
    opd: "Mon–Sat · 9:00 AM – 6:00 PM",
    bio: "Reports 3T MRI, 128-slice CT and high-resolution ultrasound, with sub-speciality focus on breast and musculoskeletal imaging.",
    image: doctor6,
  },
];

export type Department = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  highlights: string[];
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology & Cardiac Surgery",
    icon: "HeartPulse",
    summary: "24×7 cath lab, angioplasty, pacemaker implants and cardiac rehabilitation.",
    highlights: ["Primary PCI within 90 minutes", "2D Echo & TMT", "Heart failure clinic"],
  },
  {
    slug: "neurology",
    name: "Neurology & Neurosurgery",
    icon: "Brain",
    summary: "Stroke-ready unit with thrombolysis, epilepsy care and spine neurosurgery.",
    highlights: ["Golden-hour stroke protocol", "EEG, NCV, EMG lab", "Neuro ICU"],
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "Bone",
    summary: "Joint replacement, arthroscopy, trauma care and physiotherapy under one roof.",
    highlights: ["Navigated knee replacement", "Sports injury clinic", "Day-care arthroscopy"],
  },
  {
    slug: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    icon: "Baby",
    summary: "Birthing suites, painless delivery, high-risk pregnancy and laparoscopic surgery.",
    highlights: ["Level-III NICU support", "Antenatal wellness classes", "Well-woman checks"],
  },
  {
    slug: "paediatrics",
    name: "Paediatrics & Neonatology",
    icon: "Stethoscope",
    summary: "Child-friendly OPD, 18-bed NICU/PICU and complete immunisation services.",
    highlights: ["24×7 newborn transport", "Paediatric asthma clinic", "Growth monitoring"],
  },
  {
    slug: "general-surgery",
    name: "General & Laparoscopic Surgery",
    icon: "Scissors",
    summary: "Keyhole surgery for hernia, gall bladder, appendix and proctology conditions.",
    highlights: ["Modular operation theatres", "Day-care surgery", "Fast-track recovery"],
  },
  {
    slug: "nephrology",
    name: "Nephrology & Dialysis",
    icon: "Droplets",
    summary: "Twelve-station dialysis unit with dedicated hepatitis-isolated bays.",
    highlights: ["24×7 emergency dialysis", "Chronic kidney disease clinic", "Diet counselling"],
  },
  {
    slug: "critical-care",
    name: "Critical Care & Emergency",
    icon: "Ambulance",
    summary: "Level-1 emergency room, advanced life support ambulances and 30 ICU beds.",
    highlights: ["Intensivist-led ICU", "ALS ambulance fleet", "Trauma triage"],
  },
  {
    slug: "radiology",
    name: "Radiology & Imaging",
    icon: "ScanLine",
    summary: "3T MRI, 128-slice CT, digital X-ray, mammography and 4D ultrasound.",
    highlights: ["Same-day reporting", "Interventional radiology", "Teleradiology support"],
  },
];

export type Service = {
  name: string;
  icon: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    name: "24×7 Emergency & Trauma",
    icon: "Siren",
    description: "Triage within 5 minutes, resuscitation bays and on-call specialists round the clock.",
  },
  {
    name: "Advanced Diagnostics",
    icon: "Microscope",
    description: "NABL-standard pathology, 3T MRI, 128-slice CT and cardiac imaging in one visit.",
  },
  {
    name: "Modular Operation Theatres",
    icon: "Syringe",
    description: "Four HEPA-filtered theatres with laminar airflow and laparoscopic towers.",
  },
  {
    name: "Intensive Care Units",
    icon: "Activity",
    description: "MICU, SICU, NICU and CCU with ventilators, central monitoring and intensivists.",
  },
  {
    name: "Ambulance & Patient Transport",
    icon: "Ambulance",
    description: "GPS-tracked advanced life support ambulances with paramedic teams.",
  },
  {
    name: "Pharmacy & Blood Bank Support",
    icon: "Pill",
    description: "In-house 24×7 pharmacy and tie-ups for immediate blood component supply.",
  },
  {
    name: "Physiotherapy & Rehabilitation",
    icon: "Dumbbell",
    description: "Post-surgical, neuro and sports rehabilitation with certified physiotherapists.",
  },
  {
    name: "Insurance & Cashless Desk",
    icon: "ShieldCheck",
    description: "Empanelled with major TPAs and government schemes with a dedicated help desk.",
  },
];

export type HealthPackage = {
  slug: string;
  name: string;
  price: string;
  original: string;
  audience: string;
  tests: string[];
  featured?: boolean;
};

export const PACKAGES: HealthPackage[] = [
  {
    slug: "basic-wellness",
    name: "Basic Wellness Check",
    price: "₹1,499",
    original: "₹2,400",
    audience: "Adults 18+ · annual screening",
    tests: [
      "Complete blood count",
      "Blood sugar (fasting)",
      "Lipid profile",
      "Urine routine",
      "Physician consultation",
    ],
  },
  {
    slug: "master-health",
    name: "Master Health Package",
    price: "₹3,999",
    original: "₹6,200",
    audience: "Adults 35+ · full body screening",
    featured: true,
    tests: [
      "68 lab parameters incl. HbA1c & thyroid",
      "ECG + 2D Echo",
      "Chest X-ray & ultrasound abdomen",
      "Physician + dietician consultation",
      "Vision & dental screening",
    ],
  },
  {
    slug: "cardiac-care",
    name: "Cardiac Care Package",
    price: "₹5,499",
    original: "₹8,000",
    audience: "Heart risk & family history",
    tests: [
      "TMT (stress test)",
      "2D Echo & ECG",
      "Lipid profile + hs-CRP",
      "Cardiologist consultation",
      "Lifestyle & diet plan",
    ],
  },
  {
    slug: "women-wellness",
    name: "Women's Wellness Package",
    price: "₹4,299",
    original: "₹6,800",
    audience: "Women 30+ · preventive care",
    tests: [
      "Pap smear & HPV screening",
      "Mammography or breast ultrasound",
      "Thyroid & Vitamin D, B12",
      "Bone density (DEXA) screening",
      "Gynaecologist consultation",
    ],
  },
  {
    slug: "diabetes-plus",
    name: "Diabetes Plus Package",
    price: "₹2,299",
    original: "₹3,600",
    audience: "Diagnosed or pre-diabetic patients",
    tests: [
      "HbA1c, FBS & PPBS",
      "Kidney & liver profile",
      "Urine microalbumin",
      "Retina screening",
      "Diabetologist + dietician review",
    ],
  },
  {
    slug: "senior-citizen",
    name: "Senior Citizen Package",
    price: "₹4,999",
    original: "₹7,500",
    audience: "60 years and above",
    tests: [
      "82 lab parameters",
      "ECG, 2D Echo & chest X-ray",
      "Bone density (DEXA)",
      "Physician, ortho & eye consultation",
      "Home sample collection included",
    ],
  },
];

export type GalleryPhoto = {
  src: string;
  title: string;
  category: "Facilities" | "Care" | "Diagnostics";
};

export const PHOTOS: GalleryPhoto[] = [
  { src: galReception, title: "Main reception & waiting lounge", category: "Facilities" },
  { src: galOt, title: "Modular operation theatre", category: "Care" },
  { src: galIcu, title: "Intensive care unit", category: "Care" },
  { src: galMri, title: "3T MRI suite", category: "Diagnostics" },
  { src: galRoom, title: "Deluxe private patient room", category: "Facilities" },
  { src: galEmergency, title: "Emergency ambulance bay", category: "Care" },
  { src: galLab, title: "Pathology laboratory", category: "Diagnostics" },
  { src: galReception, title: "Outpatient corridor", category: "Facilities" },
];

export type GalleryVideo = {
  title: string;
  description: string;
  poster: string;
  src: string;
  duration: string;
};

export const VIDEOS: GalleryVideo[] = [
  {
    title: "A walk through Aadarsh Hospital",
    description: "Tour our outpatient block, wards and diagnostic centre.",
    poster: galReception,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: "1:02",
  },
  {
    title: "Inside our critical care unit",
    description: "How our intensivist-led ICU team monitors patients 24×7.",
    poster: galIcu,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "0:58",
  },
  {
    title: "Advanced imaging explained",
    description: "What to expect during an MRI or CT scan at Aadarsh.",
    poster: galMri,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "0:54",
  },
  {
    title: "Emergency response in action",
    description: "Our ambulance and trauma team's golden-hour protocol.",
    poster: galEmergency,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "1:00",
  },
];

export const STATS = [
  { value: "25+", label: "Years of service" },
  { value: "40+", label: "Specialist doctors" },
  { value: "150", label: "Inpatient beds" },
  { value: "3.5 Lakh+", label: "Patients treated" },
];

export const TESTIMONIALS = [
  {
    name: "Sunita Deshpande",
    city: "Nagpur",
    text: "My father was brought in with a heart attack at 2 AM. The team acted within minutes and the angioplasty saved his life. Truly lifesavers.",
  },
  {
    name: "Imran Sheikh",
    city: "Wardha",
    text: "Knee replacement for my mother went smoothly. Clean rooms, polite nurses and clear billing with no hidden charges.",
  },
  {
    name: "Rakhi Verma",
    city: "Nagpur",
    text: "The maternity team made my delivery calm and comfortable. The NICU staff took wonderful care of my baby for a week.",
  },
];

export const FAQS = [
  {
    q: "Do I need an appointment to visit the OPD?",
    a: "Walk-ins are welcome between 8:00 AM and 9:00 PM, but booking an appointment online reduces your waiting time to under 15 minutes.",
  },
  {
    q: "Is the emergency department open at night?",
    a: "Yes. Our emergency room, ICU, pharmacy and imaging services run 24×7, 365 days a year, with resident doctors always on duty.",
  },
  {
    q: "Do you accept cashless insurance?",
    a: "We are empanelled with major insurers, TPAs and government schemes. Our insurance desk on the ground floor handles pre-authorisation.",
  },
  {
    q: "Can I get a health package done in one visit?",
    a: "Most packages are completed in a single 3–4 hour morning visit. Come fasting for 10 hours; reports reach you the same evening.",
  },
];
