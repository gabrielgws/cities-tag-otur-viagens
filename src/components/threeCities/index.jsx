import { useState } from 'react';

// css
import styles from './styles.module.scss';

export default function ThreeCities() {
  const [firstCity, setFirstCity] = useState('');
  const [secondCity, setSecondCity] = useState('');
  const [thirdCity, setThirdCity] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  function handleChangeFirstCity(event) {
    setFirstCity(event.target.value);
  }

  function handleChangeSecondCity(event) {
    setSecondCity(event.target.value);
  }

  function handleChangeThirdCity(event) {
    setThirdCity(event.target.value);
  }

  function copyToClipboard() {
    const text = document.getElementById('textCopyThree').innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`"${text}" Copiado com Sucesso!`))
      .then(() => setCopySuccess('Copiado com Sucesso!'))
      .catch((err) => alert(`Erro ao copiar: ${err}`));
  }

  return (
    <div className={styles.container}>
      <h2>Três Destinos:</h2>
      <div className={styles.inputContainer}>
        <input
          name="firstCity"
          value={firstCity}
          onChange={handleChangeFirstCity}
          placeholder="Digite o primeiro destino"
        ></input>

        <input
          name="secondCity"
          value={secondCity}
          onChange={handleChangeSecondCity}
          placeholder="Digite o segundo destino"
        ></input>
        <input
          name="thirdCity"
          value={thirdCity}
          onChange={handleChangeThirdCity}
          placeholder="Digite o terceiro destino"
        ></input>
      </div>

      <div className={styles.citiesContainer}>
        <p id="textCopyThree">
          {firstCity}, {secondCity}, {thirdCity}, Viagem para {firstCity},
          Viagem para {secondCity}, Viagem para {thirdCity}, {firstCity} &{' '}
          {secondCity}, {firstCity} e {secondCity}, {firstCity} ou {secondCity},{' '}
          {firstCity} com {secondCity}, {secondCity} & {firstCity}, {secondCity}{' '}
          e {firstCity}, {secondCity} ou {firstCity}, {secondCity} com{' '}
          {firstCity}, {firstCity} & {thirdCity}, {firstCity} e {thirdCity},{' '}
          {firstCity} ou {thirdCity}, {firstCity} com {thirdCity}, {thirdCity} &{' '}
          {firstCity}, {thirdCity} e {firstCity}, {thirdCity} ou {firstCity},{' '}
          {thirdCity} com {firstCity}, {secondCity} & {thirdCity}, {secondCity}{' '}
          e {thirdCity}, {secondCity} ou {thirdCity}, {secondCity} com{' '}
          {thirdCity}, {thirdCity} & {secondCity}, {thirdCity} e {secondCity},{' '}
          {thirdCity} ou {secondCity}, {thirdCity} com {secondCity},{' '}
          <strong>end</strong>
        </p>
        <button onClick={copyToClipboard}>Copiar</button>
        <span>{copySuccess}</span>
      </div>
    </div>
  );
}
