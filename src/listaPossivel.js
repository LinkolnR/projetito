function ListaPossivel({erros,certos,possiveis}) {
   
    function defineCor(possivel){
        if(certos.includes(possivel)){
            return <span style={{
              color: "green"  
            }}>
                {possivel}
            </span>
        }
        else if(erros.includes(possivel)){
            return <span style={{
              color: "red"  
            }}>
                {possivel}
            </span>
        }
        else{
            return <span>
                    {possivel}
                </span>
        }
    }
  
    return (
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        justifyContent: 'start',
      }}>
        {
          possiveis.map((possivel, _) => (
            <li key={possivel}>
                {defineCor(possivel)}
            </li>
          ))
        }
      </ul>
    );
  }
  

  export default ListaPossivel;