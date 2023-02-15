export const environment = {
    production: false,
    apiBaseUrl:
        (window as any)['env']['apiBaseUrl'] || 'http://localhost:8081/api/'
};
