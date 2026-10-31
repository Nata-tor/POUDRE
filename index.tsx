import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" className={className} aria-hidden="true">
      <circle cx="80" cy="10" r="5.5" fill="#a9c0cc" />
      <path
        d="M28 22c18 3 32 4 52 1 20-3 34-2 52 2"
        fill="none"
        stroke="#c4b39a"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-paper text-ink">
      <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <Mark className="mb-2 w-40" />
        <p className="font-sans text-xs font-light tracking-widest text-ink">POUDRE</p>
        <p className="mt-10 font-display text-3xl font-normal italic text-ink-soft sm:text-4xl">
          The first hour.
        </p>
      </section>

      <section className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-12 md:gap-6">
        <figure className="md:col-span-7">
          <img
            src="/cream.jpg?v=2"
            alt="A matte cream jar on warm paper"
            className="w-full object-cover"
          />
        </figure>
        <div className="md:col-span-4 md:col-start-9">
          <p className="font-sans text-xs font-light tracking-widest text-mist-deep">01</p>
          <h2 className="mt-4 font-display text-5xl font-normal leading-none text-ink sm:text-6xl">
            Cream
          </h2>
          <p className="mt-6 max-w-xs font-display text-2xl italic leading-snug text-ink-soft">
            Before anything else.
          </p>
          <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ink-soft">
            The first touch. Skin, before clothes or words. A quiet jar, the color of the morning.
          </p>
        </div>
      </section>

      <section className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-12">
        <div className="order-2 md:order-1 md:col-span-4">
          <p className="font-sans text-xs font-light tracking-widest text-mist-deep">02</p>
          <h2 className="mt-4 font-display text-5xl font-normal leading-none text-ink sm:text-6xl">
            Cloth
          </h2>
          <p className="mt-6 max-w-xs font-display text-2xl italic leading-snug text-ink-soft">
            One color. Worn and finished.
          </p>
          <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ink-soft">
            A single T-shirt in powder beige. The uniform of the hour — nothing else to decide.
          </p>
        </div>
        <figure className="order-1 md:order-2 md:col-span-7 md:col-start-6">
          <img
            src="/shirt.jpg?v=2"
            alt="A woman in a plain powder-beige T-shirt"
            className="w-full object-cover"
          />
        </figure>
      </section>

      <section className="flex min-h-[90svh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-sans text-xs font-light tracking-widest text-mist-deep">03</p>
        <h2 className="mt-4 font-display text-5xl font-normal leading-none text-ink">Paper</h2>
        <figure className="mt-12 w-full max-w-xl">
          <img
            src="/notebook.jpg?v=2"
            alt="A closed beige notebook seen from above"
            className="w-full object-cover"
          />
        </figure>
        <p className="mt-10 font-display text-2xl italic text-ink-soft">Then a page.</p>
      </section>

      <section id="set" className="mx-auto max-w-6xl px-6 py-28">
        <figure>
          <img
            src="/set.jpg?v=2"
            alt="The morning set: cream jar, folded T-shirt, and notebook"
            className="w-full object-cover"
          />
        </figure>
        <div className="mt-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-4xl italic text-ink sm:text-5xl">The morning set.</p>
            <p className="mt-3 text-sm font-light text-ink-soft">Cream, cloth, and paper — together.</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="min-h-11 border border-ink bg-ink px-10 text-xs font-light tracking-widest text-paper transition-colors duration-200 hover:bg-transparent hover:text-ink"
          >
            BEGIN
          </button>
        </div>
      </section>

      <footer className="flex flex-col items-center px-6 pb-24 pt-8 text-center">
        <Mark className="w-28 opacity-80" />
        <p className="mt-2 font-sans text-xs font-light tracking-widest text-ink-soft">
          POUDRE — CREAM, CLOTH, PAPER
        </p>
      </footer>

      {open && (
        <div className="fixed inset-0 z-20 flex items-end justify-center bg-ink/30 p-4 sm:items-center">
          <div
            role="dialog"
            aria-labelledby="begin-title"
            className="w-full max-w-md bg-paper px-8 py-10 text-ink shadow-none"
          >
            <p className="text-xs font-light tracking-widest text-mist-deep">THE SET</p>
            <h3 id="begin-title" className="mt-3 font-display text-4xl italic">
              Your morning is held.
            </h3>
            <ul className="mt-6 space-y-2 text-sm font-light text-ink-soft">
              <li>Cream — the first touch</li>
              <li>Cloth — one color</li>
              <li>Paper — then a page</li>
            </ul>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-8 min-h-11 w-full border border-ink text-xs tracking-widest"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
