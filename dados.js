/**
 * Array de objetos representando personagens de quadrinhos.
 * Cada objeto possui as seguintes propriedades:
 *  - Titulo (string): O nome do personagem.
 *  - Descricao (string): Uma breve biografia do personagem.
 *  - Link (string): Um link para a página da Wikipédia do personagem.
 */

let dados = [
    {
      Titulo: "Superman",
      Descricao: "Nascido no planeta Krypton, Kal-El foi enviado à Terra pelos seus pais antes da destruição de seu planeta natal. Criado por uma família de fazendeiros no Kansas, Clark Kent desenvolveu poderes incríveis sob a luz do Sol amarelo da Terra. Como Superman, ele protege Metrópolis e o mundo com sua força sobre-humana, capacidade de voar, visão de calor, raio-x e outros poderes. Sob a identidade de Clark Kent, ele trabalha como jornalista no Planeta Diário, buscando a verdade e defendendo os mais fracos.",
      Link: "https://pt.wikipedia.org/wiki/Superman",
      tags: "Homem de aço Visão de raio x  visão raio x super força"
    },
    {
      Titulo: "Lex Luthor",
      Descricao: "Lex Luthor é o arqui-inimigo do Superman, um bilionario egocêntrico e brilhante cientista com sede de poder absoluto. Luthor, obcecado por dominar o mundo, vê o Superman como a maior ameaça à sua ambição. Com uma inteligência superior e vastos recursos financeiros, ele trama constantemente planos para derrotar o Homem de Aço e estabelecer sua tirania sobre a humanidade. Luthor é um vilão complexo, motivado por uma mistura de inveja, ódio e um profundo desprezo pela fraqueza humana.",
      Link: "https://pt.wikipedia.org/wiki/Lex_Luthor",
      tags: "Bilhonario Cientista Ciêntista Vilão"
    },
    {
      Titulo: "Batman",
      Descricao: "Batman é um dos super-heróis mais conhecidos e complexos dos quadrinhos. Sob a máscara, está Bruce Wayne, um bilionário traumatizado pela morte de seus pais quando criança. Motivado pela vingança e pela promessa de proteger sua cidade, Gotham, Bruce se submete a um rigoroso treinamento físico e mental, tornando-se o vigilante conhecido como Batman. Sem superpoderes, ele utiliza sua inteligência, habilidades de detetive, força física e uma variedade de equipamentos tecnológicos avançados para combater o crime. Batman é um símbolo de justiça e esperança em Gotham, mas também um homem atormentado por seus demônios internos.",
      Link: "https://pt.wikipedia.org/wiki/Batman",
      tags: "Homem-Morcego Homem morcego milhonario solitario"
    },
    {
      Titulo: "Capitão América",
      Descricao: "Steve Rogers, o Capitão América, é um super-soldado criado durante a Segunda Guerra Mundial para combater as forças do eixo. Congelado em gelo por décadas, ele desperta nos dias atuais para continuar sua luta pela liberdade e justiça.",
      Link: "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Am%C3%A9rica",
      tags: "super-soldado escudo patriota guerra"
    },
    {
      Titulo: "Homem de Ferro",
      Descricao: "Tony Stark, o Homem de Ferro, é um bilionário inventor e playboy que, após ser ferido em um sequestro, cria uma armadura de alta tecnologia para salvar sua vida e se torna um super-herói. Com sua inteligência e recursos, ele protege o mundo como o Homem de Ferro.",
      Link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro",
      tags: "armadura tecnologia bilionário invento"
    },
    {
      Titulo: "Mulher Maravilha",
      Descricao: "Diana Prince, a Mulher Maravilha, é uma princesa amazona com super força, velocidade e habilidades de combate. Criada na ilha paradisíaca de Themyscira, ela decide deixar sua casa para proteger o mundo dos perigos.",
      Link: "https://pt.wikipedia.org/wiki/Mulher_Maravilha",
      tags: "amazona super força escudo verdade"
    },
    {
      Titulo: "Hulk",
      Descricao: "Bruce Banner, o Hulk, é um cientista que, após ser exposto a uma alta dose de radiação gama, se transforma em um monstro verde de força inigualável. A raiva intensifica sua transformação e seus poderes, tornando-o uma força da natureza.",
      Link: "https://pt.wikipedia.org/wiki/Hulk",
      tags: "radiação gama monstro força raiva gigante esmeralda"
    },
    {
      Titulo: "Ultron",
      Descricao: "Ultron é um robô criado por Henry Pym com o objetivo de proteger a humanidade. No entanto, Ultron se torna senciente e desenvolve uma obsessão por exterminar a raça humana, considerando-a uma ameaça à sua existência.",
      Link: "https://pt.wikipedia.org/wiki/Ultron",
      tags: "robô inteligência artificial androide exterminador"
    },
    {
      Titulo: "Thanos",
      Descricao: "Thanos é um titã cósmico com a ambição de eliminar metade da vida no universo para alcançar o equilíbrio. Possui força sobre-humana, resistência e durabilidade, além de manipular a energia cósmica.",
      Link: "https://pt.wikipedia.org/wiki/Thanos",
      tags: "titã cósmico manopla do infinito equilíbrio morte"
    },
    {
      Titulo: "Flash",
      Descricao: "Barry Allen, o Flash, é um cientista forense atingido por raios durante uma tempestade com produtos químicos, adquirindo a habilidade de se mover em velocidades supersônicas. Ele utiliza sua velocidade para combater o crime e proteger o mundo.",
      Link: "https://pt.wikipedia.org/wiki/Flash_(DC_Comics)",
      tags: "velocidade força da aceleração raios"
    },
    {
      Titulo: "Darkseid",
      Descricao: "Darkseid é um novo deus de Apokolips, obcecado por conquistar o multiverso e impor sua vontade sobre todos os seres vivos. Possui força sobre-humana, resistência e durabilidade, além de manipular a energia cósmica conhecida como Efeito Ômega.",
      Link: "https://pt.wikipedia.org/wiki/Darkseid",
      tags: "novo deus apokolips tirania efeito omega"
    },
    {
      Titulo: "Brainiac",
      Descricao: "Brainiac é um androide extraterrestre com inteligência superior e a habilidade de encolher cidades e planetas inteiros para estudá-los. Busca coletar conhecimento de todas as civilizações para alcançar a perfeição.",
      Link: "https://pt.wikipedia.org/wiki/Brainiac",
      tags: "androide inteligência artificial cientista colecionador"
    },
    {
      Titulo: "Lanterna Verde",
      Descricao: "Os Lanternas Verdes são um corpo intergaláctico de policiais espaciais que utilizam anéis de poder para criar constructos de energia verde, baseados em sua força de vontade. Cada Lanterna Verde possui um setor do universo a proteger.",
      Link: "https://pt.wikipedia.org/wiki/Lanterna_Verde",
      tags: "corpo dos lanternas verdes anel de poder força de vontade constructos"
    },
    {
      Titulo: "Caçador de Marte",
      Descricao: "J'onn J'onzz, o Caçador de Marte, é um marciano que veio para a Terra após a destruição de seu planeta. Possui a capacidade de se transformar em qualquer ser vivo, voar, telecinese e telepatia.",
      Link: "https://pt.wikipedia.org/wiki/Caçador_de_Marte",
      tags: "marciano forma cambiante telepatia telecinese Jonn Jonzz Jhon"
    },
    {
      Titulo: "Coringa",
      Descricao: "O Coringa é um dos maiores vilões do Batman, um psicopata anárquico e caótico, conhecido por seu sorriso macabro e planos insanos. Sua origem é incerta, mas sua obsessão por levar Gotham City à loucura é inegável.",
      Link: "https://pt.wikipedia.org/wiki/Joker_(DC_Comics)",
      tags: "vilão psicopata caos loucura batman Joker joker"
    },
    {
      Titulo: "Deadpool",
      Descricao: "Deadpool, ou Wade Wilson, é um mercenário com um fator de cura acelerado, o que o tornou imortal. Conhecido por seu humor ácido e quebra da quarta parede, ele é um anti-herói que luta contra o crime com métodos pouco convencionais.",
      Link: "https://pt.wikipedia.org/wiki/Deadpool",
      tags: "mercenário anti-herói fator de cura humor"
    },
    {
      Titulo: "Wolverine",
      Descricao: "Logan, ou Wolverine, é um mutante com um esqueleto de adamantium, garras retráteis e um fator de cura acelerado. Membro dos X-Men, ele é um guerreiro solitário e brutal, com um passado obscuro e doloroso.",
      Link: "https://pt.wikipedia.org/wiki/Wolverine",
      tags: "mutante adamantium garras fator de cura x-men"
    },
    {
      Titulo: "Homem-Aranha",
      Descricao: "Peter Parker, o Homem-Aranha, é um adolescente que, após ser picado por uma aranha radioativa, ganha super força, agilidade e a habilidade de aderir a superfícies. Ele usa seus poderes para combater o crime e proteger a cidade de Nova York.",
      Link: "https://pt.wikipedia.org/wiki/Homem_Aranha",
      tags: "super-herói aranha teias nova york homem aranha spider man"
    }

    
  ];