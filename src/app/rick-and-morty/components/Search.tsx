"use client";

import { useMutation } from "@tanstack/react-query";
import { RickAndMortyCharacter } from "../../../domain/rick-and-morty-character";
import Link from "next/link";

interface SearchProps {
  onSearch: (search: string) => Promise<RickAndMortyCharacter[]>;
}

export default function Search(props: SearchProps) {
  const { mutate, data } = useMutation({ mutationFn: props.onSearch });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-ignore this is fine
    mutate(event.currentTarget.elements[0].value);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 items-stretch">
          Search for a character:
          <input className="text-gray-800" />
        </label>
      </form>

      {data ? (
        <ul className="absolute top-full left-0 right-0 bg-white rounded-md shadow-md p-2 text-gray-800 z-20">
          {data.map((character) => (
            <li key={character.id}>
              <Link href={{ pathname: `/rick-and-morty/${character.id}` }}>
                {character.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
