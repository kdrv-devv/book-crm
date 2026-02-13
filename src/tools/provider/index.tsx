import type { FC } from "react"
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store as ReduxStore } from "../../redux";
import { AuthProvider } from "react-auth-kit";


interface PropsTypes {
    children: React.ReactNode
}

const ProviderConfig: FC<PropsTypes> = ({ children }) => {
    const client = new QueryClient()
    return (
        <>
            <AuthProvider
                authType="cookie"
                authName="_auth"
                cookieDomain={window.location.hostname}
                cookieSecure={window.location.protocol === "https:"}

            >
                <Provider store={ReduxStore}>
                    <QueryClientProvider client={client}>
                        <ConfigProvider>
                            {children}
                        </ConfigProvider>
                    </QueryClientProvider>
                </Provider>
            </AuthProvider>
        </>
    )
}

export default ProviderConfig