import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ name, isOnline, avatar }) => {
    return (<div className={css.container}>
        <img className={css.img} src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
         <p className={clsx(css.status, !isOnline ? css.offline : '')}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>)
};
export default FriendListItem;