import { useState } from 'react';

const FormSearchMovies = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(value.toLowerCase().trim());
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" value={value} onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};
export default FormSearchMovies;
