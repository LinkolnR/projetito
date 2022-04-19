function AcertoList({acerto}) {
    function filtro(acerto){
        if (acerto !== ""){
            return false
        }
        else{
            return true
        }
    }
    return (
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        justifyContent: 'start',
        color: "green",
      }}>
        {
          acerto.map((acertar, idx) => (
            <li key={acertar}>
              <span  >
                {acertar} 
              </span>
            </li>
          ))
        }
      </ul>
    );
  }
  
  export default AcertoList;