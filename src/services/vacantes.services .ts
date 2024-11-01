import { IVacants } from "@/models/vacantes.models "; 
import { HttpClient } from "@/utils/client-https"; 

export class VacantsService {
    private static httpClient = new HttpClient();

    static async findAll(): Promise<IVacants[]> {
        try {
            const response = await this.httpClient.GET<{ content: IVacants[] }>("vacants?page=1&size=6");
            return response.content || [];
        } catch (error) {
            console.error("Error fetching vacancies:", error);
            throw error;
        }
    }

    static async destroy(id: string): Promise<void> {
        try {
            await this.httpClient.DELETE(`vacants/${id}`);
            console.log(`Vacant with id ${id} deleted successfully.`);
        } catch (error) {
            console.error(`Error deleting vacancy with id ${id}:`, error);
            throw error;
        }
    }

    static async post(vacant: IVacants): Promise<IVacants> {
        this.validateVacant(vacant);  

        try {
            console.log("Datos de la vacante a enviar:", vacant);
            const response = await this.httpClient.POST<IVacants, IVacants>("vacants", vacant);
            return response;
        } catch (error) {
            const errorMessage = this.handleFetchError(error);
            console.error(errorMessage);
            throw new Error(errorMessage);
        }
    }

    static async update(vacants: IVacants): Promise<IVacants> {
        this.validateVacant(vacants);  

        try {
            const response = await this.httpClient.PUT<IVacants, IVacants>(`vacants/${vacants.id}`, vacants);
            return response;
        } catch (error) {
            console.error(`Error updating vacancy with id ${vacants.id}:`, error);
            throw error;
        }
    }

    private static handleFetchError(error: unknown): string {
        if (error instanceof Error) {
            return error.message;
        }

        if (typeof error === 'object' && error !== null && 'message' in error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (error as any).message;
        }

        return 'Error desconocido al realizar la solicitud.';
    }

    private static validateVacant(vacant: IVacants): void {
        if (!vacant.title || !vacant.description || !vacant.companyId) {
            throw new Error("Faltan campos requeridos: title, description, y companyId son obligatorios.");
        }

        if (vacant.status !== "ACTIVE" && vacant.status !== "INACTIVE") {
            throw new Error("El estado debe ser 'ACTIVE' o 'INACTIVE'.");
        }

      
    }
}
