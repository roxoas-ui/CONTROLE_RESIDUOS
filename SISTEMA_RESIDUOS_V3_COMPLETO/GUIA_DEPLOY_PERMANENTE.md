# 🚀 Guia de Deploy Permanente - Dashboard de Resíduos

Este guia apresenta **3 métodos gratuitos** para hospedar permanentemente o dashboard de controle de resíduos industriais.

---

## 📋 Índice

1. [Método 1: Netlify (Recomendado)](#método-1-netlify-recomendado)
2. [Método 2: GitHub Pages](#método-2-github-pages)
3. [Método 3: Vercel](#método-3-vercel)
4. [Comparação dos Métodos](#comparação-dos-métodos)
5. [Atualização de Dados](#atualização-de-dados)
6. [Domínio Personalizado](#domínio-personalizado)

---

## Método 1: Netlify (Recomendado)

### ✅ Vantagens
- Deploy em 2 minutos
- HTTPS automático
- CDN global
- Atualizações via Git ou interface web
- 100GB de banda mensal grátis
- Suporte a formulários e funções serverless

### 📝 Passo a Passo

#### Opção A: Deploy via Interface Web (Mais Fácil)

1. **Acesse o Netlify**
   - Vá para: https://www.netlify.com
   - Clique em "Sign up" (ou "Log in" se já tiver conta)
   - Cadastre-se com GitHub, GitLab ou email

2. **Faça Upload do Dashboard**
   - No painel do Netlify, clique em "Add new site" > "Deploy manually"
   - Arraste o arquivo `Dashboard_Residuos_Interativo.zip` para a área de upload
   - Ou arraste a pasta `dashboard` diretamente
   - Aguarde o upload e deploy (30-60 segundos)

3. **Pronto!**
   - Seu dashboard estará disponível em uma URL como:
   - `https://random-name-123456.netlify.app`
   - Você pode personalizar o nome em "Site settings" > "Change site name"

#### Opção B: Deploy via Git (Mais Profissional)

1. **Criar Repositório no GitHub**
   ```bash
   # No terminal, na pasta do dashboard
   cd /home/ubuntu/dashboard
   
   # Já inicializamos o Git, agora vamos conectar ao GitHub
   # Primeiro, crie um repositório no GitHub (https://github.com/new)
   # Depois execute:
   
   git remote add origin https://github.com/SEU-USUARIO/dashboard-residuos.git
   git branch -M main
   git push -u origin main
   ```

2. **Conectar Netlify ao GitHub**
   - No Netlify, clique em "Add new site" > "Import an existing project"
   - Escolha "GitHub"
   - Autorize o Netlify a acessar seus repositórios
   - Selecione o repositório `dashboard-residuos`
   - Configure:
     - Branch: `main`
     - Build command: (deixe vazio)
     - Publish directory: `.`
   - Clique em "Deploy site"

3. **Deploy Automático**
   - Agora, sempre que você fizer push no GitHub, o Netlify atualiza automaticamente!
   - `git add . && git commit -m "Atualização" && git push`

### 🔧 Configurações Avançadas

**Arquivo `netlify.toml`** (já incluído):
```toml
[build]
  publish = "."
  command = "echo 'No build required'"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Método 2: GitHub Pages

### ✅ Vantagens
- Totalmente gratuito
- Integração perfeita com GitHub
- HTTPS automático
- Domínio personalizado gratuito
- Versionamento completo

### 📝 Passo a Passo

1. **Criar Repositório no GitHub**
   - Acesse: https://github.com/new
   - Nome do repositório: `dashboard-residuos`
   - Marque "Public"
   - Clique em "Create repository"

2. **Fazer Push do Código**
   ```bash
   cd /home/ubuntu/dashboard
   
   # Se ainda não inicializou o Git
   git init
   git add .
   git commit -m "Initial commit"
   
   # Conectar ao GitHub
   git remote add origin https://github.com/SEU-USUARIO/dashboard-residuos.git
   git branch -M main
   git push -u origin main
   ```

3. **Ativar GitHub Pages**
   - No repositório, vá em "Settings"
   - No menu lateral, clique em "Pages"
   - Em "Source", selecione:
     - Branch: `main`
     - Folder: `/ (root)`
   - Clique em "Save"
   - Aguarde 1-2 minutos

4. **Acessar o Dashboard**
   - URL será: `https://SEU-USUARIO.github.io/dashboard-residuos/`
   - Copie a URL e compartilhe!

### 🔄 Atualizar o Dashboard

```bash
# Após modificar os arquivos
git add .
git commit -m "Atualização dos dados"
git push

# GitHub Pages atualiza automaticamente em 1-2 minutos
```

---

## Método 3: Vercel

### ✅ Vantagens
- Deploy ultra-rápido
- CDN global
- HTTPS automático
- Analytics integrado
- Suporte a funções serverless

### 📝 Passo a Passo

1. **Acesse o Vercel**
   - Vá para: https://vercel.com
   - Clique em "Sign up"
   - Cadastre-se com GitHub (recomendado)

2. **Importar Projeto**
   - Clique em "Add New..." > "Project"
   - Selecione o repositório `dashboard-residuos` do GitHub
   - Ou faça upload manual da pasta
   - Configure:
     - Framework Preset: "Other"
     - Build Command: (deixe vazio)
     - Output Directory: `.`
   - Clique em "Deploy"

3. **Pronto!**
   - Dashboard disponível em: `https://dashboard-residuos.vercel.app`
   - Deploy automático a cada push no GitHub

### 🔧 Configuração Opcional

**Arquivo `vercel.json`**:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "*.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

---

## Comparação dos Métodos

| Característica | Netlify | GitHub Pages | Vercel |
|----------------|---------|--------------|--------|
| **Facilidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Velocidade** | ⚡⚡⚡ | ⚡⚡ | ⚡⚡⚡ |
| **Banda Grátis** | 100GB/mês | Ilimitado | 100GB/mês |
| **HTTPS** | ✅ Automático | ✅ Automático | ✅ Automático |
| **CDN Global** | ✅ Sim | ✅ Sim | ✅ Sim |
| **Deploy Manual** | ✅ Sim | ❌ Não | ✅ Sim |
| **Deploy via Git** | ✅ Sim | ✅ Sim | ✅ Sim |
| **Domínio Custom** | ✅ Grátis | ✅ Grátis | ✅ Grátis |
| **Analytics** | 💰 Pago | ❌ Não | ✅ Grátis |
| **Formulários** | ✅ Sim | ❌ Não | ❌ Não |

### 🏆 Recomendação

- **Para iniciantes**: Netlify (deploy manual via interface)
- **Para desenvolvedores**: GitHub Pages (integração perfeita)
- **Para performance máxima**: Vercel (CDN ultra-rápido)

---

## Atualização de Dados

### Método 1: Atualização Manual (Netlify)

1. **Edite os dados localmente**
   - Modifique `dados_residuos.json`
   - Ou execute `python3 extrair_dados_planilha.py`

2. **Faça upload no Netlify**
   - Acesse o painel do Netlify
   - Vá em "Deploys"
   - Arraste a pasta atualizada
   - Ou use a opção "Deploy site"

### Método 2: Atualização via Git (Todos)

```bash
# 1. Atualizar dados da planilha
python3 /home/ubuntu/extrair_dados_planilha.py

# 2. Commit e push
cd /home/ubuntu/dashboard
git add dados_residuos.json
git commit -m "Atualização dos dados - $(date '+%Y-%m-%d')"
git push

# 3. Deploy automático em 1-2 minutos
```

### Método 3: Automação com GitHub Actions

**Arquivo `.github/workflows/update-data.yml`**:

```yaml
name: Atualizar Dados

on:
  schedule:
    - cron: '0 */6 * * *'  # A cada 6 horas
  workflow_dispatch:  # Permite execução manual

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: pip install openpyxl pandas
      
      - name: Update data
        run: python3 extrair_dados_planilha.py
      
      - name: Commit and push
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add dados_residuos.json
          git commit -m "Auto-update data" || exit 0
          git push
```

---

## Domínio Personalizado

### Netlify

1. **Compre um domínio** (opcional)
   - Namecheap, GoDaddy, Registro.br, etc.
   - Ou use subdomínio gratuito do Netlify

2. **Configure no Netlify**
   - Vá em "Domain settings"
   - Clique em "Add custom domain"
   - Digite: `dashboard.seudominio.com.br`
   - Siga as instruções de DNS

3. **Configurar DNS**
   - Adicione um registro CNAME:
   - Nome: `dashboard`
   - Valor: `seu-site.netlify.app`

### GitHub Pages

1. **Adicionar domínio**
   - Settings > Pages > Custom domain
   - Digite: `dashboard.seudominio.com.br`
   - Salve

2. **Configurar DNS**
   - Adicione registros A:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

---

## 🔒 Segurança

### HTTPS
- ✅ Todos os métodos incluem HTTPS gratuito
- ✅ Certificado SSL automático (Let's Encrypt)
- ✅ Renovação automática

### Proteção de Dados
- ✅ Dados processados no cliente (JavaScript)
- ✅ Nenhuma informação sensível no código
- ✅ JSON pode ser protegido com autenticação

### Autenticação (Opcional)

**Netlify Identity** (gratuito até 1000 usuários):
```html
<!-- Adicione no index.html -->
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

---

## 📊 Monitoramento

### Netlify Analytics (Pago)
- Visitantes únicos
- Páginas mais acessadas
- Fontes de tráfego

### Google Analytics (Gratuito)

Adicione no `<head>` do `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🚀 Performance

### Otimizações Aplicadas

✅ **Carregamento Assíncrono**
- Chart.js carregado via CDN
- JavaScript não-bloqueante

✅ **Cache**
- Arquivos estáticos cacheados
- JSON com cache controlado

✅ **Compressão**
- Gzip automático (Netlify/Vercel)
- Brotli quando disponível

✅ **CDN Global**
- Distribuição mundial
- Latência mínima

### Melhorias Adicionais

**Minificação** (opcional):
```bash
# Instalar minificador
npm install -g html-minifier uglify-js

# Minificar HTML
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html

# Minificar JavaScript
uglifyjs dashboard.js -o dashboard.min.js -c -m
```

---

## 🔄 Backup

### Backup Automático via Git

```bash
# Script de backup
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
git tag "backup_$DATE"
git push --tags
```

### Backup Manual

```bash
# Criar backup local
cd /home/ubuntu
tar -czf dashboard_backup_$(date +%Y%m%d).tar.gz dashboard/

# Ou usar o ZIP já criado
cp Dashboard_Residuos_Interativo.zip ~/backups/
```

---

## 📱 PWA (Progressive Web App)

Transforme o dashboard em um app instalável:

**Arquivo `manifest.json`**:
```json
{
  "name": "Dashboard de Resíduos",
  "short_name": "Resíduos",
  "description": "Controle de Resíduos Industriais",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#667eea",
  "theme_color": "#4472C4",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Adicione no `<head>`:
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#4472C4">
```

---

## 🎯 Checklist de Deploy

### Antes do Deploy
- [ ] Testar localmente
- [ ] Verificar dados no JSON
- [ ] Confirmar gráficos funcionando
- [ ] Testar filtros
- [ ] Verificar responsividade
- [ ] Testar em diferentes navegadores

### Durante o Deploy
- [ ] Escolher método (Netlify/GitHub Pages/Vercel)
- [ ] Criar conta na plataforma
- [ ] Fazer upload/push do código
- [ ] Verificar build bem-sucedido
- [ ] Testar URL gerada

### Após o Deploy
- [ ] Acessar URL pública
- [ ] Testar todas as funcionalidades
- [ ] Verificar performance
- [ ] Compartilhar URL com equipe
- [ ] Configurar domínio personalizado (opcional)
- [ ] Configurar analytics (opcional)
- [ ] Documentar URL e credenciais

---

## 📞 Suporte

### Problemas Comuns

**Dashboard não carrega**:
- Verifique se `dados_residuos.json` existe
- Confirme que todos os arquivos foram enviados
- Limpe cache do navegador

**Gráficos não aparecem**:
- Verifique conexão com CDN do Chart.js
- Confirme que há dados no JSON
- Abra console do navegador (F12)

**Deploy falhou**:
- Verifique logs de build na plataforma
- Confirme estrutura de arquivos
- Verifique configurações do projeto

### Links Úteis

- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages Docs**: https://docs.github.com/pages
- **Vercel Docs**: https://vercel.com/docs
- **Chart.js Docs**: https://www.chartjs.org/docs/

---

## 🎉 Conclusão

Você agora tem **3 opções gratuitas** para hospedar permanentemente seu dashboard:

1. **Netlify** - Mais fácil e completo
2. **GitHub Pages** - Melhor integração com Git
3. **Vercel** - Performance máxima

**Escolha o método que melhor se adapta às suas necessidades e comece a usar!**

---

**Desenvolvido com ❤️ para gestão ambiental eficiente**

**Versão**: 1.0  
**Data**: Outubro de 2024  
**Autor**: Sistema de Gestão Ambiental

