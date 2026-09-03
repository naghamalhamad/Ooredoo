import Icon, { type IconName } from '../icons/Icon'
import Card from '../ui/Card'

interface SettingsRowProps {
  icon: IconName
  label: string
  value?: string
}

function SettingsRow({ icon, label, value }: SettingsRowProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors"
    >
      <span className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-600">
          <Icon name={icon} className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-gray-800">{label}</span>
      </span>
      <span className="flex items-center gap-2 text-sm text-gray-400">
        {value && <span>{value}</span>}
        <Icon name="chevronRight" className="h-4 w-4" />
      </span>
    </button>
  )
}

export default function SettingsPage() {
  return (
    <div>
      <div className="px-4 pt-3">
        <h1 className="text-xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="px-4 py-2">
        <Card>
          <div className="flex items-center gap-3 pb-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-rose-600">
              <Icon name="user" className="h-7 w-7" />
            </span>
            <div>
              <p className="text-base font-semibold text-gray-900">Omer</p>
              <p className="text-sm text-gray-400">D111123333</p>
            </div>
          </div>
          <div className="divide-y divide-gray-100 border-t border-gray-100">
            <SettingsRow icon="globe" label="Language & Region" value="English" />
            <SettingsRow icon="bell" label="Notifications" value="On" />
            <SettingsRow icon="shield" label="Security" />
            <SettingsRow icon="help" label="Help & Support" />
          </div>
        </Card>
      </div>

      <div className="px-4 py-2">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-rose-600 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50 active:bg-rose-100 transition-colors"
        >
          <Icon name="logout" className="h-4 w-4" />
          Log out
        </button>
      </div>
    </div>
  )
}
