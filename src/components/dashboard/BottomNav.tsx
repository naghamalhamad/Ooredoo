import Icon, { type IconName } from '../icons/Icon'

export type Page = 'Home' | 'Services' | 'Settings'

const navItems: { icon: IconName; label: Page }[] = [
  { icon: 'home', label: 'Home' },
  { icon: 'grid', label: 'Services' },
  { icon: 'settings', label: 'Settings' },
]

interface BottomNavProps {
  active: Page
  onChange: (page: Page) => void
}

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="sticky bottom-0 flex items-center justify-around border-t border-gray-100 bg-white px-2 py-2">
      {navItems.map((item) => {
        const isActive = item.label === active
        return (
          <button
            key={item.label}
            type="button"
            onClick={() => onChange(item.label)}
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
