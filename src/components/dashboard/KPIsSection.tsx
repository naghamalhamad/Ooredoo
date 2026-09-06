import { useState } from 'react'
import Card from '../ui/Card'
import Tabs from '../ui/Tabs'
import Icon, { type IconName } from '../icons/Icon'

const tabs = ['Acquisition', 'Revenue', 'Distribution']

const AXIS_VALUES = [500, 150, 100, 50, 10]
const CHART_MAX = 500
const CHART_HEIGHT = 112

function scaleY(value: number) {
  return Math.sqrt(value / CHART_MAX) * 100
}

function KpiChartCard({ title, mtd, lmtd }: { title: string; mtd: number; lmtd: number }) {
  return (
    <div className="flex-1 rounded-xl bg-gray-50 p-3">
      <p className="mb-5 text-xs font-medium text-gray-500">{title}</p>
      <div className="flex gap-2">
        <div className="relative w-6 shrink-0" style={{ height: CHART_HEIGHT }}>
          {AXIS_VALUES.map((value) => (
            <span
              key={value}
              className="absolute right-0 -translate-y-1/2 text-[10px] text-gray-400"
              style={{ bottom: `${scaleY(value)}%` }}
            >
              {value}
            </span>
          ))}
        </div>
        <div
          className="flex flex-1 items-end justify-center gap-4 border-l border-gray-200 pl-3"
          style={{ height: CHART_HEIGHT }}
        >
          <div className="w-8 rounded-t-md bg-amber-400" style={{ height: `${scaleY(mtd)}%` }} />
          <div className="w-8 rounded-t-md bg-[#0047BB]" style={{ height: `${scaleY(lmtd)}%` }} />
        </div>
      </div>
    </div>
  )
}

function LinkRow({ icon, label }: { icon: IconName; label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-xl bg-gray-50 px-3 py-3 hover:bg-gray-100 active:bg-gray-200 transition-colors"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span className="flex-1 text-left text-sm font-medium text-gray-800">{label}</span>
      <Icon name="chevronRight" className="h-4 w-4 text-gray-400" />
    </button>
  )
}

export default function KPIsSection() {
  const [activeTab, setActiveTab] = useState('Revenue')

  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="pb-3 text-base font-semibold text-gray-900">KPIs</h2>
        <hr className="mb-3 border-gray-100" />

        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

        <div className="mt-3 flex items-center justify-end gap-3 text-[11px] text-gray-400">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> MTD
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#0047BB]" /> LMTD
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <KpiChartCard title="Gross Adds (000)" mtd={100} lmtd={500} />
          <KpiChartCard title="SAF Collection (OMR)" mtd={100} lmtd={500} />
        </div>

        <div className="mt-3 flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
          <span className="h-1.5 w-1.5 rounded-full bg-rose-200" />
        </div>

        <p className="mb-2 mt-4 text-sm font-semibold text-gray-900">Sales KPIs</p>
        <div className="flex flex-col gap-2">
          <LinkRow icon="smiley" label="Sales KPIs" />
          <LinkRow icon="barChart" label="performance at glance" />
        </div>
      </Card>
    </div>
  )
}
