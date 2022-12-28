import Welcome from "~/components/welcome";

// import Hero from "~/components/widgets/Hero";
// import Features from "~/components/widgets/Features";
// import FAQs from "~/components/widgets/FAQs";
// import Stats from "~/components/widgets/Stats";
// import CallToAction from "~/components/widgets/CallToAction";
import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export const BUILDER_PUBLIC_API_KEY = 'cd0f1e5de96e4674b3405f54419ce4c0'; // <-- Add your Public API KEY here
export const BUILDER_MODEL = "page";

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
