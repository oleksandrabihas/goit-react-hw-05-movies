import { Link, useLocation} from "react-router-dom"

export const MoviesItem = ({ Movies }) => {
  const location = useLocation()

  return Movies?.map(({ id, original_title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{from: location}}>{original_title}</Link>
    </li>
  ));
};