import { AppContext } from "../../context";
import { useContext } from "react";
import clsx from "clsx";

const Header = (props) => {
  const {
    sortItems,
    addItem,
  } = useContext(AppContext);

  const btnClassName = "px-5 py-3 rounded-lg bg-green-800 hover:bg-green-700";

  return (
    <header
      className="py-2 pl-1 border-b border-black flex lg:pl-0 lg:justify-center"
      {...props}
    >
      <button
        className={clsx(
          btnClassName,
          "mr-8"
        )}
        onClick={addItem}
      >
        Add Card
      </button>
      <button
        className={clsx(btnClassName)}
        onClick={sortItems}
      >
        Sort Cards
      </button>
    </header>
  );
};

export default Header;