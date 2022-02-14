import React from "react";
import { connect } from "react-redux";
import { deleteCart } from "../store/cart/cart";
import { Link } from "react-router-dom";

let tempUserId = 1;

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userId: props.authId,
      totalPrice: 0,
    };
  }

  render() {
    const cartItems = this.props.cartItems;
    const authId = this.props.authId ? this.props.authId : null;
    return (
      <div>
        <ul id="dogCards">
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <ul id="individualCards">
                <li>
                  <img src={cartItem.pet.imageUrl} />
                </li>
                <li>Name: {cartItem.pet.name} </li>
                <li>Price: ${cartItem.pet.price} </li>
                <li></li>
                <button
                  className="button-37"
                  role="button"
                  onClick={() =>
                    this.props.deleteCart(this.state.userId, cartItem.id)
                  }
                >
                  Remove
                </button>
              </ul>
            </li>
          ))}
        </ul>

        <Link to={`/checkout/${authId}`}>
          <button className="button-37" role="button">
            Check Out
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cartItems,
    authId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteCart: (userId, cartItemId) =>
      dispatch(deleteCart(userId, cartItemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
