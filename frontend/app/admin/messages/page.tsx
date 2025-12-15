"use client";

import { useEffect, useState } from "react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_URL}/api/admin/contacts`, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to fetch messages");

      setMessages(await res.json());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id: number) => {
    if (!confirm("Delete this message permanently?")) return;

    const res = await fetch(
      `${API_URL}/api/admin/contacts/${id}`,
      { method: "DELETE" }
    );

    if (!res.ok) {
      alert("Failed to delete message");
      return;
    }

    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-heading font-bold mb-10">
        Contact Messages
      </h1>

      {loading && <p>Loading…</p>}

      {!loading && messages.length === 0 && (
        <p className="opacity-70">No messages yet.</p>
      )}

      <div className="space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm flex flex-col md:flex-row justify-between gap-4"
          >
            <div>
              <h3 className="font-semibold text-lg">{msg.name}</h3>
              <p className="text-sm opacity-70">{msg.email}</p>
              <p className="mt-3 whitespace-pre-wrap">
                {msg.message}
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-xs opacity-50">
                {new Date(msg.createdAt).toLocaleString()}
              </span>

              <button
                onClick={() => deleteMessage(msg.id)}
                className="px-3 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}