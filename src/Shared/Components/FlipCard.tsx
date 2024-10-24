import { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Experience } from "../Sections/MyExperience";

interface FlipCardProps {
  experience: Experience;
}

export const FlipCard = ({ experience }: FlipCardProps) => {
  const [flip, setFlip] = useState(true);

  return (
    <StyledMainContainer>
      <StyledCard
        transition={{ duration: 0.8 }}
        animate={{ rotateY: flip ? 0 : 180 }}
      >
        <motion.div
          transition={{ duration: 0.8 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          style={{
            height: "100%",
          }}
        >
          <motion.div
            transition={{ duration: 0.8 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className="front"
            style={{
              height: !flip ? 0 : "100%",
              paddingLeft: "8rem",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                color: "black",
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              {experience.company}
              <Button
                style={{ padding: "0.3rem" }}
                onClick={() => setFlip((prevState) => !prevState)}
              >
                SEE DETAILS
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: flip ? 180 : 0 }}
            transition={{ duration: 0.7 }}
            className="back"
            style={{ width: "100%", height: "100%", color: "black" }}
          >
            {experience.role}
            {experience.description}
            <button onClick={() => setFlip((prevState) => !prevState)}>
              Click me
            </button>
          </motion.div>

          <StyledCompanyLogo $isFlipped={flip} src={experience.companyLogo} />
        </motion.div>
      </StyledCard>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  .front,
  .back {
    backface-visibility: hidden;
  }
`;

const StyledCard = styled(motion.div)`
  width: 80%;
  height: 10rem;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  position: relative;
`;

const StyledCompanyLogo = styled.img<{ $isFlipped: boolean }>`
  ${({ $isFlipped }) => css`
    ${$isFlipped ? `left: -1.5rem;` : `right: -1.5rem;`}
  `}
  position: absolute;
  width: 8rem;
  height: 8rem;
  top: 1rem;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 0.5rem;
  object-fit: cover;
`;
