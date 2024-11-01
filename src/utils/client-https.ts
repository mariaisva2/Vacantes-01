const defaultBaseUrl = 'https://vacantsbackendgates-production.up.railway.app/api/v1/';

export class HttpClient {
    private baseUrl: string;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || defaultBaseUrl;
    }

    async GET<T>(url: string): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers,
            method: "GET",
            cache: "no-store"
        });
        return this.handleResponse<T>(response);
    }

    async DELETE(url: string): Promise<void> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers,
            method: "DELETE",
        });
        await this.handleResponse<void>(response);
    }

    async POST<T, B>(url: string, body: B): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers,
            method: "POST",
            body: JSON.stringify(body),
        });
        return this.handleResponse<T>(response);
    }

    async PUT<T, B>(url: string, body: B): Promise<T> {
        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers,
            method: "PUT",
            body: JSON.stringify(body),
        });
        return this.handleResponse<T>(response);
    }

    private async getHeader() {
        return {
            "Content-Type": "application/json",
        };
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Ocurrió un error en la petición");
        }
        if (response.status === 204) {
            return {} as T; 
        }

        try {
            return await response.json();
        } catch {
            return {} as T; 
        }
    }
}
