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

export type PlanetApiResponse = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export interface CharacterDataPruned {
  id: CharacterData["id"];
  name: CharacterData["name"];
  hair_color: CharacterData["hair_color"];
  eye_color: CharacterData["eye_color"];
  gender: CharacterData["gender"];
  films: CharacterData["films"];
  height: CharacterData["height"];
  homeworldUrl: CharacterData["homeworld"];
}

export type GetApiArgs = { id: string } & ApiArgs;

export type UpdateCharacterBody = { id: CharacterData["id"] } & Partial<
  Omit<CharacterDataPruned, "id">
> &
  ApiArgs;
