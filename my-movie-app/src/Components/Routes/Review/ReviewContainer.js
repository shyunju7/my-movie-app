import React from "react";
import ReviewPresenter from "./ReviewPresenter";
import { moviesApi } from "api";

export class ReviewContainer extends React.Component {
  render() {
    return <ReviewPresenter />;
  }
}
