import type { IconName } from '../icons/Icon'
import Card from '../ui/Card'
import IconGridButton from '../ui/IconGridButton'
import WalletAccountRow from './WalletAccountRow'

const walletAccounts = [
  { name: 'E-Topup', operator: 'Ooredoo', balance: '123.333' },
  { name: 'E-Voucher', operator: 'Warid', balance: '326.665' },
  { name: 'Plan subscription', operator: 'Operator', balance: '6468.5' },
  { name: 'Visit', operator: 'Operator', balance: '00.00' },
]

export const eReloadActions: { icon: IconName; label: string }[] = [
  { icon: 'voucher', label: 'E-voucher' },
  { icon: 'history', label: 'History' },
  { icon: 'report', label: 'Report' },
  { icon: 'bundle', label: 'Bundle subscription' },
  { icon: 'bundle', label: 'Bundle subscription' },
  { icon: 'creditTransfer', label: 'Credit transfer' },
  { icon: 'billPayment', label: 'Bill Payment' },
  { icon: 'ticket', label: 'Voucher Bundle' },
  { icon: 'wallet', label: 'Wallet recharge' },
  { icon: 'merge', label: 'Customer merge' },
  { icon: 'snowflake', label: 'Ice prepaid' },
  { icon: 'gift', label: 'Cyber Offer' },
  { icon: 'ticket', label: 'Reservation offer' },
]

export default function EReloadSection() {
  return (
    <div className="px-4 py-2">
      <Card>
        <h2 className="pb-3 text-base font-semibold text-gray-900">E-Reload</h2>
        <hr className="mb-3 border-gray-100" />

        <div className="mb-2 flex items-center justify-between px-1 text-xs text-gray-400">
          <span>Your Wallet Accounts</span>
          <span>Balance QAR</span>
        </div>
        <div className="flex flex-col gap-2">
          {walletAccounts.map((account) => (
            <WalletAccountRow key={account.name} {...account} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-x-1 gap-y-3">
          {eReloadActions.map((action, i) => (
            <IconGridButton key={`${action.label}-${i}`} icon={action.icon} label={action.label} />
          ))}
        </div>
      </Card>
    </div>
  )
}
