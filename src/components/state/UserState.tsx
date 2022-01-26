import { useState } from "react";

type UserStateProps = {
    name: string,
    email: string
}

export const UserState = () => {
    const [login, setlogin] = useState< UserStateProps | null >(null);

    const handleLogin = () => { setlogin({
        name: "Wisnu",
        email: "wisnu@gmail.com"
    }) }
    const handleLogout = () => { setlogin(null) }

    return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User {login != null ? `${login.name} with email ${login.email} is logged in` : 'logged out'}</div>
    </div>
    );
}