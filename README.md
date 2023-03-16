# **Ecomm**

Projeto de Ecommerce criado durante o programa LevelUp da Alura.

## **Instalação das Dependências**

Use o gerenciador de pacotes [*npm*](https://www.npmjs.com/) para realizar a instalação das dependências em cada um dos serviços deste projeto.

    npm install

## **The Twelve-Factor App**

Confira abaixo quais fatores da metodologia foram implementados neste projeto.

Para saber mais sobre a metodologia [The Twelve-Factor App](https://12factor.net/pt_br/)

#### **I. Base de Código**
O fator de Base de Código implica na necessidade de utilização de algum aplicativo para o controle de versões do código, como o Git, Mercurial ou Subversion. Além disso, uma mesma base de código precisa poder disponibilizar diversos deploys, como por exemplo homologação, desenvolvimento, testes e produção.

Neste projeto utilizamos o Git como ferramenta de versionamento.

#### **II. Dependências**
O fator de Dependências implica na declaração de forma explícita e também em isolar as dependências do código. Para quem trabalha com Javascript existe por exemplo o [*npm*](https://www.npmjs.com/), para quem trabalha com Ruby existe o *Gemfile* para declaração e *bundle exec* para o isolamento.

Neste projeto utilizamos o [*npm*](https://www.npmjs.com/) para o controle das dependências e as mesmas podem ser visualizadas dentro dos arquivos "package.json" e "package-lock.json".

#### **II. Configurações**
O fator de Configurações implica em armazenar as configurações dentro do ambiente. As configurações são formas de acessar serviços externos, como credênciais, URLs, e valores que mudam de deploy em deploy, como por exemplo o hostname de um deploy específico. Ou seja, tudo que muda de um ambiente para o outro. Essas configurações podem ser preenchidas dentro de variáveis de ambiente, que devem ficar em arquivos .env de cada um dos serviços. Esses arquivos são suportados pela biblioteca [*dotenv*](https://www.npmjs.com/package/dotenv) e não são versionados para a proteção de dados confidenciais.

**Atualmente este projeto não armazena as variáveis de ambiente**

#### **IV. Serviços de Apoio**
O fator de Serviços de Apoio implica na tratativa dos serviços como recursos anexados, como por exemplo bancos de dados, sistemas de cache, servidores SMTP, precisam ser completamente independentes do código e o código independente destes serviços. Caso um banco de dados MYSQL seja utilizado e precise trocar para um PostgreSQL isso precisará ser transparente para o sistema, mudando apenas as funções SQL porém a lógica dentro do sistema permanecerá a mesma.

Neste projeto utilizamos ORM, ODM e configurações através de URL ou credenciais de configuração.

#### **V. Construa, lance, execute**
O fator Construa, lance, execute implica na separação dos processos de construção do código, lançamento de uma versão e execução da aplicação em um ambiente isolado. Ao separar esses processos é possível garantir que a aplicação possa ser facilmente construída, lançada e executada em diferentes ambientes, sem a necessidade de modificar o código da aplicação. Isso permite uma maior flexibilidade e portabilidade.

Neste projeto utilizamos o Docker para conteinerizar e orquestrar os serviços, permitindo, assim, uma maior facilidade para a flexibilização e portabilidade da aplicação.

#### **VI. Processos**
O fator Processos implica na execução da aplicação em um ou mais processos sem estados. Para isso, os processos são armazenados em Serviços de Apoio.

Neste projeto utilizamos, como exemplo, a autenticação através de tokens JWT e também o armazenamento em serviços de apoio como o Redis.

#### **VII. Vínculo de Portas**
O fator Vínculo de Portas implica na exposição de portas de rede de um aplicativo como variáveis de ambiente configuráveis, em vez de configurar essas portas diretamente no código do aplicativo.

Neste projeto utilizamos as variáveis de ambiente para definição das portas, que também estão presentes no docker-compose.yml.

#### **VIII. Concorrência**
O fator de Concorrência implica na capacidade de uma aplicação lidar com várias solicitações simultâneas sem comprometer o seu desempenho. Podendo ser alcançada através do uso de threads, balanceamento de carga, escalabilidade horizontal, entre outras formas. 


**Atualmente este projeto não atende aos requisitos do fator de concorrência**

#### **IX. Descartabilidade**
O fator de Descartabilidade implica na capacidade da aplicação ser descartável, ou seja, capaz de ser iniciada ou interrompida rapidamente. 

Neste projeto utilizamos o Docker e ele facilita este processo.

#### **X. Paridade entre desenvolvimento e produção**
O fator de Paridade entre desenvolvimento e produção implica nos ambientes de desenvolvimento e produção serem o mais semelhantes possível. 

Neste projeto utilizamos o Docker para orquestrar e conteinerizar a aplicação, mantendo, assim, uma maior proximidade entre os ambientes.

#### **XI. Logs**
O fator Logs implica na utilização de um fluxo de logs registrando todas as mensagens importantes da aplicação e enviando-as para a saída padrão.

Neste projeto direcionamos todas as mensagens de log para a saída padrão e separando-as entre mensagens e erros.

#### **XII. Processos administrativos**
O fator de Processos administrativos implica na automação e gerenciamento dos processos de execução da aplicação. Este fator tem como objetivo permitir que a administração do aplicativo seja executada de forma automática, para que seja possível gerenciar e controlar o aplicativo remotamente.

**Atualmente este projeto não atende aos requisitos do fator de Processos administrativos**