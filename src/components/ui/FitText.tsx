import React, { useRef, useState, useEffect } from "react";

export interface FitTextProps {
  line1: string;
  line2: string;
  captionText: string;
  isHovered: boolean;
  copied: boolean;
  className?: string;
}

export const FitText: React.FC<FitTextProps> = ({
  line1,
  line2,
  captionText,
  isHovered,
  copied,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureLine1Ref = useRef<HTMLSpanElement>(null);
  const measureLine2Ref = useRef<HTMLSpanElement>(null);

  // Initial font-size estimate to prevent any layout shift during load
  const [fontSize, setFontSize] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const margin = isMobile ? 40 : 80;
      const containerW = window.innerWidth - margin;
      // ~7.8em advance width at 100px reference
      return Math.round(((containerW / 7.8) * 2)) / 2;
    }
    return 100;
  });

  const calculateSize = () => {
    if (!containerRef.current || !measureLine1Ref.current || !measureLine2Ref.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const w1 = measureLine1Ref.current.getBoundingClientRect().width;
    const w2 = measureLine2Ref.current.getBoundingClientRect().width;
    const longest = Math.max(w1, w2);

    if (longest > 0 && containerWidth > 0) {
      // Formula: fontSize = 100 * containerWidth / longestWidth
      const target = (100 * containerWidth) / longest;
      // Round to 0.5px
      const rounded = Math.round(target * 2) / 2;
      setFontSize(rounded);
    }
  };

  useEffect(() => {
    calculateSize();
    if (document.fonts) {
      document.fonts.ready.then(calculateSize);
    }

    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => {
      calculateSize();
    });
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [line1, line2]);

  // Row gap calculation to guarantee the bottom descender of '@' never touches Line 2
  const rowGap = Math.max(8, Math.round(fontSize * 0.08));

  return (
    <div ref={containerRef} className={`w-full select-none ${className}`}>
      {/* Hidden reference measurement elements at exact 100px reference font-size */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 opacity-0 pointer-events-none select-none overflow-hidden"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "100px",
          lineHeight: 0.92,
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          visibility: "hidden",
        }}
      >
        <span ref={measureLine1Ref}>{line1}</span>
        <br />
        <span ref={measureLine2Ref}>{line2}</span>
      </div>

      {/* Main Responsive Fitted Email Display */}
      <div
        className="w-full flex flex-col"
        style={{
          rowGap: `${rowGap}px`,
          fontSize: `${fontSize}px`,
          lineHeight: 0.92,
        }}
      >
        {/* Line 1: Left-aligned (longest line spanning exactly 100% of container) */}
        <div className="overflow-hidden w-full">
          <div className="email-mask-line w-full">
            <span
              className={`block text-left whitespace-nowrap font-display font-black tracking-tight transition-colors duration-200 ${
                isHovered || copied ? "text-signal" : "text-paper"
              }`}
            >
              {line1}
            </span>
          </div>
        </div>

        {/* Line 2: Desktop has caption on the left baseline-aligned, and line2 on the right */}
        <div className="overflow-hidden w-full">
          <div className="email-mask-line w-full flex items-baseline justify-between">
            {/* Desktop caption in the empty space to the left of Line 2 */}
            <span
              className={`hidden md:inline-block font-body text-[14px] leading-none transition-colors duration-200 select-none ${
                copied ? "text-signal" : "text-paper/70"
              }`}
            >
              {captionText}
            </span>

            {/* Mobile placeholder to push Line 2 to the right */}
            <span className="inline-block md:hidden" aria-hidden="true" />

            {/* Line 2 text: Right-aligned */}
            <span
              className={`block text-right whitespace-nowrap font-display font-black tracking-tight transition-colors duration-200 ${
                isHovered || copied ? "text-signal" : "text-paper"
              }`}
            >
              {line2}
            </span>
          </div>
        </div>

        {/* Mobile caption under email */}
        <div className="block md:hidden mt-3 text-left">
          <span
            className={`font-body text-[14px] leading-none transition-colors duration-200 ${
              copied ? "text-signal" : "text-paper/70"
            }`}
          >
            {copied ? "Copied to clipboard" : "Tap to copy"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FitText;
