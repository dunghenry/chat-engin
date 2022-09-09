import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LoadingToRedirect = () => {
    const [count, setCount] = useState(2);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        count === 0 && navigate('/login');
        return () => clearInterval(interval);
    }, [count, navigate]);
    return (
        <div style={{ marginTop: '300px', textAlign: 'center' }}>
            <h4>
                Redirecting you in{' '}
                <span style={{ color: 'gray', textDecoration: 'underline' }}>
                    {'0' + count}
                </span>{' '}
                seconds
            </h4>
        </div>
    );
};

export default LoadingToRedirect;
