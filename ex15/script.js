function verificar(){
var data= new Date()
var ano= data.getFullYear()
var fano= document.getElementById('txtano')
var res= document.getElementById('segunda')
var ser= document.getElementById('tudo')

if(fano.value.length == 0 || fano.value> ano){
    window.alert('Erro')
} else{
    var fsex= document.getElementsByName('radsex')
    var idade= ano- Number(fano.value)
   var genero= ''
   var img= document.createElement('img')
   img.setAttribute('id','foto')


   if(fsex[0].checked){
       genero= 'Homem'
       if (idade >=3 && idade < 12){
           genero='uma Criança'
           ser.innerHTML= `<ol> 
           <li>
           <p>Mundo Mistério</p> 
           Sinopse: Mundo Mistério é uma série documental que explora incógnitas sobre a história do mundo e a ciência ao longo dos anos, de forma leve e criativa, com uma linguagem de fácil entendimento. O programa é comandado pelo youtuber Felipe Castanhari.
           <p> TRAILER: </p>
           <p> <iframe width="450" height="315" src="https://www.youtube.com/embed/2pr2RQEUMZU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p></li> 
           <li>

            <p>Carmen San Diego</p>
            Sinopse: Carmen Sandiego é uma espécie de Robin Hood dos dias atuais: ex-membro da Academia V.I.L.E., ela agora roda o mundo para recuperar tudo o que essa organização criminosa vem roubando e devolver às vítimas.
           <p> TRAILER: </p>
           <p> <iframe width="450" height="315" src="https://www.youtube.com/embed/yh2dFPgAWqc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           </li>

           <li> 
           <p>Gravity falls</p>
           Sinopse: Dipper e Mabel Pines são dois irmãos que são mandados para a loja do tio-avô Stan, em Gravity Falls, Oregon, para passarem lá o verão. Eles acham que as férias serão entediantes, mas quando Dipper encontra um estranho diário na floresta, eles descobrem que estranhos segredos estão fincados na cidade.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/maDIQk3AJ2E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </p>


           </li>
           <li>
           <p>A Lenda de Korra</p>
           Sinopse: Ambientada 70 anos depois dos eventos do desenho original, The Legend of Korra acompanha o Avatar depois de Aang: uma garota rebelde, passional e destemida chamada Korra, vinda da Tribo da Água. Desde criança ela já domina três dos quatro elementos - terra, água e fogo - e precisa agora aprender a dobrar o ar.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/igXpjBbel2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           </li>
           <li> 
           <p>Jovens Titãs em ação</p>
           Sinopse: Situações engraçadas, que acontecem entre os Titãs (Robin, Ciborgue, Estelar, Ravena e Mutano) quando não salvam o mundo e estão juntos como adolescentes sem supervisão de um adulto.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/_yMODWXkttE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           </li>

           <li>
           <p>Justiça Jovem</p>
           Sinopse: As aventuras de um grupo de adolescentes com habilidades especiais, amigos e membros de uma operação secreta, a "The Team", que funciona como a unidade juvenil da poderosa equipe de super-heróis Liga da Justiça.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/R0tVBhBg9Jo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           </li>
           
           <li>
           <p>Velozes & Furiosos: Espiões do asfalto </p>
           Sinopse: Primo de Dom Toretto, o jovem Tony é recrutado por uma agência do governo para se infiltrar numa gangue de corridas de rua, a qual serve como fachada de uma organização criminosa chamada SH1FT3R. Tony e seus amigos embarcam, então, numa perigosa jornada para salvar o mundo da destruição.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/w2iFcA6awcM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           </li>
           <li>
           <p>Voltron: O Defensor Lendário</p>
           Sinopse:  A série acompanha as aventuras de um grupo de garotos: Shiro, Keith, Hunk, Pidge e Lance. Eles foram escolhidos pelos lendários leões do Voltron para serem os "Defensores do Universo" e combater o maligno Império Galra liderado pelo Imperador Zarkon.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/VZpcFZBSCwQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           </li>

           <li>
           <p>O Vazio</p>
           Sinopse: Após despertarem em um mundo estranho repleto de portais mágicos, enigmas complicados e monstros terríveis, três adolescentes unem forças para tentar voltar para casa.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/QnTiHwya9Gw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           </li>

           <li>
           <p>O Príncipe Dragão</p>
           Sinopse: Inspirados por uma descoberta extraordinária, dois príncipes humanos e uma elfo assassina se unem numa jornada épica na busca de paz para seus reinos em guerra.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/ocaFUl-pQ4E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           </li>
           </ol> `
           
           
           
           
           //criança
           
       } else if (idade < 29){
           genero='um Jovem'
           //jovem
            ser.innerHTML =`<ol>
            <li>
            <p> Stranger Things</p>
            Sinopse: Em novembro de 1983, na pequena cidade de Hawkins, Indiana, um garoto de 12 anos, Will Byers desaparece misteriosamente. A mãe de Will, Joyce, torna-se frenética e tenta encontrar Will, enquanto o chefe de polícia Jim Hopper começa a investigar, assim como os amigos de Will: Mike, Dustin e Lucas.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/0hmzL7qHA1M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
            
            
            </li>

            <li>
            <p>Cobra Kai</p>
            Sinopse: Cobra Kai acontece 30 anos após os acontecimentos do filme original (o torneio de All Valley de 1984) e segue a história de Johnny Lawrence fracassado e alcoolatra, que busca redenção, ao reabrir o infame dojo Cobra Kai, reacendendo a sua rivalidade com o agora bem-sucedido Daniel LaRusso, que tem lutado para manter o equilíbrio em sua vida sem a orientação de seu mentor, sr. Miyagi. Dois homens que direcionam os traumas do passado e as frustrações do presente na única maneira que eles sabem como resolver: através do karatê.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/gfDTor2B5ck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
            
            
            
            </li>

            <li>
            <p>Vikings</p>
            Sinopse: Vikings segue a vida de Ragnar Lothbrok (Travis Fimmel), o maior guerreiro da sua era. Lider de seu bando, com seus irmãos e sua família, ele ascende ao poder e torna-se Rei da tribo dos vikings. Além de guerreiro implacável, Ragnar segue as tradições nórdicas e é devoto dos deuses.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/qgtlVWAJJlk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
            </li>

            <li>
            <p>Demolidor</p>
            Sinopse: Durante o dia é um cara deficiente tentando viver em uma sociedade pouco preparada para lidar com isso. Durante a noite ele é responsável por livrar a cidade dos criminosos mis perigosos.Na série somos apresentados a esse universo de maneira diferente. Murdock já é um adulto, e durante o dia trabalha como advogado.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/y3GkQ6yoAA4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
    
            </li>

            <li>
            <p> Nanatsu no taizai (Os sete pecados capitais)</p>
            Sinopse: Nanatsu no Taizai narra uma trama medieval que se passa no reino de Liones. A comitiva dos sete cavaleiros do rei, que some misteriosamente, é acusada de assassinar o mestre-espadachim e tramar um golpe de estado para dominar o reino.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/jIj2Nu08UBI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
            </li>

            <li>
            <p> This is Us</p>
            Sinopse: This Is Us apresenta a história de três pessoas nascidas no mesmo dia, dois homens e uma mulher. A trama navega entre os anos 1980 e os dias atuais, mostrando a infância de cada uma delas em contraste com a vida adulta, marcada por uma grande tragédia familiar.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/rR6-fctDmB0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
            </li>

            <li>
            <p>The Mandalorian</p>
            Sinopse: Em The Mandalorian, Din Djarin (Pedro Pascal) é um guerreiro solitário que trabalha como caçador de recompensa. Ele embarca numa jornada pelos territórios esquecidos da galáxia, logo após a queda do Império e antes da criação da temida Primeira Ordem.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/ra8sFRnLOJM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
            </li>
            <li>
            <p>WandaVison</p>
            Sinopse: WandaVision, da Marvel Studios, mistura o estilo das sitcoms clássicas com o Universo Cinematográfico da Marvel, e acompanha Wanda Maximoff e o Visão, dois super-seres vivendo uma vida ideal no subúrbio, começando a suspeitar que nem tudo é o que parece.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/p__jH6NkowU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            </li>

            <li>
            
            <p>The Boys</p>
            Sinopse: The Boys se passa em um universo onde indivíduos superpoderosos são reconhecidos como heróis pelo público em geral e pertencem à poderosa corporação Vought International, que os comercializa e monetiza. Fora de suas personas heroicas, a maioria é arrogante e corrupta.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/BxmSk_pv8tE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
            </li>

            <li>
            <p>Peaky Blinders</p>
            Sinopse: Os Peaky Blinders são uma organização criminosa de origem cigana que se passa na cidade de Birmingham, Inglaterra, em 1919, formada vários meses após o final da Primeira Guerra Mundial (1914–1918). A história é centrada na ambição do líder da gangue inglesa, Thomas "Tommy" Shelby (Cillian Murphy).
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/oVzVdvGIC7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            
            
            
            </li>

            </ol>
            
            
            `
       } else if (idade < 55) {
           genero='um Adulto'
           //adulto
           ser.innerHTML= `<ol>
           <li>
           <p>Narcos</p>
           Sinopse: A série conta a história verdadeira da propagação da cocaína nos Estados Unidos e na Europa, graças à droga do Cartel de Medellín, liderado por Pablo Escobar, enquanto dois agentes da DEA estão no comando de liderar uma missão para capturar e, consequentemente, matar Escobar.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/YHFHk-l2Lbo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           </li>

           <li>
           <p>Suits</p>
           Sinopse: Mike Ross (Patrick J. Adams) é um garoto que abandonou a faculdade de direito mas, brilhante como é, consegue uma entrevista com o respeitado Harvey Specter (Gabriel Macht), um dos melhores advogados de Manhattan.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/B1OL4ZQf70c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           
           </li>
           <li>
           <p>Sherlock<p>
           Sinopse: O dr. John Watson precisa de um lugar para morar em Londres. Ele é apresentado ao detetive Sherlock Holmes e os dois acabam desenvolvendo uma parceria intrigante, na qual a dupla vagará pela capital inglesa solucionando assassinatos e outros crimes brutais.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/xK7S9mrFWL4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           
           </li>
           <li>
           <p>Blacklist</p>
            Sinopse: Raymond Reddington, o criminoso mais procurado pelo FBI, entrega-se às autoridades. Promete entregar diversos criminosos e terroristas desde que por intermédio exclusivo de Elizabeth Keen, uma agente novata do FBI.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/IKtL4IW6G0I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           
           </li>

           <li>
           <p>Blackmirror</p>
           Sinopse: Uma espécie de híbrido entre "The Twilight Zone" e "Tales of the Unexpected", Black Mirror explora sensações do mal-estar contemporâneo. Cada episódio conta uma história diferente, traçando uma antologia que mostra o lado negro da vida atrelada à tecnologia.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/1w8LBG2qbqc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           
           
           </li>

           <li>
           <p>Bojack Horseman</p>
           Sinopse: BoJack (Will Arnett) é um decadente cavalo que trabalha na TV. Uma estrela já esquecida de um seriado da década de 1990 chamado Horsin' Around, ele disfarça sua baixa auto-estima com uísque e relações fracassadas.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/31FzIQXo8cs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           
           
           </li>

           <li>
           <p>O Gambito da Rainha</p>
           Sinopse: Na trama, acompanhamos a vida e a evolução de Elizabeth Harmon, uma jovem órfã que, na década de 1950, se torna um prodígio do xadrez ainda criança. Ao longo dos anos, a jornada da jogadora é marcada por uma ascensão rápida e impressionante, ao mesmo tempo que enfrenta traumas antigos e vícios autodestrutivos.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/cnqV3wsZlpo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           </li>

           <li>
           <p>Breaking Bad</p>
           Sinopse: O novo drama "Breaking Bad" narra a história de Walter White (Bryan Cranston), um humilde professor de química que vê sua vida se transformar quando descobre ser portador de um câncer terminal.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/2-W6_6gJda0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           </li>

           <li>
           <p>Blindspot</p>
           Sinopse: A história de um agente do FBI que, misteriosamente, se vê em meio a uma conspiração. A história começa quando Jane Doe (Jaimie Alexander), completamente sem memória, é encontrada nua no meio da Times Square, em Nova York, com o corpo coberto de tatuagens recentes.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/RqZkit-aCTo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           </li>

           <li>
           <p>Tom Clancy's: Jack Ryan</p>
           Sinopse: Jack Ryan (John Krasinski) é um promissor analista da CIA que recebe uma missão perigosa após a descoberta de uma série de transferências bancárias duvidosas. Ao investigar um padrão de comunicações terroristas, ele se depara com uma intrincada estratégia que tem como meta a destruição do mundo - a começar pelos EUA.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/SiCgCt8Tv94" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           </li>
           
         
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          </ol> `
            
       } else{
           genero='um Senhor'
           //idoso
           ser.innerHTML= ` <ol>
           <li>
           <p>RED: Aposentados e perigosos</p>
           Sinopse: Após sobreviver a uma tentativa de homicídio investida por assassinos de aluguel, o agente aposentado da CIA Frank Moses decide se unir ao seu antigo time de campo para garantir a segurança de sua família.
           <p> TRAILER: <p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/ul-XS6abULo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           
           </li>
           <li>
           <p>Os Oito Odiados</p>
           Sinopse: Em busca de abrigo para se proteger de uma nevasca, dois caçadores de recompensas, um prisioneiro e um homem que alega ser xerife conhecem quatro estranhos.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/QPvuptLl_H8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

           
           </li>
           <li>
           <p>Django Livre</p>
            Sinopse: No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a participar de competições mortais.
            <p> TRAILER: </p>
            <p><iframe width="450" height="315" src="https://www.youtube.com/embed/tivv135aGbc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           </li>
           <li>
           <p>O Lobo de Wall Street</p>
           Sinopse: Jordan Belfort é um ambicioso corretor da bolsa de valores que cria um verdadeiro império, enriquecendo de forma rápida, porém ilegal. Ele e seus amigos mergulham em um mundo de excessos, mas seus métodos ilícitos despertam a atenção da polícia.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/PoSCUsNQVtw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           </li>
           <li>
           <p>Até o Último Homem</p>
           Sinopse: Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/4s4UCxCv_OE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

           
           
           
           </li>
           <li>
           <p>O Resgate do Soldado Ryan</p>
           Sinopse: Ao desembarcar na Normandia, no dia 6 de junho de 1944, o Capitão Miller recebe a missão de comandar um grupo do Segundo Batalhão para o resgate do soldado James Ryan, o caçula de quatro irmãos, dentre os quais três morreram em combate. Por ordens do chefe George C. Marshall, eles precisam procurar o soldado e garantir o seu retorno, com vida, para casa.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/WdHJ_nLRjIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           </li>

           <li>
           <p>Eu sou a Lenda</p>
           Sinopse: Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue. Andando pela cidade de Nova York, ele procura por outros possíveis sobreviventes e tenta achar a cura da praga usando seu próprio sangue, que é imune.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/vhdCcqRuQgc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           </li>
           <li>
           <p>John Wick: A Trilogia</p>
           Sinopse: John Wick é um lendário assassino de aluguel aposentado, lidando com o luto após perder o grande amor de sua vida. Quando um gângster invade sua casa, mata seu cachorro e rouba seu carro, ele é forçado a voltar à ativa e inicia sua vingança.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/rUKOAwlyNag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

           
           
           
           
           
           </li>
           <li>
           <p>Mad Max: Estrada da Fúria</p>
           Sinopse: Em um mundo pós-apocalíptico, Max Rockatansky acredita que a melhor forma de sobreviver é não depender de ninguém. Porém, após ser capturado pelo tirano Immortan Joe e seus rebeldes, Max se vê no meio de uma guerra mortal iniciada pela Imperatriz Furiosa, que tenta salvar um grupo de garotas. Também tentando fugir, Max aceita ajudar Furiosa.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/NH5TpcVaqCQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

           
           
           
           
           
           </li>
           <li>
           <p>O Regresso</p>
           Sinopse: Após ser atacado por um urso, o caçador Hugh Glass é abandonado na floresta por seu companheiro John Fitzgerald. Apesar de muito ferido, Glass consegue sobreviver e vai em busca de vingança.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/S4PpYv9n0ko" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           
           
           
           </li>
           
           
           
           
           
           
           
           
           
           
           
           </ol>
           
           
           
           
           
           `
       }


   } else if (fsex[1].checked){
       genero= 'Mulher'
       if (idade >=3 && idade < 12){
           ser.innerHTML=`
           <ol>
           <li>
           <p>Ursos sem Curso</p>
           Sinopse: A série é sobre os três irmãos ursos: Grizzly/Pardo (um urso-cinzento), Panda (um urso-panda gigante) e Ice Bear/Polar (um urso-polar), que tentam integrar-se na sociedade humana, copiando seus comportamentos.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/eoz-8p8Lfvs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

           
           
           
           
           
           </li>

           <li>

           <p>Carmen Sandiego</p>
           Sinopse: Carmen Sandiego é uma espécie de Robin Hood dos dias atuais: ex-membro da Academia V.I.L.E., ela agora roda o mundo para recuperar tudo o que essa organização criminosa vem roubando e devolver às vítimas.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/yh2dFPgAWqc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           </li>
           <li>
           <p>Caçadores de Bugs</p>
           Sinopse: Dois adolescentes trabalham em uma loja de jogos, mas é só uma fachada. Na verdade, eles caçam monstros que saíram dos jogos para a vida real.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/EwXz47WqSCQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           </li>

           <li>
           <p>O Príncipe Dragão</p>
           Sinopse: Inspirados por uma descoberta extraordinária, dois príncipes humanos e uma elfo assassina se unem numa jornada épica na busca de paz para seus reinos em guerra.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/ocaFUl-pQ4E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           </li>

           <li>
           <p>Henry Danger</p>
           Sinopse: Henry Hart (Jace Norman) é um menino de 13 anos que vive na cidade de Swellview. Ele consegue um emprego a tempo parcial como Kid Danger, um companheiro para o super-herói Capitão Man (Cooper Barnes)
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/9VLOw7ySPCY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           </li>
           <li>
           <p>Irmão do Jorel</p>
           Sinopse: Em Irmão do Jorel, Jorel é o garoto mais popular da escola e do bairro. Ele é bonito e tem cabelos longos e sedosos. Mas esta história não é sobre ele; é sobre seu irmão - cujo nome é um mistério. Filho de uma excêntrica família de acumuladores, ele quase não recebe atenção e acaba descobrindo uma maneira fantasiosa de sair das sombras de Jorel.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/9LeICITfZRQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           </li>
           <li>
           <p>Jovens Titãs em ação</p>
           Sinopse: Situações engraçadas, que acontecem entre os Titãs (Robin, Ciborgue, Estelar, Ravena e Mutano) quando não salvam o mundo e estão juntos como adolescentes sem supervisão de um adulto.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/_yMODWXkttE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           </li>
           <li>
           <p>Hilda</p>
           Sinopse: Ao sair da floresta onde vive e ir para a cidade, a destemida Hilda vive aventuras incríveis com os novos amigos e criaturas mágicas que encontra pelo caminho.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/f-RvZAu1_7c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           </li>
           <li>
           <p>Operação Big Hero: A série </p>
           Sinopse: Hiro continua suas aventuras com seu amigo robô Baymax e o resto da equipe Big Hero 6: Wasabi, o maníaco por controle; o cientista Honey Lemon; Fred, o tiete; e Go Go, o sério. Hiro tem que equilibrar sua vida acadêmica desafiadora - pois é o novo prodígio do Instituto de Teconologia de San Fransokyo - com a árdua tarefa de defender a cidade de uma míriade de vilões melhorados tecnologicamente.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/3vXq7Fuu43E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           </li>
           <li>
           <p>Soul </p>
           Sinopse: Joe é um professor de música do ensino médio apaixonado por jazz, cuja vida não foi como ele esperava. Quando ele viaja a uma outra realidade para ajudar outra pessoa a encontrar sua paixão, ele descobre o verdadeiro sentido da vida.
           <p> TRAILER: </p>
           <p><iframe width="450" height="315" src="https://www.youtube.com/embed/hWBxoH4-4yw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
           
           
           
           
           
           
           
           
           </li>

           
           
           
           
           
           
           
           
           
           
           </ol>
           
           
           
           
           
           
           
           
           
           `
           genero='uma Criança'
        //criança
    } else if (idade < 29){
        
        ser.innerHTML=` <ol>
        <li>
        <p>Julie and The Panthoms</p>
        Sinopse: A história gira em torno de Julie Molina (Madison Reyes), uma estudante de 15 anos que perdeu o amor à música com a morte de sua mãe. Ela volta a cantar depois de conhecer três fantasmas de músicos dos anos 90, Luke (Charlie Gillespie), Reggie (Jeremy Shada) e Alex (Owen Joyner), que morreram de forma trágica.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/PsWVTN_xu5Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        </li>
        <li>

        <p>La Casa de Papel</p>
        Sinopse: La Casa de Papel mostra um grupo de desconhecidos que se reúne e organiza um assalto à Casa da Moeda da Espanha. A terceira temporada mostrou os integrantes aproveitando os frutos do roubo até que a prisão de um dos assaltantes obriga os ladrões a se juntarem mais uma vez para roubar o Banco Central da Espanha.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/To_kVMMu-Ls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        
        
        
        </li>
        <li>
        <p>O Gambito da Rainha</p>
        Sinopse: Na trama, acompanhamos a vida e a evolução de Elizabeth Harmon, uma jovem órfã que, na década de 1950, se torna um prodígio do xadrez ainda criança. Ao longo dos anos, a jornada da jogadora é marcada por uma ascensão rápida e impressionante, ao mesmo tempo que enfrenta traumas antigos e vícios autodestrutivos.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/cnqV3wsZlpo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        </li>
        <li>
        <p>Anne with an E</p>
        Sinopse: A história acompanha a vida de Anne Shirley, uma jovem órfã que, após uma infância de abusos entre orfanatos e casas de estranhos, é enviada por engano para viver com um casal de irmãos em idade avançada. ... A série é baseada no livro Anne of Green Gables, escrito por Lucy Maud Montgomery.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/bBervTlBurY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

        
        
        
        
        
        
        
        </li>
        <li>
        <p>Fate: A Saga Winx</p>
        Sinopse: A série gira em torno de seis fadas populares que devem aprender a controlar seus poderes mágicos freqüentando uma escola em um mundo fantástico. Alfea é uma escola situada no Outromundo que tem por objetivo formar as fadas e instruí-las na arte da magia que já existe há milhares de anos.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/FmyB6V4XgMk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        </li>
        <li>
        <p>The 100 (The hundred)</p>
        Sinopse: Sinopse. A série se passa 97 anos após uma guerra nuclear devastadora que dizimou quase toda a vida na Terra. Os sobreviventes conhecidos são os moradores de doze estações espaciais em órbita da Terra, que já viviam nesta antes do fim da guerra. ... Os 100 jovens enviados encontram vários sobreviventes da guerra nuclear.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/B2OrmjsFrVU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        </li>
        <li>
        <p>Stranger Things</p>
        Sinopse: Em novembro de 1983, na pequena cidade de Hawkins, Indiana, um garoto de 12 anos, Will Byers desaparece misteriosamente. A mãe de Will, Joyce, torna-se frenética e tenta encontrar Will, enquanto o chefe de polícia Jim Hopper começa a investigar, assim como os amigos de Will: Mike, Dustin e Lucas.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/0hmzL7qHA1M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        </li>
        <li>
        <p>The Umbrella Academy</p>
        Sinopse: Umbrella Academy acompanha os membros de uma família disfuncional de super-heróis enquanto eles trabalham juntos para resolver a misteriosa morte de seu pai e lidam com suas personalidades e habilidades divergentes. ... A família se desintegrou, e o grupo se separou na adolescência.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/5_4SW8HHfUs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        
        
        
        </li>
        <li>
        <p>WandaVision</p>
        Sinopse: WandaVision, da Marvel Studios, mistura o estilo das sitcoms clássicas com o Universo Cinematográfico da Marvel, e acompanha Wanda Maximoff e o Visão, dois super-seres vivendo uma vida ideal no subúrbio, começando a suspeitar que nem tudo é o que parece.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/p__jH6NkowU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        </li>
        <li>
        <p>The Witcher</p>
        Sinopse: Baseado na série de livros Wiedźmin, do escritor polonês Andrzej Sapkowski, The Witcher se passa em um mundo de fantasia medieval e segue a história de Geralt de Rívia, um dos últimos bruxos restantes na Terra. Ele é um destemido andarilho e caçador de monstros, dotado de capacidades físicas sobrenaturais.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/tjujvMkqWe4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        
        </li>

        
        
        
        
        
        
        
        
        </ol>
        
        
        
        
        
        
        
        
        
        `
        genero='uma Jovem'
        //jovem
    } else if (idade < 55) {
        ser.innerHTML= `
        <ol>
        <li>
        <p>House of Cards</p>
        Sinopse:  Num drama sobre as consequências do poder e da corrupção, Francis Underwood está sedento por sucesso e nada o detém. Trata-se de uma história onde são ultrapassados os limites para satisfazer o desejo de um homem que ambiciona governar o mundo.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/kpWMwSSl2PM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>  
        
        </li>
        <li>

        <p>Vis a Vis</p>
        Sinopse: Acusada de cometer quatro crimes fiscais, ela precisa enfrentar o choque emocional que é estar na cadeia, enquanto sua família procura um jeito de pagar a fiança e libertá-la da Penitenciária de Cruz del Sur.
 
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/N08KRAPzsHU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        </li>
        <li>
        <p>Better call Saul</p>
        Sinopse:  Série derivada do sucesso Breaking Bad, é ambientada seis anos antes de Saul Goodman conhecer Walter White. Quando o conhecemos, o homem que se tornará Saul Goodman é conhecido como Jimmy McGill, um advogado de pequenas causas procurando o próprio destino e, mais imediatamente, tentando acertar sua vida financeira. Trabalhando ora junto a ele e ora contra, está Mike Erhmantraut. A série acompanhará a transformação de Jimmy em Saul Goodman, o homem que coloca “”criminosos”” dentro da “”lei””.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/FAdiEjeNRi0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p>Lovecraft Country</p>
        Sinopse: A série mistura história de aventura, leve terror e forte e relevante mensagem política, mostrando o racismo vivido na década de 50, nos Estados Unidos. 
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/a7XlZJ4F3e0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p>The Good Place</p>
        Sinopse: Eleanor Shellstrop está morta. Acontece que, após sua partida, ela foi enviada ao "Good Place - ou "Lugar Bom" -, um lugar de eterna felicidade destinado às pessoas que fizeram o bem durante suas vidas.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/22PDaEUC120" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p></p>
        Sinopse: Quando o consultor financeiro Marty Bird (Jason Bateman) se muda para os arredores do lago de Ozark com sua esposa Wendy, eles descobrem um lado sombrio e selvagem do capitalismo. Pois naquela parte do estado do Missouri, o que dá futuro é a lavagem de dinheiro proveniente do tráfico de drogas.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/NKXigPGOrt8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p>I Know This Much is True</p>
        Sinopse: Em I Know This Much Is True, Dominick (Mark Ruffalo) vive um relação extremamente complicada com seu irmão gêmeo, Thomas Birdsey (Mark Ruffalo). Sofrendo de esquizofrenia, Thomas está disposto a tudo para sair do asilo em que se encontra, e conta com a ajuda de Dominick para alcançar seu objetivo.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/GLBLLIbR0qI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p>Dark</p>
        Sinopse: O desaparecimento recente de crianças na pequena cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos e coloca quatro famílias no centro de uma teia de mistérios envolvendo uma misteriosa caverna, uma usina nuclear suspeita e um estranho homem recém-chegado na cidade.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/6EhDKaWLJgg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p>A cabana</p>
        Sinopse: Um homem vive atormentado após perder a sua filha mais nova, cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada e assassinada são encontrados em uma cabana nas montanhas. Anos depois da tragédia, ele recebe um chamado misterioso para retornar a esse local, onde ele vai receber uma lição de vida.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/tbpGAowldac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p>Histórias Cruzadas</p>
        Sinopse: Nos anos 60, no Mississippi, Skeeter é uma garota da alta sociedade que retorna determinada a se tornar escritora. Ela começa a entrevistar as mulheres negras da cidade, que deixaram suas vidas para trabalhar na criação dos filhos da elite branca, da qual a própria Skeeter faz parte. Aibileen Clark, a emprega da melhor amiga de Skeeter, é a primeira a conceder uma entrevista. Apesar das críticas, Skeeter e Aibileen continuam trabalhando juntas e, aos poucos, conseguem novas adesões.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/Cqn4XN21O1g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>

        
        
        
        
        
        
        
        
        
        
        
        
        </ol>
        
        
        
        
        
        
        `
        //adulta
        genero='uma Adulta'
       

    } else{
       
        ser.innerHTML=`
        <ol>
        <li>
        <p>Superação: O Milagre da Fé</p>
        Sinopse: Durante um passeio com a família em uma manhã de inverno no Lago St Louis, no Missouri, o menino John Smith, de apenas 14 anos, sofre uma queda e se afoga por mais de 15 minutos. Chegando ao hospital, John é considerado morto por mais de uma hora até que sua mãe, Joyce Smith, ao lado do pai e de um pastor, junta todas as suas forças e pede a Deus para que seu filho sobreviva. Sua prece poderosa é responsável por um milagre inédito.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/JzpDj_yERvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        </li>
        <li>
        <p>Luta por Justiça</p>
        Sinopse: O advogado Bryan Stevenson assume o caso de Walter McMillian, que foi condenado a morte por assassinato, apesar das evidências que comprovam sua inocência. Stevenson encontra racismo e manobras legais enquanto luta pela vida de McMillian.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/5dcU51Ad_QE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p>Até o Último Homem</p>
        Sinopse: Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/4s4UCxCv_OE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


        </li>
        <li>
        <p>Um Ato de Coragem</p>
        Sinopse: O filho de John Q. Archibald precisa com urgência de um transplante de coração. Desesperado por não ter condições de pagar pela cirurgia, ele toma como refém toda a emergência de um hospital e passa a discutir uma solução o chefe da polícia.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/86CMoOJTm7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        </li>
        <li>
        <p>À Procura da Felicidade</p>
        Sinopse: Chris enfrenta sérios problemas financeiros e Linda, sua esposa, decide partir. Ele agora é pai solteiro e precisa cuidar de Christopher, seu filho de 5 anos. Chris tenta usar sua habilidade como vendedor para conseguir um emprego melhor, mas só consegue um estágio não remunerado. Seus problemas financeiros não podem esperar uma promoção e eles acabam despejados. Chris e Christopher passam a dormir em abrigos ou onde quer que consigam um refúgio, mantendo a esperança de que dias melhores virão.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/k82CR0IkXjo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        </li>
        <li>
        <p>Forrest Gump: O contador de histórias</p>
        Sinopse: Mesmo com o raciocínio lento, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de pesca de camarão, Forrest inspira a todos com seu otimismo. Mas a pessoa que Forrest mais ama pode ser a mais difícil de salvar: seu amor de infância, a doce e perturbada Jenny.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/p0p5CQUjTxI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        </li>
        <li>
        <p>Sempre ao Seu Lado</p>
        Sinopse: Professor universitário encontra na estação de trem um filhote de cachorro da raça Akita, conhecida por sua lealdade. O cão passa a acompanhá-lo até a estação de trem e esperar sua volta. Até que um acontecimento inesperado altera sua vida.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/UFY8vW5IedY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        </li>
        <li>
        <p>Um Sonho de Liberdade</p>
        Sinopse: Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela. Ele é mandado para uma prisão que é o pesadelo de qualquer detento, a Penitenciária Estadual de Shawshank, no Maine. Lá ele irá cumprir a pena perpétua. Andy logo será apresentado a Warden Norton (Bob Gunton), o corrupto e cruel agente penitenciário, que usa a Bíblia como arma de controle e ao Capitão Byron Hadley (Clancy Brown) que trata os internos como animais. Andy faz amizade com Ellis Boyd Redding (Morgan Freeman), um prisioneiro que cumpre pena há 20 anos e controla o mercado negro da instituição.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/v1nZq1vfgSw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        </li>
        <li>
        <p>A Vida é Bela</p>
        Sinopse: Durante a Segunda Guerra Mundial na Itália, o judeu Guido (Roberto Benigni) e seu filho Giosué são levados para um campo de concentração nazista. Afastado da mulher, ele tem que usar sua imaginação para fazer o menino acreditar que estão participando de uma grande brincadeira, com o intuito de protegê-lo do terror e da violência que os cercam.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/xmAS4EtIHoc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        
        
        
        
        </li>
        <li>
        <p>O Resgate do Soldado Ryan</p>
        Sinopse: Ao desembarcar na Normandia, no dia 6 de junho de 1944, capitão Miller (Tom Hanks) recebe a missão de comandar um grupo do segundo batalhão para o resgate do soldado James Ryan, caçula de quatro irmãos, dentre os quais três morreram em combate. Por ordens do chefe George C. Marshall, eles precisam procurar o soldado e garantir o seu retorno, com vida, para casa.
        <p> TRAILER: </p>
        <p><iframe width="450" height="315" src="https://www.youtube.com/embed/WdHJ_nLRjIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></ifram</p>
        
        
        
        </li>

        
        
        
        
        
        
        
        
        
        
        
        </ol>
        
        
        
        
        
        
        
        
        
        `
        //idosa
        genero='uma Senhora'
    }
   }
   res.style.textAlign='center'
   res.innerHTML= `Detectamos ${genero} com ${idade} anos. <p> Que tal assistir a: </p> `
   ser.style.textAlign='<li></li>, center'
   
   res.appendChild(img)
   
}
 



 }
