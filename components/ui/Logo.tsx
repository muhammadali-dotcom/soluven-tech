import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
};

export function Logo({ className = "", size = 32, withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/soluven_icon.png"
        alt=""
        width={size}
        height={size}
        className="shrink-0"
      />
      {withWordmark && (
        <span
          className="font-[family-name:var(--font-heading)] font-bold uppercase tracking-tight"
          style={{ fontSize: `${size * 0.56}px` }}
        >
          <span style={{ color: "var(--soluven-blue)" }}>SOLU</span>
          <span style={{ color: "var(--soluven-green)" }}>VEN</span>
        </span>
      )}
    </span>
  );
}
