import React, {useState, useContext} from "react";
import {ThemeContext} from '../contexts/ThemeContext';
import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions} from 'react-native';
import {colors} from '../config/theme';
import{LogoHeader} from '../components/LogoHeader';
import {functions, getPrayerTimes} from "../functions.js";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Calendar = () => {
	//Setting the theme and colors
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	//Obtaining the dimensions of device and storing in variables
	const [dimensions, setDimensions] = useState({ window, screen });

	//Get API code
	let text = getPrayerTimes();
	return (
	<View style={styles.container}>

		<LogoHeader style={{position: 'absolute', marginTop: 30, top: Dimensions.get('window').height}}></LogoHeader>
		<View style={styles.monthView}>
			<TouchableOpacity>
				<Image source = {require('../assets/indicatorLeft.png')}></Image>
			</TouchableOpacity>
			<View style={{alignItems: 'center'}}>
				<Text style={styles.engMonth}>October2022</Text>
				<Text style={styles.arabMonth}>RabiAlAwwal1444</Text>
			</View>
			<TouchableOpacity>
				<Image source = {require('../assets/indicatorRight.png')}></Image>
			</TouchableOpacity>
		</View>

		<View style={styles.calendarView}>
			<View style={styles.sundayColumn}>
				<View>
					<Text>S</Text>
				</View>
			</View>
			<View style={styles.mondayColumn}>
				<View>
					<Text>M</Text>
				</View>
			</View>
			<View style={styles.tuesdayColumn}>
				<View>
					<Text>T</Text>
				</View>
			</View>
			<View style={styles.wednesdayColumn}>
				<View>
					<Text>W</Text>
				</View>
			</View>
			<View style={styles.thursdayColumn}>
				<View>
					<Text>T</Text>
				</View>
			</View>
			<View style={styles.fridayColumn}>
				<View>
					<Text>F</Text>
				</View>
			</View>
			<View style={styles.saturdayColumn}>
				<View>
					<Text>S</Text>
				</View>
			</View>
		</View>
	</View>
)
}

export default Calendar;

const styles = StyleSheet.create({
	/*container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white'
	},*/
	container: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 20,
		paddingBottom: 20,
		paddingRight: 20,
		paddingLeft: 20,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		backgroundColor: 'white',
	},

    monthView: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 30,
		backgroundColor: '#3365a6',
    },

    calendarView: {
		width: '80%',
		gap: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
		paddingTop: 30,
		paddingBottom: 30,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 30,
		backgroundColor: '#3365a6',
		color: 'white',
    },

	engMonth: {
		fontSize: 30,
		color: 'white',
	},

	arabMonth: {
		fontSize: 15,
		color: 'white',
	},
});

