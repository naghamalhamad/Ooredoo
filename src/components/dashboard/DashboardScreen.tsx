import { useState } from 'react'
import TopBar from './TopBar'
import HomePage from './HomePage'
import ServicesPage from './ServicesPage'
import SettingsPage from './SettingsPage'
import BottomNav, { type Page } from './BottomNav'

export default function DashboardScreen() {
  const [page, setPage] = useState<Page>('Home')

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 sm:items-center sm:py-6">
      <div className="flex w-full max-w-sm flex-1 flex-col bg-gray-100 sm:min-h-[90vh] sm:rounded-3xl sm:shadow-xl sm:overflow-hidden">
        <TopBar />

        <main className="flex-1 pb-4">
          {page === 'Home' && <HomePage />}
          {page === 'Services' && <ServicesPage />}
          {page === 'Settings' && <SettingsPage />}
        </main>

        <BottomNav active={page} onChange={setPage} />
      </div>
    </div>
  )
}
