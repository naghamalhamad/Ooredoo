const barColors = ['#EC4899', '#1D3FC4', '#2DD4BF']
const maxValue = 500
const ticks = [500, 150, 100, 50, 10]

interface OverviewBarChartProps {
  values: number[]
}

export default function OverviewBarChart({ values }: OverviewBarChartProps) {
  return (
    <div className="flex gap-3">
      <div className="relative flex h-56 flex-col justify-between pb-6 text-right text-xs text-gray-400">
        {ticks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-x-0 top-0 flex h-56 flex-col justify-between pb-6">
          {ticks.map((tick) => (
            <div key={tick} className="border-t border-gray-100" />
          ))}
        </div>
        <div className="relative z-10 flex h-56 items-end justify-around gap-4 pb-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="w-16 rounded-t-lg transition-all duration-500"
              style={{
                height: `${Math.max((value / maxValue) * 100, 3)}%`,
                backgroundColor: barColors[i],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
