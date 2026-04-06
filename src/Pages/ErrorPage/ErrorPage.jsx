import React from 'react';
import { Link } from 'react-router';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: '#fff'
        }}>
            <div style={{
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255,255,255,0.1)',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
                <h1 style={{
                    fontSize: '100px',
                    margin: '0',
                    fontWeight: 'bold'
                }}>
                    404
                </h1>

                <h2 style={{ margin: '10px 0' }}>
                    Oops! Page Not Found
                </h2>

                <p style={{ opacity: 0.8 }}>
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link to="/">
                    <button style={{
                        marginTop: '20px',
                        padding: '12px 25px',
                        borderRadius: '8px',
                        border: 'none',
                        background: '#fff',
                        color: '#333',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <FaHome /> Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;