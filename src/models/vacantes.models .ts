export interface IVacants {
  id: string;
  title: string;
  description: string;
  status: 'ACTIVE' | 'INACTIVE';
  companyId: string; 
}
