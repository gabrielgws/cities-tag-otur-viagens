import { useRef, useState } from 'react';

// css
import styles from './styles.module.scss';

export default function TwoCities() {
  const [firstCity, setFirstCity] = useState('');
  const [secondCity, setSecondCity] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  function handleChangeFirstCity(event) {
    setFirstCity(event.target.value);
  }

  function handleChangeSecondCity(event) {
    setSecondCity(event.target.value);
  }

  function copyToClipboard() {
    const text = document.getElementById('textCopyTwo').innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`"${text}" Copiado com sucesso!`))
      .then(() => setCopySuccess('Copiado com Sucesso!'))
      .catch((err) => alert(`Erro ao copiar: ${err}`));
  }

  return (
    <div className={styles.container}>
      <h2>Dois Destinos:</h2>
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
      </div>

      <div className={styles.citiesContainer}>
        <p id="textCopyTwo">
          {firstCity}, {secondCity}, Viagem para {firstCity}, Viagem para{' '}
          {secondCity}, {firstCity} & {secondCity}, {firstCity} e {secondCity},{' '}
          {firstCity} ou {secondCity}, {firstCity} com {secondCity},{' '}
          {secondCity} & {firstCity}, {secondCity} e {firstCity}, {secondCity}{' '}
          ou {firstCity}, {secondCity} com {firstCity}, <strong>end</strong>
        </p>
        <button onClick={copyToClipboard}>Copiar</button>
        <span>{copySuccess}</span>
      </div>
    </div>
  );
}
