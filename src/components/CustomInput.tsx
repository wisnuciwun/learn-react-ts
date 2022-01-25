type CustomInputProps = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CustomInput({ value, handleChange }: CustomInputProps) {
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { //if u want to props used in a function
    console.log(e); 
}
  return <div>
      <input onChange={handleInputChange} value={value} />
  </div>;
}
