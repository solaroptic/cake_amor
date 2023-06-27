import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const inventoryApi = createApi({
  reducerPath: "inventory",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["inventory"],
  endpoints: (builder) => ({
    fetchInventory: builder.query({
      async queryFn() {
        try {
          const ref = collection(db, "inventory");
          const querySnapshot = await getDocs(ref);
          let inventory = [];
          querySnapshot?.forEach((doc) => {
            inventory.push({ id: doc.id, ...doc.data() });
          });
          return { data: inventory };
        } catch (error) {
          console.error(error.message);
          return { error: error.message };
        }
      },
      providesTags: ["inventory"],
    }),
  }),
});

export const { useFetchInventoryQuery } = inventoryApi;
export { inventoryApi };
