import { Phone } from "lucide-react";

import { weddingConfig } from "@/config/wedding";

const { couple, footer, siteName } = weddingConfig;
const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="relative isolate shrink-0 overflow-hidden bg-foreground text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_0%,rgba(209,145,136,0.28),transparent_55%),radial-gradient(ellipse_at_80%_100%,rgba(148,66,68,0.4),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-between sm:gap-6 sm:px-6 sm:py-5 sm:text-left">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">
            {footer.eyebrow}
          </p>
          <p className="mt-1 text-sm text-primary-foreground/55">
            {couple.groom} &amp; {couple.bride}
            <span className="mx-1.5 text-accent/50" aria-hidden="true">
              ·
            </span>
            {siteName} {year}
          </p>
        </div>

        <a
          href={`tel:${footer.contact.phoneHref}`}
          className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:border-accent/60 hover:bg-accent/20"
        >
          <span className="font-heading text-base leading-none">
            {footer.contact.name}
          </span>
          <span className="text-accent/50" aria-hidden="true">
            ·
          </span>
          <Phone
            aria-hidden="true"
            className="size-3.5 shrink-0 text-accent transition-transform group-hover:scale-110"
          />
          <span className="tabular-nums">{footer.contact.phone}</span>
        </a>
      </div>
    </footer>
  );
}
