import { IFeature } from "./IFeature";

export interface ILocation {
  img: string;
  site_id: number;
  name: string;
  venue_type: string;
  timezone: "America/Chicago" | "America/New_York" | "America/Phoenix";
  details: string;
  features: IFeature;
}
