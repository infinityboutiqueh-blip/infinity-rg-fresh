"use client";
import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-slate-200">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to Infinity RG. By using our website and services, you agree to
        comply with these Terms of Service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Services</h2>
      <p className="mb-4">
        Our services are intended for property management and investment support.
        You agree not to misuse our website or services in any unlawful way.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        Infinity RG is not liable for any indirect or consequential damages
        arising from the use of our services. Property investments carry inherent
        risks, and clients are responsible for their own financial decisions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Service from time to time. Updates will be
        posted on this page with a revised date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at{" "}
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
