import PropTypes from "prop-types";
import clsx from "clsx";

const Container = (props) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={clsx(
        className,
        "px-5 lg:px-10 lg:mx-auto lg:max-w-screen-lg"
      )}
      {...restProps}
    />
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

Container.defaultProps = {
  className: "",
};

export default Container;