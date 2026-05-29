import skeletonCss from './SkeletonItem.module.css'
function SkeletonItem() {
    
    return (

        <div className={`${skeletonCss.card} ${skeletonCss.shimmer}`} >

            <div className={skeletonCss.image}>
                
            </div>


            <div className={skeletonCss.info} >
                <h3>  </h3>
                <h3>    </h3>
            </div>


        </div>

    )


}

export default SkeletonItem;