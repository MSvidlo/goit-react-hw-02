
import './App.css';
import React from 'react';
import  Profile from './Components/Profile/Profile'
import userData from './userData.json';
import friends from "./friends.json";
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <>
      <TransactionHistory items={transactions} />
    </>
    </>
    
  );
};


export default App
