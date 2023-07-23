import { useState } from 'react';
import { BtnSearch, Input, StyledForm } from './FormSearchMovies.styled';

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
    <StyledForm onSubmit={onSubmit}>
      <Input type="text" name="query" value={value} onChange={handleChange} />
      <BtnSearch>Search</BtnSearch>
    </StyledForm>
  );
};
export default FormSearchMovies;
