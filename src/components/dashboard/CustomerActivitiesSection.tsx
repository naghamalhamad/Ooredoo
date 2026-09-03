import type { IconName } from '../icons/Icon'
import Card from '../ui/Card'
import IconGridButton from '../ui/IconGridButton'

export const customerActivities: { icon: IconName; label: string }[] = [
  { icon: 'sim', label: 'Prepaid' },
  { icon: 'refresh', label: 'SIM replacement' },
  { icon: 'handshake', label: 'Settlement' },
  { icon: 'billPayment', label: 'Postpaid' },
  { icon: 'server', label: 'HSS' },
  { icon: 'arrowSwap', label: 'PortIN' },
  { icon: 'resubmit', label: 'Resubmit' },
  { icon: 'clipboard', label: 'Reports' },
  { icon: 'userForm', label: 'General Request' },
  { icon: 'clipboard', label: 'ProfilePan' },
]

export default function CustomerActivitiesSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="pb-3 text-base font-semibold text-gray-900">Customer Activities</h2>
        <hr className="mb-3 border-gray-100" />
        <div className="grid grid-cols-5 gap-x-1 gap-y-3">
          {customerActivities.map((activity) => (
            <IconGridButton
              key={activity.label}
              icon={activity.icon}
              label={activity.label}
              iconColor="#3CDBC0"
            />
          ))}
        </div>
      </Card>
    </div>
  )
}
