import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Calendar from "./_components/Calendar";
import "../styles/Calendar.css"
import Header from "./_components/Header";
export default async function Home() {

  return (
    <div> 
    <Header />
      <main><Calendar /> </main>
  </div>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
