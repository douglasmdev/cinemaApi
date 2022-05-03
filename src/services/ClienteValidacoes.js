class ClienteValidacoes {
    static validaCpf(str) {
        const cpfRegEx = new RegExp("^((([0-9]{3}.){2}[0-9]{3}-[0-9]{2})|[0-9]{11})$");
        return cpfRegEx.test(str);
    }

    static validaNome(str) {
        const nomeRegEx = new RegExp("^[A-Za-z\ ]+$");
        return nomeRegEx.test(str);
    }

    static validaTelefone(str) {
        const telRegEx = new RegExp("^\([0-9]{2}\) ?9[0-9]{4}-?[0-9]{4}$");
        return telRegEx.test(str);
    }

    static validaEmail(str) {
        const emailRegEx = new RegExp("^[a-z._0-9]+@[a-z]+.[a-z.]+$");
        return emailRegEx.test(str);
    }
}

export default ClienteValidacoes;