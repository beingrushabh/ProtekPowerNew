import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import Layout from '../../components/Layout';
import { defaultBlogs } from '../../data/blogPosts';

export default function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [otherBlogs, setOtherBlogs] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('blogs')) || defaultBlogs;
        const found = stored.find((b) => b.id === id);
        setBlog(found);

        // Show other blogs except current one
        setOtherBlogs(stored.filter((b) => b.id !== id).slice(0, 4));
    }, [id]);

    if (!blog) {
        return (
            <Layout>
                <div style={styles.notFound}>Blog not found.</div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div style={styles.wrapper}>
                {/* Main Content */}
                <div style={styles.mainContent}>
                    <header style={styles.header}>
                        <h1 style={styles.title}>{blog.title}</h1>
                        <p style={styles.date}>Published on {blog.date}</p>
                    </header>

                    {/* {blog.sections.find((s) => s.type === 'image') && (
                        <div style={styles.coverImageContainer}>
                            <img
                                src={blog.sections.find((s) => s.type === 'image').src}
                                alt="Cover"
                                style={styles.coverImage}
                            />
                        </div>
                    )} */}

                    <section style={styles.content}>
                        {blog.sections.map((section, idx) =>
                            section.type === 'text' ? (
                                <div
                                    key={idx}
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                    style={styles.textSection}
                                />
                            ) : (
                                <div style={styles.inlineImageContainer} key={idx}>
                                    <img
                                        src={section.src}
                                        alt="Blog Visual"
                                        style={styles.inlineImage}
                                    />
                                </div>
                            )
                        )}
                    </section>

                    {/* Author Section */}
                    <div style={styles.authorBox}>
                        <img
                            src="/assets/images/author.jpg"
                            alt="Author"
                            style={styles.authorImage}
                        />
                        <div>
                            <h4 style={styles.authorName}>By Protek Power Team</h4>
                            <p style={styles.authorDesc}>
                                Experts in power management solutions, providing insights to help
                                you choose the right stabilizers, UPS systems, and energy solutions
                                for your needs.
                            </p>
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div style={styles.shareBox}>
                        <span>Share: </span>
                        <a
                            href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.shareLink}
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.shareLink}
                        >
                            Twitter
                        </a>
                        <a
                            href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.shareLink}
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Recommended Section */}
                    {otherBlogs.length > 0 && (
                        <div style={styles.recommendedBox}>
                            <h3 style={styles.recommendedTitle}>You may also like</h3>
                            <div style={styles.recommendedGrid}>
                                {otherBlogs.slice(0, 3).map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/blog/${item.id}`}
                                        style={styles.recommendedCard}
                                    >
                                        {item.sections.find((s) => s.type === 'image') && (
                                            <img
                                                src={
                                                    item.sections.find((s) => s.type === 'image').src
                                                }
                                                alt="Blog"
                                                style={styles.recommendedImage}
                                            />
                                        )}
                                        <p style={styles.recommendedText}>{item.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <footer style={styles.footer}>
                        <Link to="/blog" style={styles.backLink}>
                            ← Back to All Blogs
                        </Link>
                    </footer>
                </div>

                {/* Sidebar */}
                <aside style={styles.sidebar}>
                    <h3 style={styles.sidebarTitle}>Other Blogs</h3>
                    {otherBlogs.map((item) => (
                        <Link
                            key={item.id}
                            to={`/blog/${item.id}`}
                            style={styles.sidebarItem}
                        >
                            {item.sections.find((s) => s.type === 'image') && (
                                <img
                                    src={item.sections.find((s) => s.type === 'image').src}
                                    alt="Blog"
                                    style={styles.sidebarImage}
                                />
                            )}
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </aside>
            </div>
        </Layout>
    );
}

const styles = {
    wrapper: {
        display: 'flex',
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px',
        gap: '30px',
    },
    mainContent: {
        flex: 3,
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
        paddingBottom: '40px',
    },
    sidebar: {
        flex: 1,
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        height: 'fit-content',
    },
    header: {
        textAlign: 'center',
        padding: '30px',
        borderBottom: '1px solid #eee',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#222',
        marginBottom: '10px',
    },
    date: {
        fontSize: '1rem',
        color: '#777',
    },
    coverImageContainer: {
        textAlign: 'center',
    },
    coverImage: {
        width: '100%',
        maxHeight: '400px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    content: {
        padding: '30px 50px',
        fontSize: '1.15rem',
        lineHeight: '1.8',
        color: '#333',
    },
    textSection: {
        marginBottom: '25px',
    },
    inlineImageContainer: {
        textAlign: 'center',
        margin: '30px 0',
    },
    inlineImage: {
        maxWidth: '100%',
        borderRadius: '6px',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.08)',
    },
    authorBox: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        margin: '20px 40px',
        padding: '15px',
        borderRadius: '8px',
    },
    authorImage: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    authorName: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    authorDesc: {
        fontSize: '0.95rem',
        color: '#555',
    },
    shareBox: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '1rem',
    },
    shareLink: {
        margin: '0 10px',
        color: '#0066cc',
        textDecoration: 'none',
    },
    recommendedBox: {
        padding: '30px 40px 0',
    },
    recommendedTitle: {
        fontSize: '1.4rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    recommendedGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
    },
    recommendedCard: {
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: '8px',
        textDecoration: 'none',
        color: '#333',
        overflow: 'hidden',
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.2s ease',
    },
    recommendedImage: {
        width: '100%',
        height: '120px',
        objectFit: 'cover',
    },
    recommendedText: {
        padding: '10px',
        fontWeight: 'bold',
        fontSize: '0.95rem',
    },
    footer: {
        textAlign: 'center',
        marginTop: '30px',
    },
    backLink: {
        color: '#0066cc',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    sidebarTitle: {
        fontSize: '1.3rem',
        marginBottom: '15px',
        fontWeight: 'bold',
    },
    sidebarItem: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        marginBottom: '10px',
        textDecoration: 'none',
        color: '#333',
        fontSize: '0.95rem',
    },
    sidebarImage: {
        width: '50px',
        height: '50px',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    notFound: {
        textAlign: 'center',
        padding: '100px 0',
        color: '#666',
        fontSize: '1.4rem',
    },
};
