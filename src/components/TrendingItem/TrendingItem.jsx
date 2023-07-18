import { Link} from "react-router-dom"

export const TrendingItem = ({ trendingMovies }) => {
    return trendingMovies.map(({ id, original_title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`} >{original_title}</Link>
      </li>
    ));

}