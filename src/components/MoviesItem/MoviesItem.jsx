import { Link, useLocation} from "react-router-dom"
import { Movie } from "./MoviesItem.styled";

export const MoviesItem = ({ Movies }) => {
  const location = useLocation()

  return Movies?.map(({ id, original_title }) => (
    <Movie key={id}>
      <Link to={`/movies/${id}`} state={{from: location}}>{original_title}</Link>
    </Movie>
  ));
};