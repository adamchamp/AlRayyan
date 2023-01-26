import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import {Table, Row, Rows} from 'react-native-table-component';
import {PrayerTitle} from './PrayerTitle';
import {AdhanTime} from './AdhanTime';
import {IqaamaTime} from './IqaamaTime';





export const PrayerHeader = () => {
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	//Data
	const header = [<PrayerTitle title="Prayer" color={activeColors.white} textColor={activeColors.primary}/>,
		<AdhanTime time="Adhan" color={activeColors.white} textColor={activeColors.primary}/>,
		<IqaamaTime time="Iqaama" color={activeColors.white} textColor={activeColors.primary}/>];

	return (
			<View style={styles.container}>
				<Row data={header} style={styles.rows}/>
			</View>

			);
};



const styles = StyleSheet.create({
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

