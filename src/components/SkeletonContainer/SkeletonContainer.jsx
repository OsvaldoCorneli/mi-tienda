import SkeletonItem from "../SkeletonItem/SkeletonItem";
import SkeletonCss from "../SkeletonItem/SkeletonItem.module.css"
function SkeletonContainer(){

    const skeleton = [1,2,3,4,5,6,7,8,9];

return(


  <>
  <div className={`${SkeletonCss.h1c} ${SkeletonCss.shimmer}`}>
        <h1></h1>
  </div>
 <div className={SkeletonCss.container}>

        

    {
            
     skeleton.map((e)=>(
        
        <SkeletonItem key={e} />


     ))



    }
</div>
</>  

)




}


export default SkeletonContainer