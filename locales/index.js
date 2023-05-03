import { en } from './en';
import { ko } from './ko';
import { zh } from './zh';
import { ja } from './ja';

import { I18n } from 'i18n-js';
import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';


const translations = {
  en,
  ko,
  ja,
  zh
};


const i18n = new I18n(translations);


i18n.enableFallback = true;
i18n.locale = Localization.locale;

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default i18n;


