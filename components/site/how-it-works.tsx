"use client"

import React from "react"
import { useInView } from "@/hooks/use-in-view"
import { motion } from "framer-motion"
import { Leaf, Cpu, BarChart3 } from "lucide-react"
import Image from "next/image"

type Step = {
  title: string
  desc: string
  icon: React.ComponentType<any>
  imgPath: string
}

const steps: Step[] = [
  {
    title: "Scan Herbs",
    desc: "Connect the e-tongue sensor and capture the sample taste profile.",
    icon: Leaf,
    imgPath: "/images/image-1.png",
  },
  {
    title: "AI Taste Analysis",
    desc: "Our models quantify rasa dimensions and flag adulteration risks.",
    icon: Cpu,
    imgPath: "/images/img-2.png",
  },
  {
    title: "Get Insights",
    desc: "Receive a clear report with recommendations for your batch.",
    icon: BarChart3,
    imgPath: "/images/img-3.png",
  },
]

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section
      id="how"
      className="relative overflow-hidden py-20"
      style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center md:text-6xl text-4xl font-extrabold text-green-700 tracking-tight -ml-[600px] -mt-5 ">
         HOW IT WORKS ⇲
        </h2>

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {steps.map((s, i) => {
            const Icon = s.icon

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col rounded-2xl bg-white border border-emerald-100 shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                </div>

                {/* Image Section */}
                <div className="h-48 w-full  border-t border-emerald-100 flex items-center justify-center">
                  <Image
                    src={s.imgPath}
                    alt={`${s.title} preview`}
                    width={300}
                    height={200}
                    className="object-contain max-h-40 mb-0 mt-5"
                  />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
