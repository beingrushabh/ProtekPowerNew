import React from 'react';

export default function ProductSpecs({ specifications }) {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Specifications</h3>
            <div style={styles.specsGrid}>
                {Object.entries(specifications).map(([key, value], index) => (
                    <div key={index} style={styles.specRow}>
                        <span style={styles.specKey}>{key}</span>
                        <span style={styles.specValue}>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        marginBottom: '40px',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
        position: 'relative',
        paddingBottom: '10px',
    },
    specsGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '20px',
    },
    specRow: {
        display: 'flex',
        borderBottom: '1px solid #eee',
        paddingBottom: '8px',
    },
    specKey: {
        flex: '1',
        fontWeight: '500',
        color: '#555',
    },
    specValue: {
        flex: '2',
        color: '#333',
    }
};