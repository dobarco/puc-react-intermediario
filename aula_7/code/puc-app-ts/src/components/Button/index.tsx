interface ButtonProps {
    /** Texto a ser utilizado no botão */
    label: string,
    /** Cor de fundo do botão */
    backgroundColor?: string,
    /** Tamanho do botão - influencia na padding */
    size?: 'sm' | 'md' | 'lg',
    /** Função utilizada para trabalhar com o evento de click do botão */
    handleClick?: () => {},
}

/** Botão simples que segue o padrão de estilos x */
function Button({ label, backgroundColor = "green", size = "md", handleClick }: ButtonProps) {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5

    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: 'none',
        color: 'white'
    }
    return (
        <button onClick={handleClick} style={style}>
            {label}
        </button>
    )
}

export default Button