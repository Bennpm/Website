import styled from "styled-components";
import { useFadeIntoView } from "../Hooks/useFadeIntoView";
import { useState } from "react";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { Title } from "../Components/Title";

interface FormInformation {
  name: string;
  email: string;
  budget: number;
  message: string;
}

export const LetsWorkTogetherSection = () => {
  const { isVisible, domRef } = useFadeIntoView();
  const [formState, setFormState] = useState<FormInformation>({
    name: "",
    email: "",
    budget: 0,
    message: "",
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
        name: "",
        email: "",
        budget: 0,
        message: "",
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
      <Title text="LET'S WORK" textColor="#fff" allowSwitch />
      <Title text="TOGETHER" textColor="#b6b4bd33" allowSwitch />
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
