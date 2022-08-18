import ThreeCities from './components/threeCities';
import TwoCities from './components/twoCities';

// css
import './styles/app.scss';

export default function App() {
  return (
    <div className="container">
      <a href="https://www.oturviagens.com/" target="_blank">
        <img src="/logo-otur.svg" alt="Logo Otur Viagens" />
      </a>
      <h1>Criar Palavras-chave para busca:</h1>
      <TwoCities />
      <ThreeCities />
    </div>
  );
}
