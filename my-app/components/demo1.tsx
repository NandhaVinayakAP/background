import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            I'm a multi-domain entrepreneur, Founder, and Full Stack Developer. My
            journey started with business before code — and curiosity before
            strategy.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            From building a small reselling business in 2015 to exploring technology
            out of pure interest in 2018, I've always been driven by one thing:
            understanding systems — how they work, how they scale, and how they
            create value.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Today, I build across industries:
          </p>
          <ul className="list-disc list-inside text-neutral-100 text-base md:text-lg space-y-1">
            <li>DogsClothing.com</li>
            <li>NV Marketing Agencies</li>
            <li>NV Social Manage</li>
            <li>NV Realestates</li>
            <li>NV AI Automation Agency</li>
          </ul>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Technology is my tool. Business is my playground. Systems are my focus.
            Everything I build is a stepping stone toward something bigger.
          </p>
        </div>
      ),
    },
    {
      title: "2015 — The Beginning",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Started with a small reselling business. This was my first exposure to
            risk, margins, negotiation, and market behavior.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Entrepreneurship stopped being a concept and became real experience.
          </p>
        </div>
      ),
    },
    {
      title: "2018 — Curiosity Meets Code",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Began learning programming out of pure interest in technology — not for
            a job, but to understand how systems are built.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Explored C, C++, Java, Python, JavaScript, HTML, CSS, and SQL to build
            a foundation across the stack.
          </p>
        </div>
      ),
    },
    {
      title: "2018–2022 — Exploration Phase",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Dove deep into multiple domains: AI, web development, automation,
            backend systems, and business process optimization.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            This was a period of experimentation and intense learning. I wasn’t just
            coding — I was studying infrastructure, scalability, and how systems
            behave under growth.
          </p>
        </div>
      ),
    },
    {
      title: "2020 — NV Marketing Agencies",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Founded NV Marketing Agencies, focusing on digital growth systems,
            campaign strategy, and client acquisition frameworks.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Treated marketing as an engineered system — measurable, repeatable, and
            scalable.
          </p>
        </div>
      ),
    },
    {
      title: "2021 — NV Social Manage",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Launched NV Social Manage to build structured social media execution
            models and brand positioning systems.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Focused on turning content and distribution into predictable workflows.
          </p>
        </div>
      ),
    },
    {
      title: "2022 — NV Realestates",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Expanded into real estate with NV Realestates.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Applied business discipline, marketing intelligence, and systems
            thinking to a new asset class and industry.
          </p>
        </div>
      ),
    },
    {
      title: "2024 — Scaling Year",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            A major scaling year across existing ventures.
          </p>
          <ul className="list-disc list-inside text-neutral-100 text-base md:text-lg space-y-1">
            <li>Refined operations.</li>
            <li>Optimized systems.</li>
            <li>Strengthened execution.</li>
          </ul>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            This marked the shift from building foundations to building leverage.
          </p>
        </div>
      ),
    },
    {
      title: "2025 — NV AI Automation Agency",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Launched NV AI Automation Agency.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Focused on integrating AI and automation into business workflows —
            bridging technology and enterprise efficiency.
          </p>
        </div>
      ),
    },
    {
      title: "Direction",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            Every venture, every skill, every experiment is part of a larger
            trajectory. I’m not building isolated businesses — I’m building
            capability.
          </p>
          <p className="text-neutral-100 text-base md:text-lg font-normal">
            This is only the early phase. The systems I&apos;m building now are
            foundations for much bigger structures ahead.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ backgroundColor: "var(--bg, #0a0a0a)" }}
    >
      <div className="relative flex-1">
        <div className="absolute top-0 left-0 w-full">
          <Timeline data={data} />
        </div>
      </div>
      <footer className="w-full border-t border-neutral-800 px-6 py-4 text-neutral-500 text-xs md:text-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-neutral-400">
            © {new Date().getFullYear()} NV — Building systems, not just businesses.
          </p>
          <p className="text-neutral-500 text-[11px] md:text-xs">
            TimelineDemo • Multi-domain journey across marketing, real estate, and AI automation.
          </p>
        </div>
      </footer>
    </div>
  );
}
