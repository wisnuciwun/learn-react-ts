type IntroduceProps = {
    children: JSX.Element | React.ReactNode
}

export default function Introduce(props: IntroduceProps) {
  return <div>{props.children}</div>;
}
