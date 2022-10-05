import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints(build) {
    return {
      addBookToUser: build.mutation({
        query({ userId, bookName }) {
          return {
            url: `users/${userId}`,
            method: "post",
            body: { bookName },
          };
        },
      }),
      getBooksByUserId: build.query({
        query(id) {
          return `users/${id}/books`;
        },
      }),
      updateBookFromUser: build.mutation({
        query({ userId, bookId, book }) {
          return {
            url: `users/${userId}/books/${bookId}`,
            method: "put",
            body: book,
          };
        },
      }),
      deleteBookFromUser: build.mutation({
        query({ userId, bookId }) {
          return {
            url: `users/${userId}/books/${bookId}`,
            method: "delete",
          };
        },
      }),
    };
  },
});

export const {
  useAddBookToUserMutation,
  useGetBooksByUserIdQuery,
  useUpdateBookFromUserMutation,
  useDeleteBookFromUserMutation,
} = userApi;
