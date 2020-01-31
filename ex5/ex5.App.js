'use strict';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: "John Snow", age: 25, city:"Memphis, Tennessee" },
        {name: "Jean Neige", age: 35, city:"Saint-Flour, Cantal"},
      ]
    };
  }

  render() {

    const user0 = this.state.users[0];
    const user0Component = <User key={user0.name} name={user0.name} age={user0.age} city={user0.city}></User>;

    const user1 = this.state.users[1];
    const user1Component = <User key={user1.name} name={user1.name} age={user1.age} city={user1.city}></User>;

    return (
      <section>
        <header style={ {display: 'flex', fontWeight: 'bold'} }>
            <div style={ {width: '130px'} }>Name</div>
            <div style={ {width: '230px'} }>City</div>
            <div style={ {width: '130px'} }>Age</div>
        </header>
        <section className="users">
          { user0Component }
          { user1Component }
        </section>
        <button onClick={ () => this.buttonClick() }>Add year</button>
      </section>
    );
  }

  buttonClick() {
    console.log('clic!');
    const user0 = this.state.users[0];
    user0.age++;
    const user1 = this.state.users[1];
    user1.age++;
    this.setState({ users: [user0, user1]});
  }
}

