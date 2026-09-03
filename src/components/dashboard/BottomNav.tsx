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
    <nav className="sticky bottom-0 border-t border-gray-100 bg-white">
      <div className="flex items-stretch justify-around">
        {navItems.map((item) => {
          const isActive = item.label === active
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onChange(item.label)}
              aria-label={item.label}
              aria-current={isActive}
              className="flex flex-1 flex-col items-center gap-2 py-3 transition-colors"
            >
              <span className={`h-1 w-10 rounded-full ${isActive ? 'bg-rose-600' : 'bg-transparent'}`} />
              <Icon
                name={item.icon}
                className={`h-6 w-6 transition-colors ${isActive ? 'text-rose-600' : 'text-gray-400'}`}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
