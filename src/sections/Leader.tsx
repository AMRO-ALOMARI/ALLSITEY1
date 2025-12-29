import React from "react";
import type { SectionId } from "../App";
import { EyeLogo } from "../components/EyeLogo";
import { OrbitGraph } from "../components/OrbitGraph";

type Props = {
  onNavigate: (s: SectionId) => void;
  activeMember: number | null;
};

export const Leader: React.FC<Props> = ({ onNavigate, activeMember }) => {
  return (
    <section className="fullscreen-center">
      <div style={{ marginBottom: "3rem" }}>
        <EyeLogo size={220} />
      </div>
      <div style={{ textAlign: "center", maxWidth: 500 }}>
        <p
          style={{
            fontSize: "0.95rem",
            letterSpacing: "0.3em",
            lineHeight: 2,
            marginBottom: "2rem",
          }}
        >
          There is no eleventh member.
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            letterSpacing: "0.25em",
            opacity: 0.9,
          }}
        >
          There is only the Eye.
        </p>
      </div>

      <OrbitGraph activeMember={activeMember} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <div
          onClick={() => onNavigate("eye")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "20%",
            height: "100%",
            pointerEvents: "auto",
          }}
        />
        <div
          onClick={() => onNavigate("members")}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "30%",
            height: "20%",
            pointerEvents: "auto",
          }}
        />
      </div>
    </section>
  );
};


