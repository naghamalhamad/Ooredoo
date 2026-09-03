interface TabsProps {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}

export default function Tabs({ tabs, active, onChange }: TabsProps) {
  const activeIndex = Math.max(tabs.indexOf(active), 0)

  return (
    <div>
      <div role="tablist" className="flex items-center justify-between">
        {tabs.map((tab) => {
          const isActive = tab === active
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab)}
              className={`pb-2 text-base transition-colors ${
                isActive ? 'font-bold text-gray-900' : 'font-medium text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-rose-100">
        <div
          className="absolute inset-y-0 rounded-full bg-rose-600 transition-all duration-300"
          style={{ width: `${100 / tabs.length}%`, left: `${(activeIndex * 100) / tabs.length}%` }}
        />
      </div>
    </div>
  )
}
