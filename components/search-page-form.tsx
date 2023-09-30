"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SearchIcon } from "lucide-react";

const formSchema = z.object({
  searchValue: z.string().min(2).max(50),
});

function SearchPageForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 container mt-8 w-1/2"
      >
        <FormField
          control={form.control}
          name="searchValue"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-full w-full drop-shadow-xl shadow-inner text-black"
                  placeholder="search for a song, album or artist..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-1/4 flex items-center gap-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl shadow-inner text-xl"
        >
          <SearchIcon size={18} />
          <span>Search</span>
        </Button>
      </form>
    </Form>
  );
}

export default SearchPageForm;
