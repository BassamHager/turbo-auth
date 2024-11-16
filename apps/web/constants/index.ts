export const definedTabs = [
  { name: "home", to: "/", isActive: false },
  {
    name: "dashboard",
    to: "/dashboard",
    isActive: false,
    isAuthRequired: true,
  },
  { name: "profile", to: "/profile", isActive: false, isAuthRequired: true },
  { name: "signin", to: "/auth/signin", isActive: false },
  { name: "signup", to: "/auth/signup", isActive: false },
];
