import { Input, Title, Div } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'components/Redux/selectors';
import { setFilter } from 'components/Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Div>
      <Title>Find contacts by name:</Title>
      <Input
        type="text"
        name="filter"
        value={filter}
        title="filter contacts"
        required
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Div>
  );
  //  }
};
