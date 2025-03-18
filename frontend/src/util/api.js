import axios from "axios"

export const request = (url="",method="get",data={}) => {
    let headers = {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
    }

    return axios ({
        url : "http://127.0.0.1:8000/api/"+url,
        method : method,
        data : data,
        headers : headers
    }).then(res=>{
       return res.data
    }).catch(error=>{
        console.log("error-log",error)
    }).finally(final=> {
        
    })
}