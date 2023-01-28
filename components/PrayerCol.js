import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import { Table, Row, Rows } from 'react-native-table-component';
import {PrayerTitle, IqaamaTime, AdhanTime} from '../components';




export const PrayerCol = () => {
	//Theme
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	//Data for rows
	const fajr = [<PrayerTitle title="Fajr" color={activeColors.primary} textColor={activeColors.white}/>,
		<AdhanTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>,
		<IqaamaTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>];
	const sunrise = [<PrayerTitle title="Sunrise" color={activeColors.primary} textColor={activeColors.white}/>,
		<AdhanTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>,
		<IqaamaTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>];
	const zuhur = [<PrayerTitle title="Zuhur" color={activeColors.primary} textColor={activeColors.white}/>,
		<AdhanTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>,
		<IqaamaTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>];
	const asr = [<PrayerTitle title="Asr" color={activeColors.primary} textColor={activeColors.white}/>,
		<AdhanTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>,
		<IqaamaTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>];
	const maghrib = [<PrayerTitle title="Maghrib" color={activeColors.primary} textColor={activeColors.white}/>,
		<AdhanTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>,
		<IqaamaTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>];
	const ishaa = [<PrayerTitle title="Ishaa" color={activeColors.primary} textColor={activeColors.white}/>,
		<AdhanTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>,
		<IqaamaTime time="1:00" color={activeColors.primary} textColor={activeColors.white}/>];


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
				alignItems: 'center',
				paddingRight: 15
			},
			rows: {
				paddingBottom: 20
			}
		});
