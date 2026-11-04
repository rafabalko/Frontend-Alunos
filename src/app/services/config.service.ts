import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private apiUrl!: string;

  loadConfig(): void {
    this.apiUrl = `${window.location.origin}/api`;

    console.log('API configurada:', this.apiUrl);
  }

  getApi(path: string): string {
    if (!this.apiUrl) {
      throw new Error('Configuração ainda não carregada!');
    }

    return `${this.apiUrl}/${path}`;
  }
}
