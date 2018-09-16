class TaskList extends React.Component {
  render() {
    
    const tasks = [
    {
      id: 1,
      description: 'Go to bed',
      complete: true
    },
    {
      id: 2,
      description: 'record a tutorial',
      complete: false
    },
    {
      id: 3,
      description: 'Watch a movie',
      complete: false
    },
    
    ];

    return(
      <div>
      <h1>All tasks</h1>
      </div>
      )
  }

}


ReactDOM.render(<TaskList />, document.querySelector('#root'))