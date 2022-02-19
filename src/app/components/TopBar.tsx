import React from "react";
import styled from "styled-components";
import {ReactComponent as Separator} from "assets/separator.svg";

const RootContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 64px;
  top: 0;
  align-items: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const ControlsContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: stretch;
  background: white;
`;

const Title = styled.div`
  position: absolute;
  font-weight: bold;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
`;


const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  min-width: 32px;
  height: 100%;
  cursor: ${props => props.onClick ? "pointer" : "inherit"};
`;


const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  flex: 1;
`;

export const TopBar: React.FC<{
  icon: React.ReactNode,
  title?: React.ReactNode,
  onIconClick?: () => void
}> = ({
        children,
        icon, title,
        onIconClick,
      }) => {

  return <RootContainer>
    <Title>{title}</Title>
    <ControlsContainer>
      <Icon onClick={onIconClick}>{icon}</Icon>
      <Separator/>
      <Content>{children}</Content>
    </ControlsContainer>
  </RootContainer>;
};