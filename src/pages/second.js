import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Second = () => {
  const router = useRouter();
  return (
    <div>
      Helooooooooooooooooooooo
      <button
        onClick={() => {
          router.back();
        }}
      >
        Backkkkkkkkkkkkkkk
      </button>
      <Link href={"/"} className="text-purple-200">
        Go Home{" "}
      </Link>
    </div>
  );
};

export default Second;
