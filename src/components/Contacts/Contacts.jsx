// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

import css from './Contacts.module.css'


export const Contacts = () => {
  
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  
    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.Contacts}>
      {filteredContacts.map((el) => 
          <li className={css.Contact} key={el.id}>
            {el.name}: {el.phone}
          <button
            className={css.DeleteBtn}
            type="button"
            onClick={() => {
               dispatch(deleteContact(el.id));
            }}
            >
              Delete
            </button>
          </li>
      )}
    </ul>
  )
}

Contacts.propType = {
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};