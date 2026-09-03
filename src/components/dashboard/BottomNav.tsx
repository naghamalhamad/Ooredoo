import { useState } from 'react'
import Icon, { type IconName } from '../icons/Icon'

const navItems: { icon: IconName; label: string }[] = [
  { icon: 'home', label: 'Home' },
  { icon: 'grid', label: 'Services' },
  { icon: 'gauge', label: 'Insights' },
  { icon: 'user', label: 'Account' },
]

export default function BottomNav() {
  const [active, setActive] = useState('Home')

  return (
    <nav className="sticky bottom-0 flex items-center justify-around border-t border-gray-100 bg-white px-2 py-2">
      {navItems.map((item) => {
        const isActive = item.label === active
        return (
          <button
            key={item.label}
            type="button"
            onClick={() => setActive(item.label)}
            aria-label={item.label}
            aria-current={isActive}
            className={`flex flex-col items-center gap-0.5 rounded-lg px-4 py-1.5 transition-colors ${
              isActive ? 'text-white' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                isActive ? 'bg-rose-600' : 'hover:bg-gray-100'
              }`}
            >
              <Icon name={item.icon} className="h-4 w-4" />
            </span>
          </button>
        )
      })}
    </nav>
  )
}
