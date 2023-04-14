import axios from "axios";

export default axios.create({
    baseURL:"https://shoppingkech.com/api",
    headers:{
        "comtent-type":"application/json"
    }
})