"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const calculateTimeLeft = useCallback((target: Date): TimeLeft => {
    const now = new Date();
    const distance = target.getTime() - now.getTime();

    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []);

  useEffect(() => {
    const target = new Date(targetDate);

    if (isNaN(target.getTime())) {
      console.error("Invalid target date:", targetDate);
      return;
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimeLeft(calculateTimeLeft(target));

    timerRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [targetDate, calculateTimeLeft]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const TimeDisplay = ({ value, label }: { value: number; label: string }) => (
    <div className="min-w-0 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80 shadow-sm backdrop-blur-sm sm:h-16 sm:w-16 md:h-20 md:w-20">
        <span className="text-lg font-bold text-foreground sm:text-2xl md:text-4xl">
          {formatNumber(value)}
        </span>
      </div>
      <div className="mt-1.5 text-[0.65rem] font-medium text-muted-foreground sm:mt-2 sm:text-sm md:text-base">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex w-full max-w-full items-center justify-center gap-2 sm:gap-3 md:gap-6">
      <TimeDisplay value={timeLeft.days} label="Days" />
      <TimeDisplay value={timeLeft.hours} label="Hours" />
      <TimeDisplay value={timeLeft.minutes} label="Minutes" />
      <TimeDisplay value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
