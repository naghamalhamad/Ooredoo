import { useState } from 'react'
import Card from '../ui/Card'
import Tabs from '../ui/Tabs'
import GroupedBarChart from '../ui/GroupedBarChart'
import Icon from '../icons/Icon'

const tabs = ['Prepaid', 'Postpaid', 'Portin', 'Reso']

const seriesByTab: Record<string, { category: string; values: number[] }[]> = {
  Prepaid: [{ category: '', values: [230, 480, 340] }],
  Postpaid: [{ category: '', values: [180, 260, 300] }],
  Portin: [{ category: '', values: [90, 150, 120] }],
  Reso: [{ category: '', values: [60, 100, 80] }],
}

export default function OverviewSection() {
  const [activeTab, setActiveTab] = useState('Prepaid')

  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="mb-3 text-base font-semibold text-gray-900">Overview</h2>
        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

        <div className="mt-4">
          <GroupedBarChart
            series={[
              { label: 'Target', color: '#EC4899' },
              { label: 'MTD', color: '#1E3A8A' },
              { label: 'YTD', color: '#14B8A6' },
            ]}
            data={seriesByTab[activeTab]}
            maxValue={500}
          />
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-400">
          <button type="button" aria-label="Previous month" className="hover:text-gray-600">
            <Icon name="chevronRight" className="h-3 w-3 rotate-180" />
          </button>
          <span>January / February 2023</span>
          <button type="button" aria-label="Next month" className="hover:text-gray-600">
            <Icon name="chevronRight" className="h-3 w-3" />
          </button>
        </div>
      </Card>
    </div>
  )
}
