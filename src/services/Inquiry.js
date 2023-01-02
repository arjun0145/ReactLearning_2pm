import axios from 'axios';


export function GetData () 
{
    return axios.get("http://localhost:9200/getdata")
    
}