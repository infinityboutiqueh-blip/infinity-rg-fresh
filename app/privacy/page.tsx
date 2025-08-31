"use client";
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-slate-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Infinity RG, we value your privacy. This Privacy Policy explains how we
        collect, use, and protect your personal information when you interact with
        our website and services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect your name, email address, and enquiry details when you use
        our contact form or request services from us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        Your information is used only to respond to enquiries, provide services,
        and improve our website. We will never sell or share your personal details
        with third parties for marketing purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">
        We implement security measures to protect your information. However, no
        method of transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You may request access to, or deletion of, the personal data we hold about
        you by contacting us at{" "}
        <a
          href="mailto:contactestates@infinityrg.co.uk"
          className="underline text-blue-400"
        >
          contactestates@infinityrg.co.uk
        </a>
        .
      </p>

      <p className="mt-6 text-sm text-slate-400">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}
