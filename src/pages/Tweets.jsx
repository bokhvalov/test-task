import React, { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard/UserCard";
import { Button } from "../components/Button/Button";
import usersData from "../users.json";
import { Link } from "react-router-dom";

const Tweets = () => {
  const [subscriptions, setSubscriptions] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("showAll");

  useEffect(() => {
    setSubscriptions(JSON.parse(localStorage.getItem("subscriptions")));
  }, []);

  useEffect(() => {
    subscriptions &&
      localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  const handleFollowing = (id) => {
    for (const user of usersData) {
      if (user.id === id) {
        if (subscriptions?.includes(id)) {
          const filteredSubscriptions = subscriptions.filter(
            (item) => item !== id
          );
          setSubscriptions(filteredSubscriptions);
          break;
        }
        setSubscriptions(subscriptions ? [id, ...subscriptions] : [id]);
        break;
      }
    }
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const usersToDisplay = usersData.slice(0, currentPage * 9);

  let filteredUsers = usersToDisplay;
  if (filter === "follow") {
    filteredUsers = usersToDisplay.filter(
      (user) => !subscriptions?.includes(user.id)
    );
  } else if (filter === "followings") {
    filteredUsers = usersToDisplay.filter((user) =>
      subscriptions?.includes(user.id)
    );
  }

  return (
    <div className="App">
      <Link to="/">Back</Link>
      <div className="filterContainer">
        <select value={filter} onChange={handleFilterChange}>
          <option value="showAll">Show All</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </select>
      </div>
      <div className="cardContainer">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            data={user}
            isFollowing={subscriptions?.includes(user.id)}
            btnHandler={handleFollowing}
          />
        ))}
      </div>
      {usersData.length > usersToDisplay.length && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </div>
  );
};

export default Tweets;
