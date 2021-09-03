import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NoImage from "assets/defaultProfileImage.png";

const OriginalName = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  cursor: auto;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    ${ProfileImage} {
      width: 115px;
      height: 115px;
      border: 4px solid #ffffff;
      transition: opacity 0.2s ease-in;
    }

    ${OriginalName} {
      font-size: 16px;
    }
  }
`;

const CharacterName = styled.div`
  margin-top: 2px;
  font-size: 12px;
  text-align: center;
  opacity: 0.6;
  cursor: auto;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";
const ActorProfile = ({ profilePath, character, originalName }) => (
  <Container>
    <ProfileImage url={profilePath ? `${BASE_URL}${profilePath}` : NoImage} />
    <OriginalName>{originalName}</OriginalName>
    <CharacterName>{character}</CharacterName>
  </Container>
);

ActorProfile.prototypes = {
  profilePath: PropTypes.string,
  character: PropTypes.string,
  originalName: PropTypes.string,
};

export default ActorProfile;
