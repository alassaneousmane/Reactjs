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
          description: 'Record a tutorial',
          complete: false
        },
        {
          id: 3,
          description: 'Watch a movie',
          complete: false
        },
        {
          id: 4,
          description: 'Oceana Workspaces and Channels',
          complete: true
        },
        {
          id: 5,
          description: 'Complete Lab Oceana',
          complete: false
        },
        {
          id: 6,
          description: 'Migrate Oceana 3.4.0.1 ==> Oceana 3.5',
          complete: false
        },
         {
          id: 7,
          description: 'Larabel Training',
          complete: false
        },
         {
          id: 8,
          description: 'ReactJs and ReactNative Traing',
          complete: false
        },
        {
          id: 9,
          description: 'Personal Development 1',
          complete: false
        },
        {
          id: 10,
          description: 'Personal Development 2',
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
                <h3>
                  #{task.id} - {task.description} 
                  { task.complete ? ' ✅ ' : ' ❌' }
                  </h3>
              </article>
              )
          })}
      </div>
      )
  }

}


ReactDOM.render(<TaskList />, document.querySelector('#root'))