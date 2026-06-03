import style from './SkeletonItem.module.css'
function SkeletonItem() {
    
    return (

        <div className={`${style.card} ${style.shimmer}`} >

            <div className={style.image}>
                
            </div>


            <div className={style.info} >
                <span></span>
                <span></span>
            </div>

            <span className={style.button_sk}></span>

        </div>

    )


}

export default SkeletonItem;