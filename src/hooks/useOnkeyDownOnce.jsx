import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export function useOnKeyDownOnce(key, onKeyDown) {
    const navigate = useNavigate();
    useEffect(() => {
        const listener = (event) => {
            if (event.key === key) {
                navigate('/loading')
                /* window.location.href='/loading'
                console.log(key);
                console.log(onKeyDown); */
            }
        };
        window.addEventListener('keydown', listener);
        return () => window.removeEventListener('keydown', listener);
    }, [key, navigate, onKeyDown]);
}


/* window.location.href='/window' */
//[key, onKeyDown]);