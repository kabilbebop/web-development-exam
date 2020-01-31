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
    // Question 1
    const user0 = this.state.users[0];
    let user0Component;

    const user1 = this.state.users[1];
    let user1Component;

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
    // Question 2
    console.log('clic!');
    const user0 = this.state.users[0];
    user0.age++;
    const user1 = this.state.users[1];
    user1.age++;

  }
}

