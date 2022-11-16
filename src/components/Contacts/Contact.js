import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => dispatch(deleteContact(id));

  return (
    <>
      <p>{name}</p>
      <span className="contacts__number">{number}</span>
      <button
        type="button"
        className="contacts__delete-button"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
