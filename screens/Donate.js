import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/theme';
import {LogoHeader} from '../components/LogoHeader';
import {DonateCard} from '../components/DonateCard';

const Donate = () => {
	const theme = {mode: "light"};
	let activeColors = colors[theme.mode];

	return (
			<View>
				<LogoHeader/>

				<DonateCard/>
				<DonateCard/>

			</View>
			);
};

export default Donate;

const styles = StyleSheet.create({
	container:
			{

			}

});
