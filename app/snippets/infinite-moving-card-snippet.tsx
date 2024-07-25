"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Outstanding grasp of requirements and professional delivery. A pleasure to work with Yubitech!",
    name: "Silk Route Advisors",
    title: "Consulting Company India",
  },
  {
    quote:
      "Yubitech's professionalism and punctuality in meeting project requirements was exceptional.",
    name: "William S",
    title: "Gym Instructor, Berlin",
  },
  {
    quote: "Yubitech's perfect job, efficient coding, and superb communication made a huge difference. Can't wait for the next project!",
    name: "Edgar",
    title: "Project Manager",
  },
  {
    quote:
      "Demonstrated exceptional delivery quality, with a commendable commitment to resolving issues thoroughly until project completion. My gratitude for their dedicated service.",
    name: "Vincent",
    title: "USA",
  },
  {
    quote:
      "Yubitech showcases not only exceptional expertise in their field but also a remarkable ease of communication. We would definitely consider engaging their services again for future projects. Highly recommended for their professionalism and skill!",
    name: "Mark O",
    title: "Kenya",
  },
];
