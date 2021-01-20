# Dependências

Para prosseguir instale as dependências abaixo.

- [Instalação Docker](https://docs.docker.com/engine/install/)
- [Instalação Docker composer](https://docs.docker.com/compose/install/)

# Iniciando infraestrutura

Para iniciar os contêiners execute o comando:

```bash
docker-compose up -d
```

**Obs.:** Este comando deve ser executado na pasta /docker

Após a execução do comando os contêiners são iniciados e as dependências dos projetos são instaladas.

- crypto_frontend - Interface do projeto, executando na porta 3000.
- crypto_backend - API projeto, executando na porta 3001.
- crypto_workspace - Ambiente com recursos (nodejs, yarn, create-react-app, etc ) que podem ser utilizados no projeto.

**Workspace**

- Para acessar o workspace basta executar o comando

```bash
docker exec -it crypto_workspace bash
```

**Acompanhar logs da API e Frontend**

- É possível acompanhar as mensagens de logs dos contêiners pelo comando

```bash
docker logs -f crypto_api
```

ou

```bash
docker logs -f crypto_frontend
```

- Para sair da visualização aperte `CTRL + C`

**Reiniciar container**

- Este comando pode se utilizando quando o watch não funcionar corretamente

```bash
docker restart crypto_api
```

ou

```bash
docker restart crypto_frontend
```
