import Icon, { type IconName } from '../icons/Icon'

export type Page = 'Home' | 'Services' | 'Settings'

const navItems: { icon: IconName; label: Page }[] = [
  { icon: 'home', label: 'Home' },
  { icon: 'grid', label: 'Services' },
  { icon: 'settings', label: 'Settings' },
]

function NavIcon({ icon, active }: { icon: IconName; active: boolean }) {
  if (!active) {
    return <Icon name={icon} className="h-6 w-6 text-gray-400" />
  }

  if (icon === 'home') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-rose-600" fill="currentColor">
        <path d="M12 3.2 3 11h2.2v9H10v-6h4v6h4.8v-9H21L12 3.2Z" />
      </svg>
    )
  }

  if (icon === 'grid') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-rose-600" fill="currentColor">
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-rose-600">
      <path
        fill="currentColor"
        d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.96 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.96a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.04Z"
      />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  )
}

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
              <NavIcon icon={item.icon} active={isActive} />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
