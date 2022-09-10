import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const RedirectPrivate = () => {
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
        <div
            style={{ marginTop: '300px', textAlign: 'center', color: 'white' }}
        >
            <h4>
                Redirecting you in{' '}
                <span style={{ color: 'black' }}>
                    &nbsp;{'0' + count} &nbsp;
                </span>
                seconds
            </h4>
        </div>
    );
};

export default RedirectPrivate;
