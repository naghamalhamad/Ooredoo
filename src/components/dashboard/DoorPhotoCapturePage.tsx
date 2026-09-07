import { useState } from 'react'
import Icon from '../icons/Icon'

interface DoorPhotoCapturePageProps {
  onBack?: () => void
  onClose?: () => void
  onSubmit?: () => void
}

export default function DoorPhotoCapturePage({ onBack, onClose, onSubmit }: DoorPhotoCapturePageProps) {
  const [captured, setCaptured] = useState(false)

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={onBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Capture Door Photo</h1>
        <button type="button" onClick={onClose} aria-label="Close" className="text-gray-900">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 px-4 py-6">
        <p className="mb-1 text-sm font-semibold text-gray-900">Take a photo of the closed door</p>
        <p className="mb-6 text-xs text-gray-400">This photo confirms the door was closed during your visit.</p>

        {captured ? (
          <div className="flex flex-col items-center gap-3 rounded-[4px] bg-gray-100 px-4 py-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <Icon name="checkCircle" className="h-7 w-7" />
            </span>
            <p className="text-sm font-semibold text-gray-900">Photo captured</p>
            <button
              type="button"
              onClick={() => setCaptured(false)}
              className="mt-1 text-sm font-semibold text-rose-600 hover:text-rose-700"
            >
              Retake photo
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setCaptured(true)}
            className="flex w-full flex-col items-center gap-3 rounded-[4px] bg-gray-100 px-4 py-10 text-gray-400 hover:bg-gray-200 hover:text-rose-600 transition-colors"
          >
            <Icon name="camera" className="h-9 w-9" />
            <span className="text-sm font-semibold">Tap to capture photo</span>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={onSubmit}
          disabled={!captured}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-700 active:bg-rose-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
