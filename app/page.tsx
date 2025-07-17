import SearchBox from "@/components/search-box";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className="flex h-screen items-center justify-center gap-10 px-4">
      <section className="flex min-h-[284px] w-full max-w-[900px] flex-col items-center justify-center gap-8">
        <header className="text-title-4 font-normal">
          What song to create?
        </header>
        <SearchBox />
      </section>
    </main>
  );
};

export default Home;
