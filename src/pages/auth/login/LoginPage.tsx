import { Button, Card, Form, Input } from 'antd'
import { BiBookOpen } from 'react-icons/bi'
import { useLoginMutation } from '../../../hooks/useQuery/useQueryAction/auth'

interface LoginFormType {
    phone: string
    password: string
}

export function LoginPage() {
    
    const { mutate: loginMutate, isPending } = useLoginMutation()

    const onLogin = (loginData: LoginFormType) => {
        let { phone, password } = loginData
        loginMutate({ phone: `+998${phone}`, password })
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Visual content area */}
                    <div className="hidden lg:flex flex-col items-center justify-center">
                        <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center overflow-hidden relative">
                            {/* Placeholder for GIF - You can replace this with an actual GIF */}
                            <div className="flex flex-col items-center justify-center gap-4">
                                <img src="./login-page.gif" alt="" />
                            </div>
                        </div>
                        <p className="mt-6 text-center text-muted-foreground text-sm">
                            Manage your book collection efficiently and beautifully
                        </p>
                    </div>

                    {/* Right side - Login form */}
                    <div className="flex  flex-col justify-center ">
                        <div className="flex lg:hidden items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                <BiBookOpen className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
                            </div>
                            <h1 className="text-2xl font-bold text-primary">Menga Book</h1>
                        </div>

                        <div className="space-y-2 mb-8">
                            <h1 className="text-4xl font-bold text-foreground">Welcome <span className='text-emerald-500'>Back</span></h1>
                            <p className="text-lg text-muted-foreground">
                                Sign in to manage your book collection
                            </p>
                        </div>

                        <Card className="p-8    !border-2 !border-[#00a640] shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Form
                                layout="vertical"
                                onFinish={onLogin}
                                autoComplete="off"
                                className='!w-full !mx-auto'
                            >

                                <div className=' flex flex-col gap-1'>
                                    <Form.Item
                                        className="!w-full"
                                        label={<span className="text-sm text-emerald-500 font-medium">Phone Number</span>}
                                        name="phone"
                                        rules={[
                                            { required: true, message: "Please enter your phone number!" },
                                            {
                                                pattern: /^\d{9}$/,
                                                message: "9 ta raqam kiriting",
                                            },
                                        ]}
                                    >
                                        <Input
                                            addonBefore="+998"
                                            maxLength={9}
                                            type="tel"
                                            placeholder="90 123 45 67"


                                        />
                                    </Form.Item>



                                    <Form.Item
                                        className="!w-full"
                                        label={<span className="text-sm text-emerald-500 font-medium">Password</span>}
                                        name="password"
                                        rules={[{ required: true, message: "Please enter your password!" }]}
                                    >
                                        <Input.Password
                                            placeholder="Enter your password"

                                        />
                                    </Form.Item>


                                </div>

                                {/* Submit button */}
                                <Button
                                    disabled={isPending}
                                    htmlType="submit"
                                    className="
    w-full 
    !p-5 
    !h-10
    !rounded-lg 
    !font-semibold 
    !text-white
    !bg-gradient-to-r 
    !from-emerald-500 
    !to-green-600
    hover:!from-emerald-600 
    hover:!to-green-700
    active:!scale-[0.98]
    !border-none
    !shadow-md
    hover:!shadow-lg
    !transition-all
    !duration-300
  "
                                >
                                    {isPending ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Signing in...
                                        </div>
                                    ) : (
                                        "Sign In"
                                    )}
                                </Button>


                            </Form>

                            {/* Sign up link */}
                            <p className="text-center mt-6 text-muted-foreground">
                                Don't have an account?{' '}
                                <a href="#" className="font-bold text-primary hover:text-primary/80 transition-colors">
                                    Sign up
                                </a>
                            </p>
                        </Card>

                        {/* Footer info */}
                        <div className="mt-8 pt-6 border-t border-green-100">
                            <p className="text-center text-xs text-muted-foreground">
                                By signing in, you agree to our{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Terms of Service
                                </a>
                                {' '}and{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
