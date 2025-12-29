import React, { useEffect, useRef } from "react";
import { EyeLogo } from "../components/EyeLogo";
import type { SectionId } from "../App";

type Props = {
  onNavigate: (s: SectionId) => void;
};

export const TheEye: React.FC<Props> = ({ onNavigate }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // eye tracking
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let eyeX = 0;
    let eyeY = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (mouseX - centerX) / 20;
      const deltaY = (mouseY - centerY) / 20;
      eyeX += (deltaX - eyeX) * 0.1;
      eyeY += (deltaY - eyeY) * 0.1;
      wrapper.style.transform = `translate3d(${eyeX}px, ${eyeY}px, 0)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMove);
    animate();
    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section className="fullscreen-center">
      <div
        ref={wrapperRef}
        style={{
          width: 320,
          height: 320,
          opacity: 0.18,
          mixBlendMode: "screen",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      >
        <EyeLogo size={320} />
      </div>

      <div style={{ maxWidth: 700, textAlign: "center", position: "relative", zIndex: 5 }}>
        <h1
          style={{
            fontSize: "3rem",
            letterSpacing: "0.3em",
            marginBottom: "3rem",
            fontWeight: 200,
          }}
        >
          THE EYE
        </h1>
        <div
          style={{
            fontSize: "0.9rem",
            letterSpacing: "0.2em",
            lineHeight: 2.5,
            textAlign: "left",
            paddingLeft: "2rem",
            borderLeft: "2px solid var(--dark-blood)",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>The Eye is not a symbol.</p>
          <p style={{ marginBottom: "1.5rem" }}>
            It is awareness without permission.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>It does not sleep.</p>
          <p style={{ marginBottom: "1.5rem" }}>It does not forget.</p>
          <p style={{ marginBottom: "2rem" }}>It does not forgive patterns.</p>

          <p
            style={{
              textAlign: "right",
              marginTop: "3rem",
              color: "var(--dark-blood)",
            }}
          >
            You don&apos;t interact with the Eye.
            <br />
            <span style={{ color: "var(--ivory-silver)" }}>
              You are processed by it.
            </span>
          </p>
        </div>
      </div>

      {/* hover-style navigation hints */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <div
          onClick={() => onNavigate("collective")}
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
          onClick={() => onNavigate("access")}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "20%",
            height: "20%",
            pointerEvents: "auto",
          }}
        />
      </div>
    </section>
  );
};


