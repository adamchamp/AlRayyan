import React from "react";
import styled from "styled-components";

const AnnouncementCardContainer = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  border-radius: 30px;
  background-color: #3365a6;
`;
const announcementIcon = styled.img`
  width: 13.03%;
  height: 35.25px;
`;
const textGroup = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const title = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;
const description = styled.div`
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  white-space: nowrap;
`;




export const AnnouncementCard = ({}) => {
	return (
			<AnnouncementCardContainer>
				<announcementIcon src={`https://file.rendit.io/n/ovkhe7GeVRtbEiKKij9o.svg`} />
				<textGroup>
					<title>Title</title>
					<description>Announcment Description</description>
				</textGroup>
			</AnnouncementCardContainer>
			);
};
