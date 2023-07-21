const FormSearchMovies = ({ handleSubmit }) => {

  const onSubmit = e => {
      e.preventDefault();
      handleSubmit(e.currentTarget.elements.query.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button>Search</button>
    </form>
  );
};
export default FormSearchMovies;
