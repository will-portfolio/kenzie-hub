import styled from "styled-components";
import { ContainerProps } from "./interface";



export const Conteiner = styled.div<ContainerProps>`
    width: 90%;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin:  10px 0 10px 0;
    button{
        border-radius: 10px;
        font-weight:bold ;
        width: 100%;
        height: 100%;
        color: ${props => props.color ? props.color:"#FFFFFF"};
        background-color: ${props => props.back ? props.back :"#FFFFFF"};
        &:active{
            background-color: ${props => props.back ? "purple" :"#c4c4c4"};
        }
    }
`