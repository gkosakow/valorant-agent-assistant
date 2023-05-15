import LogRocket from "logrocket";
import { User } from "../components/authentication/UserAuthentication"

export const identifyLogRocketUser = (user: User) => {
    let fullName: string = `${user.firstName} ${user.lastName}`;
    LogRocket.identify(user.id, {
        name: fullName,
        email: user.email,

        // Add your own custom user variables here, ie:
        subscriptionType: 'pro'
    });
}