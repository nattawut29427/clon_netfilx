import useCurrentUser from "@/hook/useCurrentUser";
import "./globals.css";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
    return {
    props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const {data: user} = useCurrentUser();

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="flex flex-col">
        <h1 className="text-white text-3xl md:text-6xl ">
            Who watching
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
            <div className="" onClick={() => router.push('/')}>
                <div className="group flex-row mx-auto">

                    <div
                      className="
                        w-44
                        h-44
                        rounded-md
                        flex
                        items-center
                        justify-center
                        border-2
                        border-transparent
                        group-hover:cursor-pointer
                        group-hover:border-white
                        overflow-hidden
                      "
                    >
                        <img src="/images/profile.png" alt="Profile"  />
                    </div>
                    
                    <div
                     className="
                       mt-4
                       text-gray-400
                       text-2xl
                       text-center
                       group-hover:text-white
                     "
                    >
                        {user?.name}
                    </div>

                </div>
            </div>

        </div>
      </div>
    </div>
    
  );
}

export default Profiles;
