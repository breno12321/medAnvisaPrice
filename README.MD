# MedAnvisaPrice 💊

Esse repositório é responsável por disponibilizar em forma de JSON/API Rest a base de medicamentos registrados na anvisa assim como seu preço respectivo no mercado.

## Dados 🎲

Os dados são retirados da [lista de preços de medicamentos publicados pela anvisa](http://antigo.anvisa.gov.br/listas-de-precos), atualmente criei uma [rotina](src/assets/xls_conformidade_site_2021_01_v1.csv) para poder converter dados do CSV extraido da planilha para um arquivo JSON com um vetor de todos os medicamentos.

Para uma versão online criei um [seeder](src/setup/seeder.js) para povoar uma collection em MongoDB hosteado no Mongo Atlas online.

**ULTIMA ATUALIZAÇÃO DE DADOS ANVISA**: *(publicada em 03/08/2020 16h30min)*

### Banco 🗄

- Registros: 25906
- Ultima atualização dados da anvisa: 01-2021
- Database:
  - URL: `mongodb+srv://<username>:<password>@main.kiifb.mongodb.net/AnvisaData`
  - USERNAME: anvisa_med_price
  - PASSWORD: Ep9M8bzgGmh2yYFQ

### Exemplo de retorno
```javascript
{
  _id: 600f0a6eacb8baee443527b2,
  'SUBSTÂNCIA': '21-ACETATO DE DEXAMETASONA;CLOTRIMAZOL',
  CNPJ: '18.459.628/0001-15',
  'LABORATÓRIO': 'BAYER S.A.',
  'CÓDIGO GGREM': '538912020009303',
  REGISTRO: '1705600230032',
  'EAN 1': '7891106000956',
  'EAN 2': '-',
  'EAN 3': '-',
  PRODUTO: 'BAYCUTEN N',
  'APRESENTAÇÃO': '10 MG/G + 0,443 MG/G CREM DERM CT BG AL X 40 G',
  'CLASSE TERAPÊUTICA': 'D7B2 - CORTICOESTERÓIDES ASSOCIADOS A ANTIMICOTICOS',
  'TIPO DE PRODUTO (STATUS DO PRODUTO)': 'Novo',
  'REGIME DE PREÇO': 'Regulado',
  'PF Sem Impostos': '19,74',
  'PF 0%': '22,11',
  'PF 12%': '25,55',
  'PF 17%': '27,32',
  'PF 17% ALC': '23,78',
  'PF 17,5%': '27,51',
  'PF 17,5% ALC': '23,93',
  'PF 18%': '27,71',
  'PF 18% ALC': '24,07',
  'PF 20%': '28,51',
  'PMC 0%': '29,66',
  'PMC 12%': '34,13',
  'PMC 17%': '36,42',
  'PMC 17% ALC': '32,87',
  'PMC 17,5%': '36,66',
  'PMC 17,5% ALC': '33,08',
  'PMC 18%': '36,92',
  'PMC 18% ALC': '33,28',
  'PMC 20%': '37,95',
  'RESTRIÇÃO HOSPITALAR': 'Não',
  CAP: 'Não',
  'CONFAZ 87': 'Não',
  'ICMS 0%': 'Não',
  'ANÁLISE RECURSAL': '',
  'LISTA DE CONCESSÃO DE CRÉDITO TRIBUTÁRIO (PIS/COFINS)': 'Negativa',
  'COMERCIALIZAÇÃO 2019': 'Sim',
  TARJA: 'Tarja -(*)'
}
```


# Esquema de dados e descrição dos campos 📕

|Campo|Descrição|
|-|-|
|ANÁLISE RECURSAL|Destina-se a prestar informações sobre produtos cuja análise de preço ainda esteja em curso no âmbito da CMED, tanto em sede de pedido de reconsideração como de recurso ao Comitê Técnico Executivo - CTE/CMED|
|APRESENTAÇÃO|É a descrição de como o medicamento é apresentado, quanto a sua forma farmacêutica, dosagem e quantidade.|
|CAP|O Coeficiente de Adequação de Preços é um desconto mínimo obrigatório,atualizado anualmente, a ser aplicado sempre que forem realizadas vendas de medicamentos, constantes do rol divulgado pela CMED e nas compras de todos os medicamentos por força de decisão judicial, destinadas aos entes da administração pública direta e indireta da União, dos Estados, do Distrito Federal e dos Municípios. Sobre ele, vamos falar mais  frente|
|CLASSE TERAPÊUTICA|É a Classificação Anatômica de Produtos Farmacêuticos.Está relacionado com a finalidade e o local de atuação do medicamento de acordo com a Associação Europeia de Pesquisa de Mercado Farmacêutico (EphMRA).|
|CNPJ|Código de identificação da pessoa jurídica.|
|CÓDIGO GGREM|É um campo específico de identificação de determinada apresentação, cujo fornecimento e geração são exclusivos da CMED e são únicos para cada apresentação.|
|COMERCIALIZAÇÃO {ANO}|Refere-se à informação se o produto foi ou não comercializado pelo detentor do registro, no ano de 2017.|
|CONFAZ 87|Lista de medicamentos que ficam isentas do ICMS, cujas operações sejam destinadas a órgãos da Administração Pública Direta e Indireta Federal, Estadual e Municipal e do Distrito Federal e a suas fundações públicas.|
|EAN 1|O Código EAN é também conhecido como Código de Barras ou GTIN. É composto por 13 dígitos e nele se identifica o País de origem do produto, a empresa fabricante, o produto por ela produzido e um digito verificador.|
|EAN 2| O Código EAN é também conhecido como Código de Barras ou GTIN. É composto por 13 dígitos e nele se identifica o País de origem do produto, a empresa fabricante, o produto por ela produzido e um digito verificador.|
|EAN 3| O Código EAN é também conhecido como Código de Barras ou GTIN. É composto por 13 dígitos e nele se identifica o País de origem do produto, a empresa fabricante, o produto por ela produzido e um digito verificador.|
|LABORATÓRIO| É o nome da empresa detentora do registro sanitário podendo ser a produtora ou importadora do medicamento.|
|LISTA DE CONCESSÃO DE CRÉDITO TRIBUTÁRIO (PIS/COFINS) | Classificação fiscal dos medicamentos em uma das listas a seguir, conforme o regime tributário previsto na Lei nº 10.147, de 2000: <br/>a) Lista Positiva: medicamentos cujas substâncias ativas constam do  anexo do Decreto nº 3.803, de 24 de abril de 2001, e suas atualizações, sujeitos à prescrição médica, identificados com tarja vermelha ou preta, e cujas empresas produtoras usufruem do regime especial de utilização de crédito presumido de PIS/Pasep e COFINS, classificados em três categorias, ou seja, medicamentos isentos de PIS/Pasep e COFINS: <br/>&emsp;I. Categoria I - Medicamentos monodroga identificados com tarja vermelha ou preta; <br/>&emsp;II.Categoria II - Medicamentos em associações identificados com tarja vermelha ou preta; <br/>&emsp;III.Categoria III - Substâncias para medicamentos utilizados em nutrição parenteral, hemodiálise e diálise peritoneal, substitutos do plasma e expansores plasmáticos, identificados com tarja vermelha. <br/>b) Lista Negativa: medicamentos pertencentes às classificações constantes do art. 1º da Lei nº 10.147, de 2000, cujas substâncias ativas não estejam relacionadas no anexo do Decreto nº 3.803, de 2001, e suas atualizações, ou seja, medicamentos incidência de 12% de PIS/Pasep e COFINS. <br/>c) Lista Neutra: medicamentos que não estão sujeitos ao regime tributário estabelecido na Lei nº 10.147, de 2000, ou seja, medicamentos incidência de 9,25% de PIS/Pasep e COFINS.|
|PF 0%, PF 12%, PF 17%, PF 17% ALC, PF 17,5%, PF 17,5% ALC, PF 18%, PF 18% ALC, PF 20%, PF Sem Impostos, Preço Fábrica|É o teto de preço pelo qual um laboratório ou distribuidor de medicamentos pode comercializar no mercado brasileiro um medicamento. Desta maneira, o PF vem a ser o preço máximo permitido para vendas de medicamentos destinadas a farmácias, drogarias, além das destinadas a entes da Administração Pública.|
|PMC 0%, PMC 12%, PMC 17%, PMC 17% ALC, PMC 17,5%, PMC 17,5% ALC, PMC 18%, PMC 18% ALC, PMC 20%, Preço Máximo ao Consumidor ou PMC|É o preço a ser praticado pelo comércio varejista de medicamentos, ou seja, farmácias e drogarias, tendo em vista que este contempla tanto a margem de lucro como os impostos inerentes a esses tipos de comércio. A Alíquota de 0% se refere ao preço sem ICMS, que deve ser aplicado aos medicamentos isentos de ICMS, que são aqueles relacionados nos Convênios do CONFAZ, por exemplo CONVÊNIO ICMS 162/94 que isenta medicamentos destinados ao tratamento de câncer. A Alíquota de ICMS 20% se refere atualmente apenas ao Estado do RJ. A Alíquota de ICMS 18% se refere aos Estados de AM, AP, BA, CE, MA, MG, PB, PE, PI, PR, RN, RS, SE, SP, TO. A Alíquota de ICMS 17,5% se refere ao Estado de RO A alíquota de ICMS 17% está relacionada aos demais Estados A Alíquota de ICMS 12% está relacionada com os Medicamentos Genéricos de SP e MG. As Alíquotas de 17%, 17,5% e 18% que tem ao lado a sigla ALC, significa Áreas de Livre Comércio, e dizem respeito às seguintes cidades: Manaus/Tabatinga (AM), Boa Vista/Bonfim (RR), Macapá/Santana (AP), Guajará-Mirim (RO), Brasiléia/Epitaciolândia/ Cruzeiro do Sul (AC). Além das alíquotas citadas anteriormente também é publicado o PF Sem Impostos que são os preços sem o ICMS e sem PIS/Pasep e COFINS.|
|PRINCÍPIO ATIVO | É uma substância química ativa, fármaco, droga ou matéria-prima que tenha propriedades farmacológicas com finalidade medicamentosa, utilizada para diagnóstico, alívio ou tratamento, empregada para modificar ou explorar sistemas fisiológicos ou estados patológicos, em benefício da pessoa na qual se administra. Portanto, princípio ativo do medicamento é o nome principal de sua composição.|
|PRODUTO | É o nome comercial dado ao medicamento, em determinada apresentação, de um referido laboratório, no caso dos medicamentos genéricos é igual ao Princípio Ativo.|
REGISTRO|É o número de registro de produto junto à ANVISA.|
|RESTRIÇÃO HOSPITALAR | Indica os medicamentos em embalagens hospitalares e de uso restrito a hospitais e clínicas e, portanto, não podem ser comercializados pelo Preço Máximo ao Consumidor não tendo seus PMC publicados.|
|TARJA| Indica qual se a venda do medicamento necessita de recita, sendo classificado em: <br/>a. Tarja Vermelha: Medicamentos que só podem ser dispensados mediante apresentação de receita. <br/>b. Tarja Preta: Medicamentos que devem ser dispensados apenas mediante  receituário acompanhado de notificação de receita, devendo ficar uma cópia no estabelecimento que realizou a dispensação. <br/>c. Venda livre: Medicamentos que podem ser dispensados sem a apresentação de receita. |
|TIPO DE PRODUTO (STATUS DO PRODUTO) |Tipo é a categorização do medicamento por tipo de produto em Biológicos, Biológico Novo, Similar, Genérico, Novo, Específico, Radiofármaco. Status do produto indica se ele é referência.|
|ICMS 0% | Indica se o medicamento tem ou não o imposto sobre Circulação de Mercadorias e Prestação de Serviços (ICMS), onde o imposto de cada Estado deve ser considerado, pois ele influencia na diferença dos preços dos medicamentos de um Estado para o outro. Por exemplo, no Estado do Paraná o ICMS é de 18% (dezoito por cento), no Estado do Rio de Janeiro é de 20% (vinte por cento) e no Estado do Goiás é de 17% (dezessete por cento).|
