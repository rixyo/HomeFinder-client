import useSWR from 'swr';
import fetcher from "@/app/libs/fatcher";

const useHomes = () => {
    const url=`${process.env.NEXT_PUBLIC_API_URL}/home`;
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
      }
    };
export default useHomes;

