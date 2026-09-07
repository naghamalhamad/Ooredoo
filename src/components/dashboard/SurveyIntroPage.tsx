import Icon from '../icons/Icon'

interface SurveyIntroPageProps {
  visitDate: string
  surveyedBy: string
  onBack?: () => void
  onClose?: () => void
  onStart?: () => void
}

export default function SurveyIntroPage({ visitDate, surveyedBy, onBack, onClose, onStart }: SurveyIntroPageProps) {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto bg-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Survey title</h1>
        <button type="button" onClick={onClose} aria-label="Close" className="text-gray-900">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 px-4 py-4">
        <div className="flex h-40 items-center justify-center rounded-[8px] bg-[#0047BB]/10 text-[#0047BB]">
          <Icon name="userForm" className="h-12 w-12" />
        </div>

        <div className="mt-4 rounded-[8px] bg-white p-4">
          <p className="text-sm text-gray-500">
            This short survey helps us understand why the customer isn&apos;t interested right now, so we can
            improve how we follow up in this area.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Icon name="calendar" className="h-4 w-4 flex-shrink-0 text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Visit date</p>
              <p className="text-sm font-semibold text-gray-900">{visitDate}</p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Icon name="user" className="h-4 w-4 flex-shrink-0 text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Surveyed by</p>
              <p className="text-sm font-semibold text-gray-900">{surveyedBy}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={onStart}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
        >
          Start
        </button>
      </div>
    </div>
  )
}
