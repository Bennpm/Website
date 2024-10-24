import { useEffect, useState } from "react";

interface Location {
    positionX: number;
    positionY: number;
  }

export const useBlobLocation = () => {
    const [clickLocation, setClickLocation] = useState<Location>({
    positionX: 200,
    positionY: 100,
  });
  const [size, setSize] = useState<number>();

  const handleClick = async (event: any) => {
    setClickLocation({ positionX: event.clientX, positionY: event.clientY });
  };

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (clickLocation.positionX > window.innerWidth) {
      setClickLocation((prevState) => ({
        ...prevState,
        positionX: window.innerWidth - 30,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  return { clickLocation, handleClick }
}