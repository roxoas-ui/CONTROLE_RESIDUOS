#!/bin/bash

# Script de Deploy Rápido para Netlify
# Uso: ./deploy.sh

echo "🚀 Iniciando deploy do Dashboard de Resíduos..."
echo ""

# Verificar se está na pasta correta
if [ ! -f "index.html" ]; then
    echo "❌ Erro: Execute este script na pasta do dashboard"
    exit 1
fi

# Verificar se o Git está configurado
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositório Git..."
    git init
    git config user.email "dashboard@residuos.com"
    git config user.name "Dashboard Residuos"
fi

# Adicionar todos os arquivos
echo "📝 Adicionando arquivos..."
git add .

# Fazer commit
echo "💾 Criando commit..."
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "Deploy: $TIMESTAMP" || echo "Nenhuma alteração para commit"

echo ""
echo "✅ Preparação concluída!"
echo ""
echo "📋 Próximos passos para deploy:"
echo ""
echo "OPÇÃO 1 - Deploy Manual no Netlify (Mais Fácil):"
echo "  1. Acesse: https://app.netlify.com/drop"
echo "  2. Arraste esta pasta para a área de upload"
echo "  3. Aguarde o deploy (30-60 segundos)"
echo "  4. Copie a URL gerada!"
echo ""
echo "OPÇÃO 2 - Deploy via GitHub + Netlify (Automático):"
echo "  1. Crie um repositório no GitHub: https://github.com/new"
echo "  2. Execute os comandos abaixo (substitua SEU-USUARIO):"
echo ""
echo "     git remote add origin https://github.com/SEU-USUARIO/dashboard-residuos.git"
echo "     git branch -M main"
echo "     git push -u origin main"
echo ""
echo "  3. Acesse: https://app.netlify.com"
echo "  4. Clique em 'Add new site' > 'Import an existing project'"
echo "  5. Conecte ao GitHub e selecione o repositório"
echo "  6. Clique em 'Deploy site'"
echo ""
echo "OPÇÃO 3 - Deploy via Netlify CLI (Avançado):"
echo "  1. Instale: npm install -g netlify-cli"
echo "  2. Execute: netlify deploy --prod"
echo ""
echo "🎉 Boa sorte com o deploy!"

