const cells = document.querySelectorAll('tr td');
const widths = ["10%", "10%", "32%", "16%", "16%", "16%"];

cells.forEach((cell, index) => {
  cell.style.width = widths[index];
});

const titulosPorBau = {
  "global": ["Todos disponíveis abaixo."],
  "astrologico": ["«Queijólogo» | «Queijóloga» (377)"],
  "epifania": ["«Bolo de Reis» (378)", "«Frangipane» (416)"],
  "piloto": ["«Todos a bordo!» (339)", "«Piloto» | «Pilota» (379)", "«Infinito» (548)", "«Up» (549)"],
  "abraço": ["«Aqueijonado» (294)", "«Abraços grátis» (380)"],
  "marmota": ["«Marmota» (381)", "«Dorminhoco | Dorminhoca» (433)", "«Espanta Soneca» (570)"],
  "dragao": ["«Flor de Lótus» (382)", "«Rato Inspetor» | «Rata Inspetora» (383)", "«Dragãozinho» (417)", "«Sagui» (418)", "«Feliz Ano Novo!» (557)"],
  "namorados": ["«Rato Sedutor» | «Rata Sedutora» (210)", "«Tentador» | «Tentadora» (211)", "«Latin Lover» (212)", "«Omelettovore» (249)", "«Meu Docinho» (250)", "«Noivo» | «Noiva» (251)", "«Aqueijonado» (294)", "«Recém-Casados» (313)", "«Maçã do Amor» (314)", "«Coração Partido» (315)", "«Lua de Mel» (316)", "«Admirador Secreto» | «Admiradora Secreta» (384)", "«Cupido» (432)", "«Coração de Brioche» (494)", "«Quebra-Corações» (536)", "«Quer ser Meussarela?» (537)", "«Divorciado | Divorciada» (558)"],
  "carnaval": ["«Churros» (318)", "«Folião» | «Foliona» (319)", "«Arlequim» | «Arlequina» (385)", "«Ratobeleza | Ratabeleza» (493)", "«Do-Ré-Mi» (553)", "«Confete» (569)"],
  "chuva": ["«Sardinha» (297)", "«Sapinho» | «Sapinha» (386)", "«Gotinha» (495)", "«Sombra» (571)"],
  "armagedom": ["«Magiqueijo» (336)", "«Defensor» | «Defensora» (387)", "«Guardião» | «Guardiã» (573)"],
  "patricio": ["«Generoso» | «Generosa» (243)", "«Barmouse» (388)", "«Rato Celta | Rata Celta» (435)", "«Leprechaun» (436)", "«Rato Moai | Rata Moai» (437)", "«Bardo» (483)"],
  "cozinha": ["«Confeiteiro do Rei» (357)", "«Ratatouille» (389)", "«Massa de Crepe» (419)", "«Feijoada» (438)", "«Amante de Pizza» (461)", "«Mestre-Cuca» (572)"],
  "pascoa": ["«Chocovore» (254)", "«Chocoelho» | «Chocoelha» (255)", "«Galo» | «Galinha» (295)", "«Cocoricó» (320)", "«Cacau» (321)", "«Caçador de ovos» | «Caçadora de ovos» (322)", "«Ratinho Nervoso» | «Ratinha Nervosa» (355)", "«Duque Caramelo» | «Duquesa Caramelo» (356)", "«Cara de Bolacha» (358)", "«Rei do Doce» | «Rainha do Doce» (359)", "«Sininho» (393)", "«Rato Sagaz» (420)", "«Amante de Artefactos» (421)", "«Rato Moai | Rata Moai» (437)", "«Viajante» (539)"],
  "dino": ["«Rato Pré-histórico» | «Rata Pré-Histórica» (394)", "«Tyrannosouris» (395)", "«Rato das Cavernas | Rata das Cavernas» (439)", "«Ratossauro» (540)", "«Vulcânico | Vulcânica» (541)"],
  "pesca": ["«Tonnerre de Brest» (253)", "«Explorador | Exploradora» (296)", "«Pescador» | «Pescadora» (298)", "«Adorador» | «Adoradora» (299)", "«Mas Que Peixes» (335)", "«Yeeehaaaa!» (337)", "«Melhor Treinador» | «Melhor Treinadora» (338)", "«Todos a Bordo» (339)", "«herp derp» (340)", "«Capitão Nemouse» | «Capitã Nemouse» (341)", "«Indiana Rato» (342)", "«Dora, a Aventureira» (361)", "«Rato Arqueólogo» | «Rata Arqueólogo» (362)", "«Allan Quarterato» (363)", "«Bucaneiro» | «Bucaneira» (403)", "«Pequeno Sushi» (404)", "«Estrela do Mar» (405)", "«Capitão Coco» | «Capitã Coco» (422)", "«Perdoado | Perdoada» (460)", "«Netuno» (484)", "«Mermouse» (506)", "«Almirante» (507)", "«Tritão | Sereia» (547)", "«Foi Pescar» (560)", "«Capitão Gancho» (561)"],
  "jardinagem": ["«Fazendeiro» | «Fazendeira» (406)", "«Maratonista» (407)", "«Jardineiro | Jardineira» (481)", "«Botânico | Botânica» (505)", "«Girassol» (545)", "«Vinicultor | Vinicultora» (546)", "«Bumblebrie» (559)", "«Margarida» (574)", "«Bolinho de Legumes» (575)"],
  "escola": ["«Rato Infantil» | «Rata Infantil» (323)", "«Estudante Modelo» (360)", "«Baderneiro» | «Baderneira» (366)", "«Primeiro da classe» | «Primeira da classe» (367)", "«Rato de biblioteca» | «Rata de biblioteca» (368)", "«Acadêmico» (369)", "«Ratinho Determinado» | «Ratinha Determinada» (396)", "«Calouro» | «Caloura» (410)", "«Brincalhão» | «Brincalhona» (411)", "«Autodidata» (485)", "«Procrastinador | Procrastinadora» (486)", "«Honrado | Honrada» (487)", "«Roedor Inteligente» (562)", "«Guerreiro da caneta azul» (563)", "«Rei dos Rabiscos | Rainha dos Rabiscos» (564)"],
  "magia": ["«Lenhador» | «Lenhadora» (376)", "«Supervisor» | «Supervisora» (424)", "«Bruxo» | «Bruxa» (425)", "«Carpinteiro» | «Carpinteira» (596)", "«Alquimista» (597)"],
  "halloween": ["«Vampiro» | «Vampira» (287)", "«Frankenmaus» (300)", "«Bonbon *-*» (301)", "«Suco de abóbora» (302)", "«Doce ou Travessura» (303)", "«Poltergeist» (304)", "«Von Drekkemaus» (307)", "«Gasparzinho» (343)", "«Torta de Abóbora» (344)", "«Caça Fantasmas» (345)", "«Zumbi» (346)", "«Caça Vampiros» (347)", "«Assustador» | «Assustadora» (348)", "«Devoradoces» (349)", "«Voldemouse» (371)", "«Scooby-Doo» (372)", "«O Amaldiçoado» | «A Amaldiçoada» (373)", "«Lobisrato» | «Lobisrata» (412)", "«Pac-mouse» (413)", "«Ratinho Viajante» | «Ratinha Viajante» (414)", "«Castanha» (426)", "«Transformista» (427)", "«Enfeitiçado | Enfeitiçada» (428)", "«Cipher» (462)", "«Minhoca» (488)", "«Jack-o'-lantern» (489)", "«Lembre de Mim» (508)", "«Nosferatu» (509)", "«Esqueleto» (510)", "«Squeak!» (550)", "«Alma Perdida» (551)", "«Scream cheese» (552)", "«Mumisterioso» (565)", "«Cringe» (598)", "«Abominação» (599)"],
  "natal": ["«Floquinho de Neve» (127)", "«Espírito Natalino» (128)", "«Duende» (129)", "«Papai Noel» | «Mamãe Noel» (130)", "«Biscoitos» (240)", "«Bolo de Natal» (241)", "«Barba Branca» (242)", "«Nevado» | «Nevada» (244)", "«Nevasca» (245)", "«Bola de Neve» (288)", "«Estou com frio» (289)", "«Castanha Grelhada» (290)", "«Meia de lã» (291)", "«Souris Sapin» (292)", "«Comedor de Cookies» | «Comedora de Cookies» (293)", "«Pirulito de bengala» (308)", "«Guirlanda» (309)", "«Papaille Noel» (310)", "«Elfette» (311)", "«Anjo de Neve» (312)", "«Glacial» (350)", "«Pão de Mel» (351)", "«Rato Polar» | «Rata Polar» (352)", "«Grande Ceia» (353)", "«Salvador do Natal» | «Salvadora do Natal» (354)", "«Tartiflette» (375)", "«Raclette» (415)", "«Frozen» (429)", "«Cubo de Gelo» (430)", "«Trabalhador Glacial» | «Trabalhadora Glacial» (431)", "«Snowboarder» (479)", "«Reninha» (480)", "«Luz de Velas» (482)", "«Marron-Glacé» (491)", "«Azevinho» (492)", "«Feliz Natal» (531)", "«Snowdrop» (532)", "«Iglu» (533)", "«Aurora Boreal» (554)", "«Ratinho de Neve | Ratinha de Neve» (555)", "«Chocolate Quente» (556)", "«Estrela D'Alva» (566)", "«Pinball Natalino» (600)", "«Rato do Ártico» (601)"],
  "normal": ["«Patriota» (364)", "«Sans-culotte» (365)", "«Namastê» (370)", "«Rato Arenoso» | «Rata Arenosa» (408)", "«Tutankhamouse» (409)", "«Rato Turing» | «Rata Turing» (423)", "«Pierogi» (478)", "«Perdido no Tempo | Perdida no Tempo» (490)", "«Mosquerato | Mosquerata» (542)", "«Ferreiro | Ferreira» (543)", "«Clarividente» (544)", "«Bzzzzzz» (567)", "«Hmm...» (568)"]
};

function carregarTitulos(idCelula, titulos) {
  const celula = document.getElementById(idCelula);
  titulos.forEach(titulo => {
    const div = document.createElement("div");
    div.textContent = titulo;
    celula.appendChild(div);
  });
}

carregarTitulos("titulos-global", titulosPorBau.global);
carregarTitulos("titulos-astrologico", titulosPorBau.astrologico);
carregarTitulos("titulos-epifania", titulosPorBau.epifania);
carregarTitulos("titulos-piloto", titulosPorBau.piloto);
carregarTitulos("titulos-abraço", titulosPorBau.abraço);
carregarTitulos("titulos-marmota", titulosPorBau.marmota);
carregarTitulos("titulos-dragao", titulosPorBau.dragao);
carregarTitulos("titulos-namorados", titulosPorBau.namorados);
carregarTitulos("titulos-carnaval", titulosPorBau.carnaval);
carregarTitulos("titulos-chuva", titulosPorBau.chuva);
carregarTitulos("titulos-armagedom", titulosPorBau.armagedom);
carregarTitulos("titulos-patricio", titulosPorBau.patricio);
carregarTitulos("titulos-cozinha", titulosPorBau.cozinha);
carregarTitulos("titulos-pascoa", titulosPorBau.pascoa);
carregarTitulos("titulos-dino", titulosPorBau.dino);
carregarTitulos("titulos-pesca", titulosPorBau.pesca);
carregarTitulos("titulos-jardinagem", titulosPorBau.jardinagem);
carregarTitulos("titulos-escola", titulosPorBau.escola);
carregarTitulos("titulos-magia", titulosPorBau.magia);
carregarTitulos("titulos-halloween", titulosPorBau.halloween);
carregarTitulos("titulos-natal", titulosPorBau.natal);
carregarTitulos("titulos-normal", titulosPorBau.normal);
