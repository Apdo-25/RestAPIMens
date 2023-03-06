'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      name: '',
      id: '',
      detials: '',
      price: ''
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // get all entities - GET

  }

  create(e) {
    // add entity - POST
    e.preventDefault();

  }

  update(e) {
    // update entity - PUT
    e.preventDefault();

  }

  delete(e) {
    // delete entity - DELETE
    e.preventDefault();

  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">REST API Car</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Car</legend>
                <label htmlFor="name">
                  Car Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="details">
                  Car Details:
                  <input
                    name="details"
                    id="details"
                    type="text"
                    className="form-control"
                    value={this.state.notes}
                    onChange={(e) => this.handleChange({ details: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="price">
                  Car Price:
                  <input
                    name="price"
                    id="price"
                    type="number"
                    className="form-control"
                    value={this.state.notes}
                    onChange={(e) => this.handleChange({ price: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="id">
                  Car ID:
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add
                </button>
                <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                    Update
                </button>
                <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                    Delete
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

let domContainer = document.querySelector('#App');
ReactDOM.render(<App />, domContainer);