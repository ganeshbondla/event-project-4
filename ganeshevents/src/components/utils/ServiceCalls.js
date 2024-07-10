import { apiEndPoint } from "./ApiService";
const serviceUrl = apiEndPoint();

const apiResponse = (
  success,
  apiStatus,
  apiMsg,
  statusCode,
  statusMsg,
  results
) => {
  const responseObject = {
    success,
    apiStatus,
    apiMsg,
    statusCode,
    statusMsg,
    results,
  };
  return responseObject;
};

export const ListOfEvents = async () => {
  const endpoint = serviceUrl + "event/list";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch(endpoint, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        apiResponse(false, null, null, res.status, res.statusText, null);
      }
    })
    .then((data) => {
      apiResponse(true, data.success, data.message, 200, "OK", data.results);
    });
};
