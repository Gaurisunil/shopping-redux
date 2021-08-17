import React, { Component } from "react";
import { actFetchColorsRequest, AddCart } from "../actions";
import { connect } from "react-redux";
export class Colors extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actFetchColorsRequest();
  }

  render() {
    const { _colors } = this.props._colors;
    if (_colors.length > 0) {
      return (
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-12">
            <div className="row">
              {_colors.map((item, index) => (
                <div className="col-md-6 col-lg-3 mb-5">
                  <div className="">
                    <img className="img-fluid w-100" src={item.image} />
                    <div className="mask rgba-black-slight"></div>
                    <h5 className="truncate-overflow">{item.name}</h5>
                    <h6>
                      {item.price}${" "}
                      <span
                        className="badge badge-primary"
                        style={{ cursor: "pointer", float: "right" }}
                        onClick={() => this.props.AddCart(item)}
                      >
                        Add Cart
                      </span>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _colors: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchColorsRequest: () => dispatch(actFetchColorsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Colors);
