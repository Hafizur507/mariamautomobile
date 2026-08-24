// import { RegisterForm } from '@/app/loginAction/loginAction';

// const RegistrationForm = () => {
//   return (
//     <form className="flex flex-col my-6" action={RegisterForm}>
//       <div className=" flex flex-col gap-2 my-2">
//         <label htmlFor="email">Email Address</label>
//         <input
//           className="border border-black/20 rounded-md px-4 py-2"
//           type="email"
//           name="email"
//           id="email"
//         />
//       </div>

//       <div className=" flex flex-col gap-2 my-2">
//         <label htmlFor="password">Password</label>
//         <input
//           className="border border-black/20 rounded-md px-4 py-2"
//           type="password"
//           name="password"
//           id="password"
//         />
//       </div>

//       <button
//         type="submit"
//         className=" bg-green-500 px-8 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all w-full mt-4"
//       >
//         Create account
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;

'use client';

import { RegisterForm } from '@/app/loginAction/loginAction';
import { useActionState } from 'react';

const RegistrationForm = () => {
  // state-এ সার্ভার অ্যাকশনের রিটার্ন করা { error } ডাটা থাকবে
  const [state, formAction, isPending] = useActionState(RegisterForm, null);

  return (
    <form className="flex flex-col my-6" action={formAction}>
      {/* এরর মেসেজ দেখানোর জন্য UI */}
      {state?.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
          {state.error}
        </div>
      )}

      <div className="flex flex-col gap-2 my-2">
        <label htmlFor="email">Email Address</label>
        <input
          className="border border-black/20 rounded-md px-4 py-2"
          type="email"
          name="email"
          id="email"
          required
        />
      </div>

      <div className="flex flex-col gap-2 my-2">
        <label htmlFor="password">Password</label>
        <input
          className="border border-black/20 rounded-md px-4 py-2"
          type="password"
          name="password"
          id="password"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-green-500 px-8 py-2 rounded-md block text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all w-full mt-4 disabled:bg-gray-400"
      >
        {isPending ? 'Creating...' : 'Create account'}
      </button>
    </form>
  );
};

export default RegistrationForm;

// Start of Tawk.to Script
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a895330fa28c1344c4f1f1b/1k0k6pu5g';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
// End of Tawk.to Script