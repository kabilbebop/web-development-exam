'use strict';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, age, city} = this.props;
    return (
        <div style={ {display: 'flex'} }>
            <div className="name" style={ {width: '130px'} }>{name}</div>
            <div className="city" style={ {width: '230px'} }>{age}</div>
            <div className="age"  style={ {width: '130px'} }>{city}</div>
        </div>
    );
  }
}

