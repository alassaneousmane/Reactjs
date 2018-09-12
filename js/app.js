     class Hello extends React.Component {
       render() {
        var styles = {color: this.props.color};
        return <h1><a href={this.props.link} style={styles}>{this.props.title}</a></h1>
       }
     }

     const HelloFactory = React.createFactory(Hello);

     class App extends React.Component {
       render() {
        return (
          <div>
            <Hello title="Google" link="https://google.com" color="hotpink" />
            <Hello title="Instagram" link="https://instagram.com" color="rgba(0, 0, 255, 0.3)"/>
            <Hello title="Twitter" link="https://twitter.com" color="#e5c6ba" />
          </div>
          )
       }
     }

      
     ReactDOM.render(<App />, document.querySelector('#root'));
