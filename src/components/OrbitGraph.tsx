import React from "react";
import { members } from "../data/members";

type Props = {
  activeMember: number | null;
};

export const OrbitGraph: React.FC<Props> = ({ activeMember }) => {
  const radius = 80;
  const center = 100;

  return (
    <div
      style={{
        marginTop: "3rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        width={220}
        height={220}
        style={{ overflow: "visible" }}
      >
        {/* outer ring */}
        <circle
          cx={center}
          cy={center}
          r={radius + 14}
          fill="none"
          stroke="rgba(245,245,240,0.15)"
          strokeWidth={1}
        />

        {/* threads from each entity to the Eye */}
        {members.map((m, index) => {
          const angle = (index / members.length) * Math.PI * 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const isActive = activeMember === m.id;
          return (
            <line
              key={`thread-${m.id}`}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke={isActive ? m.color : "rgba(245,245,240,0.15)"
              }
              strokeWidth={isActive ? 1.5 : 0.6}
              strokeDasharray={isActive ? "0" : "3 4"}
            />
          );
        })}

        {/* Eye in center */}
        <circle
          cx={center}
          cy={center}
          r={16}
          fill="none"
          stroke="rgba(245,245,240,0.4)"
          strokeWidth={1}
        />
        <circle cx={center} cy={center} r={7} fill="var(--dark-blood)" />

        {/* entities around the orbit */}
        {members.map((m, index) => {
          const angle = (index / members.length) * Math.PI * 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const isActive = activeMember === m.id;

          return (
            <g key={m.id}>
              <circle
                cx={x}
                cy={y}
                r={isActive ? 5 : 3}
                fill={isActive ? m.color : "rgba(245,245,240,0.7)"}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

