# 📝 Guia Completo: Adicionar Novos Códigos e Tipos de Resíduos

## 🎯 Visão Geral

Este guia mostra **passo a passo** como adicionar novos códigos e tipos de resíduos no sistema, tanto na planilha Excel quanto no dashboard web.

---

## 📊 Método 1: Adicionar na Planilha Excel

### ✅ Vantagens
- Mais fácil e intuitivo
- Interface familiar
- Validação automática
- Sincroniza com dashboard

### 📝 Passo a Passo Detalhado

#### 1. Abrir a Planilha

```
1. Localizar arquivo: Controle_Residuos_Industriais.xlsx
2. Duplo clique para abrir no Excel
3. Aguardar carregamento completo
```

#### 2. Ir para Aba "Cadastro de Resíduos"

```
1. Na parte inferior da planilha, procurar as abas
2. Clicar na aba "Cadastro de Resíduos"
3. Você verá duas colunas:
   - Coluna A: Código do resíduo
   - Coluna B: Descrição do resíduo
```

**Exemplo do que você verá**:
```
| Código | Descrição                    |
|--------|------------------------------|
| D001   | Óleo lubrificante usado      |
| A020   | Sucata metálica              |
| B015   | Lodo de pintura              |
| ...    | ...                          |
```

#### 3. Adicionar Novo Resíduo

```
1. Rolar até a última linha com dados
2. Clicar na próxima linha vazia
3. Na coluna A (Código):
   - Digite o código do novo resíduo
   - Exemplo: "X100"
   - Formato livre (letras + números)
   
4. Na coluna B (Descrição):
   - Digite a descrição completa
   - Exemplo: "Resíduo de borracha vulcanizada"
   - Seja descritivo e claro
```

**Exemplo de novo resíduo**:
```
| Código | Descrição                           |
|--------|-------------------------------------|
| X100   | Resíduo de borracha vulcanizada    |
```

#### 4. Salvar a Planilha

```
1. Pressionar Ctrl+S
2. Ou: Arquivo > Salvar
3. Aguardar confirmação de salvamento
```

#### 5. Verificar na Aba "Lançamentos"

```
1. Ir para aba "Lançamentos"
2. Clicar na coluna A (Código do resíduo)
3. Clicar na seta da lista suspensa
4. Verificar se o novo código aparece
5. Selecionar o novo código
6. Verificar se a descrição preenche automaticamente na coluna B
```

**Pronto! Novo resíduo cadastrado!** ✅

---

### 📋 Exemplo Completo: Adicionar 3 Novos Resíduos

**Situação**: Sua empresa começou a gerar 3 novos tipos de resíduos

**Novos resíduos**:
1. X100 - Resíduo de borracha vulcanizada
2. X101 - Filtros de ar condicionado
3. X102 - Lâmpadas fluorescentes queimadas

**Passo a passo**:

1. **Abrir planilha** → `Controle_Residuos_Industriais.xlsx`

2. **Ir para "Cadastro de Resíduos"**

3. **Adicionar na próxima linha vazia**:
   ```
   Linha 21: X100 | Resíduo de borracha vulcanizada
   Linha 22: X101 | Filtros de ar condicionado
   Linha 23: X102 | Lâmpadas fluorescentes queimadas
   ```

4. **Salvar** (Ctrl+S)

5. **Testar na aba "Lançamentos"**:
   - Criar novo lançamento
   - Selecionar código X100
   - Verificar descrição automática
   - Preencher quantidade, data, destinação
   - Salvar

**Resultado**: 3 novos resíduos disponíveis! ✅

---

### 🔄 Sincronizar com Dashboard

Após adicionar na planilha, sincronize com o dashboard:

```bash
# 1. Extrair dados da planilha
python3 extrair_dados_planilha.py

# 2. Copiar para dashboard
cp dados_residuos.json dashboard/

# 3. Recarregar dashboard no navegador
# Pressionar F5 ou Ctrl+R

# 4. Verificar novos códigos
# Clicar em "Novo Lançamento"
# Verificar se novos códigos aparecem na lista
```

---

## 🌐 Método 2: Adicionar no Dashboard Web

### ✅ Vantagens
- Direto no navegador
- Não precisa do Excel
- Funciona em qualquer dispositivo

### 📝 Passo a Passo Detalhado

#### 1. Localizar o Arquivo JavaScript

```
1. Navegar até: dashboard/dashboard.js
2. Abrir com editor de texto:
   - Windows: Notepad++, VS Code
   - Mac: TextEdit, VS Code
   - Linux: gedit, nano, VS Code
```

#### 2. Encontrar a Função `criarEstruturaVazia()`

```javascript
// Procurar por esta função (linha ~50-80)
function criarEstruturaVazia() {
    return {
        kpis: { ... },
        lancamentos: [],
        resumo: [],
        top10: [],
        cadastro: [
            // AQUI ESTÃO OS CÓDIGOS!
            {codigo: "D001", descricao: "Óleo lubrificante usado"},
            {codigo: "A020", descricao: "Sucata metálica"},
            {codigo: "B015", descricao: "Lodo de pintura"},
            // ... mais códigos ...
        ],
        destinacoes: [],
        ultima_atualizacao: new Date().toISOString()
    };
}
```

#### 3. Adicionar Novos Códigos

**Antes**:
```javascript
cadastro: [
    {codigo: "D001", descricao: "Óleo lubrificante usado"},
    {codigo: "A020", descricao: "Sucata metálica"},
    {codigo: "B015", descricao: "Lodo de pintura"},
    {codigo: "C100", descricao: "Embalagens contaminadas"},
    {codigo: "E050", descricao: "Resíduo de solda"},
    {codigo: "F200", descricao: "EPI contaminado"},
    {codigo: "G300", descricao: "Filtros industriais"},
    {codigo: "H400", descricao: "Resíduo de madeira"}
],
```

**Depois** (com 3 novos resíduos):
```javascript
cadastro: [
    {codigo: "D001", descricao: "Óleo lubrificante usado"},
    {codigo: "A020", descricao: "Sucata metálica"},
    {codigo: "B015", descricao: "Lodo de pintura"},
    {codigo: "C100", descricao: "Embalagens contaminadas"},
    {codigo: "E050", descricao: "Resíduo de solda"},
    {codigo: "F200", descricao: "EPI contaminado"},
    {codigo: "G300", descricao: "Filtros industriais"},
    {codigo: "H400", descricao: "Resíduo de madeira"},
    // NOVOS CÓDIGOS ADICIONADOS:
    {codigo: "X100", descricao: "Resíduo de borracha vulcanizada"},
    {codigo: "X101", descricao: "Filtros de ar condicionado"},
    {codigo: "X102", descricao: "Lâmpadas fluorescentes queimadas"}
],
```

#### 4. Salvar o Arquivo

```
1. Pressionar Ctrl+S no editor
2. Ou: Arquivo > Salvar
3. Fechar o editor
```

#### 5. Atualizar o Arquivo JSON (se existir)

Se você já tem dados no arquivo `dados_residuos.json`:

```
1. Abrir: dashboard/dados_residuos.json
2. Localizar a seção "cadastro":
```

```json
"cadastro": [
    {"codigo": "D001", "descricao": "Óleo lubrificante usado"},
    {"codigo": "A020", "descricao": "Sucata metálica"},
    // ... códigos existentes ...
    
    // ADICIONAR AQUI:
    {"codigo": "X100", "descricao": "Resíduo de borracha vulcanizada"},
    {"codigo": "X101", "descricao": "Filtros de ar condicionado"},
    {"codigo": "X102", "descricao": "Lâmpadas fluorescentes queimadas"}
]
```

**⚠️ ATENÇÃO**: Respeite a sintaxe JSON:
- Vírgulas entre itens
- Aspas duplas (não simples)
- Última linha SEM vírgula

#### 6. Limpar Cache do Navegador

```
1. Abrir dashboard no navegador
2. Pressionar Ctrl+Shift+Delete
3. Marcar "Cache" ou "Dados em cache"
4. Clicar em "Limpar dados"
5. Fechar e reabrir o navegador
```

#### 7. Testar Novos Códigos

```
1. Abrir dashboard
2. Clicar em "Novo Lançamento"
3. Clicar no campo "Código do Resíduo"
4. Verificar se novos códigos aparecem
5. Selecionar um novo código
6. Verificar se descrição preenche automaticamente
```

**Pronto! Novos códigos disponíveis no dashboard!** ✅

---

## 🔄 Método 3: Adicionar em Ambos (Recomendado!)

### Por que adicionar em ambos?

- ✅ Mantém sincronização
- ✅ Funciona em qualquer lugar
- ✅ Backup automático
- ✅ Sem conflitos

### 📝 Passo a Passo Completo

#### 1. Adicionar na Planilha Excel

```
1. Abrir: Controle_Residuos_Industriais.xlsx
2. Aba "Cadastro de Resíduos"
3. Adicionar novos códigos
4. Salvar (Ctrl+S)
```

#### 2. Extrair para JSON

```bash
python3 extrair_dados_planilha.py
```

**Resultado**: Arquivo `dados_residuos.json` atualizado com novos códigos

#### 3. Copiar para Dashboard

```bash
cp dados_residuos.json dashboard/
```

#### 4. Atualizar Estrutura Padrão do Dashboard

```javascript
// Editar: dashboard/dashboard.js
// Adicionar novos códigos na função criarEstruturaVazia()
// (seguir instruções do Método 2)
```

**Por quê?** Para que novos usuários também vejam os códigos

#### 5. Fazer Deploy (se online)

```bash
cd dashboard
git add .
git commit -m "Adicionados novos códigos de resíduos"
git push
```

**Pronto! Sistema completamente sincronizado!** ✅

---

## 📋 Checklist de Verificação

Após adicionar novos códigos, verifique:

### ✅ Na Planilha Excel
- [ ] Código aparece na aba "Cadastro de Resíduos"
- [ ] Código aparece na lista suspensa da aba "Lançamentos"
- [ ] Descrição preenche automaticamente ao selecionar código
- [ ] Possível criar lançamento com novo código
- [ ] Resumo atualiza corretamente

### ✅ No Dashboard Web
- [ ] Código aparece no formulário "Novo Lançamento"
- [ ] Descrição preenche automaticamente
- [ ] Possível salvar lançamento com novo código
- [ ] Gráficos atualizam corretamente
- [ ] KPIs calculam corretamente

### ✅ Sincronização
- [ ] Script de extração roda sem erros
- [ ] Arquivo JSON contém novos códigos
- [ ] Dashboard carrega novos códigos após reload
- [ ] Planilha e dashboard mostram mesmos códigos

---

## 🎨 Boas Práticas para Códigos

### Padrão de Nomenclatura

**Recomendado**:
```
Letra + Números (3 dígitos)
Exemplos: A001, B050, C100, D999
```

**Alternativas**:
```
- Letras + Números: AB01, XY99
- Apenas Números: 001, 050, 100
- Código da norma: NBR-10004-I, NBR-10004-II
- Código interno: RES-001, RES-002
```

### Organização por Categoria

**Exemplo de sistema organizado**:

```
Categoria A - Óleos e Lubrificantes:
- A001: Óleo lubrificante usado
- A002: Óleo hidráulico contaminado
- A003: Graxa industrial

Categoria B - Metais:
- B001: Sucata ferrosa
- B002: Sucata não-ferrosa
- B003: Aparas de alumínio

Categoria C - Plásticos:
- C001: Embalagens plásticas contaminadas
- C002: Resíduo de plástico industrial
- C003: Filmes plásticos

Categoria D - Químicos:
- D001: Solventes contaminados
- D002: Ácidos
- D003: Bases

Categoria E - Eletrônicos:
- E001: Lâmpadas fluorescentes
- E002: Pilhas e baterias
- E003: Componentes eletrônicos
```

### Descrições Claras

**❌ Evite**:
```
- "Lixo"
- "Resíduo"
- "Material"
- "Coisa"
```

**✅ Prefira**:
```
- "Óleo lubrificante usado contaminado com metais"
- "Embalagens plásticas contaminadas com produto químico"
- "Lâmpadas fluorescentes queimadas (mercúrio)"
- "Filtros de ar condicionado usados"
```

---

## 🔧 Exemplos Práticos

### Exemplo 1: Indústria Metalúrgica

**Novos resíduos a adicionar**:

```
M001 - Carepa de laminação
M002 - Pó de esmeril
M003 - Limalha de ferro
M004 - Escória de fundição
M005 - Areia de moldagem usada
```

**Na planilha**:
```
1. Aba "Cadastro de Resíduos"
2. Adicionar 5 linhas:
   M001 | Carepa de laminação
   M002 | Pó de esmeril
   M003 | Limalha de ferro
   M004 | Escória de fundição
   M005 | Areia de moldagem usada
3. Salvar
```

**No dashboard** (dashboard.js):
```javascript
cadastro: [
    // ... códigos existentes ...
    {codigo: "M001", descricao: "Carepa de laminação"},
    {codigo: "M002", descricao: "Pó de esmeril"},
    {codigo: "M003", descricao: "Limalha de ferro"},
    {codigo: "M004", descricao: "Escória de fundição"},
    {codigo: "M005", descricao: "Areia de moldagem usada"}
],
```

---

### Exemplo 2: Indústria Alimentícia

**Novos resíduos a adicionar**:

```
F001 - Resíduo orgânico compostável
F002 - Óleo de cozinha usado
F003 - Embalagens contaminadas com alimentos
F004 - Lodo de ETE (Estação de Tratamento de Efluentes)
F005 - Resíduo de limpeza CIP
```

**Procedimento completo**:

1. **Planilha Excel**:
   ```
   Aba "Cadastro de Resíduos":
   F001 | Resíduo orgânico compostável
   F002 | Óleo de cozinha usado
   F003 | Embalagens contaminadas com alimentos
   F004 | Lodo de ETE
   F005 | Resíduo de limpeza CIP
   ```

2. **Extrair dados**:
   ```bash
   python3 extrair_dados_planilha.py
   ```

3. **Atualizar dashboard**:
   ```bash
   cp dados_residuos.json dashboard/
   ```

4. **Editar dashboard.js**:
   ```javascript
   // Adicionar na função criarEstruturaVazia()
   cadastro: [
       // ... códigos existentes ...
       {codigo: "F001", descricao: "Resíduo orgânico compostável"},
       {codigo: "F002", descricao: "Óleo de cozinha usado"},
       {codigo: "F003", descricao: "Embalagens contaminadas com alimentos"},
       {codigo: "F004", descricao: "Lodo de ETE"},
       {codigo: "F005", descricao: "Resíduo de limpeza CIP"}
   ],
   ```

5. **Testar**:
   - Criar lançamento na planilha com F001
   - Criar lançamento no dashboard com F002
   - Verificar ambos funcionando

---

### Exemplo 3: Laboratório

**Novos resíduos a adicionar**:

```
L001 - Vidraria quebrada contaminada
L002 - Reagentes químicos vencidos
L003 - Solventes orgânicos usados
L004 - Material biológico contaminado
L005 - EPIs descartáveis contaminados
L006 - Ponteiras e pipetas descartáveis
```

**Adicionar na planilha**:
```
1. Abrir Controle_Residuos_Industriais.xlsx
2. Aba "Cadastro de Resíduos"
3. Adicionar 6 linhas com códigos L001-L006
4. Salvar
```

**Adicionar no dashboard**:
```javascript
cadastro: [
    // ... códigos existentes ...
    {codigo: "L001", descricao: "Vidraria quebrada contaminada"},
    {codigo: "L002", descricao: "Reagentes químicos vencidos"},
    {codigo: "L003", descricao: "Solventes orgânicos usados"},
    {codigo: "L004", descricao: "Material biológico contaminado"},
    {codigo: "L005", descricao: "EPIs descartáveis contaminados"},
    {codigo: "L006", descricao: "Ponteiras e pipetas descartáveis"}
],
```

---

## 🐛 Solução de Problemas

### Problema 1: Novo código não aparece na lista

**Sintomas**:
- Adicionei código na planilha
- Mas não aparece na lista suspensa

**Soluções**:
1. Verificar se salvou a planilha (Ctrl+S)
2. Fechar e reabrir a planilha
3. Verificar se está na aba correta ("Cadastro de Resíduos")
4. Verificar se não há espaços extras no código
5. Verificar se a validação de dados está ativa

---

### Problema 2: Descrição não preenche automaticamente

**Sintomas**:
- Seleciono código
- Descrição fica em branco

**Soluções**:
1. Verificar fórmula na coluna B da aba "Lançamentos"
2. Deve ser: `=PROCV(A2;'Cadastro de Resíduos'!A:B;2;FALSO)`
3. Se não estiver, copiar de célula acima
4. Verificar se nome da aba está correto

---

### Problema 3: Dashboard não mostra novos códigos

**Sintomas**:
- Adicionei no dashboard.js
- Mas não aparecem no formulário

**Soluções**:
1. Limpar cache do navegador (Ctrl+Shift+Del)
2. Fazer reload forçado (Ctrl+Shift+R)
3. Verificar console do navegador (F12) para erros
4. Verificar sintaxe JavaScript (vírgulas, aspas)
5. Limpar localStorage:
   ```javascript
   // No console do navegador (F12)
   localStorage.clear();
   location.reload();
   ```

---

### Problema 4: Erro de sintaxe no JSON

**Sintomas**:
- Dashboard não carrega
- Console mostra erro "JSON parse error"

**Soluções**:
1. Validar JSON em: https://jsonlint.com
2. Verificar vírgulas:
   - Entre itens: SIM
   - Último item: NÃO
3. Verificar aspas:
   - Usar aspas duplas (")
   - Não usar aspas simples (')
4. Exemplo correto:
   ```json
   "cadastro": [
       {"codigo": "A001", "descricao": "Teste 1"},
       {"codigo": "A002", "descricao": "Teste 2"}
   ]
   ```

---

## 📊 Script Automatizado (Avançado)

Para quem quer automatizar a adição de múltiplos códigos:

### Script Python: `adicionar_codigos.py`

```python
#!/usr/bin/env python3
"""
Script para adicionar múltiplos códigos de resíduos de uma vez
"""

import openpyxl
import json

def adicionar_codigos_excel(excel_file, novos_codigos):
    """Adiciona códigos na planilha Excel"""
    
    wb = openpyxl.load_workbook(excel_file)
    ws = wb['Cadastro de Resíduos']
    
    # Encontrar última linha
    ultima_linha = ws.max_row
    
    # Adicionar novos códigos
    for idx, (codigo, descricao) in enumerate(novos_codigos, start=1):
        linha = ultima_linha + idx
        ws[f'A{linha}'] = codigo
        ws[f'B{linha}'] = descricao
        print(f"✅ Adicionado: {codigo} - {descricao}")
    
    # Salvar
    wb.save(excel_file)
    print(f"\n💾 Planilha salva: {excel_file}")
    print(f"📊 Total de códigos adicionados: {len(novos_codigos)}")

def adicionar_codigos_json(json_file, novos_codigos):
    """Adiciona códigos no arquivo JSON"""
    
    with open(json_file, 'r', encoding='utf-8') as f:
        dados = json.load(f)
    
    # Adicionar novos códigos
    for codigo, descricao in novos_codigos:
        dados['cadastro'].append({
            'codigo': codigo,
            'descricao': descricao
        })
        print(f"✅ Adicionado ao JSON: {codigo} - {descricao}")
    
    # Salvar
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)
    
    print(f"\n💾 JSON salvo: {json_file}")

# Exemplo de uso
if __name__ == '__main__':
    # Lista de novos códigos (código, descrição)
    novos_codigos = [
        ('X100', 'Resíduo de borracha vulcanizada'),
        ('X101', 'Filtros de ar condicionado'),
        ('X102', 'Lâmpadas fluorescentes queimadas'),
        ('X103', 'Cartuchos de impressora vazios'),
        ('X104', 'Toner de impressora usado')
    ]
    
    print("🔄 Adicionando novos códigos de resíduos...\n")
    
    # Adicionar na planilha
    print("📊 PLANILHA EXCEL:")
    adicionar_codigos_excel('Controle_Residuos_Industriais.xlsx', novos_codigos)
    
    print("\n" + "="*60 + "\n")
    
    # Adicionar no JSON
    print("📄 ARQUIVO JSON:")
    adicionar_codigos_json('dashboard/dados_residuos.json', novos_codigos)
    
    print("\n" + "="*60)
    print("✅ Processo concluído!")
    print("\n💡 Próximos passos:")
    print("   1. Recarregar dashboard no navegador")
    print("   2. Testar novos códigos")
    print("   3. Fazer deploy se necessário")
```

**Como usar**:

```bash
# 1. Editar lista de novos_codigos no script
# 2. Executar
python3 adicionar_codigos.py

# 3. Recarregar dashboard
# 4. Testar
```

---

## 📚 Resumo

### Adicionar na Planilha Excel (Mais Fácil)

1. Abrir `Controle_Residuos_Industriais.xlsx`
2. Aba "Cadastro de Resíduos"
3. Adicionar código e descrição
4. Salvar (Ctrl+S)
5. Testar na aba "Lançamentos"

**Tempo**: 1 minuto por código

---

### Adicionar no Dashboard Web

1. Editar `dashboard/dashboard.js`
2. Função `criarEstruturaVazia()`
3. Adicionar na seção `cadastro`
4. Salvar arquivo
5. Limpar cache do navegador
6. Testar

**Tempo**: 2 minutos por código

---

### Adicionar em Ambos (Recomendado)

1. Adicionar na planilha
2. Executar `python3 extrair_dados_planilha.py`
3. Copiar JSON para dashboard
4. Editar dashboard.js
5. Testar ambos

**Tempo**: 3 minutos total

---

## 🎉 Conclusão

Agora você sabe como:

- ✅ Adicionar códigos na planilha Excel
- ✅ Adicionar códigos no dashboard web
- ✅ Sincronizar entre os dois
- ✅ Organizar códigos por categoria
- ✅ Criar descrições claras
- ✅ Resolver problemas comuns
- ✅ Automatizar com scripts

**Adicione quantos códigos precisar - o sistema é totalmente flexível!** 🚀

---

**Dúvidas?** Consulte os outros manuais ou abra uma issue no GitHub!

**Versão**: 1.0  
**Data**: Outubro de 2024  
**Autor**: Sistema de Gestão Ambiental

