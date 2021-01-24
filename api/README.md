# API

- Busca dados na plataforma Coindesk e calcula novos valores (BRL, EUR e CAD) com base nos dados registrados previamente.

# Endpoints

## Login

- API possuí recurso de realizar login, sendo necessário enviar um e-mail valido e uma senha com 6 caracteres, estes dados não são persistidos na base de dados.
  Method: POST
  Endpoint: http://localhost:3001/api/login

```bash
curl --header "Content-Type: application/json" \
--request POST \
--data '{"email":"email@mail.com","password":"123456"}' \
http://localhost:3001/api/login
```

A resposta é um token que deve ser utilizado em outros endpoints

```json
{ "token": "7e9442297331d7b6" }
```

## Atualização de moedas

- É possível atualizar os valores de BRL, EUR e CAD que são utilizados para o cálculo de novos valores.
  Method: PUT
  Endpoint: http://localhost:3001/api/crypto/btc

```bash
curl --header "Content-Type: application/json" \
--header "Authorization: 7e9442297331d7b6" \
--request PUT \
--data '{"currency": "BRL", "value": 5.400}' \
http://localhost:3001/api/crypto/btc
```

A resposta é uma mensagem de sucesso ou erro

```bash
{"message":"Valor alterado com sucesso!"}
```

Ou

```bash
{"message":"Valor inválido"}
```

## Listagem de valores

- Lista valores da Coindesk adicionando os valores de BRL, EUR e CAD.

```bash
curl --header "Content-Type: application/json" \
--header "Authorization: 7e9442297331d7b6" \
--request GET \
http://localhost:3001/api/crypto/btc \
| json_pp -json_opt pretty,canonical
```

## Testes

- Os testes podem ser executados de duas formas

Executando testes diretamente no container da API

```bash
 docker exec -it crypto_api yarn test
```

Execuntando teste no container workspace

1. Acesse o container executando o comando.

```bash
docker exec -it crypto_workspace bash
```

2. Acesse a pasta api.

```bash
cd api
```

3. Execute a switch de testes.

```bash
yarn test:watch

```

ou

```bash
yarn test
```

Para observar as modificações.
