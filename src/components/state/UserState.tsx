import { useState } from "react";

type UserStateProps = {
    name: string,
    email: string
}

export const UserState = () => {
    // const [login, setlogin] = useState< UserStateProps | null >(null);
    const [login, setlogin] = useState< UserStateProps >({} as UserStateProps); // if you want to avoid {login?.name} when logout because its error if u use method above


    const handleLogin = () => { setlogin({
        name: "Wisnu",
        email: "wisnu@gmail.com"
    }) }
    // const handleLogout = () => { setlogin(null) }
    const handleLogout = () => { setlogin({name: "", email: ""}) } // but it comes with this rule

    return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User {login != null ? `${login.name} with email ${login.email} is logged in` : 'logged out'}</div>
    </div>
    );
}