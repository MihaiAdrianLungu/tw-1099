import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCheckTokenLoading, setLoggedIn, setToken } from "../store/slices/globalSlice";

function useCheckToken() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch('http://localhost:3000/auth/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token})
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.success) {
                    dispatch(setToken(token));
                    dispatch(setLoggedIn(true));
                } else {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
            })
            .finally(() => {
                dispatch(setCheckTokenLoading(false));
            })
        } else {
            dispatch(setCheckTokenLoading(false));
        }
    }, [])
}

export default useCheckToken;