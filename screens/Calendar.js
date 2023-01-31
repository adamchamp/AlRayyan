import React, {useState, useContext} from "react";
import {ThemeContext} from '../contexts/ThemeContext';
import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions} from 'react-native';
import {colors} from '../config/theme';
import{LogoHeader, PrayerOverlay, DateButton} from '../components';
import {functions, getPrayerTimes} from "../functions.js";
import {ROUTES} from '../config';
import { Table, Row, Rows } from 'react-native-table-component';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


//Function to gen date elements
function calendarDays()
{
	//Retrive number of days in month
	var data = new Array();
	for (var i = 1; i <= 7; i++)
	{
		data[i] = <DateButton date={i}/>;
	}


	return(data);
}

const Calendar = () => {
//Setting the theme and colors
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];
	//Get API code
	let text = getPrayerTimes();
	//Calendar Content
	const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	let calendarData = calendarDays();
	return (
			<View style={[{backgroundColor: activeColors.background}, styles.container]}>
				<View style = {styles.logoHeader}>
					<LogoHeader/>
				</View>


				<View style={styles.content}>
					<View style={[{backgroundColor: activeColors.primary}, styles.header]}>
						<TouchableOpacity style = {styles.headerButton}>
							<Image source = {require('../assets/indicatorLeft.png')}></Image>
						</TouchableOpacity>

						<View style = {styles.headerText}>
							<Text style={[{color: activeColors.white}, styles.dateTitle]}>October, 2022</Text>
							<Text style={[{color: activeColors.white}, styles.dateTitle]}>Rabi’al Awwal, 1444</Text>
						</View>

						<TouchableOpacity style = {styles.headerButton}>
							<Image source = {require('../assets/indicatorRight.png')}></Image>
						</TouchableOpacity>
					</View>



					<View style={[{backgroundColor: activeColors.primary50}, styles.calendar]}>
						<Row data={dayNames} textStyle={[{color: activeColors.white}, styles.calendarHeaderText]}/>
						<Row data={calendarData} style={styles.calendarButton}/>
						<Row data={calendarData} style={styles.calendarButton}/>
						<Row data={calendarData} style={styles.calendarButton}/>
						<Row data={calendarData} style={styles.calendarButton}/>
						<Row data={calendarData} style={styles.calendarButton}/>
					</View>
				</View>


			</View>
			);
};
export default Calendar;
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	},
	logoHeader: {
		paddingBottom: 50
	},
	content: {

	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		width: '90%',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 30,
		justifyContent: 'space-between',
		alignSelf: 'center',
		alignContent: 'center',
		marginBottom: 40

	},
	headerButton: {
		justifyContent: 'center'
	},
	headerText: {

	},
	dateTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	calendar: {
		width: '90%',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 30,
		alignSelf: 'center',
		alignContent: 'center'
	},
	calendarHeaderText: {
		fontSize: 28,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	calendarButton: {
		paddingTop: 10
	}

});

