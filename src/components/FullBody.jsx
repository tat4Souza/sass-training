function FullBody({ fullbody, style }) {
  return (
    <div className="fullbody">
      <div className="fullbody__image-box u-margin-bottom-big">
        <img src={fullbody} alt="Character icon" className="fullbody__image" />
      </div>
      <div className="fullbody__texts">
        <label>Moda</label>
        <h4 className="heading-quaternary u-margin-bottom-small">{style}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut
          sit nemo sed amet eum, impedit eligendi asperiores blanditiis
          quibusdam optio est ad repudiandae veritatis distinctio minus quis
          odit possimus?
        </p>
      </div>
    </div>
  );
}

export default FullBody;
