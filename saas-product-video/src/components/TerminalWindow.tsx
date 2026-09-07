import React from "react";
import { monoFont } from "../fonts";

export const TerminalWindow: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div
      style={{
        width: 1180,
        borderRadius: 20,
        backgroundColor: "#0F172A",
        border: "1px solid rgba(148, 163, 184, 0.25)",
        boxShadow: "0 40px 90px rgba(0, 0, 0, 0.45)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "22px 28px",
          borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "#F87171",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "#FBBF24",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "#34D399",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: monoFont,
            fontSize: 20,
            color: "#94A3B8",
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ padding: "36px 44px" }}>{children}</div>
    </div>
  );
};
