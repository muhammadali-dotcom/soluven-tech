import Link from "next/link";
import {
  Glasses,
  Lock,
  Search,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
  X,
  CheckCircle2,
  Heart,
} from "lucide-react";

const trustPoints = [
  { label: "Built around your customers", icon: Users, tone: "cyan" },
  { label: "Ready for growth", icon: TrendingUp, tone: "green" },
  { label: "Simple buying journeys", icon: ShoppingCart, tone: "cyan" },
] as const;

const discoverItems = [
  { label: "Linen Shirt", price: "£69", icon: Shirt, tone: "cyan" },
  { label: "Sunglasses", price: "£79", icon: Glasses, tone: "green" },
  { label: "Straw Bag", price: "£85", icon: ShoppingBag, tone: "cyan" },
] as const;

export function EcommerceHero() {
  return (
    <section className="website-dev-hero ecommerce-hero overflow-hidden bg-[var(--soluven-cream)]">
      <div className="mx-auto grid min-h-[calc(100svh-78px)] max-w-[1280px] items-center gap-8 px-6 py-9 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:py-10 xl:px-16">
        <div className="relative z-10 max-w-[460px] animate-hero-enter">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-[#14272B] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
          >
            ← All services
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.42em] text-[var(--soluven-green)] max-md:mt-6 max-sm:tracking-[0.28em]">
            Ecommerce development
          </p>

          <h1 className="mt-4 max-w-[460px] font-[family-name:var(--font-heading)] text-[28px] font-extrabold leading-[1.12] text-[#14272B] md:text-[32px] lg:text-[36px] xl:text-[38px]">
            Your online store should make buying feel easy.
          </h1>

          <p className="mt-4 max-w-[460px] text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            From first click to checkout, we build thoughtful e-commerce experiences that earn
            trust, remove friction and help your brand grow.
          </p>

          <p className="mt-3 max-w-[450px] border-l-2 border-[var(--soluven-green)] pl-3 text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            Because every lost click can become a lost customer.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--soluven-blue)] px-6 text-sm font-extrabold text-[#14272B] shadow-[0_18px_40px_rgba(99,203,248,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              Grow your store →
            </Link>
            <Link
              href="/why-soluven"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[rgba(20,39,43,0.2)] bg-white/25 px-6 text-sm font-extrabold text-[#14272B] transition-colors hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              See how we work
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustPoints.map(({ label, icon: Icon, tone }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    tone === "green"
                      ? "bg-[#7ED957]/20 text-[#13a865]"
                      : "bg-[#63CBF8]/18 text-[#00a8d9]"
                  }`}
                >
                  <Icon aria-hidden="true" size={15} strokeWidth={2.3} />
                </span>
                <span className="text-xs font-bold leading-tight text-[#14272B]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ec-stage relative min-h-[540px] animate-hero-enter [animation-delay:120ms] max-lg:min-h-[500px] max-sm:min-h-[380px]">
          <div aria-hidden="true" className="wd-orb wd-orb-cyan" />
          <div aria-hidden="true" className="wd-orb wd-orb-green" />
          <div aria-hidden="true" className="wd-orb wd-orb-small" />
          <div aria-hidden="true" className="ec-path" />
          <span className="ec-checkpoint ec-checkpoint-discover">
            <i />
            Discover
          </span>
          <span className="ec-checkpoint ec-checkpoint-choose">
            <i />
            Choose
          </span>

          <div className="ec-card ec-card-discover">
            <div className="ec-discover-head">
              <strong>Discover</strong>
              <Search aria-hidden="true" size={14} />
            </div>
            <div className="ec-discover-grid">
              {discoverItems.map(({ label, price, icon: Icon, tone }) => (
                <div key={label} className="ec-discover-item">
                  <span className={`ec-discover-thumb ${tone}`}>
                    <Icon aria-hidden="true" size={16} />
                  </span>
                  <strong>{label}</strong>
                  <em>{price}</em>
                </div>
              ))}
            </div>
          </div>

          <div className="ec-card ec-card-product">
            <span className="ec-product-heart">
              <Heart aria-hidden="true" size={14} />
            </span>
            <div className="ec-product-art">
              <ShoppingBag aria-hidden="true" size={54} strokeWidth={1.4} />
            </div>
            <strong className="ec-product-title">The Everyday Tote</strong>
            <span className="ec-product-price">£89</span>
            <div className="ec-product-swatches">
              <i className="swatch-cream" />
              <i className="swatch-green" />
              <i className="swatch-ink" />
            </div>
            <div className="ec-product-actions">
              <span className="ec-qty">1 ▾</span>
              <button type="button">Add to cart</button>
            </div>
          </div>

          <div className="ec-card ec-card-stat">
            <span className="ec-stat-icon">
              <TrendingUp aria-hidden="true" size={18} />
            </span>
            <span className="ec-stat-copy">
              <strong>+32%</strong>
              <em>conversion</em>
            </span>
          </div>

          <div className="ec-card ec-card-cart">
            <div className="ec-cart-head">
              <ShoppingCart aria-hidden="true" size={14} />
              <strong>Your cart (2)</strong>
            </div>
            <div className="ec-cart-item">
              <span className="ec-cart-thumb">
                <ShoppingBag aria-hidden="true" size={14} />
              </span>
              <span className="ec-cart-info">
                <strong>The Everyday Tote</strong>
                <em>£89</em>
              </span>
              <span className="ec-cart-qty">1</span>
              <X aria-hidden="true" size={12} className="ec-cart-remove" />
            </div>
            <div className="ec-cart-item">
              <span className="ec-cart-thumb">
                <ShoppingBag aria-hidden="true" size={14} />
              </span>
              <span className="ec-cart-info">
                <strong>Sunglasses</strong>
                <em>£79</em>
              </span>
              <span className="ec-cart-qty">1</span>
              <X aria-hidden="true" size={12} className="ec-cart-remove" />
            </div>
            <div className="ec-cart-subtotal">
              <span>Subtotal</span>
              <strong>£168</strong>
            </div>
            <button type="button" className="ec-cart-cta">
              Go to checkout
            </button>
          </div>

          <div className="ec-card ec-card-checkout">
            <div className="ec-checkout-head">
              <span className="ec-checkout-icon">
                <Lock aria-hidden="true" size={14} />
              </span>
              <strong>Secure checkout</strong>
            </div>
            <span className="ec-input-label">Card number</span>
            <span className="ec-input">•••• •••• •••• 4242</span>
            <div className="ec-input-row">
              <span className="ec-input-half">
                <span className="ec-input-label">MM / YY</span>
                <span className="ec-input">•• / ••</span>
              </span>
              <span className="ec-input-half">
                <span className="ec-input-label">CVC</span>
                <span className="ec-input">•••</span>
              </span>
            </div>
            <button type="button" className="ec-checkout-cta">
              Pay securely
            </button>
          </div>

          <div className="ec-card ec-card-confirmed">
            <span className="ec-confirmed-icon">
              <CheckCircle2 aria-hidden="true" size={22} />
            </span>
            <span className="ec-confirmed-copy">
              <strong>Order confirmed</strong>
              <em>Your order is on its way.</em>
            </span>
          </div>

          <div className="ec-box" aria-hidden="true">
            <span className="ec-leaf ec-leaf-left" />
            <span className="ec-leaf ec-leaf-right" />
            <div className="ec-box-lid" />
            <div className="ec-box-face">SOLUVEN</div>
            <div className="ec-box-tape" />
          </div>
        </div>
      </div>
    </section>
  );
}
