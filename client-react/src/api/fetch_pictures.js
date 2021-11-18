const BASE_URL = "http://localhost:4000";
//PICTURES
const PICTURES = `${BASE_URL}/picture`;

const getPictures = async () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const token = localStorage.getItem("token");
  const tokenParsed = token.replaceAll('"', "");
  //console.log(tokenParsed)
  //console.log('Bearer'+ ' ' + tokenParsed)

  headers.Authorization = `Bearer ${tokenParsed}`;

  const pictures = await fetch(PICTURES, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  const resPictures = await pictures.json();
  console.log(resPictures);
  return resPictures;
};

export default getPictures;
