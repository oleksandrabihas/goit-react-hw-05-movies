import {  NavLink } from "react-router-dom"
import { HeaderComponent, Navigation } from "./Header.styled";
import { Container } from "components/Layout/Layout.styled";

export const Header = () => {
    return (
      <HeaderComponent>
        <Container>
          <Navigation>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </Navigation>
        </Container>
      </HeaderComponent>
    );
}