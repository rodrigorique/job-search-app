# Use a imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compile a aplicação React
RUN npm run build

# Instale uma imagem leve do servidor para servir os arquivos estáticos
RUN npm install -g serve

# Exponha a porta 3000
EXPOSE 3000

# Comando para rodar o servidor e servir a aplicação
CMD ["serve", "-s", "build", "-l", "3000"]
