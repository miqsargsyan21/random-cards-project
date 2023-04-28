import { useIsDesktop, useOutsideClick } from "../../../hooks";
import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import clsx from "clsx";

const Instructions = (props) => {
  const { className } = props;

  const [opened, setOpened] = useState(false)
  const isDesktop = useIsDesktop()

  const modalRef = useRef(null)

  useOutsideClick((e) => {
    e.stopPropagation()
    if (opened && modalRef.current && !modalRef.current.contains(e.target)) {
      setOpened(false);
    }
  }, [opened]);

  const handleClick = (e) => {
    e.stopPropagation()
    setOpened(true);
  }

  return (
    <div>
      {
        !isDesktop
          ?
          <button
            className="absolute top-2 right-6 px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300"
            onClick={handleClick}
          >
            Open Instructions
          </button>
          :
          null
      }
      {
        opened || isDesktop
          ?
          <div
            className={clsx(
              className,
              "flex items-center justify-center lg:h-full",
              {
                "border-l border-r border-black": isDesktop,
                "absolute w-full h-screen top-0 left-0 bg-black bg-opacity-75": !isDesktop,
              }
            )}
          >
            <div
              className={clsx({
                "w-1/3 h-1/2 bg-white rounded-2xl flex items-center justify-center": !isDesktop
              })}
              ref={modalRef}
            >
              <p>Instruction</p>
            </div>
          </div>
          :
          null
      }
    </div>
  );
};

Instructions.propTypes = {
  className: PropTypes.string,
};

Instructions.defaultProps = {
  className: "",
};

export default Instructions;