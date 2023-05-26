//Declare o estilo do formulário aqui
import styled from "styled-components";

export const DesignDoFormulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;

form{
    display: flex;
    flex-direction:column
}

label{
    width: 25vw;
}

input {
  width: 25vw;
  height: 3vh;
  margin-bottom: 4vh;
  border-radius: 10px;
  border: none;
  border-bottom: 1px solid black;
}


select{
    height: 4vh;
    margin-bottom: 4vh;
}

button{
    height: 5vh;
    background-color: #FFA400;
    color: white;
    border-radius: 10px;
}

`
;
