'use strict';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Question 1
    /// Votre réponse ci-dessous ///
    return (
        <div style={ {display: 'flex'} }>
            <div className="name" style={ {width: '130px'} }>{this.props.user.name}</div>
            <div className="city" style={ {width: '230px'} }>{this.props.user.city}</div>
            <div className="age"  style={ {width: '130px'} }>{this.props.user.age}</div>
        </div>
    );
  }
}

