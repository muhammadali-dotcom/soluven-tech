import type { SVGProps } from "react";

type IllustrationProps = SVGProps<SVGSVGElement>;

const BLUE = "var(--soluven-blue)";
const GREEN = "var(--soluven-green)";

function WebsiteDevelopmentIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      <rect x="30" y="50" width="150" height="110" rx="10" fill={BLUE} opacity="0.15" />
      <rect x="30" y="50" width="150" height="110" rx="10" stroke={BLUE} strokeWidth="4" />
      <path d="M30 76h150" stroke={BLUE} strokeWidth="4" />
      <circle cx="46" cy="63" r="4" fill={BLUE} />
      <circle cx="60" cy="63" r="4" fill={BLUE} />
      <circle cx="74" cy="63" r="4" fill={BLUE} />
      <rect x="48" y="92" width="60" height="8" rx="4" fill={BLUE} opacity="0.5" />
      <rect x="48" y="108" width="100" height="8" rx="4" fill={BLUE} opacity="0.3" />
      <rect x="48" y="124" width="80" height="8" rx="4" fill={BLUE} opacity="0.3" />
      <rect x="70" y="90" width="120" height="90" rx="10" fill={GREEN} opacity="0.18" />
      <rect x="70" y="90" width="120" height="90" rx="10" stroke={GREEN} strokeWidth="4" />
      <path d="M70 112h120" stroke={GREEN} strokeWidth="4" />
      <rect x="86" y="128" width="50" height="8" rx="4" fill={GREEN} opacity="0.6" />
      <rect x="86" y="144" width="88" height="8" rx="4" fill={GREEN} opacity="0.4" />
    </svg>
  );
}

function EcommerceIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      <path d="M60 90h120l-10 90a12 12 0 0 1-12 11H82a12 12 0 0 1-12-11L60 90z" fill={GREEN} opacity="0.16" />
      <path d="M60 90h120l-10 90a12 12 0 0 1-12 11H82a12 12 0 0 1-12-11L60 90z" stroke={GREEN} strokeWidth="4" />
      <path d="M85 90V70a35 35 0 0 1 70 0v20" stroke={BLUE} strokeWidth="4" />
      <circle cx="85" cy="104" r="5" fill={BLUE} />
      <circle cx="155" cy="104" r="5" fill={BLUE} />
      <path d="M96 140l16 16 32-32" stroke={GREEN} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SoftwareDevelopmentIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      <rect x="45" y="45" width="46" height="46" rx="10" fill={BLUE} opacity="0.18" />
      <rect x="45" y="45" width="46" height="46" rx="10" stroke={BLUE} strokeWidth="4" />
      <rect x="150" y="45" width="46" height="46" rx="10" fill={GREEN} opacity="0.18" />
      <rect x="150" y="45" width="46" height="46" rx="10" stroke={GREEN} strokeWidth="4" />
      <rect x="97" y="150" width="46" height="46" rx="10" fill={BLUE} opacity="0.18" />
      <rect x="97" y="150" width="46" height="46" rx="10" stroke={BLUE} strokeWidth="4" />
      <path d="M91 68h59" stroke={BLUE} strokeWidth="4" />
      <path d="M68 91v58" stroke={BLUE} strokeWidth="4" />
      <path d="M173 91v58" stroke={GREEN} strokeWidth="4" />
      <path d="M120 150v-14" stroke={GREEN} strokeWidth="4" />
      <circle cx="68" cy="91" r="5" fill={BLUE} />
      <circle cx="173" cy="91" r="5" fill={GREEN} />
      <circle cx="120" cy="150" r="5" fill={GREEN} />
    </svg>
  );
}

function LogoDesignIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      <circle cx="100" cy="105" r="55" fill={BLUE} opacity="0.18" />
      <circle cx="100" cy="105" r="55" stroke={BLUE} strokeWidth="4" />
      <path d="M140 145a55 55 0 1 0 -80 -80" fill={GREEN} opacity="0.18" />
      <circle cx="140" cy="145" r="55" stroke={GREEN} strokeWidth="4" />
    </svg>
  );
}

function MobileAppDevelopmentIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      <rect x="80" y="35" width="80" height="170" rx="16" fill={BLUE} opacity="0.12" />
      <rect x="80" y="35" width="80" height="170" rx="16" stroke={BLUE} strokeWidth="4" />
      <path d="M108 47h24" stroke={BLUE} strokeWidth="4" strokeLinecap="round" />
      <rect x="94" y="65" width="26" height="26" rx="6" fill={BLUE} opacity="0.5" />
      <rect x="126" y="65" width="26" height="26" rx="6" fill={GREEN} opacity="0.6" />
      <rect x="94" y="97" width="26" height="26" rx="6" fill={GREEN} opacity="0.35" />
      <rect x="126" y="97" width="26" height="26" rx="6" fill={BLUE} opacity="0.3" />
      <rect x="94" y="129" width="58" height="16" rx="8" fill={GREEN} opacity="0.5" />
      <circle cx="120" cy="185" r="7" stroke={BLUE} strokeWidth="4" />
    </svg>
  );
}

function DigitalMarketingIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      <path d="M40 175h160" stroke={BLUE} strokeWidth="4" strokeLinecap="round" />
      <path d="M40 60v115" stroke={BLUE} strokeWidth="4" strokeLinecap="round" />
      <path d="M50 150l40-40 30 24 60-64" stroke={GREEN} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M118 70h22v22" stroke={GREEN} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="150" r="6" fill={BLUE} />
      <circle cx="90" cy="110" r="6" fill={BLUE} />
      <circle cx="120" cy="134" r="6" fill={BLUE} />
      <circle cx="180" cy="70" r="6" fill={GREEN} />
    </svg>
  );
}

function SocialMediaMarketingIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      <path d="M45 65h95a15 15 0 0 1 15 15v45a15 15 0 0 1-15 15H95l-25 22v-22H45a15 15 0 0 1-15-15V80a15 15 0 0 1 15-15z" fill={BLUE} opacity="0.16" />
      <path d="M45 65h95a15 15 0 0 1 15 15v45a15 15 0 0 1-15 15H95l-25 22v-22H45a15 15 0 0 1-15-15V80a15 15 0 0 1 15-15z" stroke={BLUE} strokeWidth="4" strokeLinejoin="round" />
      <path d="M125 100h60a12 12 0 0 1 12 12v34a12 12 0 0 1-12 12h-6v16l-20-16h-34a12 12 0 0 1-12-12v-10" fill={GREEN} opacity="0.2" />
      <path d="M125 100h60a12 12 0 0 1 12 12v34a12 12 0 0 1-12 12h-6v16l-20-16h-34a12 12 0 0 1-12-12v-10" stroke={GREEN} strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

function SeoIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 240" fill="none" {...props}>
      <rect x="50" y="55" width="110" height="16" rx="8" fill={GREEN} opacity="0.6" />
      <rect x="50" y="83" width="80" height="12" rx="6" fill={BLUE} opacity="0.4" />
      <rect x="50" y="105" width="95" height="12" rx="6" fill={BLUE} opacity="0.3" />
      <rect x="50" y="127" width="65" height="12" rx="6" fill={BLUE} opacity="0.25" />
      <circle cx="150" cy="150" r="32" fill={BLUE} opacity="0.15" />
      <circle cx="150" cy="150" r="32" stroke={BLUE} strokeWidth="6" />
      <path d="M173 173l22 22" stroke={BLUE} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export const serviceIllustrations: Record<
  string,
  (props: IllustrationProps) => React.JSX.Element
> = {
  "website-development": WebsiteDevelopmentIllustration,
  ecommerce: EcommerceIllustration,
  "software-development": SoftwareDevelopmentIllustration,
  "logo-design": LogoDesignIllustration,
  "mobile-app-development": MobileAppDevelopmentIllustration,
  "digital-marketing": DigitalMarketingIllustration,
  "social-media-marketing": SocialMediaMarketingIllustration,
  seo: SeoIllustration,
};
