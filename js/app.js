class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
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
        }
    ]
  
  };
}

  render() {  
    return(
      <div>
        <h1>All tasks</h1>
          {this.state.tasks.map((task, index) => {
            // task va valoir chaque objet litteral
            // map(task, index) => on récupère l"élément et son index : index 0, index 1, index 2
            return (
              <article key={index}>
                <h1>
                  #{task.id} - {task.description} 
                  { task.complete ? ' ✅ ' : ' ❌' }
                  </h1>
              </article>
              )
          })}
      </div>
      )
  }

}


ReactDOM.render(<TaskList />, document.querySelector('#root'))