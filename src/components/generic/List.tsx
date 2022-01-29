type ListProps<U> = {// name it as u want, A, B, C or anything
    // items: string[] | number[], //it means same as {}[] :)
    items: U[], //it means same as {}[] :)
    onClick: (value: U) => void
}
export const List = <U extends {}>({items, onClick}: ListProps<U>) => { // no restrict
// export const List = <T extends {id:}>({items, onClick}: ListProps<T>) => { // restriction with object and must contain id
// export const List = <T extends string | number>({items, onClick}: ListProps<T>) => { // string or number
  return (
  <div>
      <h2>List of Items</h2>
      {items.map((item, idx) => {
          return(
              <div key={idx} onClick={() => onClick(item)} >
                  {item.toString()}
              </div>
          )
      })}
  </div>
  );
}
