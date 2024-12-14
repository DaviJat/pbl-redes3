# Desenvolvimento de um Sistema de Apostas Descentralizado Utilizando Blockchain e Contratos Inteligentes

** Davi Jatobá Galdino, Gabriel Sena Barbosa **

Universidade Estadual de Feira de Santana (UEFS)
Av. Transnordestina, s/n, Novo Horizonte - BA, 44036-900

ddavijatoba33@gmail.com, gabriel.sena.barbosa@gmail.com

## 1. Introdução

O crescimento das plataformas de apostas online e o avanço das tecnologias de blockchain têm impulsionado a demanda por soluções mais transparentes e seguras no setor. A descentralização dessas tecnologias oferece uma alternativa viável para superar as limitações dos sistemas tradicionais, como a centralização e a manipulação de resultados. Para que as apostas sejam justas, é essencial desenvolver mecanismos que garantam a transparência das transações e a precisão das odds.

Plataformas tradicionais enfrentam desafios como a falta de confiança devido à centralização, que pode levar à manipulação de resultados e à opacidade nos cálculos das odds. Esses problemas comprometem a integridade do setor e afetam a experiência dos usuários. A utilização de blockchain e contratos inteligentes emerge como uma solução eficaz para resolver essas questões, garantindo a imutabilidade dos dados e a transparência no processo de apostas.
Este trabalho propõe o desenvolvimento de uma plataforma descentralizada de apostas baseada em blockchain, onde contratos inteligentes são utilizados para registrar apostas, calcular odds e garantir a segurança das transações. A plataforma proporciona um ambiente mais transparente, seguro e justo para os usuários.

A metodologia adotada no desenvolvimento da plataforma envolveu o uso do framework Truffle e a rede de testes Ganache, com contratos inteligentes escritos em Solidity. A plataforma foi projetada para permitir o registro de apostas, a consulta dos resultados e a realização de transações diretamente na blockchain, com a atualização dinâmica das odds com base no volume de apostas.

Os resultados obtidos mostram que a plataforma é capaz de registrar transações de apostas de forma eficiente e transparente, garantindo a imutabilidade das informações e a justiça no cálculo das odds. Além disso, a solução foi capaz de proporcionar uma maneira eficiente de realizar transações seguras entre os usuários, sem a necessidade de intermediários.

## 2. Fundamentação teórica

A fundamentação teórica do sistema aborda os conceitos que sustentam a proposta de uma plataforma descentralizada de apostas, com ênfase nas tecnologias de blockchain e contratos inteligentes. A utilização dessas tecnologias oferece uma solução para os problemas de centralização e manipulação de dados que afetam as plataformas de apostas tradicionais. Além disso, é explorada a aplicação dessas tecnologias no contexto de sistemas distribuídos e sua relevância para a criação de ambientes mais seguros e transparentes.

### 2.1 Blockchain

A blockchain é uma tecnologia de registro distribuído que armazena informações de maneira segura e transparente. Cada transação realizada é registrada em blocos encadeados de forma imutável, tornando impossível alterar ou excluir um dado sem ser detectado. A blockchain é a base para qualquer sistema descentralizado, como o proposto para as apostas online, já que garante a integridade dos dados e a eliminação da necessidade de intermediários. O uso de blockchain em sistemas de apostas descentralizadas assegura que todas as transações de apostas, seus valores e os resultados dos eventos sejam registrados de forma permanente e acessível para todos os usuários, sem a possibilidade de manipulação ou fraude. A blockchain oferece descentralização, permitindo que múltiplos participantes (nós) validem e compartilhem informações sem depender de uma autoridade central. Cada transação é registrada em um "bloco", e esses blocos são encadeados de forma segura, formando uma cadeia de blocos (daí o nome "blockchain").

### 2.2 Contratos Inteligentes (Smart Contracts)

Os contratos inteligentes são programas auto-executáveis que, uma vez ativados, executam automaticamente suas cláusulas com base nas condições preestabelecidas. São fundamentais para o funcionamento de plataformas descentralizadas, pois automatizam processos sem a necessidade de um intermediário. No contexto do sistema de apostas, os contratos inteligentes são responsáveis por registrar as apostas dos usuários, calcular as odds dinâmicas e distribuir os prêmios de forma justa e transparente.

A principal plataforma para a criação e execução de contratos inteligentes é a Ethereum, que permite programar contratos utilizando a linguagem Solidity. Esses contratos são executados na Ethereum Virtual Machine (EVM), uma máquina virtual que processa as instruções codificadas nos contratos. A natureza descentralizada dos contratos inteligentes garante que as regras do sistema sejam seguidas sem a necessidade de confiança em uma entidade central.

### 2.3 Ganache 

O Ganache é uma ferramenta de desenvolvimento para Ethereum que simula uma blockchain local para testar e desenvolver contratos inteligentes de forma rápida e segura. Ele permite que os desenvolvedores criem e testem seus contratos em um ambiente controlado, sem precisar interagir com uma rede pública ou incorrer em custos de transação. O Ganache oferece tanto uma versão de interface gráfica (Ganache UI) quanto uma versão de linha de comando (Ganache CLI), permitindo maior flexibilidade para os desenvolvedores.

No contexto do sistema de apostas descentralizado, o Ganache foi utilizado para simular transações e validar o funcionamento dos contratos inteligentes. Ele permite testar o comportamento da aplicação, verificar a execução correta dos contratos, simular falhas e otimizar o sistema antes de movê-lo para uma rede pública de blockchain.

### 2.4 Truffle

O Truffle é um framework de desenvolvimento para Ethereum que facilita a criação, teste e implantação de contratos inteligentes. Ele oferece uma suíte de ferramentas que automatizam o processo de desenvolvimento, proporcionando uma integração perfeita com a Ethereum Virtual Machine (EVM) e a rede Ganache. O Truffle oferece:
- Truffle Suite: Um conjunto de ferramentas que inclui o Truffle (para gerenciamento de contratos), o Ganache (para teste local), e o Drizzle (para integração front-end).
- Gerenciamento de contratos: O Truffle facilita o processo de compilar, migrar e interagir com contratos inteligentes, tornando o desenvolvimento mais ágil.
- Testes automatizados: A plataforma oferece suporte a testes de contratos inteligentes em diversos cenários, permitindo validar o funcionamento do sistema antes da implantação em uma rede pública.
Com o Truffle, foi possível desenvolver e testar a plataforma de apostas descentralizada de forma eficiente, validando a lógica dos contratos inteligentes e realizando os testes necessários para garantir a segurança e a precisão do sistema.

### 2.5 Solidity

Solidity é a principal linguagem de programação utilizada para escrever contratos inteligentes na plataforma Ethereum. Baseada em JavaScript, Python e C++, Solidity permite que os desenvolvedores escrevam contratos inteligentes de maneira intuitiva e poderosa. A linguagem é compilada para bytecode, que é executado pela Ethereum Virtual Machine (EVM).

Solidity foi fundamental para a implementação do sistema de apostas descentralizado. Os contratos inteligentes responsáveis por registrar as apostas, calcular as odds dinâmicas e distribuir os prêmios foram desenvolvidos em Solidity. A linguagem oferece funcionalidades como tipos de dados dinâmicos, controle de fluxo e manipulação de eventos, que são essenciais para garantir a lógica do sistema e sua integração com a blockchain.

### 2.6 Descentralização e Segurança

A descentralização é um conceito central na arquitetura do sistema, pois elimina a necessidade de uma autoridade central que controle e valide todas as transações. Em um sistema descentralizado, todas as transações são registradas e validadas por uma rede de nós participantes, o que aumenta a resistência a falhas e a censura.

A segurança do sistema é garantida pela própria blockchain, que usa criptografia para assegurar a integridade das transações. Cada transação registrada na blockchain é criptograficamente assinada, e qualquer tentativa de manipulação de um bloco exige a reescrita de toda a cadeia subsequente, o que torna esse tipo de ataque altamente impraticável.

Além disso, a imunidade à fraude é uma característica importante de sistemas baseados em blockchain, pois a natureza distribuída da rede dificulta a manipulação dos dados. Qualquer tentativa de alterar os registros de apostas ou resultados requereria o controle de uma grande parte da rede, o que torna esses sistemas mais resilientes a fraudes do que os sistemas centralizados tradicionais.

### 2.7 Odds Dinâmicas

As odds dinâmicas referem-se ao ajuste dos valores das apostas com base no comportamento do mercado, ou seja, o número de apostadores em cada possível resultado de um evento. A fórmula de cálculo para as odds leva em consideração o número de apostas em cada alternativa, de forma que as odds se ajustem automaticamente para equilibrar os riscos e as recompensas, garantindo que o sistema seja lucrativo para os administradores e justo para os apostadores.
A implementação de odds dinâmicas no sistema envolve a coleta de dados em tempo real sobre as apostas realizadas e a recalibração das odds sempre que um novo apostador realiza uma aposta. A lógica para esse cálculo é definida nos contratos inteligentes, que executam o ajuste de forma transparente e automática, garantindo a imparcialidade e confiabilidade do sistema.

### 2.8 Sistemas Distribuídos

O conceito de sistemas distribuídos é fundamental para a operação de plataformas como a proposta. Em sistemas distribuídos, diferentes partes do sistema (os nós) podem operar de maneira autônoma, mas de forma coordenada, para atingir um objetivo comum. No contexto do sistema de apostas descentralizado, os nós da rede Ethereum operam de forma independente, mas colaboram para validar e registrar transações na blockchain.

Essa característica distribui a responsabilidade pela manutenção e validação da plataforma entre vários participantes, o que não apenas aumenta a segurança e a resistência a falhas, mas também permite que o sistema opere sem a necessidade de uma autoridade central. A utilização de contratos inteligentes em um sistema distribuído oferece ainda mais vantagens, pois esses contratos são executados por todos os nós na rede de forma sincronizada e imutável.

### 2.9 Escalabilidade e Desempenho

Um dos maiores desafios de qualquer plataforma baseada em blockchain é a escalabilidade, que se refere à capacidade do sistema de lidar com um grande volume de transações simultâneas sem comprometer o desempenho. Em plataformas como o Ethereum, a escalabilidade é um desafio devido ao seu modelo de consenso baseado em Proof of Work (PoW), que pode ser lento e dispendioso em termos de recursos computacionais.

Para contornar essas limitações, várias soluções de escalabilidade, como sharding, Layer 2 (ex. Optimistic Rollups, zk-Rollups) e migração para Proof of Stake (PoS), estão sendo desenvolvidas. Essas abordagens visam melhorar a capacidade do sistema de processar transações de forma mais eficiente, mantendo a segurança e descentralização.

## 2. Metodologia Utilizada

### 2.1 Arquitetura RESTful
O sistema foi implementado com uma arquitetura RESTful, conforme exigido no enunciado do problema, para garantir a comunicação entre os servidores das companhias aéreas de forma interoperável e segura. O uso do padrão REST é adequado para sistemas distribuídos como este devido à sua capacidade de facilitar transmissões de dados stateless (sem estado), o que permite que cada requisição seja autossuficiente e contenha todas as informações necessárias para ser processada, reduzindo a necessidade de manutenções complexas de sessão.
Consulta de Trechos: Cada servidor expõe um endpoint para consultar os trechos de viagens disponíveis. Esse endpoint é configurado para aceitar parâmetros de origem e destino, retornando uma lista dos trechos possíveis entre essas localidades. Para ampliar as possibilidades de conexão entre as rotas, o sistema também consulta trechos em servidores conveniados.
Compra de Passagem: O endpoint de compra permite que o cliente selecione e reserve um trecho disponível, desde que ele ainda possua passagens. Caso a compra seja realizada com sucesso, o servidor bloqueia temporariamente a rota para garantir a exclusão mútua.
Atualização de Estado: Sempre que uma compra é realizada, o sistema atualiza o estado dos trechos no servidor que gerencia aquele trecho específico. Isso assegura que outros clientes não possam reservar o mesmo trecho até que ele esteja liberado novamente.

### 2.2 Controle de Concorrência com o Algoritmo de Lamport
A sincronização de transações entre os servidores foi garantida por meio do Algoritmo de Lamport, um método amplamente utilizado para ordenação de eventos em sistemas distribuídos. Esse algoritmo é fundamental para garantir que, mesmo em um ambiente descentralizado, a ordem de chegada das requisições seja respeitada. Ao adotar o Algoritmo de Lamport, cada servidor mantém controle local das requisições de forma eficiente, o que evita a necessidade de um coordenador central ou de uma comunicação excessivamente complexa entre os servidores.
As principais etapas do controle de concorrência implementado são:
Relógio Lógico (Timestamp): Cada servidor possui um relógio lógico que incrementa a cada nova requisição. Esse timestamp é usado para registrar a ordem de chegada das requisições, garantindo que a prioridade para acessar um recurso específico seja sempre dada à requisição com o menor timestamp.
Fila de Requisições: Cada servidor enfileira suas requisições de compra em uma fila que respeita a ordem dos timestamps. A fila é verificada constantemente, de modo que a próxima requisição a ser atendida é sempre a de menor timestamp, assegurando a sequência correta das operações.
Exclusão Mútua: Durante o processamento de uma compra, o trecho específico é bloqueado temporariamente, impedindo que outras requisições modifiquem seu estado até a conclusão da operação. Esse mecanismo evita condições de corrida e assegura que o cliente que iniciou a compra primeiro mantenha a preferência sobre o recurso.
Optou-se pelo Algoritmo de Lamport em vez de outros métodos de exclusão mútua, como o Token Ring, por algumas razões específicas para este sistema distribuído. No Token Ring, a comunicação entre servidores ocorre em uma estrutura de "anel", onde um token é passado sequencialmente entre os nós; o servidor que possui o token tem permissão para acessar o recurso. Embora o Token Ring seja eficiente para pequenos sistemas onde todos os servidores estão conectados em rede de maneira estável, ele pode ser menos adequado para sistemas com comunicação intermitente ou alto dinamismo.
Ao contrário do Token Ring, o Algoritmo de Lamport:
Elimina a dependência de um token físico: Em um sistema descentralizado como este, a perda do token ou uma falha de comunicação poderia interromper as operações no modelo Token Ring.
Facilita a flexibilidade na rede: No Algoritmo de Lamport, cada servidor gerencia suas próprias requisições sem precisar esperar pela passagem de um token, o que torna o sistema mais robusto e adaptável a falhas individuais de servidores.
Escala melhor para ambientes distribuídos: A capacidade de Lamport de operar com clocks lógicos permite que novos servidores sejam adicionados com mínima reconfiguração, enquanto o Token Ring exigiria a adaptação da estrutura do "anel" para incluir novos servidores.
Assim, o Algoritmo de Lamport foi escolhido para este sistema devido à sua eficiência na coordenação de concorrência em ambientes descentralizados e à maior robustez diante de falhas, características que tornam esse método ideal para o controle de concorrência no contexto de um sistema de reserva de passagens distribuído.

### 2.3 Isolamento de Servidores com Docker
Cada servidor é encapsulado em um container Docker, isolando seu ambiente e facilitando a simulação de um sistema distribuído. Essa abordagem permite replicar servidores facilmente, possibilitando uma infraestrutura de testes consistente e escalável.

### 2.4 Principais Funcionalidades Implementadas
A seguir, detalhamos as funcionalidades implementadas no sistema, cada uma desempenhando um papel crucial na operação do sistema de reserva distribuído:
- **Consulta de Trechos:**
- - Endpoint /trechos: Cada servidor permite a consulta dos trechos disponíveis, retornando as rotas que atendem ao filtro de origem e destino especificado pelo cliente. A função fetch_trechos_from_servers() no código realiza a agregação dos trechos de todos os servidores conectados, permitindo que o sistema ofereça um itinerário completo, integrando as rotas disponíveis entre os servidores. A função create_graph() converte os trechos em um grafo direcionado, onde as rotas entre diferentes cidades são representadas por arestas. Esse grafo permite que a aplicação busque trajetos completos, compondo viagens com trechos de diferentes companhias.
- **Compra de Passagem:**
- - Endpoint /comprar: A funcionalidade de compra realiza uma série de verificações para assegurar a disponibilidade do trecho antes de concluir a operação. Para cada trecho na rota selecionada pelo cliente, o sistema verifica a disponibilidade de passagens e adquire um lock temporário, evitando que outros clientes possam reservá-lo simultaneamente. Após a verificação de todos os trechos e a conclusão da compra, a função request_purchase() solicita a atualização dos servidores responsáveis por cada trecho.
- **Atualização de Trechos:**
- - Endpoint /update_trecho: Quando uma compra é realizada, a quantidade de passagens disponíveis para o trecho é decrementada e o estado atualizado é salvo no servidor local. Isso é feito por meio da função update_trecho(), que também remove o trecho do sistema se as passagens estiverem esgotadas, evitando que outros clientes tentem reservar uma rota inexistente.
- **Exclusão Mútua e Liberação de Locks:**
- - Endpoint /release: Após a conclusão de uma compra ou em caso de erro, o servidor libera os locks adquiridos para os trechos reservados. A função release_access() é responsável por essa liberação, removendo a requisição da fila e enviando uma notificação de liberação para os demais servidores. Esse mecanismo de liberação permite que novos clientes possam acessar a rota, mantendo a disponibilidade do sistema de forma eficiente.

### 2.5 Estrutura de Testes
Um arquivo de teste teste_exclusao_mutua.py foi implementado para verificar a validade do sistema em condições de concorrência. Esse teste simula múltiplos clientes tentando comprar o mesmo trecho simultaneamente, verificando a capacidade do sistema de respeitar o limite de passagens e de aplicar corretamente a exclusão mútua. O teste:
Inicia múltiplas threads representando clientes diferentes;
Cada thread realiza uma tentativa de compra para o mesmo trecho;
Registra os resultados, incluindo o número de compras bem-sucedidas e falhas.
Com isso, o sistema foi validado para operar conforme esperado, evitando conflitos e garantindo que o número de compras bem-sucedidas corresponde ao limite de passagens disponíveis.

## 3. Discussão e Resultados

### 3.1 Resultados dos Testes
O teste de exclusão mútua (teste_exclusao_mutua.py) foi conduzido para avaliar como o sistema lida com várias tentativas de compra simultâneas para o mesmo trecho. Os resultados demonstraram que o sistema respeita o número máximo de passagens disponíveis: das 12 tentativas de compra simuladas, 10 foram concluídas com sucesso, enquanto as demais foram bloqueadas quando as passagens se esgotaram. Esse resultado confirma que o sistema consegue gerenciar de maneira eficaz a concorrência e evitar reservas duplicadas, garantindo que cada trecho só seja vendido até o limite permitido.
### 3.2 Casos de Erro e Tratamento de Conflitos
O sistema foi projetado para lidar de forma confiável com falhas nas reservas. Quando uma tentativa de compra não é concluída, seja por falta de passagens ou por outros motivos, o trecho é rapidamente liberado para que outros clientes possam tentar reservá-lo. Esse mecanismo assegura que falhas temporárias ou erros de transação não deixem o trecho bloqueado de forma permanente, o que permite uma experiência de uso estável e contínua para todos os clientes.
### 3.3 Desempenho e Escalabilidade
A arquitetura do sistema facilita a adição de novos servidores e permite que o sistema cresça conforme aumenta o número de companhias e de clientes. Esse modelo modular ajuda a manter um desempenho consistente, mesmo com um volume crescente de transações. Com essa estrutura, o sistema se mostra bem adaptado para suportar uma expansão gradual e confiável, à medida que novas companhias se conectam à rede.
### 3.4 Limitações e Melhorias Futuras
Um ponto a ser melhorado é a questão da latência, que pode ser percebida quando há um grande volume de requisições simultâneas ou quando os servidores estão geograficamente distantes. Como aprimoramento futuro, o sistema poderia incluir um monitoramento mais detalhado das transações e do uso do sistema, o que ajudaria na auditoria e facilitaria ajustes para reduzir possíveis atrasos. Esse tipo de otimização garantiria que o sistema permaneça ágil e confiável à medida que a demanda aumente.

## 4. Conclusão
### 4.1 Resumo dos Pontos Principais
Este projeto demonstrou a viabilidade de um sistema distribuído de reserva de trechos entre companhias aéreas, com controle de concorrência e preservação da preferência de reserva. A arquitetura RESTful e o isolamento em containers Docker conferem ao sistema a flexibilidade necessária para operar em uma rede descentralizada, proporcionando uma solução robusta e escalável.

### 4.2 Validade da Solução
Os testes comprovaram que o sistema é capaz de lidar com múltiplas requisições simultâneas, mantendo a exclusão mútua e a prioridade de atendimento ao cliente que iniciou a compra primeiro. Essa abordagem se mostrou confiável e pronta para aplicação em um ambiente real, garantindo que a concorrência entre clientes seja resolvida de forma justa e eficiente.

### 4.3 Aprendizados em Programação e Redes
O desenvolvimento deste projeto proporcionou um aprendizado significativo sobre programação distribuída e redes, especialmente na integração de serviços independentes em um sistema coeso. A implementação do Algoritmo de Lamport ajudou a compreender na prática a importância de técnicas de controle de concorrência em ambientes distribuídos, onde a ausência de um servidor central exige uma coordenação cuidadosa entre múltiplos nós. Além disso, o uso de contêineres Docker reforçou conhecimentos em deploy de aplicações e gestão de dependências, essenciais para sistemas escaláveis e isolados. A arquitetura RESTful possibilitou uma melhor compreensão dos desafios e vantagens da comunicação sem estado, permitindo que cada servidor funcione de forma independente, mas integrado com os demais.
A configuração dos servidores de forma distribuída também destacou a importância da estabilidade da rede e dos protocolos de comunicação. Compreender a maneira como os dados trafegam entre servidores e lidar com potenciais atrasos ou falhas de rede aumentou a familiaridade com redes de computadores e o impacto da latência em aplicações reais. Esse aprendizado prático forneceu uma visão aprofundada dos desafios comuns em sistemas distribuídos e da importância de uma boa arquitetura de rede para evitar gargalos e conflitos.

## 5. Referências
PYTHON Software Foundation. Python documentation: socket — Low-level networking interface. Disponível em: https://docs.python.org/3/library/socket.html. Acesso em: out. 2024.

Grinberg, M. Flask Documentation. Flask, Pallets Projects, https://flask.palletsprojects.com/en/latest/. Acesso em: out. 2024.

DOCKER INC. O que é Docker?. Disponível em: https://www.docker.com/what-docker. Acesso em: out. 2024.

FABRICIO VERONEZ. Docker do zero ao compose: Parte 01. Disponível em: https://www.youtube.com/watch?v=GkMJJkWRgBQ. Acesso em: out. 2024.

PYTHON Software Foundation. pickle — Python object serialization. Disponível em: https://docs.python.org/3/library/pickle.html. Acesso em: out. 2024.

RODRIGUES, Douglas. A Evolução da Internet: Desde os Primórdios até os Dias Atuais. YouTube, 28 out. 2023. Disponível em: https://www.youtube.com/watch?v=DaPHo_VFccg. Acesso em: nov. 2024.

RODRIGUES, Douglas. Inovações Tecnológicas: O Futuro das Comunicações Digitais. YouTube, 29 out. 2023. Disponível em: https://www.youtube.com/watch?v=EmcWq_DvqcA. Acesso em: nov. 2024.

FERNANDES, Luiz Gustavo Leão. Algoritmos Distribuídos. Pontifícia Universidade Católica do Rio Grande do Sul. Disponível em: https://www.inf.pucrs.br/gustavo/disciplinas/ppd/material/slides-algos_distr-novo.pdf. Acesso em: nov. 2024.
