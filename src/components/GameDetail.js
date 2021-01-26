import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.round(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  // platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <Rating>
                <motion.h2 layoutId={`title ${pathId}`}>{game.name}</motion.h2>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </Rating>
              <Info>
                <h3>Platforms:</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <img
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                        title={data.platform.name}
                        alt={data.platform.name}
                      />
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt=""
              />
            </Media>
            <Description>{game.description}</Description>
            <Galery>
              {screen.results &&
                screen.results.map((screen) => (
                  <img
                    key={screen.id}
                    src={smallImage(screen.image, 1280)}
                    alt=""
                  />
                ))}
            </Galery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f07375;
  }
  &::-webkit-scrollbar-track {
    background: #0d0d0d;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #292929;
  position: absolute;
  left: 10%;
  img {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 90%;
    left: 5%;
    top: 1.5rem;
    padding: 0rem 2rem;
  }
`;

const Rating = styled(motion.div)`
  width: 100%;
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  h2 {
    color: #f07375;
  }
  p {
    color: white;
  }
  @media (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Info = styled(motion.div)`
  padding-top: 12rem;
  text-align: left;
  h3 {
    padding-left: 3rem;
    color: white;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
    h3 {
      padding: 1rem;
    }
  }
`;

const Platforms = styled(motion.div)`
  img {
    margin-left: 3rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    img {
      margin-left: 0;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  @media (max-width: 600px) {
    margin-top: 2rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media (max-width: 600px) {
    margin: 2rem 0rem;
  }
`;

const Galery = styled(motion.div)`
  img {
    padding-bottom: 2rem;
  }
`;

export default GameDetail;
