import React, { useEffect, useRef } from "react";
import { EyeLogo } from "../components/EyeLogo";

type Props = {
  onEnter: () => void;
};

export const LandingRitual: React.FC<Props> = ({ onEnter }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const text =
      "You are not here by accident.\n\nWe do not recruit.\nWe observe.\n\nIf you are seeing this,\nthe Eye already knows you.";
    let i = 0;
    el.innerHTML = "";

    const type = () => {
      if (!el) return;
      if (i < text.length) {
        const safe = text.substring(0, i + 1).replace(/\n/g, "<br/>");
        el.innerHTML = safe + '<span class="cursor-blink">|</span>';
        i++;
        const randomDelay = 30 + Math.random() * 40;
        setTimeout(type, randomDelay);
      } else {
        el.innerHTML = text.replace(/\n/g, "<br/>") + '<span class="cursor-blink">|</span>';
      }
    };

    const id = setTimeout(type, 800);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="fullscreen-center">
      <div className="logo-container fade-in" style={{ animationDelay: "1s", opacity: 0 }}>
        <EyeLogo size={200} />
        <div className="logo-text" style={{ marginTop: "1.5rem" }}>
          ALLSITEY
        </div>
      </div>

      <div
        className="fade-in"
        style={{
          maxWidth: 600,
          marginTop: "3rem",
          textAlign: "center",
          animationDelay: "2s",
          opacity: 0,
        }}
      >
        <div
          ref={textRef}
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            lineHeight: 2,
            minHeight: "5rem",
          }}
        />
      </div>

      <div
        className="fade-in"
        style={{ marginTop: "4rem", animationDelay: "4.5s", opacity: 0 }}
      >
        <button className="btn-primary" onClick={onEnter}>
          ENTER UNDER OBSERVATION
        </button>
      </div>
    </section>
  );
};


