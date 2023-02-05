import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useContext, useState} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import {PrayerHeader, PrayerCol} from './';
import {Overlay} from 'react-native-elements';


export const DateButton = ({date, onPress}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	const [visible, setVisible] = useState(false);

	const toggleOverlay = () => {
		setVisible(!visible);
	};


	return (
			<View>
				<TouchableOpacity onPress={toggleOverlay} style={[{backgroundColor: activeColors.primary}, styles.dateButton]}>
					<Text style={[{color: activeColors.white}, styles.dateButtonText]}>{date}</Text>
				</TouchableOpacity>

				<Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={[{backgroundColor: activeColors.background}, styles.overlay]}>
					<PrayerHeader/>
					<View style={styles.prayerTableContainer}>
						<PrayerCol/>
					</View>
				</Overlay>

			</View>
			);
};


const styles = StyleSheet.create({
	dateButton: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: '90%',
		aspectRatio: 1 / 1,
		borderWidth: 0,
		borderRadius: 15
	},
	dateButtonText: {
		fontSize: 17,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	overlay: {
		width: '90%',
		padding: 20
	}
});
