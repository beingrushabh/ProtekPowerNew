import React from 'react';
import { Link } from 'react-router';

export default function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            style={styles.link}
        >
            {children}
        </Link>
    );
}

const styles = {
    link: {
        padding: '0.75rem 1rem',
        color: '#333',
        textDecoration: 'none',
        fontWeight: '500',
        position: 'relative',
        transition: 'color 0.3s ease',
        ':hover': {
            color: '#0066cc',
        },
        '::after': {
            content: '""',
            position: 'absolute',
            width: '0%',
            height: '2px',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#0066cc',
            transition: 'width 0.3s ease',
        },
        ':hover::after': {
            width: '80%',
        }
    }
};