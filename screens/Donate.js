import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import {LogoHeader} from '../components/LogoHeader';
import {DonateCard} from '../components/DonateCard';


const Donate = () => {
	//Theme
	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={[{backgroundColor: activeColors.background}, styles.container]}>
				<LogoHeader/>

				<DonateCard
					title={"Zakat"} hadith={"\"وَفِي أَمْوَالِهِمْ حَقٌّ لِّلسَّائِلِ وَالْمَحْرُومِ\""} translation={"\"Giving a rightful share of their wealth to the beggar and the deprived.\"(QUR'AN 51:19)"}/>

				<DonateCard
					title={"Sadaqah"} hadith={"\"الصدقةُ تُطفئُ الخطيئةَ كما يُطفئُ الماءُ النارَ\""} translation={"\“Sadaqah extinguishes sin as water extinguishes fire\” (Tirmidhi)"}/>

			</View>
			);
};

export default Donate;

const styles = StyleSheet.create({
	container:
			{
				width: '100%',
				height: '100%',
				paddingLeft: 15,
				paddingRight: 15
			}

});
