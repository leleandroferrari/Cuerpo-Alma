import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "placeholder-id", // you can find this in sanity.json
    dataset: import.meta.env.VITE_SANITY_DATASET || "production", // or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: "2024-03-06", // use a UTC date string
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}
