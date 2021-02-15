import axios from 'axios';

export const customService = {
    getCarousel,
    getFeatured           
};

let BASE_API_URL= "http://demo3136867.mockable.io"
function getCarousel(){   
    return axios.get(`${BASE_API_URL}/carousel`).then((response)=>{    
      return response.data;
    }).catch((err)=>{
       console.log(err);
    })
}

function getFeatured( payload:any){       
    return axios.get(`${BASE_API_URL}/featured`).then((response)=>{    
       return response.data;
    }).catch((err)=>{
       console.log(err);
    })
}

