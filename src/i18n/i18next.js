import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  eng: {
    translation: require("./locales/eng/translation.json")
  },
  uz: {
    translation: require("./locales/uz/translation.json")
  },
  rus:{
    translation: require("./locales/rus/translation.json")
  }
  
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;