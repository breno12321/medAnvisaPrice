import localAnvisaMedData from "./components/localAnvisaMedData";

enum EFilters {
  SUBSTÂNCIA = 'SUBSTÂNCIA',
  CNPJ = 'CNPJ',
  LABORATÓRIO = 'LABORATÓRIO',
  'CÓDIGO GGREM' = 'CÓDIGO GGREM',
  REGISTRO = 'REGISTRO',
  'EAN 1' = 'EAN 1',
  'EAN 2' = 'EAN 2',
  'EAN 3' = 'EAN 3',
  PRODUTO = 'PRODUTO',
  APRESENTAÇÃO = 'APRESENTAÇÃO',
  'CLASSE TERAPÊUTICA' = 'CLASSE TERAPÊUTICA',
  'TIPO DE PRODUTO (STATUS DO PRODUTO)' = 'TIPO DE PRODUTO (STATUS DO PRODUTO)',
  'REGIME DE PREÇO' = 'REGIME DE PREÇO',
  'PF Sem Impostos' = 'PF Sem Impostos',
  'PF 0%' = 'PF 0%',
  'PF 12%' = 'PF 12%',
  'PF 17%' = 'PF 17%',
  'PF 17% ALC' = 'PF 17% ALC',
  'PF 17,5%' = 'PF 17,5%',
  'PF 17,5% ALC' = 'PF 17,5% ALC',
  'PF 18%' = 'PF 18%',
  'PF 18% ALC' = 'PF 18% ALC',
  'PF 20%' = 'PF 20%',
  'PMC 0%' = 'PMC 0%',
  'PMC 12%' = 'PMC 12%',
  'PMC 17%' = 'PMC 17%',
  'PMC 17% ALC' = 'PMC 17% ALC',
  'PMC 17,5%' = 'PMC 17,5%',
  'PMC 17,5% ALC' = 'PMC 17,5% ALC',
  'PMC 18%' = 'PMC 18%',
  'PMC 18% ALC' = 'PMC 18% ALC',
  'PMC 20%' = 'PMC 20%',
  'RESTRIÇÃO HOSPITALAR' = 'RESTRIÇÃO HOSPITALAR',
  CAP = 'CAP',
  'CONFAZ 87' = 'CONFAZ 87',
  'ICMS 0%' = 'ICMS 0%',
  'ANÁLISE RECURSAL' = 'ANÁLISE RECURSAL',
  'LISTA DE CONCESSÃO DE CRÉDITO TRIBUTÁRIO (PIS/COFINS)' = 'LISTA DE CONCESSÃO DE CRÉDITO TRIBUTÁRIO (PIS/COFINS)',
  'COMERCIALIZAÇÃO 2019' = 'COMERCIALIZAÇÃO 2019',
  TARJA = 'TARJA',
}

export const medAnvisaPrice = (value: string, filter: EFilters):Promise<IMedication[]> => localAnvisaMedData(value, filter);

