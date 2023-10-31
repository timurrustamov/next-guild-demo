import { Container } from "inversify";
import { CharactersRepository } from "./characters-repository/characters-repository.abstract";
import { ApiCharactersRepository } from "./characters-repository/api-characters-repository";

export const ServerAppContainer = new Container({ defaultScope: "Singleton" });

ServerAppContainer.bind(CharactersRepository).toDynamicValue(
  () => new ApiCharactersRepository()
);
