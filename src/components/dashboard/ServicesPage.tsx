import Card from '../ui/Card'
import Icon, { type IconName } from '../icons/Icon'

interface ServiceItem {
  icon: IconName
  label: string
}

const eReloadItems: ServiceItem[] = [
  { icon: 'voucher', label: 'E-voucher' },
  { icon: 'printer', label: 'Re-print Voucher' },
  { icon: 'history', label: 'History' },
  { icon: 'report', label: 'Report' },
  { icon: 'bundle', label: 'Bundle subscription' },
  { icon: 'creditTransfer', label: 'Credit transfer' },
  { icon: 'billPayment', label: 'Bill Payment' },
  { icon: 'gift', label: 'CVM Offer' },
  { icon: 'shield', label: 'Retention Offer' },
  { icon: 'ban', label: 'Void voucher' },
  { icon: 'ticket', label: 'Customer Recharge' },
  { icon: 'wallet', label: 'Wallet Topup' },
]

const customerActivateItems: ServiceItem[] = [
  { icon: 'sim', label: 'Prepaid' },
  { icon: 'refresh', label: 'SIM replacement' },
  { icon: 'clipboard', label: 'Fulfilment' },
  { icon: 'billPayment', label: 'Postpaid' },
  { icon: 'arrowSwap', label: 'Port IN' },
  { icon: 'resubmit', label: 'Resubmit' },
  { icon: 'report', label: 'Commission report' },
  { icon: 'router', label: 'HBB' },
  { icon: 'userForm', label: 'General Request' },
]

const stockItems: ServiceItem[] = [
  { icon: 'box', label: 'Inventory Dashboard' },
  { icon: 'cart', label: 'Sales order' },
  { icon: 'router', label: 'Purchase order' },
  { icon: 'undo', label: 'Stock return' },
  { icon: 'mapPin', label: 'Visit Management' },
  { icon: 'hierarchy', label: 'My Hierarchy' },
]

const b2bItems: ServiceItem[] = [
  { icon: 'hash', label: 'CRN Registration' },
  { icon: 'sim', label: 'B2B Prepaid' },
  { icon: 'billPayment', label: 'B2B Postpaid' },
]

const broadcastItems: ServiceItem[] = [
  { icon: 'send', label: 'Send Broadcast' },
  { icon: 'download', label: 'Received' },
  { icon: 'upload', label: 'Sent' },
]

const kpiItems: ServiceItem[] = [
  { icon: 'smiley', label: 'Sales KPIs' },
  { icon: 'barChart', label: 'performance at glance' },
  { icon: 'onboarding', label: 'Channel Member Hiring' },
]

function ServiceRow({ icon, label }: ServiceItem) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 py-3 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors"
    >
      <Icon name={icon} className="h-5 w-5 text-gray-400" />
      <span className="flex-1 text-sm font-medium text-gray-800">{label}</span>
      <Icon name="chevronRight" className="h-4 w-4 text-gray-300" />
    </button>
  )
}

function ServiceGroup({ title, items }: { title: string; items: ServiceItem[] }) {
  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="pb-3 text-base font-semibold text-gray-900">{title}</h2>
        <hr className="border-gray-100" />
        <div className="divide-y divide-gray-100">
          {items.map((item, i) => (
            <ServiceRow key={`${item.label}-${i}`} icon={item.icon} label={item.label} />
          ))}
        </div>
      </Card>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div>
      <div className="px-4 pt-3">
        <h1 className="text-xl font-bold text-gray-900">Services</h1>
      </div>
      <ServiceGroup title="E-reload" items={eReloadItems} />
      <ServiceGroup title="Customer activates" items={customerActivateItems} />
      <ServiceGroup title="Stock Management" items={stockItems} />
      <ServiceGroup title="B2B Activities" items={b2bItems} />
      <ServiceGroup title="Broadcast" items={broadcastItems} />
      <ServiceGroup title="KPIs" items={kpiItems} />
    </div>
  )
}
