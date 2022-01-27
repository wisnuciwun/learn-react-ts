import { useContext, useState } from "react";
import { LoginContext } from "./LoginContext";

export const LoginConsume = () => {
    const loginContext = useContext(LoginContext);
    const handleLogin = () => {
        // if(loginContext){
            loginContext.setLogin({
                name: 'Wisnu',
                email: 'wisnu@example.com'
            })
        // }
    }
    const handleLogout = () => {
        // if(loginContext){
            loginContext.setLogin(null) 
        // }
    }
    return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {/* <div>User is {loginContext?.login != null ? `logged in ${loginContext?.login?.name} ${loginContext?.login?.email}` : 'logged out'}</div> using ? because initstate is null */}
        <div>User is {loginContext.login != null ? `logged in ${loginContext.login.name} ${loginContext.login.email}` : 'logged out'}</div> {/* using ? because initstate is null*/}
    </div>;
}