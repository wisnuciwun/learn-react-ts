import { useState } from "react";

export const Login = () => {
    const [login, setlogin] = useState(false);
    const handleLogin = () => { setlogin(true) }
    const handleLogout = () => { setlogin(false) }

    return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {login ? 'logged in' : 'logged out'}</div>
    </div>;
}