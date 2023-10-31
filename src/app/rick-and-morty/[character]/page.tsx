import Image from "next/image";
import { notFound } from "next/navigation";
import { CharactersRepository } from "../../../application/characters-repository/characters-repository.abstract";
import { ServerAppContainer } from "../../../application/server-app-container";

interface CharacterPageProps {
  params: {
    character: string;
  };
}

export default async function CharacterPage(props: CharacterPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const character = await ServerAppContainer.get(
    CharactersRepository
  ).getCharacterById(Number(props.params.character));

  if (!character) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-4 gap-12">
      <h1 className="text-4xl mt-12">{character.name}</h1>

      <div className="grid grid-cols-12 w-full gap-2">
        <div className="grid aspect-square grid-rows-6 col-span-12 md:col-span-6 lg:col-span-4 p-4 gap-4">
          <div className="relative row-span-5">
            <Image
              fill
              className="object-contain"
              src={character.image}
              alt={character.name}
            />
          </div>
          <h2 className="text-2xl text-center">{character.name}</h2>
        </div>
      </div>
    </main>
  );
}
