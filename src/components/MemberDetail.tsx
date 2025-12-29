import React from "react";
import { members } from "../data/members";
import { OrbitGraph } from "./OrbitGraph";
import type { SectionId } from "../App";

type Props = {
  memberId: number;
  onClose: () => void;
  onNavigate: (s: SectionId) => void;
  onSetMember: (id: number) => void;
};

export const MemberDetail: React.FC<Props> = ({
  memberId,
  onClose,
  onNavigate,
  onSetMember,
}) => {
  const member = members.find((m) => m.id === memberId);
  if (!member) return null;

  const index = members.findIndex((m) => m.id === memberId);
  const prevId = members[(index + members.length - 1) % members.length].id;
  const nextId = members[(index + 1) % members.length].id;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "radial-gradient(circle at 20% 0%, rgba(0,0,0,0.85) 0, rgba(0,0,0,0.98) 60%)",
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: 700,
          width: "100%",
          border: "1px solid rgba(245,245,240,0.15)",
          padding: "2.5rem 2rem 2rem",
          background: "rgba(0,0,0,0.9)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                opacity: 0.6,
                marginBottom: "0.4rem",
              }}
            >
              Entity_{member.id.toString().padStart(2, "0")}
            </div>
            <h2
              style={{
                fontSize: "1.2rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: member.color,
              }}
            >
              {member.codeName}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(245,245,240,0.5)",
              letterSpacing: "0.2em",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            CLOSE
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            gap: "2rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.7,
                marginBottom: "0.5rem",
              }}
            >
              Function
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                marginBottom: "1.5rem",
              }}
            >
              {member.functionLabel}
            </p>

            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.7,
                marginBottom: "0.5rem",
              }}
            >
              Status
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                marginBottom: "1.5rem",
              }}
            >
              {member.status} • Last Signal: {member.lastSignal}
            </p>

            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.7,
                marginBottom: "0.5rem",
              }}
            >
              Brief
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                lineHeight: 1.9,
                opacity: 0.9,
              }}
            >
              {member.description}
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                opacity: 0.6,
                marginBottom: "0.6rem",
              }}
            >
              Mantra
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.22em",
                color: member.color,
                marginBottom: "1.8rem",
              }}
            >
              “{member.mantra}”
            </p>

            <OrbitGraph activeMember={memberId} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.5rem",
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <button
              onClick={() => onSetMember(prevId)}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(245,245,240,0.6)",
                cursor: "pointer",
              }}
            >
              ◀ ENTITY_{prevId.toString().padStart(2, "0")}
            </button>
            <button
              onClick={() => onSetMember(nextId)}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(245,245,240,0.6)",
                cursor: "pointer",
              }}
            >
              ENTITY_{nextId.toString().padStart(2, "0")} ▶
            </button>
          </div>
          <button
            onClick={() => onNavigate("leader")}
            style={{
              background: "transparent",
              border: "1px solid rgba(245,245,240,0.25)",
              padding: "0.6rem 1.4rem",
              color: "var(--ivory-silver)",
              cursor: "pointer",
              letterSpacing: "0.25em",
            }}
          >
            HAND OVER TO THE EYE
          </button>
        </div>
      </div>
    </div>
  );
};


