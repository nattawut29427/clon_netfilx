import "./globals.css";
import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import { redirect } from "next/dist/server/api-utils";
import useCurrentUser from "@/hook/useCurrentUser";
import Navbar from "@/app/component/Navbar";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}


export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <p className="text-md text-white">Email: {user?.email}</p>
          <button onClick={() => signOut()} className="bg-red-600 text-white rounded-md hover:bg-red-700 transition py-3 px-3 mt-10 w-full hover:scale-95">
            Sign out 
          </button>
        </div>
      </div>

    </>
  );
}
