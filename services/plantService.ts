
import { PLANTS } from '../constants';
import { PlantSpecimen } from '../types';

const MOCK_NETWORK_DELAY = 600;

/**
 * Simulates network latency for development/demo purposes.
 */
const simulateLatency = async (ms: number = MOCK_NETWORK_DELAY): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const PlantService = {
  /**
   * Retrieves all plant specimens.
   * Returns a shallow copy to enforce immutability of the source constant.
   */
  getAll: async (): Promise<PlantSpecimen[]> => {
    await simulateLatency();
    return [...PLANTS];
  },

  /**
   * Retrieves a specific plant by ID.
   * @param id The unique identifier of the plant.
   * @throws Error if ID is invalid.
   */
  getById: async (id: string): Promise<PlantSpecimen | null> => {
    if (!id || typeof id !== 'string') {
      throw new Error('PlantService.getById: Invalid ID provided.');
    }

    await simulateLatency();
    const plant = PLANTS.find((p) => p.id === id);
    return plant || null;
  },

  /**
   * Searches for plants matching the term in name or scientific name.
   * @param term The search query.
   */
  search: async (term: string): Promise<PlantSpecimen[]> => {
    await simulateLatency();

    if (!term || typeof term !== 'string') {
      return [...PLANTS];
    }

    const normalizedTerm = term.trim().toLowerCase();
    
    if (normalizedTerm.length === 0) {
      return [...PLANTS];
    }

    return PLANTS.filter((plant) => {
      const nameMatch = plant.name.toLowerCase().includes(normalizedTerm);
      const scientificNameMatch = plant.scientificName.toLowerCase().includes(normalizedTerm);
      return nameMatch || scientificNameMatch;
    });
  },
  
  /**
   * Retrieves a subset of plants for featured sections.
   * @param limit Maximum number of items to return (default: 3).
   */
  getFeatured: async (limit: number = 3): Promise<PlantSpecimen[]> => {
     await simulateLatency();
     const safeLimit = Math.max(1, Math.floor(limit));
     return PLANTS.slice(0, safeLimit);
  }
};
