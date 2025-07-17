import React, { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "ai", text: "I'm Vyana, here to help you feel heard. 🧠" }, // placeholder
    ]);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ height: "100vh", backgroundColor: "#f4f7fa", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: 20, display: "flex", flexDirection: "column", height: "100%" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Vyana AI</h1>
        
        <div style={{
          flex: 1,
          overflowY: "auto",
          background: "white",
          borderRadius: 10,
          padding: 20,
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          marginTop: 10,
          marginBottom: 20,
        }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                textAlign: msg.sender === "user" ? "right" : "left",
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  background: msg.sender === "user" ? "#007aff" : "#e5e5ea",
                  color: msg.sender === "user" ? "white" : "black",
                  borderRadius: 16,
                  maxWidth: "80%",
                  wordWrap: "break-word",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <input
            style={{
              flex: 1,
              padding: 14,
              borderRadius: 10,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "0 20px",
              border: "none",
              background: "#007aff",
              color: "white",
              borderRadius: 10,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
