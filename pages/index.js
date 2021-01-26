import Container from "../components/Container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Users from "./Users";

function Index({ users }) {
  return (
    <Container>
      <Head>
        <title>Next.js Home</title>
      </Head>
      <h1>LISTA</h1>
      <div>
        <Users users={users} />
      </div>
    </Container>
  );
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const json = await res.json();
  return { users: json.data };
};

export default Index;
