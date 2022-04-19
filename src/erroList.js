function ErroList({erros,tentativa}) {

  
    return (
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        justifyContent: 'start',
        color: "red",
      }}>
        {
          erros.map((erro, idx) => (
            <li key={erro}>
              <span  >
                {erro}
              </span>
            </li>
          ))
        }
      </ul>
    );
  }
  
  export default ErroList;