type CustomButtonProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>,id: number) => void
}

export default function CustomButton(props: CustomButtonProps) {
  return <div>
      <button onClick={(e) => props.handleClick(e,1)} >Click here to test !</button>
  </div>;
}
