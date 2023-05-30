import useSWR from "swr"
import fetcher from "@/app/libs/fatcher";

const useHome=(id:string)=>{
    const {data,error,isLoading,mutate}=useSWR(id?`http://localhost:5000/home/${id}`:null,fetcher)
    return {
        data,
        isLoading,
        error,
        mutate
    }
}
export default useHome;