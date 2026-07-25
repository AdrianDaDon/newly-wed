import { ExternalLink, MapPin } from "lucide-react";

import { weddingConfig } from "@/config/wedding";

const { ceremony, reception, venue, displayDate, details } = weddingConfig;

const mapDelta = 0.012;
const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
  venue.lng - mapDelta
}%2C${venue.lat - mapDelta}%2C${venue.lng + mapDelta}%2C${
  venue.lat + mapDelta
}&layer=mapnik&marker=${venue.lat}%2C${venue.lng}`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${venue.lat},${venue.lng}`;

const schedule = [
  {
    label: ceremony.label,
    time: ceremony.time,
    place: ceremony.location,
    note: ceremony.address,
  },
  {
    label: reception.label,
    time: reception.time,
    place: reception.location,
    note: reception.description,
  },
] as const;

export function DetailsSection() {
  return (
    <section
      id="details"
      className="snap-section relative isolate flex scroll-mt-20 items-center overflow-x-hidden bg-secondary"
    >
      {/* Soft atmospheric wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_20%,rgba(209,145,136,0.35),transparent_55%),radial-gradient(ellipse_at_90%_80%,rgba(148,66,68,0.18),transparent_50%)]"
      />

      <div className="grid w-full min-w-0 grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Editorial itinerary column */}
        <div className="flex flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:items-end lg:py-20 lg:pr-12 xl:pr-16">
          <div className="w-full min-w-0 max-w-md">
            <div className="details-intro">
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-primary uppercase sm:text-xs sm:tracking-[0.28em]">
                {details.eyebrow}
              </p>
              <h2 className="mt-3  text-3xl font-semibold tracking-tight text-balance text-secondary-foreground sm:text-5xl lg:text-6xl">
                {details.title}
              </h2>
              <p className="mt-3 text-sm text-pretty text-secondary-foreground/75 sm:mt-4 sm:text-base sm:text-lg">
                {displayDate} — {details.description}
              </p>
            </div>

            {/* Vertical schedule spine */}
            <div className="relative mt-8 sm:mt-12">
              <div
                aria-hidden="true"
                className="details-spine absolute top-3 bottom-3 left-[0.875rem] w-px bg-gradient-to-b from-primary via-accent to-primary/40 sm:left-[1.375rem]"
              />

              <ol className="relative space-y-0">
                {schedule.map((event, index) => (
                  <li
                    key={event.label}
                    className="details-event relative grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 py-4 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-x-7 sm:py-6"
                  >
                    <div className="relative z-10 flex justify-center pt-1.5">
                      <span className="details-dot flex size-3 items-center justify-center rounded-full bg-primary ring-4 ring-secondary sm:size-4">
                        <span className="size-1 rounded-full bg-primary-foreground sm:size-1.5" />
                      </span>
                    </div>

                    <div
                      className={
                        index === 0
                          ? "min-w-0"
                          : "min-w-0 sm:translate-x-6 lg:translate-x-10"
                      }
                    >
                      <time className="block font-mono text-2xl font-medium tracking-tight text-primary tabular-nums sm:text-4xl">
                        {event.time}
                      </time>
                      <h3 className="mt-1.5 text-lg font-semibold text-secondary-foreground sm:mt-2 sm:text-2xl">
                        {event.label}
                      </h3>
                      <p className="mt-1 text-sm font-medium break-words text-secondary-foreground/90 sm:text-base">
                        {event.place}
                      </p>
                      <p className="mt-1 text-sm break-words text-secondary-foreground/65">
                        {event.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Venue pin + directions */}
            <div className="details-venue mt-8 flex flex-col gap-4 border-t border-secondary-foreground/15 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:pt-8">
              <div className="flex min-w-0 gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-primary"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-secondary-foreground">
                    {venue.name}
                  </p>
                  <p className="mt-0.5 text-sm break-words text-secondary-foreground/70">
                    {venue.address}
                  </p>
                </div>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto sm:justify-start sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:text-primary sm:hover:bg-transparent sm:hover:text-primary/80"
              >
                {details.directionsLabel}
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Map plane — full-bleed on large screens, contained on mobile */}
        <div className="details-map relative w-full min-w-0 px-4 pb-16 sm:px-6 sm:pb-20 lg:min-h-[100vh] lg:px-0 lg:pb-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-28px_rgba(82,26,25,0.45)] ring-1 ring-secondary-foreground/10 sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:rounded-none lg:shadow-none lg:ring-0">
            <iframe
              title={`Map showing ${venue.name}`}
              src={mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[1.05] saturate-[0.85]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Brand-tinted veil so the map sits in the palette */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[#944244]/[0.08] mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
