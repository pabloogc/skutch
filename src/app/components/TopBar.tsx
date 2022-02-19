import React from "react";
import styled from "styled-components";
import {ReactComponent as Separator} from "assets/separator.svg";

const RootContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 64px;
  top: 0;
  align-items: center;
  background: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const Container = styled.div`
  display: flex;
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
  margin: 0 16px;
  cursor: ${props => props.onClick ? "pointer" : "inherit"};
  min-width: 48px;
  min-height: 48px;
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
    <Container>
      <Icon onClick={onIconClick}>{icon}</Icon>
      <Separator/>
      <Content>{children}</Content>
    </Container>
  </RootContainer>;
};