import React from "react";
import fetch from "isomorphic-fetch";
import Container from "../../components/Container";

// import { useRouter } from "next/router";

export default function Profile({ user }) {
  if (user === undefined)
    return <fieldset>No es posible encotrar este usuario</fieldset>;

  return (
    <Container>
      <fieldset>
        <img src={user.avatar} />
        <p>
          {user.first_name} {user.last_name}
        </p>
        <address>{user.email}</address>
      </fieldset>
    </Container>
  );
}

Profile.getInitialProps = async (ctx) => {
  console.log(ctx.asPath);
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const json = await res.json();
  return { user: json.data };
};
