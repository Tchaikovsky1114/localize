
import { useCallback, useEffect, useState } from 'react'
import * as Localization from 'expo-localization'
import i18n from '../locales'
const useLanguage = () => {
  const [language, setLanguage] = useState(Localization.locale)

  const changeLanguageHandler = useCallback((nation) => {
    i18n.locale = nation;
    setLanguage(i18n.locale)
  },[])

  const convertCurrency = useCallback((value) => {
    switch (i18n.locale.substring(0,2)) {
      case 'ko':
        return `${i18n.numberToCurrency(value,{unit:'₩',precision:0,raise:true})}`
      case 'ja':
        return `${i18n.numberToCurrency(value * 0.10162,{unit:'¥',precision:0,raise:true,})} (JPY)`
      case 'zh':
        return `${i18n.numberToCurrency(value * 0.00517,{unit:'¥',precision:0,raise:true})} (CNY)`;
      case 'en':
        return i18n.numberToCurrency((value * 0.00075 ),{unit:'$',precision:2});
      default:
        return value;
    }
  },[])

  useEffect(() => {
    i18n.locale = language
  },[language])

  return { changeLanguageHandler, convertCurrency }
}

export default useLanguage

