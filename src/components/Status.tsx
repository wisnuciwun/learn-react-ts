type StatusProps = {
    // status: string
    status: 'loading' | 'success' | 'failed' //union of string
}

export default function Status(props: StatusProps) {
    let message
    if (props.status == 'loading') {
        message = 'Loading...'
    }
    else if (props.status == 'success') {
        message = 'Data loaded successfully'
    }
    else if (props.status == 'failed') {
        message = 'Error when loading data'
    }
    else {
        message = 'Unknown error'
    }
    
    return <div>
        <h2>{message}</h2>
    </div>;
}
