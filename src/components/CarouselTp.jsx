import  { useState } from "react"

export default function CarouselTp() {
    const Pictures = [
        {
            url : 'https://images.unsplash.com/photo-1508826882284-54625969a042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
        },
        {
            url : 'https://images.unsplash.com/photo-1604947498105-0ed418039700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80'
        },
        {
            url : 'https://images.unsplash.com/photo-1604947498105-0ed418039700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80'
        }
    ]
    const [slideIndex,setSlideIndex] = useState(0)
    const nextSlide = () => {
        const isSlide = slideIndex === 0 
        const newSlide = isSlide ? Pictures.length - 1 : slideIndex - 1
        setSlideIndex(newSlide) 
    };
    const prevSlide = () => {
        const lastSlide = slideIndex === slideIndex.length - 1;
        const newSlide = lastSlide ? 0 : slideIndex.length + 1 
        setSlideIndex(newSlide);
    }
    return(
       <div className="relative group">
        <div style={{backgroundImage: `url(${Pictures[slideIndex].url})`}} className="bg-cover duration-500"></div>
        <button onClick={prevSlide}>back</button>
        <button onClick={nextSlide}>next</button>
       </div>


    )
}
