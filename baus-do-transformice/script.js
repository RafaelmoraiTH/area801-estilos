const cells = document.querySelectorAll('tr td');
const widths = ["10%", "10%", "32%", "16%", "16%", "16%"];

cells.forEach((cell, index) => {
  cell.style.width = widths[index];
});

const itens = [
  { id: "global", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgycbEplRjoFk3c5pGbHC5vKkRjp5dQGgDFWLCvSig36xB6Y2DOsVWP4cfxGCRwq6c5QrM2UHLKSnWbSW9nGkj_ZRFnF2PGADM8F1T_ApV8NPOofekv8DynOTQVe5bkAhvLHPqbeekz2q1kk093_iIwYWpcyr4jc0DS-JVo43b3peZQ4GwpY4bH30_3M9u8/s1600/Inventario_2473.png", texto: "Baú Global" },
  { id: "astrologico", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVb-WWqILn18rfiNtQTQnUDpOGQz7k8Nt6N4y8Duwq7SXmxL2Z9LVkGXRZI8lCfISLk7xfNPJZC4RIbTKs0SoK4Edemd5M7zaE_3Zf1hDMhcj2CG89B_6AIG_W21uHuTaATckSLQebQjTrT_HGkm7co4jZ3qB0ek8Uv2ROYByvGi3KqdXEleHTAhObWMrM/s1600/Inventario_2490.png", texto: "Astrológico" },
  { id: "epifania", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnGNCJ2rvBw_vJe2kL0XUpsnuByeNL5RLim_ajtnRPb1XfN5EjHfn3_Rd7oM9YOc9Xj8dwj97XyTgYdvwA9yB1wQ1uC3X8T8zrWFpMjq4z45o-LFKybpywrUIQIowJLjEFLZe8FudYkOJpWDpbojSO0KmdlQPMQ76eGQU9irvgxkme7vxe1jOl79EopoKU/s1600/Inventario_2489.png", texto: "Epifania" },
  { id: "piloto", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgALq1WyuD-K9VMGeymB1Uachws1hc_vAQdwRX-kBoPCXRKn5T_ZM3pEIdt5-r8AAUIhj7mru01hLCvwmSw1FMkNrhBz47yvoufw6XUsSulv84UjQ-puixeLlPzpkng7x2BUPimYbKHwP-aG0p9QJJIV-2LOefvMM2c1hiUleS1EQeImHOxeVwpxwbrhmQ5/s1600/Inventario_2493.png", texto: "Piloto" },
  { id: "abraço", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIzw0yHox7WcT7LogCZQMda17dOCYHxoC4E3OXrqrKLuuKhNuFcUX6xav-SSCGSwWF8m0AfWD9-403r6MO2VPXyVP3je5V4r6QmVWB5bVYs916dycajvM_W0Bp5JSNRdEyjVWXirOGgUT1h2EHpTcosqK-85mcBX9Y_E_Sb1SKpodIFacwFJWq6q_E01Zu/s1600/Inventario_2475.png", texto: "Abraço" },
  { id: "marmota", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVZAIL_k3JHvkVaHGvlEU9c3pRkPtsUrDNokWoIq5pJ70OV1Geo7D1W-PEnfoxjNuuhvJXtabLrIbHupU5Pap2EOYWIOOE_Pe9RiOTZtJdpgapML4hkyhBYRWsv7-ASwfO9r8ENN8WVYWBgJcOQTBjUXwDrlofc3xgpQw1AiboR1sbzYh1ia4ISmV1kPYu/s1600/Inventario_2492.png", texto: "Marmota" },
  { id: "dragao", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl5X1G2wmuU7rQwlDM7tIaII0cobAThS57nNFPbRUNSqEMt2HBK5wU9Fyd45fZFxTmLBGT9OtmjMvECxWv6iCzrIbp5AO90doAFjRUqs26WNivkncHQv_6Rf8xzd7uVMaGezKVqG3oSUaJCmw0GMa6Z_QK3_2Qtkz1aS2zM3BqgptqxKeOMjeHwSO8pruS/s1600/Inventario_2477.png", texto: "Dragão" },
  { id: "namorados", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuBhfohc-JvpCZ1BPMKAR66Tmgdqtzld7LIs0oOqInkfwwKzuphyphenhyphenibt1R6VZBwqXfh7dei4P3Tw7rSc-7bxC50f_Gh1h-UNQfc8BFaBOoN0GUy5GrtrcQigKD8hB9BDIHXk3u_RRhreblY1d7ge6DI_5cgofoyPOWgRxlExx2LmANRHibJO1_wa0G_7jFs/s1600/Inventario_2491.png", texto: "Namorados" },
  { id: "carnaval", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDHt_oVLpyUGG8Jh471UH7tMJdX5YCrNzrqizC9yLXZW2DqHWSS5VlTQy33VFa5CgjT3WHJUkqsJV_Mz-vFLjH4n9djOycHboA5Po1yhpD-blOtBby8ArYlUzEgC7ydOHJQHoQQviZYtdcaBaYfqgW5WGpu6WYvooROUWhhRQgMTIgtn5B4zyAxxLaKW-U/s1600/Inventario_2478.png", texto: "Carnaval" },
  { id: "chuva", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN7jlC78spK3Z_MwH2uUwBb1Qqo1B04eQUEa49QS1-0TH3PALH4H5LO79vJDLRuSbGI9PYajaL_fpIYzc_9aSa2Dvmm8EDgaTZktDDDxaBnc_RS6Oluia4XZqNwhlStStiBFPOSaB8SUTYzxOrR9YTIfCp9UhngL7qoFb1Jn8SfzdBiuESKb5QS1cr4kvT/s1600/Inventario_2479.png", texto: "Chuva" },
  { id: "armagedom", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMW_LpBNIkUrF6QQYrUATbcSi63jykPdgJ0CZDomQ5qGCCwvr3F4q0mWu3Wv1w8jzppNX-0rqpxhImkNlE6Pw4sosbtGjxHndL-IebNxFpceZYJwbfR_SmujXfusfQfMM_77rKVy4pHtU5nLtwcz1HgNy4mpF0QHpe2zVGJ4v-uT4V-tONAeeJ0rn2A35A/s1600/Inventario_2480.png", texto: "Armageddon" },
  { id: "patricio", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCNh0-z5XzPglS22BHVCD0fFWOwkHBfdO47WfO8pvo1JPYNcNskDaNYJCTl3oO4LyaNfeyYjje3ZH-XpVh5jcvAJF5TDCEsyb3KNAYvYzSkXysdHtMq_KgmnlxSK_lRZxQbAlUy6r98mhD3dP_C-rVZ66rsgRW6Wq6rllwOK6x41KtfB2oT0j8LPEePRjs/s1600/Inventario_2485.png", texto: "São Patrício" },
  { id: "cozinha", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYDku4DZ0Plw_D-yiKz2Y1d9Fzw5lXGZIZlG298zZIQgLPyuuJfjLiwTqgBgFCf1q5Jlcz8GjeoQAU9tFqTKRLLZNn2CkMh8JQf4VyZmoCKKW48eYeJLSNTK0v0q5mltiu_c62dJYjepolQqCtu0OhMdBRlgQIXUYnanYRQ1B_ZeHx_Tnwr0xyncAx5txM/s1600/Inventario_2481.png", texto: "Restaurante" },
  { id: "pascoa", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXA4mp2elbF8P7hlbHqwK_sBt9XWtrsAEoe-3pFYU2TLBjwWOqfX8aNxbrDXHhUdNquNlkBvUL3ycrMcuxfrOyCJSYX1C6WN0967pD4f9uUzZTVFHWVGH7GmGF0VMSf1oLRi_7oqs3FOC7vj8MVfacBAyfEc0vcAo0k0sonN_6N6iyijRjzt7mhb3GXqPX/s1600/Inventario_2487.png", texto: "Páscoa" },
  { id: "dino", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhidcEIbI0FnQd2yOkPzBC6__RseRiKX8tqcuZ-0ogKn-WOmwzpY6TZxOu1wTLhhOrGlxQsBStyxeDCUABjGxqqA7cNy8gweWkRkrn0SImnrTJQS9QxUIJDibAplpI5bF0c7G_lMEx8zGT0ysIRwrXoaiZgl8xM5fF5diW3AdgYqVUCVF5EC6jwsk05NJ0q/s1600/Inventario_2476.png", texto: "Dinossauro" },
  { id: "pesca", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6MKAJO3fq6u5xaPvdTRMoL5uY6C7lJLfT2eoIN5dJoMe8RFkyI9etdSIK7a6PpNfmu-zkwSA4mzu50zJuSFvMy4e_9sVyfe0NRXhw2Qo-_0JuEAxv64Ks1v15VLw3VxguVzQgsvX0R1Au1qto3M3uL49bYsSruqeSZ4mtAla5eQE0Lf8eL1wQRvncXuxb/s1600/Inventario_2482.png", texto: "Pescaria" },
  { id: "jardinagem", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrtTNGigXsM6qW1ASUln0CDWCevaGZQi34FMqBB-MyojoHPoW3dandDFTW2t_ef3KOtyrOiSI_UU4MdRoYjeRf3q07Sh6_DvqI5URkapQcb5wtzPAW0HO82PQRj9xHYKyDPk0o3VjQVf9Kr0CoVXQiaYDopLI3HXDzNRAWEkAAe-xyTuACwcjP_TFp1qQu/s1600/Inventario_2488.png", texto: "Jardinagem" },
  { id: "escola", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrDlxxWCx1Y4TfPkBKq8AJIpAYURX-iQfcPYNdnaLaGkaaTA4x2WDywKcWp92ozW3UBZYFik906Z78HFJMr_7sgOUjnyqxmO3YZD5A9p1RLn1BUomJhMsXxQ3YRlUn6xFxfEe-OeYGacTIT_Vg3gC62-HTXBLk_CVvp244YrHeHG4TtRP975LMorT0R7Kz/s1600/Inventario_2483.png", texto: "Volta às Aulas" },
  { id: "magia", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilkr6zXLrRJC5FIde7e9HBajg5ut-qrN69lY_27lQFOEnN57QqG-TfvqWJgvdt-1llto6g_VMj8CQ1auRjybFUAjq5wsSavL-uuWRK_lVhYboSP18NAvpbvnBMJedeJ_tClATWIBDUfxoscu1Go1l6-8Fdu1Fc9pAcUZ0P4Ka0PG1-RRbezxcVaakpUobR/s1600/Inventario_2486.png", texto: "Magia" },
  { id: "halloween", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNMpINcONmnVf36jm0erP1X48v6X6sOBXblcvzqAlpfztsDOyxTLKIlUU7zB5buX8zgS0BISg40YenTqm9YZliK2mNYgf3VxrFpRP4q5oiAQcSH28uzR4sUHjOs2__SpZPWU0N52PbzlObmpEiWZN9stagkclEhJKFmvvCnC2M80Fk3Bpp4vS9iGpX6hEO/s1600/Inventario_2484.png", texto: "Halloween" },
  { id: "natal", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPzfYJGCql2lqtg8PsmeS35twl4kHG_AI5mvrt3q6VmHjbSJBQuis3mwkv48mt-f4ig93S0WE3a8k50xfkQ5aIPxsnAoIYpitrL38f45njVO-z5Tzdxsm7QLspKcfU8meBezBiQt0WJ6QxSiGNrVp7QsiUgcXCuA00fI6CpzGvTgc69APPowm_cqWuDBux/s1600/Inventario_2474.png", texto: "Natal" },
  { id: "normal", texto: "Sem Evento" }
];

itens.forEach(item => {
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
  { id: "npc-global", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzJzP6O5g2PrFdAyEBIL2zEkW6EJoOfD2kNwAgf6rsVGBqMIqehFbMhctsdleqroviOPe1txT-oR_ukaxflxKxC4D8tJ-yfYkPW59FZ4XYDE3jCF67KqM5uel6eGjZSZR1JK13oMlWYRCy-tnylU4GWpQeqme8zuzflIdwlHob6ztecrXnX3fLwGfmiVDW/s1600/Indiana_Mouse.png", width: "55", texto: "Indiana Mouse" },
  { id: "npc-astrologico", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz41R4tHCIO-GzwNsD2Cw57LK-uHSrZ4rUoSImS0IDAVMtokkpLI6kK4WjkaL0UP0JH8dmB1hBgBv0HOAtS7lne_yCAaiGa3tfbf61yBg7nQIVz8LNkmRVY_LlTWPQzo4kvVMdkPYL3926huZ-hVGYa7mFtSbN63axHUFUqtXJuzx7JLNzS3SWtYkNZSoA/s1600/Ophelia.png", width: "95", texto: "Ophelia" },
  { id: "npc-epifania", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcdjMpV56ELICbhc0Ss0TFOFShw8YZkXLWZ63l58oGahsaQaawz21lKeboCmJMGLFx13yTAkc2YI22CEs1IrVJWOk4Bt3GIrEmpK-HjZSBe5lLkCvWGcCeM2WOecKR3pn9NJnQ2vWLAVvpbC9ZzbBNSeKz5Kj7mYyDVRzJORHbMsVhrULstx3mlTXsbh0q/s1600/Fromagnus.png", width: "55", texto: "Fromagnus" },
  { id: "npc-piloto", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQZvz8XjohSn9y62jJOe-dGTgrG93pFSKIjl2Mxx2JlHV9aYWmRrDPjce_HEzpIh-KhMIKqvv1_xr5fHFvU6Y4vf_2xiQIK2SvO3CwN44CjE1SkfkiUmQ9_gDkWVCwo8Wiwj4v5xqRxpqHDAfm_lrP9dFDf5okH1XfUDDbybcd_L2WmM4IgnaZQ2xqiLws/s1600/Bertrand.png", width: "60", texto: "Bertrand" },
  { id: "npc-abraço", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXd-6pBT7pp_l9vlOThGZumGh757zVqXEwUaxDUaZoYiE2QlKG2LqNYPqAsuwk1mOaAPVaJr2ukibKEaUkk_33wzJM4bY-idDTKEXufUETjAVS8Iv4NRarGN9kJOQ5zWzWv0jM8K5hQgWXnAhJ49HhGbkgvZFMg90_E7Sw9-XbMpp43pQHx4j519t0h9Qx/s1600/Arabella.png", width: "55", texto: "Arabella" },
  { id: "npc-marmota", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcU-ASal1xUDDVG7zhCkxaKSzwKsRBnmypV_ssGx0e9rUVvbJHZolk8311ILSiXJUW0sEp_vxGKdekCPj8qoJd6R_WTs20Pda8anwknsMm43EPjV9d9SVZr18HP9U1sAZ9XKNtqY51OFhkzAAZQ7dgnQ_5b4IZw0pkS0eK3poRl0gk4AIHI-UqsdsORoWi/s1600/Charlotte.png", width: "95", texto: "Charlotte" },
  { id: "npc-dragao", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiflQAixt77MfL1geRuP4fGvcMKYN5V6KYadKFL8RWVszD9gOOGr18RwlP71LU9AFt5XmsJnIJpHABwdFlW7nOnRFwr1pb25nNs1Yhgn2taOD2vEFi7sxgZfNK39iP5N-4PJOfDMXCq2MQyK7qxuofOYZBjOTQtKTg9wH5_R9mwZnocPfcpyRBqhSKqVGvX/s1600/Liu.png", width: "60", texto: "Liu" },
  { id: "npc-namorados", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjTFrhaug1fnhpzEpucqUZ3prBeSDPnm51dJL3eWgqrAC_3uO5TRHUPfhAL9ZA6A6bqUThXMMdNfaXDbdIGc-VQWV_QOe6EIfPopfLDU1aa860xOjzVlWAyO8AIphbfZeR6wJkVFFn9RnJoKNlf4-m08RiJ9yGnZXISgomoCCbUhJrzaVpIg_zde3uVinJ/s1600/Fleur.png", width: "55", texto: "Fleur" },
  { id: "npc-carnaval", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3Ja4MTOL54HM1hzTe37I9bWBOlm5zuOisaLtK1plpxz-GpHmp6xdFjae_zD7Nz8gmu2WpOFxt-4tuV3_xWGgHAHVyHmn32hVDYAdfqX0FfhyqkDTehPU545ID13Q93p-8SizKSztEJfQexyenHNCqVe1BdNiMyBiJ5ezKqHgNJwidUlfW5pTXdgxTSi50/s1600/Rianna.png", width: "70", texto: "Rianna" },
  { id: "npc-chuva", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjlVkygEduEXtvZp-JETH7ccV9OuBC_Ls6qQqgEQOuY7ZNeRHXtXVPTrUev04BJ4VWeUSMGiIAckU0tpsZihw7Oi7xEmjIjcE1LQZqtuC9dg1nYvF61dwpBXbyHWL0cEQfG6J2RowlJKCeHTpNpfwV9Ulpx2Lrl-UvL_etwc0dZ3CDSXArvdmZb0AkS-FK/s1600/Belle.png", width: "65", texto: "Belle" },
  { id: "npc-armagedom", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk0ExOK2x0cBi9UnmpCWqHUCCboT63V2yPdI3uElILfLKVRcnh5Fg4W-IigJK6os1gvY-I1kEiEvzYOc_g-svzoLS1fW7-yBlMs0LVm7o8pHkWfXSwAgmpNXA1CrIWAbY6zM79bJPYZme0I837Oe4usRpVvsFdt24daCXPezSBvG0XMNpFml8QtD4nZZLH/s1600/Mirolle_Gooda.png", width: "60", texto: "Mirolle Gooda" },
  { id: "npc-patricio", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm3Or8Y9hM3WPf8eGItm0elxtCC16nXCqmPjI2mkwJUOcBO8kisQjbkDGDwCFwOp0ahMGXC24JVlirMEJjOMJtf1h-YhWSjwMoscC-pt3lBOa_mskzpOfFOTjFfxjDhLLWGO5GJ63BsezjpdGpg9fCym_8vBscqWaYYWBYaMlBWpCTOXQHFzsYwSyHeoJH/s1600/Cassidy.png", width: "55", texto: "Cassidy" },
  { id: "npc-cozinha", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi59WmlcYjord5597NzZPcpB5P-ZiYJxsMNNSPMA_dVVFNS5MvK-14QIHpKkKZyZnk2E00HP71al3qv1xhyDZgJ1yTMWrZLrShkx8cD6oEc3QsTUw_inZnwaA3ia4uH3rMDg3rU0Yxi-dX4Hhx0cGKfKn5bCrSgTJF3D2IhuAPlwUOaixyymaFGlLvdUosV/s1600/Moris.png", width: "65", texto: "Moris" },
  { id: "npc-pascoa", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI9wvtH8pOUBHICI4CeT0Kcmoy6yIF3TZMEepkOl1iCdxU3dEjaVM9dwlsL1RdSn7Dhehd5KlyWnuhk1mtsfcf-zkQ0Ynt-NL8Izn8GVAcpxHcSZ-plMPw-hunSD8-a5M5IOjyxS8rA36f5HQMpilEKlnmzjWw8lSnsn6JOiPb-mF3FdnGSVxvM46xBDbb/s1600/Fluffy.png", width: "55", texto: "Fluffy" },
  { id: "npc-dino", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidomuWv2UzxwKn3GFF70mxcYvpQBbMO0bqxC6zJZXvLoYX_uTu0V_fsQxJnnHWmusZh40HKa6o455dRK-O7hlHXRvCn8Nkfvd4LfTOz9H7G2MATaVfsFYp-bbjYT8lq7Zp7RluAbg2uwMm2OcnEpFh8WPgNFlNmY92t7lWR58sjduy_3d2GPa_5m0vdX9u/s1600/Uga_Buga.png", width: "75", texto: "Uga Buga" },
  { id: "npc-pesca", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbNb3iUstyBjeE9yGVxe33nsRvarJH2PHyO6grs4yi3hW_fmNsILX5Pcgr7wYNV5vaPNADGmkTswmsyHNykdKalh7tGjRO1R6pcO7X_EF7TzSinaTUGtihK6ZntzW_AOEUbj0LrfwNblbtbROhsZgztLLRhcUNcZhODVs4NSa4nFWm5WAIIpWYB_fr8Uv9/s1600/Cancoillotte.png", width: "75", texto: "Cancoillotte" },
  { id: "npc-jardinagem", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5oNqnHuhFWTQ6cVL22lXMikrC6Y0lMclR6dxudcH5r28hAnsSf1ALAmJ827gY5lQm8btWHQjQ0YS1DsURHp44MKJEDfh51hSq2RtTvdWuG1LzzuvtYgp26FY2m38LQ1dPf6qOSg4NhrgpgB8CBOqwpnEz_5A8zGcRbHYaojMlO5mNoI6-WUx_QJtEpTNu/s1600/Moumouna.png", width: "60", texto: "Moumouna" },
  { id: "npc-escola", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSmVhI9N_lYE7iQ7owVMh8uPIdpj2M_CLbJUHsmIL0XfZYPsPAEBGdFU82bAJZu-JOjcS7aOkR0wrqrDbxs8G_hGenoOX3J0hf3GZ37iUOfGchHIFto2JbM1MrACrxY0yw-g9DcXg1Bd6DdpZ3WD5Yl7uBW7NRu-2e0iVzkvsNzX9oZamQP2LO0HttZAq7/s1600/Prof.png", width: "60", texto: "Prof" },
  { id: "npc-magia", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMh-iWxhuoufrxvDMXgiAg_dO4Z8r0poeG-nWHJdG4MLM1CLuy5NbjQ5EIRrgMVq-bjgH3NzmFNKRR4JV0Hm0BpDLsncQ0CisYlTvj6pwtAYgld1ZBraXOzKbhf_Kf5OD_fuLVWgzNEPScjEXIHp_927tVdqEikzaUEL8c5ZSZubbUyXX0bs2swXyiFYMY/s1600/Cesar.png", width: "75", texto: "Cesar" },
  { id: "npc-halloween", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkMowAdj-aDaQGkXdwt5ZryPEEVja-Yj7UIcAbdtpX9FIiir7HbAcmttdYIHQyMpQHd3lia1ejckOF-DxShi_5gAFnm4P-l57udNGrUQslQToW22Rie59xfH9U8JkrnThLG1oQ3_LRFCULu1f0CxiEdqqjU3rJ3p0dW1XKAfyN3mVENQRaKe-V4BiVUaeE/s1600/Von_Drekkemaus.png", width: "55", texto: "Von Drekkemaus" },
  { id: "npc-natal", imgSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigNzRQNv9ceyti37K4bYweULqGkNQIWLHe-1F6XtH6mVkCdr15zGDxYOPvYz-NFD81w5TUT1aGVSsqK5ogyYVLJeIME-bJy-bTL0XSgVtdbPvbRlctNJwCueAdzfQ757iHlICPQvQhNc23a_5aioeShfiKDFt44bPUUqJUP1uvUY8nv19M-i6xbTSVZBht/s1600/Jingle.png", width: "60", texto: "Jingle" },
  { id: "npc-normal", texto: "Baú Global" }
];

npcs.forEach(npc => {
  const td = document.getElementById(npc.id);
  if (td) {
    if (npc.imgSrc) {
      td.innerHTML = `<img width="${npc.width}" src="${npc.imgSrc}">${npc.texto}`;
    } else {
      td.textContent = npc.texto;
    }
  }
});

const titulosPorBau = {
  "global": ["Todos disponíveis abaixo."],
  "astrologico": ["«Queijólogo» | «Queijóloga» (377)"],
  "epifania": ["«Bolo de Reis» (378)", "«Frangipane» (416)"],
  "piloto": ["«Todos a bordo!» (339)", "«Piloto» | «Pilota» (379)", "«Infinito» (548)", "«Up» (549)"],
  "abraço": ["«Aqueijonado» (294)", "«Abraços grátis» (380)"],
  "marmota": ["«Marmota» (381)", "«Dorminhoco» | «Dorminhoca» (433)", "«Espanta Soneca» (570)"],
  "dragao": ["«Flor de Lótus» (382)", "«Rato Inspetor» | «Rata Inspetora» (383)", "«Dragãozinho» (417)", "«Sagui» (418)", "«Feliz Ano Novo!» (557)"],
  "namorados": ["«Rato Sedutor» | «Rata Sedutora» (210)", "«Tentador» | «Tentadora» (211)", "«Latin Lover» (212)", "«Omelettovore» (249)", "«Meu Docinho» (250)", "«Noivo» | «Noiva» (251)", "«Aqueijonado» (294)", "«Recém-Casados» (313)", "«Maçã do Amor» (314)", "«Coração Partido» (315)", "«Lua de Mel» (316)", "«Admirador Secreto» | «Admiradora Secreta» (384)", "«Cupido» (432)", "«Coração de Brioche» (494)", "«Quebra-Corações» (536)", "«Quer ser Meussarela?» (537)", "«Divorciado» | «Divorciada» (558)"],
  "carnaval": ["«Churros» (318)", "«Folião» | «Foliona» (319)", "«Arlequim» | «Arlequina» (385)", "«Ratobeleza» | «Ratabeleza» (493)", "«Do-Ré-Mi» (553)", "«Confete» (569)"],
  "chuva": ["«Sardinha» (297)", "«Sapinho» | «Sapinha» (386)", "«Gotinha» (495)", "«Sombra» (571)"],
  "armagedom": ["«Magiqueijo» (336)", "«Defensor» | «Defensora» (387)", "«Guardião» | «Guardiã» (573)"],
  "patricio": ["«Generoso» | «Generosa» (243)", "«Barmouse» (388)", "«Rato Celta» | «Rata Celta» (435)", "«Leprechaun» (436)", "«Rato Moai» | «Rata Moai» (437)", "«Bardo» (483)"],
  "cozinha": ["«Confeiteiro do Rei» (357)", "«Ratatouille» (389)", "«Massa de Crepe» (419)", "«Feijoada» (438)", "«Amante de Pizza» (461)", "«Mestre-Cuca» (572)"],
  "pascoa": ["«Chocovore» (254)", "«Chocoelho» | «Chocoelha» (255)", "«Galo» | «Galinha» (295)", "«Cocoricó» (320)", "«Cacau» (321)", "«Caçador de ovos» | «Caçadora de ovos» (322)", "«Ratinho Nervoso» | «Ratinha Nervosa» (355)", "«Duque Caramelo» | «Duquesa Caramelo» (356)", "«Cara de Bolacha» (358)", "«Rei do Doce» | «Rainha do Doce» (359)", "«Sininho» (393)", "«Rato Sagaz» (420)", "«Amante de Artefactos» (421)", "«Rato Moai» | «Rata Moai» (437)", "«Viajante» (539)"],
  "dino": ["«Rato Pré-histórico» | «Rata Pré-Histórica» (394)", "«Tyrannosouris» (395)", "«Rato das Cavernas» | «Rata das Cavernas» (439)", "«Ratossauro» (540)", "«Vulcânico» | «Vulcânica» (541)"],
  "pesca": ["«Tonnerre de Brest» (253)", "«Explorador» | «Exploradora» (296)", "«Pescador» | «Pescadora» (298)", "«Adorador» | «Adoradora» (299)", "«Mas Que Peixes» (335)", "«Yeeehaaaa!» (337)", "«Melhor Treinador» | «Melhor Treinadora» (338)", "«Todos a Bordo» (339)", "«herp derp» (340)", "«Capitão Nemouse» | «Capitã Nemouse» (341)", "«Indiana Rato» (342)", "«Dora, a Aventureira» (361)", "«Rato Arqueólogo» | «Rata Arqueólogo» (362)", "«Allan Quarterato» (363)", "«Bucaneiro» | «Bucaneira» (403)", "«Pequeno Sushi» (404)", "«Estrela do Mar» (405)", "«Capitão Coco» | «Capitã Coco» (422)", "«Perdoado» | «Perdoada» (460)", "«Netuno» (484)", "«Mermouse» (506)", "«Almirante» (507)", "«Tritão» | «Sereia» (547)", "«Foi Pescar» (560)", "«Capitão Gancho» (561)"],
  "jardinagem": ["«Fazendeiro» | «Fazendeira» (406)", "«Maratonista» (407)", "«Jardineiro» | «Jardineira» (481)", "«Botânico» | «Botânica» (505)", "«Girassol» (545)", "«Vinicultor» | «Vinicultora» (546)", "«Bumblebrie» (559)", "«Margarida» (574)", "«Bolinho de Legumes» (575)"],
  "escola": ["«Rato Infantil» | «Rata Infantil» (323)", "«Estudante Modelo» (360)", "«Baderneiro» | «Baderneira» (366)", "«Primeiro da classe» | «Primeira da classe» (367)", "«Rato de biblioteca» | «Rata de biblioteca» (368)", "«Acadêmico» (369)", "«Ratinho Determinado» | «Ratinha Determinada» (396)", "«Calouro» | «Caloura» (410)", "«Brincalhão» | «Brincalhona» (411)", "«Autodidata» (485)", "«Procrastinador» | «Procrastinadora» (486)", "«Honrado» | «Honrada» (487)", "«Roedor Inteligente» (562)", "«Guerreiro da caneta azul» (563)", "«Rei dos Rabiscos» | «Rainha dos Rabiscos» (564)"],
  "magia": ["«Lenhador» | «Lenhadora» (376)", "«Supervisor» | «Supervisora» (424)", "«Bruxo» | «Bruxa» (425)", "«Carpinteiro» | «Carpinteira» (596)", "«Alquimista» (597)"],
  "halloween": ["«Vampiro» | «Vampira» (287)", "«Frankenmaus» (300)", "«Bonbon *-*» (301)", "«Suco de abóbora» (302)", "«Doce ou Travessura» (303)", "«Poltergeist» (304)", "«Von Drekkemaus» (307)", "«Gasparzinho» (343)", "«Torta de Abóbora» (344)", "«Caça Fantasmas» (345)", "«Zumbi» (346)", "«Caça Vampiros» (347)", "«Assustador» | «Assustadora» (348)", "«Devoradoces» (349)", "«Voldemouse» (371)", "«Scooby-Doo» (372)", "«O Amaldiçoado» | «A Amaldiçoada» (373)", "«Lobisrato» | «Lobisrata» (412)", "«Pac-mouse» (413)", "«Ratinho Viajante» | «Ratinha Viajante» (414)", "«Castanha» (426)", "«Transformista» (427)", "«Enfeitiçado» | «Enfeitiçada» (428)", "«Cipher» (462)", "«Minhoca» (488)", "«Jack-o'-lantern» (489)", "«Lembre de Mim» (508)", "«Nosferatu» (509)", "«Esqueleto» (510)", "«Squeak!» (550)", "«Alma Perdida» (551)", "«Scream cheese» (552)", "«Mumisterioso» (565)", "«Cringe» (598)", "«Abominação» (599)"],
  "natal": ["«Floquinho de Neve» (127)", "«Espírito Natalino» (128)", "«Duende» (129)", "«Papai Noel» | «Mamãe Noel» (130)", "«Biscoitos» (240)", "«Bolo de Natal» (241)", "«Barba Branca» (242)", "«Nevado» | «Nevada» (244)", "«Nevasca» (245)", "«Bola de Neve» (288)", "«Estou com frio» (289)", "«Castanha Grelhada» (290)", "«Meia de lã» (291)", "«Souris Sapin» (292)", "«Comedor de Cookies» | «Comedora de Cookies» (293)", "«Pirulito de bengala» (308)", "«Guirlanda» (309)", "«Papaille Noel» (310)", "«Elfette» (311)", "«Anjo de Neve» (312)", "«Glacial» (350)", "«Pão de Mel» (351)", "«Rato Polar» | «Rata Polar» (352)", "«Grande Ceia» (353)", "«Salvador do Natal» | «Salvadora do Natal» (354)", "«Tartiflette» (375)", "«Raclette» (415)", "«Frozen» (429)", "«Cubo de Gelo» (430)", "«Trabalhador Glacial» | «Trabalhadora Glacial» (431)", "«Snowboarder» (479)", "«Reninha» (480)", "«Luz de Velas» (482)", "«Marron-Glacé» (491)", "«Azevinho» (492)", "«Feliz Natal» (531)", "«Snowdrop» (532)", "«Iglu» (533)", "«Aurora Boreal» (554)", "«Ratinho de Neve» | «Ratinha de Neve» (555)", "«Chocolate Quente» (556)", "«Estrela D'Alva» (566)", "«Pinball Natalino» (600)", "«Rato do Ártico» (601)"],
  "normal": ["«Patriota» (364)", "«Sans-culotte» (365)", "«Namastê» (370)", "«Rato Arenoso» | «Rata Arenosa» (408)", "«Tutankhamouse» (409)", "«Rato Turing» | «Rata Turing» (423)", "«Pierogi» (478)", "«Perdido no Tempo» | «Perdida no Tempo» (490)", "«Mosquerato» | «Mosquerata» (542)", "«Ferreiro» | «Ferreira» (543)", "«Clarividente» (544)", "«Bzzzzzz» (567)", "«Hmm...» (568)"]
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
carregarTitulos("titulos-normal", titulosPorBau.normal)
