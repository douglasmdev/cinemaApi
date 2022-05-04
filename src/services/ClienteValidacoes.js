class ClienteValidacoes {
    static validaCpf(str) {
        const cpfRegEx = /^((([0-9]{3}.){2}[0-9]{3}-[0-9]{2})|[0-9]{11})$/;
        return cpfRegEx.test(str);
    }

    static validaNome(str) {
        const nomeRegEx = /^[A-Za-z\ ]{2,}$/;
        return nomeRegEx.test(str);
    }

    static validaTelefone(str) {
        const telRegEx = /^\([0-9]{2}\) ?9[0-9]{4}-?[0-9]{4}$/
        return telRegEx.test(str);
    }

    static validaEmail(str) {
        const emailRegEx = /^[a-z._0-9]+@[a-z]+.[a-z.]+$/;
        return emailRegEx.test(str);
    }
}

export default ClienteValidacoes;