import { notification } from "antd";

type NotificationType = "loginSuccess" | "loginError"

const notificationApi = () => {
  const nottify = (props: NotificationType) => {
    switch (props) {
      case "loginSuccess":
        return notification.success({ message: "Login succsesful" });
      case "loginError":
        return notification.error({
          message: "Login failed",
          description: "Invalid email or password. Please try again.",
        });
      default:
        break;
    }
  };
  return nottify;
};

export { notificationApi };
