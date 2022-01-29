import { Login } from "components/state/Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLogin: boolean
    component: React.ComponentType<ProfileProps>
}



export default function Private({ isLogin, component: Component }: PrivateProps) {
    if (isLogin) {
        return <Component name="Wisnu" />
    }
    else {
        return <Login />
    }
}
