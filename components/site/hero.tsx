"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 -mt-4"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-16 lg:py-14">
        {/* Left Content */}
        <div className="lg:col-span-6 self-center space-y-8">
          <div className="space-y-6 ">
            <p className="text-base font-semibold text-orange-600 tracking-wide">
              #1 AI-assisted rasa analysis
            </p>
            <h1 className="font-serif text-balance text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              <span className="text-green-500">Herbal</span> Without Side <span className="text-amber-950">Effects</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              Scientifically analyze rasa (taste) and detect possible adulteration
              of herbs using our E-Tongue Intelligence. Make better Ayurvedic
              decisions with confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-medium text-lg">
              Start Measuring
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors text-lg">
              How it works
            </button>
          </div>

          {/* Customer Reviews */}
          <div className="flex items-center gap-5 pt-6">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center">
                <span className="text-white text-sm font-bold">B</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 text-lg">4.9</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="text-yellow-400 fill-current"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-base text-gray-600">
                (110,778 ratings)
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background decorative circles */}
            <div className="absolute -inset-10 pointer-events-none">
              <div className="absolute right-10 top-10 h-80 w-80 rounded-full border-2 border-white/30 animate-pulse" />
              <div
                className="absolute right-10 top-10 h-96 w-96 rounded-full border-2 border-white/20 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Main Image */}
            <div className="relative max-w-[520px] animate-float">
              <Image
                src="/images/img_hero-sec.png"
                alt="Two capsules with plant vines growing out"
                width={520}
                height={520}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-16 right-12 w-5 h-5 bg-green-300 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-24 left-8 w-4 h-4 bg-teal-300 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-24 right-4 w-6 h-6 bg-emerald-300 rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
