# 🔄 Integração: Planilha Excel + Dashboard Web

## ✅ Sim! Você Pode Usar Ambos

A planilha Excel e o dashboard web funcionam **perfeitamente juntos**. Você pode escolher qual usar em cada situação ou usar os dois simultaneamente!

---

## 🎯 Duas Formas de Trabalhar

### Opção 1: Planilha como Fonte Principal
```
Planilha Excel (entrada de dados)
    ↓
Script Python (extração)
    ↓
Dashboard Web (visualização)
```

**Quando usar**:
- ✅ Prefere trabalhar no Excel
- ✅ Já tem processos estabelecidos
- ✅ Precisa de macros VBA
- ✅ Quer análises complexas no Excel

### Opção 2: Dashboard como Fonte Principal
```
Dashboard Web (entrada de dados)
    ↓
Exportação JSON
    ↓
Script Python (conversão)
    ↓
Planilha Excel (backup/análise)
```

**Quando usar**:
- ✅ Prefere interface web
- ✅ Trabalha em múltiplos dispositivos
- ✅ Equipe remota
- ✅ Quer visualizações interativas

### Opção 3: Uso Híbrido (Recomendado!)
```
Planilha Excel ←→ Dashboard Web
    ↕              ↕
Sincronização via JSON
```

**Quando usar**:
- ✅ Melhor dos dois mundos
- ✅ Entrada de dados onde for mais conveniente
- ✅ Visualização no dashboard
- ✅ Análises profundas no Excel

---

## 🔄 Sincronização: Planilha → Dashboard

### Passo a Passo

#### 1. Adicionar Dados na Planilha Excel

```
1. Abrir: Controle_Residuos_Industriais.xlsx
2. Ir para aba "Lançamentos"
3. Preencher nova linha:
   - Código: Selecionar da lista
   - Descrição: Preenche automaticamente
   - Quantidade: Digitar valor
   - Data: Selecionar data
   - Destinação: Selecionar da lista
   - Observações: Opcional
4. Salvar planilha (Ctrl+S)
```

#### 2. Extrair Dados para JSON

```bash
# No terminal/prompt de comando
cd /caminho/onde/esta/a/planilha
python3 extrair_dados_planilha.py

# Saída esperada:
# ✅ Dados extraídos com sucesso!
# 📄 Arquivo gerado: dados_residuos.json
```

#### 3. Atualizar Dashboard

**Se dashboard local**:
```bash
# Copiar JSON para pasta do dashboard
cp dados_residuos.json /caminho/dashboard/

# Recarregar página no navegador (F5)
```

**Se dashboard online (Netlify/GitHub)**:
```bash
# Método 1: Via Git
cd /caminho/dashboard
cp /caminho/dados_residuos.json .
git add dados_residuos.json
git commit -m "Atualização de dados da planilha"
git push
# Deploy automático em 1-2 minutos

# Método 2: Via interface Netlify
# 1. Acessar painel Netlify
# 2. Ir em "Deploys"
# 3. Arrastar pasta dashboard atualizada
```

#### 4. Verificar Atualização

```
1. Abrir dashboard no navegador
2. Pressionar Ctrl+Shift+R (reload forçado)
3. Verificar data de "Última atualização"
4. Conferir novos lançamentos na tabela
5. Verificar KPIs atualizados
```

---

## 🔄 Sincronização: Dashboard → Planilha

### Passo a Passo

#### 1. Exportar Dados do Dashboard

```
1. Abrir dashboard no navegador
2. Clicar em "💾 Exportar Dados"
3. Arquivo JSON baixado: residuos_YYYY-MM-DD.json
4. Salvar em local conhecido
```

#### 2. Converter JSON para Excel

**Criar script de importação** (`importar_para_excel.py`):

```python
import json
import openpyxl
from datetime import datetime

# Carregar JSON exportado do dashboard
with open('residuos_2024-10-22.json', 'r', encoding='utf-8') as f:
    dados = json.load(f)

# Abrir planilha Excel
wb = openpyxl.load_workbook('Controle_Residuos_Industriais.xlsx')
ws_lancamentos = wb['Lançamentos']

# Limpar lançamentos antigos (manter cabeçalho)
ws_lancamentos.delete_rows(2, ws_lancamentos.max_row)

# Adicionar novos lançamentos
linha = 2
for lanc in dados['lancamentos']:
    ws_lancamentos[f'A{linha}'] = lanc['codigo']
    ws_lancamentos[f'B{linha}'] = lanc['descricao']
    ws_lancamentos[f'C{linha}'] = lanc['quantidade']
    
    # Converter data
    if lanc['data']:
        data_obj = datetime.strptime(lanc['data'], '%Y-%m-%d')
        ws_lancamentos[f'D{linha}'] = data_obj
    
    ws_lancamentos[f'E{linha}'] = lanc['destinacao']
    ws_lancamentos[f'F{linha}'] = lanc.get('observacoes', '')
    
    linha += 1

# Salvar planilha
wb.save('Controle_Residuos_Industriais.xlsx')
print(f'✅ {linha-2} lançamentos importados com sucesso!')
```

#### 3. Executar Importação

```bash
python3 importar_para_excel.py

# Saída esperada:
# ✅ 25 lançamentos importados com sucesso!
```

#### 4. Verificar na Planilha

```
1. Abrir: Controle_Residuos_Industriais.xlsx
2. Ir para aba "Lançamentos"
3. Verificar novos dados
4. Conferir aba "Resumo por Código"
5. Clicar no botão "Atualizar Resumo" (se necessário)
```

---

## 🔀 Fluxos de Trabalho Recomendados

### Fluxo 1: Equipe Pequena (1-3 pessoas)

**Configuração**:
- Planilha Excel compartilhada (OneDrive/Google Drive)
- Dashboard hospedado online

**Rotina Diária**:
```
Manhã:
1. Abrir planilha Excel
2. Adicionar lançamentos do dia anterior
3. Executar script de extração
4. Fazer deploy do dashboard

Tarde:
5. Acessar dashboard para visualizar
6. Apresentar gráficos em reuniões
7. Exportar relatórios se necessário
```

**Sincronização**: 1x por dia

---

### Fluxo 2: Equipe Média (4-10 pessoas)

**Configuração**:
- Dashboard online como principal
- Planilha Excel para backup semanal

**Rotina Diária**:
```
Durante o dia:
1. Cada pessoa acessa dashboard
2. Adiciona lançamentos conforme necessário
3. Visualiza dados em tempo real

Fim de semana:
4. Exportar dados do dashboard
5. Importar para planilha Excel
6. Fazer backup da planilha
7. Análises profundas no Excel
```

**Sincronização**: Dashboard → Excel (semanal)

---

### Fluxo 3: Equipe Grande (10+ pessoas)

**Configuração**:
- Dashboard online com backend (futuro)
- Planilha Excel para análises gerenciais

**Rotina**:
```
Operacional (diário):
1. Operadores usam apenas dashboard
2. Entrada de dados descentralizada
3. Visualização em tempo real

Gerencial (mensal):
4. Exportar dados consolidados
5. Importar para Excel
6. Análises com tabelas dinâmicas
7. Relatórios executivos
```

**Sincronização**: Dashboard → Excel (mensal)

---

## 📊 Comparação Detalhada

| Aspecto | Planilha Excel | Dashboard Web |
|---------|----------------|---------------|
| **Entrada de Dados** | | |
| Velocidade | ⚡⚡⚡ | ⚡⚡⚡⚡ |
| Validação | ✅ Lista suspensa | ✅ Formulário validado |
| Offline | ✅ Sempre | ✅ Após 1º acesso |
| Múltiplos usuários | ⚠️ Conflitos | ✅ Cada um no seu navegador |
| | | |
| **Visualização** | | |
| Gráficos | ✅ Estáticos | ✅ Interativos |
| Atualização | 🔄 Manual | ⚡ Instantânea |
| Responsivo | ❌ Não | ✅ Sim |
| Compartilhamento | 📧 Enviar arquivo | 🔗 Enviar link |
| | | |
| **Análise** | | |
| Tabelas dinâmicas | ✅ Nativo | ❌ Não |
| Fórmulas complexas | ✅ Excel completo | ⚠️ Limitado |
| Macros VBA | ✅ 6 macros | ❌ Não |
| Filtros | ✅ Avançados | ✅ Básicos |
| | | |
| **Backup** | | |
| Formato | .xlsx | .json |
| Automático | ⚠️ Depende | ✅ localStorage |
| Versionamento | ⚠️ Manual | ✅ Git |
| Recuperação | ✅ Fácil | ✅ Exportar |
| | | |
| **Acesso** | | |
| Requer software | ✅ Excel | ❌ Só navegador |
| Mobile | ⚠️ App Excel | ✅ Qualquer navegador |
| Custo | 💰 Licença Office | 🆓 Gratuito |
| Aprendizado | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🛠️ Scripts de Automação

### Script 1: Sincronização Automática (Planilha → Dashboard)

**Arquivo**: `sync_planilha_dashboard.sh`

```bash
#!/bin/bash

echo "🔄 Sincronizando Planilha → Dashboard..."

# 1. Extrair dados da planilha
echo "📊 Extraindo dados da planilha..."
python3 extrair_dados_planilha.py

# 2. Copiar para dashboard
echo "📁 Copiando para dashboard..."
cp dados_residuos.json dashboard/

# 3. Fazer commit e push (se usar Git)
echo "🚀 Fazendo deploy..."
cd dashboard
git add dados_residuos.json
git commit -m "Sync: Planilha → Dashboard $(date '+%Y-%m-%d %H:%M')"
git push

echo "✅ Sincronização concluída!"
echo "🌐 Dashboard será atualizado em 1-2 minutos"
```

**Uso**:
```bash
chmod +x sync_planilha_dashboard.sh
./sync_planilha_dashboard.sh
```

---

### Script 2: Sincronização Automática (Dashboard → Planilha)

**Arquivo**: `sync_dashboard_planilha.py`

```python
#!/usr/bin/env python3
import json
import openpyxl
from datetime import datetime
import sys

def sync_dashboard_to_excel(json_file, excel_file):
    print("🔄 Sincronizando Dashboard → Planilha...")
    
    # Carregar JSON
    print(f"📄 Lendo {json_file}...")
    with open(json_file, 'r', encoding='utf-8') as f:
        dados = json.load(f)
    
    # Abrir planilha
    print(f"📊 Abrindo {excel_file}...")
    wb = openpyxl.load_workbook(excel_file)
    ws = wb['Lançamentos']
    
    # Limpar dados antigos (manter cabeçalho)
    print("🗑️ Limpando dados antigos...")
    if ws.max_row > 1:
        ws.delete_rows(2, ws.max_row)
    
    # Adicionar novos lançamentos
    print(f"➕ Adicionando {len(dados['lancamentos'])} lançamentos...")
    linha = 2
    
    for lanc in dados['lancamentos']:
        ws[f'A{linha}'] = lanc['codigo']
        ws[f'B{linha}'] = lanc['descricao']
        ws[f'C{linha}'] = lanc['quantidade']
        
        if lanc['data']:
            try:
                data_obj = datetime.strptime(lanc['data'], '%Y-%m-%d')
                ws[f'D{linha}'] = data_obj
            except:
                ws[f'D{linha}'] = lanc['data']
        
        ws[f'E{linha}'] = lanc['destinacao']
        ws[f'F{linha}'] = lanc.get('observacoes', '')
        
        linha += 1
    
    # Salvar
    print("💾 Salvando planilha...")
    wb.save(excel_file)
    
    print(f"✅ Sincronização concluída!")
    print(f"📊 {linha-2} lançamentos importados")
    print(f"📈 Total de resíduos: {dados['kpis']['total_residuos']:.2f}")
    print(f"🗂️ Tipos de resíduos: {dados['kpis']['tipos_residuos']}")

if __name__ == '__main__':
    json_file = 'dados_residuos.json'
    excel_file = 'Controle_Residuos_Industriais.xlsx'
    
    if len(sys.argv) > 1:
        json_file = sys.argv[1]
    if len(sys.argv) > 2:
        excel_file = sys.argv[2]
    
    sync_dashboard_to_excel(json_file, excel_file)
```

**Uso**:
```bash
chmod +x sync_dashboard_planilha.py
./sync_dashboard_planilha.py
# Ou especificar arquivos:
./sync_dashboard_planilha.py meus_dados.json minha_planilha.xlsx
```

---

### Script 3: Sincronização Bidirecional

**Arquivo**: `sync_bidirectional.sh`

```bash
#!/bin/bash

echo "🔄 Sincronização Bidirecional"
echo ""
echo "Escolha a direção:"
echo "1) Planilha → Dashboard"
echo "2) Dashboard → Planilha"
echo "3) Ambos (merge)"
echo ""
read -p "Opção (1-3): " opcao

case $opcao in
    1)
        echo "📊 → 🌐 Planilha para Dashboard"
        python3 extrair_dados_planilha.py
        cp dados_residuos.json dashboard/
        echo "✅ Concluído!"
        ;;
    2)
        echo "🌐 → 📊 Dashboard para Planilha"
        python3 sync_dashboard_planilha.py
        echo "✅ Concluído!"
        ;;
    3)
        echo "🔄 Sincronização bidirecional"
        echo "⚠️ Atenção: Pode haver conflitos!"
        read -p "Continuar? (s/n): " confirma
        if [ "$confirma" = "s" ]; then
            # Backup primeiro
            cp Controle_Residuos_Industriais.xlsx backup_$(date +%Y%m%d_%H%M%S).xlsx
            # Merge (implementação futura)
            echo "🚧 Funcionalidade em desenvolvimento"
        fi
        ;;
    *)
        echo "❌ Opção inválida"
        ;;
esac
```

---

## 📅 Rotinas Recomendadas

### Rotina Diária
```bash
# Manhã: Sincronizar planilha → dashboard
./sync_planilha_dashboard.sh

# Tarde: Verificar dashboard
# (Acesso via navegador)
```

### Rotina Semanal
```bash
# Sexta-feira: Backup completo
./sync_dashboard_planilha.py
cp Controle_Residuos_Industriais.xlsx backup_semanal/backup_$(date +%Y%m%d).xlsx
```

### Rotina Mensal
```bash
# Último dia do mês: Consolidação
1. Exportar dashboard
2. Importar para Excel
3. Gerar relatórios gerenciais
4. Arquivar dados do mês
5. Limpar dashboard (opcional)
```

---

## 🎯 Melhores Práticas

### 1. Defina uma Fonte Principal
- ✅ Escolha: Planilha OU Dashboard como principal
- ✅ Use o outro como secundário/backup
- ✅ Evite editar ambos simultaneamente

### 2. Estabeleça Frequência de Sincronização
- 📊 Uso intenso: Sincronizar 2-3x por dia
- 📊 Uso normal: Sincronizar 1x por dia
- 📊 Uso esporádico: Sincronizar semanalmente

### 3. Faça Backups Regulares
- 💾 Exportar dashboard: Diariamente
- 💾 Copiar planilha: Semanalmente
- 💾 Backup completo: Mensalmente

### 4. Documente o Processo
- 📝 Crie checklist de sincronização
- 📝 Treine a equipe
- 📝 Defina responsáveis

### 5. Monitore Conflitos
- ⚠️ Compare totais após sincronização
- ⚠️ Verifique datas de atualização
- ⚠️ Resolva discrepâncias imediatamente

---

## 🐛 Solução de Problemas

### Problema: Dados não sincronizam

**Sintomas**:
- Dashboard não mostra novos lançamentos da planilha
- Ou vice-versa

**Soluções**:
1. Verificar se script rodou sem erros
2. Confirmar que arquivo JSON foi atualizado
3. Fazer reload forçado no navegador (Ctrl+Shift+R)
4. Verificar se arquivo está no lugar certo
5. Checar permissões de arquivo

### Problema: Dados duplicados

**Sintomas**:
- Lançamentos aparecem em duplicata

**Soluções**:
1. Identificar fonte da duplicação
2. Limpar uma das fontes
3. Sincronizar novamente
4. Implementar validação de IDs únicos

### Problema: Datas incorretas

**Sintomas**:
- Datas aparecem erradas após sincronização

**Soluções**:
1. Verificar formato de data no JSON (YYYY-MM-DD)
2. Verificar formato de data no Excel
3. Ajustar script de conversão
4. Usar formato ISO 8601

---

## 🎉 Resumo

### Você PODE usar ambos!

✅ **Planilha Excel**:
- Entrada de dados tradicional
- Análises complexas
- Macros VBA
- Backup offline

✅ **Dashboard Web**:
- Entrada de dados moderna
- Visualizações interativas
- Acesso remoto
- Compartilhamento fácil

✅ **Sincronização**:
- Scripts automatizados
- Bidirecional
- Flexível
- Confiável

### Escolha o melhor para cada situação!

**Use a planilha quando**:
- Estiver no escritório
- Precisar de análises profundas
- Quiser usar macros VBA
- Preferir Excel

**Use o dashboard quando**:
- Estiver remoto/mobile
- Quiser visualizações rápidas
- Precisar compartilhar dados
- Preferir interface web

**Sincronize regularmente** e tenha o melhor dos dois mundos! 🚀

---

**Arquivos incluídos**:
- `extrair_dados_planilha.py` ✅ (já existe)
- `sync_dashboard_planilha.py` ⭐ (novo, incluído no próximo pacote)
- `sync_planilha_dashboard.sh` ⭐ (novo, incluído no próximo pacote)
- `sync_bidirectional.sh` ⭐ (novo, incluído no próximo pacote)

