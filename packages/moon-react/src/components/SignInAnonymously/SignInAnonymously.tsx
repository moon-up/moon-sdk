import { useMoonSDK } from "@hooks/index";
import Button from "../Button/Button";
import React from "react";
import { IconChevronRight, IconUser } from "@/assets/icons";
function SignInAnonymously() {
  const { supabase } = useMoonSDK();

  const signInAnonymously = async () => {
    const auth = await supabase?.auth.signInAnonymously();
    if (auth && auth.error) {
      console.error("An error occurred:", auth.error);
    } else {
      console.log("User:", auth?.data);
    }
  };

  return (
    <Button onClick={signInAnonymously} color="accentColor">
      <IconUser className="absolute left-5 w-[30px]" />
      Anonymous Login
      <IconChevronRight className="absolute right-2 w-[30px]" />
    </Button>
  );
}

export default SignInAnonymously;
