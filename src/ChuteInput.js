function ChuteInput(props) {
    const { handleChuteInputOnChange, ChuteInput,testaChute } = props;
    return(
      <>
      <label>Escrever o seu chute: </label> <br></br>
        <input
        id = 'nome-Chute'
          placeholder=  "faca seu chute aqui"
          onChange={handleChuteInputOnChange}
          value={ChuteInput}
        />
        <button onClick={testaChute}>
        Chutar
        </button>
      </>
    )
  }
  
  export default ChuteInput;