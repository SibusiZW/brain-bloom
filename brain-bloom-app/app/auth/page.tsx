'use client';

import { LoginForm } from "@/components/login-form"
import { authClient } from "@/lib/auth-client";
import { Flower } from "lucide-react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {

  const { data: session } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [])

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-blue-500 text-primary-foreground">
            <Flower className="size-4"/>
          </div>
          BrainBloom
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
