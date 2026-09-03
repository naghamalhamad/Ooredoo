import type { IconName } from '../icons/Icon'
import Card from '../ui/Card'
import IconGridButton from '../ui/IconGridButton'

export const stockActions: { icon: IconName; label: string }[] = [
  { icon: 'box', label: 'Inventory Dashboard' },
  { icon: 'cart', label: 'Sales order' },
  { icon: 'router', label: 'Raw material order' },
  { icon: 'undo', label: 'Stock return' },
  { icon: 'hierarchy', label: 'My Hierarchy' },
  { icon: 'checkIn', label: 'Check-in' },
]

export default function StockManagementSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="pb-3 text-base font-semibold text-gray-900">Stock Management</h2>
        <hr className="mb-3 border-gray-100" />
        <div className="grid grid-cols-4 gap-x-1 gap-y-3">
          {stockActions.map((action) => (
            <IconGridButton
              key={action.label}
              icon={action.icon}
              label={action.label}
              iconColor="#F04E98"
            />
          ))}
        </div>
      </Card>
    </div>
  )
}
