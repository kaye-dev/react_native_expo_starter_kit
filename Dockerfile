FROM node:17.0.0

# pのオプションは--parentsのことで、ディレクトリがない時だけ作成される
RUN mkdir -p /react_native_expo_starter_kit
WORKDIR /react_native_expo_starter_kit
COPY . .
RUN npm install
