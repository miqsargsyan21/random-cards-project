import { AppContext } from "../../../context";
import Card from "../../shared/Card/Card";
import PropTypes from 'prop-types';
import { useContext } from "react";
import clsx from "clsx";

const Content = (props) => {
  const { className } = props;
  const { cards } = useContext(AppContext);

  return (
    <div className={clsx(className, "grid gap-6 grid-cols-2 py-5")}>
      {
        !cards.length
        ?
          <p className="col-span-full text-center">There is not data to show</p>
          :
          cards.map(item => (
            <Card item={item} key={item} className="col-span-full md:col-span-1" />
          ))
      }
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: "",
};

export default Content;