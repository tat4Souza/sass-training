import { useState, useRef, useEffect } from "react";

function SelectInput({ selectTitle, className, options, state, setState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const selectRef = useRef(null);
  const listRef = useRef(null);

  const toggleSelect = () => setIsOpen(!isOpen);

  const handleSelected = (option) => {
    setState(option);
    setIsOpen(false);
  };

  useEffect(
    function () {
      const handler = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("click", handler);

      return () => document.removeEventListener("click", handler);
    },
    [selectRef]
  );

  useEffect(() => {
    const handler = (e) => {
      if (selectRef.current === document.activeElement && e.code === "Space") {
        e.preventDefault();
        if (isOpen) {
          handleSelected(options[highlightedIndex]);
        } else {
          setIsOpen(true);
        }
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [highlightedIndex, isOpen]);

  useEffect(() => {
    const arrowHandle = (e) => {
      e.preventDefault();
      switch (e.code) {
        case "ArrowDown":
          setHighlightedIndex((prevIndex) => (prevIndex + 1) % options.length);
          break;
        case "ArrowUp":
          setHighlightedIndex(
            (prevIndex) => (prevIndex - 1 + options.length) % options.length
          );
          break;
        case "Enter":
          handleSelected(options[highlightedIndex]);
          break;
        case "Escape":
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", arrowHandle); // Foca o primeiro item
    }

    return () => {
      document.removeEventListener("keydown", arrowHandle);
    };
  }, [isOpen, highlightedIndex]);

  return (
    <div className={`span-inputs ${className}`}>
      <span>{selectTitle}</span>
      <div className="select-container">
        <input
          className="select"
          onClick={toggleSelect}
          value={state.label}
          placeholder="Selecione uma opcao"
          readOnly
          ref={selectRef}
          tabIndex={0}
        />

        {isOpen && (
          <ul className="select__options" ref={listRef}>
            {options.map((option, index) => (
              <li
                onClick={() => handleSelected(option)}
                key={index}
                className={
                  index === highlightedIndex ? "select__options--focused" : ""
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SelectInput;
