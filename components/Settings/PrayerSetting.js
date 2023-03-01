import {View, Image, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import CheckBox from 'expo-checkbox';
import React, { useState, useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {IqamaAthanSetting} from '../Settings/IqamaAthanSetting';
import {colors} from '../config/theme';


export const PrayerSetting = ({prayer}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [number, setNumber] = useState('');

	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

    const onCheckLimit = (value: string) => {
      const parsedQty = Number.parseInt(value)
      console.log(parsedQty)
      if (Number.isNaN(parsedQty)) {
        setNumber('0') //setter for state
      } else if (parsedQty > 30) {
        setNumber('30')
        console.log(number)
      } else {
        setNumber(parsedQty)
      }
    }

	return (
			<View style={[{backgroundColor: activeColors.primary}, styles.container]}>
            			    <Text style={[{color: activeColors.white, fontSize: 20}]}>{prayer}</Text>
            			    <View style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
                                <View style={styles.optionsContainer, {flexDirection: 'row', marginBottom: 30}}>
                                        <IqamaAthanSetting calling='Iqama'/>
                                        <IqamaAthanSetting calling='Athaan'/>
                                </View>

                                    <View style={{justifyContent: 'center', borderRadius: 20, backgroundColor: activeColors.white, alignItems: 'center', flexDirection: 'row'}}>
                                        <TextInput
                                            style={{height: 40, color: 'orange', paddingRight: 10, paddingLeft: 20}}
                                            placeholder="0"
                                            keyboardType='numeric'
                                            value={number}
                                            onChangeText={number=>onCheckLimit(number)}></TextInput>
                                        <Text style={{
                                            fontSize: 14,
                                            color: 'orange',
                                            paddingRight: 20,
                                            paddingLeft: 10,}}>MIN</Text>
                                    </View>
                                   <View
                                     style={{
                                       height: 1,
                                       width: '100%',
                                       backgroundColor: activeColors.white,
                                       alignItems: 'flex-start',
                                     }}
                                   />
                                </View>
                            </View>
			);
}


const styles = StyleSheet.create(
		{
			container: {
				justifyContent: 'center',
				width: '70%',
				aspectRatio: 1 / 1,
				borderWidth: 0,
				borderRadius: 5,
				flexDirection: 'column',
				alignItems: 'flex-start'
			},
			dateButtonText: {
				fontSize: 17,
				justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'center'
			},
			optionsContainer: {
			    borderRadius: 0
			},
			iqaamaOption: {
			    color: 'white',
			   	width: '100%',
               	paddingRight: 15,
           		paddingLeft: 25,
           		fontSize: 15
			},
			adhaanOption: {
			    color: 'white',
			   	width: '100%',
               	paddingRight: 15,
           		paddingLeft: 25,
           		fontSize: 15
			},
		    lineStyle:{
                width: '100%',
                borderBottomWidth: 1,
                borderColor: 'red',
           }
});
