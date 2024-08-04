import React, { useEffect, useState } from 'react';
import './LoginCheck.css';

const LoginCheck = ({ isLoggedIn }) => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) {
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    }, [isLoggedIn]);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <p>Don't have an account? <a href="/register">Register now</a></p>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginCheck;
