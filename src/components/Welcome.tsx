type WelcomeProps = { //use type when we want to create app, interface when we want to create library
    username?: string, //conditional props
    month: number,
    isLogin: boolean
}

function Welcome(props: WelcomeProps) {
    const {username = 'Anonymous'} = props 
    return <div>
        <h2>
            {
                props.isLogin ?
                    `Hello ${username} ! im learning React with typescript for ${props.month} months`
                    :
                    `Hello guest !`
            }
        </h2>
    </div>;
}

export default Welcome;
