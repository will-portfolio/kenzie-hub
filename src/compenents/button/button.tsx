import { IButtonPros } from "./interface";
import { Conteiner } from "./styled";

const Button = ({name, color, background, onClick}:IButtonPros) => {
    return <Conteiner color = {color} back = {background ? background : null}>
        <button onClick = {onClick} type = "submit">{name}</button>
    </Conteiner>
}

export default Button;