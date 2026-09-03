import Card from '../ui/Card'
import IconGridButton from '../ui/IconGridButton'

export default function ChannelMemberOnboardingSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="mb-3 text-base font-semibold text-gray-900">Channel Member Onboarding</h2>
        <div className="grid grid-cols-4 gap-x-1 gap-y-3">
          <IconGridButton icon="onboarding" label="Channel Onboarding" />
        </div>
      </Card>
    </div>
  )
}
