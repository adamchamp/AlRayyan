import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import { Table, Row, Rows } from 'react-native-table-component';
import {PrayerTitle} from './PrayerTitle';
import {AdhanTime} from './AdhanTime';
import {IqaamaTime} from './IqaamaTime';




export const PrayerTable = () => {
	//Theme
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	//Data for rows
	const header = [<PrayerTitle title="Prayer"/>, <AdhanTime time="Adhan"/>, <IqaamaTime time="Iqaama"/>];
	const fajr = [<PrayerTitle title="Fajr"/>, <AdhanTime time="1:00"/>, <IqaamaTime time="1:00"/>];
	const sunrise = [<PrayerTitle title="Sunrise"/>, <AdhanTime time="1:00"/>, <IqaamaTime time="1:00"/>];
	const zuhur = [<PrayerTitle title="Zuhur"/>, <AdhanTime time="1:00"/>, <IqaamaTime time="1:00"/>];
	const asr = [<PrayerTitle title="Asr"/>, <AdhanTime time="1:00"/>, <IqaamaTime time="1:00"/>];
	const maghrib = [<PrayerTitle title="Maghrib"/>, <AdhanTime time="1:00"/>, <IqaamaTime time="1:00"/>];
	const ishaa = [<PrayerTitle title="Ishaa"/>, <AdhanTime time="1:00"/>, <IqaamaTime time="1:00"/>];


	return (
			<View style={styles.container}>
				<Row data={header} style={styles.rows}/>
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
				paddingRight: 15,
				paddingLeft: 15
			},
			rows: {
				paddingBottom: 20
			}
		});
