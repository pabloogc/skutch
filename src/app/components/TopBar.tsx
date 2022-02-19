import React from "react";
import styled from "styled-components";
import {ReactComponent as Separator} from "assets/separator.svg";

const Container = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  height: 64px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: stretch;
  background: white;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const TopBar: React.FC<{
  icon: React.ReactNode,
}> = ({children, icon}) => {

  return <Container>
    <Icon>{icon}</Icon>
    <Separator/>
    <Content>{children}</Content>
  </Container>;
};