import { useState } from "react";
import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import Formulario from "../Componentes/Formulario";


function PaginaDoCartao() {
    const [payment, setPayment] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [cardNumberInput, setCardNumberInput] = useState('');
    const [validityInput, setValidityInput] = useState('');
    const [cvcInput, setCvcInput] = useState('');

    const handleChangePayment = (event) => {
        setPayment(event.target.value);
    };

    const handleChangeNameInput = (event) => {
        setNameInput(event.target.value);
    };

    const handleChangeCardNumberInput = (event) => {
        setCardNumberInput(event.target.value);
    };

    const handleChangeValidityInput = (event) => {
        setValidityInput(event.target.value);
    };

    const handleChangeCvcInput = (event) => {
        setCvcInput(event.target.value);
    };

    const cleanInputValues = (event) => {
        event.preventDefault();
        setPayment('');
        setNameInput('');
        setCardNumberInput('');
        setValidityInput('');
        setCvcInput('');
        alert('Cartão cadastrado com sucesso!')
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            nameInput.length &&
            cardNumberInput.length &&
            validityInput.length &&
            cvcInput.length
        ) {
            console.log(nameInput, cardNumberInput, validityInput, cvcInput);
        } else {
            alert('Preencha os campos abaixo');
        }
    };

    return (
        <LayoutDaPagina>
            <Cartao
                pagamento={payment}
                numero={cardNumberInput}
                nome={nameInput}
                cvc={cvcInput}
                validade={validityInput}
            />

            <Formulario
                handleChangePayment={handleChangePayment}
                handleChangeNameInput={handleChangeNameInput}
                handleChangeCardNumberInput={handleChangeCardNumberInput}
                handleChangeValidityInput={handleChangeValidityInput}
                handleChangeCvcInput={handleChangeCvcInput}
                handleSubmit={handleSubmit}
                cleanInputValues={cleanInputValues}
                payment={payment}
                nameInput={nameInput}
                cardNumberInput={cardNumberInput}
                validityInput={validityInput}
                cvcInput={cvcInput}
            />
        </LayoutDaPagina>
    );
}

export default PaginaDoCartao;
