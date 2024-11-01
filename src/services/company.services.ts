import { ICompany } from "@/models/compani.models"; 
import { HttpClient } from "@/utils/client-https"; 

export class CompanyService {
    static getAll() {
      throw new Error('Method not implemented.');
    }
    private static httpClient = new HttpClient();

    static async findAll(): Promise<ICompany[]> {
        try {
            const response = await this.httpClient.GET<{ content: ICompany[] }>("company?page=1&size=6");
            console.log(response);
            return response.content || [];
        } catch (error) {
            console.error("Error fetching companies:", error);
            throw error;
        }
    }

    static async destroy(id: string): Promise<void> {
        try {
            await this.httpClient.DELETE(`company/${id}`);
            console.log(`Company with id ${id} deleted successfully.`);
        } catch (error) {
            console.error(`Error deleting company with id ${id}:`, error);
            throw error;
        }
    }

    static async post(company: ICompany): Promise<ICompany> {
        try {
            const response = await this.httpClient.POST<ICompany, ICompany>("company", company);
            return response;
        } catch (error) {
            console.error("Error creating company:", error);
            throw error;
        }
    }

    static async update(company: ICompany): Promise<ICompany> {
        try {
            const response = await this.httpClient.PUT<ICompany, ICompany>(`company/${company.id}`, company);
            return response;
        } catch (error) {
            console.error(`Error updating company with id ${company.id}:`, error);
            throw error;
        }
    }
    
}
