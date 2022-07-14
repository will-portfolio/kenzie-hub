import {    Conteiner,
            HeaderConteiner, 
            BodyConteiner, 
            TecConteiner,
            TrabConteiner,
            HeaderBodyConteiner,
            UserConteiner,
            HeaderUserConteier,
            BodyUserConteiner} from "./styled"
import Logo from "../../compenents/logo/logo";
import img from "../../img/user.png"
import api from "../../services/api";
import { useEffect, useState } from "react";
import Card from "../../compenents/card/card";
import {FiPlus} from "react-icons/fi"
import {MdOutlineEmail} from "react-icons/md"
import ModalAddTechs from "../../compenents/modal/modalAddTechs/modalAddTechs";
import ModalAddTrab from "../../compenents/modal/modalAddTrab/modalAddTrab";
import ModalRemuveTech from "../../compenents/modal/modalremuveTrch/modalremuveTech";
import ModalRemuveTrab from "../../compenents/modal/modalRemuveTrab/modalRemuveTrab";
import Button from "../../compenents/button/button";
import { useNavigate } from "react-router";
import { ILoginProps } from "../login/interface";
import { ITech, IUser, IWork } from "./interfaces";


const Deshbord = ({isLogado}:ILoginProps) => {

    const [isModaladdTechs, setIsModaladdTechs] = useState(false);
    const [isModaladdTrab, setIsModaladdTrab] = useState(false);
    const [isModalRemoveTechs,setIsModalRemoveTechs ] = useState(false);
    const [isModalRemoveTrab,setIsModalRemoveTrab ] = useState<IWork[]>();


    const [techIsRemuve, setTechIsRemuve] = useState({})
    const [trabIsRemuve, setTrabIsRemuve] = useState({})

    const [user, setUser] = useState<IUser>({} as IUser);
    const [listTechs, setListTechs] = useState([])
    const [listWorks, setListWorks] = useState([])

    const navegate = useNavigate()


    if (!isLogado) {
        navegate("/")
    }

    const [token] = useState(
        JSON.parse(localStorage.getItem("@kenzieHub::token") || "")
    ); 
    const [id] = useState(
        JSON.parse(localStorage.getItem("@kenzieHub::id") || "")
    ); 
    
    const opemRemuveTech = (idTech:number) => {
        const tech = listTechs.filter((item:ITech)=> item.id === idTech);
        setTechIsRemuve(tech[0]);     
        setIsModalRemoveTechs(true); 
    };
    
    const opemRemuveTrab = (idTrab:number) => {
        const trab = listWorks.filter((item:ITech)=> item.id === idTrab);
        setTrabIsRemuve(trab[0]);
        setIsModalRemoveTrab(trab); 
    }

    const logoff = () => {
        localStorage.clear();
        console.log("apagado")
        navegate("/")
    }
 
    useEffect(()=>{
        api.get(`/users/${id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setUser(response.data);
            setListTechs(response.data.techs);
            setListWorks(response.data.works);
        })
        .catch(err => console.log(err));
    },[isModaladdTechs,isModaladdTrab,isModalRemoveTechs,isModalRemoveTrab])

    
    return <Conteiner>
        <HeaderConteiner>
            <Logo/>
            <img src = {img} />
        </HeaderConteiner>


        <BodyConteiner>
            <TecConteiner>
                <HeaderBodyConteiner>
                    <h1>Minhas Tecnologias</h1>
                    <button onClick= {()=> setIsModaladdTechs(true)} ><FiPlus/></button>
                </HeaderBodyConteiner>

                {listTechs && listTechs.map((item:ITech) => (
                    <Card   name = {item.title}
                            status = {item.status}
                            type = "techs" 
                            id = {item.id}
                            opemRemuveTech = {opemRemuveTech}/>))}
                            

            </TecConteiner>

            <TrabConteiner>
                <HeaderBodyConteiner>
                    <h1>Meus Trabalhos</h1>
                    <button onClick = {() => setIsModaladdTrab(true)} ><FiPlus/></button>
                </HeaderBodyConteiner>

                {listWorks && listWorks.map((item:IWork) => (
                    <Card   name = {item.title}
                            status = {item.description}
                            type = "trab" 
                            id = {item.id}
                            opemRemuveTrab = {opemRemuveTrab}/>))}
                           

            </TrabConteiner>
            <UserConteiner>
               <HeaderUserConteier>
                 {user.avatar_url ? (<img src = {user.avatar_url}/>) : (<img src = {img}/>)}  
                 <div>
                     <h1>{user.name}</h1>
                     <p>{user.course_module}</p>
                 </div>
               </HeaderUserConteier>
               <BodyUserConteiner>
                   <div>
                        <MdOutlineEmail/>
                   </div>
                   <p>{user.email}</p>
               </BodyUserConteiner>
               <Button  name = "Sair"
                        color = "#999999"
                        background = "#F5F5F5"
                        onClick = {() => logoff()}/>
            </UserConteiner>
        </BodyConteiner>

        {isModaladdTechs && <ModalAddTechs setIsModaladdTechs = {setIsModaladdTechs}/>}
        {isModaladdTrab && <ModalAddTrab    setIsModaladdTrab = {setIsModaladdTrab}/>}
        {isModalRemoveTechs && <ModalRemuveTech     setIsModalRemoveTechs = {setIsModalRemoveTechs}  
                                                    tech = {techIsRemuve}/>}
        {isModalRemoveTrab && <ModalRemuveTrab setIsModalRemoveTrab = {setIsModalRemoveTrab}
                                                tech = {trabIsRemuve}/>}
        
    </Conteiner>

}

export default Deshbord;