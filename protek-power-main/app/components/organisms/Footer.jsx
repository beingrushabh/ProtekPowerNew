import React from 'react';
import SocialIcon from '../atoms/SocialIcon';
import Logo from '../atoms/Logo';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const allLinks = [
        { label: 'About Us', url: '/about' },
        { label: 'Products', url: '/products' },
        { label: 'Services', url: '/services' },
        { label: 'Contact', url: '/contact' },
        { label: 'FAQs', url: '/faqs' },
        { label: 'Warranty', url: '/warranty' },
        { label: 'Careers', url: '/careers' },
    ];

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.mainSection}>
                    <div style={styles.logoSection}>
                        <p style={styles.tagline}>
                            Leading provider of power management solutions since 1980.
                        </p>
                        <div style={styles.socialIcons}>
                            <SocialIcon icon="𝕏" url="https://twitter.com/protekpower" />
                            <SocialIcon icon="f" url="https://facebook.com/protekpower" />
                            <SocialIcon icon="in" url="https://linkedin.com/company/protekpower" />
                            <SocialIcon icon="📷" url="https://instagram.com/protekpower" />
                        </div>
                    </div>

                </div>

                <div style={styles.linksRow}>
                    {allLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            <a href={link.url} style={styles.footerLink}>
                                {link.label}
                            </a>
                            {index < allLinks.length - 1 && <span style={styles.divider}>|</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div style={styles.bottomSection}>
                    <div style={styles.copyright}>
                        © {currentYear} Protek Power. All rights reserved.
                    </div>
                    <div style={styles.legalLinks}>
                        <a href="/privacy" style={styles.legalLink}>Privacy</a>
                        <span style={styles.legalDivider}>•</span>
                        <a href="/terms" style={styles.legalLink}>Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#1a1a1a',
        color: 'white',
        paddingTop: '40px',
        paddingBottom: '20px',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    mainSection: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
        '@media (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        }
    },
    logoSection: {
        marginBottom: '20px',
        '@media (min-width: 768px)': {
            marginBottom: '0',
            flex: '1',
        }
    },
    logoWrapper: {
        marginBottom: '15px',
    },
    tagline: {
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: '1.6',
        marginBottom: '20px',
        maxWidth: '400px',
    },
    socialIcons: {
        display: 'flex',
        gap: '12px',
    },
    infoSection: {
        '@media (min-width: 768px)': {
            flex: '1',
            display: 'flex',
            justifyContent: 'flex-end',
        }
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
    },
    contactIcon: {
        marginRight: '8px',
        fontSize: '1rem',
    },
    contactLink: {
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        ':hover': {
            color: '#fff',
        }
    },
    linksRow: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '5px',
        padding: '15px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '20px',
    },
    footerLink: {
        color: 'rgba(255, 255, 255, 0.8)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        padding: '0 5px',
        transition: 'color 0.2s ease',
        ':hover': {
            color: '#fff',
        }
    },
    divider: {
        color: 'rgba(255, 255, 255, 0.3)',
    },
    bottomSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    },
    copyright: {
        fontSize: '0.85rem',
        color: 'rgba(255, 255, 255, 0.6)',
        marginBottom: '10px',
        '@media (min-width: 768px)': {
            marginBottom: '0',
        }
    },
    legalLinks: {
        display: 'flex',
        alignItems: 'center',
    },
    legalLink: {
        fontSize: '0.85rem',
        color: 'rgba(255, 255, 255, 0.6)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        ':hover': {
            color: '#fff',
        }
    },
    legalDivider: {
        margin: '0 8px',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '0.85rem',
    }
};