import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';


export const PrayerSetting = ({props}) => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={styles.container}>
				<Text style={styles.prayerName}>{props.name}</Text>

				<View style={styles.optionsContainer}>
					<View style={styles.iqaamaOption}>
						<Text>Iqaama</Text>
					</View>

					<View style={styles.adhanOption}>
						<Text>Adhan</Text>
					</View>
				</View>

				<View style={styles.notificationTime}>
					<Text></Text>
					<Text>Min</Text>
				</View>


			</View>
			);
}


const styles = StyleSheet.create(
		{
			container: {
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
			}
		});
