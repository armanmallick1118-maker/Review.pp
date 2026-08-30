export type BiosphereRegion = 'Sky Cities' | 'Forest Nodes' | 'Deep Sea Habs' | 'Orbital Shards';
export type ExpeditionIntensity = 'Novice' | 'Veteran' | 'Extreme';

export interface Sector {
  id: string;
  name: string;
  region: BiosphereRegion;
  locationTag: string;
  intensity: ExpeditionIntensity;

  // Real Estate metrics
  roadCondition?: string;
  nearbySchool?: string;
  nearbyStation?: string;
  nearbyDairy?: string;
  discountPercent?: number;

  estimatedPrice: string; // e.g., "₹1.5 Cr - ₹2.5 Cr"

  // Review metrics
  expertRating: number; // out of 5
  expertVerdict: string;
  pros: string[];
  cons: string[];

  imgUrl: string;
  heroImgUrl: string;
  galleryImages?: string[];
  altText: string;
  description: string;
}
