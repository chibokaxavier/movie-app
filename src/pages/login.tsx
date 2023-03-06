import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);
  const {signIn,signUp}= useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({email,password}) => {
    if (login){
 await signIn(email,password)
    } else {
   await signUp(email,password)
    }
  };

  return (
    <div className="relative flex w-screen h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title className=""> Login Page</title>
      </Head>
      <Image
        src="https://cdn.pixabay.com/photo/2016/06/03/12/42/popcorn-1433327__340.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://media.istockphoto.com/id/1265725883/vector/spotlight-icon-symbol-design-template.jpg?s=612x612&w=0&k=20&c=7xELFYe9iJ3H5ubC_Dlnk-1rcUZ95NTRYDYUEOTTqOE="
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 "
        width={75}
        height={75}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-40 px-6 space-y-8 rounded bg-black/75 py-10 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              {...register("email",{required:true})}
              type="email"
              placeholder="Email"
              className="input px-5 py-3.5"
            />
             {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              {...register("password",{required:true})}
              type="password"
              placeholder="Password"
              className="input px-5 py-3.5"
            />
             {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button className="w-full bg-[#e50914] rounded py-3 font-semibold" onClick={()=> setLogin(true)}>
          Sign In
        </button>
        <div className="text-[gray]">
          New to this Site ?{" "}
          <button onClick={()=> setLogin(false)} className="text-white hover:underline" type="submit">
            {" "}
            Sign Up Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
