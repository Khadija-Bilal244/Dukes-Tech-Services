// DotMotif.jsx
// Decorative connected-node pattern pulled directly from the Dukes Tech
// logo mark. Reused (never as the star of a section, always as an accent)
// so the brand's own visual language ties the page together.

export default function DotMotif({ className = "" }) {
  const dots = [
    [10, 10], [40, 5], [70, 20], [95, 10],
    [20, 40], [55, 45], [85, 50],
    [10, 75], [45, 80], [75, 85], [100, 70],
  ];
  const lines = [
    [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6],
    [1, 5], [4, 7], [5, 8], [8, 9], [6, 10], [9, 10], [7, 8],
  ];

  return (
    <svg
      viewBox="0 0 110 95"
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines.map(([a, b], i) => (
        <line
          key={`l-${i}`}
          x1={dots[a][0]}
          y1={dots[a][1]}
          x2={dots[b][0]}
          y2={dots[b][1]}
          stroke="url(#dukes-dot-gradient)"
          strokeWidth="0.6"
          opacity="0.55"
        />
      ))}
      {dots.map(([x, y], i) => (
        <circle
          key={`d-${i}`}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 2.2 : 1.3}
          fill="url(#dukes-dot-gradient)"
        />
      ))}
      <defs>
        <linearGradient
          id="dukes-dot-gradient"
          x1="0"
          y1="0"
          x2="110"
          y2="95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1CA7B8" />
          <stop offset="1" stopColor="#0E2A43" />
        </linearGradient>
      </defs>
    </svg>
  );
}
