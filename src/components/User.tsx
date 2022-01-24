type Userprops = {
    name: {
        firstName: string,
        lastName: string
    }
}

function User(props: Userprops) {
  return <div>{props.name.firstName} {props.name.lastName}</div>
}

export default User;
