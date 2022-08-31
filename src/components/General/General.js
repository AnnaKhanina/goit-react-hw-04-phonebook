import React from 'react';
import GeneralPage from './General.styled';
import PropTypes from 'prop-types';

const General = ({ title, children }) => (
  <GeneralPage>
    <h1>{title}</h1>
    {children}
  </GeneralPage>
);

export default General;

General.propTypes = {
  title: PropTypes.string.isRequired,
};