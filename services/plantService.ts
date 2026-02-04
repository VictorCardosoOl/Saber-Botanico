import { PLANTS } from '../constants';
import { PlantSpecimen } from '../types';

/**
 * Service Layer Pattern
 * Em uma aplicação real, aqui ficariam as chamadas fetch/axios.
 * O objetivo é desacoplar a View (React) da Fonte de Dados.
 */

export const PlantService = {
  getAll: async (): Promise<PlantSpecimen[]> => {
    // Simula latência de rede se necessário, ou retorna direto
    return new Promise((resolve) => {
      setTimeout(() => resolve(PLANTS), 0);
    });
  },

  getById: async (id: string): Promise<PlantSpecimen | undefined> => {
    return new Promise((resolve) => {
      const plant = PLANTS.find((p) => p.id === id);
      resolve(plant);
    });
  },

  search: async (term: string): Promise<PlantSpecimen[]> => {
    const normalizedTerm = term.toLowerCase().trim();
    if (!normalizedTerm) return PLANTS;

    return new Promise((resolve) => {
      const results = PLANTS.filter(
        (plant) =>
          plant.name.toLowerCase().includes(normalizedTerm) ||
          plant.scientificName.toLowerCase().includes(normalizedTerm)
      );
      resolve(results);
    });
  },
  
  getFeatured: async (limit: number = 3): Promise<PlantSpecimen[]> => {
     return new Promise((resolve) => {
        resolve(PLANTS.slice(0, limit));
     });
  }
};
