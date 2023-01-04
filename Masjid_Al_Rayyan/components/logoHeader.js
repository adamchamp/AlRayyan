import React from "react";
import {View, Image, StyleSheet} from 'react-native';



export const LogoHeader = ({}) => {
	return (
			<View style={styles.container}>
				<Image style={styles.logoImage} source = {require('../assets/logoImage.png')}/>
				<Image style={styles.logoText} source = {require('../assets/logoText.jpg')}/>
			</View>
			);
}



const styles = StyleSheet.create({
	container: {
		gap: 0,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 45,
		paddingBottom: 20,
		paddingRight: 30,
		paddingLeft: 20
	},

	logoImage: {
		width: 49,
		height: 47

	},

	logoText: {
		width: 155,
		height: 47

	}
});
