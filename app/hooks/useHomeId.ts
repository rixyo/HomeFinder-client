import { useParams } from "next/navigation";
import { useMemo } from "react";

const useHomeId = () => {
    const params=useParams()
    const homeId = useMemo(() => {
        if(!params.homeId){
            return ""
        }
        if (params?.homeId) {
            return params.homeId as string
          
           
        }
    }, [params?.homeId])
   

    return useMemo(() => {
        return {
            homeId
          
        }
    }, [homeId]);
}
export default useHomeId;