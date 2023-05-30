import useSWR from 'swr';
import fetcher from "@/app/libs/fatcher";
import userRole from '../libs/userRole';

const useCurrentUser = () => {
    const role = userRole()
 
    const url="http://localhost:5000/auth/me";
 
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useCurrentUser;