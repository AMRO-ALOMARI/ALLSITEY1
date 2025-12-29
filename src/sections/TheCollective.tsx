import React from "react";
import type { SectionId } from "../App";

type Props = {
  onNavigate: (s: SectionId) => void;
};

export const TheCollective: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="fullscreen-center">
      <div style={{ maxWidth: 800, textAlign: "center" }}>
        <div
          style={{
            fontSize: "1.1rem",
            letterSpacing: "0.25em",
            lineHeight: 2.5,
            marginBottom: "4rem",
          }}
        >
          <p style={{ marginBottom: "3rem" }}>
            <span style={{ fontWeight: 500 }}>ALLSITEY</span> is a closed
            intelligence structure.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "4rem 0",
              padding: "2rem 0",
              borderTop: "1px solid rgba(245,245,240,0.2)",
              borderBottom: "1px solid rgba(245,245,240,0.2)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "4rem",
                  fontWeight: 200,
                  color: "var(--dark-blood)",
                  lineHeight: 1,
                }}
              >
                10
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.3em",
                  marginTop: "0.5rem",
                  opacity: 0.7,
                }}
              >
                Entities Execute
              </div>
            </div>
            <div
              style={{
                width: 1,
                height: 80,
                background: "rgba(245,245,240,0.2)",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "4rem",
                  fontWeight: 200,
                  lineHeight: 1,
                }}
              >
                01
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.3em",
                  marginTop: "0.5rem",
                  opacity: 0.7,
                }}
              >
                Entity Decides
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <p
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
                opacity: 0.8,
              }}
            >
              No democracy.
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
                opacity: 0.8,
              }}
            >
              No consensus.
            </p>
            <p
              style={{
                fontSize: "1rem",
                letterSpacing: "0.3em",
                marginTop: "2rem",
                color: "var(--dark-blood)",
                fontWeight: 400,
              }}
            >
              Only alignment.
            </p>
          </div>
        </div>
      </div>

      {/* subtle navigation */}
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
        <div
          onClick={() => onNavigate("leader")}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "30%",
            height: "20%",
            pointerEvents: "auto",
          }}
        />
      </div>
    </section>
  );
};


