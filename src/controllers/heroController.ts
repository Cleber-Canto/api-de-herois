import { Request, Response } from "express";
import { Hero } from "../models/hero";

let heroes: Hero[] = [
  { id: 1, name: "Superman", power: "Strength" },
  { id: 2, name: "Batman", power: "Intelligence" },
];

// Listar todos os heróis
export const getHeroes = (req: Request, res: Response): void => {
  console.log("Fetching all heroes"); // Log de ação
  res.json(heroes);
};

// Obter um herói pelo ID
export const getHeroById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const hero = heroes.find((h) => h.id === id);
  console.log(`Fetching hero with ID: ${id}`); // Log de ação
  hero ? res.json(hero) : res.status(404).json({ message: "Hero not found" });
};

// Criar um novo herói
export const createHero = (req: Request, res: Response): void => {
  const newHero: Hero = req.body;
  newHero.id = heroes.length + 1;
  heroes.push(newHero);
  console.log(`Created new hero: ${JSON.stringify(newHero)}`); // Log de ação
  res.status(201).json(newHero);
};

// Atualizar um herói
export const updateHero = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const { name, power } = req.body;

  // Lógica para encontrar e atualizar o herói
  const heroIndex = heroes.findIndex((hero) => hero.id === id);
  console.log(`Updating hero with ID: ${id}`); // Log de ação

  if (heroIndex === -1) {
    res.status(404).json({ message: "Hero not found" });
    return;
  }

  heroes[heroIndex] = { id, name, power };
  console.log(`Updated hero with ID: ${id}. New details: ${JSON.stringify(heroes[heroIndex])}`); // Log de sucesso
  res.json({ message: "Hero updated successfully", hero: heroes[heroIndex] }); // Resposta de sucesso
};

// Deletar um herói
export const deleteHero = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const heroIndex = heroes.findIndex((hero) => hero.id === id);

  if (heroIndex === -1) {
    res.status(404).json({ message: "Hero not found" });
    return;
  }

  heroes = heroes.filter((h) => h.id !== id);
  console.log(`Deleted hero with ID: ${id}`); // Log de sucesso
  res.status(200).json({ message: "Hero deleted successfully" }); // Resposta de sucesso
};
