export interface InternationalLocation {
  id: string;
  country: string;
  city: string;
  projectCount: number;
  coordinates: { x: number; y: number };
}
