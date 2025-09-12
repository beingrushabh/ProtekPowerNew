import React, { useState, useMemo } from "react";

function isMobile() {
  return /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function buildWhatsAppUrl(phone, text) {
  const msg = encodeURIComponent(text);
  const cleanPhone = phone.replace(/[^\d]/g, "");
  if (isMobile()) {
    return `whatsapp://send?phone=${cleanPhone}&text=${msg}`;
  }
  return `https://wa.me/${cleanPhone}?text=${msg}`;
}

export default function WhatsAppFloat({
  phone,
  defaultMessage = "Hi! I’d like to know more about Protek products.",
  enableChatBox = true,
  position = "bottom-right",
  ariaLabel = "Chat on WhatsApp",
  zIndex = 9999,
  color = "#25D366",
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const containerPosStyle = useMemo(() => {
    return {
      position: "fixed",
      right: position === "bottom-right" ? "20px" : undefined,
      left: position === "bottom-left" ? "20px" : undefined,
      bottom: "20px",
      zIndex: zIndex,
    };
  }, [position, zIndex]);

  const handleMainClick = () => {
    if (enableChatBox) {
      setOpen((s) => !s);
      return;
    }
    const url = buildWhatsAppUrl(phone, defaultMessage);
    window.open(url, "_blank");
  };

  const handleSend = () => {
    const message = text.trim() || defaultMessage;
    const url = buildWhatsAppUrl(phone, message);
    window.open(url, "_blank");
    setOpen(false);
    setText("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={containerPosStyle}>
      {/* Chatbox */}
      {enableChatBox && open && (
        <div
          style={{
            width: 290,
            background: "#fff",
            borderRadius: 12,
            boxShadow:
              "0 10px 30px rgba(0,0,0,.08), 0 6px 12px rgba(0,0,0,.06)",
            marginBottom: 10,
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,.06)",
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              background: color,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <span>WhatsApp — Protek</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              ×
            </button>
          </div>

          <div style={{ padding: 12 }}>
            <div style={{ fontSize: 12, color: "#667085", marginBottom: 6 }}>
              Type your message. Press Enter to send.
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onKeyDown}
              rows={3}
              placeholder={defaultMessage}
              style={{
                width: "100%",
                resize: "none",
                borderRadius: 8,
                border: "1px solid #E4E7EC",
                padding: "10px 12px",
                outline: "none",
                fontSize: 14,
              }}
            />
            <button
              onClick={handleSend}
              style={{
                marginTop: 8,
                width: "100%",
                border: "none",
                borderRadius: 8,
                padding: "10px 12px",
                background: color,
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Send on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleMainClick}
        aria-label={ariaLabel}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "none",
          background: color,
          color: "#fff",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          boxShadow:
            "0 10px 20px rgba(0,0,0,.15), 0 4px 8px rgba(0,0,0,.08)",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="26"
          height="26"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M19.1 17.5c-.3-.2-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.9 1c-.2.1-.3.2-.6.1s-1.1-.4-2.1-1.3c-.8-.7-1.3-1.6-1.5-1.9s0-.4.1-.6c.1-.1.3-.4.4-.5s.1-.2.2-.4 0-.3 0-.5c0-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 .2.4.5.8c.3.4 2 3.1 4.9 4.2 1.8.7 2.5.8 3 .7.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.5-.4zm-3.1 7.9h-.1c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3c-.8-1.3-1.1-2.8-1.1-4.3 0-4.7 3.8-8.5 8.5-8.5 2.3 0 4.4.9 6 2.5s2.5 3.7 2.5 6c0 4.7-3.8 8.5-8.5 8.5zm7.3-15.8C21.5 7.8 18.9 6.7 16 6.7c-5.1 0-9.3 4.2-9.3 9.3 0 1.6.4 3.1 1.2 4.5L6.7 25l4.6-1.2c1.3.7 2.8 1.1 4.3 1.1 5.1 0 9.3-4.2 9.3-9.3 0-2.5-1-4.8-2.6-6.4z"
          />
        </svg>
      </button>
    </div>
  );
}
