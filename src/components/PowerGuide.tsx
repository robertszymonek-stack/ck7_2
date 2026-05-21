import { useState } from "react";
import Icon from "./Icon";

export default function PowerGuide() {
  const [area, setArea] = useState(25);
  const [height, setHeight] = useState(2.5);
  const [people, setPeople] = useState(2);
  const [devices, setDevices] = useState(2);
  const [windowDir, setWindowDir] = useState("none");
  const [attic, setAttic] = useState(false);
  const [rooms, setRooms] = useState(1);

  // obliczenia
  const basePower = height <= 2.5 ? area * 100 : area * height * 50;
  const peoplePower = people * 50;
  const devicePower = devices * 50;

  const windowMultipliers: Record<string, number> = {
    none: 0,
    southEast: 133,
    northWest: 180,
    southWest: 243,
    west: 299,
  };
  const windowPower = (windowMultipliers[windowDir] || 0) * 1; // uproszczenie: 1 m² okna

  let totalW = basePower + peoplePower + devicePower + windowPower;
  if (attic) totalW *= 1.5;

  const totalKW = (totalW / 1000).toFixed(1);
  const multiSplitKW = (parseFloat(totalKW) * rooms).toFixed(1);

  return (
    <section id="poradnik-mocy" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Poradnik
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Dobór mocy klimatyzatora
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Oblicz efektywną moc chłodniczą na podstawie wielkości pomieszczenia,
            liczby okien, osób i nagrzewającego się poddasza.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* kalkulator */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Interaktywny kalkulator mocy
            </h3>

            <div className="mt-6 space-y-6">
              <RangeField
                label="Powierzchnia pomieszczenia (m²)"
                value={area}
                min={5}
                max={120}
                step={5}
                onChange={setArea}
                unit="m²"
              />
              <RangeField
                label="Wysokość sufitu (m)"
                value={height}
                min={2.2}
                max={4}
                step={0.1}
                onChange={setHeight}
                unit="m"
              />
              <RangeField
                label="Liczba osób w pomieszczeniu"
                value={people}
                min={1}
                max={10}
                step={1}
                onChange={setPeople}
                unit="osób"
              />
              <RangeField
                label="Liczba urządzeń grzewczych (komputery, TV...)"
                value={devices}
                min={0}
                max={8}
                step={1}
                onChange={setDevices}
                unit="szt."
              />

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Kierunek okien
                </label>
                <select
                  value={windowDir}
                  onChange={(e) => setWindowDir(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm"
                >
                  <option value="none">Brak dużych okien</option>
                  <option value="southEast">Południowy-wschód (+133 W/m²)</option>
                  <option value="northWest">Północny-zachód (+180 W/m²)</option>
                  <option value="southWest">Południowy-zachód (+243 W/m²)</option>
                  <option value="west">Zachód (+299 W/m²)</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="attic"
                  checked={attic}
                  onChange={(e) => setAttic(e.target.checked)}
                  className="h-5 w-5 rounded border-slate-300 text-sky-600"
                />
                <label htmlFor="attic" className="text-sm text-slate-700">
                  Pomieszczenie na poddaszu (×1,5 mocy)
                </label>
              </div>

              <RangeField
                label="Liczba pomieszczeń (dla MultiSplit)"
                value={rooms}
                min={1}
                max={6}
                step={1}
                onChange={setRooms}
                unit="pokoi"
              />
            </div>
          </div>

          {/* wynik */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border-2 border-sky-400 bg-gradient-to-br from-sky-50 to-cyan-50 p-8 text-center shadow-lg shadow-sky-100">
              <div className="text-sm font-medium uppercase tracking-wider text-sky-600">
                Zalecana moc chłodnicza
              </div>
              <div className="mt-2 text-6xl font-black tracking-tight text-sky-700">
                {totalKW} <span className="text-3xl">kW</span>
              </div>
              <p className="mt-3 text-sm text-sky-600">
                dla pomieszczenia {area} m²{attic ? " (poddasze)" : ""}
              </p>
            </div>

            {rooms > 1 && (
              <div className="rounded-[2rem] border-2 border-emerald-400 bg-gradient-to-br from-emerald-50 to-green-50 p-6 text-center shadow-lg shadow-emerald-100">
                <div className="text-sm font-medium uppercase tracking-wider text-emerald-700">
                  Moc agregatu MultiSplit ({rooms} pomieszczeń)
                </div>
                <div className="mt-2 text-4xl font-black tracking-tight text-emerald-700">
                  min. {multiSplitKW} <span className="text-2xl">kW</span>
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h4 className="font-semibold text-slate-900">Szczegóły obliczeń</h4>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <CalcRow label="Moc bazowa" value={`${(basePower / 1000).toFixed(2)} kW`} />
                <CalcRow label="Osoby ({people} × 50 W)" value={`${(peoplePower / 1000).toFixed(2)} kW`} />
                <CalcRow label="Urządzenia ({devices} × 50 W)" value={`${(devicePower / 1000).toFixed(2)} kW`} />
                {windowPower > 0 && (
                  <CalcRow label="Nasłonecznienie okien" value={`${(windowPower / 1000).toFixed(2)} kW`} />
                )}
                {attic && <CalcRow label="Poddasze (×1,5)" value="×1,5" />}
                <div className="border-t border-slate-200 pt-2 font-bold text-slate-900">
                  <CalcRow label="Razem" value={`${totalKW} kW`} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <Icon name="award" className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p className="text-sm text-amber-900">
                  <strong>Porada:</strong> To wyliczenie jest orientacyjne. Po
                  15-minutowej wideokonsultacji dobierzemy dokładną moc i
                  wskażemy 2–3 modele idealne dla Twojego wnętrza.
                </p>
              </div>
              <a
                href="#kontakt"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Umów bezpłatną konsultację
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* metodyka */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <MethodCard
            title="Metoda podstawowa (Split)"
            desc="Dla sufitu do 2,5 m: Powierzchnia × 100 W. Wyższy sufit: Powierzchnia × Wysokość × 50 W."
            example="50 m², sufit 2,5 m: 50 × 100 = 5,0 kW"
          />
          <MethodCard
            title="Osoby i sprzęt"
            desc="Każda osoba i każde urządzenie grzewcze dodaje 50 W do zapotrzebowania."
            example="50 m² + 5 osób + 5 komp.: 5,0 + 0,5 = 5,5 kW"
          />
          <MethodCard
            title="Multi-Split"
            desc="Moc agregatu musi być ≥ sumy mocy wszystkich jednostek wewnętrznych."
            example="3 × 2,5 kW = min. 7,5 kW agregat"
          />
        </div>
      </div>
    </section>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  unit,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  unit: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <span className="text-sm font-bold text-sky-700">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-2 w-full accent-sky-600"
      />
    </div>
  );
}

function CalcRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className="font-medium text-slate-900">{value}</span>
    </div>
  );
}

function MethodCard({
  title,
  desc,
  example,
}: {
  title: string;
  desc: string;
  example: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <div className="mt-3 rounded-lg bg-sky-50 p-3 text-xs font-medium text-sky-700">
        {example}
      </div>
    </div>
  );
}
