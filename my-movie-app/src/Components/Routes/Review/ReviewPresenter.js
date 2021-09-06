import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Review from "Components/Review";

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 30px;
  margin-left: 48px;
  margin-top: 20px;
`;

const ReviewPresenter = ({ reviews, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Title>Reviews!</Title>
      <ReviewContainer>
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <Review
              key={review.id}
              author={review.author}
              content={review.content}
              avatarPath={review.author_details.avatar_path}
              createdAt={review.created_at}
            />
          ))
        ) : (
          <div>Sorry, There are no registered reviews yet.</div>
        )}
      </ReviewContainer>
    </Container>
  );

export default ReviewPresenter;
