import { component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { QwikLottie } from "qwik-lottie";

export default component$(() => {
    const astronaut = useStore({
        options: {
        path: "https://assets7.lottiefiles.com/packages/lf20_5gkEN24YTZ.json",
        },
    });
    // const loading = useStore({
    //     options: {
    //     path: "https://assets4.lottiefiles.com/datafiles/aba45c7b75d547282b2dbdc97969412b/progress_bar.json",
    //     },
    // });

  return (
    <div class="w-screen h-screen grid justify-items-center place-content-center">
        <div class=" w-6/12">
          <QwikLottie options={astronaut.options} />
            {/* <div class="h-10 -mt-48">
                {/* <QwikLottie options={loading.options} />
            </div>*/}
            {/* <p class="text-center">Qwikverse loading...</p>  */}
            
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
