import { RickAndMortyCharacter } from "../../domain/rick-and-morty-character";
import { CharactersRepository } from "./characters-repository.abstract";

export class ApiCharactersRepository extends CharactersRepository {
  async getAllCharacters(): Promise<RickAndMortyCharacter[]> {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
  }
  async getCharacterById(id: number): Promise<RickAndMortyCharacter | null> {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    return data;
  }
  async searchCharactersByName(name: string): Promise<RickAndMortyCharacter[]> {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const data = await response.json();
    return data.results;
  }
}
