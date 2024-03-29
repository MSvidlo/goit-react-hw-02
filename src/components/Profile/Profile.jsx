
import css from './Profile.module.css';
const Profile = (props) => {
    return (<div className={css.profile}>
        <div>
            <img className={css.image}
                src={props.image}
                alt="User avatar"
            />
            <p className={css.name}>{props.name}</p>
            <p className={css.nickname}>@{props.tag}</p>
            <p className={css.location}>{props.location}</p>
        </div>

        <ul className={css.profileInfoList}>
            <li className={css.profileListItem}>
                <span>Followers</span>
                <span>{props.stats.followers}</span>
            </li>
            <li className={css.profileListItem}>
                <span>Views</span>
                <span>{props.stats.views}</span>
            </li>
            <li className={css.profileListItem}>
                <span>Likes</span>
                <span>{props.stats.likes}</span>
            </li>
        </ul>
    </div>
    )
};

export default Profile;