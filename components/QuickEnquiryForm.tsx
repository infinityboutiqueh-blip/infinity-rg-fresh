"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";
import emailjs from "emailjs-com";

export default function QuickEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_z69pgtc",      // ✅ Your Service ID
        "template_lx6hntq",     // ✅ Your Template ID
        templateParams,
        "ujulBYfyVDwYUQPcM"     // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("✅ Enquiry sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send enquiry. Please try again.");
        }
      );
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
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
