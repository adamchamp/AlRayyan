import React from "react";
import {View, StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {colors} from '../config/theme';
import CustomIcon from '../components';



export const NotificationButton = (props) => {
	//Contexts: For the current prayer have a context to set colors
	//States: For finding current states have a context to retrieve/ set state

	const {theme} = useContext(ThemeContext);
	let activeColors = colors[theme.mode];

	return (
			<View style={[{backgroundColor: props.backgroundColor}, styles.container]}>
				<CustomIcon name={'notificationIcon_Enabled'} size={24} color={props.iconColor}/>
			</View>
			);
};


const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingRight: 18,
		paddingBottom: 10,
		paddingLeft: 18,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		borderWidth: 0,
		borderRadius: 30
	}
});

