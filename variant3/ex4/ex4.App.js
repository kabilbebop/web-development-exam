'use strict';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    const users = [
      {name: "John Snow", year: 2003, city:"Memphis, Tennessee" },
      {name: "Jean Neige", year: 1999, city:"Saint-Flour, Cantal"},
      { name: 'Matheus Fernandes', year: 1981, city: 'Rio de Janeiro'  },
    ];
    this.state = {
      users,
      youngest: this.computeYoungest(users)
    };
  }

  render() {
    // Question 1 & 2 : votre réponse ci-dessous
    const user0 = this.state.users[0];
    let user0Component = <UserComponent userData={user0}></UserComponent>;

    const user1 = this.state.users[1];
    let user1Component = <UserComponent userData={user1}></UserComponent>;
    
    const user2 = this.state.users[2];
    let user2Component = <UserComponent userData={user2}></UserComponent>;

    return (
      <section>
        <header style={ {display: 'flex', fontWeight: 'bold'} }>
            <div style={ {width: '130px'} }>Name</div>
            <div style={ {width: '230px'} }>City</div>
            <div style={ {width: '130px'} }>Year of birth</div>
        </header>
        <section className="users">
          { user0Component }
          { user1Component }
          { user2Component }
        </section>
        <div>Youngest user: { this.state.youngest.name }</div>
      </section>
    );
  }

  computeYoungest(users) {
    return users.reduce((prev, cur) => cur.year > prev.year ? cur : prev);
  }
}

