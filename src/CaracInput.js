function CaracInput(props) {
    const { handleCaracInputOnChange, caracInput,testaCarac , caracteristicaInput} = props;
    return(
      <>
      <label>Escrever uma caracteristica: </label> <br></br>
        <input
        id = 'nome-Carac'
          placeholder=  {caracteristicaInput}
          onChange={handleCaracInputOnChange}
          value={caracInput}
        />
        <button onClick={testaCarac}>
        Testar
        </button>
      </>
    )
  }
  
  export default CaracInput;