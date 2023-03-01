import {View, Image, StyleSheet, Text, TouchableHighlight} from 'react-native';
import CheckBox from 'expo-checkbox';
import React, { useState, useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';

export const SettingsOption = ({option}) => {
    const {theme} = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    const onPress = () => {

    }

    return (
			<View>
			    <TouchableHighlight onPress={() => onPress()}>
			        <Text style={[{color: activeColors.white, fontSize: 20}, styles.container]}>{option}</Text>
			    </TouchableHighlight>
			</View>
    )

}

const styles = StyleSheet.create({
	container: {
		width: '80%',
		gap: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'stretch',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 30,
		marginTop: 10,
		marginBottom: 10
	},
	text: {
        height: 1,
        width: '100%',
        alignItems: 'flex-start',
	},
	underlineTextStyle: {
	    textDecorationLine: 'underline'
	}

});