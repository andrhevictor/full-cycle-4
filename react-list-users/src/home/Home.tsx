import React from "react";

import { NavBox, ListItem, List } from "./Home.style";
import { Link } from "../Global.style";

const Home = () => {
  return (
    <NavBox>
      <List>
        <ListItem>
          <Link to="/users">Users</Link>
        </ListItem>
      </List>
    </NavBox>
  );
};

export default Home;
