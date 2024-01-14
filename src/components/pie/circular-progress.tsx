import { useEffect, useState } from 'react';

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

export type CircleProps = {
  colour: string;
  pct?: number;
};

const Circle = ({ colour, pct = 0 }: CircleProps) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;

  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      style={{
        transition: 'all 0.7s ease-in-out',
      }}
      fill="transparent"
      stroke={strokePct !== circ ? colour : '#E3E8EF'} // remove colour as 0% sets full circumference
      strokeWidth="8px"
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

type TextProps = {
  percentage: number;
  fontSize: number;
};

const Text = ({ percentage, fontSize }: TextProps) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fill="#364152"
      fontSize={fontSize}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

type PieProps = {
  percentage: number;
  className?: string;
  size?: number;
  fontSize?: number;
};

const Pie = ({
  percentage,
  className,
  size = 100,
  fontSize = 40,
}: PieProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  const pct = cleanPercentage(progress);

  return (
    <div className={className}>
      <svg width={size} height={size} viewBox="0 0 200 200">
        <g transform={`rotate(-90 ${'100 100'})`}>
          <Circle colour="lightgrey" />
          <Circle colour="#0C9587" pct={pct} />
        </g>
        <Text fontSize={fontSize} percentage={pct} />
      </svg>
    </div>
  );
};

export default Pie;
