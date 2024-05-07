import { z } from "zod";
import { formSchema } from "../lib/schema";

import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BeatLoader, BounceLoader, CircleLoader, ClockLoader, PacmanLoader, SyncLoader, MoonLoader, PuffLoader, RingLoader, DotLoader, ScaleLoader } from "react-spinners";


export function ReactForm() {
  let navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      // gender: "",
      // fruits:""
    },
  });

  useEffect(() => {
    // form.setValue("password", "nfewjfnwekjfwekjf", {
    //   shouldValidate: true
    // })
    // form.setValue("username", "mohan", {
    //   shouldValidate: true
    // })
    // form.setValue("gender", "Female", {
    //   shouldValidate: true
    // })
    // form.setValue("fruits", "0", {
    //   shouldValidate: true
    // })
  }, [form])

  const onSubmit = () => {
    console.log("inside submit");
    setLoaded(false)
    setTimeout(() => {
      navigate("/end-page");
    }, 3000)
  }

  const [gender, SetGender] = useState(["Male", "Female", "Prefer Not to say"])
  const [fruits, Setfruits] = useState(["Apple", "Orange", "PineApple"])
  const [pauseAnimation, SetPauseAnimation] = useState(true)

  const [loaded, setLoaded] = useState(true)


  const handleUserName = (event: any) => {
    console.log(event.target.value)
  }
  const handlePauseAnimation = (event: any) => {
    SetPauseAnimation(false)
  }
  const handleContinueAnimation = (event: any) => {
    SetPauseAnimation(true)
  }


  return (
    <div className="flex items-center h-[100vh] justify-center">
      {!loaded ? <PacmanLoader color="gray" size={15} speedMultiplier={2} /> :
        <div className={pauseAnimation === true ? "border border-x-2 w-[30%] p-20 rounded-full bg-gray-50 shadow-2xl animate-bounce-slow" : "border border-x-2 w-[30%] p-20 rounded-full bg-gray-50 shadow-2xl"} onMouseOver={handlePauseAnimation} onMouseLeave={handleContinueAnimation}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <h1 className="text-center hover:text-green-300">LOGIN</h1>
              </div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" hover:text-green-300">Username</FormLabel>
                    <FormControl>
                      <Input className="hover:bg-green-100 rounded-lg" placeholder="Enter your username" {...field} onChange={(e) => {
                        field.onChange(e)
                        handleUserName(e)
                      }} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" hover:text-green-300">Password</FormLabel>
                    <FormControl>
                      <Input className="hover:bg-green-100 rounded-lg" type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500text-xs" />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={(e) => {
                          field.onChange(e)
                        }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup className="bg-white">
                            <SelectLabel className="text-center border-b">Select Gender</SelectLabel>
                            {
                              gender.map((data, idx) => {
                                console.log(data)
                                return (
                                  <SelectItem key={data} value={data.toString()}>{data}</SelectItem>
                                )
                              })
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fruits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fruits</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        disabled={true}
                        onValueChange={(e) => {
                          field.onChange(e)
                        }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Fruits" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup className="bg-white">
                            <SelectLabel className="text-center border-b">Select Fruits</SelectLabel>
                            {
                              fruits.map((data, idx) => {
                                console.log(data)
                                return (
                                  <SelectItem key={idx} value={idx.toString()}>{data}</SelectItem>
                                )
                              })
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              /> */}
              <div className="flex justify-center">
                <Button className="border-2 border-black hover:bg-green-300" type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>}
    </div>
  );
}
