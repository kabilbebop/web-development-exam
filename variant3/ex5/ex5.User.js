'use strict';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Question 1
    const {name, city, year} = this.props.userData;
    return (
        <div style={ {display: 'flex'} }>
            <div className="name" style={ {width: '130px'} }>{name}</div>
            <div className="city" style={ {width: '230px'} }>{year}</div>
            <div className="age"  style={ {width: '130px'} }>{city}</div>
            <button onClick={() => this.props.addYear() }>Add year</button>
        </div>
    );
  }
}

