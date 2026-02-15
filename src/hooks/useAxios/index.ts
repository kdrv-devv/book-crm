import { http } from "../../shared/http";

interface PropTypes {
  url: string;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  body?: object;
  headers?: object;
  params?: object;
}

export const useAxios = () => {
  const response = (props: PropTypes) => {
    const { url, method = "GET", body, headers, params } = props;
    return http({
      url,
      method,
      data:body,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      params: {
        ...params,
      },
    }).then((data) => {
      return data.data
    });
  };
  
  return response;
};
