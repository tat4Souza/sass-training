function RadioInputs({ id, spanTitle }) {
  return (
    <label className="radio">
      <input type="radio" name="radio" id={id} />
      <span>{spanTitle}</span>
    </label>
  );
}

export default RadioInputs;
