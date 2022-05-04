import FilmeValidacoes from "../services/FilmeValidacoes.js";

test("Verificar se o nome é não-vazio.", () => {
    expect(FilmeValidacoes.validaNome("")).toBe(false);
});

test("Verificar se o gênero é não-vazio.", () => {
    expect(FilmeValidacoes.validaNome("")).toBe(false);
});

test("Verificar se a descrição é não-vazia.", () => {
    expect(FilmeValidacoes.validaNome("")).toBe(false);
});

test("Verificar se o tipo do filme é 2D ou 3D.", () => {
    expect(FilmeValidacoes.validaTipo("2D")).toBe(true);
});

test("Verificar se o tipo do filme é 2D ou 3D.", () => {
    expect(FilmeValidacoes.validaTipo("3D")).toBe(true);
});

test("Verificar se o tipo do filme é 2D ou 3D.", () => {
    expect(FilmeValidacoes.validaTipo("5D")).toBe(false);
});

test("Verificar se o tipo do filme é 2D ou 3D.", () => {
    expect(FilmeValidacoes.validaTipo("2d")).toBe(false);
});

test("Verificar se o lançamento é um ano entre 1800 e 2099", () => {
    expect(FilmeValidacoes.validaLancamento("1800")).toBe(true);
});

test("Verificar se o lançamento é um ano entre 1800 e 2099", () => {
    expect(FilmeValidacoes.validaLancamento("1700")).toBe(false);
});

test("Verificar se o lançamento é um ano entre 1800 e 2099", () => {
    expect(FilmeValidacoes.validaLancamento("1996")).toBe(true);
});

test("Verificar se o lançamento é um ano entre 1800 e 2099", () => {
    expect(FilmeValidacoes.validaLancamento("2022")).toBe(true);
});

test("Verificar se o lançamento é um ano entre 1800 e 2099", () => {
    expect(FilmeValidacoes.validaLancamento("3000")).toBe(false);
});