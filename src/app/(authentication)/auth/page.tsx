"use client";

import { useState } from "react";

import { BsSlack } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

const AuthPage = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const formSchema = z.object({
    email: z
      .string()
      .email({ message: "Please enter a valid Email" })
      .min(2, { message: "Email must be 2 characters" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen p-5 grid text-center place-content-center bg-white">
      <div className="max-w-[450px]">
        <div className="flex justify-center items-center mb-4">
          <BsSlack size={30} className="mr-3" />
          <Typography text="NotSlack" variant="h2" />
        </div>
        <Typography
          text="Sign into your account"
          variant="h2"
          className="mb-3"
        />
        <Typography
          text="We suggest using the email address that you use at work"
          variant="p"
          className="opacity-90 mb-7"
        />

        <div className="flex flex-col space-y-4">
          <Button
            disabled={isAuthenticating}
            variant="outline"
            className="py-6 border-2 flex space-x-3 rounded-xl"
          >
            <FcGoogle />
            <Typography
              text="Sign in with Google"
              variant="p"
              className="text-xl"
            />
          </Button>
          <Button
            disabled={isAuthenticating}
            variant="outline"
            className="py-6 border-2 flex space-x-3 rounded-xl"
          >
            <RxGithubLogo />
            <Typography
              text="Sign in with Github"
              variant="p"
              className="text-xl"
            />
          </Button>
        </div>
        <div>
          <div className="flex items-center my-6">
            <div className="mr-[10px] flex-1 border-t bg-neutral-300" />
            <Typography text="OR" variant="p" />
            <div className="ml-[10px] flex-1 border-t bg-neutral-300" />
          </div>
          {/*FORM*/}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset disabled={isAuthenticating}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="rounded-xl"
                          placeholder="name@work-email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  variant="secondary"
                  className="bg-primary-dark hover:bg-primary-dark/90 w-full my-5 text-white rounded-xl"
                  type="submit"
                >
                  <Typography text="Sign in with Email" variant="p" />
                </Button>

                <div className="px-5 py-4 bg-gray-100 rounded-sm">
                  <div className="text-gray-500 flex items-center space-x-3 ">
                    <MdOutlineAutoAwesome />
                    <Typography
                      text="We will email you a magic link for a password-free sign-in"
                      variant="p"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
