# CURSO DE TYPESCRIPT

## Instalação do Typescript global

npm install -g typescript

## Instalar apenas no projeto

npm install typescript

### Estrutura de um projeto com typescript

Pastas:    
    
    Criar uma pasta public e outra src:

    Dentro da pasta "public" ficam os arquivos de acesso publico: index.html, script.js etc. 
    
    Dentro da pasta "src" ficam os arquivos de desenvolvimento.

## Como previnir erros

    tsc script.ts --noEmitOnError 
    - Não emitir o arquivo com error. -
    - Para executar este comando tem que estar dentro da pasta ou informar a pasta antes do arquivo no comando ex: tsc src/script.ts