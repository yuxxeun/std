import BaseHead from "~/components/core/BaseHead";
import Foot from "~/components/widgets/Foot";

export default function Home() {
  return (
    <>
      <BaseHead />
      <div className="grid h-screen place-items-center text-4xl ">
        hello everyone
      </div>
      <Foot />
    </>
  );
}
