"use client";
import { useSearch } from "@/lib/hooks/useSearch";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SearchIcon } from "lucide-react";

const formSchema = z.object({
  searchValue: z.string().min(2).max(50),
});

function SearchPageForm({ token }: { token: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  const { data, error, isLoading } = useSearch(
    token,
    form.watch("searchValue")
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
    if (data) {
      console.log(data.tracks.items);
    }
    if (error) {
      console.error("Error fetching data:", error);
    }
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
          className="w-1/4 flex items-center gap-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl shadow-inner text-lg"
        >
          <SearchIcon size={18} />
          <span>Search</span>
        </Button>
      </form>
    </Form>
  );
}

export default SearchPageForm;
