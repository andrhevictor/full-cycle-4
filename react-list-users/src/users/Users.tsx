import React, { useState, useEffect } from "react";
import { AppContainer, SmallLink } from "../Global.style";
import {
  Anchor,
  Header,
  Table,
  TableRow,
  TableHead,
  TableHeader,
  TableBody,
  TableData,
} from "./User.style";
import { Api } from "../Api";
import { AxiosResponse } from "axios";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users = () => {
  const [page, setPage] = useState(1);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    Api.get(`/users/?page=${page}`).then((response: AxiosResponse) => {
      setUsersList(response.data?.data);
    });
  }, [page]);

  return (
    <AppContainer>
      <SmallLink to="/">Get back to home</SmallLink>
      <Header>Users</Header>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>E-mail</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Avatar</TableHeader>
          </TableRow>
        </TableHead>

        <TableBody>
          {usersList.map((user: User) => {
            return (
              <TableRow key={user.id}>
                <TableData>{user.id}</TableData>
                <TableData>{user.email}</TableData>
                <TableData>{`${user.first_name} ${user.last_name}`}</TableData>
                <TableData>
                  <Anchor href={user.avatar} target="blank">
                    Open
                  </Anchor>
                </TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Anchor onClick={() => setPage(page + 1)}>Next page</Anchor>
    </AppContainer>
  );
};

export default Users;
