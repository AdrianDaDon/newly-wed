import { weddingConfig } from "@/config/wedding";

const { dressCode } = weddingConfig;
const { giftInformation } = dressCode;

function swatchTextClass(index: number, tone: "name" | "hex") {
  const light = index < 2;
  if (tone === "name") {
    return light ? "text-[#521A19]/85" : "text-[#F7EFE7]/90";
  }
  return light ? "text-[#521A19]/55" : "text-[#F7EFE7]/55";
}

export function DressCodeSection() {
  return (
    <section
      id="dress-code"
      className="snap-section relative isolate flex scroll-mt-20 items-center overflow-x-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Soft atmospheric wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_10%,rgba(209,145,136,0.28),transparent_50%),radial-gradient(ellipse_at_10%_90%,rgba(148,66,68,0.12),transparent_45%)]"
      />

      <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-12 sm:gap-14 lg:gap-16">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          {/* Editorial copy */}
          <div className="dress-intro mx-auto w-full max-w-md min-w-0 text-center lg:mx-0 lg:max-w-lg lg:text-left">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-primary uppercase sm:text-xs sm:tracking-[0.28em]">
              {dressCode.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance break-words text-foreground sm:text-5xl lg:text-6xl">
              {dressCode.title}
            </h2>
            <p className="mt-4 text-sm font-medium tracking-wide text-pretty text-primary italic sm:mt-6 sm:text-lg">
              {dressCode.formal}
            </p>
            <p className="mt-3 text-sm text-pretty text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
              {dressCode.description}
            </p>
          </div>

          {/* Fabric-like palette */}
          <div
            className="dress-palette relative mx-auto w-full max-w-xl min-w-0 pb-4 sm:pb-0 lg:mx-0 lg:max-w-none"
            aria-label="Suggested color palette"
          >
            {/* Mobile: stacked full-width strips */}
            <ul className="flex flex-col gap-2.5 sm:hidden">
              {dressCode.palette.map((swatch, index) => (
                <li key={swatch.hex} className="dress-swatch min-w-0">
                  <div
                    className="flex min-h-16 items-start justify-between gap-3 rounded-2xl px-4 py-3.5 shadow-[0_12px_28px_-18px_rgba(82,26,25,0.45)] ring-1 ring-black/5"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span
                      className={`min-w-0 truncate text-sm font-semibold ${swatchTextClass(index, "name")}`}
                    >
                      {swatch.name}
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[0.65rem] tracking-wider uppercase ${swatchTextClass(index, "hex")}`}
                    >
                      {swatch.hex}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Tablet / desktop: staggered cascade */}
            <ul className="hidden sm:block">
              {dressCode.palette.map((swatch, index) => (
                <li
                  key={swatch.hex}
                  className="dress-swatch relative max-w-full"
                  style={{
                    zIndex: index + 1,
                    marginTop:
                      index === 0 ? 0 : "clamp(-1.25rem, -2.5vw, -1.75rem)",
                    marginLeft: `min(${index * 5.5}%, ${index * 1.75}rem)`,
                    width: `calc(100% - min(${index * 5.5}%, ${index * 1.75}rem))`,
                  }}
                >
                  <div
                    className="flex h-24 items-start justify-between gap-3 rounded-[1.25rem] px-4 py-4 shadow-[0_18px_40px_-24px_rgba(82,26,25,0.55)] ring-1 ring-black/5 sm:h-28 sm:px-5 md:h-32 md:px-6"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span
                      className={`min-w-0 truncate text-sm font-semibold tracking-wide sm:text-base ${swatchTextClass(index, "name")}`}
                    >
                      {swatch.name}
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[0.65rem] tracking-wider uppercase sm:text-xs ${swatchTextClass(index, "hex")}`}
                    >
                      {swatch.hex}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gift information */}
        <div className="dress-gifts mx-auto w-full max-w-3xl border-t border-border/80 pt-10 text-center sm:pt-12">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-primary uppercase sm:text-xs sm:tracking-[0.28em]">
            Please note / Veuillez noter
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {giftInformation.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-muted-foreground italic sm:text-base">
            {giftInformation.titleFr}
          </p>
          <div className="mx-auto mt-6 grid w-full max-w-2xl gap-3 sm:mt-8 sm:gap-4">
            {giftInformation.messages.map((message) => (
              <div
                key={message.lang}
                lang={message.lang}
                className="rounded-2xl border border-border bg-secondary/60 px-5 py-4 text-left shadow-sm sm:px-6 sm:py-5"
              >
                <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-primary uppercase">
                  {message.lang === "fr" ? "Français" : "English"}
                </p>
                <p
                  className={`mt-2 text-sm text-pretty sm:text-base ${
                    message.lang === "fr"
                      ? "font-medium text-secondary-foreground/85 italic"
                      : "font-medium text-secondary-foreground"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
