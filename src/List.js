import Item from "./Item";

const List = ({ list, setList }) => {
  return <div className='grocery-container'>
    <div className="grocery-list">
      {list.map((item, i) => {
        return <Item item={item} list={list} setList={setList} key={i} index={i}/>
      })}
    </div>
  </div>
}

export default List
