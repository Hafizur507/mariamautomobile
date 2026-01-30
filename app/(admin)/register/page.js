import RegistrationForm from "@/components/admin/RegisyerForm";

const RegistrationPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Register</h4>
        <RegistrationForm />
      </div>
    </section>
  );
};

export default RegistrationPage;
