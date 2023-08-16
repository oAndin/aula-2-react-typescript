import './style.css';
// import { useState } from 'react';

// const [dark, setDark] = useState(false);
const toggleTheme = () => {
    let btnTheme = document.getElementsByClassName('themeBtn');
    // btnTheme.classList.add = 'active';
}

const DarkMode = () => {

    return (
        <>
            <div onClick={toggleTheme()} className='themeBtn'><div className="ball"></div></div>
        </>
    )
}

// onClick={toggleTheme()}

export default DarkMode;