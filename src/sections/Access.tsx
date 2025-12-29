import React, { FormEvent, useState } from "react";
import type { SectionId } from "../App";

type Props = {
  onNavigate: (s: SectionId) => void;
};

export const Access: React.FC<Props> = ({ onNavigate }) => {
  const [locked, setLocked] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (locked) return;
    setLocked(true);
    setMessageVisible(true);
    setTimeout(() => {
      onNavigate("leader");
    }, 1500);
  };

  return (
    <section className="fullscreen-center">
      <div style={{ maxWidth: 600, textAlign: "center" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              lineHeight: 2,
              marginBottom: "1rem",
              opacity: 0.8,
            }}
          >
            Access is not requested.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              letterSpacing: "0.2em",
            }}
          >
            It is granted retroactively.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ marginTop: "3rem" }}>
          <input
            type="text"
            className="input-field"
            placeholder="[ ENTER IDENTIFIER ]"
            required
            disabled={locked}
            style={{
              marginBottom: "2rem",
              opacity: locked ? 0.6 : 1,
              cursor: locked ? "not-allowed" : "text",
            }}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{ marginBottom: "1rem" }}
          >
            SUBMIT TO OBSERVATION
          </button>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "var(--dark-blood)",
              opacity: messageVisible ? 1 : 0,
              transition: "opacity 0.5s ease",
              minHeight: "1.5rem",
            }}
          >
            Identifier recorded.
          </div>
        </form>
      </div>
    </section>
  );
};


