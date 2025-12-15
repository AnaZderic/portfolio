"use client";

import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Failed to submit");

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]"
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-6">
          Get in Touch
        </h2>

        <p className="text-center text-[rgb(var(--foreground))]/70 mb-12">
          Have a question, opportunity, or just want to say hi?  
          I’d love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 shadow-lg"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[rgb(var(--border))] bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[rgb(var(--border))] bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-md border border-[rgb(var(--border))] bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-500 text-sm text-center">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};