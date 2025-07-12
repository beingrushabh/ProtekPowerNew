import React, { useState } from 'react';
import { useParams, useLoaderData, Link } from 'react-router';
import Layout from '../components/Layout';
import ProductGallery from '../components/molecules/ProductGallery';
import ProductOverview from '../components/organisms/ProductOverview';
import ProductSpecs from '../components/molecules/ProductSpecs';
import WarrantyInfo from '../components/molecules/WarrantyInfo';
import ProductReviews from '../components/organisms/ProductReview';
import RelatedProducts from '../components/organisms/RelatedProducts';
import { products } from '../data/products';

export async function loader({ params }) {
    const { slug } = params;

    // Find the product
    const product = products.find(p => p.slug === slug);

    if (!product) {
        throw new Response("Product not found", { status: 404 });
    }

    // Find related products (same category, excluding current product)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return { product, relatedProducts };
}

export function meta({ data }) {
    return [
        { title: `${data.product.name} - Protek Power` },
        { name: "description", content: data.product.description }
    ];
}

export default function ProductDetail() {
    const { product, relatedProducts } = useLoaderData();
    const [activeTab, setActiveTab] = useState('description');

    return (
        <Layout>
            <div style={styles.container}>
                <div style={styles.breadcrumbs}>
                    <Link to="/" style={styles.breadcrumbLink}>Home</Link>
                    <span style={styles.breadcrumbSeparator}>›</span>
                    <Link to="/products" style={styles.breadcrumbLink}>Products</Link>
                    <span style={styles.breadcrumbSeparator}>›</span>
                    <Link to={`/products?category=${product.category.toLowerCase()}`} style={styles.breadcrumbLink}>
                        {product.category}
                    </Link>
                    <span style={styles.breadcrumbSeparator}>›</span>
                    <span style={styles.breadcrumbCurrent}>{product.name}</span>
                </div>

                <div style={styles.productContent}>
                    <div style={styles.productImages}>
                        <ProductGallery images={product.images} />
                    </div>
                    <div style={styles.productInfo}>
                        <ProductOverview product={product} />
                    </div>
                </div>

                <div style={styles.productTabs}>
                    <div style={styles.tabsHeader}>
                        <button
                            onClick={() => setActiveTab('description')}
                            style={{
                                ...styles.tabButton,
                                ...(activeTab === 'description' ? styles.activeTab : {})
                            }}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('specifications')}
                            style={{
                                ...styles.tabButton,
                                ...(activeTab === 'specifications' ? styles.activeTab : {})
                            }}
                        >
                            Specifications
                        </button>
                        <button
                            onClick={() => setActiveTab('warranty')}
                            style={{
                                ...styles.tabButton,
                                ...(activeTab === 'warranty' ? styles.activeTab : {})
                            }}
                        >
                            Warranty
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            style={{
                                ...styles.tabButton,
                                ...(activeTab === 'reviews' ? styles.activeTab : {})
                            }}
                        >
                            Reviews ({product.reviews.length})
                        </button>
                    </div>

                    <div style={styles.tabContent}>
                        {activeTab === 'description' && (
                            <div style={styles.descriptionTab}>
                                <h3 style={styles.tabTitle}>Product Description</h3>
                                <div style={styles.descriptionContent}>
                                    <p>{product.fullDescription}</p>

                                    <h4 style={styles.subtitle}>Features & Benefits</h4>
                                    <ul style={styles.featuresList}>
                                        {product.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>

                                    {product.applicationAreas && (
                                        <>
                                            <h4 style={styles.subtitle}>Application Areas</h4>
                                            <ul style={styles.applicationList}>
                                                {product.applicationAreas.map((app, index) => (
                                                    <li key={index}>{app}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'specifications' && (
                            <ProductSpecs specifications={product.specifications} />
                        )}

                        {activeTab === 'warranty' && (
                            <WarrantyInfo warranty={product.warranty} />
                        )}

                        {activeTab === 'reviews' && (
                            <ProductReviews
                                reviews={product.reviews}
                                averageRating={product.rating}
                                totalReviews={product.reviews.length}
                            />
                        )}
                    </div>
                </div>

                {relatedProducts.length > 0 && (
                    <RelatedProducts products={relatedProducts} />
                )}
            </div>
        </Layout>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
    },
    breadcrumbs: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: '0.9rem',
        marginBottom: '30px',
    },
    breadcrumbLink: {
        color: '#0066cc',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'underline',
        }
    },
    breadcrumbSeparator: {
        margin: '0 8px',
        color: '#999',
    },
    breadcrumbCurrent: {
        color: '#666',
    },
    productContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        marginBottom: '60px',
        '@media (min-width: 768px)': {
            flexDirection: 'row',
        }
    },
    productImages: {
        flex: '1',
        '@media (min-width: 768px)': {
            maxWidth: '50%',
        }
    },
    productInfo: {
        flex: '1',
    },
    productTabs: {
        marginBottom: '60px',
    },
    tabsHeader: {
        display: 'flex',
        borderBottom: '1px solid #ddd',
        marginBottom: '30px',
        overflowX: 'auto',
    },
    tabButton: {
        padding: '12px 24px',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '3px solid transparent',
        fontSize: '1rem',
        color: '#666',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all 0.2s ease',
        ':hover:not(.activeTab)': {
            color: '#333',
            borderBottomColor: '#ddd',
        }
    },
    activeTab: {
        color: '#0066cc',
        borderBottomColor: '#0066cc',
        fontWeight: '500',
    },
    tabContent: {
        minHeight: '300px',
    },
    tabTitle: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
    },
    descriptionContent: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#444',
    },
    subtitle: {
        fontSize: '1.2rem',
        margin: '30px 0 15px',
        color: '#333',
    },
    featuresList: {
        paddingLeft: '20px',
        marginBottom: '30px',
    },
    applicationList: {
        paddingLeft: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '10px',
    },
};