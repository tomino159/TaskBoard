import React from "react";
import { bodyFont } from "../fonts";

export const DashboardCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div
      style={{
        width: 1100,
        borderRadius: 20,
        backgroundColor: "#0B1220",
        border: "1px solid rgba(148, 163, 184, 0.25)",
        boxShadow: "0 50px 100px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 32px",
          borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
        }}
      >
        <div
          style={{
            fontFamily: bodyFont,
            fontWeight: 600,
            fontSize: 20,
            color: "#94A3B8",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: bodyFont,
            fontWeight: 700,
            fontSize: 16,
            color: "#4ADE80",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#4ADE80",
            }}
          />
          LIVE
        </div>
      </div>
      <div style={{ padding: "32px 40px" }}>{children}</div>
    </div>
  );
};
