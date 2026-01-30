// "use client";
// import { loginnn } from "@/app/loginAction/loginAction";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";
// export default function Login() {
//   const router = useRouter();
//   const [error, setError] = useState();
//   const searchParams = useSearchParams();

//   const callbackUrl = searchParams.get("callbackUrl");
//   async function onSubmit(event) {
//     event.preventDefault();

//     try {
//       const formData = new FormData(event.currentTarget);
//       const response = await loginnn(formData, callbackUrl);

//       if (!!response.error) {
//         setError(response.error);
//       } else {
//         router.push("/admin");
//       }
//       if (response && response.error) {
//         setError(response.error);
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   }

//   return (
//     <>
//       {error && <div className="text-xl text-red-500 text-center">{error}</div>}
//       <form className="flex flex-col my-6" onSubmit={onSubmit}>
//         <div className="flex flex-col gap-2 my-2">
//           <label htmlFor="email">Email Address</label>
//           <input
//             className=" border border-black/20 rounded-md px-4 py-2"
//             type="email"
//             name="email"
//             id="email"
//           />
//         </div>

//         <div className="flex flex-col gap-2 my-2">
//           <label htmlFor="password">Password</label>
//           <input
//             className=" border border-black/20 rounded-md px-4 py-2"
//             type="password"
//             name="password"
//             id="password"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-green-500 px-8 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-allw-full mt-4"
//         >
//           Login
//         </button>
//       </form>
//     </>
//   );
// }
"use client";
import { loginnn } from "@/app/loginAction/loginAction";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 1. Loading state add kora hoyeche

  // 2. URL theke callbackUrl dhora (Jodi na thake tobe "/admin" default)
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true); // Login shuru hole button disable hobe
    setError(""); // Purono error muche fela

    try {
      const formData = new FormData(event.currentTarget);
      const response = await loginnn(formData, callbackUrl);

      // 3. Logic: response.error thakle seta set korbo
      if (response?.error) {
        setError(response.error);
      }
      // 4. Logic: Success hole callbackUrl-e pathabo (Dynamic Redirect)
      else if (response?.success) {
        // router.push bebohar kora bhalo kintu sersion refresh korar jonno
        // window.location ba router.refresh() use kora secure
        router.push(response.redirectTo || callbackUrl);
        router.refresh();
      }
    } catch (err) {
      setError(" সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false); // Kaj shesh hole button abar active hobe
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      {/* 5. Error message ke arektu sundor bhabe dekhano */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center">
          {error}
        </div>
      )}

      <form className="flex flex-col my-6" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="border border-black/20 rounded-md px-4 py-2 focus:border-green-500 outline-none"
            type="email"
            name="email"
            id="email"
            required // Basic validation
          />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="password">Password</label>
          <input
            className="border border-black/20 rounded-md px-4 py-2 focus:border-green-500 outline-none"
            type="password"
            name="password"
            id="password"
            required // Basic validation
          />
        </div>

        <button
          type="submit"
          disabled={loading} // 6. Loading thakle click bondho
          className={`bg-green-500 px-8 py-2 rounded-md block text-white font-bold shadow-lg transition-all w-full mt-4 ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-green-500/50 active:scale-95"
          }`}
        >
          {loading ? "Processing..." : "Login"}
        </button>
      </form>
    </div>
  );
}
