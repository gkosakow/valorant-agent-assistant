// checks if Firebase user is new by comparing their account creation time to their last sign in time
export const isNewUser = (user: any) => {
    if (user.metadata.lastLoginAt - user.metadata.createdAt < 5) {
        // This is a new user, show welcome modal.
        console.log("NEW USER");
        console.log(user);

        return true;
    } else {
        // This is an existing user.
        console.log("EXISTING USER");
        console.log(user);

        return false;
    }
}