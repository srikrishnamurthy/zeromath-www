import {
    createCurrentUserHook,
    createClient,
} from "next-sanity";
// import {createClient, createCurrentUserHook} from 'next-sanity'
// import sanityClient from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'


export const config = {
    /**
     * 
    **/
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   apiVersion: "2021-10-21",
   /**
    * 
    */
   useCdn: process.env.NODE_ENV === "production",
};

// set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// export default sanityClient({
//     // Find your project ID and dataset in `sanity.json` in your studio project
//     projectId: "jqdoro5k",
//     dataset: "production",
//     useCdn: true
//     // useCdn == true gives fast, cheap responses using a globally distributed cache.
//     // Set this to false if your application require the freshest possible
//     // data always (potentially slightly slower and a bit more expensive).
//   });

// set up a helperfunction for generating image urls with only the asset reference data in your documents
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);