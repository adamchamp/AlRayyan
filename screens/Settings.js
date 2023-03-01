import {StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, UIManager, TouchableOpacity, Linking, Image} from 'react-native';
import React, { useEffect, useContext } from 'react';
import {colors} from '../config/theme';
import {NotificationCol, PrayerCol} from '../components';
import {ThemeContext} from '../contexts/ThemeContext';
import { LogoHeader } from '../components/LogoHeader';
import DropDownItem from 'react-native-drop-down-item';
import { PrayerOptions } from '../components/PrayerOptions'
import {SettingsOption} from '../components/Settings/SettingsOption';
import {AccordionItem} from 'react-native-accordion-list-view';




const Settings = () => {

        const {theme} = useContext(ThemeContext);
        let activeColors = colors[theme.mode];

        const prayers = [
            {
                id: 0,
                prayer: 'Fajr'
            },
            {
                id: 1,
                prayer: 'Zuhur'
            },
            {
                id: 2,
                prayer: 'Asr'
            } ,
            {
                id: 3,
                prayer: 'Maghrib'
            },
            {
                id: 4,
                prayer: 'Isha'
            }
        ];

	    const themes = [
            {
                id: 0,
                theme: 'Dark',
            },
            {
                id: 1,
                theme: 'Light',
            },
            {
                id: 2,
                theme: 'System Default',
            },
        ];

	    const languages = [
            {
                id: 0,
                language: 'English',
            },
            {
                id: 1,
                language: 'اُردُو',
            },
            {
                id: 2,
                language: 'عربي',
            },
        ];

        useEffect(() => {
            if (Platform.OS === 'android') {
                if (UIManager.setLayoutAnimationEnabledExperimental) {
                    UIManager.setLayoutAnimationEnabledExperimental(true);
                }
            }
        }, []);

    return (
        <SafeAreaView>
            <LogoHeader/>

                  <ScrollView style={styles.container}>

                      <AccordionItem
                        containerStyle = {{
                        backgroundColor: activeColors.primary,
                        paddingVertical: '3%',
                        marginBottom: 13
                        }}
                        customTitle={() => <Text style={styles.title}>Notifications</Text>}
                        customBody={() => prayers.map(i => (
                            <PrayerOptions prayer = {i.prayer}/>
                        ))}
                        animationDuration={400}
                        isOpen={false}
                        onPress={(isOpen) => console.log(isOpen)}
                      />

                      <AccordionItem
                        containerStyle = {{
                        backgroundColor: activeColors.primary,
                        paddingVertical: '3%',
                        marginBottom: 13
                        }}
                        customTitle={() => <Text style={styles.title}>Theme</Text>}
                        customBody={() => themes.map(i => (
                            <SettingsOption option = {i.theme}/>
                        ))}
                        animationDuration={400}
                        isOpen={false}
                        onPress={(isOpen) => console.log(isOpen)}
                      />

                      <AccordionItem
                        containerStyle = {{
                        backgroundColor: activeColors.primary,
                        paddingVertical: '3%',
                        marginBottom: 13
                        }}
                        customTitle={() => <Text style={styles.title}>Language</Text>}
                        customBody={() => languages.map(i => (
                            <SettingsOption style={{justifyContent: 'flex-start', alignSelf: 'flex-start'}} option = {i.language}/>
                        ))}
                        animationDuration={400}
                        isOpen={false}
                        onPress={(isOpen) => console.log(isOpen)}
                      />

                      <View style={{backgroundColor: activeColors.primary, borderRadius: 15, flex: 1, alignContent: 'flex-start'}}>
                          <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 0}}>
                            <TouchableOpacity
                              style={styles.buttonStyle}
                              onPress={() =>
                                Linking.openURL("https://globalislamic.org/")
                              }>
                              <Image
                                style={styles.iconStyle}
                                source={{
                                  uri: "https://www.iconsdb.com/icons/preview/white/link-xl.png",
                                }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={styles.buttonStyle}
                              onPress={() =>
                                Linking.openURL("https://www.facebook.com")
                              }>
                              <Image
                                style={styles.iconStyle}
                                source={{
                                  uri: "https://www.iconsdb.com/icons/preview/white/facebook-3-xl.png",
                                }}
                              />
                            </TouchableOpacity>
                        </View>
                        <View style={{textAlign: 'center'}}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: 'white', paddingBottom: 20}}>Made by eWorx Technology</Text>
                            <Text style={{textAlign: 'center', fontSize: 13, color: 'white', paddingBottom: 20, paddingHorizontal: '5%'}}>Developers: Abaseen, Adam, Ashok, Awwab, Eyad, Malik, Narayan, Talha, Umair, Waleed, Yasser</Text>
                        </View>
                      </View>



                  </ScrollView>
        </SafeAreaView>
    );
};
export default Settings;
const styles = StyleSheet.create({
    container: {
        paddingVertical: '5%',
        paddingHorizontal: '3%',
        height: '100%',
    },
    item: {
        paddingVertical: '5%',
        paddingHorizontal: '3%',
        height: '100%'
    },
    title: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 20
    },
    buttonStyle: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
});
