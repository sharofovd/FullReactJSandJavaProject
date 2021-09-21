import { getAuthToken, delAuthToken } from "../utils/token";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const useAuthenticate = () => {
    const [isAuthtenticated, setIsAuthtenticated] = useState(false);

    useEffect(() => {
        const token = getAuthToken();
        
        if (token) {
            const decodedToken = jwtDecode(token);

            if (decodedToken.exp < Date.now() / 1000)  setIsAuthtenticated(false);
            else setIsAuthtenticated(true);
        } else delAuthToken();
    }, [isAuthtenticated]);

    return isAuthtenticated;
}

export default useAuthenticate;
