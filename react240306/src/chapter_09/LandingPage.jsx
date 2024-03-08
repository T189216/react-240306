import React, { useState } from 'react';
import Toolbar from './Toolbar';

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const OnClickLogin = () => {
        setIsLoggedIn(true);
    };

    const OnClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                OnClickLogin={OnClickLogin}
                OnClickLogout={OnClickLogout}
            />
            <div style={{ padding: 16 }}>Main Page!</div>
        </div>
    );
}

export default LandingPage;