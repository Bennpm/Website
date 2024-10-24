import Cat from '../assets/cat.jpg';
import Driving from '../assets/driving.jpg';
import Running from '../assets/running.webp';
import Countries from '../assets/countries.jpg';
import Sleep from '../assets/sleep.jpg';
import Basketball from '../assets/basketball.jpeg';
import Aerospace from '../assets/aerospace.webp';
import Backflip from '../assets/backflip.webp';
import Gatsby from '../assets/gatsby.webp';
import Water from '../assets/water.jpg';

export interface CardData {
    id: number;
    question: string;
    answer: boolean;
  }

export const cardData: CardData[] = [
    {
      id: 1,
      question: "My favorite pet is a cat.",
      answer: true,
    },
    {
      id: 2,
      question: "I still don't have my driving license.",
      answer: true,
    },
    {
      id: 3,
      question: "I can run a sub 3 hour marathon.",
      answer: false,
    },
    {
      id: 4,
      question: "I've visited more than 15 countries",
      answer: false,
    },
    {
      id: 5,
      question: "I sleep 10 hours every night.",
      answer: false,
    },
    {
      id: 6,
      question: "I was part of my highschool basketball team.",
      answer: true,
    },
    {
      id: 7,
      question:
        "Before software engineering, I pursued a degree in aerospace engineering.",
      answer: true,
    },
    {
      id: 8,
      question: "I can do a standing backflip.",
      answer: false,
    },
    {
      id: 9,
      question: "My favourite movie of all time is The Great Gatsby.",
      answer: true,
    },
    {
      id: 10,
      question: "I drink about 2 liters of water every day.",
      answer: true,
    },
  ];
  
  export const getRandomCards = (cards: CardData[], numberOfElements: number) => {
    // Scrambling the array
  
    const scrambledArray = [...cards].sort(() => Math.random() - 0.5);
    return scrambledArray.slice(0, numberOfElements);
  };

  export const getCardImageById = (id: number) => {
    switch (id) {
      case 1:
        return Cat;
      case 2:
        return Driving;
      case 3:
        return Running;
      case 4:
        return Countries;
      case 5:
        return Sleep;
      case 6:
        return Basketball;
      case 7:
        return Aerospace;
      case 8:
        return Backflip;
      case 9:
        return Gatsby;
      case 10:
          return Water;
      default:
        return Cat;
    }
  }