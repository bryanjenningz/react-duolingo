export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Arabic",
    nativeName: "العربية",
    viewBox: "0 2178 82 66",
    code: "ar",
  },
  { name: "Bengali", nativeName: "বাংলা", viewBox: "0 1914 82 66", code: "bn" },
  { name: "Czech", nativeName: "Čeština", viewBox: "0 1848 82 66", code: "cs" },
  { name: "German", nativeName: "Deutsch", viewBox: "0 198 82 66", code: "de" },
  { name: "Greek", nativeName: "Ελληνικά", viewBox: "0 924 82 66", code: "el" },
  { name: "English", nativeName: "English", viewBox: "0 0 82 66", code: "en" },
  { name: "Spanish", nativeName: "Español", viewBox: "0 66 82 66", code: "es" },
  {
    name: "French",
    nativeName: "Français",
    viewBox: "0 132 82 66",
    code: "fr",
  },
  { name: "Hindi", nativeName: "हिंदी", viewBox: "0 1914 82 66", code: "hi" },
  {
    name: "Hungarian",
    nativeName: "Magyar",
    viewBox: "0 1584 82 66",
    code: "hu",
  },
  {
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
    viewBox: "0 1980 82 66",
    code: "id",
  },
  {
    name: "Italian",
    nativeName: "Italiano",
    viewBox: "0 330 82 66",
    code: "it",
  },
  {
    name: "Japanese",
    nativeName: "日本語",
    viewBox: "0 264 82 66",
    code: "ja",
  },
  { name: "Korean", nativeName: "한국어", viewBox: "0 396 82 66", code: "ko" },
  {
    name: "Dutch",
    nativeName: "Nederlands",
    viewBox: "0 726 82 66",
    code: "code-NL",
  },
  { name: "Polish", nativeName: "Polski", viewBox: "0 1056 82 66", code: "pl" },
  {
    name: "Portuguese",
    nativeName: "Português",
    viewBox: "0 594 82 66",
    code: "pt",
  },
  {
    name: "Romanian",
    nativeName: "Română",
    viewBox: "0 1386 82 66",
    code: "ro",
  },
  {
    name: "Russian",
    nativeName: "Русский",
    viewBox: "0 528 82 66",
    code: "ru",
  },
  { name: "Thai", nativeName: "ภาษาไทย", viewBox: "0 2310 82 66", code: "th" },
  {
    name: "Tagalog",
    nativeName: "Tagalog",
    viewBox: "0 3036 82 66",
    code: "tl",
  },
  { name: "Turkish", nativeName: "Türkçe", viewBox: "0 660 82 66", code: "tr" },
  {
    name: "Ukrainian",
    nativeName: "Українською",
    viewBox: "0 1716 82 66",
    code: "uk",
  },
  {
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
    viewBox: "0 1188 82 66",
    code: "vi",
  },
  {
    name: "Chinese",
    nativeName: "中文",
    viewBox: "0 462 82 66",
    code: "code-CN",
  },
] as const;

export default languages;
