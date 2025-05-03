import logo from './logo.png';
import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer> This project was coded by <a href='https://github.com/MadameAmaka' target='_blank' rel='noreferrer'>Amaka Onwuli </a> and is open-sourced on <a href='https://github.com/MadameAmaka/dictionary_app' target='_blank' rel='noreferrer'>Github</a>, and hosted on <a href='https://amakas-dictionary-app.netlify.app/' target='_blank' rel='noreferrer'>Netlify</a>.
      </footer>
    </div></div>
  );
}
