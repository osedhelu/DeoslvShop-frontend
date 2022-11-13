import { ApiResponse } from "@/interface";
import useSWR, { SWRConfiguration } from "swr";

const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());
export const useProduct = (pathURL: string,config?: SWRConfiguration) => {
  const { data, error } = useSWR<ApiResponse>(
    `http://localhost:8000/v1${pathURL}`,
    fetcher,
    config
  );
  console.log(data)

  return {
    resp: data || {results: [], count: 0, next: "", previous: "" },
    isLoading: !error && !data,
    isError: error
  }
};
