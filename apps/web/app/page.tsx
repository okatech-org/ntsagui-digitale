import { fetchQuery } from "convex/nextjs";
import { api } from "@repo/backend/convex/_generated/api";
import { SiteHeader } from "../components/site/sections/header";
import { Hero } from "../components/site/sections/hero";
import { Pillars } from "../components/site/sections/pillars";
import { Modes } from "../components/site/sections/modes";
import { Situations } from "../components/site/sections/situations";
import { Work, type WorkProject } from "../components/site/sections/work";
// import { Products } from "../components/site/sections/products"; // masqué jusqu'à ce que les produits soient livrables
import { Brief } from "../components/site/sections/brief";
import { SiteFooter } from "../components/site/sections/footer";

export const revalidate = 30;

export default async function Home() {
  const rawProjects = await fetchQuery(api.projects.listPublished, {}).catch(
    () => [],
  );

  const projects: WorkProject[] = rawProjects.map((p) => ({
    _id: p._id,
    n: p.n,
    client: p.client,
    kind: p.kind,
    title: p.title,
    kpiValue: p.kpiValue,
    kpiLabel: p.kpiLabel,
    href: p.href,
  }));

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Pillars />
        <Modes />
        <Situations />
        <Work projects={projects} />
        {/* <Products /> — masqué jusqu'à ce que les produits soient livrables */}
        <Brief />
      </main>
      <SiteFooter />
    </>
  );
}
