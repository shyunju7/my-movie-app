import React from "react";
import PropTypes from "prop-types";
const DetailPresenter = ({ result, loading, error }) => null;

DetailPresenter.propType = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
