import axios from "axios";


const createDate = (url,obj) => {
   return axios.post(url,obj)
}
export default createDate