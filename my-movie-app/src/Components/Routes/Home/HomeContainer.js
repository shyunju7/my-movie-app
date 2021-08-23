import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    // 이 함수 안에서 처리해도 되고 밖에서 처리해도 됨 - 현재 프젝에서는 크지 않기 때문에 여기서 처리할 예정
    // 어떤 값을 받아오든(에러처리든 영화 데이터를 제대로 가져왔던) 처리를 위해 loading : false로 바꿔 보여준다.
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({ nowPlaying, upcoming, popular });
    } catch {
      this.setState({ error: "Can't find movies information" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
