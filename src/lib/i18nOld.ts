import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const TRANSLATION_LANGS = ["ru", "en"];
const TRANSLATION_JSON_FILES = ["home", "settings"];

interface PropsFetchTranslationJson {
  fileNames: string[];
  lang: string;
}

const fetchJson = async (fileName: string, lang: string) => {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/locales/${lang}/${fileName}.json`
  );
  const data = await response.json();
  return { [fileName]: data };
};

const fetchTranslationJson = async (props: PropsFetchTranslationJson) => {
  const { fileNames, lang } = props;
  let resource: any = {
    [lang]: {},
  };

  for await (const fileName of fileNames) {
    const res = await fetchJson(fileName, lang);
    resource[lang] = { ...resource[lang], ...res };
  }

  return resource;
};

const getResources = async (langs: string[], fileNames: string[]) => {
  let resources: any = {};
  for await (const lang of langs) {
    const resource = await fetchTranslationJson({
      fileNames,
      lang,
    });
    resources = { ...resources, ...resource };
  }
  return resources;
};

async function i18next() {
  const resources = await getResources(
    TRANSLATION_LANGS,
    TRANSLATION_JSON_FILES
  );

  console.log("resources", resources);

  i18n.use(initReactI18next).init({
    lng: "ru",
    ns: ["home", "settings"],
    resources,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
}

export default i18next();
