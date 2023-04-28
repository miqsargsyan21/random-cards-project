import { AppContext } from "../../../context";
import PropTypes from 'prop-types';
import { useContext } from "react";
import clsx from "clsx";

const Card = (props) => {
  const { item, className, ...restProps } = props;

  const { removeItem } = useContext(AppContext);

  const handleClick = () => {
    removeItem(item);
  };

  return (
    <div
      className={clsx(
        className,
        "relative py-20 rounded-2xl border border-neutral-500 h-fit")}
      {...restProps}
    >
      <div
        className="absolute top-3 right-3 w-8 h-8 bg-gray-300 hover:bg-gray-200 cursor-pointer rounded-full flex items-center justify-center"
        onClick={handleClick}
      >
        <p>X</p>
      </div>
      <p className="text-center">{item}</p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

export default Card;