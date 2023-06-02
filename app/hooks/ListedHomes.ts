import useSWR from 'swr';
import fetcher from "@/app/libs/fatcher";
const useListedHomes = (id:string) => {
    const url=`${process.env.NEXT_PUBLIC_API_URL}/home/${id}/homes`;
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
      }
    }
export default useListedHomes;