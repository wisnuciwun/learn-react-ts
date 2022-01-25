type CustomButtonProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>,id: number) => void
}

export default function CustomButton({ handleClick }: CustomButtonProps) {
  return <div>
      <button onClick={(e) => handleClick(e,1)} >Click here to test !</button>
  </div>;
}
