# Desenvolvimento de um Sistema de Apostas Descentralizado Utilizando Blockchain e Contratos Inteligentes

**Davi Jatobá Galdino, Gabriel Sena Barbosa**

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
- **Truffle Suite:** Um conjunto de ferramentas que inclui o Truffle (para gerenciamento de contratos), o Ganache (para teste local), e o Drizzle (para integração front-end).
- **Gerenciamento de contratos:** O Truffle facilita o processo de compilar, migrar e interagir com contratos inteligentes, tornando o desenvolvimento mais ágil.
- **Testes automatizados:** A plataforma oferece suporte a testes de contratos inteligentes em diversos cenários, permitindo validar o funcionamento do sistema antes da implantação em uma rede pública.

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

## 3. Metodologia Utilizada

A metodologia utilizada no desenvolvimento do sistema de apostas descentralizado baseia-se na aplicação dos conceitos de blockchain, contratos inteligentes e sistemas distribuídos. O objetivo foi criar uma plataforma que seja segura, transparente e eficiente, utilizando uma arquitetura que aproveite as vantagens de descentralização e imutabilidade oferecidas pelo Ethereum. A seguir, descrevem-se os principais conceitos, algoritmos, técnicas e métodos aplicados na construção do sistema.

### 3.1. Arquitetura do Sistema

O sistema de apostas descentralizado foi projetado com uma arquitetura cliente-servidor, onde os clientes interagem diretamente com a blockchain por meio de contratos inteligentes. Não há um servidor centralizado que gerencia as apostas ou os cálculos das odds; todo o processamento é feito de maneira distribuída e registrada de forma imutável na blockchain. Isso garante a transparência e a segurança, pois qualquer alteração nos dados requereria consenso entre os nós da rede.

A arquitetura do sistema pode ser dividida nas seguintes camadas:

- **Camada de Interface (Cliente):** Embora a interface de usuário não seja o foco do relatório, ela serve como um meio para que os usuários interajam com o sistema. Ela se comunica com a camada de contratos inteligentes na blockchain, enviando transações e recuperando dados sobre apostas, odds e resultados.
- **Camada de Contratos Inteligentes:** Esta camada contém a lógica de negócios que gerencia as apostas, cálculos das odds e distribuições dos prêmios. Os contratos inteligentes são programados em Solidity e executados na Ethereum Virtual Machine (EVM), que é responsável pela execução segura e determinística do código.
- **Camada de Blockchain:** Esta camada é composta pela rede Ethereum, que registra todas as transações de apostas de forma imutável. A blockchain garante a integridade dos dados, impedindo qualquer alteração ou manipulação.

### 3.2. Contratos Inteligentes (ChainCodes) e algoritmos

Os contratos inteligentes, ou chaincodes são o coração do sistema, sendo responsáveis por registrar as apostas, calcular as odds e garantir que as transações sejam realizadas de acordo com as regras predefinidas. Cada evento de aposta é representado por um contrato inteligente, onde são armazenadas informações sobre os apostadores, os valores apostados e os resultados possíveis.

### 3.3. Algoritmo de Cálculo das Odds Dinâmicas

O cálculo das odds dinâmicas é feito com base no número de apostadores e no valor total apostado em cada resultado. O algoritmo ajusta as odds para garantir que, independentemente de qual opção seja escolhida pelos apostadores, a casa (ou a plataforma) mantenha um equilíbrio financeiro. A fórmula básica para o cálculo das odds é a seguinte:

Odd_i = (Soma_total / Soma_opção_i) x Odd_base

Onde:
- Odd_i é a odd final para a opção i (ex: “cara” ou “coroa”).
- Soma_total é o valor total apostado em todas as opções do evento.
- Soma_opção_i é o valor apostado na opção i
- Odd_base é o fator inicial de odds, ajustável dependendo do tipo de evento.

### 3.4. Métodos Utilizados

O sistema implementa a comunicação entre o cliente e os contratos inteligentes por meio de uma biblioteca chamada Web3.js, que permite interagir com a blockchain Ethereum via JavaScript. Através dessa biblioteca, o cliente pode enviar transações de apostas para a blockchain, consultar o status do evento e verificar os resultados das apostas.

- **Interação com a Blockchain:** Para garantir que as transações sejam registradas de maneira eficiente e segura, as interações entre o cliente e a blockchain são feitas por meio de uma carteira digital (wallet), que gerencia as chaves privadas e públicas dos usuários. As transações, como a realização de uma aposta ou o saque de um prêmio, são assinadas digitalmente pelo usuário e enviadas para a rede Ethereum.
- **Validação das Apostas e Cálculo das Odds:** Sempre que uma aposta é realizada, o contrato inteligente verifica a quantidade de tokens (ou moeda) apostada e registra a informação. O contrato inteligente, por sua vez, ajusta as odds com base na fórmula mencionada acima e garante que as apostas sejam distribuídas de maneira justa entre as opções do evento.
- **Distribuição dos Prêmios:** Após o evento ser encerrado, o contrato inteligente é responsável por calcular os vencedores e distribuir os prêmios de forma automática. Isso é feito pela verificação do resultado e a execução de uma função que transfere os prêmios aos usuários que apostaram corretamente.

### 3.5. Segurança e Imutabilidade

A segurança do sistema é garantida pela blockchain e pelos contratos inteligentes, que são auditáveis e não podem ser modificados sem consenso. O uso de hashing criptográfico e assinatura digital nas transações também assegura que as apostas e os resultados não possam ser manipulados.

### 3.6. Testes e Validação

O sistema foi desenvolvido e testado utilizando o ambiente local de Ganache para simular a blockchain. Com isso, foi possível verificar o correto funcionamento dos contratos inteligentes, o cálculo das odds e a execução das transações. Além disso, a plataforma foi submetida a testes para avaliar a segurança das interações, a correção dos cálculos e a integridade das transações registradas na blockchain.

## 4. Resultados

Na execução deste sistema, foram realizados diversos testes e experimentos para avaliar o desempenho, a funcionalidade e a segurança da plataforma. Os testes cobriram diferentes aspectos do sistema, incluindo o registro de apostas, o cálculo das odds dinâmicas, a distribuição dos prêmios e a performance geral do sistema na blockchain. A seguir, detalhamos o que foi realizado e os resultados obtidos.

### 4.1. Testes e Experimentos

Os testes foram realizados em um ambiente local usando o Ganache, uma ferramenta que simula uma rede blockchain privada, permitindo a criação de uma rede Ethereum local para desenvolvimento e testes. O Truffle foi utilizado como framework para o desenvolvimento e automação dos testes de contratos inteligentes.

#### 4.1.1. Testes de Registro de Apostas

Para verificar se o sistema de apostas estava funcionando corretamente, realizamos uma série de testes de registro de apostas. foi possível realizar apostas em um evento específico (como o lançamento de uma moeda). O sistema foi configurado para registrar essas apostas no contrato inteligente responsável. Durante os testes, verificamos se o valor e a opção escolhida pelo usuário estavam sendo corretamente armazenados na blockchain.

#### 4.1.2. Cálculo das Odds Dinâmicas

Em seguida, realizamos testes para verificar o funcionamento do cálculo dinâmico das odds. Variamos o número de apostadores e os valores apostados em diferentes opções de um evento. O sistema deveria ajustar as odds automaticamente com base nas apostas registradas, garantindo que a opção com mais apostas tivesse uma odd menor e a opção com menos apostas tivesse uma odd maior. Testamos isso em múltiplos cenários e verificamos se o cálculo estava correto e em tempo real.

#### 4.1.3. Distribuição de Prêmios

Após o encerramento do evento, realizamos o teste de distribuição dos prêmios. O contrato inteligente deveria calcular automaticamente o valor dos prêmios com base nas odds e distribuir os fundos para os vencedores. Para isso, criamos diferentes cenários de vitória (onde um apostador ou vários acertavam o resultado) e testamos a execução do contrato para garantir que os valores corretos fossem transferidos para as carteiras dos usuários.

#### 4.1.4. Desempenho e Escalabilidade

Os testes de desempenho foram realizados para verificar como o sistema se comportava com um número crescente de transações. Como o sistema foi desenvolvido para ser utilizado em uma rede blockchain pública, a análise de escalabilidade foi focada no tempo de resposta das transações e no custo de gas para cada operação realizada. Foram simulados cenários com múltiplos usuários realizando apostas simultâneas, e o tempo de confirmação das transações foi monitorado.

### 4.2. Resultados Obtidos

Os testes realizados apresentaram os seguintes resultados:

#### 4.2.1. Registro de Apostas Funcional

As apostas foram registradas corretamente no contrato inteligente, com a quantidade e a opção escolhida pelo usuário armazenadas de forma transparente e imutável na blockchain. Não houve falhas de integridade durante o processo de registro de apostas, e as informações foram acessíveis de forma correta após a confirmação da transação.

#### 4.2.2. Cálculo das Odds Dinâmicas

O cálculo das odds foi feito corretamente, e as odds ajustaram-se automaticamente conforme o número de apostas e os valores apostados nas diferentes opções do evento. Em eventos com grandes variações no volume de apostas, o sistema conseguiu ajustar as odds de forma eficiente, mantendo a lógica dinâmica esperada.

#### 4.2.3.Distribuição de prêmios

A distribuição dos prêmios também ocorreu sem falhas. Os contratos inteligentes calcularam o valor dos prêmios com base nas odds e nas apostas realizadas, e os fundos foram transferidos para as carteiras dos vencedores de forma automática e sem intervenção manual. Isso garantiu que o processo fosse transparente e sem erros.

#### 4.2.4. Desempenho

Embora o sistema tenha funcionado bem para um número reduzido de transações, a performance começou a ser impactada quando o número de apostas simultâneas aumentou. O tempo de confirmação das transações na blockchain aumentou conforme o volume de apostas cresceu, e o custo de gas (taxa de transação) também foi elevado em cenários com muitas apostas simultâneas. Embora o sistema tenha continuado operando corretamente, a escalabilidade e os custos de transação precisam ser otimizados para garantir que a plataforma seja viável para um número elevado de usuários em um ambiente de produção.

### 4.3. Falhas

Embora o sistema tenha cumprido com grande parte de seus objetivos, algumas falhas foram identificadas durante os testes:

#### 4.3.1. Escalabilidade e Custo de Gas

Um dos principais problemas observados foi relacionado à escalabilidade. Em cenários com muitos usuários e apostas simultâneas, o tempo de confirmação das transações na blockchain foi maior, o que resultou em um atraso na atualização dos saldos dos usuários e na finalização dos eventos. Além disso, o custo de gas aumentou significativamente, tornando as transações caras quando o volume de usuários e apostas cresceu. Essa questão precisa ser resolvida por meio de técnicas como caching de resultados ou a utilização de redes de segunda camada, como o Polygon, para reduzir o custo de gas.

#### 4.3.2. Problema de Conectividade

Em alguns testes, houve uma falha na conectividade entre os nós da rede privada do Ganache. Embora a rede tenha funcionado corretamente durante a maioria dos testes, essa desconexão esporádica impediu que as transações fossem propagadas entre os nós, o que causou inconsistências nos dados exibidos para os usuários. Este problema foi atribuído a configurações de rede no ambiente de teste e não deve ocorrer em um ambiente de produção, mas ainda assim aponta para a necessidade de uma melhor configuração e teste de redes distribuídas.

#### 4.3.3. Limitações de Usabilidade

Embora o sistema tenha funcionado de forma técnica, a usabilidade da plataforma poderia ser aprimorada. A interface de interação com os contratos inteligentes, principalmente no contexto de uma blockchain pública, precisa ser mais intuitiva, pois pode se tornar difícil para alguns usuários entenderem como realizar apostas ou como visualizar o histórico de apostas. A experiência do usuário deve ser simplificada para garantir uma adoção mais ampla.

### 4.4. Melhorias Futuras
Apesar das falhas observadas, os testes demonstraram que o sistema é funcional e tem grande potencial. Visando aumentar o projeto futuramente as implementações futuras seriam:

- **Otimização de desempenho: **focando na melhoria da escalabilidade para suportar um número maior de transações.
- **Refinamento da experiência do usuário:** Melhoria na interface, aumento da sincronização das odds e eventos em tempo real.
- **Implementação de um oráculo:** um oráculo é um sistema que fornece dados do mundo real para um contrato inteligente ou plataforma de apostas, alimentando-a com informações externas e verificáveis. Esse "oráculo" coleta dados como gols, faltas, resultados de eventos e outros dados relevantes, para que as casas de apostas ou sistemas automatizados possam tomar decisões ou ajustar as odds em tempo real.

## 5. Conclusão

O desenvolvimento do sistema de apostas descentralizado foi realizado com o objetivo de criar uma plataforma transparente, segura e sem intermediários, utilizando a tecnologia de blockchain e contratos inteligentes. O sistema foi implementado utilizando as ferramentas Ganache, Truffle e Solidity, que permitiram o desenvolvimento, teste e execução de contratos inteligentes em uma rede Ethereum local.
Durante o processo, foram realizados testes abrangentes, incluindo o registro de apostas, o cálculo dinâmico das odds e a distribuição automática dos prêmios aos vencedores. A plataforma foi capaz de registrar apostas corretamente, calcular odds de forma dinâmica com base no volume de apostas, e distribuir os prêmios de maneira justa e automatizada. A segurança e a imutabilidade dos dados foram garantidas pelo uso de blockchain, assegurando que todas as transações fossem registradas de forma transparente e não alterável.
No entanto, algumas áreas do sistema precisam de melhorias, principalmente em relação à escalabilidade. Embora o sistema tenha funcionado adequadamente com um número limitado de transações, o desempenho da plataforma sofreu um pequeno impacto quando testado com múltiplas transações simultâneas. A otimização para suportar uma maior carga de usuários e transações será um ponto importante para as futuras versões do sistema.

### 5.1. Reflexões sobre o Aprendizado Adquirido

O desenvolvimento do sistema proporcionou um profundo aprendizado sobre blockchain e contratos inteligentes, tecnologias essenciais para a criação de sistemas descentralizados. A utilização do Ganache e do Truffle foi fundamental para a criação de um ambiente controlado de testes, permitindo a validação dos contratos inteligentes e o desempenho das transações. A experiência também proporcionou um entendimento detalhado sobre os desafios e benefícios de usar Ethereum para implementar soluções descentralizadas, especialmente no que diz respeito à imunidade à fraude, transparência e segurança.
Outro aprendizado importante foi a compreensão da dinâmica das odds e como ela pode ser aplicada em sistemas de apostas para garantir um equilíbrio financeiro e justo entre os participantes. O desenvolvimento e a implementação do cálculo dinâmico das odds com base no volume de apostas foi um desafio interessante e forneceu uma compreensão mais profunda da matemática por trás dos sistemas de apostas.

### 5.2. Aplicabilidade do Aprendizado Futuro

O conhecimento adquirido pode ser empregado em diversas outras áreas que utilizam blockchain e contratos inteligentes. A experiência adquirida pode ser aplicada na criação de plataformas financeiras descentralizadas, como deFi (finanças descentralizadas), sistemas de votação eletrônica seguros, ou até mesmo na gestão de contratos de seguros. Além disso, a aplicação de blockchain para garantir transparência e segurança em transações financeiras pode ser ampliada para outros setores, como o mercado imobiliário ou gestão de supply chain.

Em termos técnicos, a experiência adquirida também pode ser utilizada para otimizar o desempenho e a escalabilidade de blockchains públicas. Melhorias na forma de lidar com múltiplas transações simultâneas podem ser aplicadas em sistemas de maior escala, tornando a tecnologia mais acessível e viável para uso em plataformas com um grande número de usuários.

Em suma, o aprendizado obtido ao desenvolver este sistema de apostas descentralizado oferece uma base sólida para explorar outras soluções baseadas em blockchain, contribuindo para a evolução de plataformas mais seguras, transparentes e eficientes em diversos contextos.

## 6. Referências
- ETHEREUM FOUNDATION. Ethereum: The World Computer. Disponível em: https://ethereum.org/en/. Acesso em: 12 dez. 2024.
- GANACHE. Ganache: Local Blockchain for Ethereum Development. Disponível em: https://www.trufflesuite.com/ganache. Acesso em: 10 dez. 2024.
- TRUFFLE SUITE. Truffle: The Ethereum Development Environment. Disponível em: https://www.trufflesuite.com/truffle. Acesso em: 10 dez. 2024.
