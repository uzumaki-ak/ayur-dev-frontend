export function SiteFooter() {
  return (
    <footer className="mt-16 bg-(--color-brand) text-(--color-bg) border-t-4 border-(--color-saffron)">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="font-serif text-xl font-bold">AyurSense</h4>
          <p className="mt-2 text-(--color-bg)/80">The E‑Tongue Intelligence for Ayurveda.</p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 space-y-1">
            {["Home", "Herbs", "Remedies", "Measure", "History"].map((t) => (
              <li key={t}>
                <a className="hover:underline underline-offset-4 decoration-(--color-saffron)" href="#">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Resources</h5>
          <ul className="mt-3 space-y-1">
            {["Docs", "API", "Blog", "Help"].map((t) => (
              <li key={t}>
                <a className="hover:underline underline-offset-4 decoration-(--color-saffron)" href="#">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <ul className="mt-3 space-y-1">
            <li>
              <a
                href="mailto:hello@ayursense.ai"
                className="hover:underline underline-offset-4 decoration-(--color-saffron)"
              >
                hello@ayursense.ai
              </a>
            </li>
            <li className="flex gap-2 mt-2">
              {["X", "LI", "IG"].map((k) => (
                <span
                  key={k}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-(--color-bg)/10 border border-(--color-bg)/30"
                >
                  {k}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm py-4 bg-(--color-brand-700)">
        © {new Date().getFullYear()} AyurSense. All rights reserved.
      </div>
    </footer>
  )
}
