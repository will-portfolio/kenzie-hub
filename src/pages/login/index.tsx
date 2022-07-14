import { ConsteinerInput, Conteiner, Discription } from "./estilo";
import Logo from "../../compenents/logo/logo";
import Input from "../../compenents/input/input";
import Button from "../../compenents/button/button"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import api from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ILoginProps } from "./interface";

const Login = ({setIsLogado, isLogado}: ILoginProps) => {


   
    const navegate = useNavigate()

    if (isLogado) {
        navegate("/deshbord")
    }

    const formSchema = yup.object().shape({
        email: yup.string().required("Campo Obrigatorio"),
        password: yup.string().required("Campo Obrigatorio")
    })

    const cadastar = () =>{
        navegate("/cadastro")

    }

    const {register,handleSubmit, formState : {errors} } = useForm({resolver:yupResolver(formSchema)})

    const onSubmit = handleSubmit((date) => {
        api.post("/sessions", date)
        .then((response) => {

            const id = response.data.user.id;

            localStorage.setItem("@kenzieHub::token", JSON.stringify(response.data.token));
            localStorage.setItem("@kenzieHub::id", JSON.stringify(id));

            setIsLogado(true);

            navegate("/deshbord")

        })
        .catch(err => console.log(err))
    })
    

    return (<Conteiner>

            <Logo/>
            <ConsteinerInput>
                <form onSubmit = {onSubmit}>
                    <Input label = "Login" register = {register} name = "email"/>
                    <Input label = "Senha" register = {register} name = "password" type="password"/>
                    <Button  name = "Logar" color = "#FFFFFF" background = "#403CAA"/>
                </form>
            <Discription>
                <p>Criar uma Página para mostar suas</p>
                <p className = "negrito">habilidades metas e progresso</p>
            </Discription>
            <Button onClick = {() => cadastar()} 
                    name = "Cadastrar" color = "#999999" 
                    />
            </ConsteinerInput>
    </Conteiner>)


   
}

export default Login;