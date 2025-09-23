"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

const faqs = [
  {
    q: "What is an E‑Tongue?",
    a: "An electronic tongue uses sensor arrays to capture taste signatures. We analyze these signals to quantify Ayurvedic rasa and identify possible adulteration.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We do not store your sensor keys on the client, and your data is protected by role-based access and secure infrastructure.",
  },
  {
    q: "Can I export reports?",
    a: "You can export batch reports as PDF/CSV to share with your team or for compliance.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<string | undefined>(undefined)

  return (
    <section className="bg-green-50 rounded-full py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-serif text-3xl font-bold text-(--color-deep) text-center">Frequently Asked Questions</h2>
        <div className="mt-8 rounded-2xl bg-(--color-bg) p-2 md:p-4 border border-(--color-deep)/10">
          <Accordion type="single" collapsible value={open} onValueChange={setOpen} className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={`rounded-xl my-2 border border-transparent data-[state=open]:border-(--color-saffron)/50 bg-(--color-bg)`}
              >
                <AccordionTrigger className="px-4 py-3 text-left font-semibold text-(--color-deep) [&[data-state=open]_svg]:rotate-45">
                  <span>{f.q}</span>
                  {/* plus/minus icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-(--color-deep)/75">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
