import { IAmenity } from "./IAmenity";

export interface IFeature {
  floors: number;
  amenities: IAmenity[];
  virtual_tour_link: string;
}
