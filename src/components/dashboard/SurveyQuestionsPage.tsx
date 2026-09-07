import { useState } from 'react'
import Icon from '../icons/Icon'

interface SurveyQuestion {
  question: string
  options: string[]
}

const surveyQuestions: SurveyQuestion[] = [
  {
    question: "What is the main reason for the customer's disinterest?",
    options: ['Already has another provider', 'Not interested in the service', 'Price concerns', 'No need at the moment'],
  },
  {
    question: 'Would the customer be open to future contact?',
    options: ['Yes', 'No', 'Maybe later'],
  },
]

interface SurveyQuestionsPageProps {
  onBack?: () => void
  onClose?: () => void
  onComplete?: (answers: string[]) => void
}

export default function SurveyQuestionsPage({ onBack, onClose, onComplete }: SurveyQuestionsPageProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>(surveyQuestions.map(() => null))

  const current = surveyQuestions[step]
  const selected = answers[step]
  const isLastStep = step === surveyQuestions.length - 1

  const selectAnswer = (option: string) => {
    setAnswers((prev) => prev.map((a, i) => (i === step ? option : a)))
  }

  const handleBack = () => {
    if (step === 0) {
      onBack?.()
    } else {
      setStep((s) => s - 1)
    }
  }

  const handleNext = () => {
    if (!selected) return
    if (isLastStep) {
      onComplete?.(answers as string[])
    } else {
      setStep((s) => s + 1)
    }
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <button type="button" onClick={handleBack} aria-label="Back" className="text-gray-900">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">Survey title</h1>
        <button type="button" onClick={onClose} aria-label="Close" className="text-gray-900">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-1.5 px-4 pb-3">
        {surveyQuestions.map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-rose-600' : 'bg-gray-100'}`} />
        ))}
      </div>

      <div className="flex-1 px-4 py-2">
        <p className="mb-1 text-xs font-medium text-gray-400">
          Question {step + 1} of {surveyQuestions.length}
        </p>
        <p className="mb-4 text-base font-semibold text-gray-900">{current.question}</p>

        <div className="flex flex-col gap-3">
          {current.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => selectAnswer(option)}
              aria-pressed={selected === option}
              className={`flex items-center justify-between rounded-[8px] px-4 py-3 text-left text-sm font-semibold transition-colors ${
                selected === option ? 'bg-rose-50 text-rose-600' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
              }`}
            >
              {option}
              <span
                className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                  selected === option ? 'bg-rose-600' : 'bg-gray-300'
                }`}
              >
                {selected === option && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <button
          type="button"
          onClick={handleNext}
          disabled={!selected}
          className="w-full rounded-full bg-rose-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-700 active:bg-rose-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          {isLastStep ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  )
}
