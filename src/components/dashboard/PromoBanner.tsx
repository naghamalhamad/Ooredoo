import { useState } from 'react'

interface Slide {
  discount: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    discount: '70%',
    title: 'DISCOUNT 70%',
    description: 'Special Offer Only For This Week',
  },
  {
    discount: '50%',
    title: 'BUNDLE SAVER 50%',
    description: 'Upgrade any plan and save instantly',
  },
  {
    discount: '30%',
    title: 'NEW LINE 30%',
    description: 'Activate a new line before month end',
  },
]

export default function PromoBanner() {
  const [active, setActive] = useState(0)
  const slide = slides[active]

  return (
    <div className="px-4 py-3">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-500 px-5 py-6">
        <div
          aria-hidden
          className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-orange-400/90"
        />
        <div className="relative flex items-center justify-between">
          <div className="max-w-[60%]">
            <p className="text-xl font-extrabold leading-tight text-white">{slide.title}</p>
            <p className="mt-2 text-xs leading-snug text-white/80">{slide.description}</p>
          </div>
          <div
            aria-hidden
            className="relative flex h-24 w-16 items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm"
          >
            <span className="text-sm font-bold text-white">{slide.discount}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-4 bg-rose-600' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
