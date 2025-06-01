import React from "react";

function SuccessfulPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1 style={{ color: "#2e7d32", marginBottom: "1rem" }}>
        🎉 Password Reset Successful!
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#444" }}>
        You can now log in to your <strong>MoneyNut</strong> app and continue tracking your expenses seamlessly.
      </p>
    </div>
  );
}

export default SuccessfulPage;
