import React from "react";
import { beyondContent } from "../../content/personal.ts";

interface BeyondProps {
  className?: string;
}

export const Beyond: React.FC<BeyondProps> = ({ className = "" }) => {
  const { title, hobbies, photos, blocks, rightNow } = beyondContent;

  // Repeat hobbies list 4 times for a seamless marquee loop
  const marqueeItems = [...hobbies, ...hobbies, ...hobbies, ...hobbies];

  return (
    <section
      id="beyond"
      className={`w-full bg-paper text-ink overflow-hidden py-24 md:py-32 ${className}`}
      style={{ backgroundColor: "#F2EFE8", color: "#0E0E0E" }}
      aria-label="Beyond the work"
    >
      {/* 1. TITLE: Big Shoulders Display 900, ~10vw, ink, left-aligned */}
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 mb-10">
        <h2 className="font-display font-black text-ink text-[10vw] uppercase leading-[0.85] tracking-tight">
          {title}
        </h2>
      </div>

      {/* 2. MARQUEE: 40px below title, giant display type running edge-to-edge, ~12vw, ink, skewed -3deg */}
      <div className="w-full overflow-hidden py-4 md:py-8 my-2">
        <div
          className="w-full select-none"
          style={{ transform: "skewY(-3deg)" }}
        >
          <div className="animate-marquee-infinite flex items-center whitespace-nowrap">
            {marqueeItems.map((hobby, index) => (
              <span
                key={index}
                className="inline-flex items-center font-display font-black text-[12vw] uppercase leading-none tracking-tight text-ink"
              >
                <span>{hobby}</span>
                {/* The slash is Signal color (#FF4A1C) and is the ONLY Signal use on this screen */}
                <span
                  className="text-signal px-4 md:px-8 font-black"
                  style={{ color: "#FF4A1C" }}
                  aria-hidden="true"
                >
                  /
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3 & 4. 64px below marquee: 12-column grid layout */}
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-12 items-start">
          {/* LEFT: Columns 1-7 - Collage of five hard-cropped B&W photos */}
          <div className="lg:col-span-7 flex flex-col space-y-12 md:space-y-14">
            {/* PAIR 1 (Top): Photo 1 (Gunpla bench) & Photo 2 (Tugu Yogyakarta) */}
            <div className="relative w-full flex items-start justify-between">
              {/* Photo 1: Left, landscape rectangle */}
              <div className="w-[56%] z-10 pt-10 sm:pt-14 md:pt-16">
                <img
                  src={photos[0].src}
                  alt={photos[0].alt}
                  className="w-full h-auto aspect-[4/3] object-cover rounded-none grayscale contrast-110"
                  loading="lazy"
                />
                <p className="mt-3 font-body text-[14px] leading-snug text-ink">
                  {photos[0].caption}
                </p>
              </div>

              {/* Photo 2: Right, tall portrait rectangle, overlapping Photo 1 horizontally by up to 24px */}
              <div className="w-[48%] -ml-6 z-20">
                <img
                  src={photos[1].src}
                  alt={photos[1].alt}
                  className="w-full h-auto aspect-[3/4] object-cover rounded-none grayscale contrast-110"
                  loading="lazy"
                />
                <p className="mt-3 font-body text-[14px] leading-snug text-ink">
                  {photos[1].caption}
                </p>
              </div>
            </div>

            {/* PAIR 2 (Middle): Photo 3 (Morning pour-over) & Photo 4 (Braided IEM cable) */}
            <div className="relative w-full flex items-start">
              {/* Photo 3: Left, wide landscape */}
              <div className="w-[52%] z-10">
                <img
                  src={photos[2].src}
                  alt={photos[2].alt}
                  className="w-full h-auto aspect-[16/10] object-cover rounded-none grayscale contrast-110"
                  loading="lazy"
                />
                <p className="mt-3 font-body text-[14px] leading-snug text-ink">
                  {photos[2].caption}
                </p>
              </div>

              {/* Photo 4: Right, shifted down slightly, overlapping Photo 3 by up to 24px */}
              <div className="w-[52%] -ml-5 pt-8 sm:pt-10 z-20">
                <img
                  src={photos[3].src}
                  alt={photos[3].alt}
                  className="w-full h-auto aspect-[16/10] object-cover rounded-none grayscale contrast-110"
                  loading="lazy"
                />
                <p className="mt-3 font-body text-[14px] leading-snug text-ink">
                  {photos[3].caption}
                </p>
              </div>
            </div>

            {/* SINGLE (Bottom): Photo 5 (Drafting desk and 68-key board) */}
            <div className="w-full sm:w-[82%] z-10">
              <img
                src={photos[4].src}
                alt={photos[4].alt}
                className="w-full h-auto aspect-[3/4] object-cover rounded-none grayscale contrast-110"
                loading="lazy"
              />
              <p className="mt-3 font-body text-[14px] leading-snug text-ink">
                {photos[4].caption}
              </p>
            </div>
          </div>

          {/* RIGHT: Columns 8-12 - Three narrative blocks + fourth 'Right now' block */}
          <div className="lg:col-span-5 flex flex-col space-y-12 lg:space-y-16">
            {/* Block 1: Precision Craft */}
            <div className="border-t border-ink pt-5">
              <h3 className="font-display font-extrabold text-[40px] lg:text-[48px] uppercase leading-none text-ink">
                {blocks[0].title}
              </h3>
              <p className="mt-4 font-body text-[18px] lg:text-[22px] leading-[1.45] text-ink">
                {blocks[0].paragraph}
              </p>
            </div>

            {/* Block 2: Daily Transit */}
            <div className="border-t border-ink pt-5">
              <h3 className="font-display font-extrabold text-[40px] lg:text-[48px] uppercase leading-none text-ink">
                {blocks[1].title}
              </h3>
              <p className="mt-4 font-body text-[18px] lg:text-[22px] leading-[1.45] text-ink">
                {blocks[1].paragraph}
              </p>
            </div>

            {/* Block 3: Acoustics & Extraction */}
            <div className="border-t border-ink pt-5">
              <h3 className="font-display font-extrabold text-[40px] lg:text-[48px] uppercase leading-none text-ink">
                {blocks[2].title}
              </h3>
              <p className="mt-4 font-body text-[18px] lg:text-[22px] leading-[1.45] text-ink">
                {blocks[2].paragraph}
              </p>
            </div>

            {/* Block 4: Right now */}
            <div className="border-t border-ink pt-5">
              <h3 className="font-display font-extrabold text-[40px] lg:text-[48px] uppercase leading-none text-ink">
                {rightNow.title}
              </h3>
              <div className="mt-4 space-y-2 font-body text-[18px] lg:text-[22px] leading-[1.45] text-ink">
                {rightNow.items.map((item, idx) => (
                  <p key={idx}>
                    {item.label}: {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beyond;
