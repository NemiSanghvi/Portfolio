// Shared decorative SVG components that reinforce the drafting-board aesthetic

// Corner measurement bracket
export function CornerBracket({
  size = 24,
  color = "#C0C0C0",
  opacity = 0.35,
  flip = false,
}: {
  size?: number;
  color?: string;
  opacity?: number;
  flip?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        opacity,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <path d="M 0 24 L 0 0 L 24 0" stroke={color} strokeWidth="1" />
    </svg>
  );
}

// Horizontal measurement rule with end ticks
export function MeasurementRule({
  width = 120,
  label,
  color = "#C0C0C0",
  opacity = 0.3,
}: {
  width?: number;
  label?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={width}
      height={20}
      viewBox={`0 0 ${width} 20`}
      fill="none"
      aria-hidden="true"
      style={{ opacity }}
    >
      <line x1="0" y1="10" x2={width} y2="10" stroke={color} strokeWidth="0.75" />
      <line x1="0" y1="4" x2="0" y2="16" stroke={color} strokeWidth="0.75" />
      <line x1={width} y1="4" x2={width} y2="16" stroke={color} strokeWidth="0.75" />
      {label && (
        <text
          x={width / 2}
          y="8"
          textAnchor="middle"
          fill={color}
          fontSize="7"
          fontFamily="monospace"
          letterSpacing="0.08em"
        >
          {label}
        </text>
      )}
    </svg>
  );
}

// Small cross / registration mark
export function CrossMark({
  size = 16,
  color = "#C0C0C0",
  opacity = 0.3,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  const h = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true" style={{ opacity }}>
      <line x1="0" y1={h} x2={size} y2={h} stroke={color} strokeWidth="0.75" />
      <line x1={h} y1="0" x2={h} y2={size} stroke={color} strokeWidth="0.75" />
      <circle cx={h} cy={h} r={h * 0.45} stroke={color} strokeWidth="0.75" />
    </svg>
  );
}

// Section label in engineering annotation style
export function SectionLabel({
  label,
  color = "#8A8A8A",
}: {
  number: string;
  label: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px w-8" style={{ backgroundColor: color, opacity: 0.4 }} />
      <span
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color, letterSpacing: "0.18em" }}
      >
        {label}
      </span>
    </div>
  );
}

// Dashed construction line
export function ConstructionLine({
  vertical = false,
  length = 60,
  color = "#C0C0C0",
  opacity = 0.2,
}: {
  vertical?: boolean;
  length?: number;
  color?: string;
  opacity?: number;
}) {
  return vertical ? (
    <svg width="2" height={length} viewBox={`0 0 2 ${length}`} aria-hidden="true" style={{ opacity }}>
      <line
        x1="1" y1="0" x2="1" y2={length}
        stroke={color}
        strokeWidth="0.75"
        strokeDasharray="4 4"
      />
    </svg>
  ) : (
    <svg width={length} height="2" viewBox={`0 0 ${length} 2`} aria-hidden="true" style={{ opacity }}>
      <line
        x1="0" y1="1" x2={length} y2="1"
        stroke={color}
        strokeWidth="0.75"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

// Amber dot accent
export function AmberDot({ size = 4 }: { size?: number }) {
  return (
    <span
      className="inline-block rounded-full flex-shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: "#D5851F",
      }}
    />
  );
}

