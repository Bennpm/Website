import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import { CardData, getCardImageById } from "../../helpers/getToKnowMeHelpers";
import { theme } from "../Theme/sc-theme";

interface DraggableCardProps {
  cardInfo: CardData;
  cards: CardData[];
  onAnswer: (id: number, answer: boolean) => void;
}

export const DraggableCard = ({
  cardInfo,
  cards,
  onAnswer,
}: DraggableCardProps) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = cardInfo.id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : cardInfo.id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    // if info x.get() < 0, swiped to the left (false), else swiped to the right (true)
    if (Math.abs(x.get()) > 100) {
      const answer = x.get() > 0;
      onAnswer(cardInfo.id, answer === cardInfo.answer);
    }
  };

  return (
    <StyledCard
      style={{
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={"x"}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    >
      <StyledHeader>
        <StyledImage src={getCardImageById(cardInfo.id)} draggable={false} />
      </StyledHeader>
      {cardInfo.question}
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  width: 200px;
  height: 300px;
  background-color: #fff;
  border: 8px solid #fff;
  transform-origin: bottom;
  border-radius: 0.5rem;
  object-fit: cover;
  grid-row: 1;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${theme.colors.orange};
  border-radius: 0.5rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;
