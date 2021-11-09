import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 8px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  updateSearchTerm,
  loading,
  error,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movie or TV show..."
        value={searchTerm}
        onChange={updateSearchTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <div>
        {movieResults && movieResults.length > 0 && (
          <Section title="Searched Movies">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                rating={movie.vote_average}
                title={movie.original_title}
                imageURl={movie.poster_path}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Searched TV Shows">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                rating={show.vote_average}
                title={show.original_name}
                imageURl={show.poster_path}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
                isMovie={false}
              />
            ))}
          </Section>
        )}
      </div>
    )}
    {error && <Message text={error} color="#e74c3c" />}
    {movieResults &&
      tvResults &&
      movieResults.length === 0 &&
      tvResults.length === 0 && <Message color="#c4c4c" text="Nothing Found" />}
  </Container>
);

SearchPresenter.propType = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchPresenter;
