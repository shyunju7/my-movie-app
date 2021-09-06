import React from "react";
import ReviewPresenter from "./ReviewPresenter";
import { moviesApi, tvApi } from "api";

export class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      reviews: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    this.setState({ id: parsedId });
    let reviews = null;
    try {
      if (isMovie) {
        ({
          data: { results: reviews },
        } = await moviesApi.getMovieReviews(parsedId));
        console.log(reviews);
      } else {
        ({
          data: { results: reviews },
        } = await tvApi.getTVReviews(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      console.log(reviews);
      this.setState({ loading: false, reviews });
    }
  }
  render() {
    const { reviews, loading, error } = this.state;
    return (
      <ReviewPresenter reviews={reviews} loading={loading} error={error} />
    );
  }
}
