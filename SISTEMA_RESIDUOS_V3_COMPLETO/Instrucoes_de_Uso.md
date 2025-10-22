# Manual de Uso - Planilha de Controle de Resíduos Industriais

## Visão Geral

Esta planilha Excel foi desenvolvida para facilitar o controle e gerenciamento de resíduos industriais, oferecendo funcionalidades automatizadas de validação, preenchimento e resumo de dados.

---

## Estrutura da Planilha

A planilha está organizada em **três abas principais**:

### 1. **Cadastro de Resíduos**

Esta aba contém o banco de dados de referência com todos os códigos e descrições dos resíduos cadastrados.

**Colunas:**
- **Código do Resíduo**: Identificador único do resíduo (ex: D001, 200136, A020)
- **Descrição do Resíduo**: Descrição completa do tipo de resíduo

**Como usar:**
- Para adicionar novos tipos de resíduos, basta inserir novas linhas com o código e descrição correspondentes
- Os códigos cadastrados nesta aba alimentam automaticamente a lista suspensa da aba "Lançamentos"
- **Importante**: Não exclua ou altere os códigos já cadastrados se houver lançamentos associados a eles

---

### 2. **Lançamentos**

Esta é a aba principal onde você registra cada ocorrência de geração de resíduos.

**Colunas:**

- **A - Código do Resíduo**: Selecione o código através da lista suspensa (validação automática)
- **B - Descrição do Resíduo**: Preenchimento automático baseado no código selecionado (fórmula PROCV)
- **C - Quantidade**: Informe a quantidade em kg, litros ou unidades (formatação numérica automática)
- **D - Data de Geração**: Insira a data no formato DD/MM/AAAA
- **E - Destinação**: Selecione o tipo de destinação através da lista suspensa:
  - Reuso
  - Reciclagem
  - Aterro
  - Coprocessamento
  - Incineração
  - Tratamento
  - Compostagem
  - Outro
- **F - Observações**: Campo livre para anotações adicionais

**Funcionalidades:**
- **Validação de dados**: A coluna "Código do Resíduo" só aceita códigos cadastrados na aba "Cadastro de Resíduos"
- **Preenchimento automático**: Ao selecionar um código, a descrição é preenchida automaticamente
- **Filtros automáticos**: Utilize os filtros no cabeçalho para visualizar dados específicos
- **Linha de cabeçalho congelada**: Ao rolar a planilha, o cabeçalho permanece visível

**Como usar:**
1. Clique na célula da coluna A (Código do Resíduo)
2. Selecione o código desejado na lista suspensa
3. A descrição será preenchida automaticamente na coluna B
4. Preencha a quantidade, data, destinação e observações
5. Repita o processo para cada novo lançamento

---

### 3. **Resumo por Código**

Esta aba apresenta um resumo consolidado automático de todos os lançamentos por código de resíduo.

**Colunas:**

- **Código do Resíduo**: Código único do resíduo
- **Descrição do Resíduo**: Descrição completa
- **Quantidade Total**: Soma automática de todas as quantidades lançadas para cada código (fórmula SOMASE)
- **% do Total**: Percentual que cada resíduo representa em relação ao total geral

**Funcionalidades:**
- **Atualização automática**: Os valores são recalculados automaticamente sempre que novos lançamentos são adicionados
- **Linha de total geral**: Apresenta a soma total de todos os resíduos
- **Filtros automáticos**: Permite filtrar por código ou descrição

**Como usar:**
- Esta aba é **somente leitura** para visualização de dados consolidados
- Não é necessário inserir dados manualmente, pois todas as informações são calculadas automaticamente
- Utilize esta aba para gerar relatórios gerenciais e análises de volume por tipo de resíduo

---

## Formatação e Recursos

### Formatação Visual
- **Cabeçalhos**: Fundo cinza, texto em negrito, fonte Calibri 11
- **Bordas**: Todas as células com dados possuem bordas finas
- **Alinhamento**: Textos centralizados ou alinhados conforme o tipo de dado
- **Fonte padrão**: Calibri 11 em toda a planilha

### Recursos de Usabilidade
- **Congelamento de painéis**: Primeira linha congelada em todas as abas
- **Filtros automáticos**: Ativados em todas as abas para facilitar a busca
- **Validação de dados**: Previne erros de digitação com listas suspensas
- **Formatação condicional de números**: Quantidades com separadores de milhar e duas casas decimais

---

## Dicas de Uso

### Para adicionar novos tipos de resíduos:
1. Acesse a aba "Cadastro de Resíduos"
2. Insira uma nova linha com o código e descrição
3. O novo código estará automaticamente disponível na lista suspensa da aba "Lançamentos"

### Para visualizar resíduos específicos:
1. Na aba "Lançamentos", clique no ícone de filtro na coluna "Código do Resíduo"
2. Selecione os códigos desejados
3. A planilha exibirá apenas os lançamentos filtrados

### Para gerar relatórios:
1. Utilize a aba "Resumo por Código" para visualizar totais consolidados
2. Exporte os dados para PDF ou copie para outros documentos conforme necessário
3. Os percentuais facilitam a identificação dos resíduos mais relevantes

---

## Manutenção e Boas Práticas

- **Backup regular**: Faça cópias de segurança periódicas da planilha
- **Não altere fórmulas**: As colunas com fórmulas (Descrição e Resumo) não devem ser editadas manualmente
- **Consistência de dados**: Mantenha um padrão na nomenclatura de códigos e descrições
- **Revisão periódica**: Verifique regularmente se há códigos duplicados ou inconsistências no cadastro

---

## Suporte Técnico

Para dúvidas ou sugestões de melhorias, entre em contato com o responsável pelo sistema de gestão ambiental da sua organização.

**Versão da planilha**: 1.0  
**Data de criação**: Outubro de 2024

