import React from "react";
import Navigation from "./navigation";
import Head from "next/head";

export default function Container(props) {
  return (
    <div>
      <Head>
        <title>Next.Js Project</title>
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
}
