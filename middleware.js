// import { auth } from "@/auth";

// export default auth((req) => {
//   const isLoggedIn = !!req.auth;
//   const { nextUrl } = req;

//   // ১. চেক করছি ইউজার কি /admin রুটে যাওয়ার চেষ্টা করছে?
//   const isAdminRoute = nextUrl.pathname.startsWith("/admin");

//   // ২. যদি এডমিন রুটে যায় এবং লগইন না থাকে, তবে লগইন পেজে পাঠাও
//   if (isAdminRoute && !isLoggedIn) {
//     const loginUrl = new URL("/login", nextUrl);
//     // callbackUrl যোগ করছি যাতে লগইন শেষে আগের পেজেই ফিরে আসে
//     loginUrl.searchParams.set("callbackUrl", nextUrl.pathname);
//     return Response.redirect(loginUrl);
//   }

//   return null; // বাকি সব রুটের জন্য কোনো বাধা নেই
// });

// export const config = {
//   // শুধুমাত্র এই রুটগুলোতে মিডলওয়্যারটি কাজ করবে
//   matcher: ["/admin/:path*"],
// };

// import { auth } from "@/auth"; // আপনার auth.js এর পাথ

// // ১. এখানে অবশ্যই 'default' কিওয়ার্ড থাকতে হবে
// export default auth((req) => {
//   const isLoggedIn = !!req.auth;
//   const { nextUrl } = req;

//   const isAdminRoute = nextUrl.pathname.startsWith("/admin");

//   if (isAdminRoute && !isLoggedIn) {
//     const loginUrl = new URL("/login", nextUrl);
//     loginUrl.searchParams.set("callbackUrl", nextUrl.pathname);
//     return Response.redirect(loginUrl);
//   }

//   return null;
// });

// // ২. 'config' অবজেক্টটি আগের মতোই থাকবে
// export const config = {
//   matcher: ["/admin/:path*"],
// };
// middleware.js
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/admin/:path*"],
};
