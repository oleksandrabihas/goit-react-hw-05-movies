import { Link } from "react-router-dom"
import { HeaderComponent, Navigation } from "./Header.styled";

export const Header = () => {
    return (
      <HeaderComponent>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </HeaderComponent>
    );
}