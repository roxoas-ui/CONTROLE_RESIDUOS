# 📊 Dashboard de Controle de Resíduos Industriais

Dashboard web interativo para visualização e análise de dados de resíduos industriais.

## 🌐 Demo Online

Acesse o dashboard: [https://dashboard-residuos-industriais.netlify.app](https://dashboard-residuos-industriais.netlify.app)

## ✨ Características

- 📊 5 tipos de gráficos interativos
- 🔍 Filtros dinâmicos
- 📈 4 KPIs principais
- 📋 Tabelas detalhadas
- 📱 100% responsivo
- ⚡ Performance otimizada

## 🚀 Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- Chart.js 4.4.0

## 📦 Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dashboard-residuos.git

# Entre no diretório
cd dashboard-residuos

# Inicie um servidor local
python3 -m http.server 8080

# Acesse http://localhost:8080
```

## 🔄 Atualização de Dados

1. Edite o arquivo `dados_residuos.json`
2. Recarregue a página no navegador
3. Os dados serão atualizados automaticamente

## 📝 Estrutura de Dados

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
  "destinacoes": [...]
}
```

## 🎨 Personalização

### Alterar Cores

Edite o array `cores` em `dashboard.js`:

```javascript
const cores = [
    '#4472C4',  // Azul
    '#ED7D31',  // Laranja
    // Adicione suas cores
];
```

### Alterar Layout

Edite os estilos CSS em `index.html`:

```css
.kpis-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

## 📊 Gráficos Disponíveis

1. **Gráfico de Pizza** - Distribuição percentual
2. **Gráfico de Barras Verticais** - Top 10 resíduos
3. **Gráfico de Barras Horizontais** - Visão completa
4. **Gráfico de Rosca** - Distribuição por destinação
5. **Gráfico de Linha** - Evolução temporal

## 🔍 Filtros

- Filtro por tipo de destinação
- Filtro por código de resíduo
- Recálculo automático de KPIs
- Atualização instantânea de gráficos

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Opera 76+

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👥 Autor

Sistema de Gestão Ambiental

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no GitHub.

---

**Desenvolvido com ❤️ para gestão ambiental eficiente**

