const cells = document.querySelectorAll("tr td");
const widths = ["10%", "10%", "32%", "16%", "16%", "16%"];

cells.forEach((cell, index) => {
  cell.style.width = widths[index];
});

const itens = [
  { id: "global", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2473.webp", texto: "Baú Global" },
  { id: "astrologico", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2490.webp", texto: "Astrológico" },
  { id: "epifania", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2489.webp", texto: "Epifania" },
  { id: "piloto", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2493.webp", texto: "Piloto" },
  { id: "abraço", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2475.webp", texto: "Abraço" },
  { id: "marmota", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2492.webp", texto: "Marmota" },
  { id: "dragao", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2477.webp", texto: "Dragão" },
  { id: "namorados", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2491.webp", texto: "Namorados" },
  { id: "carnaval", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2478.webp", texto: "Carnaval" },
  { id: "chuva", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2479.webp", texto: "Chuva" },
  { id: "armagedom", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2480.webp", texto: "Armageddon" },
  { id: "patricio", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2485.webp", texto: "São Patrício" },
  { id: "cozinha", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2481.webp", texto: "Restaurante" },
  { id: "pascoa", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2487.webp", texto: "Páscoa" },
  { id: "dino", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2476.webp", texto: "Dinossauro" },
  { id: "pesca", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2482.webp", texto: "Pescaria" },
  { id: "jardinagem", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2488.webp", texto: "Jardinagem" },
  { id: "escola", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2483.webp", texto: "Volta às Aulas" },
  { id: "magia", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2486.webp", texto: "Magia" },
  { id: "halloween", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2484.webp", texto: "Halloween" },
  { id: "natal", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Inventario_2474.webp", texto: "Natal" },
  { id: "normal", texto: "Sem Evento" },
];

itens.forEach((item) => {
  const td = document.getElementById(item.id);
  if (td) {
    if (item.imgSrc) {
      td.innerHTML = `<img src="${item.imgSrc}">${item.texto}`;
    } else {
      td.textContent = item.texto;
    }
  }
});

const npcs = [
  { id: "npc-global", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Indiana_Mouse.webp", width: "55", texto: "Indiana Mouse" },
  { id: "npc-astrologico", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Ophelia.webp", width: "95", texto: "Ophelia" },
  { id: "npc-epifania", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Fromagnus.webp", width: "55", texto: "Fromagnus" },
  { id: "npc-piloto", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Bertrand.webp", width: "60", texto: "Bertrand" },
  { id: "npc-abraço", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Arabella.webp", width: "55", texto: "Arabella" },
  { id: "npc-marmota", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Charlotte.webp", width: "95", texto: "Charlotte" },
  { id: "npc-dragao", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Liu.webp", width: "60", texto: "Liu" },
  { id: "npc-namorados", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Fleur.webp", width: "55", texto: "Fleur" },
  { id: "npc-carnaval", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Rianna.webp", width: "70", texto: "Rianna" },
  { id: "npc-chuva", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Belle.webp", width: "65", texto: "Belle" },
  { id: "npc-armagedom", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Mirolle_Gooda.webp", width: "60", texto: "Mirolle Gooda" },
  { id: "npc-patricio", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Cassidy.webp", width: "55", texto: "Cassidy" },
  { id: "npc-cozinha", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Moris.webp", width: "65", texto: "Moris" },
  { id: "npc-pascoa", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Fluffy.webp", width: "55", texto: "Fluffy" },
  { id: "npc-dino", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Uga_Buga.webp", width: "75", texto: "Uga Buga" },
  { id: "npc-pesca", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Cancoillotte.webp", width: "75", texto: "Cancoillotte" },
  { id: "npc-jardinagem", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Moumouna.webp", width: "60", texto: "Moumouna" },
  { id: "npc-escola", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Prof.webp", width: "60", texto: "Prof" },
  { id: "npc-magia", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Cesar.webp", width: "75", texto: "Cesar" },
  { id: "npc-halloween", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Von_Drekkemaus.webp", width: "55", texto: "Von Drekkemaus" },
  { id: "npc-natal", imgSrc: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Jingle.webp", width: "60", texto: "Jingle" },
  { id: "npc-normal", texto: "Baú Global" },
];

npcs.forEach((npc) => {
  const td = document.getElementById(npc.id);
  if (td) {
    if (npc.imgSrc) {
      td.innerHTML = `<img width="${npc.width}" src="${npc.imgSrc}">${npc.texto}`;
    } else {
      td.textContent = npc.texto;
    }
  }
});

const medalhasPorBau = {
  global: ["Todos disponíveis abaixo."],
  astrologico: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_69.webp"],
  epifania: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_71.webp"],
  piloto: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_73.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_386.webp"],
  abraço: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_129.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_272.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_510.webp"],
  marmota: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_130.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_457.webp"],
  dragao: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_131.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_404.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_495.webp"],
  namorados: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_132.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_182.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_230.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_261.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_303.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_345.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_406.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_449.webp"],
  carnaval: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_0.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_1.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_133.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_454.webp"],
  chuva: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_134.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_310.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_471.webp"],
  armagedom: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_139.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_181.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_198.webp"],
  patricio: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_142.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_202.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_264.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_356.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_498.webp"],
  cozinha: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_144.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_464.webp"],
  pascoa: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_6.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_7.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_46.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_47.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_267.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_357.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_410.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_502.webp"],
  dino: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_364.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_366.webp"],
  pesca: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_16.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_17.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_18.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_50.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_51.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_158.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_184.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_209.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_276.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_324.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_423.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_515.webp"],
  jardinagem: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_161.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_163.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_240.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_317.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_373.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_374.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_418.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_468.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_469.webp"],
  escola: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_57.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_58.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_59.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_169.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_281.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_432.webp"],
  magia: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_188.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_477.webp"],
  halloween: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_28.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_29.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_30.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_64.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_65.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_170.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_190.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_218.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_219.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_221.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_249.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_290.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_334.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_390.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_391.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_435.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_438.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_482.webp"],
  natal: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_33.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_34.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_35.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_174.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_193.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_225.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_255.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_257.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_297.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_338.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_341.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_397.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_398.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_399.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_442.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_487.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_488.webp"],
  normal: ["https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_293.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_370.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_505.webp", "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Medalha_509.webp"]
};

function carregarMedalhas(idCelula, medalhas) {
  const celula = document.getElementById(idCelula);
  if (!celula) return;

  medalhas.forEach((item) => {
    if (typeof item === "string" && !item.startsWith("http") && !item.startsWith("/")) {
      celula.textContent = item;
    } else if (item.startsWith("http") || item.startsWith("/")) {
      const img = document.createElement("img");
      img.src = item;
      celula.appendChild(img);
    }
  });
}

Object.keys(medalhasPorBau).forEach((bau) => {
  const idCelula = `medalhas-${bau}`;
  carregarMedalhas(idCelula, medalhasPorBau[bau]);
});

const esferasPorBau = {
  global: ["Todos disponíveis abaixo."],
  astrologico: [{ width: "84", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_38.webp" }],
  epifania: [{ width: "63", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_5.webp" }, { width: "73", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_39.webp" }],
  piloto: [{ width: "58", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_6.webp" }],
  abraço: [{ width: "62", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_7.webp" }, { width: "58", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_85.webp" }],
  marmota: [{ width: "61", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_8.webp" }],
  dragao: [{ width: "70", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_9.webp" }, { width: "94", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_57.webp" }, { width: "69", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_80.webp" }],
  namorados: [{ width: "67", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_10.webp" }, { width: "64", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_34.webp" }, { width: "86", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_40.webp" }, { width: "68", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_46.webp" }, { width: "76", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_72.webp" }],
  carnaval: [{ width: "68", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_11.webp" }, { width: "66", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_64.webp" }],
  chuva: [{ width: "67", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_12.webp" }, { width: "66", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_51.webp" }, { width: "63", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_73.webp" }, { width: "76", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_76.webp" }],
  armagedom: [{ width: "71", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_13.webp" }, { width: "69", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_33.webp" }],
  patricio: [{ width: "68", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_14.webp" }, { width: "80", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_41.webp" }, { width: "71", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_58.webp" }, { width: "61", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_81.webp" }],
  cozinha: [{ width: "65", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_15.webp" }, { width: "69", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_74.webp" }, { width: "78", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_82.webp" }],
  pascoa: [{ width: "89", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_42.webp" }, { width: "82", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_59.webp" }, { width: "66", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_66.webp" }, { width: "55", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_83.webp" }],
  dino: [{ width: "65", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_20.webp" }],
  pesca: [{ width: "64", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_24.webp" }, { width: "86", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_25.webp" }, { width: "68", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_29.webp" }, { width: "80", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_47.webp" }, { width: "76", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_53.webp" }, { width: "75", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_62.webp" }, { width: "65", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_68.webp" }, { width: "67", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_86.webp" }],
  jardinagem: [{ width: "71", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_26.webp" }, { width: "72", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_52.webp" }, { width: "73", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_61.webp" }, { width: "65", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_67.webp" }, { width: "58", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_75.webp" }],
  escola: [{ width: "71", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_27.webp" }, { width: "61", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_69.webp" }],
  magia: [{ width: "72", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_30.webp" }, { width: "75", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_77.webp" }],
  halloween: [{ width: "77", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_28.webp" }, { width: "74", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_31.webp" }, { width: "92", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_35.webp" }, { width: "90", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_36.webp" }, { width: "69", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_43.webp" }, { width: "96", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_49.webp" }, { width: "65", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_54.webp" }, { width: "61", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_63.webp" }, { width: "61", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_70.webp" }, { width: "72", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_78.webp" }],
  natal: [{ width: "60", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_1.webp" }, { width: "55", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_2.webp" }, { width: "53", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_3.webp" }, { width: "60", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_4.webp" }, { width: "76", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_32.webp" }, { width: "89", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_37.webp" }, { width: "68", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_44.webp" }, { width: "82", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_45.webp" }, { width: "67", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_50.webp" }, { width: "60", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_55.webp" }, { width: "70", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_56.webp" }, { width: "62", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_65.webp" }, { width: "62", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_71.webp" }, { width: "64", src: "https://cdn.jsdelivr.net/gh/rafaelmoraith/area801-estilos@main/imagens/Esfera_79.webp" }],
  normal: ["Não há."],
};

function carregarEsferas(idCelula, esferas) {
  const celula = document.getElementById(idCelula);
  if (typeof esferas[0] === "string") {
    celula.textContent = esferas[0];
  } else {
    esferas.forEach((esfera) => {
      const img = document.createElement("img");
      img.width = esfera.width;
      img.src = esfera.src;
      celula.appendChild(img);
    });
  }
}

Object.keys(esferasPorBau).forEach((bau) => {
  const idCelula = `esferas-${bau}`;
  carregarEsferas(idCelula, esferasPorBau[bau]);
});

const titulosPorBau = {
  global: ["Todos disponíveis abaixo."],
  astrologico: ["«Queijólogo» | «Queijóloga» (377)"],
  epifania: ["«Bolo de Reis» (378)", "«Frangipane» (416)"],
  piloto: ["«Piloto» | «Pilota» (379)", "«Infinito» (548)", "«Up» (549)"],
  abraço: ["«Abraços Grátis» (380)"],
  marmota: ["«Marmota» (381)", "«Dorminhoco» | «Dorminhoca» (433)", "«Espanta Soneca» (570)"],
  dragao: ["«Flor de Lótus» (382)", "«Rato Inspetor» | «Rata Inspetora» (383)", "«Dragãozinho» | «Dragãozinha» (417)", "«Sagui» (418)", "«Feliz Ano Novo!» (557)"],
  namorados: ["«Rato Sedutor» | «Rata Sedutora» (210)", "«Tentador» | «Tentadora» (211)", "«Latin Lover» (212)", "«Omelettovore» (249)", "«Meu Docinho» (250)", "«Noivo» | «Noiva» (251)", "«Aqueijonado» | «Aqueijonada» (294)", "«Recém-Casado» | «Recém-Casada» (313)", "«Maçã do Amor» (314)", "«Coração Partido» (315)", "«Lua de Mel» (316)", "«Admirador Secreto» | «Admiradora Secreta» (384)", "«Cupido» (432)", "«Coração de Brioche» (494)", "«Arrasa Corações» (536)", "«Quer Ser Meussarela?» (537)", "«Divorciado» | «Divorciada» (558)"],
  carnaval: ["«Churros» (318)", "«Folião» | «Foliã» (319)", "«Arlequim» | «Arlequina» (385)", "«Ratobeleza» | «Ratabeleza» (493)", "«Dó-Ré-Mi» (553)", "«Confete» (569)"],
  chuva: ["«Sardinha» (297)", "«Sapinho» | «Sapinha» (386)", "«Gotinha» (495)", "«Sombra» (571)"],
  armagedom: ["«Magiqueijo» (336)", "«Defensor» | «Defensora» (387)", "«Guardião» | «Guardiã» (573)"],
  patricio: ["«Generoso» | «Generosa» (243)", "«Barmouse» (388)", "«Rato Celta» | «Rata Celta» (435)", "«Leprechaun» (436)", "«Bardo» (483)"],
  cozinha: ["«Confeiteiro do Rei» | «Confeiteira do Rei» (357)", "«Ratatouille» (389)", "«Massa de Crépe» (419)", "«Feijoada» (438)", "«Amante de Pizza» (461)", "«Mestre-Cuca» (572)", "«Empreguete» (602)"],
  pascoa: ["«Chocovore» (254)", "«Chocoelho» | «Chocoelha» (255)", "«Galo» | «Galinha» (295)", "«Cocoricó» (320)", "«Cacau» (321)", "«Caçador de Ovos» | «Caçadora de Ovos» (322)", "«Nervosinho» | «Nervosinha» (355)", "«Duque Caramelo» | «Duquesa Caramelo» (356)", "«Cara de Bolacha» (358)", "«Rei Doce» | «Rainha Doce» (359)", "«Sininho» (393)", "«Rato Sagaz» | «Rata Sagaz» (420)", "«Amante de Artefatos» (421)", "«Rato Moai» | «Rata Moai» (437)", "«Viajante» (539)"],
  dino: ["«Rato Pré-Histórico» | «Rata Pré-Histórica» (394)", "«Tyrannosouris» (395)", "«Rato das Cavernas» | «Rata das Cavernas» (439)", "«Ratossauro» (540)", "«Vulcânico» | «Vulcânica» (541)"],
  pesca: ["«Tonnerre de Brest» (253)", "«Explorador» | «Exploradora» (296)", "«Pescador» | «Pescadora» (298)", "«Adorador» | «Adoradora» (299)", "«Mas Que Peixes» (335)", "«Yeeehaaaaa!» (337)", "«Melhor Treinador» | «Melhor Treinadora» (338)", "«Todos a Bordo!» (339)", "«herp derp» (340)", "«Capitão Nemouse» | «Capitã Nemouse» (341)", "«Indiana Rato» | «Indiana Rata» (342)", "«Dora, a Aventureira» (361)", "«Rato Arqueólogo» | «Rata Arqueóloga» (362)", "«Allan Quaterrato» (363)", "«Bucaneiro» | «Bucaneira» (403)", "«Sushizinho» | «Sushizinha» (404)", "«Estrela-do-Mar» (405)", "«Capitão Coco» | «Capitã Coco» (422)", "«Perdoado» | «Perdoada» (460)", "«Netuno» (484)", "«Mermouse» (506)", "«Almirante» (507)", "«Tritão» | «Sereia» (547)", "«Foi Pescar» (560)", "«Capitão gancho» (561)", "«Capitão Sardinha» | «Capitã Sardinha» (604)", "«Cavalheiro do Lago» | «Dama do Lago» (605)"],
  jardinagem: ["«Fazendeiro» | «Fazendeira» (406)", "«Maratonista» (407)", "«Jardineiro» | «Jardineira» (481)", "«Botânico» | «Botânica» (505)", "«Girassol» (545)", "«Vinicultor» | «Vinicultora» (546)", "«Bumblebrie» (559)", "«Margarida» (574)", "«Bolinho de Legumes» (575)"],
  escola: ["«Rato Infantil» | «Rata Infantil» (323)", "«Estudante Modelo» (360)", "«Baderneiro» | «Baderneira» (366)", "«Primeiro da Classe» | «Primeira da Classe» (367)", "«Rato de Biblioteca» | «Rata de Biblioteca» (368)", "«Acadêmico» | «Acadêmica» (369)", "«Ratinho Determinado» | «Ratinha Determinada» (396)", "«Calouro» | «Caloura» (410)", "«Brincalhão» | «Brincalhona» (411)", "«Autodidata» (485)", "«Procrastinador» | «Procrastinadora» (486)", "«Honrado» | «Honrada» (487)", "«Roedor Inteligente» (562)", "«Guerreiro da Caneta Azul» (563)", "«Rei dos Rabiscos» | «Rainha dos Rabiscos» (564)"],
  magia: ["«Supervisor» | «Supervisora» (424)", "«Bruxo» | «Bruxa» (425)", "«Lenhador» | «Lenhadora» (376)", "«Carpinteiro» | «Carpinteira» (596)", "«Alquimista» (597)"],
  halloween: ["«Vampiro» | «Vampira» (287)", "«Frankenmaus» (300)", "«Bombom *-*» (301)", "«Suco de Abóbora» (302)", "«Doce ou Travessura» (303)", "«Poltergeist» (304)", "«Von Drekkemaus» (307)", "«Gasparzinho» (343)", "«Torta de Abóbora» (344)", "«Caça-Fantasmas» (345)", "«Zumbi» (346)", "«Caça-Vampiros» (347)", "«Assustador» | «Assustadora» (348)", "«Devoradoces» (349)", "«Voldemouse» (371)", "«Scooby-Doo» (372)", "«O Amaldiçoado» | «A Amaldiçoada» (373)", "«Lobisrato» | «Lobisrata» (412)", "«Pac-Mouse» (413)", "«Ratinho Viajante» | «Ratinha Viajante» (414)", "«Castanha» (426)", "«Transformista» (427)", "«Enfeitiçado» | «Enfeitiçada» (428)", "«Cipher» (462)", "«Minhoca» (488)", "«Jack-o'-lantern» (489)", "«Lembre de Mim» (508)", "«Nosferatu» (509)", "«Esqueleto» (510)", "«Squeak!» (550)", "«Alma Perdida» (551)", "«Scream Cheese» (552)", "«Mumisterioso» (565)", "«Cringe» (598)", "«Abominação» (599)"],
  natal: ["«Floquinho de Neve» (127)", "«Espírito Natalino» (128)", "«Duende» (129)", "«Papai Noel» | «Mamãe Noel» (130)", "«Cookies» (240)", "«Bolo de Natal» (241)", "«Barba Branca» (242)", "«Nevado» | «Nevada» (244)", "«Nevasca» (245)", "«Bola de Neve» (288)", "«Estou com Frio» (289)", "«Castanha Grelhada» (290)", "«Meia de Lã» (291)", "«Souris Sapin» (292)", "«Comedor de Cookies» | «Comedora de Cookies» (293)", "«Pirulito de Bengala» (308)", "«Pisca Pisca» (309)", "«Papaille Noel» (310)", "«Elfo» | «Elfette» (311)", "«Anjo de Neve» (312)", "«Glacial» (350)", "«Pão de Mel» (351)", "«Rato Polar» | «Rata Polar» (352)", "«Grande Ceia» (353)", "«Salvador do Natal» | «Salvadora do Natal» (354)", "«Tartiflette» (375)", "«Raclette» (415)", "«Frozen» (429)", "«Cubo de Gelo» (430)", "«Trabalhador Glacial» | «Trabalhadora Glacial» (431)", "«Snowboarder» (479)", "«Reninha» (480)", "«Luz de Velas» (482)", "«Castanha Caramelizada» (491)", "«Azevinho» (492)", "«Feliz Natal» (531)", "«Snowdrop» (532)", "«Iglu» (533)", "«Aurora Boreal» (554)", "«Ratinho de Neve» | «Ratinha de Neve» (555)", "«Chocolate Quente» (556)", "«Estrela d'Alva» (566)", "«Pinball Natalino» (600)", "«Rato do Ártico» | «Rata do Ártico» (601)"],
  normal: ["«Patriota» (364)", "«Sans-culotte» (365)", "«Namastê» (370)", "«Rato Arenoso» | «Rata Arenosa» (408)", "«Tutankhamouse» (409)", "«Rato Turing» | «Rata Turing» (423)", "«Pierogi» (478)", "«Perdido no Tempo» | «Perdida no Tempo» (490)", "«Mosquerato» | «Mosquerata» (542)", "«Ferreiro» | «Ferreira» (543)", "«Clarividente» (544)", "«Bzzzzzz» (567)", "«Hmm...» (568)", "«Celestial» (603)", "«Explorador Galáctico» | «Exploradora Galáctica» (606)"],
};

function carregarTitulos(idCelula, titulos) {
  const celula = document.getElementById(idCelula);
  titulos.forEach((titulo) => {
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
