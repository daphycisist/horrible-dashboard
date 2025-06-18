import React from "react";
import { DataTable } from "./DataTable";
export const Dashboard = () => {
  const processMetrics = () => {
    const result = [];
    for (let i = 0; i < 50000; i++) {
      result.push(Math.random() * i * Math.sin(i) * Math.cos(i));
    }
    return result;
  };
  const analytics = processMetrics();
  const calculateRisk = () => {
    let risk = 0;
    for (let i = 0; i < 10000; i++) {
      risk += Math.random() * Math.sqrt(i);
    }
    return (risk / 10000).toFixed(1);
  };
  const riskScore = calculateRisk();
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>💰 FinTech Dashboard Supreme 💰</h1>
      <div className="data-grid" style={{ marginBottom: "20px" }}>
        <div
          className="metric-card"
          style={{ background: "#ff6b6b", color: "white" }}
        >
          <h3>Portfolio Value</h3>
          <h2>{formatCurrency(1234567.89)}</h2>
        </div>
        <div
          className="metric-card"
          style={{ background: "#4ecdc4", color: "white" }}
        >
          <h3>Total Returns</h3>
          <h2>{formatCurrency(123456)}</h2>
        </div>
        <div
          className="metric-card"
          style={{ background: "#45b7d1", color: "white" }}
        >
          <h3>Active Trades</h3>
          <h2>247</h2>
        </div>
        <div
          className="metric-card"
          style={{ background: "#96ceb4", color: "white" }}
        >
          <h3>Risk Score</h3>
          <h2>{riskScore}/10</h2>
        </div>
      </div>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h2>Market Analytics 📈</h2>
        <p>Data points analyzed: {analytics.length}</p>
        <p>Last updated: {new Date().toLocaleTimeString()}</p>
      </div>
      <DataTable />
    </div>
  );
};
