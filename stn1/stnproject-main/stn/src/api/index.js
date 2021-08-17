import axios from "axios";
//mock API
let API_URL =
  "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest";
export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method,
    url: `${API_URL}${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
