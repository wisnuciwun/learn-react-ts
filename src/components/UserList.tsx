import { Detail } from "types/user.types";

type Userlistprops = {
    // nameList: [
    //     {
    //         firstName: string,
    //         lastName: string
    //     }
    // ]
    // nameList: {
    //     firstName: string,
    //     lastName: string
    // }[]
    nameList: Detail[]
}

function UserList(props: Userlistprops) {
  return <div>
     {
         props.nameList.map(v => {
             return(<h2 key={v.firstName} >{v.firstName} {v.lastName}</h2>)
         })
     }
  </div>;
}

export default UserList;
