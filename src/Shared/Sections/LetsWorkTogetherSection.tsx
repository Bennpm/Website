import styled, { css } from "styled-components";
import { useFadeIntoView } from "../Hooks/useFadeIntoView";
import { useState } from "react";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";

interface FormInformation {
  name: string | null;
  email: string | null;
  budget: number;
  message: string | null;
}

export const LetsWorkTogetherSection = () => {
  const { isVisible, domRef } = useFadeIntoView();
  const [formState, setFormState] = useState<FormInformation>({
    name: null,
    email: null,
    budget: 0,
    message: null,
  });

  const handleNameChange = (event: any) => {
    setFormState((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const handleEmailChange = (event: any) => {
    setFormState((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const handleMessageChange = (event: any) => {
    setFormState((prevState) => ({
      ...prevState,
      message: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!isSubmitDisabled) {
      setFormState({
        name: null,
        email: null,
        budget: 0,
        message: null,
      });
    }
  };

  const isSubmitDisabled =
    !formState.name ||
    !formState.email ||
    formState.name === "" ||
    formState.email === "";

  return (
    <StyledContainer ref={domRef} className={isVisible ? "is-visible" : ""}>
      <StyledH1 $color="#fff">LET'S WORK</StyledH1>
      <StyledH1 $color="#b6b4bd33">TOGETHER</StyledH1>
      <StyledContactInformation>
        <Input
          label="Name"
          placeholder="Your Name"
          required
          value={formState.name}
          handleChange={(e) => handleNameChange(e)}
        />
        <Input
          label="Email"
          placeholder="Your Email"
          required
          value={formState.email}
          handleChange={(e) => handleEmailChange(e)}
        />
      </StyledContactInformation>
      <StyledMessage>
        <Input
          label="Message"
          placeholder="Talk to me"
          value={formState.message}
          handleChange={(e) => handleMessageChange(e)}
          rows={5}
        />
      </StyledMessage>
      <StyledButtonContainer>
        <Button
          onClick={() => handleSubmit()}
          state={isSubmitDisabled ? "disabled" : undefined}
        >
          SEND
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  opacity: 0;
  transform: translate(0, 50%);
  visibility: hidden;
  transition: opacity 500ms ease-out, transform 500ms ease-out;
  will-change: opacity, visibility;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

  // Tablet
  @media only screen and (max-width: 1062px) {
    padding: 0 5rem;
  }

  // Phone
  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

const StyledH1 = styled.h1<{ $color: string }>`
  ${({ $color }) => css`
    margin: 0;
    font-size: 6rem;
    font-weight: 800;
    line-height: 1.167;
    color: ${$color};
  `}

  // Tablet
  @media only screen and (max-width: 1062px) {
    display: flex;
    justify-content: center;
  }

  // Phone
  @media only screen and (max-width: 600px) {
    margin: 0;
    font-size: 2rem;
  }
`;

const StyledContactInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  gap: 10px;
`;

const StyledMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
