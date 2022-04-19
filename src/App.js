import {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CaracInput from "./CaracInput";
import TitlebarImageList from "./imagen";
import AcertoList from "./acertoList";
import ErroList from "./erroList";
import ChuteInput from "./ChuteInput";

export default function SelectVariants() {
  const [caracInput, setCaracInput] = useState('');
  const [caracteristicaInput, setCaracteristicaInput] = useState('');
  const [sorteadoCarac, setSorteado] = useState('');
  const [sorteadoCaracTodo, setSorteadoTodo] = useState({});
  const [tentativa,setTentativa] = useState('');
  const [errado, setErrado] = useState([])
  const [certo, setCerto] = useState([])
  const [certoSimples, setCertoSimple] = useState([])
  const [erradoSimples, setErradoSimple] = useState([])
  const [chuteInput , setChuteInput ] = useState('') 
  const personagens = require('./genshin.json')
  const handleChange = (e) => {
    setCaracteristicaInput(e.target.value); 
  };

  const handleCaracInputOnChange = e => {
    setCaracInput(e.target.value);
  };

  const handleChuteInputOnChange = e => {
    setChuteInput(e.target.value)
  }
  const sorteio=()=> {
    if (sorteadoCarac === ''){
      var RandomNumber = Math.floor(Math.random() * 34) +1
      setSorteado(personagens[RandomNumber].nome)
      setSorteadoTodo(personagens[RandomNumber])
      console.log(RandomNumber)
      return alert("PERSONAGEM SORTEADO" + RandomNumber)
    
    } 
  };

  const testaChute = () => {
    if (chuteInput === sorteadoCarac){
      return alert("VOCÊ GANHOU!!! :)")
    }
    else{
      return alert("VOCÊ PERDEU!!! :(")
    }
  }



  const testaCarac = () => {
    if(caracInput !== ''){

      if (caracteristicaInput === 'cabelo'){
        if (caracInput === sorteadoCaracTodo.cabelo ){
          if (caracInput !== ""){
            
            const newCerto = {cabelo : caracInput};
            setCerto([...certo, newCerto])
            setCertoSimple([...certoSimples,caracInput])
           
          }
        }
        else{
          const newErro = {cabelo : caracInput};
          if (caracInput !== ""){
          setErrado([...errado, newErro])
          setErradoSimple([...erradoSimples,caracInput])
          
          }
        }
      }
      else if(caracteristicaInput === 'elemento') {
        if (caracInput === sorteadoCaracTodo.elemento ){ 
          if (caracInput !== ""){
          const newCerto = {elemento : caracInput};
            setCerto([...certo, newCerto])
            setCertoSimple([...certoSimples,caracInput])
           
          }
        }
        else{
          if (caracInput !== ""){
          const newErro = {elemento : caracInput};
          setErrado([...errado, newErro])
          setErradoSimple([...erradoSimples,caracInput])
          
          }
        }
      }
      else if(caracteristicaInput === "estrelas"){
        if (caracInput === sorteadoCaracTodo.estrelas ){ 
          const newCerto = {estrelas : caracInput};
          if (caracInput !== ""){
          setCerto([...certo, newCerto])
          setCertoSimple([...certoSimples,caracInput])
         
          }
        }
        else{
          const newErro = {estrelas : caracInput};
          if (caracInput !== ""){
          setErrado([...errado, newErro])
          setErradoSimple([...erradoSimples,caracInput])
          
          } 
        }

      }
      else if(caracteristicaInput === "cidade"){
        if (caracInput === sorteadoCaracTodo.cidade){ 
          const newCerto = {cidade : caracInput};
          if (caracInput !== ""){
          setCerto([...certo, newCerto])
          setCertoSimple([...certoSimples,caracInput])
         
          }
        }
        else{
          const newErro = {cidade : caracInput};
          if (caracInput !== ""){
          setErrado([...errado, newErro])
          setErradoSimple([...erradoSimples,caracInput])
          
          }
        }

      }
      else if (caracteristicaInput === "arma"){
        if (caracInput === sorteadoCaracTodo.arma){ 
          const newCerto = {arma : caracInput};
          if (caracInput !== ""){
          setCerto([...certo, newCerto])
          setCertoSimple([...certoSimples,caracInput])
         
          }
        }
        else{
          const newErro = {arma : caracInput};
          if (caracInput !== ""){
          setErrado([...errado, newErro])
          setErradoSimple([...erradoSimples,caracInput])
          
          }
        }
      }
    }

    setCaracInput('')
  }


  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
     }}>

      <div
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        border:'1px solid black',
        marginRight:'3rem',
        width: '30%',
        alignItems: "center",
      }}>

        <button onClick={sorteio}>
         SORTEIA
       </button>

        
        <div>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">{caracteristicaInput}</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={caracInput}
              onChange={handleChange}
              label="Característica"
            >
              <MenuItem value={'cabelo'}>Cabelo</MenuItem>
              <MenuItem value={'elemento'}>Elemento</MenuItem>
              <MenuItem value={'cidade'}>Cidade</MenuItem>
              <MenuItem value={'arma'}>Arma</MenuItem>
              <MenuItem value={'estrelas'}>estrelas</MenuItem>
            </Select>
          </FormControl>


          <div>
            <CaracInput
            handleCaracInputOnChange = {handleCaracInputOnChange}
            caracInput = {caracInput}
            testaCarac = {testaCarac}
            caracteristicaInput = {caracteristicaInput}
            >
            </CaracInput>
          </div>


          <div style={{
            display: 'flex',
            flexDirection: 'row',
            
          }}>

            <section>
            <AcertoList
            acerto={certoSimples}
            tentativa ={tentativa}
            >

            </AcertoList>

            </section>
            
            <section>
            <ErroList
            erros={erradoSimples}
            tentativa ={tentativa}
            >
            </ErroList>

            </section>


          </div>
          <section>
            <ChuteInput
            handleChuteInputOnChange= {handleChuteInputOnChange}
            ChuteInput = {chuteInput}
            testaChute = {testaChute}
            >

            </ChuteInput>
            </section>

            <h2>{sorteadoCarac}</h2>

        </div>
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%'
      }}>
        <TitlebarImageList
        Data={personagens}
        personagemSorteado = {sorteadoCaracTodo} 
        acertos= {certoSimples}
        errados= {erradoSimples}
        >

        </TitlebarImageList>
      </div>
    </div>
  );
}

