const MoviesCard=({data,isSummary=false,bookActive=false,isform=false})=>{
    const {score,show:{language,name,officialSite,summary,schedule:{days:[dayName]}}}=data;
    const thumbnail=data?.show?.image?.medium;
    const imgNotFound='https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';

    return(
        <div className={isSummary?'movieCardwithsummary':isform?'formcard':'movieCard'}>
         <img src={thumbnail?thumbnail:imgNotFound} alt="movie name poster" />  
          <div><b>Movie Name : </b>{name&&name}</div>
          <div><b>Language : </b>{language || 'language not found'}</div>
          <div><b>Day Name : </b>{dayName&&dayName}</div>
         <div> <i>Score:{score&&score}</i></div>
        {isSummary && <div className="summary"><b>Summary :</b><div dangerouslySetInnerHTML={{ __html: summary }} /></div>}
        {bookActive && <button>Book Show</button>}
        </div>
    )

}
export default MoviesCard;