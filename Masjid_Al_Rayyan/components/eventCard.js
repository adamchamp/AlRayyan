import React from "react";
import styled from "styled-components";


const EventsCardContainer = styled.div`
  width: 100.1%;
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  background-color: #3365a6;
`;

const contentText = styled.div`
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;

const ImageEventsCard = styled.img`
  width: 53.6%;
  align-self: stretch;
`;
const contentGroup = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const title = styled.div`
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const textGroup = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;



export const EventsCard = ({}
) => {
	return (
			<EventsCardContainer>
				<ImageEventsCard src={`https://file.rendit.io/n/NuOEratdwblGS1SssB0y.png`}/>
				<textGroup>
					<title>Title</title>
					<contentGroup>
						<contentText>Time of the event</contentText>
						<contentText>Location of the event</contentText>
						<contentText>Host for the event</contentText>
					</contentGroup>
				</textGroup>
			</EventsCardContainer>
			);
};

