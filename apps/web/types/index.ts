import { definedTabs } from "@/constants";

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type Tab = (typeof definedTabs)[number];
export type TabName = Tab["name"];
