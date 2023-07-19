export const Genres = ({ genres }) => {
  return (
    <>
      <h2>Genres</h2>
      {genres &&
        genres.map(genres => <span key={genres.id}>{genres.name} </span>)}
    </>
  );
};
