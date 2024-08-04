export interface ApiArgs {
  _page?: number;
  _per_page?: number;
}

export interface CharacterData {
  id: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export type CharactersApiResponse = CharacterData[];

export interface CharacterDataPruned {
  id: CharacterData["id"];
  name: CharacterData["name"];
  hair_color: CharacterData["hair_color"];
  eye_color: CharacterData["eye_color"];
  gender: CharacterData["gender"];
  films: CharacterData["films"];
  height: CharacterData["height"];
  // todo - implement homeworld functionality
  // homeworld: CharacterData["homeworld"];
}

export type GetApiArgs = { id: string } & ApiArgs;

export type UpdateCharacterBody = { id: CharacterData["id"] } & Partial<
  Omit<CharacterDataPruned, "id">
> &
  ApiArgs;
