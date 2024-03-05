import axios from "./axios";



export const getPokemon = async (name: string) =>
  await axios.get("/getpokemon/?name=" + name);

export const getramdompokemon = async () =>
  await axios.get("/getramdompokemon");

export const getpokemonbyrange = async (start: string, end: string) =>
  await axios.get(`/getpokemonbyrange/?start=${start}&end=${end}`);
