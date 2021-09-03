import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      castingActors: null,
      similarMovies: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
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
    let result = null;
    let castingActors = null;
    let similarMovies = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));

        ({
          data: { cast: castingActors },
        } = await moviesApi.getCastingActors(parsedId));

        ({
          data: { results: similarMovies },
        } = await moviesApi.getSimilarMovies(parsedId));

        console.log(similarMovies);
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result, castingActors, similarMovies });
    }
  }

  render() {
    const { result, castingActors, similarMovies, error, loading } = this.state;
    return (
      <DetailPresenter
        key={this.props.match.params.id}
        result={result}
        castingActors={castingActors}
        similarMovies={similarMovies}
        error={error}
        loading={loading}
      />
    );
  }
}
