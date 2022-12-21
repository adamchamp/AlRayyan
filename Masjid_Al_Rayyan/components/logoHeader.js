import React from "react";
import styled from "styled-components";

export const logoHeader = ({}) => {
	return (
			<logoHeader>
				<LogoIcon src={`https://file.rendit.io/n/ioXSkSz4xZcrkzToaTyS.png`} />
				<logoName src={`https://file.rendit.io/n/peztbS3MnMVwZPVg5o7a.png`} />
			</logoHeader>
			);
};

const logoHeader = styled.div`
  width: 264px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 45px 0px 20px 0px;
`;
const LogoIcon = styled.img`
  width: 49px;
  height: 47px;
`;
const logoName = styled.img`
  width: 155px;
  height: 47px;
`;
