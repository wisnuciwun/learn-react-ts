type MyButtonProps = {
    variant: 'primary' | 'secondary'
    children: string // additional if you want to restrict child as string, defaultly it no needs to declare
} &  React.ComponentProps<'button'>
// } & Omit<React.ComponentProps<'button'>, 'children'> //if you want to show err msg

export const MyButton = ({ variant, children, ...rest }: MyButtonProps) => { //children to pass text from class comp, rest for button props
  return <button className={`mybtn-${variant}`} {...rest}>{children}</button>;
};
