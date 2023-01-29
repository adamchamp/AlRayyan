import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import { Table, Row, Rows } from 'react-native-table-component';
import {NotificationButton, PrayerNotificationButton} from '../components';




export const NotificationCol = () => {
	//Theme
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	//Data for rows
	const fajr = [<NotificationButton backgroundColor={activeColors.primary80} iconColor={activeColors.white}/>];
	const sunrise = [<NotificationButton backgroundColor={activeColors.primary80} iconColor={activeColors.white}/>];
	const zuhur = [<NotificationButton backgroundColor={activeColors.primary80} iconColor={activeColors.white}/>];
	const asr = [<NotificationButton backgroundColor={activeColors.primary80} iconColor={activeColors.white}/>];
	const maghrib = [<NotificationButton backgroundColor={activeColors.primary80} iconColor={activeColors.white}/>];
	const ishaa = [<NotificationButton backgroundColor={activeColors.primary80} iconColor={activeColors.white}/>];


	return (
			<View style={styles.container}>
				<Row data={fajr} style={styles.rows}/>
				<Row data={sunrise} style={styles.rows}/>
				<Row data={zuhur} style={styles.rows}/>
				<Row data={asr} style={styles.rows}/>
				<Row data={maghrib} style={styles.rows}/>
				<Row data={ishaa} style={styles.rows}/>
			</View>

			);
};
const styles = StyleSheet.create(
		{
			container: {
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center'
			},
			rows: {
				paddingBottom: 20
			}
		});
