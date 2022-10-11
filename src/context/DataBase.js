import axios from "axios";
const baseUrl = "http://localhost:8080/user"
const users = [];

users.list = async () => {
  const urlList = baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

export default users