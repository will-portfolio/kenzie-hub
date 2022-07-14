import { IInpoutProps } from "./interfaces";
import { Conteiner } from "./stylrd";


const Input = ({label, type, register, name, errors}:IInpoutProps) => {
    return <Conteiner>
        
        <label>{label}</label>
        <input type = {type}  {...register(name)}/>

    </Conteiner>
}

export default Input;