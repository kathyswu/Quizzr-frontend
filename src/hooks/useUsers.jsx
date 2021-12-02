import { useState, useEffect } from "react";

import UserModel from "../models/user";

import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";

export default function useUsers(id) {
  const [user, setUser] = useRecoilState(userState);

  useEffect(
    function () {
      fetchUsers();
    },
    [id]
  );

  const fetchUsers = () => {
    UserModel.showOne(id).then((json) => {
      setUser(json.user);
    });
  };

  return [user, fetchUsers];
}
