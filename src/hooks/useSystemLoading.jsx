import { useDispatch, useSelector } from 'react-redux';
import { changeIsSystemLoading } from '../store/actions/actions';
import { selectSystem } from '../store/system/selectors';
export function useSystemLoading() {
    const { isSystemLoading } = useSelector(selectSystem);
    const dispatch = useDispatch();
    return {
        isSystemLoading,
        setIsSystemLoading: (isSystemLoading) => {
            dispatch(changeIsSystemLoading(isSystemLoading));
        },
    };
}