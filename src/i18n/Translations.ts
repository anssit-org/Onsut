import ar from "./ar.json";
import he from "./he.json";
import en from "./en.json";
import type { Lang } from "../App";

const translations = {
  ar,
  he,
  en,
};

export function t(lang: Lang, key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value ?? key;
}
