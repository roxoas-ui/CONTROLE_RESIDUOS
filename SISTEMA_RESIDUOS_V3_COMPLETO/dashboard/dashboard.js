// Dashboard de Resíduos Industriais v3.0
// Com suporte a unidade de medida, destinatários e transportadores

let dadosGlobais = null;
let graficos = {};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarDados();
    configurarDataAtual();
});

function configurarDataAtual() {
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById('inputData').value = hoje;
}

// Carregar dados
function carregarDados() {
    // Tentar carregar do localStorage primeiro
    const dadosLocal = localStorage.getItem('dadosResiduos_v3');
    
    if (dadosLocal) {
        dadosGlobais = JSON.parse(dadosLocal);
        console.log('Dados carregados do localStorage');
    } else {
        // Se não houver dados locais, criar estrutura vazia
        dadosGlobais = criarEstruturaVazia();
        salvarDadosLocal();
    }
    
    atualizarInterface();
}

function criarEstruturaVazia() {
    return {
        versao: '3.0',
        lancamentos: [],
        destinatarios: [
            {
                nome: 'EcoRecicla Ltda',
                cnpj: '12.345.678/0001-90',
                endereco: 'Rua das Indústrias, 1000',
                cep: '01234-567',
                cidade: 'São Paulo',
                estado: 'SP',
                licenca: 'LO-2024-001',
                validade: '2025-12-31',
                telefone: '(11) 3456-7890',
                email: 'contato@ecorecicla.com.br',
                observacoes: 'Especializada em reciclagem de metais'
            }
        ],
        transportadores: [
            {
                nome: 'TransResíduos Transportes Ltda',
                cnpj: '22.333.444/0001-55',
                endereco: 'Av. Logística, 2000',
                cep: '02000-000',
                cidade: 'São Paulo',
                estado: 'SP',
                licenca: 'LT-2024-010',
                validade: '2025-10-15',
                telefone: '(11) 4567-8901',
                email: 'operacional@transresiduos.com.br',
                observacoes: 'Transporte de resíduos classe I e II'
            }
        ],
        cadastro: [
            {codigo: "D001", descricao: "Óleo lubrificante usado"},
            {codigo: "A020", descricao: "Sucata metálica"},
            {codigo: "B015", descricao: "Lodo de pintura"},
            {codigo: "C100", descricao: "Embalagens contaminadas"},
            {codigo: "E050", descricao: "Resíduo de solda"}
        ],
        ultima_atualizacao: new Date().toISOString()
    };
}

// Salvar dados no localStorage
function salvarDadosLocal() {
    dadosGlobais.ultima_atualizacao = new Date().toISOString();
    localStorage.setItem('dadosResiduos_v3', JSON.stringify(dadosGlobais));
}

// Atualizar interface
function atualizarInterface() {
    atualizarDataAtualizacao();
    popularSelectCodigos();
    popularSelectDestinatarios();
    popularSelectTransportadores();
    atualizarKPIs();
    atualizarTabelaLancamentos();
    atualizarTabelaDestinatarios();
    atualizarTabelaTransportadores();
}

function atualizarDataAtualizacao() {
    const data = new Date(dadosGlobais.ultima_atualizacao);
    document.getElementById('ultimaAtualizacao').textContent = 
        `Última atualização: ${data.toLocaleString('pt-BR')}`;
}

// Popular selects
function popularSelectCodigos() {
    const select = document.getElementById('inputCodigo');
    select.innerHTML = '<option value="">Selecione um código</option>';
    
    dadosGlobais.cadastro.forEach(item => {
        const option = document.createElement('option');
        option.value = item.codigo;
        option.textContent = `${item.codigo} - ${item.descricao}`;
        option.dataset.descricao = item.descricao;
        select.appendChild(option);
    });
}

function popularSelectDestinatarios() {
    const select = document.getElementById('inputDestinatario');
    select.innerHTML = '<option value="">Selecione um destinatário</option>';
    
    dadosGlobais.destinatarios.forEach(dest => {
        const option = document.createElement('option');
        option.value = dest.nome;
        option.textContent = dest.nome;
        select.appendChild(option);
    });
}

function popularSelectTransportadores() {
    const select = document.getElementById('inputTransportador');
    select.innerHTML = '<option value="">Selecione um transportador</option>';
    
    dadosGlobais.transportadores.forEach(trans => {
        const option = document.createElement('option');
        option.value = trans.nome;
        option.textContent = trans.nome;
        select.appendChild(option);
    });
}

function preencherDescricao() {
    const select = document.getElementById('inputCodigo');
    const selectedOption = select.options[select.selectedIndex];
    const descricao = selectedOption.dataset.descricao || '';
    document.getElementById('inputDescricao').value = descricao;
}

// Salvar lançamento
function salvarLancamento(event) {
    event.preventDefault();
    
    const novoLancamento = {
        id: Date.now(),
        codigo: document.getElementById('inputCodigo').value,
        descricao: document.getElementById('inputDescricao').value,
        quantidade: parseFloat(document.getElementById('inputQuantidade').value),
        unidade: document.getElementById('inputUnidade').value,
        data: document.getElementById('inputData').value,
        destinacao: document.getElementById('inputDestinacao').value,
        destinatario: document.getElementById('inputDestinatario').value,
        transportador: document.getElementById('inputTransportador').value,
        observacoes: document.getElementById('inputObservacoes').value
    };
    
    dadosGlobais.lancamentos.push(novoLancamento);
    salvarDadosLocal();
    atualizarInterface();
    
    document.getElementById('formLancamento').reset();
    configurarDataAtual();
    fecharModal('modalLancamento');
    
    mostrarNotificacao('Lançamento adicionado com sucesso!');
}

// Salvar destinatário
function salvarDestinatario(event) {
    event.preventDefault();
    
    const novoDestinatario = {
        id: Date.now(),
        nome: document.getElementById('destNome').value,
        cnpj: document.getElementById('destCNPJ').value,
        endereco: document.getElementById('destEndereco').value,
        cep: document.getElementById('destCEP').value,
        cidade: document.getElementById('destCidade').value,
        estado: document.getElementById('destEstado').value,
        licenca: document.getElementById('destLicenca').value,
        validade: document.getElementById('destValidade').value,
        telefone: document.getElementById('destTelefone').value,
        email: document.getElementById('destEmail').value,
        observacoes: document.getElementById('destObservacoes').value
    };
    
    dadosGlobais.destinatarios.push(novoDestinatario);
    salvarDadosLocal();
    atualizarInterface();
    
    document.getElementById('formDestinatario').reset();
    fecharModal('modalDestinatario');
    
    mostrarNotificacao('Destinatário cadastrado com sucesso!');
}

// Salvar transportador
function salvarTransportador(event) {
    event.preventDefault();
    
    const novoTransportador = {
        id: Date.now(),
        nome: document.getElementById('transNome').value,
        cnpj: document.getElementById('transCNPJ').value,
        endereco: document.getElementById('transEndereco').value,
        cep: document.getElementById('transCEP').value,
        cidade: document.getElementById('transCidade').value,
        estado: document.getElementById('transEstado').value,
        licenca: document.getElementById('transLicenca').value,
        validade: document.getElementById('transValidade').value,
        telefone: document.getElementById('transTelefone').value,
        email: document.getElementById('transEmail').value,
        observacoes: document.getElementById('transObservacoes').value
    };
    
    dadosGlobais.transportadores.push(novoTransportador);
    salvarDadosLocal();
    atualizarInterface();
    
    document.getElementById('formTransportador').reset();
    fecharModal('modalTransportador');
    
    mostrarNotificacao('Transportador cadastrado com sucesso!');
}

// Atualizar KPIs
function atualizarKPIs() {
    const kpiGrid = document.getElementById('kpiGrid');
    
    // Calcular totais
    const totalResiduos = dadosGlobais.lancamentos.reduce((sum, l) => sum + l.quantidade, 0);
    const totalLancamentos = dadosGlobais.lancamentos.length;
    const totalDestinatarios = dadosGlobais.destinatarios.length;
    const totalTransportadores = dadosGlobais.transportadores.length;
    
    kpiGrid.innerHTML = `
        <div class="kpi-card">
            <div class="kpi-title">Total de Resíduos</div>
            <div class="kpi-value">${totalResiduos.toFixed(2)} <span class="kpi-unit">kg</span></div>
        </div>
        <div class="kpi-card">
            <div class="kpi-title">Lançamentos</div>
            <div class="kpi-value">${totalLancamentos}</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-title">Destinatários</div>
            <div class="kpi-value">${totalDestinatarios}</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-title">Transportadores</div>
            <div class="kpi-value">${totalTransportadores}</div>
        </div>
    `;
}

// Atualizar tabelas
function atualizarTabelaLancamentos() {
    const tbody = document.querySelector('#tabelaLancamentos tbody');
    tbody.innerHTML = '';
    
    dadosGlobais.lancamentos.forEach(lanc => {
        const tr = document.createElement('tr');
        const dataFormatada = new Date(lanc.data).toLocaleDateString('pt-BR');
        
        tr.innerHTML = `
            <td>${dataFormatada}</td>
            <td>${lanc.codigo}</td>
            <td>${lanc.descricao}</td>
            <td style="text-align: right;">${lanc.quantidade.toFixed(2)}</td>
            <td style="text-align: center;">${lanc.unidade}</td>
            <td>${lanc.destinacao}</td>
            <td>${lanc.destinatario || '-'}</td>
            <td>${lanc.transportador || '-'}</td>
            <td><button class="btn-delete" onclick="deletarLancamento(${lanc.id})">🗑️ Excluir</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function atualizarTabelaDestinatarios() {
    const tbody = document.querySelector('#tabelaDestinatarios tbody');
    tbody.innerHTML = '';
    
    dadosGlobais.destinatarios.forEach(dest => {
        const tr = document.createElement('tr');
        const validadeFormatada = dest.validade ? 
            new Date(dest.validade).toLocaleDateString('pt-BR') : '-';
        
        tr.innerHTML = `
            <td>${dest.nome}</td>
            <td>${dest.cnpj}</td>
            <td>${dest.cidade}/${dest.estado}</td>
            <td>${dest.licenca}</td>
            <td>${validadeFormatada}</td>
            <td><button class="btn-delete" onclick="deletarDestinatario(${dest.id})">🗑️ Excluir</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function atualizarTabelaTransportadores() {
    const tbody = document.querySelector('#tabelaTransportadores tbody');
    tbody.innerHTML = '';
    
    dadosGlobais.transportadores.forEach(trans => {
        const tr = document.createElement('tr');
        const validadeFormatada = trans.validade ? 
            new Date(trans.validade).toLocaleDateString('pt-BR') : '-';
        
        tr.innerHTML = `
            <td>${trans.nome}</td>
            <td>${trans.cnpj}</td>
            <td>${trans.cidade}/${trans.estado}</td>
            <td>${trans.licenca}</td>
            <td>${validadeFormatada}</td>
            <td><button class="btn-delete" onclick="deletarTransportador(${trans.id})">🗑️ Excluir</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// Deletar registros
function deletarLancamento(id) {
    if (confirm('Tem certeza que deseja excluir este lançamento?')) {
        dadosGlobais.lancamentos = dadosGlobais.lancamentos.filter(l => l.id !== id);
        salvarDadosLocal();
        atualizarInterface();
        mostrarNotificacao('Lançamento excluído com sucesso!');
    }
}

function deletarDestinatario(id) {
    if (confirm('Tem certeza que deseja excluir este destinatário?')) {
        dadosGlobais.destinatarios = dadosGlobais.destinatarios.filter(d => d.id !== id);
        salvarDadosLocal();
        atualizarInterface();
        mostrarNotificacao('Destinatário excluído com sucesso!');
    }
}

function deletarTransportador(id) {
    if (confirm('Tem certeza que deseja excluir este transportador?')) {
        dadosGlobais.transportadores = dadosGlobais.transportadores.filter(t => t.id !== id);
        salvarDadosLocal();
        atualizarInterface();
        mostrarNotificacao('Transportador excluído com sucesso!');
    }
}

// Exportar dados
function exportarDados() {
    const dataStr = JSON.stringify(dadosGlobais, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `residuos_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    mostrarNotificacao('Dados exportados com sucesso!');
}

// Controle de modais
function abrirModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Controle de abas
function mudarAba(abaId) {
    // Remover classe active de todos os botões e conteúdos
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Adicionar classe active ao botão e conteúdo selecionados
    event.target.classList.add('active');
    document.getElementById(`tab-${abaId}`).classList.add('active');
}

// Notificações
function mostrarNotificacao(mensagem) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = mensagem;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
