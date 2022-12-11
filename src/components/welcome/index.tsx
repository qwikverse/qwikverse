import { component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { QwikLottie } from "qwik-lottie";

export default component$(() => {
    const astronaut = useStore({
        options: {
        path: "https://assets3.lottiefiles.com/packages/lf20_Ns4TLz.json",
        },
    });
    const loading = useStore({
        options: {
        path: "https://assets7.lottiefiles.com/packages/lf20_d6619szt.json",
        },
    });

  return (
    <div class="w-screen h-screen grid justify-items-center place-content-center">
        <div class="w-6/12 relative">
          <div class="absolute z-5 top-40">
            <QwikLottie options={astronaut.options} />
          </div>
          <div class="z-1">
            <QwikLottie options={loading.options} />
            <p class="blink-hard text-center -mt-40  text-sky-400">Creation in progress...</p>
          </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwikverse",
  meta: [
    {
      name: "description",
      content: "Light Speed at Scale",
    },
  ],
};
