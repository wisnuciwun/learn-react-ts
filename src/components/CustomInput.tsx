type CustomInputProps = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CustomInput(props: CustomInputProps) {
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { //if u want to props used in a function
    console.log(e); 
}
  return <div>
      <input onChange={handleInputChange} value={props.value} />
  </div>;
}
