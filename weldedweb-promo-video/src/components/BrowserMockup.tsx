import React from "react";
import { bodyFont } from "../fonts";

export const BrowserMockup: React.FC<{
  url: string;
  children: React.ReactNode;
}> = ({ url, children }) => {
  return (
    <div
      style={{
        width: 1180,
        height: 660,
        borderRadius: 20,
        backgroundColor: "#0B1220",
        border: "1px solid rgba(148, 163, 184, 0.25)",
        boxShadow: "0 50px 100px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          padding: "18px 24px",
          borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#F87171",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FBBF24",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#4ADE80",
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            fontFamily: bodyFont,
            fontSize: 18,
            color: "#94A3B8",
            backgroundColor: "#050710",
            borderRadius: 8,
            padding: "8px 16px",
          }}
        >
          {url}
        </div>
      </div>
      <div style={{ flex: 1, position: "relative" }}>{children}</div>
    </div>
  );
};
