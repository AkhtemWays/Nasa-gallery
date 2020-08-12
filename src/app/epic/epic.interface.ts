export interface IEarthData {
  date: Date;
  image: string;
  centroid_coordinates: {
    lon: number;
    lat: number;
  };
  dscovr_coordinates: {
    x: number;
    y: number;
    z: number;
  };
  year: string;
  month: string;
  day: string;
}
