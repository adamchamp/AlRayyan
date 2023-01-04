import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{LogoHeader} from './components/LogoHeader';
import{AnnouncementCard} from './components/AnnouncementCard';
import{DonateCard} from './components/DonateCard';
import{EventCard} from './components/EventCard';
import{DateButton} from './components/DateButton';
import {colors} from './config/theme';


export default function App()
{
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];
	return (
			<LogoHeader/>

			);
}


const styles = StyleSheet.create(
		{
			container: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'
			},
		});
