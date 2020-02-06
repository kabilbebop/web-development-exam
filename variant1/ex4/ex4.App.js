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
    const user1 = this.state.users[1];

    // Question 1 : modifier la déclaration de <button>
    const button = <button onClick={() => {
      this.setState({
          users: this.state.users.map(user => { 
            return {...user, age: user.age + 1 }; 
          })
        })
    }}>Add year</button>;  /// Votre réponse ici ///

    return (
      <section>
        <header style={ {display: 'flex', fontWeight: 'bold'} }>
            <div style={ {width: '130px'} }>Name</div>
            <div style={ {width: '230px'} }>City</div>
            <div style={ {width: '130px'} }>Age</div>
        </header>
        <section className="users">
          <UserComponent name={user0.name} age={user0.age} city={user0.city} />
          <UserComponent name={user1.name} age={user1.age} city={user1.city} />
        </section>
        { button }
      </section>
    );
  }
}

