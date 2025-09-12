import React from 'react';
import { Link } from 'react-router';

export default function BlogCard({ blog }) {
    const firstText = blog.sections.find(s => s.type === 'text');
    const firstImage = blog.sections.find(s => s.type === 'image');

    return (
        <div style={styles.card}>
            {firstImage && (
                <div style={styles.imageContainer}>
                    <img src={firstImage.src} alt="Blog" style={styles.image} />
                </div>
            )}
            <div style={styles.content}>
                <h3 style={styles.title}>{blog.title}</h3>
                <p style={styles.date}>{blog.date}</p>
                <p style={styles.snippet}>{firstText?.content.slice(0, 120)}...</p>
                <Link to={`/blog/${blog.id}`} style={styles.readMore}>
                    Read More →
                </Link>
            </div>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },
    imageContainer: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
    },
    content: {
        padding: '20px',
    },
    title: {
        fontSize: '1.3rem',
        marginBottom: '10px',
        color: '#333',
    },
    date: {
        fontSize: '0.85rem',
        color: '#999',
        marginBottom: '15px',
    },
    snippet: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.5',
        marginBottom: '15px',
    },
    readMore: {
        display: 'inline-block',
        color: '#0066cc',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '0.95rem',
    },
};
