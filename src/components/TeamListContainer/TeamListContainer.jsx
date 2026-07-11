import { useEffect, useState } from "react"
import Team from "../Team/Team.jsx"
import style from "./TeamListContainer.module.css"

function TeamListContainer() {


    const [teamList , setTeamList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

useEffect(() => {
        fetch("/data/team.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar el equipo");
                }
                return response.json();
            })
            .then((data) => {
                setTeamList(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



   return (

    
    <div className={style.container}>
        {
          !loading
          ? teamList.length !== 0 ? (
                teamList.map((element)=>(
                <div key={element.id} className={style.container1}>
                    <Team 
                    name={element.name}
                    role={element.role}
                    image={element.image}
                    />
                </div>
            ))) : null
            :null
        }
    </div>
)
}

export default TeamListContainer;