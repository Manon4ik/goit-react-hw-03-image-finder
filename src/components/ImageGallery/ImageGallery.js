import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
export default function ImageGallery({data}) {
    //console.log('data:',data);
    
    return (
        <ul class="gallery">
            {data.map(({id, previewURL, largeImageURL, type})=>(
                <ImageGalleryItem key={id} id={id} previewURL={previewURL} largeImageURL={largeImageURL} type={type}/>
            ))}
        </ul>
    )
}