import { request } from "network/request.js";


export const getMultidata =  function () {
   return request({
        url: "/home/multidata"
    }); 
} 


export const getHomedata = function(type,page){
    return request({
        url:"home/data",
        params:{
            type,
            page
        }
    })
}