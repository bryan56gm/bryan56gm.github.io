import { useState, useEffect, useRef} from 'react';

const useChangeTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('selected-theme') || 'light'
    });
    
    const bodyRef = useRef(document.body);

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('selected-theme', newTheme);
    };

    useEffect(() => {
        const body = bodyRef.current;
        (theme === 'dark') ? body.classList.add('dark') : body.classList.remove('dark');
        
    }, [theme]);

    return [ theme, changeTheme ];
};

export default useChangeTheme;
