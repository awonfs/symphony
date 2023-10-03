"use client";
import * as z from "zod";
import { useSearch } from "@/lib/hooks/useSearch";
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
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { searchDataAtom } from "@/lib/atoms/atoms";
import { motion } from "framer-motion";
import useFadeInWhenInView from "@/lib/hooks/useFadeinWhenInView";

const formSchema = z.object({
  searchValue: z.string().min(2).max(50),
});

function SearchPageForm({ token }: { token: string }) {
  const { ref, controls } = useFadeInWhenInView();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  const [query, setQuery] = useState("");
  const [, setSearchResults] = useAtom(searchDataAtom);

  const { data, error } = useSearch(token, query);
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setQuery(values.searchValue);
    form.reset();
  }

  useEffect(() => {
    if (data) {
      setSearchResults({ tracks: { items: data.tracks.items } });
    }
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [data, error, setSearchResults]);

  return (
    <Form {...form}>
      <motion.form
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 container mt-8 md:w-1/2"
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
          className="md:w-1/4 flex items-center gap-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 drop-shadow-xl shadow-inner text-lg"
        >
          <SearchIcon size={18} />
          <span>Search</span>
        </Button>
      </motion.form>
    </Form>
  );
}

export default SearchPageForm;
