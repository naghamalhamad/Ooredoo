import Icon from '../icons/Icon'

interface HomeVisitCompletedPageProps {
  onBack?: () => void
  onClose?: () => void
  onDone?: () => void
}

export default function HomeVisitCompletedPage({ onBack, onClose, onDone }: HomeVisitCompletedPageProps) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Home Visit</h1>
        <button type="button" onClick={onClose} aria-label="Close" className="text-gray-900">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Icon name="checkCircle" className="h-9 w-9" />
        </span>
        <p className="text-base font-semibold text-emerald-600">Home visit completed</p>
        <p className="text-sm text-gray-400">This visit has been saved to your area visit.</p>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={onDone}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  )
}
