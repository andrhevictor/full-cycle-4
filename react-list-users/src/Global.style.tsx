import styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Link = styled(RouteLink)`
  color: #61dafb;
  text-decoration: none;
`;

export const SmallLink = styled(Link)`
  font-size: 20px;
`;
