import promoHero from '../../../assets/promo-hero.png'

export default function PromoBanner() {
  return (
    <div className="px-4 py-3">
      <img
        src={promoHero}
        alt="Discount 70% — Special Offer Only For This Week"
        className="w-full rounded-[4px]"
      />
    </div>
  )
}
