import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, `You: ${input}`, `Vyana: [AI Response]`]);
    setInput("");
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Vyana AI</h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 10,
          padding: 20,
          height: 400,
          overflowY: "auto",
          background: "#f9f9f9",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 10 }}>{msg}</div>
        ))}
      </div>
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <input
          style={{ flex: 1, padding: 10, fontSize: 16 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} style={{ padding: "10px 20px" }}>
          Send
        </button>
      </div>
    </div>
  );
}
