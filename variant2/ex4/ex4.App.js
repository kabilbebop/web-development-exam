'use strict';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
          { name: 'Jean Neige', age: '20', city: 'Saint-Flour' },
          { name: 'Matheus Fernandes', age: '22', city: 'Rio de Janeiro'  },
          { name: 'Seif Koury', age: '29', city: 'Ouarzazate'  },
          { name: 'Mebrahtu Luwam', age: '32', city: 'Asmara'  },
      ]
    };
  }

  render() {
    // Question 1 : modifier la déclaration de userComponents
    const userComponents = null;  /// Votre réponse ici ///

    return (
      <section>
        <header style={ {display: 'flex', fontWeight: 'bold'} }>
            <div style={ {width: '130px'} }>Name</div>
            <div style={ {width: '230px'} }>City</div>
            <div style={ {width: '130px'} }>Age</div>
        </header>
        <section className="users">
          { userComponents }
        </section>
      </section>
    );
  }
}

