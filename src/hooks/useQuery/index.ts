
import { useAxios } from "../useAxios";
import { useQuery } from '@tanstack/react-query'

interface UserQueryType {
  pathname: string;
  url: string;
  params?: object;
}

const useQueryHandler = ({ pathname, url, params }: UserQueryType) => {
  const axios = useAxios();
  return useQuery({
    queryKey:[pathname],
    queryFn: () => axios({ url, params }).then((data) => data),
  });
};

export { useQueryHandler };
