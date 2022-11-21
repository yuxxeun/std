import { supabase } from "~/components/utils/supaClient";

interface dataCard {
  title: String;
  id: Number;
}

async function getData(): Promise<dataCard> {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const res = await fetch(url, { next: { revalidate: 5 } });

  if (!res.ok) {
    throw new Error("error while fetching data...");
  }
  console.log(res);
  return res.json();
}

export default async function Card(): Promise<JSX.Element> {
  const data = await getData();
  return (
    <>
      {console.log(data)}
      {data.id} - {data.title}
    </>
  );
}
