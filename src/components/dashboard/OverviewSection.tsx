import { useState } from 'react'
import Card from '../ui/Card'
import Tabs from '../ui/Tabs'
import OverviewBarChart from '../ui/OverviewBarChart'

const tabs = ['Prepaid', 'Postpaid', 'Portin', 'Reso']

// each tab: [MTD (pink), LMTD (blue), Target (teal)]
const seriesByTab: Record<string, number[]> = {
  Prepaid: [120, 500, 110],
  Postpaid: [90, 340, 150],
  Portin: [60, 210, 80],
  Reso: [40, 140, 60],
}
const legendColors = ['#2DD4BF', '#EC4899', '#1D3FC4']

export default function OverviewSection() {
  const [activeTab, setActiveTab] = useState('Prepaid')

  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="pb-3 text-base font-semibold text-gray-900">Overview</h2>
        <hr className="mb-3 border-gray-100" />
        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

        <div className="mt-4 flex items-center justify-end gap-4">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: legendColors[0] }} />
            Target
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: legendColors[1] }} />
            MTD
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: legendColors[2] }} />
            LMTD
          </div>
        </div>

        <div className="mt-6">
          <OverviewBarChart values={seriesByTab[activeTab]} />
        </div>

        <p className="text-center text-sm text-gray-500">January / February, 2023</p>
      </Card>
    </div>
  )
}
