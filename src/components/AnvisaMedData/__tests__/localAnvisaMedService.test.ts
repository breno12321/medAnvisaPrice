import { findFiltered } from "../localAnvisaMed.service";
import { responseFindByRegistroMock } from "./__mocks__/localAnvisaMedServiceMock";

describe('SERVICE: Anvisa Med tests', () => {
  it("Should Retrive a medication when provided with proper query filter and value", async (done) => {
    expect(await findFiltered('REGISTRO', '1705600230032')).toStrictEqual(responseFindByRegistroMock);
    done();
  });
  it("Should find a medication when provided with EAN 1 query filter and value", async (done) => {
    expect(await findFiltered('EAN 1', '7891106000956')).toEqual(responseFindByRegistroMock);
    done();
  });

  it("Should find a medication when provided with CÓDIGO GGREM query filter and value", async (done) => {
    expect(await findFiltered('CÓDIGO GGREM', '538912020009303')).toEqual(responseFindByRegistroMock);
    done();
  });

  it("Should return all medications for BAYER S.A. Laboratory when provided with lab filter", async (done) => {

    const respBayer = await findFiltered('LABORATÓRIO', 'BAYER S.A.');

    expect(respBayer.length).toBe(235);
    expect(respBayer[0]).toHaveProperty('_id');
    expect(respBayer[0]).toHaveProperty('SUBSTÂNCIA');
    expect(respBayer[0]).toHaveProperty('CNPJ');
    expect(respBayer[0]).toHaveProperty('LABORATÓRIO');
    expect(respBayer[0]).toHaveProperty('CÓDIGO GGREM');
    expect(respBayer[0]).toHaveProperty('REGISTRO');
    expect(respBayer[0]).toHaveProperty('EAN 1');
    expect(respBayer[0]).toHaveProperty('EAN 2');
    expect(respBayer[0]).toHaveProperty('EAN 3');
    expect(respBayer[0]).toHaveProperty('PRODUTO');
    expect(respBayer[0]).toHaveProperty('APRESENTAÇÃO');
    expect(respBayer[0]).toHaveProperty('CLASSE TERAPÊUTICA');
    expect(respBayer[0]).toHaveProperty('TIPO DE PRODUTO (STATUS DO PRODUTO)');
    expect(respBayer[0]).toHaveProperty('REGIME DE PREÇO');
    expect(respBayer[0]).toHaveProperty('PF Sem Impostos');
    expect(respBayer[0]).toHaveProperty('PF 0%');
    expect(respBayer[0]).toHaveProperty('PF 12%');
    expect(respBayer[0]).toHaveProperty('PF 17%');
    expect(respBayer[0]).toHaveProperty('PF 17% ALC');
    expect(respBayer[0]).toHaveProperty('PF 17,5%');
    expect(respBayer[0]).toHaveProperty('PF 18%');
    expect(respBayer[0]).toHaveProperty('PF 18% ALC');
    expect(respBayer[0]).toHaveProperty('PF 20%');
    expect(respBayer[0]).toHaveProperty('PMC 0%');
    expect(respBayer[0]).toHaveProperty('PMC 12%');
    expect(respBayer[0]).toHaveProperty('PMC 17%');
    expect(respBayer[0]).toHaveProperty('PMC 17,5%');
    expect(respBayer[0]).toHaveProperty('PMC 18%');
    expect(respBayer[0]).toHaveProperty('PMC 20%');
    expect(respBayer[0]).toHaveProperty('RESTRIÇÃO HOSPITALAR');
    expect(respBayer[0]).toHaveProperty('CAP');
    expect(respBayer[0]).toHaveProperty('CONFAZ 87');
    expect(respBayer[0]).toHaveProperty('ICMS 0%');
    expect(respBayer[0]).toHaveProperty('ANÁLISE RECURSAL');
    expect(respBayer[0]).toHaveProperty('LISTA DE CONCESSÃO DE CRÉDITO TRIBUTÁRIO (PIS/COFINS)');
    expect(respBayer[0]).toHaveProperty('COMERCIALIZAÇÃO 2019');
    expect(respBayer[0]).toHaveProperty('TARJA');
    done();
  });

  it("Should fail to find a medication when provided with wrong query filter and value", async (done) => {
    expect(await findFiltered('REGITRO', '1705600230032')).toStrictEqual([]);
    done();
  });
});
