# ⚡ Guia Rápido: Adicionar Novos Códigos de Resíduos

## 🎯 3 Métodos Simples

---

## Método 1: Planilha Excel (MAIS FÁCIL) ⭐

### 📊 Passo a Passo Visual

```
┌─────────────────────────────────────────────────┐
│  1. ABRIR PLANILHA                              │
│  Controle_Residuos_Industriais.xlsx             │
│  [Duplo clique]                                 │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  2. IR PARA ABA "Cadastro de Resíduos"          │
│  [Clicar na aba inferior]                       │
│                                                 │
│  ┌───────────────┬──────────────────────────┐  │
│  │ Código        │ Descrição                │  │
│  ├───────────────┼──────────────────────────┤  │
│  │ D001          │ Óleo lubrificante usado  │  │
│  │ A020          │ Sucata metálica          │  │
│  │ B015          │ Lodo de pintura          │  │
│  │ ...           │ ...                      │  │
│  └───────────────┴──────────────────────────┘  │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  3. ADICIONAR NOVO CÓDIGO                       │
│  [Próxima linha vazia]                          │
│                                                 │
│  ┌───────────────┬──────────────────────────┐  │
│  │ X100          │ Seu novo resíduo aqui    │  │
│  └───────────────┴──────────────────────────┘  │
│         ↑                    ↑                  │
│    Digite aqui          Digite aqui             │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  4. SALVAR                                      │
│  [Ctrl + S]                                     │
│  ✅ Pronto!                                     │
└─────────────────────────────────────────────────┘
```

### ⏱️ Tempo: 30 segundos

---

## Método 2: Dashboard Web

### 🌐 Passo a Passo

```
┌─────────────────────────────────────────────────┐
│  1. ABRIR ARQUIVO                               │
│  dashboard/dashboard.js                         │
│  [Editor de texto]                              │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  2. PROCURAR FUNÇÃO                             │
│  Ctrl+F: "criarEstruturaVazia"                  │
│                                                 │
│  function criarEstruturaVazia() {               │
│      return {                                   │
│          ...                                    │
│          cadastro: [                            │
│              {codigo: "D001", descricao: "..."} │
│              {codigo: "A020", descricao: "..."} │
│              // ADICIONAR AQUI ↓                │
│          ],                                     │
│      };                                         │
│  }                                              │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  3. ADICIONAR CÓDIGO                            │
│                                                 │
│  {codigo: "X100", descricao: "Seu resíduo"},   │
│           ↑                      ↑         ↑    │
│       Seu código          Sua descrição  Vírgula│
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  4. SALVAR E RECARREGAR                         │
│  [Ctrl + S]                                     │
│  [Ctrl + Shift + R no navegador]                │
│  ✅ Pronto!                                     │
└─────────────────────────────────────────────────┘
```

### ⏱️ Tempo: 2 minutos

---

## Método 3: Script Automático (MÚLTIPLOS CÓDIGOS)

### 🤖 Passo a Passo

```
┌─────────────────────────────────────────────────┐
│  1. ABRIR SCRIPT                                │
│  adicionar_codigos.py                           │
│  [Editor de texto]                              │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  2. EDITAR LISTA                                │
│                                                 │
│  novos_codigos = [                              │
│      ('X100', 'Resíduo 1'),                     │
│      ('X101', 'Resíduo 2'),                     │
│      ('X102', 'Resíduo 3'),                     │
│      # Adicione mais aqui                       │
│  ]                                              │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  3. EXECUTAR                                    │
│  $ python3 adicionar_codigos.py                 │
│                                                 │
│  Deseja continuar? (s/n): s                     │
│                                                 │
│  ✅ Códigos adicionados: 3                      │
│  ✅ Pronto!                                     │
└─────────────────────────────────────────────────┘
```

### ⏱️ Tempo: 1 minuto (para múltiplos códigos)

---

## 🎯 Qual Método Usar?

### Use Método 1 (Excel) se:
- ✅ Vai adicionar 1-3 códigos
- ✅ Prefere interface visual
- ✅ Não tem experiência com código

### Use Método 2 (Dashboard) se:
- ✅ Não tem Excel instalado
- ✅ Quer atualizar só o dashboard
- ✅ Tem editor de texto

### Use Método 3 (Script) se:
- ✅ Vai adicionar 5+ códigos
- ✅ Quer atualizar ambos de uma vez
- ✅ Quer automatizar

---

## 📋 Exemplos Rápidos

### Exemplo 1: Adicionar 1 Código

**Planilha Excel**:
```
Linha 21: X100 | Resíduo de borracha vulcanizada
[Ctrl+S]
✅ Pronto em 30 segundos!
```

---

### Exemplo 2: Adicionar 5 Códigos

**Script Python**:
```python
novos_codigos = [
    ('M001', 'Carepa de laminação'),
    ('M002', 'Pó de esmeril'),
    ('M003', 'Limalha de ferro'),
    ('M004', 'Escória de fundição'),
    ('M005', 'Areia de moldagem')
]
```
```bash
$ python3 adicionar_codigos.py
✅ Pronto em 1 minuto!
```

---

### Exemplo 3: Adicionar em Ambos

**Passo 1** - Planilha:
```
Adicionar códigos na aba "Cadastro de Resíduos"
[Ctrl+S]
```

**Passo 2** - Sincronizar:
```bash
$ python3 extrair_dados_planilha.py
$ cp dados_residuos.json dashboard/
```

**Passo 3** - Dashboard:
```javascript
// Editar dashboard.js
cadastro: [
    // ... adicionar mesmos códigos
]
```

✅ **Pronto! Ambos sincronizados!**

---

## 🔍 Verificação Rápida

### ✅ Checklist

Após adicionar códigos, verifique:

**Na Planilha**:
- [ ] Código aparece na aba "Cadastro de Resíduos"
- [ ] Código aparece na lista suspensa (aba "Lançamentos")
- [ ] Descrição preenche automaticamente

**No Dashboard**:
- [ ] Código aparece no formulário "Novo Lançamento"
- [ ] Descrição preenche automaticamente
- [ ] Possível salvar lançamento

---

## 🐛 Problemas Comuns

### ❌ Código não aparece

**Solução**:
1. Verificar se salvou (Ctrl+S)
2. Fechar e reabrir
3. Limpar cache (Ctrl+Shift+Del)

---

### ❌ Descrição não preenche

**Solução**:
1. Verificar fórmula PROCV
2. Verificar nome da aba
3. Copiar fórmula de célula acima

---

### ❌ Erro no dashboard

**Solução**:
1. Verificar sintaxe (vírgulas, aspas)
2. Abrir console (F12)
3. Limpar localStorage

---

## 💡 Dicas Rápidas

### Dica 1: Padrão de Código
```
✅ Bom: A001, B050, X100
❌ Evite: a1, Res01, código-1
```

### Dica 2: Descrição Clara
```
✅ Bom: "Óleo lubrificante usado contaminado"
❌ Evite: "Óleo", "Resíduo", "Lixo"
```

### Dica 3: Organização
```
A001-A999: Óleos
B001-B999: Metais
C001-C999: Plásticos
D001-D999: Químicos
```

---

## 📚 Documentação Completa

Para mais detalhes, consulte:
- **GUIA_ADICIONAR_NOVOS_RESIDUOS.md** (guia completo)
- **README_SISTEMA_COMPLETO.md** (visão geral)
- **INTEGRACAO_PLANILHA_DASHBOARD.md** (sincronização)

---

## 🎉 Resumo

### 3 Formas de Adicionar Códigos:

1. **Planilha Excel** → 30 segundos → Mais fácil
2. **Dashboard Web** → 2 minutos → Sem Excel
3. **Script Python** → 1 minuto → Múltiplos códigos

**Escolha o que preferir e adicione quantos códigos precisar!** 🚀

---

**Versão**: 1.0  
**Data**: Outubro de 2024  
**Tempo de leitura**: 3 minutos

