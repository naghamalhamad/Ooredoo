interface Series {
  label: string
  color: string
}

interface DataPoint {
  category: string
  values: number[]
}

interface GroupedBarChartProps {
  series: Series[]
  data: DataPoint[]
  maxValue: number
  height?: number
}

export default function GroupedBarChart({ series, data, maxValue, height = 128 }: GroupedBarChartProps) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-4">
        {series.map((s) => (
          <div key={s.label} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="text-[11px] text-gray-500">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-stretch justify-between gap-3" style={{ height }}>
        {data.map((point) => (
          <div key={point.category} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full flex-1 items-end justify-center gap-1">
              {point.values.map((value, i) => (
                <div
                  key={i}
                  className="w-3 rounded-t-sm transition-all duration-500"
                  style={{
                    height: `${Math.max((value / maxValue) * 100, 4)}%`,
                    backgroundColor: series[i]?.color ?? '#E5E7EB',
                  }}
                />
              ))}
            </div>
            {point.category && <span className="text-[11px] text-gray-500">{point.category}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
