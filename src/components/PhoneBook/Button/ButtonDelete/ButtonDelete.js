import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';
import PropTypes from 'prop-types';

const ButtonDelete = ({ name, deleteContact, id }) => (
  <ButtonDeleteStyle type="button" onClick={deleteContact} id={id}>
    {name}
  </ButtonDeleteStyle>
);

export default ButtonDelete;

ButtonDelete.propTypes = {
  name: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};