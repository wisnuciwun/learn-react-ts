type WelcomeProps = { //use type when we want to create app, interface when we want to create library
    username: string,
    month: number,
    isLogin: boolean
}

function Welcome(props: WelcomeProps) {
    return <div>
        <h2>
            {
                props.isLogin ?
                    `Hello {props.username ? props.username : "everybody"} ! im learning React with typescript for {props.month} months`
                    :
                    `Hello guest !`
            }
        </h2>
    </div>;
}

export default Welcome;
