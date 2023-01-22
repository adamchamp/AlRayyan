import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import {LogoHeader} from '../components/LogoHeader';
import {PrayerTable} from '../components/PrayerTable';
import CustomIcon from '../components/CustomIcon.js';
import {ROUTES} from '../config';

const Home = ({navigation}) => {
	//Theme
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={styles.container}>
				<ImageBackground source={require('../assets/fajr.png')} resizeMode="cover" style={styles.image}>
					<View style={styles.header}>
						<LogoHeader/>
						<TouchableOpacity onPress={() => navigation.navigate(ROUTES.CALENDAR)}>
							<CustomIcon name={'eventsIcon'} size={40} color={'white'}/>
						</TouchableOpacity>
					</View>

					<View style={[{backgroundColor: activeColors.white}, styles.dateHeader]}>

						<View style={styles.dates}>
							<Text style={[{color: activeColors.primary}, styles.dateText1]}>
							October 10th, 2022
							</Text>
							<Text style={[{color: activeColors.primary}, styles.dateText2]}>
							Rabi’al Awwal 14th, 1444
							</Text>
						</View>

						<View style={[{backgroundColor: activeColors.primary}, styles.timeNext]}>
							<Text style={[{color: activeColors.white}, styles.timeNextText1]}>1:25</Text>
							<Text style={[{color: activeColors.white}, styles.timeNextText2]}>Till asr</Text>
						</View>


					</View>


				</ImageBackground>
				<PrayerTable/>


			</View>
			);
};
export default Home;
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white'
	},
	header:
			{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center'
			},
	image:
			{
				height: '60%',
				width: '100%'
			},
	dateHeader:
			{
				display: 'flex',
				flexDirection: 'column',
				paddingTop: 20,
				paddingBottom: 20,
				paddingRight: 30,
				paddingLeft: 30,
				borderRadius: 30,
				justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'center'

			},
	dates:
			{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				paddingBottom: 10
			},
	dateText1:
			{
				paddingBottom: 5
			},
	dateText2:
			{

			},
	timeNext:
			{
				display: 'flex',
				flexDirection: 'row',
				paddingTop: 5,
				paddingBottom: 5,
				paddingRight: 15,
				paddingLeft: 15,
				borderRadius: 30,
				justifyContent: 'center',
				alignItems: 'center'
			},
	timeNextText1:
			{
				paddingRight: 15
			},
	timeNextText2:
			{

			}

});
