import { createContext, useState, useEffect } from "react";

export const AppContext = createContext(null);

export const AppProvider = (props) => {
  const { children } = props;

  const [cards, setCards] = useState(() => {
    const storedCards = sessionStorage.getItem("cards");

    return storedCards ? JSON.parse(storedCards) : [];
  });

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000) + 1;
  };

  const addItem = () => {
    let randomNumber;

    do {
      randomNumber = generateRandomNumber();
    } while (cards.includes(randomNumber));

    setCards(prevState => {
      const updatedCards = [...prevState, randomNumber];

      sessionStorage.setItem("cards", JSON.stringify(updatedCards));

      return updatedCards;
    });
  };

  const sortItems = () => {
    setCards(prevState => {
      const updatedCards = [...prevState].sort();

      sessionStorage.setItem("cards", JSON.stringify(updatedCards));

      return updatedCards;
    });

  };

  const removeItem = (value) => {
    setCards(prevState => {
      const updatedCards = prevState.filter(currentValue => currentValue !== value);

      sessionStorage.setItem("cards", JSON.stringify(updatedCards));

      return updatedCards;
    });
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "cards") {
        setCards(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const providerValues = {
    removeItem,
    sortItems,
    addItem,
    cards
  };

  return(
    <AppContext.Provider value={providerValues}>
      {children}
    </AppContext.Provider>
  );
};