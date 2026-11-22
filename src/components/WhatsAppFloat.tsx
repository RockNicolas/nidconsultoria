"use client";
import { track } from "@/lib/track";

const URL = "https://wa.me/5511994136060?text=" + encodeURIComponent("Olá! Vim pelo site da NID e gostaria de conversar.");

export function WhatsAppFloat() {
  return (
    <a
      href={URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a NID no WhatsApp"
      onClick={() => track("whatsapp_float")}
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden>
        <path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.4.7 4.7 2 6.6L3.2 29l7.1-2.1a12.9 12.9 0 0 0 5.7 1.3c7 0 12.7-5.6 12.7-12.6S23 3 16 3zm0 23.1c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.2 1.3-4-.3-.4a10 10 0 0 1-1.6-5.4C5.7 10 10.4 5.4 16 5.4s10.3 4.6 10.3 10.2S21.7 26.1 16 26.1zm5.7-7.5c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.4 8.4 0 0 1-4.2-3.6c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.700 3.700 0 0 0-1.200 2.800c0 1.600 1.200 3.200 1.400 3.400s2.400 3.700 5.900 5.100c2.200.9 3 .9 4 .8.600-.1 1.900-.8 2.200-1.600s.3-1.400.2-1.600-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}
