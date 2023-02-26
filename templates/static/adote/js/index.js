
//-------------------------------------------------------------------------------//
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $(".navbar-collapse").toggle();
    });
  });

function ready(){
    window.location.href='#foo';
  }
  
function programacao(numero){   
    if(numero == 1){
        document.getElementById('botao1').style.background="#000f92";
        document.getElementById('botao2').style.background="#000000";
        document.getElementById('botao3').style.background="#000000";
        document.getElementById('botao4').style.background="#000000";
        document.getElementById('botao5').style.background="#000000";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra: RSSF - o elo fraco da IoT </p> <p id="horario"> 19:00 - 20:00 </p> <p id="responsavel"> Prof. Omar Branquinho</p> <a id="link-meet" href="https://drive.google.com/file/d/1rrWHL1v5N5ESUO8xWB2fsSkebVuK1mxz/view?usp=sharing" target="_blank">ASSISTIR GRAVAÇÃO</a> </div> </div> <div id="progInd"> <img src="img/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de conversa: Desafios da mulher na área de TI </p> <p id="horario"> 20:00 - 21:30 </p> <p id="responsavel"> Grupo meninas digitais, Pyladies, MulherAda.. </p> <a id="link-meet" href="https://drive.google.com/file/d/1NbQ_5yUArZzq9kLgloxoUYvz5iv4Rxeb/view?usp=sharing" target="_blank">ASSISTIR GRAVAÇÃO</a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Prototipagem com Figma </p> <p id="horario"> 20:00 - 21:30 </p> <p id="responsavel"> Matheus Augusto Simões </p> <a id="link-meet" href="https://drive.google.com/file/d/1qttN8hxgO8ZzWqk0Rjff166Uns6f6ABB/view?usp=sharing" target="_blank"> ASSISTIR 1° DIA</a><br><br> <a id="link-meet" href="https://drive.google.com/file/d/1_uVmA36zJLKWOczZq9ebsX1tKwv8BOJo/view?usp=sharing" target="_blank"> ASSISTIR 2° DIA </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Arduino </p> <p id="horario"> 20:00 - 21:30 </p> <p id="responsavel"> Albert Medeiros de Paula </p> <a id="link-meet" href="https://drive.google.com/file/d/1I55i--vAxAfPIRiJ92_-X2_xG3H9FDsb/view?usp=sharing" target="_blank"> ASSISTIR 1° DIA  </a> <br><br> <a id="link-meet" href="https://drive.google.com/file/d/1Wihf1hmgkLcrpivz2O6Gpgc1XIZx-eUH/view?usp=sharing" target="_blank"> ASSISTIR 2° DIA  </a> </div> </div> </div>';
    }
    
    if(numero == 2){
        document.getElementById('botao1').style.background="#000000";
        document.getElementById('botao2').style.background="#000f92";
        document.getElementById('botao3').style.background="#000000";
        document.getElementById('botao4').style.background="#000000";
        document.getElementById('botao5').style.background="#000000";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra: Cultura Maker </p> <p id="horario"> 09:30 - 10:30 </p> <p id="responsavel"> Heloisa Neves </p> <a id="link-meet" href="https://www.youtube.com/watch?v=VjasulHzcnM" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Introdução a Automação e Teste de Software </p> <p id="horario"> 14:00 - 17:00 </p> <p id="responsavel"> Vanessa Rodrigues </p> <a id="link-meet" href="https://drive.google.com/file/d/1GjRLrDEd4XThSc07Y02LWu6GX-aKJHEE/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="img/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra: Inovação Corporativa </p> <p id="horario"> 19:00 - 20:00 </p> <p id="responsavel"> Mauren Ginaldo Souza </p> <a id="link-meet" href="https://drive.google.com/file/d/1fHUftCsWMqqBndbPnu11FgAwWVf-Op5X/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Como fazer um site portfólio no GitHub </p> <p id="horario"> 20:00 - 22:00 </p> <p id="responsavel"> Marisa Vieira </p> <a id="link-meet" href="https://drive.google.com/file/d/1GYLOqBb5a2kUajn5gOgTYEk5YsswF8ux/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> </div>';
    }
    
    if(numero == 3){
        document.getElementById('botao1').style.background="#000000";
        document.getElementById('botao2').style.background="#000000";
        document.getElementById('botao3').style.background="#000f92";
        document.getElementById('botao4').style.background="#000000";
        document.getElementById('botao5').style.background="#000000";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/palestra.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Palestra: Tecnologia e Ação Social </p> <p id="horario"> 9:30 - 10:30 </p> <p id="responsavel"> Eduardo Fernandes Tardiole  </p> <a id="link-meet" href="https://www.youtube.com/watch?v=z1FZG1o3x4Y" target="_blank"> ASSISTIR GRAVAÇÃO</a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Workshop docker </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Luciano d´Avilla Ferreira </p> <a id="link-meet" href="https://drive.google.com/file/d/12tCj3aeeOvNRaJAUXEw21rhM5GgmyF-W/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO</a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Introdução ao React JS </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Jonatan Gabriel Bortolon </p> <a id="link-meet" href="https://drive.google.com/file/d/1qA4le3jALcj2xE-U1PzgsgnrHvXji1Pw/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO</a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Microsoft Power BI </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Otávio Augusto Souza Silva </p> <a id="link-meet" href="https://drive.google.com/file/d/16mo1nvh1CuOa1Ojyd9wQeZmSHGcssQa4/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO</a> </div> </div> </div>';
    }  
    
    if(numero == 4){
        document.getElementById('botao1').style.background="#000000";
        document.getElementById('botao2').style.background="#000000";
        document.getElementById('botao3').style.background="#000000";
        document.getElementById('botao4').style.background="#000f92";
        document.getElementById('botao5').style.background="#000000";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg">  Café com CLT: Um papo sobre o que o mercado espera de você!</p> <p id="horario"> 9:30 - 10:30 </p> <p id="responsavel"> João Victor Teixeira, Guilherme Rodella, Luiz Aurilio</p> <a id="link-meet" href="https://drive.google.com/file/d/1Zj7nXrw_Y9_2F86ygLMVtsGqGeGO-lw0/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO</a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Introdução ao RPA - Java </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Macelo Leite Junior </p> <a id="link-meet" href="https://meet.google.com/tuy-geex-ysw" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso : Landing pages e prototipagem com Adobe XD </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Gabriel Sales </p> <a id="link-meet" href="https://meet.google.com/cwj-hdcw-ytc" target="_blank"> ASSISTIR </a> </div> </div> <div id="progInd"> <img src="img/minicurso.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Minicurso: Mikrotik </p> <p id="horario"> 19:00 - 22:30 </p> <p id="responsavel"> Marcelo Rodrigo dos Santos </p> <a id="link-meet" href="https://drive.google.com/file/d/1ApS65_L03uwkfsdmGYMjjCcHBM476xLd/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO</a> </div> </div> </div>';
    } 
    
    if(numero == 5){
        document.getElementById('botao1').style.background="#000000";
        document.getElementById('botao2').style.background="#000000";
        document.getElementById('botao3').style.background="#000000";
        document.getElementById('botao4').style.background="#000000";
        document.getElementById('botao5').style.background="#000f92";
        document.getElementById('divProg').innerHTML = '<div id="divProg"> <div id="progInd"> <img src="img/rodadeconversa.png" id="icone"> <div id="descProg"> <p id="tituloProg"> Roda de conversa com Alunos e Ex-Alunos </p> <p id="horario"> 19:00 - 20:30 </p> <p id="responsavel"> Alunos e Ex-alunos do IF </p> <a id="link-meet" href="https://drive.google.com/file/d/1sTTK-sQUlie3Z0juJY1N1m17gQ1NDNmV/view?usp=sharing" target="_blank"> ASSISTIR GRAVAÇÃO </a> </div> </div> </div>';
    }   
}

function MostraTexto(nome){
    document.getElementById(nome).style="opacity:1;";
    document.getElementById(nome+'M').style="filter: grayscale(100%);";
}

function TiraTexto(nome){
    document.getElementById(nome).style="opacity:0;";
    document.getElementById(nome+'M').style="filter: grayscale(20%);";
}  