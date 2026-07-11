import SkeletonItem from "../SkeletonItem/SkeletonItem.jsx";
import style from "../SkeletonItem/SkeletonItem.module.css"
function SkeletonContainer() {

    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <div className={`${style.h1c} ${style.shimmer}`} >
                <h1 ></h1>
            </div>
            <div className={style.container}>
                {
                    skeleton.map((e) => (
                        <SkeletonItem key={e} />
                    ))
                }
            </div>
        </>
    )
}


export default SkeletonContainer