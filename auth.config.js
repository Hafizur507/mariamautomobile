// auth.config.js
export const authConfig = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminRoute = nextUrl.pathname.startsWith("/admin");

      if (isAdminRoute) {
        if (isLoggedIn) return true;
        return false; // লগইন না থাকলে অটোমেটিক রিডাইরেক্ট করবে
      }
      return true;
    },
  },
};
