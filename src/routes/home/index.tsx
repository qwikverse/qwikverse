import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation, DocumentHead } from "@builder.io/qwik-city";
import { getContent, RenderContent, getBuilderSearchParams } from "@builder.io/sdk-qwik";

export const BUILDER_PUBLIC_API_KEY = 'cd0f1e5de96e4674b3405f54419ce4c0'; // <-- Add your Public API KEY here
export const BUILDER_MODEL = "page";

export default component$(() => {
  const location = useLocation();
  const builderContentRsrc = useResource$<any>(() => {
    return getContent({
      model: BUILDER_MODEL,
      apiKey: BUILDER_PUBLIC_API_KEY,
      options: getBuilderSearchParams(location.query),
      userAttributes: {
        urlPath: location.pathname || "/",
      },
    });
  });

  return (
    <Resource
      value={builderContentRsrc}
      onPending={() => <div>Loading...</div>}
      onResolved={(content) => (
        <RenderContent
          model={BUILDER_MODEL}
          content={content}
          apiKey={BUILDER_PUBLIC_API_KEY}
        />
      )}
    />
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
