import React from "react";
import styled from "styled-components";



const DonationsCardContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0px 15px;
  border-radius: 30px;
  background-color: #3365a6;
`;
const contentText = styled.div`
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const title = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
`;
const textContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DonationsButton = styled.button`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  padding: 0px;
  padding-top: 20px;
  padding-right: 65px;
  padding-bottom: 19px;
  padding-left: 65px;
  border-width: 0px;
  border-radius: 30px;
  box-sizing: content-box;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const donationsButtonText = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3365a6;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
`;

export const DonationsCard = ({}) => {
	const DonationsButtonFunction = (e, name) => {
		alert(`${name} was clicked`);
	};
	return (
			<DonationsCardContainer>
				<title>Title</title>
				<textContainer>
					<contentText>حديث عن الصدقة</contentText>
					<contentText>English translation</contentText>
				</textContainer>
				<DonationsButton onClick={(e) => DonationsButtonFunction(e, "DonationsButton")}>
					<donationsButtonText>Donate</donationsButtonText>
				</DonationsButton>
			</DonationsCardContainer>
			);
};

