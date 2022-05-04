class FilmeValidacoes {
   static validaNome(str) {
       return str.length > 0;
   }

   static validaTipo(str) {
       const tipoRegEx = /^[2-3]{1}D$/;
       return tipoRegEx.test(str);
   }

   static validaGenero(str) {
       return str.length > 0;
   }

   static validaDescricao(str) {
       return str.length > 0;
   }

   static validaLancamento(str) {
       const lancamentoRegEx = /^(1[8-9]{1}[0-9]{2}|20[0-9]{2})$/;
       return lancamentoRegEx.test(str);
   }

}

export default FilmeValidacoes;