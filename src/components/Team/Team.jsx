import TeamCss from "./Team.module.css"


function Team({name,role,image}){
   
    return(
        <>
            <h4>{name}</h4>
            <img src={image} alt="" />
            <h4>{role}</h4>

       </>



    )




}

export default Team;