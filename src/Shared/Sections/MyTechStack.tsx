import styled from "styled-components";
import { motion } from "framer-motion";
import { useFadeIntoView } from "../Hooks/useFadeIntoView";
import { Title } from "../Components/Title";
import { StyledLongParagraph } from "./SoftwareEngineerSection";
import { useRef, useState } from "react";
import { Skill, skills } from "../../helpers/techStackHelpers";

export const MyTechStack = () => {
  const { isVisible, domRef } = useFadeIntoView();

  return (
    <StyledContainer ref={domRef} className={isVisible ? "is-visible" : ""}>
      <Title text="MY" textColor="#fff" allowSwitch />
      <Title text="TECH STACK" textColor="#b6b4bd33" allowSwitch />
      <StyledLongParagraph $color="#998f8f">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </StyledLongParagraph>
      <StyledSkillsContainer>
        <FloatingSkills />
      </StyledSkillsContainer>
    </StyledContainer>
  );
};

const StyledSkillsContainer = styled.div`
  width: 100;
  height: 40rem;
  position: relative;
  display: grid;
`;

const StyledContainer = styled.div`
  opacity: 0;
  transform: translate(0, 50%);
  visibility: hidden;
  transition: opacity 500ms ease-out, transform 500ms ease-out;
  will-change: opacity, visibility;
  overflow-x: hidden;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

const FloatingSkills = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      {skills.map((skill) => (
        <TheSkill containerRef={containerRef} mySkill={skill} />
      ))}
    </div>
  );
};

interface SkillProps {
  containerRef: React.MutableRefObject<null>;
  mySkill: Skill;
}

const TheSkill = ({
  containerRef,
  mySkill: { skill, src, top, left, rotate, alt },
}: SkillProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <StyledSkill
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      onMouseDown={updateZIndex}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    >
      <StyledImage src={src} alt={alt} draggable={false} />
      <StyledSkillText>{skill}</StyledSkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled(motion.div)`
  position: absolute;
  width: 10rem;
  height: 10rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledSkillText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: black;
`;
