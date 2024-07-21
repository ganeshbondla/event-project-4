export const apiEndPoint = () => {
  const Url = "http://localhost:3048/api/v1/";
  return Url;
};

const serviceUrl = apiEndPoint();

export const AuthCheck = () => {
  const token = localStorage.getItem("userAuthToken");
  if (token === undefined || token === null) {
    localStorage.removeItem("userAuthToken");
    return false;
  } else {
    const endpoint = serviceUrl + "user/auth/check";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        header_key: token,
      },
    };
    fetch(endpoint, options)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return false;
        }
      })
      .then((data) => {
        if (data.success !== true) {
          alert(data.message);
          return false;
        } else {
          return data;
        }
      });
  }
};
