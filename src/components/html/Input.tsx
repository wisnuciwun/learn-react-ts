type MyInputProps = React.ComponentProps<'input'>

export const MyInput = (rest: MyInputProps) => { //children to pass text from class comp, rest for button props
  return <input {...rest} />
};
