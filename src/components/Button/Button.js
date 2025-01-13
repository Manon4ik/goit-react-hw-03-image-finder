export default function Button({loadMore, page}){
    return(
        <button type="button" onClick={()=>loadMore()}>Load more {page}</button>
    )
}