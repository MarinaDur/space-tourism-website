import { createContext, useContext, useState } from "react";

const ClickContext = createContext();

function ClickProvider({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [crewItem, setCrewItem] = useState(0);
  const [techItem, setTechItem] = useState(0);

  function handleToggleMenu() {
    setToggleMenu((prev) => !prev);
  }

  function handleCloseMenu() {
    setToggleMenu(false);
  }

  function handleCrewItem(id) {
    setCrewItem(id);
  }
  function handleTechItem(id) {
    setTechItem(id);
  }

  return (
    <ClickContext.Provider
      value={{
        toggleMenu,
        handleToggleMenu,
        crewItem,
        handleCrewItem,
        techItem,
        handleTechItem,
        handleCloseMenu,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
}

function useClick() {
  const context = useContext(ClickContext);
  if (context === undefined)
    throw new Error("ClickContext was used outside of the ClickProvider");
  return context;
}

export { ClickProvider, useClick };
