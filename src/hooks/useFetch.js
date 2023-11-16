import axios from "axios"
import { useQuery } from "react-query"

const url = process.env.REACT_APP_API_URL
const key = process.env.REACT_APP_API_KEY

function getData({queryKey}) {
    const path = queryKey[1]
    return axios.get(`${url}/${path}`,{
        params:{
            api_key:key,
            language:"ru-RU"
        }
    })
}
function useFetch(fetchname,path) {
    const {data,isError,isLoading} = useQuery([fetchname,path],getData)

    return [data?.data?.results,isError,isLoading]
}
export default useFetch