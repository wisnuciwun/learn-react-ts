type CustomContainerProps = {
    styles: React.CSSProperties
}

export default function CustomContainer({ styles }: CustomContainerProps) {
    return <div>
        <h3 style={styles} ><i>You see the world evolves in technologies so much</i></h3>
    </div>;
}
