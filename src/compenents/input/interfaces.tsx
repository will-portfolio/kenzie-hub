import { DeepRequired, FieldErrorsImpl } from "react-hook-form/dist/types/errors"

export interface IInpoutProps{
    label:string 
    type?:string 
    register:any 
    name:string
    errors?:FieldErrorsImpl<DeepRequired<any>> | undefined
}