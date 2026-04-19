import { Index } from './pages/Index'
import './App.css'
import style from './App.module.css'
import { Header } from './components/structure/Header'

function App() {
  

  return (
    <>
    <div className={style.AppBody}>
      <Header></Header>
      <Index></Index>
    </div>
    </>
  );
}

export default App