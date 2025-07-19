import SongCreationInterface from "@/components/song-creation-interface";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className="flex h-screen items-center justify-center gap-10 px-4">
      <section className="flex max-h-full min-h-[284px] w-full max-w-[900px] flex-col items-center justify-center gap-8">
        <SongCreationInterface />
      </section>
    </main>
  );
};

export default Home;
