export interface ApiArgs {
  search?: string;
  page?: number;
  format?: "wookiee"; // todo - a wookie translator is needed to implement this functionality!
}

export interface CharactersApiResponse {
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
