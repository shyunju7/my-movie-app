import React from "react";
import DetailPresenter from "./DetailPresenter";

export class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: false, // 사용자가 단어를 가지고 기다려야 -> true
  };

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
