import Axios from "axios";
import AppConstants from "../../src/utility/AppConstants";

let countriesFromApi = [];

Axios({
  url: `${AppConstants.countryApi.endpoint}`,
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => {
    countriesFromApi = response.data.map((country) => {
      return {
        name: country.name,
        flag: country.flag,
        callingCodes: country.callingCodes,
      };
    });
  })
  .catch((error) => console.log(error));

export { countriesFromApi };
