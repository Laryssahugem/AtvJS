function Verificador()
{

    const resultado = document.formIdade.idade.value;
    const caixaresultado = document.getElementById('resultado');
    caixaresultado.value=resultado;


    if ( resultado >= 18 && resultado == 25) 
    {
        caixaresultado.value= ('Jovem')
    }
    else if (resultado > 25 && resultado <= 45) 
    {
        caixaresultado.value= ('Jovem Adulto')
    }
    else if (resultado > 45 && resultado <= 60 ) 
    {
        caixaresultado.value= ('Adulto')
    }
    else if (resultado > 60) 
    {
        caixaresultado.value= ('Você está na terceira Idade!')
    }
    else
    {
        caixaresultado.value= ('Menor de Idade')
    }

    document.getElementById('labelid').style.display = 'none';
    document.getElementById('idadeid').style.display = 'none';

    var container = document.getElementById('container');
    container.style.display = 'block';
}

const estadoInicial = document.getElementById('formulario').innerHTML;

function voltarParaInicial() {
    
    document.getElementById('formulario').innerHTML = estadoInicial;
}
