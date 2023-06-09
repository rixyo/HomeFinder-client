import useSWR from 'swr';
import fetcher from "@/app/libs/fatcher";

const useCurrentUser = () => {

    const url=`${process.env.NEXT_PUBLIC_API_URL}/auth/me`;
 
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useCurrentUser;