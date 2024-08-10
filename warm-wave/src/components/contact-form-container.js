"use client";
import { Suspense } from "react";
import ContactForm from "./contact-form";

export default function ContactFormContainer() {
  return (
    <div>
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
