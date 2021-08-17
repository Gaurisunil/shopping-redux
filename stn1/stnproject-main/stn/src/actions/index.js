import callApi from "../api";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const GET_ALL_COLORS = "GET_ALL_COLORS";
export const GET_NUMBER_CART = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART";

export const actFetchProductsRequest = () => {
  const featured = [2, 5, 7, 12, 15, 16];
  console.log("call api 1");
  return (dispatch) => {
    return callApi("/products", "GET", null).then((res) => {
      console.log("call api 2");
      console.log(res.data);
      console.log(res.data.products);
      const words = [
        "spray",
        "limit",
        "elite",
        "exuberant",
        "destruction",
        "present",
      ];

      const result = words.filter((word) => word.length > 6);

      console.log(result);
      //   const result1 = featured.filter(res.data.products.id == 1);
      //   console.log(result1);
      dispatch(GetAllProduct(res.data.products));
    });
  };
};

// export const actFetchColorsRequest = () => {
//   console.log("call api 3");
//   return (dispatch) => {
//     return callApi("/colors", "GET", null).then((res) => {
//       console.log("call api 4");
//       console.log(res.data.colors);
//       dispatch(GetColorsProduct(res.data.colors));
//     });
//   };
// };

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
  return {
    type: "GET_ALL_PRODUCT",
    payload,
  };
}

// export function GetColorsProduct(payload) {
//   return {
//     type: "GET_ALL_COLORS",
//     payload,
//   };
// }
/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: "GET_NUMBER_CART",
  };
}

export function AddCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: "UPDATE_CART",
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
}
