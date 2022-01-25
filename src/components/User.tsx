import { Userprops } from "types/user.types";

function User(props: Userprops) {
  return <div>{props.name.firstName} {props.name.lastName}</div>
}

export default User;
