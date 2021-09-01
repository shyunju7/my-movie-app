import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NoImage from "assets/defaultProfileImage.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;
const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
`;

const OriginalName = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;

const CharacterName = styled.div`
  margin-top: 2px;
  font-size: 12px;
  text-align: center;
  opacity: 0.6;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";
const ActorProfile = ({ profile_path, character, original_name }) => (
  <Container>
    <ProfileImage url={profile_path ? `${BASE_URL}${profile_path}` : NoImage} />
    <OriginalName>{original_name}</OriginalName>
    <CharacterName>{character}</CharacterName>
  </Container>
);

export default ActorProfile;
