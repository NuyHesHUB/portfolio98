/* import { useDispatch, useSelector } from 'react-redux';
import { ChangeBiosLoadingStatus } from '../store/actions/actions';
export function useBiosLoading() {
    const { isBiosLoaded } = useSelector();
    const dispatch = useDispatch();
    return {
        isBiosLoaded,
        setIsBiosLoaded: (isBiosLoaded) => {
            return dispatch(ChangeBiosLoadingStatus(isBiosLoaded));
        },
    };
} */