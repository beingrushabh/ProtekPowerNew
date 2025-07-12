import React, { useState } from 'react';
import ProductImageZoom from '../atoms/ProductImageZoom';

export default function ProductGallery({ images }) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div style={styles.gallery}>
            <div style={styles.mainImageContainer}>
                <ProductImageZoom
                    src={images[activeImage].url}
                    alt={images[activeImage].alt}
                />
            </div>

            <div style={styles.thumbnails}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.thumbnailContainer,
                            ...(index === activeImage ? styles.activeThumbnail : {})
                        }}
                        onClick={() => setActiveImage(index)}
                    >
                        <img
                            src={image.url}
                            alt={`Thumbnail ${index + 1}`}
                            style={styles.thumbnail}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    gallery: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    mainImageContainer: {
        width: '100%',
        height: '400px',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    },
    thumbnails: {
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '8px',
        '::-webkit-scrollbar': {
            height: '6px',
        },
        '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#cacaca',
            borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#aaaaaa',
        },
    },
    thumbnailContainer: {
        width: '80px',
        height: '80px',
        minWidth: '80px',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '2px solid transparent',
        transition: 'all 0.2s ease',
    },
    activeThumbnail: {
        border: '2px solid #0066cc',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
};