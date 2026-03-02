import { ecoMarket } from './eco-market';
import { velocity } from './velocity';
import { zenithBank } from './banking-luxury';
import { auraWatches } from './watch-ecommerce';
import { skylineRealEstate, vitalityFitness } from './realestate-fitness';
import { nebulaIdentity } from './nebula';
import { newProjects } from './new-creations';
import type { Project } from '../../types';

export const projects = [
  ...newProjects,
  ecoMarket,
  velocity,
  zenithBank, // Kept but moved down
  nebulaIdentity,
  auraWatches,
  skylineRealEstate,
  vitalityFitness
] as Project[];
