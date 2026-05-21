import Icon from "./Icon";

export default function PricingPage() {
  return (
    <section id="cennik-uslug" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Cennik usług
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Cennik montażu klimatyzacji
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Przejrzyste ceny, bez ukrytych kosztów. Obowiązuje od 01.05.2026.
          </p>
        </div>

        {/* badge'e */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: "map", text: "Dojazd do 30 km gratis" },
            { icon: "award", text: "Certyfikat F-GAZ" },
            { icon: "shield", text: "VAT 8% dla budynków mieszkalnych" },
            { icon: "zap", text: "Realizacja za 2–3 dni" },
            { icon: "check", text: "Gwarancja 24 mies. na instalację" },
          ].map((b) => (
            <span
              key={b.text}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
            >
              <Icon name={b.icon} className="h-4 w-4 text-sky-600" />
              {b.text}
            </span>
          ))}
        </div>

        {/* split */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
            <div className="bg-slate-900 px-6 py-5">
              <h3 className="text-xl font-bold text-white">
                Klimatyzatory Split
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Montaż jednostek ściennych — najczęściej wybierany system
              </p>
            </div>
            <div className="p-6">
              <div className="rounded-xl bg-sky-50 p-4 text-sm text-sky-800">
                💡 <strong>Montaż W CENIE każdej jednostki split!</strong> Ceny
                poniżej zawierają wartość montażu klimatyzatora robioną przy
                wycenie.
              </div>

              <div className="mt-6 space-y-4">
                <PricingRow
                  label="Montaż pierwszej jednostki (split)"
                  net="1 600 zł"
                  private="1 728 zł"
                  company="1 968 zł"
                  note="✓ Montaż wliczony w cenę klimatyzatora!"
                />
                <PricingRow
                  label="Istniejąca Instalacja"
                  net="1 100 zł"
                  private="1 188 zł"
                  company="1 353 zł"
                  note="Za jednostkę"
                />
              </div>
            </div>
          </div>

          {/* multisplit */}
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
            <div className="bg-slate-900 px-6 py-5">
              <h3 className="text-xl font-bold text-white">
                Klimatyzatory MultiSplit
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Systemy wielogałęziowe — rozwiązanie dla całego domu
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <PricingRow
                  label="2 pomieszczenia"
                  net="2 600 zł"
                  private="2 808 zł"
                  company="3 198 zł"
                />
                <PricingRow
                  label="3 pomieszczenia"
                  net="3 500 zł"
                  private="3 780 zł"
                  company="4 305 zł"
                />
                <PricingRow
                  label="4 pomieszczenia"
                  net="4 400 zł"
                  private="4 752 zł"
                  company="5 412 zł"
                />
              </div>
            </div>
          </div>
        </div>

        {/* usługi dodatkowe */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-100">
          <div className="bg-slate-900 px-6 py-5">
            <h3 className="text-xl font-bold text-white">
              Usługi dodatkowe
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Rozszerzenia i opcje do montażu
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-6 py-4 font-semibold">Usługa</th>
                  <th className="px-6 py-4 font-semibold text-right">
                    Osoba prywatna (+8%)
                  </th>
                  <th className="px-6 py-4 font-semibold text-right">
                    Firma (+23%)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <ExtraRow service="Dodatkowy metr instalacji chłodniczej" private="140 zł" company="160 zł" />
                <ExtraRow service="Dodatkowy metr koryta / maskownic" private="43 zł" company="50 zł" />
                <ExtraRow service="Dodatkowy przewiert przez ścianę" private="130 zł" company="148 zł" />
                <ExtraRow service="Bruzdowanie (za metr bieżący)" private="237 zł" company="270 zł" />
                <ExtraRow service="Pompka skroplin" private="540 zł" company="615 zł" />
                <ExtraRow service="Montaż jednostki zewnętrznej na dachu/wysoko" private="260 zł" company="295 zł" />
                <ExtraRow service="Przedłużenie instalacji elektrycznej" private="432 zł" company="492 zł" />
                <ExtraRow service="Dojazd powyżej 30 km od Serocka" private="5,40 zł/km" company="6,15 zł/km" />
                <ExtraRow service="Przegląd okresowy / serwis" private="324 zł" company="369 zł" new_ />
                <ExtraRow service="Klimatyzacja kasetonowa / przypodłogowa" private="Wycena ind." company="Wycena ind." />
                <ExtraRow service="Systemy VRF / komercyjne" private="Wycena ind." company="Wycena ind." />
              </tbody>
            </table>
          </div>
        </div>

        {/* ważne informacje */}
        <div className="mt-14 rounded-[2rem] border border-sky-200 bg-sky-50 p-8">
          <h3 className="text-xl font-bold text-slate-900">
            Ważne informacje
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-500">✔</span>
              <span>
                <strong>Montaż GRATIS — pierwsza jednostka</strong> zawsze
                wliczona w cenę klimatyzatora; druga i kolejne płacą osobno.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-500">✔</span>
              <span>
                <strong>Gwarancja 24 miesiące</strong> na wykonaną instalację
                przy regularnych przeglądach.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-500">✔</span>
              <span>
                <strong>VAT 8%</strong> dla osób prywatnych (budynki mieszkalne
                do 300 m²), <strong>23%</strong> dla firm.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-500">✔</span>
              <span>
                <strong>Zakres montażu:</strong> przewiert, montaż, okablowanie,
                próba szczelności, uruchomienie, szkolenie, startowy freon.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-500">✔</span>
              <span>
                <strong>Instalacja freonowa:</strong> 3 metry wliczone w montaż
                podstawowy — każdy kolejny metr doliczany osobno.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-500">✔</span>
              <span>
                <strong>Wszystkie prace do 3 m</strong> wysokości dla jednostek
                wewnętrznych i zewnętrznych.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-emerald-500">✔</span>
              <span>
                <strong>Dojazd:</strong> do 30 km od Serocka bezpłatny, powyżej
                5 zł netto za każdy km.
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Nie wiesz ile zapłacisz?
          </h3>
          <p className="mt-3 text-lg text-slate-600">
            Zadzwoń lub wyślij zapytanie — w ciągu 24 godzin dostaniesz dokładną
            kalkulację dla Twojego projektu, bez zobowiązań.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+48788304845"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              <Icon name="phone" className="h-5 w-5" />
              +48 788 304 845
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:brightness-110"
            >
              Wyślij zapytanie
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingRow({
  label,
  net,
  private: priv,
  company,
  note,
}: {
  label: string;
  net: string;
  private: string;
  company: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="font-semibold text-slate-900">{label}</div>
      <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
        <div>
          <span className="text-xs text-slate-500">Netto</span>
          <div className="font-medium text-slate-700">{net}</div>
        </div>
        <div>
          <span className="text-xs text-slate-500">Osoba prywatna (+8%)</span>
          <div className="font-bold text-sky-700">{priv}</div>
        </div>
        <div>
          <span className="text-xs text-slate-500">Firma (+23%)</span>
          <div className="font-medium text-slate-700">{company}</div>
        </div>
      </div>
      {note && <div className="mt-2 text-xs text-emerald-600">{note}</div>}
    </div>
  );
}

function ExtraRow({
  service,
  private: priv,
  company,
  new_,
}: {
  service: string;
  private: string;
  company: string;
  new_?: boolean;
}) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="px-6 py-4">
        <span className="text-slate-900">{service}</span>
        {new_ && (
          <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-700">
            Nowe
          </span>
        )}
      </td>
      <td className="px-6 py-4 text-right font-medium text-sky-700">{priv}</td>
      <td className="px-6 py-4 text-right text-slate-700">{company}</td>
    </tr>
  );
}
