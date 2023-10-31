import Image from "next/image";
import Link from "next/link";
import { CharactersRepository } from "../../application/characters-repository/characters-repository.abstract";
import { ServerAppContainer } from "../../application/server-app-container";
import Search from "./components/Search";
import { getLocalization } from "../../i18n/get-localization";

export default async function Home() {
  const { l10n } = getLocalization();
  const characters = await ServerAppContainer.get(
    CharactersRepository
  ).getAllCharacters();

  const handleSearch = async (search: string) => {
    "use server";
    return await ServerAppContainer.get(
      CharactersRepository
    ).searchCharactersByName(search);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 gap-12">
      <h1 className="text-4xl mt-12">Welcome to NextJS</h1>

      <Search onSearch={handleSearch} />

      <div className="grid grid-cols-12 w-full gap-2">
        {characters.map((character) => (
          <Link
            key={character.id}
            href={{ pathname: `/rick-and-morty/${character.id}` }}
            className="grid aspect-square grid-rows-6 col-span-12 md:col-span-6 lg:col-span-4 p-4 gap-4"
          >
            <div className="relative row-span-5">
              <Image
                className="object-contain"
                fill
                src={character.image}
                alt={character.name}
              />
            </div>
            <h2 className="text-2xl text-center">
              {l10n.getString("character-name", { ...character })}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const metadata = {
  title: "Rick and Morty",
  description: "Rick and Morty characters",
};
