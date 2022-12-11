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
        path: "https://assets2.lottiefiles.com/private_files/lf30_l8csvun7.json",
        },
    });

  return (
    <div class="w-screen h-screen grid justify-items-center place-content-center">
        <div class=" w-6/12">
          <QwikLottie options={astronaut.options} />
          <div class="w-auto h-auto -mt-2">
            <QwikLottie options={loading.options} />
          </div>
          <p class="text-center">Creation in progress...</p>
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
