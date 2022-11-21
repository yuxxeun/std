import React from "react";
import BaseHead from "~/components/core/BaseHead";
import Foot from "~/components/widgets/Foot";
import Card from "~/components/widgets/Card";

export default function Home() {
  return (
    <>
      <BaseHead />
      <div className="grid h-screen place-items-center text-4xl ">
        hello everyone
        <Card />
      </div>
      <Foot />
    </>
  );
}
