import {
  Globe,
  ShoppingCart,
  Code,
  PenNib,
  DeviceMobile,
  Megaphone,
  ShareNetwork,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export const serviceIcons: Record<string, Icon> = {
  "website-development": Globe,
  ecommerce: ShoppingCart,
  "software-development": Code,
  "logo-design": PenNib,
  "mobile-app-development": DeviceMobile,
  "digital-marketing": Megaphone,
  "social-media-marketing": ShareNetwork,
  seo: MagnifyingGlass,
};
