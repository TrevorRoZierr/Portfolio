import HomePage from "./components/HomePage";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <HomePage />
      <Skills />
      <div className="text-center">
        <h1 className="lg:text-5xl text-4xl uppercase font-unbounded mb-3">
          Projects
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 p-6">
          <Project
            image="/reddit.png"
            link="https://reddit-clone-psi-ten.vercel.app/r/sameoldtreva/create"
            title="Reddit Clone"
            desc="Tech Used -> NextJS, Kinde, Prisma, Supabase & ShadCN."
          />
          <Project
            image="/coffee.png"
            link="https://yvlcoffee.vercel.app/"
            title="Coffee Shop"
            desc="Tech Used -> NextJS, Kinde, Prisma, Supabase & ShadCN."
          />
          <Project
            image="/resto.png"
            link="https://grove-good-eats.vercel.app/"
            title="Restaurant"
            desc="Tech Used -> NextJS, NextAuth, Prisma, Stripe, Railway & ShadCN."
          />
        </div>
      </div>
    </main>
  );
}
