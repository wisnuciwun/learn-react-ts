type CustomContainerProps = {
    styles: React.CSSProperties
}

export default function CustomContainer(props: CustomContainerProps) {
    return <div>
        <h3 style={props.styles} ><i>You see the world evolves in technologies so much</i></h3>
    </div>;
}
