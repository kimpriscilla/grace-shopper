import React, { Component } from "react";
import { connect } from "react-redux";
import { addPet } from "../store/pets/pets";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

class AddDog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      gender: "",
      size: "",
      dateOfBirth: "",
      imageUrl: "",
      // breedId: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.addPet(this.state);
    this.setState({
      name: "",
      price: "",
      description: "",
      gender: "",
      size: "",
      dateOfBirth: "",
      imageUrl: "",
      // breedId: "",
    });
  }
  render() {
    const {
      name,
      price,
      description,
      gender,
      size,
      dateOfBirth,
      imageUrl,
      // breedId,
    } = this.state;
    const { onChange, onSubmit } = this;
    //console.log("INSIDE ADDDOGGGG---->", this.props.pets);
    return (
      <>
        <form onSubmit={onSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    value={name}
                    name="name"
                    onChange={onChange}
                    placeholder="name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={price}
                    name="price"
                    onChange={onChange}
                    placeholder="price"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={description}
                    name="description"
                    onChange={onChange}
                    placeholder="description"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={gender}
                    name="gender"
                    onChange={onChange}
                    placeholder="gender"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={size}
                    name="size"
                    onChange={onChange}
                    placeholder="size"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={dateOfBirth}
                    name="dateOfBirth"
                    onChange={onChange}
                    placeholder="date of birth"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    value={imageUrl}
                    name="imageUrl"
                    onChange={onChange}
                    placeholder="imageUrl"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    value={breedId}
                    name="breed"
                    onChange={onChange}
                    placeholder="breed"
                  >
                    <option value="">--------------</option>
                    {this.props.pets.map((dog) => {
                      console.log("___________>", dog.breed);
                      return (
                        <option value={dog.id} key={dog.id}>
                          {dog.breed.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <button type="submit" className="btn btn-theme">
              Add Dog
            </button>
          </p>
        </form>
      </>
    );
  }
}

const mapState = (state) => {
  return {
    pets: state.pet || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    addPet: (dog) => {
      dispatch(addPet(dog));
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(AddDog));