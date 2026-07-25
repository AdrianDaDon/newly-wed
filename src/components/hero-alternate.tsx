"use client";

import * as React from "react";
import { useLottie } from "lottie-react";
import { Menu, X } from "lucide-react";

import ringsAnimation from "@/assets/rings.json";
import { weddingConfig } from "@/config/wedding";
import { CountdownTimer } from "@/components/countdown-timer";
import { DetailsSection } from "@/components/details-section";
import { DressCodeSection } from "@/components/dress-code-section";
import { RsvpSection } from "@/components/rsvp-section";

function RingsLottie() {
  const { View } = useLottie<"canvas">(
    {
      animationData: ringsAnimation,
      loop: false,
      autoplay: true,
      renderer: "canvas",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        clearCanvas: true,
      },
    },
    { width: "100%", height: "100%" },
  );

  return (
    <div className="h-full w-full scale-[1.55] origin-center [&_canvas]:h-full! [&_canvas]:w-full!">
      {View}
    </div>
  );
}

export function HeroAlternate() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { couple, navigation, siteName } = weddingConfig;

  return (
    <div className="relative bg-background">
      {/* Floating navigation */}
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-border bg-background/70 px-4 py-2.5 shadow-lg backdrop-blur-md sm:gap-4 sm:px-6 sm:py-3 lg:px-8"
        >
          <div className="flex min-w-0 lg:flex-1">
            <a
              href="#home"
              className="-m-1.5 truncate p-1.5 text-base font-semibold tracking-tight text-foreground sm:text-lg"
            >
              <span className="sr-only">{siteName}</span>
              {siteName}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex size-11 items-center justify-center rounded-md text-foreground"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-foreground hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#rsvp"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90"
            >
              RSVP
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
              <div className="flex items-center justify-between gap-4">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-1.5 truncate p-1.5 text-lg font-semibold tracking-tight text-foreground"
                >
                  <span className="sr-only">{siteName}</span>
                  {siteName}
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-foreground"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-3 text-base/7 font-semibold text-foreground hover:bg-muted"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#rsvp"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-3 text-base/7 font-semibold text-foreground hover:bg-muted"
                    >
                      RSVP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Home — photo background */}
      <section
        id="home"
        className="snap-section relative isolate flex items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8"
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <img
            src="/couple.jpeg"
            alt=""
            className="h-full w-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="mx-auto flex w-full max-w-2xl min-w-0 flex-col items-center text-center">
          <div className="aspect-square w-[min(100%,8.5rem)] overflow-visible sm:w-[11rem]">
            <RingsLottie />
          </div>
          <h1 className="mt-6 w-full  text-4xl font-semibold tracking-tight text-balance break-words text-foreground sm:mt-10 sm:text-7xl">
            <span className="name-groom inline-block">{couple.groom}</span>{" "}
            <span className="name-amp text-primary">&amp;</span>{" "}
            <span className="name-bride inline-block">{couple.bride}</span>
          </h1>
          <p className="mt-5 max-w-xl px-1 text-base font-medium text-pretty text-muted-foreground italic sm:mt-8 sm:text-xl/8">
            {weddingConfig.tagline}
          </p>
          <div className="mt-8 w-full sm:mt-12">
            <CountdownTimer targetDate={weddingConfig.date} />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-12">
            <a
              href="#rsvp"
              className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              RSVP
            </a>
            <a
              href="#details"
              className="inline-flex min-h-11 items-center text-sm/6 font-semibold text-foreground hover:text-primary"
            >
              View details <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <DetailsSection />

      <DressCodeSection />

      <RsvpSection />
    </div>
  );
}
