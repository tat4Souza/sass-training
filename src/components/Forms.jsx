import Button from "./Button";
import FormInput from "./FormInput";
import RadioInputs from "./RadioInputs";
import SelectInput from "./SelectInput";
import { useState } from "react";

function Forms() {
  const [nation, setNation] = useState({ label: "", value: "" });

  const selectOptions = [
    { label: "SilkHows", value: "silkhow" },
    { label: "Salv'Noit", value: "salvNoit" },
    { label: "Abotranos", value: "abotranos" },
    { label: "Doros", value: "doros" },
  ];

  return (
    <div className="form-container">
      <div className="form">
        <div className="form__img-container">
          <img
            src="/image/Eliot_headshot.png"
            alt="Imagem"
            className="form__image"
          />
        </div>
        <div className="form__form-container">
          <h4 className="heading-quaternary  heading-quaternary--dark-text heading-quaternary--dark-underline">
            Criar Personagem
          </h4>
          <div className="form__content">
            <div className="form__group u-gap-small u-width-full u-margin-bottom-small">
              <FormInput inputTitle="Nome" />
              <FormInput inputTitle="Sobrenome" />
            </div>
            <FormInput
              inputTitle="Idade"
              type="number"
              className="u-margin-bottom-small"
            />
            <SelectInput
              selectTitle="Povo"
              options={selectOptions}
              state={nation}
              setState={setNation}
              className="u-margin-bottom-small"
            />

            <div className="form__inputs-radio u-margin-bottom-big">
              <RadioInputs id="masculine" spanTitle="Masculino" />
              <RadioInputs id="feminine" spanTitle="Feminino" />
              <RadioInputs id="none" spanTitle="Outro" />
            </div>

            <Button label="Cadastrar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
