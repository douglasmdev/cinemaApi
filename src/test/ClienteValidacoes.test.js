import ClienteValidacoes from "../services/ClienteValidacoes.js";

test("Verificar se o cpf é da forma ddddddddddd", () => {
    expect(ClienteValidacoes.validaCpf("123.123.123-12")).toBe(true);
});

test("Verificar se o cpf é da forma ddddddddddd", () => {
    expect(ClienteValidacoes.validaCpf("12312312312")).toBe(true);
});

test("Verificar se o cpf é da forma ddd.ddd.ddd-dd", () => {
    expect(ClienteValidacoes.validaCpf("123.123.123-12A")).toBe(false);
});

test("Verificar se o nome tem apenas letras.", () => {
    expect(ClienteValidacoes.validaNome("Douglas Montes")).toBe(true);
});

test("Verificar se o nome tem apenas letras.", () => {
    expect(ClienteValidacoes.validaNome("D0ugl4s M0nt3s")).toBe(false);
});

test("Verificar se o nome tem pelo menos duas letras.", () => {
    expect(ClienteValidacoes.validaNome("D")).toBe(false);
});

test("Verificar se o telefone possui apenas dígitos.", () => {
    expect(ClienteValidacoes.validaTelefone("(21) 9l23A5678")).toBe(false);
});

test("Verificar se o telefone possui DDD.", () => {
    expect(ClienteValidacoes.validaTelefone("912345678")).toBe(false);
});

test("Verificar se o email contem apenas letras minúsculas.", () => {
    expect(ClienteValidacoes.validaEmail("dOuGlAs@gmail.com")).toBe(false);
});

test("Verificar se o email contem @.", () => {
    expect(ClienteValidacoes.validaEmail("douglasgmail.com")).toBe(false);
});

test("Verificar se um email existente é válido.", () => {
    expect(ClienteValidacoes.validaEmail("douglasmontes.dev@gmail.com")).toBe(true);
});