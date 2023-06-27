import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  arrayUnion,
  collection,
  doc,
  updateDoc,
  addDoc,
  setDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export const ordersApi = createApi({
  reducerPath: "orders",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    fetchOrders: builder.query({
      async queryFn() {
        try {
          const ref = collection(db, "orders");
          const querySnapshot = await getDocs(ref);
          let orders = [];
          querySnapshot?.forEach((doc) => {
            orders.push({ id: doc.id, ...doc.data() });
          });
          return { data: orders };
        } catch (error) {
          console.error(error.message);
          return { error: error.message };
        }
      },
      providesTags: ["orders"],
    }),
    addNewOrder: builder.mutation({
      async queryFn(newOrder) {
        try {
          const ref = doc(db, "orders", newOrder.title);
          await setDoc(ref, newOrder).then(() => {
            console.log("Document has been added successfully");
          });
          return { data: null };
        } catch (error) {
          console.error(error.message);
          return { error: error.message };
        }
      },
      invalidatesTags: ["orders"],
    }),
    removeOrder: builder.mutation({
      async queryFn(orderToRemove) {
        try {
          const orderId = orderToRemove.title;
          await deleteDoc(doc(db, "orders", orderId)).then(() => {
            console.log("Document has been deleted.");
          });
          return { data: null };
        } catch (error) {
          console.error(error.message);
          return { error: error.message };
        }
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useFetchOrdersQuery,
  useAddNewOrderMutation,
  useRemoveOrderMutation,
} = ordersApi;
