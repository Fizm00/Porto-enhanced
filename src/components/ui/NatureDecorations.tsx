import React from "react";

export interface NatureDecorationProps {
  className?: string;
  opacity?: number;
}

/**
 * 1. TopographicDecoration (WorkIndex background)
 * Minimalist 2D topographic elevation contours evoking mountain ridges & terrain landscape.
 */
export const TopographicDecoration: React.FC<NatureDecorationProps> = ({
  className = "text-ink/[0.07]",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ridge Peak 1 (Upper Right Contour Loop) */}
        <path
          d="M1150 180 C1190 140, 1260 140, 1300 190 C1340 240, 1310 310, 1260 340 C1210 370, 1140 330, 1120 280 C1100 230, 1110 220, 1150 180 Z"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* Contour 2 */}
        <path
          d="M1090 130 C1160 80, 1320 80, 1380 160 C1440 240, 1400 370, 1320 420 C1240 470, 1080 430, 1040 330 C1000 230, 1020 180, 1090 130 Z"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* Contour 3 */}
        <path
          d="M1010 80 C1120 20, 1380 20, 1450 120 C1520 220, 1480 440, 1370 510 C1260 580, 1010 520, 950 390 C890 260, 900 140, 1010 80 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
        />
        {/* Contour 4 - Expansive Terrain Curve */}
        <path
          d="M860 40 C1020 -30, 1340 -20, 1480 80 C1590 180, 1540 500, 1420 600 C1300 700, 950 630, 840 450 C730 270, 700 110, 860 40 Z"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* Contour 5 - Long Sweeping Basin Ridge */}
        <path
          d="M-50 780 C180 720, 420 850, 720 790 C1020 730, 1240 860, 1490 810"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-60 710 C190 640, 440 780, 740 710 C1040 640, 1260 770, 1500 720"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-70 640 C200 560, 460 700, 760 630 C1060 550, 1280 690, 1510 630"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-80 570 C210 480, 480 620, 780 550 C1080 470, 1300 610, 1520 540"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-90 490 C230 400, 500 540, 810 470 C1100 390, 1330 520, 1530 460"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

/**
 * 2. BotanicalVeinDecoration (Skills section background)
 * Minimalist 2D botanical leaf vein curves & branching organic lattice for dark ink background.
 */
export const BotanicalVeinDecoration: React.FC<NatureDecorationProps> = ({
  className = "text-paper/[0.06]",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 1000"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary Central Stem Curve */}
        <path
          d="M-100 1050 C280 820, 680 560, 1080 240 C1280 80, 1420 -20, 1520 -80"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Lateral Branching Veins (Right Side Arches) */}
        <path
          d="M260 830 C420 780, 640 820, 860 880 C1080 940, 1300 920, 1490 850"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M480 690 C660 620, 920 660, 1160 740 C1320 790, 1440 800, 1520 790"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M720 520 C920 440, 1180 480, 1390 560 C1460 590, 1510 610, 1550 630"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M930 350 C1110 270, 1320 290, 1480 360 C1520 380, 1550 400, 1580 420"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
        />

        {/* Lateral Branching Veins (Left Side Arches) */}
        <path
          d="M260 830 C180 660, 120 480, 80 280 C60 180, 50 80, 40 -20"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M480 690 C380 510, 310 340, 260 170 C240 90, 230 10, 220 -60"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M720 520 C590 350, 510 200, 460 40 C440 -30, 430 -90, 420 -140"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M930 350 C800 200, 720 70, 680 -60"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Delicate Organic Nodes (Tiny Leaf Nodes) */}
        <circle cx="260" cy="830" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="480" cy="690" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="720" cy="520" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="930" cy="350" r="3" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
};

/**
 * 3. RiverFlowDecoration (Beyond the work background)
 * Minimalist 2D flowing water currents / river meander lines for paper background.
 */
export const RiverFlowDecoration: React.FC<NatureDecorationProps> = ({
  className = "text-ink/[0.06]",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* River Current Stream 1 */}
        <path
          d="M-80 180 C220 90, 480 280, 820 160 C1160 40, 1340 220, 1540 140"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        {/* River Current Stream 2 */}
        <path
          d="M-80 240 C230 150, 490 340, 830 220 C1170 100, 1350 280, 1540 200"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* River Current Stream 3 (Dashed Ripple) */}
        <path
          d="M-80 300 C240 210, 500 400, 840 280 C1180 160, 1360 340, 1540 260"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 8"
          vectorEffect="non-scaling-stroke"
        />
        {/* River Current Stream 4 */}
        <path
          d="M-80 360 C250 270, 510 460, 850 340 C1190 220, 1370 400, 1540 320"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Lower Delta Meanders */}
        <path
          d="M-60 620 C260 720, 580 560, 920 680 C1220 780, 1380 660, 1560 740"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-60 680 C270 780, 590 620, 930 740 C1230 840, 1390 720, 1560 800"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-60 740 C280 840, 600 680, 940 800 C1240 900, 1400 780, 1560 860"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

/**
 * 4. HorizonZenDecoration (Contact section background)
 * Minimalist 2D tranquil horizon / dune arcs for dark ink background.
 */
export const HorizonZenDecoration: React.FC<NatureDecorationProps> = ({
  className = "text-paper/[0.04]",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Distant Rolling Dunes / Horizon Arcs */}
        <path
          d="M-100 880 C240 820, 640 840, 1020 790 C1280 750, 1440 710, 1560 680"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-100 930 C280 870, 720 890, 1100 840 C1320 800, 1460 770, 1560 750"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-100 980 C320 920, 800 940, 1180 890 C1360 850, 1480 830, 1560 820"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5 7"
          vectorEffect="non-scaling-stroke"
        />

        {/* Quiet Zen Concentric Sun/Horizon Arch in Top Corner */}
        <path
          d="M1300 -60 C1300 120, 1420 220, 1560 220"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1240 -80 C1240 160, 1400 280, 1580 280"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1180 -100 C1180 200, 1380 340, 1600 340"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};
