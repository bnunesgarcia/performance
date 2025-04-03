# K6 Load Testing

Este repositório contém um exemplo de teste de carga usando K6 e GitHub Actions.

## Configuração do Workflow do GitHub Actions

O arquivo de workflow do GitHub Actions (`.github/workflows/k6-load-test.yml`) é configurado para executar o teste de carga automaticamente em cada push. Aqui está a configuração do workflow:

## Executando o Teste de Carga

Para executar o teste de carga localmente, siga os passos abaixo:

1. **Instale o K6**:
   - No Windows, você pode instalar o K6 usando o Chocolatey:
     ```sh
     choco install k6 -y
     ```
   - No macOS, você pode usar o Homebrew:
     ```sh
     brew install k6
     ```
   - No Linux, você pode usar o apt:
     ```sh
     sudo apt-get update
     sudo apt-get install -y k6
     ```

2. **Execute o Script de Teste de Carga**:
   ```sh
   k6 run load-test.js
   ```

## Analisando os Resultados

Os resultados do teste de carga serão gerados no arquivo `load-test-result.json`. Você pode analisar os resultados usando ferramentas adicionais ou inspeccionando diretamente o arquivo JSON.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
