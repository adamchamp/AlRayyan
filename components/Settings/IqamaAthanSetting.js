import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CheckBox from 'expo-checkbox';
import React, { useState, useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';

export const IqamaAthanSetting = ({calling}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style = { {flexDirection: 'row', width: '80%'} }>
            <Text style={styles.iqaamaOption}>{calling}</Text>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
        </View>
    );
}

const styles = StyleSheet.create(
		{
			iqaamaOption: {
			    color: 'white',
			   	width: '60%',

               	paddingRight: 25,
           		paddingLeft: 30,
           		fontSize: 15
			},
		}
)