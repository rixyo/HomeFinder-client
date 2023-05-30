import useSWR from 'swr';
import fetcher from "@/app/libs/fatcher";

const useHomes = () => {
    const url="http://localhost:5000/home";
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
      }
    };
export default useHomes;

