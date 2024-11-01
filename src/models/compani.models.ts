import { IVacants } from "./vacantes.models ";

export interface ICompany {
  id: string;
  name: string;
  location: string;
  contact: string;
  vacants: IVacants[]; 
}
