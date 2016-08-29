import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      lat: props.lat,
      lng: props.lng,
      description: "",
      seating: 2
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createBench({bench: this.state});
    this.props.router.push('/');
  }

  render() {
    return (
        <div className="new-bench-container">
          <div className="new-bench-form">
            <h3 className="new-bench-title">Create A Bench!</h3>

            <form onSubmit={this.handleSubmit}>
              <label className="bench-field">Description</label>
              <input type="text"
                     value={this.state.description}
                     onChange={this.update("description")}
                     className="bench-field"/>

              <label className="bench-field">Number of Seats</label>
              <input min='0'
                     type="number"
                     value={this.state.seating}
                     onChange={this.update("seating")}
                     className="bench-field"/>

              <label className="bench-field">Latitude</label>
              <input type="text"
                     disabled
                     value={this.state.lat}
                     className="bench-field"/>

              <label className="bench-field">Longitude</label>
              <input type="text"
                     disabled
                     value={this.state.lng}
                     className="bench-field"/>

              <input type="submit"
                     value="Create Bench"
                     className="new-bench-button"/>
            </form>
          </div>
        </div>
    );
  }
}

export default withRouter(BenchForm);
