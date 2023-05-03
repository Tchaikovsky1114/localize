import { Button, Text, View } from 'react-native'
import React from 'react'
import i18n from './locales';
import useLanguage from './hooks/useLanguage';



export default function App() {
  const { changeLanguageHandler,convertCurrency } = useLanguage();
    


  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <View style={{borderWidth:1, borderColor:'#2d63e2',paddingHorizontal: 8, paddingVertical:4, justifyContent:'center',alignItems:'center' }}>
        <Text style={{color:'#2d63e2',fontWeight:'bold',fontSize:18}}>
          {i18n.t('welcome')}
        </Text>
      </View>
      <View style={{gap:12,marginTop: 16,width: 100,}}> 
      <Button title="영어" onPress={() => changeLanguageHandler('en')} />
      <Button title="한국어" onPress={() => changeLanguageHandler('ko')} />
      <Button title="일본어" onPress={() => changeLanguageHandler('ja')} />
      <Button title="중국어" onPress={() => changeLanguageHandler('zh')} />
      </View>
      <View style={{marginTop: 16, borderWidth: 1, borderColor:'#f41', paddingHorizontal:8, paddingVertical:4}}>
        <Text style={{color:'#f41'}}>{convertCurrency(33000)}</Text>
      </View>
      <Text></Text>
    </View>
  );
}
