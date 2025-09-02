# Build stage
FROM node:22.14.0 AS build

# Cria dir para a aplicação
WORKDIR /app

# Instala dependências e constrói a aplicação
COPY package*.json ./
RUN npm install

# Copia todos os arquivos do projeto
COPY . .

# Constrói a aplicação Angular
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Copia os arquivos construídos para o diretório padrão do Nginx
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]