"use client";

import * as React from "react";
import { useLottie } from "lottie-react";
import { Menu, X } from "lucide-react";

import ringsAnimation from "@/assets/rings.json";
import { weddingConfig } from "@/config/wedding";
import { CountdownTimer } from "@/components/countdown-timer";

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

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { couple, navigation, siteName } = weddingConfig;

  return (
    <div className="relative bg-background">
      {/* Floating navigation */}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-border bg-background/70 px-6 py-3 shadow-lg backdrop-blur-md lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a
              href="#home"
              className="-m-1.5 p-1.5 text-lg font-semibold tracking-tight text-foreground"
            >
              <span className="sr-only">{siteName}</span>
              {siteName}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
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
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
              <div className="flex items-center justify-between">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-1.5 p-1.5 text-lg font-semibold tracking-tight text-foreground"
                >
                  <span className="sr-only">{siteName}</span>
                  {siteName}
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-muted"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#rsvp"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-foreground hover:bg-muted"
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

      {/* Home */}
      <section
        id="home"
        className="relative isolate flex min-h-screen items-center justify-center px-6 pt-28 pb-16 lg:px-8"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#D19188] to-[#944244] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="aspect-square w-[min(100%,10rem)] overflow-visible sm:w-[11rem]">
            <RingsLottie />
          </div>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-balance text-foreground sm:mt-10 sm:text-7xl">
            <span className="name-groom inline-block">{couple.groom}</span>{" "}
            <span className="name-amp text-primary">&amp;</span>{" "}
            <span className="name-bride inline-block">{couple.bride}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium text-pretty text-muted-foreground sm:mt-8 sm:text-xl/8">
            {weddingConfig.tagline}
          </p>
          <div className="mt-10 sm:mt-12">
            <CountdownTimer targetDate={weddingConfig.date} />
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 sm:mt-12">
            <a
              href="#rsvp"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              RSVP
            </a>
            <a
              href="#details"
              className="text-sm/6 font-semibold text-foreground hover:text-primary"
            >
              View details <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#D19188] to-[#944244] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>

      {/* Details */}
      <section
        id="details"
        className="flex h-screen scroll-mt-20 items-center justify-center bg-secondary px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center text-secondary-foreground">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Details
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Everything you need to know about the day.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl bg-background/60 p-8 text-left">
              <h3 className="text-xl font-semibold text-foreground">
                Ceremony
              </h3>
              <p className="mt-2 text-muted-foreground">
                {weddingConfig.ceremony.time} ·{" "}
                {weddingConfig.ceremony.location}
                <br />
                {weddingConfig.ceremony.address}
              </p>
            </div>
            <div className="rounded-2xl bg-background/60 p-8 text-left">
              <h3 className="text-xl font-semibold text-foreground">
                Reception
              </h3>
              <p className="mt-2 text-muted-foreground">
                {weddingConfig.reception.time} ·{" "}
                {weddingConfig.reception.location}
                <br />
                {weddingConfig.reception.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section
        id="dress-code"
        className="flex h-screen scroll-mt-20 items-center justify-center px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Dress Code
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {weddingConfig.dressCode.description}
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            {weddingConfig.dressCode.colors.map((hex) => (
              <div key={hex} className="flex flex-col items-center gap-2">
                <div
                  className="size-16 rounded-full ring-1 ring-border"
                  style={{ backgroundColor: hex }}
                />
                <span className="text-xs text-muted-foreground">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="flex h-screen scroll-mt-20 items-center justify-center bg-primary px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center text-primary-foreground">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            RSVP
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            {weddingConfig.rsvp.message}
          </p>
          <div className="mt-10">
            <a
              href={`mailto:${weddingConfig.rsvp.email}`}
              className="rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-xs hover:bg-background/90"
            >
              Respond now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
