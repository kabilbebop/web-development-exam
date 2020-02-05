'use strict';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Question 1
    /// Votre réponse ici ///
    return (
        <div style={ {display: 'flex'} }>
            <div className="name" style={ {width: '130px'} }></div>
            <div className="city" style={ {width: '230px'} }></div>
            <div className="age"  style={ {width: '130px'} }></div>
        </div>
    );
  }
}

