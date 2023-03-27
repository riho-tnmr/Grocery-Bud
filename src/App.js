import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [error, setError] = useState({
    state: false,
    msg: ''
  });
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem('list');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget).get('item');
    if(data === ''){
      setError({state: true, msg: 'please enter a value'});
      setInterval(() => {
        setError({state: false, msg: ''});
      }, 2000)
      return;
    }
    setList([...list, data]);
    e.currentTarget.reset();
  }

  const handleDeleteAll = (e) => {
    e.preventDefault();
    setList([]);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  return <section className="section-center">
    {error.state ? <Alert error={error}/> : ''}
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g. egg' name='item'/>
          <input type="submit" className='submit-btn'/>
        </div>
      </form>
      <List list={list} setList={setList}/>
      {list.length > 0  ? <button className='clear-btn' onClick={(e) => {handleDeleteAll(e)}}>clear all items</button> : null}
  </section>
}
export default App
