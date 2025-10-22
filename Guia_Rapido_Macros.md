# Guia Rápido - Macros VBA

## 🚀 Instalação Rápida (5 minutos)

1. **Habilitar Desenvolvedor**: Arquivo > Opções > Personalizar Faixa de Opções > Marcar "Desenvolvedor"
2. **Abrir Editor VBA**: Pressione `Alt + F11`
3. **Criar Módulo**: Inserir > Módulo
4. **Colar Código**: Copie todo o conteúdo de `Codigo_VBA_Completo.txt` e cole no módulo
5. **Atribuir Macros aos Botões**:
   - Aba "Resumo por Código", célula F1: Botão direito > Atribuir Macro > `AtualizarResumo`
   - Aba "Lançamentos", célula H1: Botão direito > Atribuir Macro > `LimparLancamentos`
6. **Salvar como XLSM**: Arquivo > Salvar Como > Tipo: "Pasta de Trabalho Habilitada para Macro (*.xlsm)"

---

## 📋 Macros Disponíveis

| # | Nome da Macro | Função | Como Usar |
|---|---------------|--------|-----------|
| 1 | `AtualizarResumo` | Atualiza cálculos do resumo | Clique na célula F1 (Resumo) ou Alt+F8 |
| 2 | `LimparLancamentos` | Limpa todos os lançamentos | Clique na célula H1 (Lançamentos) ou Alt+F8 |
| 3 | `LimparLancamentosComBackup` | Limpa com backup automático | Alt+F8 > Executar |
| 4 | `ExportarLancamentosCSV` | Exporta dados para CSV | Alt+F8 > Executar |
| 5 | `Atualização Automática` | Atualiza resumo automaticamente | Cola em ThisWorkbook (não em módulo) |
| 6 | `AdicionarNovoLancamento` | Formulário para novo lançamento | Alt+F8 > Executar |

---

## ⚡ Atalhos Essenciais

- `Alt + F8` - Abre lista de macros
- `Alt + F11` - Abre/Fecha Editor VBA
- `Ctrl + S` - Salva (no Editor VBA)
- `F5` - Executa macro (dentro do Editor VBA)

---

## ⚠️ Avisos Importantes

### Macro 2: LimparLancamentos
- ❌ **IRREVERSÍVEL** - Não pode ser desfeita!
- ✅ Solicita 2 confirmações antes de executar
- 💡 **Recomendação**: Use a Macro 3 (com backup) sempre que possível

### Macro 5: Atualização Automática
- 📍 Deve ser colada em **ThisWorkbook** (não em módulo)
- ⚠️ Pode deixar a planilha lenta com muitos dados
- 💡 Opcional - use apenas se necessário

---

## 🔧 Solução Rápida de Problemas

| Problema | Solução |
|----------|---------|
| "Macro não encontrada" | Verifique se o código foi colado no módulo e salvo |
| "Não é possível executar" | Habilite macros: Arquivo > Opções > Central de Confiabilidade |
| Botão não responde | Botão direito no botão > Atribuir Macro > Selecione a macro |
| Aviso de segurança | Clique em "Habilitar Conteúdo" na barra amarela |
| Planilha lenta | Desative a macro de atualização automática |

---

## 📦 Fluxo de Trabalho Recomendado

### Uso Diário
1. Abra a planilha e clique em "Habilitar Conteúdo"
2. Adicione lançamentos normalmente na aba "Lançamentos"
3. Se necessário, clique em "🔄 ATUALIZAR RESUMO" (célula F1 do Resumo)

### Fim de Período
1. **IMPORTANTE**: Faça backup primeiro!
2. Opção A: Pressione `Alt + F8` > `ExportarLancamentosCSV` > Executar
3. Opção B: Pressione `Alt + F8` > `LimparLancamentosComBackup` > Executar
4. Confirme as ações quando solicitado

### Entrada Rápida de Dados
1. Pressione `Alt + F8`
2. Selecione `AdicionarNovoLancamento`
3. Preencha os campos solicitados
4. Repita para cada lançamento

---

## 🎯 Dicas de Ouro

1. ✅ **Sempre salve como .xlsm** (formato com macros)
2. ✅ **Faça backup antes de limpar dados**
3. ✅ **Teste com dados de exemplo primeiro**
4. ✅ **Use LimparLancamentosComBackup ao invés de LimparLancamentos**
5. ✅ **Exporte para CSV periodicamente**
6. ❌ **Não altere nomes das abas** (quebra as macros)
7. ❌ **Não modifique a estrutura das colunas**

---

## 📞 Precisa de Ajuda?

1. Consulte o **Manual_Completo_Macros_VBA.md** para instruções detalhadas
2. Verifique a seção de Solução de Problemas
3. Entre em contato com o suporte técnico

---

**Versão**: 2.0 | **Atualização**: Out/2024 | **Compatibilidade**: Excel 2010+

