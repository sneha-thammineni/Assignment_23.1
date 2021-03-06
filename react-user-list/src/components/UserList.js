import React, { Component } from 'react';

class UserList extends Component {

  render() {       
    const items = this.props.users.map(user =>
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>
          <button type="button" className="btn btn-default" onClick={this.props.onUserEdit.bind(null, user.id)}>
            <span className="glyphicon glyphicon-pencil"></span>
          </button>

          <button type="button" className="btn btn-default" onClick={this.props.onUserDelete.bind(null, user.id)}>
            <span className="glyphicon glyphicon-trash"></span>
          </button>
        </td>
      </tr>
    );

    return (
      <div style={{marginTop: "50px"}}>    
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;