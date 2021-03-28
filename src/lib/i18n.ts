import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
import { languages } from "../types/Languages";

i18n
  .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en", // Если не находит язык, то выбирает этот
    saveMissing: true,
    debug: true,
    whitelist: languages,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
