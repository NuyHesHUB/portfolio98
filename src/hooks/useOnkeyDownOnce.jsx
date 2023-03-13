import { useEffect } from 'react';
export function useOnKeyDownOnce(key, onKeyDown) {
    useEffect(() => {
        const listener = (event) => {
            if (event.key === key) {
                window.location.href='/windows'
                console.log(key);
                console.log(onKeyDown);
            }
        };
        window.addEventListener('keydown', listener);
        return () => window.removeEventListener('keydown', listener);
    }, [key, onKeyDown]);
}

/* window.location.href='/window' */