import { RickAndMortyCharacter } from "../../domain/rick-and-morty-character";

export abstract class CharactersRepository {
  abstract getAllCharacters(): Promise<RickAndMortyCharacter[]>;
  abstract getCharacterById(id: number): Promise<RickAndMortyCharacter | null>;
  abstract searchCharactersByName(
    name: string
  ): Promise<RickAndMortyCharacter[]>;
}
