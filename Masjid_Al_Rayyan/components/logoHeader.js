import React from "react";
import styled from "styled-components/native";
import { Text, View, Image} from 'react-native';


const LogoIcon = styled.img
		`
   ;
`;
const LogoName = styled.img
		`
   ;
`;
const logoHeaderConatiner = styled.div
		`
  gap: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17.05% 0px 7.58% 0px;
`;


export const logoHeader = ({}) => {
	return (
			<logoHeaderConatiner>
				<LogoIcon src={'../assets/logoImage.png'} />
				<logoName src={'../assets/logoText.png'} />
			</logoHeaderConatiner>
			);
};
