import React from 'react'

const CompleteToDo = ({count}) => {
  console.log(count);
  return (
    <div className="complete_task">
      <h2>Complete Your Todo</h2>
      <div>
        <h3>My Complete Task</h3>
        <p>{count}</p>
      </div>
    </div>
  )
}

export default CompleteToDo
