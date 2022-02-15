// import { useEffect, useState } from "react";

// type QueryState = {
//   data: any;
//   error: any;
//   status: "idle" | "loading" | "success" | "error";
// };

// const useQuery = (queryKey, queryFunction) => {
//   const [queryState, setQueryState] = useState<QueryState>({
//     data: null,
//     error: null,
//     status: "idle",
//   });

//   useEffect(() => {
//     const runQuery = async () => {
//       setQueryState({
//         data: null,
//         error: null,
//         status: "loading",
//       });

//       try {
//         const data = await queryFunction();
//         setQueryState({
//           data,
//           error: null,
//           status: "success",
//         });
//       } catch (error) {
//         setQueryState({
//           data: null,
//           error,
//           status: "error",
//         });
//       }
//     };
//   }, []);

//   return "";
// };

// export default useQuery;

export const dummy = { g: "P" };
