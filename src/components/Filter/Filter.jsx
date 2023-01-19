import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice/filerSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
    <p>Find contacts by name</p>
    <input
      type="text"
      onChange={e => {
        const action = filterContact(e.target.value);
        dispatch(action);
      }}
    />
    </>
  );
};