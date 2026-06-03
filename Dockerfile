# 1. Base image select karein
FROM node:18-alpine

# 2. Container ke andar folder banayein
WORKDIR /app

# 3. Dependency files copy karein
COPY package*.json ./

# 4. Packages install karein
RUN npm install

# 5. Baqi saara code copy karein
COPY . .

# 6. Port 3000 ko open karein
EXPOSE 3000

# 7. App chalane ki command
CMD ["node", "server.js"]