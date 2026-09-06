import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../icons/Icon'
import VisitCard from './VisitCard'
import visitMap from '../../../assets/visit-map.png'

export default function VisitManagementSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <SectionHeader title="Visit Management" actionLabel="See all" />

        <VisitCard visitName="Visit name" visitType="Visit Type" />

        <p className="mb-2 mt-4 text-sm font-semibold text-gray-900">Scheduled Date</p>
        <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
          <div>
            <p className="text-xs text-gray-400">From</p>
            <p className="text-sm font-semibold text-gray-900">9 Aug , 2023</p>
          </div>
          <Icon name="arrowRight" className="h-4 w-4 flex-shrink-0 text-rose-600" />
          <div className="text-right">
            <p className="text-xs text-gray-400">To</p>
            <p className="text-sm font-semibold text-gray-900">10 Aug , 2023</p>
          </div>
        </div>

        <p className="mb-2 mt-4 text-sm font-semibold text-gray-900">Next Dealer to be visit</p>
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-600">
            <Icon name="user" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-900">Channel member name</p>
            <p className="text-xs text-gray-400">Channel member code</p>
          </div>
        </div>

        <p className="mb-2 mt-4 text-sm font-semibold text-gray-900">Location</p>
        <div className="relative h-28 overflow-hidden rounded-xl bg-gray-500">
          <img src={visitMap} alt="Visit location map" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
            <span className="text-sm font-semibold text-white drop-shadow">View map</span>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <button
            type="button"
            className="w-full rounded-full border border-rose-600 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
          >
            Show details
          </button>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400">Or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <button
            type="button"
            className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
          >
            Add - Hoc visit
          </button>
        </div>
      </Card>
    </div>
  )
}
