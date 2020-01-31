'use strict';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={ {display: 'flex'} }>
            <div className="name" style={ {width: '130px'} }>{ this.props.name }</div>
            <div className="city" style={ {width: '230px'} }>{ this.props.city }</div>
            <div className="age"  style={ {width: '130px'} }>{ this.props.age }</div>
        </div>
    );
  }
}

