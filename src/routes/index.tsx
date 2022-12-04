import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Welcome from "~/components/welcome";

// import Hero from "~/components/widgets/Hero";
// import Features from "~/components/widgets/Features";
// import FAQs from "~/components/widgets/FAQs";
// import Stats from "~/components/widgets/Stats";
// import CallToAction from "~/components/widgets/CallToAction";

export default component$(() => {
  return (
    <>
    <Welcome/>
      {/* <Hero />
      <Features />
      <FAQs />
      <Stats />
      <CallToAction /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwikverse - Light Speed at Scale",
  meta: [
    {
      name: "description",
      content:
        "Qwikverse - A place for light speed projects.",
    },
  ],
};
