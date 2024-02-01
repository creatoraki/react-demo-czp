import { useState } from 'react';
import './index.css';
import Card from './components/Card'
import Todo from './components/Todo';
import {message} from 'antd'

interface TodoItem {
  id: string;
  text: string;
  checked: boolean;
}

const Home = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([
    { id: '1', text: 'Review latest feature branch code submissions.', checked: true },
    { id: '2', text: 'Update project documentation with recent changes.', checked: false },
    { id: '3', text: 'Conduct unit testing for new authentication module.', checked: false },
    { id: '4', text: 'Refactor the user interface for better responsiveness.', checked: false },
    { id: '5', text: 'Schedule a team meeting to discuss milestones.', checked: false },
  ]);

  const handleCheck = (id: string) => {
    const copy = [...todoList]
    const current = copy.find((item: TodoItem) => {
      return item.id === id
    })
    if (current) {
      current.checked = !current.checked
    }
    setTodoList(copy)
  }

  const addTodo = (inputValue: string) => {
    const copy = [...todoList]
    copy.push({ id: inputValue + Math.random(), text: inputValue, checked: false })
    setTodoList(copy)
    message.success('add success')
  }

  const clearComplated = ()=>{
    setTodoList(todoList.filter((item: TodoItem) => !item.checked))
  }

  const allActiveComplated = ()=>{
    setTodoList(todoList.map((item=>{return {...item,checked:true}})))
  }

  const uncheckedCount = todoList.filter((item: TodoItem) => !item.checked).length;

  return (
    <div className="home-container">
      <div className="top-section">
        <p className="top-text">
          TODO
        </p>
      </div>
      <div className="bottom-section">
        <p className="bottom-text">
          Chollenge by <span className="clicked">Frontend Mentor</span>
        </p>
        <p className="bottom-text">
          Coded by <span className="clicked">czp</span>
        </p>
      </div>
      <div className='todo'>
        <Card className='top-card'>
          <Todo id='0' isEditing={true} onEnter={addTodo}></Todo>
        </Card>
        <Card className='bottom-card'>
          <div className='scroller'>
            {
              todoList.map((item: TodoItem) => {
                return <Todo id={item.id} text={item.text} checked={item.checked} key={item.id} onClick={handleCheck}></Todo>
              })
            }
          </div>
          <div className='bottom-btn'>
            <span className='todo-count'>{uncheckedCount} Items left</span>
            <span className='text-item' onClick={allActiveComplated}><b>All</b> active complated</span>
            <span className='text-item' onClick={clearComplated}>Clear complated</span>
          </div>
        </Card>
      </div>
      <div className='float-btn'>
        <div>Open</div>
        <div>Sandbox</div>
      </div>
    </div>
  );
}

export default Home;