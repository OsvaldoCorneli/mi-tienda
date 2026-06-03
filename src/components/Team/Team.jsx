import style from "./Team.module.css"


function Team({ name, role, image }) {

    return (
        <>
            <div className={style.img_info}>

                <img src={image} alt="" />

            </div>
            <div className={style.employed_info}>

            <h4>{name}</h4>
            <h5>{role}</h5>

            </div>
        </>



    )




}

export default Team;