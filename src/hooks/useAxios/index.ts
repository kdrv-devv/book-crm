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
      data: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Accsess-Control-Allow-Origin": true,
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
