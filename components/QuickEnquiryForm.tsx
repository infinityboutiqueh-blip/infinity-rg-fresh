"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function QuickEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enquiry submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="px-3 py-2 rounded-lg text-black"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-3 py-2 rounded-lg text-black"
      />
      <textarea
        placeholder="Your message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="px-3 py-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="rounded-2xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white flex items-center justify-center"
      >
        <Mail className="mr-2 w-4 h-4" /> Send Enquiry
      </button>
    </form>
  );
}
