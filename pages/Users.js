import Router from "next/router";
import { useState } from "react";

export default function Users({ users }) {
  const estado = (id) => {
    Router.push("/users/[id]", `/users/${id}`);
  };

  return (
    <div>
      {users.map((u) => (
        <fieldset key={u.id} onClick={() => estado(u.id)}>
          {`${u.first_name} ${u.last_name}`}
          <br />
          <small>{u.email}</small>
          <br />
          <div dir="rtl">
            <img src={u.avatar} alt="" />
          </div>
        </fieldset>
      ))}
    </div>
  );
}
