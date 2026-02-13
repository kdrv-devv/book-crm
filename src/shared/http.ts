import axios from "axios"
import { store } from "../redux"
import { logOut } from "../redux/auth-slice"

export const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})


http.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

http.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const refreshToken = localStorage.getItem("refreshToken")

                const res = await axios.post(
                    "https://bookcrm.pythonanywhere.com/api/accounts/refresh/",
                    { refresh: refreshToken }
                )

                localStorage.setItem("accessToken", res.data.accessToken)

                originalRequest.headers.Authorization =
                    `Bearer ${res.data.accessToken}`

                return http(originalRequest)
            } catch (err) {
                store.dispatch(logOut())
                window.location.href = "/login"
            }
        }

        return Promise.reject(error)
    }
)
