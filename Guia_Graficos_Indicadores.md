# Guia de Gráficos e Indicadores - Controle de Resíduos Industriais

## Visão Geral

A aba **"Resumo por Código"** agora conta com um painel completo de visualização de dados, incluindo gráficos interativos e indicadores-chave de performance (KPIs) para facilitar a análise e tomada de decisão.

---

## 📊 Gráficos Implementados

### 1. **Gráfico de Pizza - Distribuição Percentual**

**Localização**: Colunas K-T, linhas 2-20

**Objetivo**: Visualizar a distribuição percentual de cada tipo de resíduo em relação ao total geral.

**Características**:
- Mostra o percentual de cada tipo de resíduo
- Cores automáticas diferenciadas para cada categoria
- Rótulos com percentuais diretamente no gráfico
- Atualização automática conforme novos lançamentos

**Como Interpretar**:
- Fatias maiores = resíduos mais representativos
- Permite identificar rapidamente os resíduos mais críticos
- Útil para relatórios gerenciais e apresentações

**Exemplo de Uso**:
> "O resíduo A020 (Sucata metálica) representa 35% do total de resíduos gerados no período."

---

### 2. **Gráfico de Barras Horizontais - Quantidade por Tipo**

**Localização**: Colunas K-T, linhas 24-45

**Objetivo**: Comparar as quantidades absolutas de cada tipo de resíduo.

**Características**:
- Barras horizontais para fácil leitura dos códigos
- Eixo X mostra a quantidade em kg/L/unidade
- Eixo Y lista todos os tipos de resíduos cadastrados
- Ordenação conforme cadastro original

**Como Interpretar**:
- Barras mais longas = maiores quantidades geradas
- Comparação direta entre diferentes tipos de resíduos
- Identifica visualmente os resíduos que demandam mais atenção

**Exemplo de Uso**:
> "O gráfico mostra que geramos 150,3 kg de sucata metálica, muito mais que os 25,5 kg de óleo usado."

---

### 3. **Gráfico de Barras Verticais - Top 10 Resíduos**

**Localização**: Colunas K-T, linhas 48-65

**Objetivo**: Destacar os 10 resíduos mais gerados, facilitando o foco nas prioridades.

**Características**:
- Mostra apenas os 10 maiores geradores
- Barras verticais para comparação rápida
- Ordenação automática do maior para o menor
- Baseado em tabela dinâmica auxiliar (colunas J-L)

**Como Interpretar**:
- Foco nos resíduos mais críticos (Princípio de Pareto 80/20)
- Útil para definir prioridades de gestão
- Facilita o planejamento de ações de redução

**Exemplo de Uso**:
> "Os 3 principais resíduos (A020, 200139, 200101) representam 70% do volume total."

---

## 📈 Indicadores (KPIs)

**Localização**: Colunas H-I, linhas 2-8

### KPI 1: Total de Resíduos
**Fórmula**: `=SUM(C2:C[última_linha])`

**Descrição**: Soma total de todos os resíduos gerados no período.

**Unidade**: kg/L/unidade (conforme tipo de resíduo)

**Uso**: Acompanhar o volume total de resíduos ao longo do tempo.

---

### KPI 2: Tipos de Resíduos
**Fórmula**: `=COUNTA(A2:A[última_linha])`

**Descrição**: Quantidade de tipos diferentes de resíduos cadastrados.

**Unidade**: Número absoluto

**Uso**: Monitorar a diversidade de resíduos gerados pela organização.

---

### KPI 3: Maior Gerador
**Fórmula**: `=INDEX(A2:A[última_linha],MATCH(MAX(C2:C[última_linha]),C2:C[última_linha],0))`

**Descrição**: Código do resíduo gerado em maior quantidade.

**Unidade**: Código do resíduo

**Uso**: Identificar rapidamente o resíduo prioritário para ações de gestão.

**Destaque**: Exibido em vermelho para chamar atenção.

---

### KPI 4: Quantidade Máxima
**Fórmula**: `=MAX(C2:C[última_linha])`

**Descrição**: Maior quantidade individual gerada de um único tipo de resíduo.

**Unidade**: kg/L/unidade

**Uso**: Dimensionar a magnitude do principal problema.

**Destaque**: Exibido em vermelho para chamar atenção.

---

### KPI 5: Total de Lançamentos
**Fórmula**: `=COUNTA(Lançamentos!A2:A1000)`

**Descrição**: Número total de lançamentos registrados na aba "Lançamentos".

**Unidade**: Número absoluto

**Uso**: Monitorar a frequência de geração de resíduos.

---

## 📋 Tabela Top 10

**Localização**: Colunas J-L, linhas 50-61

### Estrutura

| Coluna | Conteúdo | Fórmula |
|--------|----------|---------|
| J | Código do Resíduo | `=INDEX + MATCH + LARGE` |
| K | Descrição do Resíduo | `=INDEX + MATCH` |
| L | Quantidade | `=LARGE` |

### Funcionamento

A tabela utiliza fórmulas avançadas para:
1. Identificar os 10 maiores valores de quantidade (função LARGE)
2. Buscar o código correspondente (funções INDEX e MATCH)
3. Buscar a descrição correspondente
4. Ordenar automaticamente do maior para o menor

### Uso

- **Análise detalhada**: Consulte os códigos e descrições dos principais resíduos
- **Relatórios**: Copie os dados para relatórios externos
- **Planejamento**: Base para definição de metas e ações

---

## 🎨 Formatação Visual

### Cores Utilizadas

| Elemento | Cor | Código Hex | Significado |
|----------|-----|------------|-------------|
| Títulos principais | Azul | #4472C4 | Informação institucional |
| Indicadores normais | Azul | #4472C4 | Dados positivos/neutros |
| Indicadores críticos | Vermelho | #C00000 | Atenção necessária |
| Fundo KPIs | Cinza claro | #E7E6E6 | Destaque suave |
| Cabeçalhos | Cinza médio | #D3D3D3 | Organização visual |

### Estilos de Gráficos

- **Gráfico de Pizza**: Estilo 10 (cores vibrantes)
- **Barras Horizontais**: Estilo 11 (profissional)
- **Barras Verticais**: Estilo 12 (moderno)

---

## 🔄 Atualização dos Gráficos

### Atualização Automática

Os gráficos e indicadores são atualizados automaticamente quando:
- Novos lançamentos são adicionados na aba "Lançamentos"
- Quantidades são alteradas
- Códigos são modificados

### Atualização Manual

Se os gráficos não atualizarem automaticamente:

**Método 1 - Botão de Atualização**:
1. Vá para a aba "Resumo por Código"
2. Clique na célula F1 ("🔄 ATUALIZAR RESUMO")
3. Aguarde a mensagem de confirmação

**Método 2 - Atalho de Teclado**:
1. Pressione `Ctrl + Alt + F9` (recalcula toda a pasta de trabalho)

**Método 3 - Macro**:
1. Pressione `Alt + F8`
2. Selecione "AtualizarResumo"
3. Clique em "Executar"

---

## 📊 Análises Recomendadas

### Análise 1: Identificação de Prioridades

**Objetivo**: Determinar quais resíduos demandam ação imediata.

**Como fazer**:
1. Consulte o KPI "Maior Gerador"
2. Analise o gráfico Top 10
3. Verifique o percentual no gráfico de pizza
4. Foque nos 3-5 principais resíduos

**Ação**: Desenvolver planos de redução para os principais geradores.

---

### Análise 2: Distribuição de Esforços

**Objetivo**: Entender se a geração está concentrada ou dispersa.

**Como fazer**:
1. Observe o gráfico de pizza
2. Se poucos resíduos representam >80% = concentrado (bom para gestão)
3. Se muitos resíduos com percentuais similares = disperso (mais complexo)

**Ação**: Estratégias diferentes para cada cenário.

---

### Análise 3: Evolução Temporal

**Objetivo**: Comparar períodos diferentes.

**Como fazer**:
1. Exporte os dados do período atual (CSV)
2. Limpe os lançamentos (com backup)
3. Adicione dados do novo período
4. Compare os KPIs entre períodos

**Ação**: Avaliar efetividade de ações de redução.

---

### Análise 4: Cumprimento de Metas

**Objetivo**: Verificar se as metas de redução estão sendo atingidas.

**Como fazer**:
1. Defina metas para cada tipo de resíduo
2. Compare o valor atual (KPI) com a meta
3. Calcule o percentual de atingimento
4. Identifique desvios

**Ação**: Ajustar estratégias para resíduos fora da meta.

---

## 🖨️ Impressão e Exportação

### Impressão dos Gráficos

**Configuração recomendada**:
1. Orientação: **Paisagem**
2. Tamanho do papel: **A4**
3. Margens: **Estreitas**
4. Escala: **Ajustar para 1 página de largura**

**Passos**:
1. Selecione a aba "Resumo por Código"
2. Arquivo > Imprimir
3. Configure conforme acima
4. Visualizar impressão
5. Imprimir ou Salvar como PDF

### Exportação para Apresentações

**Para PowerPoint**:
1. Clique no gráfico desejado
2. Ctrl + C (copiar)
3. Abra o PowerPoint
4. Ctrl + V (colar)
5. O gráfico será colado como imagem editável

**Para Word**:
1. Mesmo processo do PowerPoint
2. Recomenda-se colar como imagem para evitar problemas de formatação

**Para PDF**:
1. Arquivo > Salvar Como
2. Tipo: PDF
3. Opções: Selecionar "Resumo por Código" apenas
4. Salvar

---

## 🔧 Personalização

### Alterar Cores dos Gráficos

1. Clique no gráfico
2. Guia "Design do Gráfico"
3. "Alterar Cores"
4. Escolha o esquema de cores desejado

### Alterar Títulos

1. Clique no gráfico
2. Clique no título
3. Digite o novo título
4. Pressione Enter

### Adicionar Elementos

1. Clique no gráfico
2. Botão "+" (Elementos do Gráfico)
3. Marque os elementos desejados:
   - Linhas de grade
   - Tabela de dados
   - Legenda
   - Rótulos de dados

### Alterar Tipo de Gráfico

1. Clique no gráfico
2. Guia "Design do Gráfico"
3. "Alterar Tipo de Gráfico"
4. Escolha o novo tipo
5. OK

---

## 💡 Dicas de Uso

### Dica 1: Análise Rápida
Use os KPIs para uma visão instantânea do status atual sem precisar analisar tabelas.

### Dica 2: Apresentações
O gráfico de pizza é ideal para apresentações executivas (visual e direto).

### Dica 3: Análise Detalhada
Use o gráfico de barras horizontais para análises técnicas detalhadas.

### Dica 4: Foco em Prioridades
Sempre consulte a tabela Top 10 para focar nos resíduos mais relevantes.

### Dica 5: Comparações
Tire prints dos gráficos em diferentes períodos para comparações visuais.

### Dica 6: Metas Visuais
Adicione linhas de meta nos gráficos de barras para facilitar o acompanhamento.

### Dica 7: Filtros
Use os filtros da tabela principal para criar gráficos de subconjuntos específicos.

---

## ❓ Perguntas Frequentes

### P1: Os gráficos não estão atualizando. O que fazer?
**R**: Clique no botão "🔄 ATUALIZAR RESUMO" (célula F1) ou pressione Ctrl+Alt+F9.

### P2: Posso adicionar mais gráficos?
**R**: Sim! Use a guia "Inserir" > "Gráficos" e selecione os dados desejados.

### P3: Como exporto apenas um gráfico?
**R**: Clique no gráfico, Ctrl+C, e cole em outro aplicativo (Word, PowerPoint, etc.).

### P4: Posso mudar a posição dos gráficos?
**R**: Sim! Clique e arraste o gráfico para a posição desejada.

### P5: Como adiciono mais KPIs?
**R**: Adicione novas linhas abaixo dos KPIs existentes e use fórmulas similares.

### P6: Os gráficos funcionam com dados filtrados?
**R**: Sim, mas recomenda-se usar tabelas dinâmicas para análises filtradas complexas.

### P7: Posso criar gráficos por período?
**R**: Sim! Adicione uma coluna de período nos lançamentos e crie gráficos segmentados.

### P8: Como imprimo apenas os gráficos?
**R**: Selecione a área dos gráficos, vá em Arquivo > Imprimir > Imprimir Seleção.

---

## 📚 Recursos Adicionais

### Tutoriais Recomendados
- Gráficos no Excel: Documentação oficial da Microsoft
- Análise de dados ambientais: Guias de gestão ambiental
- Dashboard no Excel: Tutoriais de visualização de dados

### Ferramentas Complementares
- **Power BI**: Para dashboards mais avançados
- **Tableau**: Para visualizações interativas
- **Python + Matplotlib**: Para análises estatísticas

### Próximos Passos
1. Familiarize-se com todos os gráficos
2. Defina metas para cada tipo de resíduo
3. Estabeleça rotina de análise mensal
4. Crie relatórios gerenciais baseados nos gráficos
5. Compartilhe insights com a equipe

---

**Versão do Guia**: 1.0  
**Data**: Outubro de 2024  
**Compatibilidade**: Excel 2016 ou superior  
**Autor**: Sistema de Gestão Ambiental

