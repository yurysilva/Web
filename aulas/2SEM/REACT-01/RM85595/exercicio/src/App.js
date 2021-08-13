/*import './App.css';*/
import Cabecalho from './Cabecalho';
import Carros from './components/Carros';
import Parceiros from './components/Parceiros';

export default function App() {
    //criando um array/vetor de veículo para que sejam envidos para o componente
    //Carros. Assim funciona o props
  const listaCarros = ['Camaro','Poscher','Mclaren','Audi','Fusca']
  
  //Criando um atributo simples em String
  const listaSonho = 'MINHA-LISTA'

  //passando uma função com atrinuto
  const maisCarros = ()=> 'Gol'
  return (
    

    <>
      <Cabecalho/>
      <Carros carrosAttrib={listaCarros}
      carrosAttribTitulo={listaSonho} insereCarros={maisCarros}/>
      <Parceiros/>
    </>
  );
}

/*export default App;*/
