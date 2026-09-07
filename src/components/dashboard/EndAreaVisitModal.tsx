interface EndAreaVisitModalProps {
  onConfirm?: () => void
  onDiscard?: () => void
}

export default function EndAreaVisitModal({ onConfirm, onDiscard }: EndAreaVisitModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <div className="w-full max-w-xs rounded-[4px] bg-white p-5">
        <h2 className="text-base font-semibold text-gray-900">End Area Visit</h2>
        <p className="mt-2 text-sm text-gray-500">Are you sure you want to end the Area visit?</p>

        <div className="mt-5 flex flex-col gap-3">
          <button
            type="button"
            onClick={onConfirm}
            className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 active:bg-rose-800 transition-colors"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={onDiscard}
            className="w-full rounded-full py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  )
}
