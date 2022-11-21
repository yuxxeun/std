import { SITE } from "~/components/config";

export default function BaseHead() {
  return (
    <>
      <title>{SITE.name}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="std coming for awwwards." />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
