import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Course from '../../images/12_6424f3f8-4a2f-48f9-b84b-fcf5a42c4000_480x480.webp'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
const ProductGallery = () => {
    const images = [
        {
            original: `${Course}`,
        },
        {
            original: `${Course}`,
        },
        {
            original: `${Course}`,
        },
    ];
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={Course}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery