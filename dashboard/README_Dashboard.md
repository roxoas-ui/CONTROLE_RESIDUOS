# Dashboard Interativo - Controle de Resíduos Industriais

## 🎯 Visão Geral

Dashboard web interativo desenvolvido para visualização em tempo real dos dados de resíduos industriais. Interface moderna, responsiva e totalmente funcional com gráficos dinâmicos e filtros interativos.

---

## ✨ Características Principais

### 🎨 Design Moderno
- Interface profissional com gradiente de cores
- Layout responsivo (funciona em desktop, tablet e mobile)
- Animações suaves e transições elegantes
- Cards com efeito hover
- Paleta de cores consistente

### 📊 Visualizações Interativas
- **5 tipos de gráficos** diferentes
- Gráficos criados com Chart.js (biblioteca líder de mercado)
- Tooltips informativos ao passar o mouse
- Legendas interativas
- Atualização dinâmica baseada em filtros

### 🔍 Filtros Dinâmicos
- Filtro por tipo de destinação
- Filtro por código de resíduo
- Aplicação instantânea de filtros
- Recálculo automático de KPIs e gráficos
- Botão para limpar filtros

### 📈 Indicadores (KPIs)
- 4 indicadores principais em destaque
- Atualização em tempo real
- Formatação numérica brasileira
- Ícones ilustrativos
- Cores indicativas (azul = normal, vermelho = alerta)

---

## 📊 Componentes do Dashboard

### 1. **Cabeçalho**
- Título do sistema
- Subtítulo descritivo
- Data/hora da última atualização
- Design limpo e profissional

### 2. **Painel de KPIs**
Grid com 4 cards:
- 📦 **Total de Resíduos**: Soma geral de todos os resíduos
- 🗂️ **Tipos de Resíduos**: Quantidade de categorias diferentes
- ⚠️ **Maior Gerador**: Código do resíduo mais crítico (em vermelho)
- 📋 **Total de Lançamentos**: Número de registros

### 3. **Barra de Filtros**
- Dropdown de destinações
- Dropdown de códigos
- Botão "Aplicar Filtros"
- Botão "Limpar"

### 4. **Gráficos Interativos**

#### 📊 Gráfico de Pizza - Distribuição Percentual
- Mostra os top 8 resíduos
- Percentuais automáticos
- Legenda lateral
- Cores diferenciadas

#### 📈 Gráfico de Barras - Top 10
- Top 10 resíduos mais gerados
- Barras verticais
- Eixos com títulos
- Tooltips informativos

#### 📊 Gráfico de Barras Horizontais - Todos os Resíduos
- Visualização completa de todos os tipos
- Barras coloridas
- Ordenação por quantidade
- Largura total da tela

#### 🔄 Gráfico de Rosca - Distribuição por Destinação
- Tipos de destinação
- Cores específicas:
  - Verde: Reciclagem
  - Amarelo: Coprocessamento
  - Vermelho: Aterro
  - Cinza: Outros

#### 📅 Gráfico de Linha - Temporal
- Evolução ao longo do tempo
- Linha suavizada
- Área preenchida
- Datas formatadas em português

### 5. **Tabelas de Dados**

#### 📋 Tabela de Lançamentos
- Últimos 20 lançamentos
- Colunas: Código, Descrição, Quantidade, Data, Destinação, Observações
- Badges coloridos para destinações
- Hover effect nas linhas

#### 🏆 Tabela Top 10
- Top 10 resíduos mais gerados
- Medalhas para os 3 primeiros (🥇🥈🥉)
- Ranking numerado
- Percentuais calculados

---

## 🚀 Como Usar

### Acesso Local

1. **Abrir o dashboard**:
   - Navegue até a pasta `/home/ubuntu/dashboard/`
   - Abra o arquivo `index.html` em um navegador moderno
   - Ou inicie um servidor local (recomendado)

2. **Iniciar servidor local**:
   ```bash
   cd /home/ubuntu/dashboard
   python3 -m http.server 8080
   ```
   Depois acesse: `http://localhost:8080`

### Acesso Remoto

O dashboard está disponível publicamente em:
**https://8080-id4i654lv9ttqfvzs9fkt-3e87c6bb.manusvm.computer**

---

## 🔧 Estrutura de Arquivos

```
dashboard/
│
├── index.html              # Página principal do dashboard
├── dashboard.js            # Lógica JavaScript e gráficos
├── dados_residuos.json     # Dados em formato JSON
└── README_Dashboard.md     # Esta documentação
```

---

## 📝 Atualização de Dados

### Método Automático

Execute o script Python para extrair dados da planilha:

```bash
python3 /home/ubuntu/extrair_dados_planilha.py
```

Isso irá:
1. Ler a planilha Excel
2. Extrair dados das 3 abas
3. Calcular estatísticas
4. Gerar o arquivo `dados_residuos.json`
5. Dashboard será atualizado automaticamente ao recarregar

### Método Manual

Edite o arquivo `dados_residuos.json` diretamente seguindo a estrutura:

```json
{
  "kpis": {
    "total_residuos": 0,
    "tipos_residuos": 0,
    "maior_gerador_codigo": "N/A",
    "maior_gerador_quantidade": 0,
    "total_lancamentos": 0
  },
  "lancamentos": [...],
  "resumo": [...],
  "top10": [...],
  "cadastro": [...],
  "destinacoes": [...],
  "ultima_atualizacao": "2024-10-21 22:00:00"
}
```

---

## 🎨 Personalização

### Alterar Cores

Edite as variáveis no arquivo `dashboard.js`:

```javascript
const cores = [
    '#4472C4',  // Azul principal
    '#ED7D31',  // Laranja
    '#A5A5A5',  // Cinza
    // ... adicione mais cores
];
```

### Alterar Estilos

Edite a seção `<style>` no arquivo `index.html`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Altere o gradiente de fundo */
}

.kpi-card {
    background: white;
    /* Altere o fundo dos cards */
}
```

### Adicionar Novos Gráficos

1. Adicione um novo canvas no HTML:
```html
<div class="chart-card">
    <h3 class="chart-title">Novo Gráfico</h3>
    <div class="chart-container">
        <canvas id="chartNovo"></canvas>
    </div>
</div>
```

2. Crie a função no JavaScript:
```javascript
function criarGraficoNovo() {
    const ctx = document.getElementById('chartNovo').getContext('2d');
    // ... código do gráfico
}
```

3. Chame a função em `criarGraficos()`:
```javascript
function criarGraficos() {
    criarGraficoPizza();
    criarGraficoTop10();
    // ... outros gráficos
    criarGraficoNovo();  // Adicione aqui
}
```

---

## 🔍 Funcionalidades Interativas

### Filtros

**Como usar**:
1. Selecione uma destinação no primeiro dropdown
2. Ou selecione um código no segundo dropdown
3. Clique em "🔍 Aplicar Filtros"
4. Todos os gráficos e tabelas serão atualizados
5. KPIs serão recalculados
6. Clique em "🔄 Limpar" para resetar

**O que é filtrado**:
- Lançamentos na tabela
- Dados dos gráficos
- KPIs (recalculados)
- Top 10 (reordenado)
- Gráfico temporal

### Tooltips

Passe o mouse sobre:
- Gráficos: Mostra valores detalhados
- Cards KPI: Efeito de elevação
- Linhas da tabela: Destaque visual

### Responsividade

O dashboard se adapta automaticamente a:
- **Desktop**: Layout completo com múltiplas colunas
- **Tablet**: Layout ajustado com 2 colunas
- **Mobile**: Layout em coluna única

---

## 📊 Análises Possíveis

### Análise 1: Identificação de Prioridades
1. Observe o KPI "Maior Gerador" (em vermelho)
2. Consulte o gráfico Top 10
3. Verifique percentuais no gráfico de pizza
4. Foque nos 3 principais resíduos

### Análise 2: Efetividade de Destinação
1. Observe o gráfico de destinação
2. Calcule % de reciclagem vs aterro
3. Identifique oportunidades de melhoria

### Análise 3: Tendências Temporais
1. Analise o gráfico temporal
2. Identifique picos de geração
3. Correlacione com eventos/períodos

### Análise 4: Distribuição de Esforços
1. Use filtros para analisar por tipo
2. Compare quantidades entre categorias
3. Identifique concentração ou dispersão

---

## 🌐 Compatibilidade

### Navegadores Suportados
- ✅ Google Chrome (recomendado)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Opera

### Versões Mínimas
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

### Requisitos
- JavaScript habilitado
- Conexão com internet (para carregar Chart.js)
- Resolução mínima: 320px (mobile)

---

## 🔒 Segurança

### Dados Locais
- Todos os dados são processados localmente
- Nenhuma informação é enviada para servidores externos
- JSON armazenado localmente no servidor

### HTTPS
- Dashboard pode ser servido via HTTPS
- Recomendado para ambientes de produção

### Acesso
- Configure autenticação se necessário
- Use firewall para restringir acesso
- Implemente controle de acesso por IP

---

## 🚀 Deploy em Produção

### Opção 1: Servidor Web Simples

```bash
# Nginx
sudo apt install nginx
sudo cp -r /home/ubuntu/dashboard /var/www/html/
sudo systemctl restart nginx
```

### Opção 2: Apache

```bash
# Apache
sudo apt install apache2
sudo cp -r /home/ubuntu/dashboard /var/www/html/
sudo systemctl restart apache2
```

### Opção 3: Node.js (Express)

```bash
npm install express
node server.js
```

### Opção 4: Docker

```dockerfile
FROM nginx:alpine
COPY dashboard/ /usr/share/nginx/html/
EXPOSE 80
```

---

## 📱 Versão Mobile

O dashboard é totalmente responsivo e funciona perfeitamente em dispositivos móveis:

- Layout adaptativo
- Gráficos redimensionáveis
- Tabelas com scroll horizontal
- Filtros acessíveis
- Performance otimizada

---

## 🔄 Integração com Planilha Excel

### Fluxo de Atualização

1. **Adicionar dados na planilha Excel**
2. **Executar script de extração**:
   ```bash
   python3 /home/ubuntu/extrair_dados_planilha.py
   ```
3. **Recarregar dashboard no navegador** (F5)
4. **Dados atualizados automaticamente**

### Automação

Crie um script para atualização automática:

```bash
#!/bin/bash
# atualizar_dashboard.sh

cd /home/ubuntu
python3 extrair_dados_planilha.py
echo "Dashboard atualizado em $(date)"
```

Agende com cron:
```bash
# Atualizar a cada hora
0 * * * * /home/ubuntu/atualizar_dashboard.sh
```

---

## 💡 Dicas de Uso

### Dica 1: Performance
- Para grandes volumes de dados, considere limitar a tabela de lançamentos
- Use paginação se necessário
- Otimize o JSON removendo dados desnecessários

### Dica 2: Apresentações
- Use modo tela cheia (F11)
- Prepare filtros específicos para cada slide
- Tire screenshots dos gráficos

### Dica 3: Relatórios
- Imprima a página (Ctrl+P)
- Exporte gráficos clicando com botão direito
- Use ferramentas de captura de tela

### Dica 4: Análise Comparativa
- Abra múltiplas abas com filtros diferentes
- Compare períodos salvando JSONs diferentes
- Use ferramentas de diff para comparar dados

---

## 🐛 Solução de Problemas

### Problema: Dashboard não carrega
**Solução**:
- Verifique se o arquivo `dados_residuos.json` existe
- Abra o console do navegador (F12) para ver erros
- Verifique se o servidor está rodando

### Problema: Gráficos não aparecem
**Solução**:
- Verifique conexão com internet (Chart.js é carregado via CDN)
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Verifique se há dados no JSON

### Problema: Filtros não funcionam
**Solução**:
- Recarregue a página (F5)
- Verifique se há dados para filtrar
- Abra o console e procure por erros JavaScript

### Problema: Dados desatualizados
**Solução**:
- Execute o script de extração novamente
- Recarregue a página com cache limpo (Ctrl+F5)
- Verifique a data de última atualização no cabeçalho

---

## 📚 Recursos Adicionais

### Documentação Chart.js
- https://www.chartjs.org/docs/

### Tutoriais JavaScript
- MDN Web Docs: https://developer.mozilla.org/

### Design Responsivo
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

## 🎉 Conclusão

Este dashboard oferece uma solução completa e profissional para visualização de dados de resíduos industriais:

- ✅ Interface moderna e intuitiva
- ✅ Gráficos interativos e informativos
- ✅ Filtros dinâmicos
- ✅ Totalmente responsivo
- ✅ Fácil atualização de dados
- ✅ Pronto para produção

**Comece a usar agora e transforme seus dados em insights visuais!**

---

**Versão**: 1.0  
**Data**: Outubro de 2024  
**Tecnologias**: HTML5, CSS3, JavaScript, Chart.js  
**Compatibilidade**: Todos os navegadores modernos  
**Autor**: Sistema de Gestão Ambiental

