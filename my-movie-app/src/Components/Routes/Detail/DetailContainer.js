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
      similar: null,
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
    let result = null;
    let castingActors = null;
    let similar = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));

        ({
          data: { cast: castingActors },
        } = await moviesApi.getCastingActors(parsedId));

        ({
          data: { results: similar },
        } = await moviesApi.getSimilarMovies(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));

        ({
          data: { cast: castingActors },
        } = await tvApi.getCastingActors(parsedId));

        ({
          data: { results: similar },
        } = await tvApi.getSimilarTV(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result, castingActors, similar });
    }
  }

  render() {
    const { result, castingActors, similar, isMovie, error, loading } =
      this.state;
    return (
      <DetailPresenter
        key={this.props.match.params.id}
        result={result}
        castingActors={castingActors}
        similar={similar}
        isMovie={isMovie}
        error={error}
        loading={loading}
      />
    );
  }
}
