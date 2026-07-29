import style from"./Pagination.module.css"

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    
    pages.push(i);
  }


  return (
    <div className={style.pagination}>
     
      {pages.map((page, index) => {
        
        return <button key={index} onClick={()=>setCurrentPage(page)}
        className={page == currentPage ? style.active : ""}
        >{page}</button>;
     
     })}

    </div>
  );
}

export default Pagination;
