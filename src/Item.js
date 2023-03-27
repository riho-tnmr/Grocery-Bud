import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Item = ({ item, list, setList, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item);

    const handleDelete = (e, item) => {
      e.preventDefault();
      const newList = list.filter((listItem, i) => i != index);
      setList(newList);
    }
  
    const handleEditing = (e) => {
      e.preventDefault();
      setIsEditing(true);
    }

    const submitEditing = (e) => {
        e.preventDefault();
        setIsEditing(false);
        const newList = list.map((listItem, i) => i === index ? editText : listItem);
        setList(newList);
    }

    if(isEditing){
        return <form className='form-control' onSubmit={(e) => submitEditing(e)}>
            <input type="text"
                    className='grocery grocery--edit'
                    name='editText'
                    value={editText} 
                    onChange={(e) => {setEditText(e.target.value)}}/>
            <input type="submit" value='edit' className='submit-btn--edit'/>
        </form>
    }else{
        return <article className='grocery-item' >
        <p className="title">{item}</p>
        <div className="btn-container">
            <button className='edit-btn' onClick={(e) => {handleEditing(e)}}><FaEdit/></button>
            <button className='delete-btn' onClick={(e) => {handleDelete(e, item)}}><FaTrash/></button>
        </div>
    </article>
    }
}
export default Item;