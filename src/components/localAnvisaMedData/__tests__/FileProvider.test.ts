import * as filePath from "../../../helpers/filePath";
import { findFilteredLocal } from "../providers/FileProvider/FileProvider";

const response = [{
    'SUBSTÂNCIA': 'ABEMACICLIBE',
    CNPJ: '43.940.618/0001-44',
    'LABORATÓRIO': 'ELI LILLY DO BRASIL LTDA',
    'CÓDIGO GGREM': '507619060022002',
    REGISTRO: '1126001990026',
    'EAN 1': '7896382708459',
    'EAN 2': '-',
    'EAN 3': '-',
    PRODUTO: 'VERZENIOS',
    'APRESENTAÇÃO': '50 MG COM REV CT BL AL AL X 60',
    'CLASSE TERAPÊUTICA': 'L1H - INIBIDORES DE PROTEINA QUINASE',
    'TIPO DE PRODUTO (STATUS DO PRODUTO)': 'Novo',
    'REGIME DE PREÇO': 'Regulado',
    'PF Sem Impostos': '4155,68',
    'PF 0%': '4654,36',
    'PF 12%': '5378,52',
    'PF 17%': '5751,52',
    'PF 17% ALC': '5006,84',
    'PF 17,5%': '5791,69',
    'PF 17,5% ALC': '5037,19',
    'PF 18%': '5832,43',
    'PF 18% ALC': '5067,90',
    'PF 20%': '6001,29',
    'PMC 0%': '6243,66',
    'PMC 12%': '7184,54',
    'PMC 17%': '7666,34',
    'PMC 17% ALC': '6921,66',
    'PMC 17,5%': '7718,12',
    'PMC 17,5% ALC': '6963,62',
    'PMC 18%': '7770,60',
    'PMC 18% ALC': '7006,07',
    'PMC 20%': '7987,92',
    'RESTRIÇÃO HOSPITALAR': 'Não',
    CAP: 'Não',
    'CONFAZ 87': 'Não',
    'ICMS 0%': 'Não',
    'ANÁLISE RECURSAL': '',
    'LISTA DE CONCESSÃO DE CRÉDITO TRIBUTÁRIO (PIS/COFINS)': 'Negativa',
    'COMERCIALIZAÇÃO 2019': 'Não',
    TARJA: 'Tarja Vermelha(*)'
  }]

describe('PROVIDER: Local repository', () => {
    beforeEach(() => {
    jest.resetModules();
    });
  it('Should return data matching the imputs when provided with real data', async (done) => {
    const res = await findFilteredLocal("REGISTRO", "1126001990026");
    expect(res).toStrictEqual(response)
    done();
  })
  it('Should return no data matching the imputs when provided with wrong value', async (done) => {
    const res = await findFilteredLocal("REGISTRO", "1126001996");
    expect(res).toStrictEqual([])
    done();
  })
  it('Should return no data matching the inputs when provided with wrong filter', async (done) => {
    const res = await findFilteredLocal("REGITRO", "1126001990026");
    expect(res).toStrictEqual([])
    done();
  })
  
})

