import Login from "@/components/admin/LoginForm";

const LoginPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-center text-2xl">Admin Login</h4>
        <Login />
      </div>
    </section>
  );
};

export default LoginPage;
