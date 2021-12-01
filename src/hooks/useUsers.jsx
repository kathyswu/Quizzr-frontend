import { useState, useEffect } from "react";

import UserModel from "../models/user";

export default function useUsers(id) {
  const [user, setUser] = useState([]);

  useEffect(
    function() {
    fetchUsers();
    },
    [id]
  );

  const fetchUsers = () => {
    UserModel.showOne(id).then(json => {
      setUser(json.user);
    });
  };

  return [user, fetchUsers];
}