import styled, { css } from "styled-components";
import { useFadeIntoView } from "../Hooks/useFadeIntoView";
import { useState } from "react";
import { DraggableCard } from "../Components/DraggableCard";
import { Button } from "../Components/Button";
import { motion } from "framer-motion";
import { Title } from "../Components/Title";
import { StyledLongParagraph } from "./SoftwareEngineerSection";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { cardData, getRandomCards } from "../../helpers/getToKnowMeHelpers";

export const GetToKnowMe = () => {
  const { isVisible, domRef } = useFadeIntoView();
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean | null>(null);

  const [cards, setCards] = useState(getRandomCards(cardData, 3));
  const [isGoodAnswer, setIsGoodAnswer] = useState<boolean | null>(null);

  const handleAnswerFeedback = (id: number, correctAnswer: boolean) => {
    setIsGoodAnswer(correctAnswer);
    const cardsRemaining = [...cards].filter((cardData) => cardData.id !== id);
    setCards(cardsRemaining);
    setTimeout(() => {
      setIsGoodAnswer(null);
    }, 3000);

    if (cardsRemaining.length === 0) {
      setIsFinished(true);
    }
  };

  const handlePlayAgain = () => {
    setCards(getRandomCards(cardData, 3));
    setIsFinished(false);
    setIsStarted(true);
  };

  return (
    <StyledContainer ref={domRef} className={isVisible ? "is-visible" : ""}>
      <Title text="GET TO" textColor="#fff" allowSwitch />
      <Title text="KNOW ME" textColor="#b6b4bd33" allowSwitch />
      <StyledLongParagraph $color="#998f8f">
        Let's play a little game so you can know me better. Swipe the cards to
        the side you think is correct.
      </StyledLongParagraph>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          margin: "2rem 0",
        }}
      >
        {isGoodAnswer !== null ? (
          isGoodAnswer === true ? (
            <StyledPopup
              $isGoodAnswer={isGoodAnswer}
              animate={{ opacity: [0, 1, 1, 1, 0], scale: [0, 1, 1, 1, 0, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
            >
              <CheckCircleOutlineIcon
                style={{ width: "100%", height: "100%" }}
              />
            </StyledPopup>
          ) : (
            <StyledPopup
              $isGoodAnswer={isGoodAnswer}
              animate={{ opacity: [0, 1, 1, 1, 0], scale: [0, 1, 1, 1, 0, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
            >
              <HighlightOffIcon style={{ width: "100%", height: "100%" }} />
            </StyledPopup>
          )
        ) : null}
        {!isStarted ? (
          <div
            style={{
              height: "300px",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Button onClick={() => setIsStarted(true)}>LET'S PLAY</Button>
          </div>
        ) : isFinished ? (
          <div
            style={{
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <StyledLongParagraph $color="#998f8f">
              And there you have it, now you know a little about me. Want to
              know more ? Play again !
            </StyledLongParagraph>
            <Button onClick={() => handlePlayAgain()}>PLAY AGAIN ?</Button>
          </div>
        ) : (
          <>
            {cards.map((card) => {
              return (
                <DraggableCard
                  key={card.id}
                  cards={cards}
                  cardInfo={card}
                  onAnswer={handleAnswerFeedback}
                />
              );
            })}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                color: "#fff",
                marginTop: "4rem",
              }}
            >
              <HighlightOffIcon color="error" />
              <CheckCircleOutlineIcon color="success" />
            </div>
          </>
        )}
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  opacity: 0;
  transform: translate(0, 50%);
  visibility: hidden;
  transition: opacity 500ms ease-out, transform 500ms ease-out;
  will-change: opacity, visibility;
  margin: 4rem 0;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

const StyledPopup = styled(motion.div)<{ $isGoodAnswer: boolean | null }>`
  ${({ $isGoodAnswer }) => css`
    grid-row: 1;
    grid-column: 1;
    z-index: 9999;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 15rem;
    background-color: ${$isGoodAnswer === true
      ? "green"
      : $isGoodAnswer === false
      ? "red"
      : ""};
  `}
`;
