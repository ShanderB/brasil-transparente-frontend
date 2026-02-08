import { OrigemPreposicao } from "app/models/origem-fonte-dados.model";

export const environmentData = {
  pixKey: 'brasiltransparente@pm.me',
  contactEmail: 'brasiltransparente@pm.me',
  fontesDadosOrigem: [
    {
      id: 'executivo',
      titulo: 'Poder Executivo',
      descricao: '',
      fontes: [
        { nome: 'Portal da Transparência', url: 'https://portaldatransparencia.gov.br/download-de-dados/despesas-execucao', preposicao: OrigemPreposicao.Do }
      ]
    },
    {
      id: 'legislativo',
      titulo: 'Poder Legislativo',
      descricao: '',
      fontes: [
        { nome: 'Câmara dos Deputados', url: 'https://www2.camara.leg.br/transparencia/receitas-e-despesas/despesas/despesas-consolidadas', preposicao: OrigemPreposicao.Da },
        { nome: 'Senado Federal', url: 'https://www12.senado.leg.br/transparencia/orcamento-e-financas/safin/execucao-orcamentaria-e-financeira', preposicao: OrigemPreposicao.Do }
      ]
    },
    {
      id: 'judiciario',
      titulo: 'Poder Judiciário',
      descricao: 'Os dados dos órgãos abaixo são disponibilizados por meio do Conselho Nacional de Justiça (CNJ), que centraliza as informações de transparência do Poder Judiciário. Para acessar os dados detalhados dos órgãos abaixo, visite o',
      portalUrl: 'https://paineisanalytics.cnj.jus.br/single/?appid=cb1bf133-5a51-4464-9978-7bf3df3782f7&sheet=c069d72e-0640-4b17-a6de-8d6590b4a698&lang=pt-BR&opt=ctxmenu,currsel&select=clearall',
      portalNome: 'portal do CNJ',
      fontes: [
        { nome: 'Supremo Tribunal Federal', url: 'https://portal.stf.jus.br/textos/verTexto.asp?servico=centralDoCidadaoAcessoInformacaoGestaoOrcamentaria', preposicao: OrigemPreposicao.Do }
      ],
      outrasEntidades: [
        { nome: 'Conselho Nacional de Justiça (CNJ)' },
        { nome: 'Superior Tribunal de Justiça (STJ)' },
        { nome: 'Justiça do Distrito Federal e Territórios' },
        { nome: 'Justiça do Trabalho' },
        { nome: 'Justiça Eleitoral' },
        { nome: 'Justiça Federal' },
        { nome: 'Justiça Militar' }
      ]
    },
    {
      id: 'autonomos',
      titulo: 'Órgãos Autônomos',
      descricao: '',
      fontes: [
        { nome: 'Tribunal de Contas da União (TCU)', url: 'https://contas.tcu.gov.br/ords/f?p=1136:1:108340862899860::NO:::', preposicao: OrigemPreposicao.Do },
        { nome: 'Defensoria Pública da União (DPU)', url: 'https://www.dpu.def.br/transparencia/orcamento-e-financas', preposicao: OrigemPreposicao.Da },
        { nome: 'Ministério Público Federal (MPF)', url: 'http://www.transparencia.mpf.mp.br/conteudo/execucao-orcamentaria-e-financeira/detalhamento-de-despesas', preposicao: OrigemPreposicao.Do },
        { nome: 'Ministério Público do Trabalho (MPT)', url: 'https://mpt.mp.br/MPTransparencia/pages/portal/consulta.xhtml', preposicao: OrigemPreposicao.Do },
        { nome: 'Ministério Público Militar (MPM)', url: 'https://transparencia.mpm.mp.br/execucao-orcamentaria-e-financeira/?ano=2024', preposicao: OrigemPreposicao.Do },
        { nome: 'Ministério Público do Distrito Federal e Territórios (MPDFT)', url: 'https://www.mpdft.mp.br/transparencia/index.php?item=despesas&resp=DETALHAMENTO_DAS_DESPESAS', preposicao: OrigemPreposicao.Do },
        { nome: 'Escola Superior do Ministério Público da União (ESMPU)', url: 'https://escola.mpu.mp.br/transparencia/portal-da-transparencia/execucao-orcamentaria-e-financeira/detalhamento-das-despesas', preposicao: OrigemPreposicao.Da }
      ]
    }
  ]
}