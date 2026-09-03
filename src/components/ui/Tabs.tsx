interface TabsProps {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}

export default function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div role="tablist" className="flex gap-5 border-b border-gray-200">
      {tabs.map((tab) => {
        const isActive = tab === active
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={`relative pb-2 text-sm font-medium transition-colors ${
              isActive ? 'text-rose-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
            {isActive && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-rose-600" />
            )}
          </button>
        )
      })}
    </div>
  )
}
