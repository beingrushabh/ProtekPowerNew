import React, { useEffect } from 'react';
import { useParams, useLoaderData, Link } from 'react-router';
// import { json } from 'react-router';
import Layout from '../Layout';
import ProductCard from '../atoms/TopProductCard';
import { productCategories } from '../../data/productCategories';
import { products } from '../../data/allproducts';

export async function loader({ params }) {
    const { category } = params;

    // Find category info
    const categoryInfo = productCategories.find(cat => cat.slug === category);

    if (!categoryInfo) {
        throw new Response("Category not found", { status: 404 });
    }

    // Filter products by category
    const categoryProducts = products.filter(product =>
        product.category.toLowerCase() === categoryInfo.name.toLowerCase()
    );

    return json({
        category: categoryInfo,
        products: categoryProducts
    });
}

export function meta({ data }) {
    return [
        { title: `${data.category.name} - Protek Power` },
        { name: "description", content: data.category.description }
    ];
}

export default function ProductCategoryPage() {
    const { category, products } = useLoaderData();

    // Scroll to top when navigating between categories
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category.id]);

    return (
        <Layout>
            <div style={styles.heroSection} className="category-hero">
                <div style={styles.heroOverlay}></div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>{category.name}</h1>
                    <p style={styles.heroDescription}>{category.description}</p>
                </div>
            </div>

            <div style={styles.container}>
                <div style={styles.breadcrumbs}>
                    <Link to="/" style={styles.breadcrumbLink}>Home</Link>
                    <span style={styles.breadcrumbSeparator}>›</span>
                    <Link to="/products" style={styles.breadcrumbLink}>Products</Link>
                    <span style={styles.breadcrumbSeparator}>›</span>
                    <span style={styles.breadcrumbCurrent}>{category.name}</span>
                </div>

                {products.length > 0 ? (
                    <>
                        <div style={styles.sectionHeading}>
                            <h2>{category.name} Products</h2>
                            <div style={styles.divider}></div>
                        </div>

                        <div style={styles.productsGrid}>
                            {products.map(product => (
                                <div key={product.id} style={styles.productWrapper}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div style={styles.emptyState}>
                        <div style={styles.emptyStateIcon}>📦</div>
                        <h2>No products found</h2>
                        <p>We don't have any products in this category at the moment.</p>
                        <Link to="/products" style={styles.backButton}>
                            Browse All Products
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
}

const styles = {
    heroSection: {
        position: 'relative',
        height: '240px',
        backgroundColor: '#0066cc',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
    },
    heroContent: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
        padding: '0 20px',
    },
    heroTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0 0 10px 0',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
    },
    heroDescription: {
        fontSize: '1.2rem',
        maxWidth: '600px',
        margin: '0 auto',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
    },
    breadcrumbs: {
        marginBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.9rem',
    },
    breadcrumbLink: {
        color: '#0066cc',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'underline',
        },
    },
    breadcrumbSeparator: {
        margin: '0 8px',
        color: '#999',
    },
    breadcrumbCurrent: {
        color: '#666',
    },
    sectionHeading: {
        marginBottom: '30px',
        textAlign: 'center',
    },
    divider: {
        width: '60px',
        height: '3px',
        backgroundColor: '#0066cc',
        margin: '15px auto 0',
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px',
    },
    productWrapper: {
        display: 'flex',
    },
    emptyState: {
        textAlign: 'center',
        padding: '60px 0',
        color: '#666',
    },
    emptyStateIcon: {
        fontSize: '3rem',
        marginBottom: '20px',
    },
    backButton: {
        display: 'inline-block',
        backgroundColor: '#0066cc',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        textDecoration: 'none',
        marginTop: '20px',
        transition: 'background-color 0.2s ease',
        ':hover': {
            backgroundColor: '#004c99',
        },
    },
};