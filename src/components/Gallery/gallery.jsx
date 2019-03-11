import React from 'react'
import Gallery from 'react-grid-gallery'

import gOne from '../../images/gallery/01.jpg'
import gTwo from '../../images/gallery/02.jpg'
import gThree from '../../images/gallery/03.jpg'
import gFour from '../../images/gallery/04.jpg'
import gFive from '../../images/gallery/05.jpg'
import gSix from '../../images/gallery/06.jpg'
import gSeven from '../../images/gallery/07.jpg'
import gEight from '../../images/gallery/08.jpg'
import gNine from '../../images/gallery/09.jpg'
import gTen from '../../images/gallery/010.jpg'


const GalleryReact = () => {


//     const IMAGES =
// [{
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)"
// },
// {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212,
//         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//         caption: "Boats (Jeshu John - designerspics.com)"
// },

// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212
// }]

    const IMAGES = [{
        src: gOne,
        thumbnail:gOne,

    },{
        src:gTwo,
        thumbnail:gTwo,

    },
    {
        src:gThree,
        thumbnail:gThree,

    },
    {
        src:gThree,
        thumbnail:gThree,

    },
    {
        src:gFour,
        thumbnail:gFour,

    },
    {
        src:gFive,
        thumbnail:gFive,

    },
    {
        src:gSix,
        thumbnail:gSix,

    },
    {
        src:gSeven,
        thumbnail:gSeven,

    },
    {
        src:gEight,
        thumbnail:gEight,

    },
    {
        src:gNine,
        thumbnail:gNine,

    },
    {
        src:gTen,
        thumbnail:gTen,

    }
]

    return(
        <Gallery margin={10} rowHeight={290} images={IMAGES} />
    )
}


export default GalleryReact;
    
