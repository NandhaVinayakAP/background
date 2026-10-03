"use client";

import HalideLanding from "@/components/demo";
import { TimelineDemo } from "@/components/demo1";
import { useScrollY, useViewportHeight } from "@/lib/hooks";

export default function Home() {
  const scrollY = useScrollY();
  const viewportHeight = useViewportHeight();

  return (
    <div className="relative">
      <div 
        className="fixed inset-0"
        style={{ transform: `translateY(${-scrollY}px)` }}
      >
        <HalideLanding />
      </div>
      <div 
        className="relative"
        style={{ marginTop: `${viewportHeight}px` }}
      >
        <TimelineDemo />
      </div>
    </div>
  );
}
