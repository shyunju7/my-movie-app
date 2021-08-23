import React from "react";
import PropTypes from "prop-types";

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  null;

TVPresenter.propType = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
