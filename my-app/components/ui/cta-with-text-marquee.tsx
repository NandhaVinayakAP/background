"use client";

import { cn } from "@/lib/utils";
import type React from "react";
import { ReactNode, useEffect, useRef } from "react";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
  onItemsRef?: (items: HTMLElement[]) => void;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(
        containerRef.current.querySelectorAll(".marquee-item"),
      ) as HTMLElement[];
      onItemsRef(items);
    }
  }, [onItemsRef]);

  return (
    <div
      ref={containerRef}
      className={cn("group flex flex-col overflow-hidden", className)}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Founder of NV Marketing Agencies",
  "Founder of NV Social Manage",
  "Founder of NV Realestates",
  "Founder of NV AI Automation Agency",
  "Founder of DogsClothing",
];

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="text-foreground flex items-start justify-end px-6 pt-70 pb-12">
      <div className="w-full max-w-sm animate-fade-in-up mr-0 lg:mr-56 xl:mr-72 2xl:mr-10">
        <div
          ref={marqueeRef}
          className="relative h-[200px] lg:h-[250px] flex items-center justify-center animate-fade-in-up [animation-delay:400ms]"
        >
          <div className="relative w-full h-full">
            <VerticalMarquee speed={10} className="h-full">
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-tight py-2 marquee-item"
                >
                  {item}
                </div>
              ))}
            </VerticalMarquee>

            <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent z-10"></div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

