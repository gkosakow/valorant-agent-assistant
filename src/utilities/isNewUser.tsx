// checks if Firebase user is new by comparing their account creation time to their last sign in time
export const isNewUser = (user: any) => {
    if (user.metadata.lastLoginAt - user.metadata.createdAt < 5) {
        // This is a new user, show welcome modal.
        console.log(`${user.email} is a NEW USER`);
        return true;
    } else {
        // This is an existing user.
        console.log(`${user.email} is an EXISTING USER`);
        return false;
    }
}