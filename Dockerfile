FROM node:18.0.0

# pのオプションは--parentsのことで、ディレクトリがない時だけ作成される
RUN mkdir -p /react_native_expo_starter-kit
WORKDIR /react_native_expo_starter-kit
COPY . .
RUN npm install
