function FormInput({ inputTitle, className, type = "text" }) {
  return (
    <div className={`form__span-inputs ${className}`}>
      <span>{inputTitle}</span>
      <input type={type} className="form__inputs" placeholder={inputTitle} />
    </div>
  );
}

export default FormInput;
