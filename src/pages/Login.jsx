import { useRef } from "react";

const Auth = ({ login }) => {
   const passwordRef = useRef();
   const usernameRef = useRef();
   const submitHandler = (e) => {
      e.preventDefault();

      if (!passwordRef.current.value.trim() || !usernameRef.current.value.trim()) {
         alert('نام و رمز عبور را وارد کنید.');
         return;
      }

      if (usernameRef.current.value !== "admin" || passwordRef.current.value !== "admin") {
         alert('نام کاربری یا رمز عبور اشتباه است.');
      } else if (usernameRef.current.value === "admin" && passwordRef.current.value === "admin") {
         login(true);
      }
   }

   return (
      <main className="bg-slate-200 p-8 rounded-xl shadow-lg">
         <section>
            <form onSubmit={submitHandler} className="grid gap-6">
               <div className="grid justify-center gap-2">
                  <label htmlFor='email'>نام کاربری</label>
                  <input type='text' id='username' className="w-60 h-8 p-2 rounded-md" dir="ltr" ref={usernameRef} placeholder="admin" />
               </div>
               <div className="grid justify-center gap-2">
                  <label htmlFor='password'>رمز عبور</label>
                  <input type='password' id='password' className="w-60 h-8 p-2 rounded-md" dir="ltr" ref={passwordRef} placeholder="admin" />
               </div>
               <button
                  type="submit"
                  className="bg-slate-600 hover:bg-slate-700 py-2 rounded-md text-white mt-4"
               >
                  ورود
               </button>
            </form>
         </section>
      </main>
   );
};

export default Auth;
