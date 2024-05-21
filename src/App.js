import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram'; 
import Header from './components/Header/Header';

function App() {
  const {tg} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
