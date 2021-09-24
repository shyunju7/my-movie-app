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
      keywords: null,
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
    let keywords = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        console.log(result);

        ({
          data: { cast: castingActors },
        } = await moviesApi.getCastingActors(parsedId));

        ({
          data: { results: similar },
        } = await moviesApi.getSimilarMovies(parsedId));

        ({
          data: { keywords },
        } = await moviesApi.getMovieKeywords(parsedId));
        console.log(keywords);
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));

        ({
          data: { cast: castingActors },
        } = await tvApi.getCastingActors(parsedId));

        ({
          data: { results: similar },
        } = await tvApi.getSimilarTV(parsedId));

        ({
          data: { results: keywords },
        } = await tvApi.getTVKeywords(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({
        loading: false,
        result,
        castingActors,
        similar,
        keywords,
      });
    }
  }

  render() {
    const { isMobile } = this.props;
    const {
      result,
      castingActors,
      similar,
      keywords,
      isMovie,
      error,
      loading,
    } = this.state;
    return (
      <DetailPresenter
        key={this.props.match.params.id}
        result={result}
        castingActors={castingActors}
        similar={similar}
        keywords={keywords}
        isMovie={isMovie}
        isMobile={isMobile}
        error={error}
        loading={loading}
      />
    );
  }
}
