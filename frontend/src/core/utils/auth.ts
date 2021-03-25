import jwtDecode from "jwt-decode";

export const CLIENT_ID = 'movieflix';
export const CLIENT_SECRET = 'movieflix123';

type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR';

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role;
}

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    userFirstName: string;
    userId: number
}
//localStorage é um objeto do browser (aba application)
export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem("authData") ?? '{}'; //operador de coalescencia
    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData as LoginResponse; //casting
}

export const getAccessTokenDecoted = () => {
    try{
        const sessionData = getSessionData();
        const tokenDecoded = jwtDecode(sessionData.access_token);
        return tokenDecoded as AccessToken;
    }catch(error){
        return {} as AccessToken;
    }   
}

export const isTokenValid = () =>{
    const { exp } = getAccessTokenDecoted();
    return Date.now() <= (exp * 1000);
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();
    return sessionData.access_token && isTokenValid();
}

export const isAllowedByRole = (routeRoles: Role[] = []) => {
    if(routeRoles.length === 0){
        return true;
    }
   
    const  token = getAccessTokenDecoted();
    return routeRoles.some(role => token?.authorities?.includes(role));
  }
  
  export const logout = () => {
      localStorage.removeItem("authData");    
  }