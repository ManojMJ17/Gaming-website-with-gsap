"use client";
import clsx from "clsx";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitlerProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle: React.FC<AnimatedTitlerProps> = ({
  title,
  containerClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "center 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Define the animation for ".animated-word"
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.05, // Slightly increase the stagger for visibility
        },
        0
      );
    }, container);

    // Force recalibration of ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    }; // Clean up on unmount
  }, [title]); // Re-run effect if the title changes

  return (
    <div
      ref={containerRef}
      className={clsx("animated-title z-30", containerClass)}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
