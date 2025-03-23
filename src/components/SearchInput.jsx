import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput() {
  return (
    <div className="u-width-25 u-margin-bottom-big u-margin-top-huge u-gap-Xsmall input-box">
      <FontAwesomeIcon className="input-box__icon" icon={faMagnifyingGlass} />
      <input
        type="text"
        className="input-box__input"
        placeholder="Digite alguma coisa..."
      />
    </div>
  );
}

export default SearchInput;
