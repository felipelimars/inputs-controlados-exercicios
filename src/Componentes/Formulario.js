import { DesignDoFormulario } from './estiloDoFormulario';

const Formulario = ({
    handleChangePayment,
    handleChangeNameInput,
    handleChangeCardNumberInput,
    handleChangeValidityInput,
    handleChangeCvcInput,
    handleSubmit,
    cleanInputValues,
    payment,
    nameInput,
    cardNumberInput,
    validityInput,
    cvcInput
}) => {

    return (
        <DesignDoFormulario>
            <div className="container">
                <form onSubmit={cleanInputValues}>
                    <select value={payment} onChange={handleChangePayment}>
                        <option disabled value="">
                            Selecione
                        </option>
                        <option value="Crédito">Crédito</option>
                        <option value="Débito">Débito</option>
                    </select>
                    <label>
                        Nome:
                        <input onChange={handleChangeNameInput} value={nameInput} />
                    </label>
                    <label>
                        Número do Cartão:
                        <input onChange={handleChangeCardNumberInput} value={cardNumberInput} />
                    </label>
                    <label>
                        Validade:
                        <input onChange={handleChangeValidityInput} value={validityInput} />
                    </label>
                    <label>
                        CVC:
                        <input onChange={handleChangeCvcInput} value={cvcInput} />
                    </label>
                    <button disabled={!nameInput || !cardNumberInput || !validityInput || !cvcInput}>
                        Enviar dados
                    </button>
                </form>
            </div>
        </DesignDoFormulario>
    );
};

export default Formulario;
