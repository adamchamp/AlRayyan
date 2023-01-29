import React, {useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import { PrayerCol, PrayerHeader } from "./";

import {colors} from '../config/theme';


export const PrayerOverlay = ({date}) => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];

	const [visible, setVisible] = useState(false);

	const toggleOverlay = () => {
		setVisible(!visible);
	};

	return (
			<View>
				<Button style={styles.overlayButton} title="1" onPress={toggleOverlay} />
				<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
						<View>
							<View style={styles.monthView}>
							<View style={{alignItems: 'center'}}>
								<Text style={styles.engMonth}>October2022</Text>
								<Text style={styles.arabMonth}>RabiAlAwwal1444</Text>
							</View>
						</View>
						<View>
							<View style={styles.prayerHeader}>
								<View style={styles.prayerTableContainer}>
									<PrayerHeader/>
								</View>
							</View>
							<View style={styles.table}>
								<View style={styles.prayerTableContainer}>
									<PrayerCol/>
								</View>
							</View>
						</View>
					</View>
				</Overlay>
			</View>
			);
}


const styles = StyleSheet.create({
	overlayButton: {
		borderRadius: 30,
	},
	monthView: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 30,
		backgroundColor: '#3365a6',
	},
	engMonth: {
		fontSize: 30,
		color: 'white',
	},

	arabMonth: {
		fontSize: 15,
		color: 'white',
	},
	prayerHeader: {
		width: '100%',
		paddingTop: 20,
		display: 'flex',
		flexDirection: 'row'
	},
	table: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		width: '100%'

	},
	prayerTableContainer: {
		width: '80%'
	},
});
