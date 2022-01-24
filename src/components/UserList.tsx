type Userlistprops = {
    // nameList: [
    //     {
    //         firstName: string,
    //         lastName: string
    //     }
    // ]
    nameList: {
        firstName: string,
        lastName: string
    }[]
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
