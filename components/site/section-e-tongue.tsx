"use client";

import Image from "next/image";
import Link from "next/link";

export function ETongueSection() {
  return (
    <section id="measure" className="px-16  bg-green-100 mt-6">
      <div className="mx-auto h-[600px] px-4 py-16 grid gap-8 md:grid-cols-2">
        {/* Left */}
        <div className="self-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-(--color-deep) text-pretty">
            The <span className="text-blue-500">E‑Tongue</span> Intelligence for
            Ayurveda
          </h2>
          <p className="mt-4 text-(--color-deep)/80 leading-relaxed">
            Our AI models interpret rasa (taste profiles) captured by e-tongue
            sensors to identify herb quality and potential adulteration. Receive
            clear, actionable insights to improve formulations and ensure
            consistency across batches.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-(--color-saffron) text-(--color-bg) px-5 h-11 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-purple)"
          >
            Start Measuring
          </Link>
        </div>

        {/* Right Placeholder Image */}
        <div className="relative aspect-[7/3] bg-green-100 rounded-b-full  p-11 flex items-center justify-center  ">
          <Image
            src="/images/tounge.png"
            alt="Herbal and AI fusion concept"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
