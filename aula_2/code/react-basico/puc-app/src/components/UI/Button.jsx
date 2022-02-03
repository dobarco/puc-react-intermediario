import styled from 'styled-components';

const Button = styled.button`
    padding: 5px;
    border-radius: 5px;
    border: 0px;
    background-color:aliceblue;
    color: rgb(66, 66, 176);
    margin: 10px;
    cursor: pointer;

    &:hover{
        background-color:rgb(66, 66, 176);
        color: aliceblue;
    }
`

export default Button;