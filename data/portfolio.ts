export type PortfolioProject = {
  slug: string;
  title: string;
  category: "ecommerce" | "software";
  visual: "browser" | "ops" | "mobile";
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  isConcept?: boolean;
  link?: string;
  image?: string;
  featured?: boolean;
  role?: string;
  relatedService?: string;
};

// Real, independently built projects. Not client case studies yet; client
// work will replace or join these as engagements are delivered.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "ems",
    title: "EMS: Enterprise Employee Management System",
    category: "software",
    visual: "browser",
    description:
      "A role-based workforce platform with real-time dashboards, attendance tracking, and department management.",
    problem:
      "Growing teams need a way to manage attendance, departments, and access levels that feels like a real enterprise product, not a spreadsheet workaround.",
    approach:
      "Built a role-based access system with real-time dashboards, attendance tracking, and department management, including full light/dark theme support.",
    outcome:
      "A working employee management platform covering the day-to-day operations a growing team needs, from attendance to department structure.",
    tech: ["Next.js", "TypeScript"],
    link: "https://github.com/muhammadali-dotcom/Employee_Management.git",
    image: "/portfolio/ems.webp",
    featured: true,
    relatedService: "software-development",
  },
  {
    slug: "querybridge",
    title: "QueryBridge: AI-Powered Natural Language SQL Platform",
    category: "software",
    visual: "browser",
    description:
      "A schema-aware platform that turns natural language into safe SQL queries.",
    problem:
      "Non-technical team members and even engineers lose time writing and re-checking SQL for routine data questions.",
    approach:
      "Built on Next.js and the OpenAI API, QueryBridge is schema-aware and translates natural language into SQL, actively blocking destructive operations like DELETE, UPDATE, or DROP, with query history and interactive result visualization.",
    outcome:
      "A safe, schema-aware natural language query tool that lets people explore a database without writing or risking unsafe SQL.",
    tech: ["Next.js", "OpenAI API"],
    link: "https://github.com/muhammadali-dotcom/QueryBridge.git",
    image: "/portfolio/querybridge.webp",
    featured: true,
    relatedService: "software-development",
  },
  {
    slug: "roomtalk",
    title: "RoomTalk: Real-Time Multi-Room Chat App",
    category: "software",
    visual: "mobile",
    description:
      "A Socket.io-powered chat platform with public rooms, private messaging, and Redis-backed sessions.",
    problem:
      "Real-time chat needs to feel instant across many concurrent rooms and private conversations without the backend falling over.",
    approach:
      "Built with Socket.io for real-time messaging across public rooms and private conversations, using Redis TTL to manage temporary active sessions.",
    outcome:
      "A real-time, multi-room chat platform that handles public and private messaging with lightweight, self-expiring session state.",
    tech: ["Socket.io", "Redis", "Node.js"],
    link: "https://github.com/muhammadali-dotcom/RoomTalk",
    image: "/portfolio/roomtalk.webp",
    featured: true,
    relatedService: "software-development",
  },
  {
    slug: "expenzo",
    title: "Expenzo: Expense Tracker & Group Settlements",
    category: "software",
    visual: "ops",
    description:
      "A personal and group expense tracker with budgeting, analytics, and automated settlements.",
    problem:
      "Splitting and tracking group expenses across categories and people usually means messy spreadsheets and manual settlement math.",
    approach:
      "Built with Django to log income and expenses by category, visualize monthly trends and budgets, and automatically calculate settlements for group expenses split across a people directory.",
    outcome:
      "An expense tracker that handles personal budgeting and group settlements in one place, with automated math instead of manual reconciliation.",
    tech: ["Django", "Python"],
    link: "https://github.com/muhammadali-dotcom/django-expense-tracker",
    image: "/portfolio/expenzo.webp",
    featured: true,
    relatedService: "software-development",
  },
];
