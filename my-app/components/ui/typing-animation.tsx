"use client";

import { useEffect, useState, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  startDelay?: number;
  onComplete?: () => void;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
  style,
  startDelay = 0,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    setDisplayedText("");

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index < text.length) {
          index += 1;
          setDisplayedText(text.substring(0, index));
        } else {
          if (intervalId) {
            clearInterval(intervalId);
          }
          if (onComplete) {
            onComplete();
          }
        }
      }, duration);
    }, startDelay);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      clearTimeout(timeoutId);
    };
  }, [duration, startDelay, text]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
      style={style}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}

