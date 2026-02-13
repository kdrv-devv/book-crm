import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../../useAxios";
import { useSignIn } from "react-auth-kit";
import { notificationApi } from "../../../../generics/notification";
import type { ApiResponseType, UserType } from "../../../../@types";


export const useLoginMutation = () => {
    const axios = useAxios()
    const signIn = useSignIn()
    const nottify = notificationApi()
    return useMutation<ApiResponseType<UserType>, any, { phone: string, password: string }>({
        mutationKey: ["login"],
        mutationFn: (data: { phone: string, password: string }) => axios({
            url: "/accounts/login",
            method: "POST",
            body: data
        }),
        onSuccess: (response) => {
            if (response.success) {
                const { access, refresh, user } = response.data
                signIn({
                    token: access,
                    refreshToken: refresh,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: user
                })
                localStorage.setItem("accessToken", access)
                localStorage.setItem("refreshToken", refresh)
                nottify("loginSuccess")
            }

        },
        onError: (error: any) => {
            console.log(error, "LOGIN ERROR")
            nottify("loginError")
        }
    })
}