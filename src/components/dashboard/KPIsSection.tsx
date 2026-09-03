import { useState } from 'react'
import Card from '../ui/Card'
import Tabs from '../ui/Tabs'
import GroupedBarChart from '../ui/GroupedBarChart'
import Icon from '../icons/Icon'

const tabs = ['Acquisition', 'Revenue', 'Distribution']

const grossAdds = [
  { category: 'W1', values: [60, 90] },
  { category: 'W2', values: [80, 60] },
  { category: 'W3', values: [50, 100] },
  { category: 'W4', values: [90, 70] },
]

const satCollection = [
  { category: 'W1', values: [70, 50] },
  { category: 'W2', values: [55, 95] },
  { category: 'W3', values: [95, 65] },
  { category: 'W4', values: [60, 80] },
]

function LinkRow({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-lg bg-rose-50 px-4 py-3 hover:bg-rose-100 active:bg-rose-200 transition-colors"
    >
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <Icon name="chevronRight" className="h-4 w-4 text-rose-500" />
    </button>
  )
}

export default function KPIsSection() {
  const [activeTab, setActiveTab] = useState('Revenue')

  return (
    <div className="px-4 py-2">
      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-900">KPIs</h2>
          <div className="flex items-center gap-3 text-[11px] text-gray-400">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> MTD
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-blue-700" /> LMTD
            </span>
          </div>
        </div>

        <div className="mt-2">
          <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
        </div>

        <div className="mt-4">
          <p className="mb-2 text-xs font-medium text-gray-500">Gross Adds (FRR)</p>
          <GroupedBarChart
            series={[
              { label: 'MTD', color: '#FBBF24' },
              { label: 'LMTD', color: '#1D4ED8' },
            ]}
            data={grossAdds}
            maxValue={100}
            height={96}
          />
        </div>

        <div className="mt-6">
          <p className="mb-2 text-xs font-medium text-gray-500">SAT Collection (QAR)</p>
          <GroupedBarChart
            series={[
              { label: 'MTD', color: '#FBBF24' },
              { label: 'LMTD', color: '#1D4ED8' },
            ]}
            data={satCollection}
            maxValue={100}
            height={96}
          />
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <LinkRow label="Sales KPIs" />
          <LinkRow label="performance at glance" />
        </div>
      </Card>
    </div>
  )
}
