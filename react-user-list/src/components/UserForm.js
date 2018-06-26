import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);

    const empty = {
      name: "",
      age: ""
    };

    this.state = props.user || empty;;

    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  isFormInvalid() {
    const errors = [];

    if (!this.state.name.trim()) {
      errors.push("Name is not specified.");
    }

    if (this.state.name.length > 100) {
      errors.push("Name is too long.");
    }

    if (!this.state.age.trim()) {
      errors.push("Age is not specified");
    }

    if (!this.state.age.length > 2) {
      errors.push("Age is too long.");
    }

    this.setState({errors});

    return errors.length;
  }

  onCancel(e) {
    if (e) 
      e.preventDefault();

    this.props.onCancel();
  }

  onUpdate(e) {
    if (e)
      e.preventDefault();

    if (this.isFormInvalid())
      return;

    const state = {...this.state};
    delete state.errors;

    this.props.onUpdate(state);
  }

  onAdd(e) {
    if (e)
      e.preventDefault();

    if (this.isFormInvalid())
      return;

    const state = {...this.state};
    delete state.errors;

    this.props.onAdd(state);
  }

  render() {     
    let okButton = (<button className="btn btn-primary" onClick={this.onAdd}>Add</button>);

    if (this.props.user) {
      okButton = (<button className="btn btn-primary" onClick={this.onUpdate}>Update</button>);
    } 

    let errors = null;

    if (this.state.errors && this.state.errors.length > 0) {
      errors = this.state.errors.map((error, index) => 
        <div className="alert alert-danger" key={index}>{error}</div>
      );
    }
          
    return (
      <div className="row">
        <div className="col-sm-offset-4 col-sm-4 ">
          
          {errors}

          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" 
                className="form-control" 
                id="name" 
                value={this.state.name} 
                onChange={(event) => {this.setState({name: event.target.value})}} 
                placeholder="Name"/>
            </div>

            <div className="form-group">
              <label htmlFor="day">Age</label>
              <input type="number" 
                className="form-control" 
                id="age" 
                value={this.state.age} 
                onChange={(event) => {this.setState({age: event.target.value})}} 
                placeholder="Age"/>
            </div>

            {okButton}
            <button className="btn btn-default" onClick={this.onCancel} style={{marginLeft: "15px"}}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;