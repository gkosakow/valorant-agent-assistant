import SignOut from './authentication/SignOut';
import { User } from './authentication/UserAuthentication';

function UserProfile() {
    const loggedInUser: User = JSON.parse(sessionStorage.loggedInUser);

    return (
        <div className='user-profile'>
            <div className="user-details">
                <img src={loggedInUser.picture} referrerPolicy='no-referrer'></img>
                <div>Welcome, {loggedInUser.firstName} 👋</div>
            </div>
            <div className='logout-button'>
                <SignOut />
            </div>
        </div>
    )
}

export default UserProfile;