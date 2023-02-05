function calcular(tipo,valor){
    if(tipo === 'acao'){
        
        if(valor === 'c'){
            // excluir operações e números
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
           var res_operacao =  eval(document.getElementById('resultado').value)
           document.getElementById('resultado').value = res_operacao
        }

    }else if (tipo === 'valor'){
        var v_campo =  document.getElementById('resultado').value 
        document.getElementById('resultado').value = v_campo + valor
    }
}