const TRANSLATION_LANGS = ["ru", "en"];
const TRANSLATION_JSON_FILES = ["home", "settings"];

interface PropsFetchTranslationJson {
  fileNames: string[];
  lang: string;
}

export const fetchJson = async (fileName: string, lang: string) => {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/locales/${lang}/${fileName}.json`
  );
  const data = await response.json();
  return { [fileName]: data };
};

export const fetchTranslationJson = async (
  props: PropsFetchTranslationJson
) => {
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

export const getTranslationJson = async (
  langs: string[],
  fileNames: string[]
) => {
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
