import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NoImage from "assets/defaultProfileImage.png";

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 180px;
  margin: 20px;
  background-color: rgba(39, 49, 43, 0.4);
  flex-direction: row;
  border-radius: 12px;
  margin-bottom: 20px;
  padding-left: 48px;
  padding-right: 24px;
`;

const Author = styled.h3`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  margin-right: 8px;
`;

const Content = styled.p`
  margin-top: 8px;
  line-height: 24px;
  font-size: 16px;
`;

const Avatar = styled.div`
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
  align-self: center;
  width: 100px;
  height: 100px;
`;

const Date = styled.span`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  right: 150px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left: 16px;
  flex-direction: column;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";

const Review = ({ author, avatarPath, content, rating, createdAt }) => (
  <Container>
    <Avatar
      url={
        avatarPath && !avatarPath.includes("/https://")
          ? `${BASE_URL}${avatarPath}`
          : NoImage
      }
    />
    <Wrapper>
      <DataContainer>
        <Author>{author}</Author>
        <span aria-label="Rating" role="img">
          ⭐️⭐️⭐️⭐️⭐️
        </span>
        {rating}
        <Date>{createdAt.substring(0, 10)}</Date>
      </DataContainer>
      <Content>
        {content.length > 150 ? content.substring(0, 450) + "..." : content}
      </Content>
    </Wrapper>
  </Container>
);

export default Review;
