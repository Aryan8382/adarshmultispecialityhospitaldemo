import { useEffect, useState } from "react";
import { X, Phone, CheckCircle2 } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

/**
 * Ayushman Bharat PM-JAY popup — Gujarati only.
 * Horizontal two-column layout, no scrolling.
 * Appears 4 seconds after first page load, once per browser session.
 */
export function AyushmanPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("pmjay_popup")) return;
    const t = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("pmjay_popup", "1");
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="આયુષ્માન ભારત PM-JAY"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={() => setVisible(false)}
    >
      {/* Wide horizontal card */}
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="બંધ કરો"
          onClick={() => setVisible(false)}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/30 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          <X className="size-4" />
        </button>

        {/* ── TOP ROW: left green + right white ── */}
        <div className="flex">

          {/* LEFT — green panel */}
          <div className="flex w-60 shrink-0 flex-col items-center justify-center gap-4 bg-[#1a6b2f] px-5 py-8">
            {/* Logos */}
            <div className="flex items-center gap-3">
              <div className="flex size-[58px] items-center justify-center rounded-full bg-white p-1 shadow-lg">
                <PmJayLogo />
              </div>
              <div className="flex size-[58px] items-center justify-center rounded-full bg-white p-1 shadow-lg">
                <img src={logoSvg} alt="Adarsh Hospital" className="size-[50px] object-contain" />
              </div>
            </div>

            {/* Scheme title */}
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-green-200">
                આયુષ્માન ભારત
              </p>
              <p className="mt-0.5 text-[10px] font-semibold text-green-200/80">
                પ્રધાનમન્ત્રી જનઆરોગ્ય યોજના
              </p>
              <h2 className="mt-2 font-display text-lg font-extrabold leading-tight text-white">
                "પી.એ.મ.જે.<br />એ.વા.-મા"
              </h2>
              <p className="mt-1 text-lg font-extrabold text-[#f97316]">યોજના</p>
              <p className="mt-1 text-[10px] font-medium text-green-200/75">
                Ayushman Bharat — PM-JAY
              </p>
            </div>

            {/* Hospital badge */}
            <div className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-center">
              <p className="text-[11px] font-bold text-white">
                🏥 આદર્શ મલ્ટીસ્પેશિયાલિટી હોસ્પિટલ, Kalol
              </p>
              <p className="mt-0.5 text-[10px] text-green-200">PMJAY-માન્ય હોસ્પિટલ</p>
            </div>
          </div>

          {/* RIGHT — white panel: benefits */}
          <div className="flex flex-1 flex-col justify-center bg-white px-6 py-6">
            <p className="mb-3 text-sm font-bold text-[#1a6b2f]">
              📋 PM-JAY યોજના — હૉ.ખર્ચે નિઃશુલ્ક સારવ.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-[#1a6b2f]" />
                <span className="text-[13px] leading-snug text-gray-700">
                  કુટુંબ દીઠ અને વર્ષે{" "}
                  <strong className="text-[#1a6b2f]">₹5 લાખ સુધી</strong>{" "}
                  નિઃશુલ્ક સારવાર
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-[#1a6b2f]" />
                <span className="text-[13px] leading-snug text-gray-700">
                  કુટુંબના દરેક સભ્ય માટે વ્યક્તિગત{" "}
                  <strong className="text-[#1a6b2f]">આયુષ્માન કાર્ડ</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-[#1a6b2f]" />
                <span className="text-[13px] leading-snug text-gray-700">
                  રાજ્યમાં{" "}
                  <strong className="text-[#1a6b2f]">1,966 સ. & 846 ખ.</strong>{" "}
                  PMJAY-માન્ય હોસ્પિટલમાં સારવ.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-[#1a6b2f]" />
                <span className="text-[13px] leading-snug text-gray-700">
                  <strong className="text-[#1a6b2f]">પ્રકારની સર્જરી, તપાસ & પ્રોસિજર — વિનામૂલ્યે સારવાર</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-[#1a6b2f]" />
                <span className="text-[13px] leading-snug text-gray-700">
                  હૃદયરોગ, કેન્સર, કિડની & ગંભીર બીમારીઓની વિનામૂલ્યે સારવાર
                </span>
              </li>
            </ul>

            {/* How to get card */}
            <div className="mt-4 rounded-xl bg-[#e8f5ec] px-4 py-2.5">
              <p className="text-[12px] text-[#1a6b2f]">
                <strong>📌 "આયુષ્માન કાર્ડ" મેળવવા માટે:</strong>{" "}
                સરકારી ડિસ્ટ્રિક્ટ હોસ્પિટલ, CSC, UTI-ITSL, E-Gram સેન્ટર પર સંપર્ક કરો
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM STRIP: orange helpline ── */}
        <div className="flex items-center gap-4 bg-[#f97316] px-6 py-3">
          <p className="hidden shrink-0 text-[11px] font-bold uppercase tracking-wider text-white/90 sm:block">
            કોઈપણ પ્રકારની મદદ માટે:
          </p>
          <div className="flex flex-1 flex-wrap items-center gap-5">
            <div className="flex items-center gap-2 text-white">
              <span className="rounded-full bg-white/25 p-1.5">
                <Phone className="size-3.5" />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-white/80">
                  24x7 ટોલ ફ્રી નંબર
                </p>
                <p className="text-base font-extrabold leading-none">1800-233-1022</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="rounded-full bg-white/25 p-1.5">
                <Phone className="size-3.5" />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-white/80">
                  હેલ્પલાઇન નંબર
                </p>
                <p className="text-base font-extrabold leading-none">14555</p>
              </div>
            </div>
          </div>
          {/* Close button */}
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="shrink-0 rounded-full bg-[#1B2A6B] px-5 py-2 text-sm font-bold text-white shadow transition-transform hover:-translate-y-0.5"
          >
            બંધ કરો
          </button>
        </div>

        {/* ── NAVY FOOTER ── */}
        <div className="bg-[#1B2A6B] px-5 py-2 text-center">
          <p className="text-[11px] font-semibold text-white/85">
            આદર્શ મલ્ટીસ્પેશિયાલિટી હોસ્પિટલ, KIRC Campus, Kalol — PMJAY-માન્ય હોસ્પિટલ
          </p>
        </div>
      </div>
    </div>
  );
}

/** PM-JAY lotus SVG logo */
function PmJayLogo() {
  return (
    <svg viewBox="0 0 90 90" className="size-12" aria-hidden="true">
      <circle cx="45" cy="45" r="42" fill="none" stroke="#f97316" strokeWidth="4" />
      <ellipse cx="45" cy="22" rx="7" ry="16" fill="#2d9e4f" />
      <ellipse cx="45" cy="22" rx="7" ry="16" fill="#1a6b2f" transform="rotate(30 45 40)" />
      <ellipse cx="45" cy="22" rx="7" ry="16" fill="#2d9e4f" transform="rotate(-30 45 40)" />
      <ellipse cx="45" cy="22" rx="6" ry="13" fill="#1a6b2f" transform="rotate(56 45 40)" />
      <ellipse cx="45" cy="22" rx="6" ry="13" fill="#2d9e4f" transform="rotate(-56 45 40)" />
      <circle cx="45" cy="54" r="6" fill="#f97316" />
      <path d="M35 64 Q45 57 55 64" stroke="#f97316" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <line x1="36" y1="60" x2="54" y2="60" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
      <text x="45" y="80" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a6b2f" fontFamily="Arial,sans-serif">
        PM-JAY
      </text>
    </svg>
  );
}
