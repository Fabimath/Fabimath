// Banco de 220 ejercicios de Tablas de Frecuencia para Datos Cualitativos Nominales (guia oficial Fabimath)
// Parte I (60): construccion de tabla desde datos crudos -> valores f_i / h_i
// Parte II (80): lectura e interpretacion de tabla ya construida
// Parte III (80): interpretacion de graficos de barras y de torta
const CN_QUESTIONS = [
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Salud · Banco de sangre",
  "enun": "Se registró tipo de sangre de 20 donantes. Categorías: A, B, AB, O. Datos: O, A, A, B, O, AB, A, O, B, A, O, AB, A, O, B, O, A, AB, O, A.",
  "ask": "Ordenando las categorías tal como se listan (A, B, AB, O) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"A\"?",
  "alts": [
   "$f_{1} = 8$",
   "$f_{1} = 6$",
   "$f_{1} = 7$",
   "$f_{1} = 3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "A=7,\\ B=3,\\ AB=3,\\ O=7",
   "f_{1}=7,\\ f_{2}=3,\\ f_{3}=3,\\ f_{4}=7",
   "h_{1}=0{,}35,\\ h_{2}=0{,}15,\\ h_{3}=0{,}15,\\ h_{4}=0{,}35"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>A</b>\": $f_{1} = 7$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Salud · Banco de sangre",
  "enun": "Se registró tipo de sangre de 20 donantes. Categorías: A, B, AB, O. Datos: O, A, A, B, O, AB, A, O, B, A, O, AB, A, O, B, O, A, AB, O, A.",
  "ask": "Ordenando las categorías tal como se listan (A, B, AB, O) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"AB\"?",
  "alts": [
   "$h_{3} = 0{,}35$",
   "$h_{3} = 0{,}18$",
   "$h_{3} = 0{,}15$",
   "$h_{3} = 0{,}12$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "A=7,\\ B=3,\\ AB=3,\\ O=7",
   "f_{1}=7,\\ f_{2}=3,\\ f_{3}=3,\\ f_{4}=7",
   "h_{1}=0{,}35,\\ h_{2}=0{,}15,\\ h_{3}=0{,}15,\\ h_{4}=0{,}35"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>AB</b>\": $h_{3} = 0{,}15$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Salud · Banco de sangre",
  "enun": "Se registró tipo de sangre de 20 donantes. Categorías: A, B, AB, O. Datos: O, A, A, B, O, AB, A, O, B, A, O, AB, A, O, B, O, A, AB, O, A.",
  "ask": "Ordenando las categorías tal como se listan (A, B, AB, O) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{4}$, la frecuencia absoluta de la categoría \"O\"?",
  "alts": [
   "$f_{4} = 3$",
   "$f_{4} = 8$",
   "$f_{4} = 6$",
   "$f_{4} = 7$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "A=7,\\ B=3,\\ AB=3,\\ O=7",
   "f_{1}=7,\\ f_{2}=3,\\ f_{3}=3,\\ f_{4}=7",
   "h_{1}=0{,}35,\\ h_{2}=0{,}15,\\ h_{3}=0{,}15,\\ h_{4}=0{,}35"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>O</b>\": $f_{4} = 7$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Educación · Encuesta de aula",
  "enun": "Se registró color de ojos de 18 estudiantes. Categorías: Café (C), Azul (Az), Verde (V), Negro (N). Datos: C, Az, C, V, C, N, Az, C, V, C, Az, N, C, V, C, Az, C, N.",
  "ask": "Ordenando las categorías tal como se listan (Café (C), Azul (Az), Verde (V), Negro (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Café\"?",
  "alts": [
   "$f_{1} = 3$",
   "$f_{1} = 8$",
   "$f_{1} = 9$",
   "$f_{1} = 4$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=18\\text{):}",
  "pautaSteps": [
   "Café=8,\\ Azul=4,\\ Verde=3,\\ Negro=3",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}44,\\ h_{2}=0{,}22,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Café</b>\": $f_{1} = 8$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Educación · Encuesta de aula",
  "enun": "Se registró color de ojos de 18 estudiantes. Categorías: Café (C), Azul (Az), Verde (V), Negro (N). Datos: C, Az, C, V, C, N, Az, C, V, C, Az, N, C, V, C, Az, C, N.",
  "ask": "Ordenando las categorías tal como se listan (Café (C), Azul (Az), Verde (V), Negro (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Verde\"?",
  "alts": [
   "$h_{3} = 0{,}17$",
   "$h_{3} = 0{,}20$",
   "$h_{3} = 0{,}44$",
   "$h_{3} = 0{,}22$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=18\\text{):}",
  "pautaSteps": [
   "Café=8,\\ Azul=4,\\ Verde=3,\\ Negro=3",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}44,\\ h_{2}=0{,}22,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Verde</b>\": $h_{3} = 0{,}17$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Educación · Encuesta de aula",
  "enun": "Se registró color de ojos de 18 estudiantes. Categorías: Café (C), Azul (Az), Verde (V), Negro (N). Datos: C, Az, C, V, C, N, Az, C, V, C, Az, N, C, V, C, Az, C, N.",
  "ask": "Ordenando las categorías tal como se listan (Café (C), Azul (Az), Verde (V), Negro (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{4}$, la frecuencia absoluta de la categoría \"Negro\"?",
  "alts": [
   "$f_{4} = 3$",
   "$f_{4} = 4$",
   "$f_{4} = 8$",
   "$f_{4} = 2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=18\\text{):}",
  "pautaSteps": [
   "Café=8,\\ Azul=4,\\ Verde=3,\\ Negro=3",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}44,\\ h_{2}=0{,}22,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Negro</b>\": $f_{4} = 3$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Movilidad · Transporte laboral",
  "enun": "Se registró medio de transporte al trabajo de 22 empleados. Categorías: Auto (A), Bus (B), Metro (M), Bicicleta (Bi), Caminando (Ca). Datos: A, B, M, A, Bi, B, M, A, Ca, B, M, A, B, Bi, M, A, Ca, B, M, A, B, M.",
  "ask": "Ordenando las categorías tal como se listan (Auto (A), Bus (B), Metro (M), Bicicleta (Bi), Caminando (Ca)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Auto\"?",
  "alts": [
   "$f_{1} = 7$",
   "$f_{1} = 2$",
   "$f_{1} = 5$",
   "$f_{1} = 6$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Auto=6,\\ Bus=6,\\ Metro=6,\\ Bicicleta=2,\\ Caminando=2",
   "f_{1}=6,\\ f_{2}=6,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}27,\\ h_{2}=0{,}27,\\ h_{3}=0{,}27,\\ h_{4}=0{,}09,\\ h_{5}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Auto</b>\": $f_{1} = 6$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Movilidad · Transporte laboral",
  "enun": "Se registró medio de transporte al trabajo de 22 empleados. Categorías: Auto (A), Bus (B), Metro (M), Bicicleta (Bi), Caminando (Ca). Datos: A, B, M, A, Bi, B, M, A, Ca, B, M, A, B, Bi, M, A, Ca, B, M, A, B, M.",
  "ask": "Ordenando las categorías tal como se listan (Auto (A), Bus (B), Metro (M), Bicicleta (Bi), Caminando (Ca)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Metro\"?",
  "alts": [
   "$h_{3} = 0{,}24$",
   "$h_{3} = 0{,}09$",
   "$h_{3} = 0{,}27$",
   "$h_{3} = 0{,}30$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Auto=6,\\ Bus=6,\\ Metro=6,\\ Bicicleta=2,\\ Caminando=2",
   "f_{1}=6,\\ f_{2}=6,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}27,\\ h_{2}=0{,}27,\\ h_{3}=0{,}27,\\ h_{4}=0{,}09,\\ h_{5}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Metro</b>\": $h_{3} = 0{,}27$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Movilidad · Transporte laboral",
  "enun": "Se registró medio de transporte al trabajo de 22 empleados. Categorías: Auto (A), Bus (B), Metro (M), Bicicleta (Bi), Caminando (Ca). Datos: A, B, M, A, Bi, B, M, A, Ca, B, M, A, B, Bi, M, A, Ca, B, M, A, B, M.",
  "ask": "Ordenando las categorías tal como se listan (Auto (A), Bus (B), Metro (M), Bicicleta (Bi), Caminando (Ca)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Caminando\"?",
  "alts": [
   "$f_{5} = 3$",
   "$f_{5} = 6$",
   "$f_{5} = 2$",
   "$f_{5} = 1$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Auto=6,\\ Bus=6,\\ Metro=6,\\ Bicicleta=2,\\ Caminando=2",
   "f_{1}=6,\\ f_{2}=6,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}27,\\ h_{2}=0{,}27,\\ h_{3}=0{,}27,\\ h_{4}=0{,}09,\\ h_{5}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Caminando</b>\": $f_{5} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Cultura · Preferencias musicales",
  "enun": "Se registró género musical favorito de 20 personas. Categorías: Rock (R), Pop (P), Reggaetón (Rg), Clásica (Cl), Jazz (J). Datos: P, Rg, R, P, Rg, J, P, Cl, Rg, P, R, Rg, P, J, Rg, P, Cl, R, Rg, P.",
  "ask": "Ordenando las categorías tal como se listan (Rock (R), Pop (P), Reggaetón (Rg), Clásica (Cl), Jazz (J)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Rock\"?",
  "alts": [
   "$f_{1} = 7$",
   "$f_{1} = 6$",
   "$f_{1} = 2$",
   "$f_{1} = 3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Rock=3,\\ Pop=7,\\ Reggaetón=6,\\ Clásica=2,\\ Jazz=2",
   "f_{1}=3,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}15,\\ h_{2}=0{,}35,\\ h_{3}=0{,}30,\\ h_{4}=0{,}10,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Rock</b>\": $f_{1} = 3$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Cultura · Preferencias musicales",
  "enun": "Se registró género musical favorito de 20 personas. Categorías: Rock (R), Pop (P), Reggaetón (Rg), Clásica (Cl), Jazz (J). Datos: P, Rg, R, P, Rg, J, P, Cl, Rg, P, R, Rg, P, J, Rg, P, Cl, R, Rg, P.",
  "ask": "Ordenando las categorías tal como se listan (Rock (R), Pop (P), Reggaetón (Rg), Clásica (Cl), Jazz (J)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Reggaetón\"?",
  "alts": [
   "$h_{3} = 0{,}35$",
   "$h_{3} = 0{,}30$",
   "$h_{3} = 0{,}10$",
   "$h_{3} = 0{,}15$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Rock=3,\\ Pop=7,\\ Reggaetón=6,\\ Clásica=2,\\ Jazz=2",
   "f_{1}=3,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}15,\\ h_{2}=0{,}35,\\ h_{3}=0{,}30,\\ h_{4}=0{,}10,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Reggaetón</b>\": $h_{3} = 0{,}30$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Cultura · Preferencias musicales",
  "enun": "Se registró género musical favorito de 20 personas. Categorías: Rock (R), Pop (P), Reggaetón (Rg), Clásica (Cl), Jazz (J). Datos: P, Rg, R, P, Rg, J, P, Cl, Rg, P, R, Rg, P, J, Rg, P, Cl, R, Rg, P.",
  "ask": "Ordenando las categorías tal como se listan (Rock (R), Pop (P), Reggaetón (Rg), Clásica (Cl), Jazz (J)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Jazz\"?",
  "alts": [
   "$f_{5} = 2$",
   "$f_{5} = 7$",
   "$f_{5} = 3$",
   "$f_{5} = 6$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Rock=3,\\ Pop=7,\\ Reggaetón=6,\\ Clásica=2,\\ Jazz=2",
   "f_{1}=3,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}15,\\ h_{2}=0{,}35,\\ h_{3}=0{,}30,\\ h_{4}=0{,}10,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Jazz</b>\": $f_{5} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Servicio técnico",
  "enun": "Se registró marca de smartphone de 24 clientes. Categorías: Apple (Ap), Samsung (Sa), Xiaomi (Xi), Motorola (Mo), Huawei (Hu). Datos: Sa, Ap, Sa, Xi, Ap, Mo, Sa, Ap, Xi, Sa, Hu, Ap, Sa, Xi, Ap, Sa, Mo, Xi, Sa, Ap, Hu, Sa, Ap, Xi.",
  "ask": "Ordenando las categorías tal como se listan (Apple (Ap), Samsung (Sa), Xiaomi (Xi), Motorola (Mo), Huawei (Hu)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Apple\"?",
  "alts": [
   "$f_{1} = 7$",
   "$f_{1} = 5$",
   "$f_{1} = 8$",
   "$f_{1} = 2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Apple=7,\\ Samsung=8,\\ Xiaomi=5,\\ Motorola=2,\\ Huawei=2",
   "f_{1}=7,\\ f_{2}=8,\\ f_{3}=5,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}29,\\ h_{2}=0{,}33,\\ h_{3}=0{,}21,\\ h_{4}=0{,}08,\\ h_{5}=0{,}08"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Apple</b>\": $f_{1} = 7$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Retail · Servicio técnico",
  "enun": "Se registró marca de smartphone de 24 clientes. Categorías: Apple (Ap), Samsung (Sa), Xiaomi (Xi), Motorola (Mo), Huawei (Hu). Datos: Sa, Ap, Sa, Xi, Ap, Mo, Sa, Ap, Xi, Sa, Hu, Ap, Sa, Xi, Ap, Sa, Mo, Xi, Sa, Ap, Hu, Sa, Ap, Xi.",
  "ask": "Ordenando las categorías tal como se listan (Apple (Ap), Samsung (Sa), Xiaomi (Xi), Motorola (Mo), Huawei (Hu)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Xiaomi\"?",
  "alts": [
   "$h_{3} = 0{,}08$",
   "$h_{3} = 0{,}33$",
   "$h_{3} = 0{,}29$",
   "$h_{3} = 0{,}21$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Apple=7,\\ Samsung=8,\\ Xiaomi=5,\\ Motorola=2,\\ Huawei=2",
   "f_{1}=7,\\ f_{2}=8,\\ f_{3}=5,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}29,\\ h_{2}=0{,}33,\\ h_{3}=0{,}21,\\ h_{4}=0{,}08,\\ h_{5}=0{,}08"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Xiaomi</b>\": $h_{3} = 0{,}21$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Servicio técnico",
  "enun": "Se registró marca de smartphone de 24 clientes. Categorías: Apple (Ap), Samsung (Sa), Xiaomi (Xi), Motorola (Mo), Huawei (Hu). Datos: Sa, Ap, Sa, Xi, Ap, Mo, Sa, Ap, Xi, Sa, Hu, Ap, Sa, Xi, Ap, Sa, Mo, Xi, Sa, Ap, Hu, Sa, Ap, Xi.",
  "ask": "Ordenando las categorías tal como se listan (Apple (Ap), Samsung (Sa), Xiaomi (Xi), Motorola (Mo), Huawei (Hu)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Huawei\"?",
  "alts": [
   "$f_{5} = 7$",
   "$f_{5} = 8$",
   "$f_{5} = 2$",
   "$f_{5} = 5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Apple=7,\\ Samsung=8,\\ Xiaomi=5,\\ Motorola=2,\\ Huawei=2",
   "f_{1}=7,\\ f_{2}=8,\\ f_{3}=5,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}29,\\ h_{2}=0{,}33,\\ h_{3}=0{,}21,\\ h_{4}=0{,}08,\\ h_{5}=0{,}08"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Huawei</b>\": $f_{5} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Demografía · Censo local",
  "enun": "Se registró estado civil de 20 personas. Categorías: Soltero (S), Casado (Ca), Divorciado (D), Viudo (V). Datos: S, Ca, S, Ca, D, S, Ca, Ca, S, V, Ca, S, D, Ca, S, Ca, S, V, Ca, S.",
  "ask": "Ordenando las categorías tal como se listan (Soltero (S), Casado (Ca), Divorciado (D), Viudo (V)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Soltero\"?",
  "alts": [
   "$f_{1} = 9$",
   "$f_{1} = 2$",
   "$f_{1} = 8$",
   "$f_{1} = 7$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Soltero=8,\\ Casado=8,\\ Divorciado=2,\\ Viudo=2",
   "f_{1}=8,\\ f_{2}=8,\\ f_{3}=2,\\ f_{4}=2",
   "h_{1}=0{,}40,\\ h_{2}=0{,}40,\\ h_{3}=0{,}10,\\ h_{4}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Soltero</b>\": $f_{1} = 8$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Demografía · Censo local",
  "enun": "Se registró estado civil de 20 personas. Categorías: Soltero (S), Casado (Ca), Divorciado (D), Viudo (V). Datos: S, Ca, S, Ca, D, S, Ca, Ca, S, V, Ca, S, D, Ca, S, Ca, S, V, Ca, S.",
  "ask": "Ordenando las categorías tal como se listan (Soltero (S), Casado (Ca), Divorciado (D), Viudo (V)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Divorciado\"?",
  "alts": [
   "$h_{3} = 0{,}07$",
   "$h_{3} = 0{,}40$",
   "$h_{3} = 0{,}13$",
   "$h_{3} = 0{,}10$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Soltero=8,\\ Casado=8,\\ Divorciado=2,\\ Viudo=2",
   "f_{1}=8,\\ f_{2}=8,\\ f_{3}=2,\\ f_{4}=2",
   "h_{1}=0{,}40,\\ h_{2}=0{,}40,\\ h_{3}=0{,}10,\\ h_{4}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Divorciado</b>\": $h_{3} = 0{,}10$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Demografía · Censo local",
  "enun": "Se registró estado civil de 20 personas. Categorías: Soltero (S), Casado (Ca), Divorciado (D), Viudo (V). Datos: S, Ca, S, Ca, D, S, Ca, Ca, S, V, Ca, S, D, Ca, S, Ca, S, V, Ca, S.",
  "ask": "Ordenando las categorías tal como se listan (Soltero (S), Casado (Ca), Divorciado (D), Viudo (V)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{4}$, la frecuencia absoluta de la categoría \"Viudo\"?",
  "alts": [
   "$f_{4} = 8$",
   "$f_{4} = 2$",
   "$f_{4} = 3$",
   "$f_{4} = 1$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Soltero=8,\\ Casado=8,\\ Divorciado=2,\\ Viudo=2",
   "f_{1}=8,\\ f_{2}=8,\\ f_{3}=2,\\ f_{4}=2",
   "h_{1}=0{,}40,\\ h_{2}=0{,}40,\\ h_{3}=0{,}10,\\ h_{4}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Viudo</b>\": $f_{4} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Hogar · Tenencia de mascotas",
  "enun": "Se registró tipo de mascota de 19 familias. Categorías: Perro (P), Gato (G), Ave (A), Pez (Pz), Ninguna (N). Datos: P, G, P, N, P, A, G, P, Pz, G, P, N, P, G, A, P, G, N, P.",
  "ask": "Ordenando las categorías tal como se listan (Perro (P), Gato (G), Ave (A), Pez (Pz), Ninguna (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Perro\"?",
  "alts": [
   "$f_{1} = 8$",
   "$f_{1} = 3$",
   "$f_{1} = 2$",
   "$f_{1} = 5$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=19\\text{):}",
  "pautaSteps": [
   "Perro=8,\\ Gato=5,\\ Ave=2,\\ Pez=1,\\ Ninguna=3",
   "f_{1}=8,\\ f_{2}=5,\\ f_{3}=2,\\ f_{4}=1,\\ f_{5}=3",
   "h_{1}=0{,}42,\\ h_{2}=0{,}26,\\ h_{3}=0{,}11,\\ h_{4}=0{,}05,\\ h_{5}=0{,}16"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Perro</b>\": $f_{1} = 8$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Hogar · Tenencia de mascotas",
  "enun": "Se registró tipo de mascota de 19 familias. Categorías: Perro (P), Gato (G), Ave (A), Pez (Pz), Ninguna (N). Datos: P, G, P, N, P, A, G, P, Pz, G, P, N, P, G, A, P, G, N, P.",
  "ask": "Ordenando las categorías tal como se listan (Perro (P), Gato (G), Ave (A), Pez (Pz), Ninguna (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Ave\"?",
  "alts": [
   "$h_{3} = 0{,}11$",
   "$h_{3} = 0{,}05$",
   "$h_{3} = 0{,}42$",
   "$h_{3} = 0{,}26$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=19\\text{):}",
  "pautaSteps": [
   "Perro=8,\\ Gato=5,\\ Ave=2,\\ Pez=1,\\ Ninguna=3",
   "f_{1}=8,\\ f_{2}=5,\\ f_{3}=2,\\ f_{4}=1,\\ f_{5}=3",
   "h_{1}=0{,}42,\\ h_{2}=0{,}26,\\ h_{3}=0{,}11,\\ h_{4}=0{,}05,\\ h_{5}=0{,}16"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Ave</b>\": $h_{3} = 0{,}11$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Hogar · Tenencia de mascotas",
  "enun": "Se registró tipo de mascota de 19 familias. Categorías: Perro (P), Gato (G), Ave (A), Pez (Pz), Ninguna (N). Datos: P, G, P, N, P, A, G, P, Pz, G, P, N, P, G, A, P, G, N, P.",
  "ask": "Ordenando las categorías tal como se listan (Perro (P), Gato (G), Ave (A), Pez (Pz), Ninguna (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Ninguna\"?",
  "alts": [
   "$f_{5} = 2$",
   "$f_{5} = 1$",
   "$f_{5} = 5$",
   "$f_{5} = 3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=19\\text{):}",
  "pautaSteps": [
   "Perro=8,\\ Gato=5,\\ Ave=2,\\ Pez=1,\\ Ninguna=3",
   "f_{1}=8,\\ f_{2}=5,\\ f_{3}=2,\\ f_{4}=1,\\ f_{5}=3",
   "h_{1}=0{,}42,\\ h_{2}=0{,}26,\\ h_{3}=0{,}11,\\ h_{4}=0{,}05,\\ h_{5}=0{,}16"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Ninguna</b>\": $f_{5} = 3$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Tecnología · Redes sociales",
  "enun": "Se registró red social más usada de 25 jóvenes. Categorías: Instagram (IG), TikTok (TK), Facebook (FB), Twitter/X (X), YouTube (YT). Datos: TK, IG, TK, YT, IG, FB, TK, IG, X, TK, YT, IG, TK, FB, IG, TK, YT, IG, X, TK, IG, FB, TK, IG, YT.",
  "ask": "Ordenando las categorías tal como se listan (Instagram (IG), TikTok (TK), Facebook (FB), Twitter/X (X), YouTube (YT)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Instagram\"?",
  "alts": [
   "$f_{1} = 3$",
   "$f_{1} = 2$",
   "$f_{1} = 8$",
   "$f_{1} = 4$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=25\\text{):}",
  "pautaSteps": [
   "Instagram=8,\\ TikTok=8,\\ Facebook=3,\\ Twitter/X=2,\\ YouTube=4",
   "f_{1}=8,\\ f_{2}=8,\\ f_{3}=3,\\ f_{4}=2,\\ f_{5}=4",
   "h_{1}=0{,}32,\\ h_{2}=0{,}32,\\ h_{3}=0{,}12,\\ h_{4}=0{,}08,\\ h_{5}=0{,}16"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Instagram</b>\": $f_{1} = 8$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Tecnología · Redes sociales",
  "enun": "Se registró red social más usada de 25 jóvenes. Categorías: Instagram (IG), TikTok (TK), Facebook (FB), Twitter/X (X), YouTube (YT). Datos: TK, IG, TK, YT, IG, FB, TK, IG, X, TK, YT, IG, TK, FB, IG, TK, YT, IG, X, TK, IG, FB, TK, IG, YT.",
  "ask": "Ordenando las categorías tal como se listan (Instagram (IG), TikTok (TK), Facebook (FB), Twitter/X (X), YouTube (YT)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Facebook\"?",
  "alts": [
   "$h_{3} = 0{,}32$",
   "$h_{3} = 0{,}12$",
   "$h_{3} = 0{,}08$",
   "$h_{3} = 0{,}16$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=25\\text{):}",
  "pautaSteps": [
   "Instagram=8,\\ TikTok=8,\\ Facebook=3,\\ Twitter/X=2,\\ YouTube=4",
   "f_{1}=8,\\ f_{2}=8,\\ f_{3}=3,\\ f_{4}=2,\\ f_{5}=4",
   "h_{1}=0{,}32,\\ h_{2}=0{,}32,\\ h_{3}=0{,}12,\\ h_{4}=0{,}08,\\ h_{5}=0{,}16"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Facebook</b>\": $h_{3} = 0{,}12$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Tecnología · Redes sociales",
  "enun": "Se registró red social más usada de 25 jóvenes. Categorías: Instagram (IG), TikTok (TK), Facebook (FB), Twitter/X (X), YouTube (YT). Datos: TK, IG, TK, YT, IG, FB, TK, IG, X, TK, YT, IG, TK, FB, IG, TK, YT, IG, X, TK, IG, FB, TK, IG, YT.",
  "ask": "Ordenando las categorías tal como se listan (Instagram (IG), TikTok (TK), Facebook (FB), Twitter/X (X), YouTube (YT)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"YouTube\"?",
  "alts": [
   "$f_{5} = 4$",
   "$f_{5} = 8$",
   "$f_{5} = 3$",
   "$f_{5} = 2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=25\\text{):}",
  "pautaSteps": [
   "Instagram=8,\\ TikTok=8,\\ Facebook=3,\\ Twitter/X=2,\\ YouTube=4",
   "f_{1}=8,\\ f_{2}=8,\\ f_{3}=3,\\ f_{4}=2,\\ f_{5}=4",
   "h_{1}=0{,}32,\\ h_{2}=0{,}32,\\ h_{3}=0{,}12,\\ h_{4}=0{,}08,\\ h_{5}=0{,}16"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>YouTube</b>\": $f_{5} = 4$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Heladería",
  "enun": "Se registró sabor preferido de 20 clientes. Categorías: Chocolate (Ch), Vainilla (V), Fresa (F), Menta (M), Pistacho (P). Datos: Ch, V, Ch, F, Ch, M, V, Ch, P, F, Ch, V, Ch, M, F, Ch, V, P, Ch, F.",
  "ask": "Ordenando las categorías tal como se listan (Chocolate (Ch), Vainilla (V), Fresa (F), Menta (M), Pistacho (P)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Chocolate\"?",
  "alts": [
   "$f_{1} = 2$",
   "$f_{1} = 8$",
   "$f_{1} = 4$",
   "$f_{1} = 9$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Chocolate=8,\\ Vainilla=4,\\ Fresa=4,\\ Menta=2,\\ Pistacho=2",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=4,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}40,\\ h_{2}=0{,}20,\\ h_{3}=0{,}20,\\ h_{4}=0{,}10,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Chocolate</b>\": $f_{1} = 8$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Retail · Heladería",
  "enun": "Se registró sabor preferido de 20 clientes. Categorías: Chocolate (Ch), Vainilla (V), Fresa (F), Menta (M), Pistacho (P). Datos: Ch, V, Ch, F, Ch, M, V, Ch, P, F, Ch, V, Ch, M, F, Ch, V, P, Ch, F.",
  "ask": "Ordenando las categorías tal como se listan (Chocolate (Ch), Vainilla (V), Fresa (F), Menta (M), Pistacho (P)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Fresa\"?",
  "alts": [
   "$h_{3} = 0{,}20$",
   "$h_{3} = 0{,}23$",
   "$h_{3} = 0{,}40$",
   "$h_{3} = 0{,}10$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Chocolate=8,\\ Vainilla=4,\\ Fresa=4,\\ Menta=2,\\ Pistacho=2",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=4,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}40,\\ h_{2}=0{,}20,\\ h_{3}=0{,}20,\\ h_{4}=0{,}10,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Fresa</b>\": $h_{3} = 0{,}20$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Heladería",
  "enun": "Se registró sabor preferido de 20 clientes. Categorías: Chocolate (Ch), Vainilla (V), Fresa (F), Menta (M), Pistacho (P). Datos: Ch, V, Ch, F, Ch, M, V, Ch, P, F, Ch, V, Ch, M, F, Ch, V, P, Ch, F.",
  "ask": "Ordenando las categorías tal como se listan (Chocolate (Ch), Vainilla (V), Fresa (F), Menta (M), Pistacho (P)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Pistacho\"?",
  "alts": [
   "$f_{5} = 4$",
   "$f_{5} = 2$",
   "$f_{5} = 8$",
   "$f_{5} = 3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Chocolate=8,\\ Vainilla=4,\\ Fresa=4,\\ Menta=2,\\ Pistacho=2",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=4,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}40,\\ h_{2}=0{,}20,\\ h_{3}=0{,}20,\\ h_{4}=0{,}10,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Pistacho</b>\": $f_{5} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Cultura · Cine",
  "enun": "Se registró género de película favorito de 21 personas. Categorías: Acción (A), Comedia (C), Drama (D), Terror (T), Ciencia ficción (CF). Datos: A, C, A, T, C, D, A, CF, C, A, T, C, A, D, C, A, CF, T, C, A, C.",
  "ask": "Ordenando las categorías tal como se listan (Acción (A), Comedia (C), Drama (D), Terror (T), Ciencia ficción (CF)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Acción\"?",
  "alts": [
   "$f_{1} = 3$",
   "$f_{1} = 8$",
   "$f_{1} = 2$",
   "$f_{1} = 7$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=21\\text{):}",
  "pautaSteps": [
   "Acción=7,\\ Comedia=7,\\ Drama=2,\\ Terror=3,\\ Ciencia ficción=2",
   "f_{1}=7,\\ f_{2}=7,\\ f_{3}=2,\\ f_{4}=3,\\ f_{5}=2",
   "h_{1}=0{,}33,\\ h_{2}=0{,}33,\\ h_{3}=0{,}10,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Acción</b>\": $f_{1} = 7$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Cultura · Cine",
  "enun": "Se registró género de película favorito de 21 personas. Categorías: Acción (A), Comedia (C), Drama (D), Terror (T), Ciencia ficción (CF). Datos: A, C, A, T, C, D, A, CF, C, A, T, C, A, D, C, A, CF, T, C, A, C.",
  "ask": "Ordenando las categorías tal como se listan (Acción (A), Comedia (C), Drama (D), Terror (T), Ciencia ficción (CF)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Drama\"?",
  "alts": [
   "$h_{3} = 0{,}33$",
   "$h_{3} = 0{,}13$",
   "$h_{3} = 0{,}10$",
   "$h_{3} = 0{,}14$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=21\\text{):}",
  "pautaSteps": [
   "Acción=7,\\ Comedia=7,\\ Drama=2,\\ Terror=3,\\ Ciencia ficción=2",
   "f_{1}=7,\\ f_{2}=7,\\ f_{3}=2,\\ f_{4}=3,\\ f_{5}=2",
   "h_{1}=0{,}33,\\ h_{2}=0{,}33,\\ h_{3}=0{,}10,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Drama</b>\": $h_{3} = 0{,}10$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Cultura · Cine",
  "enun": "Se registró género de película favorito de 21 personas. Categorías: Acción (A), Comedia (C), Drama (D), Terror (T), Ciencia ficción (CF). Datos: A, C, A, T, C, D, A, CF, C, A, T, C, A, D, C, A, CF, T, C, A, C.",
  "ask": "Ordenando las categorías tal como se listan (Acción (A), Comedia (C), Drama (D), Terror (T), Ciencia ficción (CF)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Ciencia ficción\"?",
  "alts": [
   "$f_{5} = 1$",
   "$f_{5} = 2$",
   "$f_{5} = 3$",
   "$f_{5} = 7$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=21\\text{):}",
  "pautaSteps": [
   "Acción=7,\\ Comedia=7,\\ Drama=2,\\ Terror=3,\\ Ciencia ficción=2",
   "f_{1}=7,\\ f_{2}=7,\\ f_{3}=2,\\ f_{4}=3,\\ f_{5}=2",
   "h_{1}=0{,}33,\\ h_{2}=0{,}33,\\ h_{3}=0{,}10,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Ciencia ficción</b>\": $f_{5} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Laboral · Contratos",
  "enun": "Se registró tipo de contrato laboral de 18 trabajadores. Categorías: Indefinido (I), Plazo fijo (PF), Honorarios (H), Part-time (PT). Datos: I, PF, I, H, I, PT, PF, I, H, I, PF, PT, I, H, PF, I, PT, I.",
  "ask": "Ordenando las categorías tal como se listan (Indefinido (I), Plazo fijo (PF), Honorarios (H), Part-time (PT)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Indefinido\"?",
  "alts": [
   "$f_{1} = 8$",
   "$f_{1} = 4$",
   "$f_{1} = 3$",
   "$f_{1} = 9$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=18\\text{):}",
  "pautaSteps": [
   "Indefinido=8,\\ Plazo fijo=4,\\ Honorarios=3,\\ Part-time=3",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}44,\\ h_{2}=0{,}22,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Indefinido</b>\": $f_{1} = 8$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Laboral · Contratos",
  "enun": "Se registró tipo de contrato laboral de 18 trabajadores. Categorías: Indefinido (I), Plazo fijo (PF), Honorarios (H), Part-time (PT). Datos: I, PF, I, H, I, PT, PF, I, H, I, PF, PT, I, H, PF, I, PT, I.",
  "ask": "Ordenando las categorías tal como se listan (Indefinido (I), Plazo fijo (PF), Honorarios (H), Part-time (PT)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Honorarios\"?",
  "alts": [
   "$h_{3} = 0{,}44$",
   "$h_{3} = 0{,}20$",
   "$h_{3} = 0{,}22$",
   "$h_{3} = 0{,}17$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=18\\text{):}",
  "pautaSteps": [
   "Indefinido=8,\\ Plazo fijo=4,\\ Honorarios=3,\\ Part-time=3",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}44,\\ h_{2}=0{,}22,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Honorarios</b>\": $h_{3} = 0{,}17$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Laboral · Contratos",
  "enun": "Se registró tipo de contrato laboral de 18 trabajadores. Categorías: Indefinido (I), Plazo fijo (PF), Honorarios (H), Part-time (PT). Datos: I, PF, I, H, I, PT, PF, I, H, I, PF, PT, I, H, PF, I, PT, I.",
  "ask": "Ordenando las categorías tal como se listan (Indefinido (I), Plazo fijo (PF), Honorarios (H), Part-time (PT)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{4}$, la frecuencia absoluta de la categoría \"Part-time\"?",
  "alts": [
   "$f_{4} = 3$",
   "$f_{4} = 4$",
   "$f_{4} = 8$",
   "$f_{4} = 2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=18\\text{):}",
  "pautaSteps": [
   "Indefinido=8,\\ Plazo fijo=4,\\ Honorarios=3,\\ Part-time=3",
   "f_{1}=8,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}44,\\ h_{2}=0{,}22,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Part-time</b>\": $f_{4} = 3$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Hogar · Desayuno",
  "enun": "Se registró bebida preferida en el desayuno de 20 personas. Categorías: Café (C), Té (T), Jugo (J), Leche (L), Agua (A). Datos: C, T, C, J, C, L, C, T, J, C, A, C, T, L, C, J, C, T, C, L.",
  "ask": "Ordenando las categorías tal como se listan (Café (C), Té (T), Jugo (J), Leche (L), Agua (A)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Café\"?",
  "alts": [
   "$f_{1} = 3$",
   "$f_{1} = 4$",
   "$f_{1} = 9$",
   "$f_{1} = 1$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Café=9,\\ Té=4,\\ Jugo=3,\\ Leche=3,\\ Agua=1",
   "f_{1}=9,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3,\\ f_{5}=1",
   "h_{1}=0{,}45,\\ h_{2}=0{,}20,\\ h_{3}=0{,}15,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Café</b>\": $f_{1} = 9$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Hogar · Desayuno",
  "enun": "Se registró bebida preferida en el desayuno de 20 personas. Categorías: Café (C), Té (T), Jugo (J), Leche (L), Agua (A). Datos: C, T, C, J, C, L, C, T, J, C, A, C, T, L, C, J, C, T, C, L.",
  "ask": "Ordenando las categorías tal como se listan (Café (C), Té (T), Jugo (J), Leche (L), Agua (A)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Jugo\"?",
  "alts": [
   "$h_{3} = 0{,}05$",
   "$h_{3} = 0{,}20$",
   "$h_{3} = 0{,}45$",
   "$h_{3} = 0{,}15$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Café=9,\\ Té=4,\\ Jugo=3,\\ Leche=3,\\ Agua=1",
   "f_{1}=9,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3,\\ f_{5}=1",
   "h_{1}=0{,}45,\\ h_{2}=0{,}20,\\ h_{3}=0{,}15,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Jugo</b>\": $h_{3} = 0{,}15$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Hogar · Desayuno",
  "enun": "Se registró bebida preferida en el desayuno de 20 personas. Categorías: Café (C), Té (T), Jugo (J), Leche (L), Agua (A). Datos: C, T, C, J, C, L, C, T, J, C, A, C, T, L, C, J, C, T, C, L.",
  "ask": "Ordenando las categorías tal como se listan (Café (C), Té (T), Jugo (J), Leche (L), Agua (A)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Agua\"?",
  "alts": [
   "$f_{5} = 3$",
   "$f_{5} = 9$",
   "$f_{5} = 1$",
   "$f_{5} = 4$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Café=9,\\ Té=4,\\ Jugo=3,\\ Leche=3,\\ Agua=1",
   "f_{1}=9,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3,\\ f_{5}=1",
   "h_{1}=0{,}45,\\ h_{2}=0{,}20,\\ h_{3}=0{,}15,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Agua</b>\": $f_{5} = 1$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Política · Encuesta electoral",
  "enun": "Se registró preferencia de candidato de 24 votantes. Categorías: Candidato A (A), Candidato B (B), Candidato C (C), Candidato D (D). Datos: B, A, C, B, D, A, B, C, B, A, D, B, C, A, B, D, B, A, C, B, A, B, D, B.",
  "ask": "Ordenando las categorías tal como se listan (Candidato A (A), Candidato B (B), Candidato C (C), Candidato D (D)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Candidato A\"?",
  "alts": [
   "$f_{1} = 7$",
   "$f_{1} = 6$",
   "$f_{1} = 4$",
   "$f_{1} = 10$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Candidato A=6,\\ Candidato B=10,\\ Candidato C=4,\\ Candidato D=4",
   "f_{1}=6,\\ f_{2}=10,\\ f_{3}=4,\\ f_{4}=4",
   "h_{1}=0{,}25,\\ h_{2}=0{,}42,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Candidato A</b>\": $f_{1} = 6$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Política · Encuesta electoral",
  "enun": "Se registró preferencia de candidato de 24 votantes. Categorías: Candidato A (A), Candidato B (B), Candidato C (C), Candidato D (D). Datos: B, A, C, B, D, A, B, C, B, A, D, B, C, A, B, D, B, A, C, B, A, B, D, B.",
  "ask": "Ordenando las categorías tal como se listan (Candidato A (A), Candidato B (B), Candidato C (C), Candidato D (D)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Candidato C\"?",
  "alts": [
   "$h_{3} = 0{,}17$",
   "$h_{3} = 0{,}25$",
   "$h_{3} = 0{,}42$",
   "$h_{3} = 0{,}20$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Candidato A=6,\\ Candidato B=10,\\ Candidato C=4,\\ Candidato D=4",
   "f_{1}=6,\\ f_{2}=10,\\ f_{3}=4,\\ f_{4}=4",
   "h_{1}=0{,}25,\\ h_{2}=0{,}42,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Candidato C</b>\": $h_{3} = 0{,}17$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Política · Encuesta electoral",
  "enun": "Se registró preferencia de candidato de 24 votantes. Categorías: Candidato A (A), Candidato B (B), Candidato C (C), Candidato D (D). Datos: B, A, C, B, D, A, B, C, B, A, D, B, C, A, B, D, B, A, C, B, A, B, D, B.",
  "ask": "Ordenando las categorías tal como se listan (Candidato A (A), Candidato B (B), Candidato C (C), Candidato D (D)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{4}$, la frecuencia absoluta de la categoría \"Candidato D\"?",
  "alts": [
   "$f_{4} = 10$",
   "$f_{4} = 6$",
   "$f_{4} = 5$",
   "$f_{4} = 4$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Candidato A=6,\\ Candidato B=10,\\ Candidato C=4,\\ Candidato D=4",
   "f_{1}=6,\\ f_{2}=10,\\ f_{3}=4,\\ f_{4}=4",
   "h_{1}=0{,}25,\\ h_{2}=0{,}42,\\ h_{3}=0{,}17,\\ h_{4}=0{,}17"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Candidato D</b>\": $f_{4} = 4$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Concesionario de autos",
  "enun": "Se registró color de vehículo de 22 unidades vendidas. Categorías: Blanco (Bl), Negro (Ng), Gris (Gr), Rojo (Ro), Azul (Az). Datos: Bl, Gr, Bl, Ng, Bl, Ro, Gr, Bl, Az, Gr, Bl, Ng, Bl, Gr, Ro, Bl, Gr, Az, Bl, Ng, Gr, Bl.",
  "ask": "Ordenando las categorías tal como se listan (Blanco (Bl), Negro (Ng), Gris (Gr), Rojo (Ro), Azul (Az)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Blanco\"?",
  "alts": [
   "$f_{1} = 9$",
   "$f_{1} = 2$",
   "$f_{1} = 6$",
   "$f_{1} = 3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Blanco=9,\\ Negro=3,\\ Gris=6,\\ Rojo=2,\\ Azul=2",
   "f_{1}=9,\\ f_{2}=3,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}41,\\ h_{2}=0{,}14,\\ h_{3}=0{,}27,\\ h_{4}=0{,}09,\\ h_{5}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Blanco</b>\": $f_{1} = 9$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Retail · Concesionario de autos",
  "enun": "Se registró color de vehículo de 22 unidades vendidas. Categorías: Blanco (Bl), Negro (Ng), Gris (Gr), Rojo (Ro), Azul (Az). Datos: Bl, Gr, Bl, Ng, Bl, Ro, Gr, Bl, Az, Gr, Bl, Ng, Bl, Gr, Ro, Bl, Gr, Az, Bl, Ng, Gr, Bl.",
  "ask": "Ordenando las categorías tal como se listan (Blanco (Bl), Negro (Ng), Gris (Gr), Rojo (Ro), Azul (Az)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Gris\"?",
  "alts": [
   "$h_{3} = 0{,}41$",
   "$h_{3} = 0{,}14$",
   "$h_{3} = 0{,}27$",
   "$h_{3} = 0{,}09$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Blanco=9,\\ Negro=3,\\ Gris=6,\\ Rojo=2,\\ Azul=2",
   "f_{1}=9,\\ f_{2}=3,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}41,\\ h_{2}=0{,}14,\\ h_{3}=0{,}27,\\ h_{4}=0{,}09,\\ h_{5}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Gris</b>\": $h_{3} = 0{,}27$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Concesionario de autos",
  "enun": "Se registró color de vehículo de 22 unidades vendidas. Categorías: Blanco (Bl), Negro (Ng), Gris (Gr), Rojo (Ro), Azul (Az). Datos: Bl, Gr, Bl, Ng, Bl, Ro, Gr, Bl, Az, Gr, Bl, Ng, Bl, Gr, Ro, Bl, Gr, Az, Bl, Ng, Gr, Bl.",
  "ask": "Ordenando las categorías tal como se listan (Blanco (Bl), Negro (Ng), Gris (Gr), Rojo (Ro), Azul (Az)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Azul\"?",
  "alts": [
   "$f_{5} = 3$",
   "$f_{5} = 9$",
   "$f_{5} = 6$",
   "$f_{5} = 2$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Blanco=9,\\ Negro=3,\\ Gris=6,\\ Rojo=2,\\ Azul=2",
   "f_{1}=9,\\ f_{2}=3,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=2",
   "h_{1}=0{,}41,\\ h_{2}=0{,}14,\\ h_{3}=0{,}27,\\ h_{4}=0{,}09,\\ h_{5}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Azul</b>\": $f_{5} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Hogar · Vivienda",
  "enun": "Se registró tipo de vivienda de 19 familias. Categorías: Casa (C), Departamento (D), Otro (O). Datos: C, D, C, D, C, O, D, C, D, C, D, C, O, D, C, D, C, D, C.",
  "ask": "Ordenando las categorías tal como se listan (Casa (C), Departamento (D), Otro (O)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Casa\"?",
  "alts": [
   "$f_{1} = 9$",
   "$f_{1} = 8$",
   "$f_{1} = 10$",
   "$f_{1} = 2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=19\\text{):}",
  "pautaSteps": [
   "Casa=9,\\ Departamento=8,\\ Otro=2",
   "f_{1}=9,\\ f_{2}=8,\\ f_{3}=2",
   "h_{1}=0{,}47,\\ h_{2}=0{,}42,\\ h_{3}=0{,}11"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Casa</b>\": $f_{1} = 9$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Hogar · Vivienda",
  "enun": "Se registró tipo de vivienda de 19 familias. Categorías: Casa (C), Departamento (D), Otro (O). Datos: C, D, C, D, C, O, D, C, D, C, D, C, O, D, C, D, C, D, C.",
  "ask": "Ordenando las categorías tal como se listan (Casa (C), Departamento (D), Otro (O)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{2}$, la frecuencia relativa de la categoría \"Departamento\"?",
  "alts": [
   "$h_{2} = 0{,}47$",
   "$h_{2} = 0{,}42$",
   "$h_{2} = 0{,}45$",
   "$h_{2} = 0{,}11$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=19\\text{):}",
  "pautaSteps": [
   "Casa=9,\\ Departamento=8,\\ Otro=2",
   "f_{1}=9,\\ f_{2}=8,\\ f_{3}=2",
   "h_{1}=0{,}47,\\ h_{2}=0{,}42,\\ h_{3}=0{,}11"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Departamento</b>\": $h_{2} = 0{,}42$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Hogar · Vivienda",
  "enun": "Se registró tipo de vivienda de 19 familias. Categorías: Casa (C), Departamento (D), Otro (O). Datos: C, D, C, D, C, O, D, C, D, C, D, C, O, D, C, D, C, D, C.",
  "ask": "Ordenando las categorías tal como se listan (Casa (C), Departamento (D), Otro (O)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{3}$, la frecuencia absoluta de la categoría \"Otro\"?",
  "alts": [
   "$f_{3} = 2$",
   "$f_{3} = 9$",
   "$f_{3} = 8$",
   "$f_{3} = 3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=19\\text{):}",
  "pautaSteps": [
   "Casa=9,\\ Departamento=8,\\ Otro=2",
   "f_{1}=9,\\ f_{2}=8,\\ f_{3}=2",
   "h_{1}=0{,}47,\\ h_{2}=0{,}42,\\ h_{3}=0{,}11"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Otro</b>\": $f_{3} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Medios de pago",
  "enun": "Se registró método de pago de 23 clientes. Categorías: Efectivo (E), Débito (D), Crédito (Cr), Transferencia (T). Datos: D, Cr, E, D, D, Cr, T, D, E, Cr, D, D, T, Cr, D, E, D, Cr, D, T, D, Cr, D.",
  "ask": "Ordenando las categorías tal como se listan (Efectivo (E), Débito (D), Crédito (Cr), Transferencia (T)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Efectivo\"?",
  "alts": [
   "$f_{1} = 6$",
   "$f_{1} = 11$",
   "$f_{1} = 4$",
   "$f_{1} = 3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=23\\text{):}",
  "pautaSteps": [
   "Efectivo=3,\\ Débito=11,\\ Crédito=6,\\ Transferencia=3",
   "f_{1}=3,\\ f_{2}=11,\\ f_{3}=6,\\ f_{4}=3",
   "h_{1}=0{,}13,\\ h_{2}=0{,}48,\\ h_{3}=0{,}26,\\ h_{4}=0{,}13"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Efectivo</b>\": $f_{1} = 3$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Retail · Medios de pago",
  "enun": "Se registró método de pago de 23 clientes. Categorías: Efectivo (E), Débito (D), Crédito (Cr), Transferencia (T). Datos: D, Cr, E, D, D, Cr, T, D, E, Cr, D, D, T, Cr, D, E, D, Cr, D, T, D, Cr, D.",
  "ask": "Ordenando las categorías tal como se listan (Efectivo (E), Débito (D), Crédito (Cr), Transferencia (T)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Crédito\"?",
  "alts": [
   "$h_{3} = 0{,}26$",
   "$h_{3} = 0{,}48$",
   "$h_{3} = 0{,}29$",
   "$h_{3} = 0{,}13$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=23\\text{):}",
  "pautaSteps": [
   "Efectivo=3,\\ Débito=11,\\ Crédito=6,\\ Transferencia=3",
   "f_{1}=3,\\ f_{2}=11,\\ f_{3}=6,\\ f_{4}=3",
   "h_{1}=0{,}13,\\ h_{2}=0{,}48,\\ h_{3}=0{,}26,\\ h_{4}=0{,}13"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Crédito</b>\": $h_{3} = 0{,}26$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Medios de pago",
  "enun": "Se registró método de pago de 23 clientes. Categorías: Efectivo (E), Débito (D), Crédito (Cr), Transferencia (T). Datos: D, Cr, E, D, D, Cr, T, D, E, Cr, D, D, T, Cr, D, E, D, Cr, D, T, D, Cr, D.",
  "ask": "Ordenando las categorías tal como se listan (Efectivo (E), Débito (D), Crédito (Cr), Transferencia (T)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{4}$, la frecuencia absoluta de la categoría \"Transferencia\"?",
  "alts": [
   "$f_{4} = 4$",
   "$f_{4} = 6$",
   "$f_{4} = 3$",
   "$f_{4} = 11$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=23\\text{):}",
  "pautaSteps": [
   "Efectivo=3,\\ Débito=11,\\ Crédito=6,\\ Transferencia=3",
   "f_{1}=3,\\ f_{2}=11,\\ f_{3}=6,\\ f_{4}=3",
   "h_{1}=0{,}13,\\ h_{2}=0{,}48,\\ h_{3}=0{,}26,\\ h_{4}=0{,}13"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Transferencia</b>\": $f_{4} = 3$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Salud · Especialidades médicas",
  "enun": "Se registró especialidad médica consultada de 20 pacientes. Categorías: Pediatría (Pe), Cardiología (Ca), Dermatología (De), Traumatología (Tr). Datos: Pe, Ca, Pe, De, Pe, Tr, Ca, Pe, De, Pe, Ca, Tr, Pe, De, Ca, Pe, Tr, Pe, Ca, Pe.",
  "ask": "Ordenando las categorías tal como se listan (Pediatría (Pe), Cardiología (Ca), Dermatología (De), Traumatología (Tr)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Pediatría\"?",
  "alts": [
   "$f_{1} = 3$",
   "$f_{1} = 5$",
   "$f_{1} = 9$",
   "$f_{1} = 10$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Pediatría=9,\\ Cardiología=5,\\ Dermatología=3,\\ Traumatología=3",
   "f_{1}=9,\\ f_{2}=5,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}45,\\ h_{2}=0{,}25,\\ h_{3}=0{,}15,\\ h_{4}=0{,}15"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Pediatría</b>\": $f_{1} = 9$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Salud · Especialidades médicas",
  "enun": "Se registró especialidad médica consultada de 20 pacientes. Categorías: Pediatría (Pe), Cardiología (Ca), Dermatología (De), Traumatología (Tr). Datos: Pe, Ca, Pe, De, Pe, Tr, Ca, Pe, De, Pe, Ca, Tr, Pe, De, Ca, Pe, Tr, Pe, Ca, Pe.",
  "ask": "Ordenando las categorías tal como se listan (Pediatría (Pe), Cardiología (Ca), Dermatología (De), Traumatología (Tr)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Dermatología\"?",
  "alts": [
   "$h_{3} = 0{,}18$",
   "$h_{3} = 0{,}25$",
   "$h_{3} = 0{,}45$",
   "$h_{3} = 0{,}15$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Pediatría=9,\\ Cardiología=5,\\ Dermatología=3,\\ Traumatología=3",
   "f_{1}=9,\\ f_{2}=5,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}45,\\ h_{2}=0{,}25,\\ h_{3}=0{,}15,\\ h_{4}=0{,}15"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Dermatología</b>\": $h_{3} = 0{,}15$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Salud · Especialidades médicas",
  "enun": "Se registró especialidad médica consultada de 20 pacientes. Categorías: Pediatría (Pe), Cardiología (Ca), Dermatología (De), Traumatología (Tr). Datos: Pe, Ca, Pe, De, Pe, Tr, Ca, Pe, De, Pe, Ca, Tr, Pe, De, Ca, Pe, Tr, Pe, Ca, Pe.",
  "ask": "Ordenando las categorías tal como se listan (Pediatría (Pe), Cardiología (Ca), Dermatología (De), Traumatología (Tr)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{4}$, la frecuencia absoluta de la categoría \"Traumatología\"?",
  "alts": [
   "$f_{4} = 9$",
   "$f_{4} = 3$",
   "$f_{4} = 5$",
   "$f_{4} = 4$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=20\\text{):}",
  "pautaSteps": [
   "Pediatría=9,\\ Cardiología=5,\\ Dermatología=3,\\ Traumatología=3",
   "f_{1}=9,\\ f_{2}=5,\\ f_{3}=3,\\ f_{4}=3",
   "h_{1}=0{,}45,\\ h_{2}=0{,}25,\\ h_{3}=0{,}15,\\ h_{4}=0{,}15"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Traumatología</b>\": $f_{4} = 3$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Educación · Idiomas",
  "enun": "Se registró idioma extranjero estudiado de 21 estudiantes. Categorías: Inglés (I), Francés (F), Alemán (A), Portugués (P), Ninguno (N). Datos: I, F, I, A, I, P, F, I, N, I, A, I, F, P, I, A, I, N, F, I, P.",
  "ask": "Ordenando las categorías tal como se listan (Inglés (I), Francés (F), Alemán (A), Portugués (P), Ninguno (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Inglés\"?",
  "alts": [
   "$f_{1} = 9$",
   "$f_{1} = 3$",
   "$f_{1} = 4$",
   "$f_{1} = 2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=21\\text{):}",
  "pautaSteps": [
   "Inglés=9,\\ Francés=4,\\ Alemán=3,\\ Portugués=3,\\ Ninguno=2",
   "f_{1}=9,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3,\\ f_{5}=2",
   "h_{1}=0{,}43,\\ h_{2}=0{,}19,\\ h_{3}=0{,}14,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Inglés</b>\": $f_{1} = 9$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Educación · Idiomas",
  "enun": "Se registró idioma extranjero estudiado de 21 estudiantes. Categorías: Inglés (I), Francés (F), Alemán (A), Portugués (P), Ninguno (N). Datos: I, F, I, A, I, P, F, I, N, I, A, I, F, P, I, A, I, N, F, I, P.",
  "ask": "Ordenando las categorías tal como se listan (Inglés (I), Francés (F), Alemán (A), Portugués (P), Ninguno (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Alemán\"?",
  "alts": [
   "$h_{3} = 0{,}10$",
   "$h_{3} = 0{,}43$",
   "$h_{3} = 0{,}19$",
   "$h_{3} = 0{,}14$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=21\\text{):}",
  "pautaSteps": [
   "Inglés=9,\\ Francés=4,\\ Alemán=3,\\ Portugués=3,\\ Ninguno=2",
   "f_{1}=9,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3,\\ f_{5}=2",
   "h_{1}=0{,}43,\\ h_{2}=0{,}19,\\ h_{3}=0{,}14,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Alemán</b>\": $h_{3} = 0{,}14$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Educación · Idiomas",
  "enun": "Se registró idioma extranjero estudiado de 21 estudiantes. Categorías: Inglés (I), Francés (F), Alemán (A), Portugués (P), Ninguno (N). Datos: I, F, I, A, I, P, F, I, N, I, A, I, F, P, I, A, I, N, F, I, P.",
  "ask": "Ordenando las categorías tal como se listan (Inglés (I), Francés (F), Alemán (A), Portugués (P), Ninguno (N)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Ninguno\"?",
  "alts": [
   "$f_{5} = 2$",
   "$f_{5} = 4$",
   "$f_{5} = 9$",
   "$f_{5} = 3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=21\\text{):}",
  "pautaSteps": [
   "Inglés=9,\\ Francés=4,\\ Alemán=3,\\ Portugués=3,\\ Ninguno=2",
   "f_{1}=9,\\ f_{2}=4,\\ f_{3}=3,\\ f_{4}=3,\\ f_{5}=2",
   "h_{1}=0{,}43,\\ h_{2}=0{,}19,\\ h_{3}=0{,}14,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Ninguno</b>\": $f_{5} = 2$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Cafetería",
  "enun": "Se registró tipo de café pedido de 24 clientes. Categorías: Espresso (Es), Cortado (Co), Latte (L), Americano (Am), Capuccino (Ca). Datos: L, Es, Co, L, Am, Co, L, Ca, Es, L, Co, L, Am, Ca, L, Es, Co, L, Am, L, Co, Ca, L, Es.",
  "ask": "Ordenando las categorías tal como se listan (Espresso (Es), Cortado (Co), Latte (L), Americano (Am), Capuccino (Ca)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Espresso\"?",
  "alts": [
   "$f_{1} = 3$",
   "$f_{1} = 9$",
   "$f_{1} = 4$",
   "$f_{1} = 5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Espresso=4,\\ Cortado=5,\\ Latte=9,\\ Americano=3,\\ Capuccino=3",
   "f_{1}=4,\\ f_{2}=5,\\ f_{3}=9,\\ f_{4}=3,\\ f_{5}=3",
   "h_{1}=0{,}17,\\ h_{2}=0{,}21,\\ h_{3}=0{,}38,\\ h_{4}=0{,}13,\\ h_{5}=0{,}13"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Espresso</b>\": $f_{1} = 4$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Retail · Cafetería",
  "enun": "Se registró tipo de café pedido de 24 clientes. Categorías: Espresso (Es), Cortado (Co), Latte (L), Americano (Am), Capuccino (Ca). Datos: L, Es, Co, L, Am, Co, L, Ca, Es, L, Co, L, Am, Ca, L, Es, Co, L, Am, L, Co, Ca, L, Es.",
  "ask": "Ordenando las categorías tal como se listan (Espresso (Es), Cortado (Co), Latte (L), Americano (Am), Capuccino (Ca)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Latte\"?",
  "alts": [
   "$h_{3} = 0{,}13$",
   "$h_{3} = 0{,}21$",
   "$h_{3} = 0{,}38$",
   "$h_{3} = 0{,}17$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Espresso=4,\\ Cortado=5,\\ Latte=9,\\ Americano=3,\\ Capuccino=3",
   "f_{1}=4,\\ f_{2}=5,\\ f_{3}=9,\\ f_{4}=3,\\ f_{5}=3",
   "h_{1}=0{,}17,\\ h_{2}=0{,}21,\\ h_{3}=0{,}38,\\ h_{4}=0{,}13,\\ h_{5}=0{,}13"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Latte</b>\": $h_{3} = 0{,}38$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Retail · Cafetería",
  "enun": "Se registró tipo de café pedido de 24 clientes. Categorías: Espresso (Es), Cortado (Co), Latte (L), Americano (Am), Capuccino (Ca). Datos: L, Es, Co, L, Am, Co, L, Ca, Es, L, Co, L, Am, Ca, L, Es, Co, L, Am, L, Co, Ca, L, Es.",
  "ask": "Ordenando las categorías tal como se listan (Espresso (Es), Cortado (Co), Latte (L), Americano (Am), Capuccino (Ca)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{5}$, la frecuencia absoluta de la categoría \"Capuccino\"?",
  "alts": [
   "$f_{5} = 4$",
   "$f_{5} = 5$",
   "$f_{5} = 9$",
   "$f_{5} = 3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=24\\text{):}",
  "pautaSteps": [
   "Espresso=4,\\ Cortado=5,\\ Latte=9,\\ Americano=3,\\ Capuccino=3",
   "f_{1}=4,\\ f_{2}=5,\\ f_{3}=9,\\ f_{4}=3,\\ f_{5}=3",
   "h_{1}=0{,}17,\\ h_{2}=0{,}21,\\ h_{3}=0{,}38,\\ h_{4}=0{,}13,\\ h_{5}=0{,}13"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Capuccino</b>\": $f_{5} = 3$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Servicio al cliente · Call center",
  "enun": "Se registró categoría de reclamo de 22 reclamos. Categorías: Facturación (F), Servicio técnico (ST), Atención (At), Otro (O). Datos: ST, F, ST, At, F, ST, O, ST, F, At, ST, F, ST, O, At, ST, F, ST, At, F, ST, F.",
  "ask": "Ordenando las categorías tal como se listan (Facturación (F), Servicio técnico (ST), Atención (At), Otro (O)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{1}$, la frecuencia absoluta de la categoría \"Facturación\"?",
  "alts": [
   "$f_{1} = 4$",
   "$f_{1} = 7$",
   "$f_{1} = 2$",
   "$f_{1} = 9$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Facturación=7,\\ Servicio técnico=9,\\ Atención=4,\\ Otro=2",
   "f_{1}=7,\\ f_{2}=9,\\ f_{3}=4,\\ f_{4}=2",
   "h_{1}=0{,}32,\\ h_{2}=0{,}41,\\ h_{3}=0{,}18,\\ h_{4}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Facturación</b>\": $f_{1} = 7$."
 },
 {
  "tipo": "Tabla de frecuencias · h_i",
  "ctx": "Servicio al cliente · Call center",
  "enun": "Se registró categoría de reclamo de 22 reclamos. Categorías: Facturación (F), Servicio técnico (ST), Atención (At), Otro (O). Datos: ST, F, ST, At, F, ST, O, ST, F, At, ST, F, ST, O, At, ST, F, ST, At, F, ST, F.",
  "ask": "Ordenando las categorías tal como se listan (Facturación (F), Servicio técnico (ST), Atención (At), Otro (O)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $h_{3}$, la frecuencia relativa de la categoría \"Atención\"?",
  "alts": [
   "$h_{3} = 0{,}18$",
   "$h_{3} = 0{,}41$",
   "$h_{3} = 0{,}32$",
   "$h_{3} = 0{,}09$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Facturación=7,\\ Servicio técnico=9,\\ Atención=4,\\ Otro=2",
   "f_{1}=7,\\ f_{2}=9,\\ f_{3}=4,\\ f_{4}=2",
   "h_{1}=0{,}32,\\ h_{2}=0{,}41,\\ h_{3}=0{,}18,\\ h_{4}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Atención</b>\": $h_{3} = 0{,}18$."
 },
 {
  "tipo": "Tabla de frecuencias · f_i",
  "ctx": "Servicio al cliente · Call center",
  "enun": "Se registró categoría de reclamo de 22 reclamos. Categorías: Facturación (F), Servicio técnico (ST), Atención (At), Otro (O). Datos: ST, F, ST, At, F, ST, O, ST, F, At, ST, F, ST, O, At, ST, F, ST, At, F, ST, F.",
  "ask": "Ordenando las categorías tal como se listan (Facturación (F), Servicio técnico (ST), Atención (At), Otro (O)) y construyendo la tabla de frecuencias con los datos de arriba, ¿cuál es el valor de $f_{4}$, la frecuencia absoluta de la categoría \"Otro\"?",
  "alts": [
   "$f_{4} = 9$",
   "$f_{4} = 4$",
   "$f_{4} = 7$",
   "$f_{4} = 2$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo por categoría (}n=22\\text{):}",
  "pautaSteps": [
   "Facturación=7,\\ Servicio técnico=9,\\ Atención=4,\\ Otro=2",
   "f_{1}=7,\\ f_{2}=9,\\ f_{3}=4,\\ f_{4}=2",
   "h_{1}=0{,}32,\\ h_{2}=0{,}41,\\ h_{3}=0{,}18,\\ h_{4}=0{,}09"
  ],
  "conc": "El valor pedido corresponde a la categoría \"<b>Otro</b>\": $f_{4} = 2$."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Streaming · Suscriptores",
  "enun": "Se encuestó a $n=200$ suscriptores sobre su plataforma de streaming preferida, obteniéndose la siguiente tabla de frecuencias:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Netflix",
     80,
     "0,40",
     "40%"
    ],
    [
     "HBO Max",
     50,
     "0,25",
     "25%"
    ],
    [
     "Disney+",
     40,
     "0,20",
     "20%"
    ],
    [
     "Prime Video",
     30,
     "0,15",
     "15%"
    ],
    [
     "Total",
     200,
     "1,00",
     "100%"
    ]
   ],
   "N": 200
  },
  "ask": "¿Cuántos suscriptores prefieren Netflix?",
  "alts": [
   "$107$",
   "$39$",
   "$80$",
   "$67$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=200.",
  "pautaSteps": [
   "f(\\text{Netflix}) = 80"
  ],
  "conc": "El valor pedido es <b>80</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Streaming · Suscriptores",
  "enun": "Se encuestó a $n=200$ suscriptores sobre su plataforma de streaming preferida, obteniéndose la siguiente tabla de frecuencias:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Netflix",
     80,
     "0,40",
     "40%"
    ],
    [
     "HBO Max",
     50,
     "0,25",
     "25%"
    ],
    [
     "Disney+",
     40,
     "0,20",
     "20%"
    ],
    [
     "Prime Video",
     30,
     "0,15",
     "15%"
    ],
    [
     "Total",
     200,
     "1,00",
     "100%"
    ]
   ],
   "N": 200
  },
  "ask": "¿Qué porcentaje prefiere HBO Max o Disney+?",
  "alts": [
   "$52\\%$",
   "$78\\%$",
   "$45\\%$",
   "$17\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=200.",
  "pautaSteps": [
   "\\dfrac{50+40}{200}\\times 100 = 45\\%"
  ],
  "conc": "El porcentaje pedido es <b>45%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Streaming · Suscriptores",
  "enun": "Se encuestó a $n=200$ suscriptores sobre su plataforma de streaming preferida, obteniéndose la siguiente tabla de frecuencias:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Netflix",
     80,
     "0,40",
     "40%"
    ],
    [
     "HBO Max",
     50,
     "0,25",
     "25%"
    ],
    [
     "Disney+",
     40,
     "0,20",
     "20%"
    ],
    [
     "Prime Video",
     30,
     "0,15",
     "15%"
    ],
    [
     "Total",
     200,
     "1,00",
     "100%"
    ]
   ],
   "N": 200
  },
  "ask": "¿Cuántos suscriptores NO prefieren Netflix?",
  "alts": [
   "$158$",
   "$97$",
   "$120$",
   "$62$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=200.",
  "pautaSteps": [
   "N - f(\\text{Netflix}) = 200 - 80 = 120"
  ],
  "conc": "El valor pedido es <b>120</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Streaming · Suscriptores",
  "enun": "Se encuestó a $n=200$ suscriptores sobre su plataforma de streaming preferida, obteniéndose la siguiente tabla de frecuencias:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Netflix",
     80,
     "0,40",
     "40%"
    ],
    [
     "HBO Max",
     50,
     "0,25",
     "25%"
    ],
    [
     "Disney+",
     40,
     "0,20",
     "20%"
    ],
    [
     "Prime Video",
     30,
     "0,15",
     "15%"
    ],
    [
     "Total",
     200,
     "1,00",
     "100%"
    ]
   ],
   "N": 200
  },
  "ask": "¿Qué porcentaje prefiere Prime Video?",
  "alts": [
   "$30\\%$",
   "$26\\%$",
   "$0\\%$",
   "$15\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=200.",
  "pautaSteps": [
   "\\dfrac{30}{200}\\times 100 = 15\\%"
  ],
  "conc": "El porcentaje pedido es <b>15%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Movilidad · Estacionamiento",
  "enun": "En un estacionamiento se registró el tipo de combustible de $n=150$ vehículos:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Bencina",
     90,
     "0,60",
     "60%"
    ],
    [
     "Diésel",
     30,
     "0,20",
     "20%"
    ],
    [
     "Eléctrico",
     15,
     "0,10",
     "10%"
    ],
    [
     "Híbrido",
     15,
     "0,10",
     "10%"
    ],
    [
     "Total",
     150,
     "1,00",
     "100%"
    ]
   ],
   "N": 150
  },
  "ask": "¿Cuántos vehículos son a bencina o a diésel?",
  "alts": [
   "$63$",
   "$120$",
   "$157$",
   "$98$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=150.",
  "pautaSteps": [
   "f(\\text{Bencina})+f(\\text{Diésel}) = 90+30 = 120"
  ],
  "conc": "El valor pedido es <b>120</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Movilidad · Estacionamiento",
  "enun": "En un estacionamiento se registró el tipo de combustible de $n=150$ vehículos:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Bencina",
     90,
     "0,60",
     "60%"
    ],
    [
     "Diésel",
     30,
     "0,20",
     "20%"
    ],
    [
     "Eléctrico",
     15,
     "0,10",
     "10%"
    ],
    [
     "Híbrido",
     15,
     "0,10",
     "10%"
    ],
    [
     "Total",
     150,
     "1,00",
     "100%"
    ]
   ],
   "N": 150
  },
  "ask": "¿Qué porcentaje corresponde a vehículos eléctricos o híbridos?",
  "alts": [
   "$20\\%$",
   "$47\\%$",
   "$25\\%$",
   "$0\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=150.",
  "pautaSteps": [
   "\\dfrac{15+15}{150}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Movilidad · Estacionamiento",
  "enun": "En un estacionamiento se registró el tipo de combustible de $n=150$ vehículos:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Bencina",
     90,
     "0,60",
     "60%"
    ],
    [
     "Diésel",
     30,
     "0,20",
     "20%"
    ],
    [
     "Eléctrico",
     15,
     "0,10",
     "10%"
    ],
    [
     "Híbrido",
     15,
     "0,10",
     "10%"
    ],
    [
     "Total",
     150,
     "1,00",
     "100%"
    ]
   ],
   "N": 150
  },
  "ask": "¿Cuántos vehículos NO son a bencina?",
  "alts": [
   "$83$",
   "$60$",
   "$48$",
   "$31$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=150.",
  "pautaSteps": [
   "N - f(\\text{Bencina}) = 150 - 90 = 60"
  ],
  "conc": "El valor pedido es <b>60</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Movilidad · Estacionamiento",
  "enun": "En un estacionamiento se registró el tipo de combustible de $n=150$ vehículos:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Bencina",
     90,
     "0,60",
     "60%"
    ],
    [
     "Diésel",
     30,
     "0,20",
     "20%"
    ],
    [
     "Eléctrico",
     15,
     "0,10",
     "10%"
    ],
    [
     "Híbrido",
     15,
     "0,10",
     "10%"
    ],
    [
     "Total",
     150,
     "1,00",
     "100%"
    ]
   ],
   "N": 150
  },
  "ask": "¿Qué porcentaje de vehículos es a diésel?",
  "alts": [
   "$8\\%$",
   "$59\\%$",
   "$20\\%$",
   "$29\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=150.",
  "pautaSteps": [
   "\\dfrac{30}{150}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Salud · Alergias alimentarias",
  "enun": "Una clínica registró el alérgeno alimentario reportado por $n=120$ pacientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Ninguno",
     60,
     "0,50",
     "50%"
    ],
    [
     "Lácteos",
     24,
     "0,20",
     "20%"
    ],
    [
     "Gluten",
     18,
     "0,15",
     "15%"
    ],
    [
     "Maní",
     12,
     "0,10",
     "10%"
    ],
    [
     "Mariscos",
     6,
     "0,05",
     "5%"
    ],
    [
     "Total",
     120,
     "1,00",
     "100%"
    ]
   ],
   "N": 120
  },
  "ask": "¿Cuántos pacientes reportan algún alérgeno (es decir, NO \"Ninguno\")?",
  "alts": [
   "$49$",
   "$32$",
   "$60$",
   "$82$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=120.",
  "pautaSteps": [
   "N - f(\\text{Ninguno}) = 120 - 60 = 60"
  ],
  "conc": "El valor pedido es <b>60</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Salud · Alergias alimentarias",
  "enun": "Una clínica registró el alérgeno alimentario reportado por $n=120$ pacientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Ninguno",
     60,
     "0,50",
     "50%"
    ],
    [
     "Lácteos",
     24,
     "0,20",
     "20%"
    ],
    [
     "Gluten",
     18,
     "0,15",
     "15%"
    ],
    [
     "Maní",
     12,
     "0,10",
     "10%"
    ],
    [
     "Mariscos",
     6,
     "0,05",
     "5%"
    ],
    [
     "Total",
     120,
     "1,00",
     "100%"
    ]
   ],
   "N": 120
  },
  "ask": "¿Qué porcentaje reporta alergia a lácteos o a gluten?",
  "alts": [
   "$35\\%$",
   "$48\\%$",
   "$15\\%$",
   "$56\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=120.",
  "pautaSteps": [
   "\\dfrac{24+18}{120}\\times 100 = 35\\%"
  ],
  "conc": "El porcentaje pedido es <b>35%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Salud · Alergias alimentarias",
  "enun": "Una clínica registró el alérgeno alimentario reportado por $n=120$ pacientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Ninguno",
     60,
     "0,50",
     "50%"
    ],
    [
     "Lácteos",
     24,
     "0,20",
     "20%"
    ],
    [
     "Gluten",
     18,
     "0,15",
     "15%"
    ],
    [
     "Maní",
     12,
     "0,10",
     "10%"
    ],
    [
     "Mariscos",
     6,
     "0,05",
     "5%"
    ],
    [
     "Total",
     120,
     "1,00",
     "100%"
    ]
   ],
   "N": 120
  },
  "ask": "¿Cuántos pacientes reportan alergia a maní o a mariscos?",
  "alts": [
   "$4$",
   "$14$",
   "$27$",
   "$18$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=120.",
  "pautaSteps": [
   "f(\\text{Maní})+f(\\text{Mariscos}) = 12+6 = 18"
  ],
  "conc": "El valor pedido es <b>18</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Salud · Alergias alimentarias",
  "enun": "Una clínica registró el alérgeno alimentario reportado por $n=120$ pacientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Ninguno",
     60,
     "0,50",
     "50%"
    ],
    [
     "Lácteos",
     24,
     "0,20",
     "20%"
    ],
    [
     "Gluten",
     18,
     "0,15",
     "15%"
    ],
    [
     "Maní",
     12,
     "0,10",
     "10%"
    ],
    [
     "Mariscos",
     6,
     "0,05",
     "5%"
    ],
    [
     "Total",
     120,
     "1,00",
     "100%"
    ]
   ],
   "N": 120
  },
  "ask": "¿Qué porcentaje no reporta ningún alérgeno?",
  "alts": [
   "$83\\%$",
   "$50\\%$",
   "$22\\%$",
   "$57\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=120.",
  "pautaSteps": [
   "\\dfrac{60}{120}\\times 100 = 50\\%"
  ],
  "conc": "El porcentaje pedido es <b>50%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Mascotas · Refugio",
  "enun": "Un refugio registró la raza de $n=80$ perros adoptados:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Mestizo",
     32,
     "0,400",
     "40,0%"
    ],
    [
     "Labrador",
     16,
     "0,200",
     "20,0%"
    ],
    [
     "Poodle",
     12,
     "0,150",
     "15,0%"
    ],
    [
     "Bulldog",
     10,
     "0,125",
     "12,5%"
    ],
    [
     "Chihuahua",
     10,
     "0,125",
     "12,5%"
    ],
    [
     "Total",
     80,
     "1,00",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos perros adoptados son mestizos?",
  "alts": [
   "$32$",
   "$13$",
   "$22$",
   "$44$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=80.",
  "pautaSteps": [
   "f(\\text{Mestizo}) = 32"
  ],
  "conc": "El valor pedido es <b>32</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Mascotas · Refugio",
  "enun": "Un refugio registró la raza de $n=80$ perros adoptados:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Mestizo",
     32,
     "0,400",
     "40,0%"
    ],
    [
     "Labrador",
     16,
     "0,200",
     "20,0%"
    ],
    [
     "Poodle",
     12,
     "0,150",
     "15,0%"
    ],
    [
     "Bulldog",
     10,
     "0,125",
     "12,5%"
    ],
    [
     "Chihuahua",
     10,
     "0,125",
     "12,5%"
    ],
    [
     "Total",
     80,
     "1,00",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Qué porcentaje corresponde a labrador o poodle?",
  "alts": [
   "$19\\%$",
   "$35\\%$",
   "$46\\%$",
   "$50\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=80.",
  "pautaSteps": [
   "\\dfrac{16+12}{80}\\times 100 = 35\\%"
  ],
  "conc": "El porcentaje pedido es <b>35%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Mascotas · Refugio",
  "enun": "Un refugio registró la raza de $n=80$ perros adoptados:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Mestizo",
     32,
     "0,400",
     "40,0%"
    ],
    [
     "Labrador",
     16,
     "0,200",
     "20,0%"
    ],
    [
     "Poodle",
     12,
     "0,150",
     "15,0%"
    ],
    [
     "Bulldog",
     10,
     "0,125",
     "12,5%"
    ],
    [
     "Chihuahua",
     10,
     "0,125",
     "12,5%"
    ],
    [
     "Total",
     80,
     "1,00",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos perros NO son mestizos?",
  "alts": [
   "$63$",
   "$37$",
   "$24$",
   "$48$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=80.",
  "pautaSteps": [
   "N - f(\\text{Mestizo}) = 80 - 32 = 48"
  ],
  "conc": "El valor pedido es <b>48</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Mascotas · Refugio",
  "enun": "Un refugio registró la raza de $n=80$ perros adoptados:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Mestizo",
     32,
     "0,400",
     "40,0%"
    ],
    [
     "Labrador",
     16,
     "0,200",
     "20,0%"
    ],
    [
     "Poodle",
     12,
     "0,150",
     "15,0%"
    ],
    [
     "Bulldog",
     10,
     "0,125",
     "12,5%"
    ],
    [
     "Chihuahua",
     10,
     "0,125",
     "12,5%"
    ],
    [
     "Total",
     80,
     "1,00",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos perros son bulldog o chihuahua?",
  "alts": [
   "$24$",
   "$34$",
   "$20$",
   "$11$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=80.",
  "pautaSteps": [
   "f(\\text{Bulldog})+f(\\text{Chihuahua}) = 10+10 = 20"
  ],
  "conc": "El valor pedido es <b>20</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Canales de venta",
  "enun": "Una empresa registró el canal de venta usado por $n=250$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Tienda física",
     100,
     "0,40",
     "40%"
    ],
    [
     "Sitio web",
     75,
     "0,30",
     "30%"
    ],
    [
     "App móvil",
     50,
     "0,20",
     "20%"
    ],
    [
     "Teléfono",
     25,
     "0,10",
     "10%"
    ],
    [
     "Total",
     250,
     "1,00",
     "100%"
    ]
   ],
   "N": 250
  },
  "ask": "¿Cuántos clientes compraron por sitio web o por app móvil?",
  "alts": [
   "$125$",
   "$103$",
   "$168$",
   "$66$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=250.",
  "pautaSteps": [
   "f(\\text{Sitio web})+f(\\text{App móvil}) = 75+50 = 125"
  ],
  "conc": "El valor pedido es <b>125</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Canales de venta",
  "enun": "Una empresa registró el canal de venta usado por $n=250$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Tienda física",
     100,
     "0,40",
     "40%"
    ],
    [
     "Sitio web",
     75,
     "0,30",
     "30%"
    ],
    [
     "App móvil",
     50,
     "0,20",
     "20%"
    ],
    [
     "Teléfono",
     25,
     "0,10",
     "10%"
    ],
    [
     "Total",
     250,
     "1,00",
     "100%"
    ]
   ],
   "N": 250
  },
  "ask": "¿Qué porcentaje compró en tienda física?",
  "alts": [
   "$49\\%$",
   "$79\\%$",
   "$28\\%$",
   "$40\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=250.",
  "pautaSteps": [
   "\\dfrac{100}{250}\\times 100 = 40\\%"
  ],
  "conc": "El porcentaje pedido es <b>40%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Canales de venta",
  "enun": "Una empresa registró el canal de venta usado por $n=250$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Tienda física",
     100,
     "0,40",
     "40%"
    ],
    [
     "Sitio web",
     75,
     "0,30",
     "30%"
    ],
    [
     "App móvil",
     50,
     "0,20",
     "20%"
    ],
    [
     "Teléfono",
     25,
     "0,10",
     "10%"
    ],
    [
     "Total",
     250,
     "1,00",
     "100%"
    ]
   ],
   "N": 250
  },
  "ask": "¿Cuántos clientes NO compraron en tienda física?",
  "alts": [
   "$200$",
   "$150$",
   "$80$",
   "$125$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=250.",
  "pautaSteps": [
   "N - f(\\text{Tienda física}) = 250 - 100 = 150"
  ],
  "conc": "El valor pedido es <b>150</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Canales de venta",
  "enun": "Una empresa registró el canal de venta usado por $n=250$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Tienda física",
     100,
     "0,40",
     "40%"
    ],
    [
     "Sitio web",
     75,
     "0,30",
     "30%"
    ],
    [
     "App móvil",
     50,
     "0,20",
     "20%"
    ],
    [
     "Teléfono",
     25,
     "0,10",
     "10%"
    ],
    [
     "Total",
     250,
     "1,00",
     "100%"
    ]
   ],
   "N": 250
  },
  "ask": "¿Cuántos clientes compraron por teléfono?",
  "alts": [
   "$25$",
   "$40$",
   "$33$",
   "$16$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=250.",
  "pautaSteps": [
   "f(\\text{Teléfono}) = 25"
  ],
  "conc": "El valor pedido es <b>25</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Banca · Tipos de cuenta",
  "enun": "Un banco registró el tipo de cuenta de $n=180$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Cuenta vista",
     90,
     "0,50",
     "50%"
    ],
    [
     "Cuenta corriente",
     54,
     "0,30",
     "30%"
    ],
    [
     "Cuenta ahorro",
     36,
     "0,20",
     "20%"
    ],
    [
     "Total",
     180,
     "1,00",
     "100%"
    ]
   ],
   "N": 180
  },
  "ask": "¿Cuántos clientes tienen cuenta vista?",
  "alts": [
   "$121$",
   "$90$",
   "$75$",
   "$43$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=180.",
  "pautaSteps": [
   "f(\\text{Cuenta vista}) = 90"
  ],
  "conc": "El valor pedido es <b>90</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Banca · Tipos de cuenta",
  "enun": "Un banco registró el tipo de cuenta de $n=180$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Cuenta vista",
     90,
     "0,50",
     "50%"
    ],
    [
     "Cuenta corriente",
     54,
     "0,30",
     "30%"
    ],
    [
     "Cuenta ahorro",
     36,
     "0,20",
     "20%"
    ],
    [
     "Total",
     180,
     "1,00",
     "100%"
    ]
   ],
   "N": 180
  },
  "ask": "¿Qué porcentaje tiene cuenta corriente o cuenta ahorro?",
  "alts": [
   "$22\\%$",
   "$57\\%$",
   "$83\\%$",
   "$50\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=180.",
  "pautaSteps": [
   "\\dfrac{54+36}{180}\\times 100 = 50\\%"
  ],
  "conc": "El porcentaje pedido es <b>50%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Banca · Tipos de cuenta",
  "enun": "Un banco registró el tipo de cuenta de $n=180$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Cuenta vista",
     90,
     "0,50",
     "50%"
    ],
    [
     "Cuenta corriente",
     54,
     "0,30",
     "30%"
    ],
    [
     "Cuenta ahorro",
     36,
     "0,20",
     "20%"
    ],
    [
     "Total",
     180,
     "1,00",
     "100%"
    ]
   ],
   "N": 180
  },
  "ask": "¿Cuántos clientes NO tienen cuenta vista?",
  "alts": [
   "$44$",
   "$120$",
   "$90$",
   "$71$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=180.",
  "pautaSteps": [
   "N - f(\\text{Cuenta vista}) = 180 - 90 = 90"
  ],
  "conc": "El valor pedido es <b>90</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Banca · Tipos de cuenta",
  "enun": "Un banco registró el tipo de cuenta de $n=180$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Cuenta vista",
     90,
     "0,50",
     "50%"
    ],
    [
     "Cuenta corriente",
     54,
     "0,30",
     "30%"
    ],
    [
     "Cuenta ahorro",
     36,
     "0,20",
     "20%"
    ],
    [
     "Total",
     180,
     "1,00",
     "100%"
    ]
   ],
   "N": 180
  },
  "ask": "¿Cuántos clientes tienen cuenta ahorro?",
  "alts": [
   "$36$",
   "$43$",
   "$52$",
   "$22$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=180.",
  "pautaSteps": [
   "f(\\text{Cuenta ahorro}) = 36"
  ],
  "conc": "El valor pedido es <b>36</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Biblioteca · Géneros literarios",
  "enun": "Una biblioteca registró el género literario preferido por $n=140$ lectores:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Novela",
     56,
     "0,40",
     "40%"
    ],
    [
     "Cómic",
     28,
     "0,20",
     "20%"
    ],
    [
     "Ensayo",
     21,
     "0,15",
     "15%"
    ],
    [
     "Poesía",
     21,
     "0,15",
     "15%"
    ],
    [
     "Infantil",
     14,
     "0,10",
     "10%"
    ],
    [
     "Total",
     140,
     "1,00",
     "100%"
    ]
   ],
   "N": 140
  },
  "ask": "¿Cuántos lectores prefieren novela o cómic?",
  "alts": [
   "$67$",
   "$42$",
   "$111$",
   "$84$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=140.",
  "pautaSteps": [
   "f(\\text{Novela})+f(\\text{Cómic}) = 56+28 = 84"
  ],
  "conc": "El valor pedido es <b>84</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Biblioteca · Géneros literarios",
  "enun": "Una biblioteca registró el género literario preferido por $n=140$ lectores:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Novela",
     56,
     "0,40",
     "40%"
    ],
    [
     "Cómic",
     28,
     "0,20",
     "20%"
    ],
    [
     "Ensayo",
     21,
     "0,15",
     "15%"
    ],
    [
     "Poesía",
     21,
     "0,15",
     "15%"
    ],
    [
     "Infantil",
     14,
     "0,10",
     "10%"
    ],
    [
     "Total",
     140,
     "1,00",
     "100%"
    ]
   ],
   "N": 140
  },
  "ask": "¿Qué porcentaje prefiere ensayo?",
  "alts": [
   "$0\\%$",
   "$15\\%$",
   "$42\\%$",
   "$20\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=140.",
  "pautaSteps": [
   "\\dfrac{21}{140}\\times 100 = 15\\%"
  ],
  "conc": "El porcentaje pedido es <b>15%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Biblioteca · Géneros literarios",
  "enun": "Una biblioteca registró el género literario preferido por $n=140$ lectores:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Novela",
     56,
     "0,40",
     "40%"
    ],
    [
     "Cómic",
     28,
     "0,20",
     "20%"
    ],
    [
     "Ensayo",
     21,
     "0,15",
     "15%"
    ],
    [
     "Poesía",
     21,
     "0,15",
     "15%"
    ],
    [
     "Infantil",
     14,
     "0,10",
     "10%"
    ],
    [
     "Total",
     140,
     "1,00",
     "100%"
    ]
   ],
   "N": 140
  },
  "ask": "¿Cuántos lectores NO prefieren novela?",
  "alts": [
   "$84$",
   "$43$",
   "$68$",
   "$115$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=140.",
  "pautaSteps": [
   "N - f(\\text{Novela}) = 140 - 56 = 84"
  ],
  "conc": "El valor pedido es <b>84</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Biblioteca · Géneros literarios",
  "enun": "Una biblioteca registró el género literario preferido por $n=140$ lectores:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Novela",
     56,
     "0,40",
     "40%"
    ],
    [
     "Cómic",
     28,
     "0,20",
     "20%"
    ],
    [
     "Ensayo",
     21,
     "0,15",
     "15%"
    ],
    [
     "Poesía",
     21,
     "0,15",
     "15%"
    ],
    [
     "Infantil",
     14,
     "0,10",
     "10%"
    ],
    [
     "Total",
     140,
     "1,00",
     "100%"
    ]
   ],
   "N": 140
  },
  "ask": "¿Cuántos lectores prefieren poesía o infantil?",
  "alts": [
   "$45$",
   "$23$",
   "$35$",
   "$54$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=140.",
  "pautaSteps": [
   "f(\\text{Poesía})+f(\\text{Infantil}) = 21+14 = 35"
  ],
  "conc": "El valor pedido es <b>35</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Turismo · Hotel",
  "enun": "Un hotel registró el país de origen de $n=200$ turistas hospedados:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Argentino",
     70,
     "0,35",
     "35%"
    ],
    [
     "Brasileño",
     50,
     "0,25",
     "25%"
    ],
    [
     "Peruano",
     40,
     "0,20",
     "20%"
    ],
    [
     "Otro",
     40,
     "0,20",
     "20%"
    ],
    [
     "Total",
     200,
     "1,00",
     "100%"
    ]
   ],
   "N": 200
  },
  "ask": "¿Cuántos turistas son argentinos o brasileños?",
  "alts": [
   "$160$",
   "$100$",
   "$65$",
   "$120$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=200.",
  "pautaSteps": [
   "f(\\text{Argentino})+f(\\text{Brasileño}) = 70+50 = 120"
  ],
  "conc": "El valor pedido es <b>120</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Turismo · Hotel",
  "enun": "Un hotel registró el país de origen de $n=200$ turistas hospedados:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Argentino",
     70,
     "0,35",
     "35%"
    ],
    [
     "Brasileño",
     50,
     "0,25",
     "25%"
    ],
    [
     "Peruano",
     40,
     "0,20",
     "20%"
    ],
    [
     "Otro",
     40,
     "0,20",
     "20%"
    ],
    [
     "Total",
     200,
     "1,00",
     "100%"
    ]
   ],
   "N": 200
  },
  "ask": "¿Qué porcentaje es peruano?",
  "alts": [
   "$41\\%$",
   "$0\\%$",
   "$20\\%$",
   "$33\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=200.",
  "pautaSteps": [
   "\\dfrac{40}{200}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Turismo · Hotel",
  "enun": "Un hotel registró el país de origen de $n=200$ turistas hospedados:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Argentino",
     70,
     "0,35",
     "35%"
    ],
    [
     "Brasileño",
     50,
     "0,25",
     "25%"
    ],
    [
     "Peruano",
     40,
     "0,20",
     "20%"
    ],
    [
     "Otro",
     40,
     "0,20",
     "20%"
    ],
    [
     "Total",
     200,
     "1,00",
     "100%"
    ]
   ],
   "N": 200
  },
  "ask": "¿Cuántos turistas NO son argentinos?",
  "alts": [
   "$130$",
   "$109$",
   "$65$",
   "$173$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=200.",
  "pautaSteps": [
   "N - f(\\text{Argentino}) = 200 - 70 = 130"
  ],
  "conc": "El valor pedido es <b>130</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Turismo · Hotel",
  "enun": "Un hotel registró el país de origen de $n=200$ turistas hospedados:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Argentino",
     70,
     "0,35",
     "35%"
    ],
    [
     "Brasileño",
     50,
     "0,25",
     "25%"
    ],
    [
     "Peruano",
     40,
     "0,20",
     "20%"
    ],
    [
     "Otro",
     40,
     "0,20",
     "20%"
    ],
    [
     "Total",
     200,
     "1,00",
     "100%"
    ]
   ],
   "N": 200
  },
  "ask": "¿Cuántos turistas corresponden a la categoría \"Otro\"?",
  "alts": [
   "$49$",
   "$40$",
   "$23$",
   "$60$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=200.",
  "pautaSteps": [
   "f(\\text{Otro}) = 40"
  ],
  "conc": "El valor pedido es <b>40</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Hogar · Calefacción",
  "enun": "Se registró el tipo de energía usada para calefacción en $n=160$ hogares:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Gas",
     64,
     "0,40",
     "40%"
    ],
    [
     "Electricidad",
     48,
     "0,30",
     "30%"
    ],
    [
     "Leña",
     32,
     "0,20",
     "20%"
    ],
    [
     "Parafina",
     16,
     "0,10",
     "10%"
    ],
    [
     "Total",
     160,
     "1,00",
     "100%"
    ]
   ],
   "N": 160
  },
  "ask": "¿Cuántos hogares usan gas o electricidad?",
  "alts": [
   "$148$",
   "$57$",
   "$90$",
   "$112$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=160.",
  "pautaSteps": [
   "f(\\text{Gas})+f(\\text{Electricidad}) = 64+48 = 112"
  ],
  "conc": "El valor pedido es <b>112</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Hogar · Calefacción",
  "enun": "Se registró el tipo de energía usada para calefacción en $n=160$ hogares:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Gas",
     64,
     "0,40",
     "40%"
    ],
    [
     "Electricidad",
     48,
     "0,30",
     "30%"
    ],
    [
     "Leña",
     32,
     "0,20",
     "20%"
    ],
    [
     "Parafina",
     16,
     "0,10",
     "10%"
    ],
    [
     "Total",
     160,
     "1,00",
     "100%"
    ]
   ],
   "N": 160
  },
  "ask": "¿Qué porcentaje usa leña?",
  "alts": [
   "$20\\%$",
   "$35\\%$",
   "$31\\%$",
   "$4\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=160.",
  "pautaSteps": [
   "\\dfrac{32}{160}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Hogar · Calefacción",
  "enun": "Se registró el tipo de energía usada para calefacción en $n=160$ hogares:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Gas",
     64,
     "0,40",
     "40%"
    ],
    [
     "Electricidad",
     48,
     "0,30",
     "30%"
    ],
    [
     "Leña",
     32,
     "0,20",
     "20%"
    ],
    [
     "Parafina",
     16,
     "0,10",
     "10%"
    ],
    [
     "Total",
     160,
     "1,00",
     "100%"
    ]
   ],
   "N": 160
  },
  "ask": "¿Cuántos hogares NO usan gas?",
  "alts": [
   "$78$",
   "$125$",
   "$96$",
   "$51$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=160.",
  "pautaSteps": [
   "N - f(\\text{Gas}) = 160 - 64 = 96"
  ],
  "conc": "El valor pedido es <b>96</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Hogar · Calefacción",
  "enun": "Se registró el tipo de energía usada para calefacción en $n=160$ hogares:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Gas",
     64,
     "0,40",
     "40%"
    ],
    [
     "Electricidad",
     48,
     "0,30",
     "30%"
    ],
    [
     "Leña",
     32,
     "0,20",
     "20%"
    ],
    [
     "Parafina",
     16,
     "0,10",
     "10%"
    ],
    [
     "Total",
     160,
     "1,00",
     "100%"
    ]
   ],
   "N": 160
  },
  "ask": "¿Cuántos hogares usan parafina?",
  "alts": [
   "$9$",
   "$19$",
   "$27$",
   "$16$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=160.",
  "pautaSteps": [
   "f(\\text{Parafina}) = 16"
  ],
  "conc": "El valor pedido es <b>16</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Servicio técnico celulares",
  "enun": "Un servicio técnico de celulares registró el motivo de consulta de $n=100$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Pantalla",
     35,
     "0,35",
     "35%"
    ],
    [
     "Batería",
     25,
     "0,25",
     "25%"
    ],
    [
     "Software",
     20,
     "0,20",
     "20%"
    ],
    [
     "Cámara",
     12,
     "0,12",
     "12%"
    ],
    [
     "Otro",
     8,
     "0,08",
     "8%"
    ],
    [
     "Total",
     100,
     "1,00",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos clientes consultaron por pantalla o por batería?",
  "alts": [
   "$31$",
   "$60$",
   "$83$",
   "$48$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=100.",
  "pautaSteps": [
   "f(\\text{Pantalla})+f(\\text{Batería}) = 35+25 = 60"
  ],
  "conc": "El valor pedido es <b>60</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Servicio técnico celulares",
  "enun": "Un servicio técnico de celulares registró el motivo de consulta de $n=100$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Pantalla",
     35,
     "0,35",
     "35%"
    ],
    [
     "Batería",
     25,
     "0,25",
     "25%"
    ],
    [
     "Software",
     20,
     "0,20",
     "20%"
    ],
    [
     "Cámara",
     12,
     "0,12",
     "12%"
    ],
    [
     "Otro",
     8,
     "0,08",
     "8%"
    ],
    [
     "Total",
     100,
     "1,00",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Qué porcentaje consultó por software?",
  "alts": [
   "$20\\%$",
   "$29\\%$",
   "$59\\%$",
   "$8\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=100.",
  "pautaSteps": [
   "\\dfrac{20}{100}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Servicio técnico celulares",
  "enun": "Un servicio técnico de celulares registró el motivo de consulta de $n=100$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Pantalla",
     35,
     "0,35",
     "35%"
    ],
    [
     "Batería",
     25,
     "0,25",
     "25%"
    ],
    [
     "Software",
     20,
     "0,20",
     "20%"
    ],
    [
     "Cámara",
     12,
     "0,12",
     "12%"
    ],
    [
     "Otro",
     8,
     "0,08",
     "8%"
    ],
    [
     "Total",
     100,
     "1,00",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos clientes NO consultaron por pantalla?",
  "alts": [
   "$89$",
   "$65$",
   "$53$",
   "$34$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=100.",
  "pautaSteps": [
   "N - f(\\text{Pantalla}) = 100 - 35 = 65"
  ],
  "conc": "El valor pedido es <b>65</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Servicio técnico celulares",
  "enun": "Un servicio técnico de celulares registró el motivo de consulta de $n=100$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Pantalla",
     35,
     "0,35",
     "35%"
    ],
    [
     "Batería",
     25,
     "0,25",
     "25%"
    ],
    [
     "Software",
     20,
     "0,20",
     "20%"
    ],
    [
     "Cámara",
     12,
     "0,12",
     "12%"
    ],
    [
     "Otro",
     8,
     "0,08",
     "8%"
    ],
    [
     "Total",
     100,
     "1,00",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos consultaron por cámara u otro motivo?",
  "alts": [
   "$13$",
   "$32$",
   "$27$",
   "$20$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=100.",
  "pautaSteps": [
   "f(\\text{Cámara})+f(\\text{Otro}) = 12+8 = 20"
  ],
  "conc": "El valor pedido es <b>20</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Zapatillas deportivas",
  "enun": "Una tienda deportiva registró la marca de zapatillas comprada por $n=220$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Nike",
     88,
     "0,40",
     "40%"
    ],
    [
     "Adidas",
     66,
     "0,30",
     "30%"
    ],
    [
     "Puma",
     33,
     "0,15",
     "15%"
    ],
    [
     "Reebok",
     22,
     "0,10",
     "10%"
    ],
    [
     "Otra",
     11,
     "0,05",
     "5%"
    ],
    [
     "Total",
     220,
     "1,00",
     "100%"
    ]
   ],
   "N": 220
  },
  "ask": "¿Cuántos clientes compraron Nike o Adidas?",
  "alts": [
   "$154$",
   "$203$",
   "$80$",
   "$130$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=220.",
  "pautaSteps": [
   "f(\\text{Nike})+f(\\text{Adidas}) = 88+66 = 154"
  ],
  "conc": "El valor pedido es <b>154</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Zapatillas deportivas",
  "enun": "Una tienda deportiva registró la marca de zapatillas comprada por $n=220$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Nike",
     88,
     "0,40",
     "40%"
    ],
    [
     "Adidas",
     66,
     "0,30",
     "30%"
    ],
    [
     "Puma",
     33,
     "0,15",
     "15%"
    ],
    [
     "Reebok",
     22,
     "0,10",
     "10%"
    ],
    [
     "Otra",
     11,
     "0,05",
     "5%"
    ],
    [
     "Total",
     220,
     "1,00",
     "100%"
    ]
   ],
   "N": 220
  },
  "ask": "¿Qué porcentaje compró Puma?",
  "alts": [
   "$22\\%$",
   "$0\\%$",
   "$15\\%$",
   "$48\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=220.",
  "pautaSteps": [
   "\\dfrac{33}{220}\\times 100 = 15\\%"
  ],
  "conc": "El porcentaje pedido es <b>15%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Zapatillas deportivas",
  "enun": "Una tienda deportiva registró la marca de zapatillas comprada por $n=220$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Nike",
     88,
     "0,40",
     "40%"
    ],
    [
     "Adidas",
     66,
     "0,30",
     "30%"
    ],
    [
     "Puma",
     33,
     "0,15",
     "15%"
    ],
    [
     "Reebok",
     22,
     "0,10",
     "10%"
    ],
    [
     "Otra",
     11,
     "0,05",
     "5%"
    ],
    [
     "Total",
     220,
     "1,00",
     "100%"
    ]
   ],
   "N": 220
  },
  "ask": "¿Cuántos clientes NO compraron Nike?",
  "alts": [
   "$174$",
   "$107$",
   "$68$",
   "$132$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=220.",
  "pautaSteps": [
   "N - f(\\text{Nike}) = 220 - 88 = 132"
  ],
  "conc": "El valor pedido es <b>132</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Zapatillas deportivas",
  "enun": "Una tienda deportiva registró la marca de zapatillas comprada por $n=220$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Nike",
     88,
     "0,40",
     "40%"
    ],
    [
     "Adidas",
     66,
     "0,30",
     "30%"
    ],
    [
     "Puma",
     33,
     "0,15",
     "15%"
    ],
    [
     "Reebok",
     22,
     "0,10",
     "10%"
    ],
    [
     "Otra",
     11,
     "0,05",
     "5%"
    ],
    [
     "Total",
     220,
     "1,00",
     "100%"
    ]
   ],
   "N": 220
  },
  "ask": "¿Cuántos clientes compraron Reebok u otra marca?",
  "alts": [
   "$49$",
   "$33$",
   "$19$",
   "$40$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=220.",
  "pautaSteps": [
   "f(\\text{Reebok})+f(\\text{Otra}) = 22+11 = 33"
  ],
  "conc": "El valor pedido es <b>33</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Veterinaria · Especies atendidas",
  "enun": "Una clínica veterinaria registró la especie atendida en $n=130$ consultas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Perro",
     65,
     "0,50",
     "50%"
    ],
    [
     "Gato",
     39,
     "0,30",
     "30%"
    ],
    [
     "Ave",
     13,
     "0,10",
     "10%"
    ],
    [
     "Otro",
     13,
     "0,10",
     "10%"
    ],
    [
     "Total",
     130,
     "1,00",
     "100%"
    ]
   ],
   "N": 130
  },
  "ask": "¿Cuántas consultas fueron de perros?",
  "alts": [
   "$65$",
   "$51$",
   "$32$",
   "$86$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=130.",
  "pautaSteps": [
   "f(\\text{Perro}) = 65"
  ],
  "conc": "El valor pedido es <b>65</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Veterinaria · Especies atendidas",
  "enun": "Una clínica veterinaria registró la especie atendida en $n=130$ consultas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Perro",
     65,
     "0,50",
     "50%"
    ],
    [
     "Gato",
     39,
     "0,30",
     "30%"
    ],
    [
     "Ave",
     13,
     "0,10",
     "10%"
    ],
    [
     "Otro",
     13,
     "0,10",
     "10%"
    ],
    [
     "Total",
     130,
     "1,00",
     "100%"
    ]
   ],
   "N": 130
  },
  "ask": "¿Qué porcentaje fue de gatos o aves?",
  "alts": [
   "$16\\%$",
   "$40\\%$",
   "$45\\%$",
   "$67\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=130.",
  "pautaSteps": [
   "\\dfrac{39+13}{130}\\times 100 = 40\\%"
  ],
  "conc": "El porcentaje pedido es <b>40%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Veterinaria · Especies atendidas",
  "enun": "Una clínica veterinaria registró la especie atendida en $n=130$ consultas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Perro",
     65,
     "0,50",
     "50%"
    ],
    [
     "Gato",
     39,
     "0,30",
     "30%"
    ],
    [
     "Ave",
     13,
     "0,10",
     "10%"
    ],
    [
     "Otro",
     13,
     "0,10",
     "10%"
    ],
    [
     "Total",
     130,
     "1,00",
     "100%"
    ]
   ],
   "N": 130
  },
  "ask": "¿Cuántas consultas NO fueron de perros?",
  "alts": [
   "$33$",
   "$90$",
   "$52$",
   "$65$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=130.",
  "pautaSteps": [
   "N - f(\\text{Perro}) = 130 - 65 = 65"
  ],
  "conc": "El valor pedido es <b>65</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Veterinaria · Especies atendidas",
  "enun": "Una clínica veterinaria registró la especie atendida en $n=130$ consultas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Perro",
     65,
     "0,50",
     "50%"
    ],
    [
     "Gato",
     39,
     "0,30",
     "30%"
    ],
    [
     "Ave",
     13,
     "0,10",
     "10%"
    ],
    [
     "Otro",
     13,
     "0,10",
     "10%"
    ],
    [
     "Total",
     130,
     "1,00",
     "100%"
    ]
   ],
   "N": 130
  },
  "ask": "¿Cuántas consultas corresponden a \"Otro\"?",
  "alts": [
   "$7$",
   "$23$",
   "$13$",
   "$20$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=130.",
  "pautaSteps": [
   "f(\\text{Otro}) = 13"
  ],
  "conc": "El valor pedido es <b>13</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Viajes · Aerolíneas",
  "enun": "Una agencia de viajes registró la aerolínea utilizada por $n=90$ pasajeros:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "LATAM",
     45,
     "0,50",
     "50%"
    ],
    [
     "Sky",
     18,
     "0,20",
     "20%"
    ],
    [
     "JetSmart",
     18,
     "0,20",
     "20%"
    ],
    [
     "Otra",
     9,
     "0,10",
     "10%"
    ],
    [
     "Total",
     90,
     "1,00",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántos pasajeros volaron con LATAM o Sky?",
  "alts": [
   "$52$",
   "$35$",
   "$63$",
   "$85$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=90.",
  "pautaSteps": [
   "f(\\text{LATAM})+f(\\text{Sky}) = 45+18 = 63"
  ],
  "conc": "El valor pedido es <b>63</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Viajes · Aerolíneas",
  "enun": "Una agencia de viajes registró la aerolínea utilizada por $n=90$ pasajeros:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "LATAM",
     45,
     "0,50",
     "50%"
    ],
    [
     "Sky",
     18,
     "0,20",
     "20%"
    ],
    [
     "JetSmart",
     18,
     "0,20",
     "20%"
    ],
    [
     "Otra",
     9,
     "0,10",
     "10%"
    ],
    [
     "Total",
     90,
     "1,00",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Qué porcentaje voló con una aerolínea \"Otra\"?",
  "alts": [
   "$0\\%$",
   "$23\\%$",
   "$10\\%$",
   "$31\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=90.",
  "pautaSteps": [
   "\\dfrac{9}{90}\\times 100 = 10\\%"
  ],
  "conc": "El porcentaje pedido es <b>10%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Viajes · Aerolíneas",
  "enun": "Una agencia de viajes registró la aerolínea utilizada por $n=90$ pasajeros:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "LATAM",
     45,
     "0,50",
     "50%"
    ],
    [
     "Sky",
     18,
     "0,20",
     "20%"
    ],
    [
     "JetSmart",
     18,
     "0,20",
     "20%"
    ],
    [
     "Otra",
     9,
     "0,10",
     "10%"
    ],
    [
     "Total",
     90,
     "1,00",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántos pasajeros NO volaron con LATAM?",
  "alts": [
   "$19$",
   "$45$",
   "$62$",
   "$37$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=90.",
  "pautaSteps": [
   "N - f(\\text{LATAM}) = 90 - 45 = 45"
  ],
  "conc": "El valor pedido es <b>45</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Viajes · Aerolíneas",
  "enun": "Una agencia de viajes registró la aerolínea utilizada por $n=90$ pasajeros:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "LATAM",
     45,
     "0,50",
     "50%"
    ],
    [
     "Sky",
     18,
     "0,20",
     "20%"
    ],
    [
     "JetSmart",
     18,
     "0,20",
     "20%"
    ],
    [
     "Otra",
     9,
     "0,10",
     "10%"
    ],
    [
     "Total",
     90,
     "1,00",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántos volaron con JetSmart u otra aerolínea?",
  "alts": [
   "$27$",
   "$34$",
   "$41$",
   "$14$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=90.",
  "pautaSteps": [
   "f(\\text{JetSmart})+f(\\text{Otra}) = 18+9 = 27"
  ],
  "conc": "El valor pedido es <b>27</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Categorías de producto",
  "enun": "Una tienda por departamento registró la categoría de producto más vendida en $n=300$ boletas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Ropa",
     120,
     "0,40",
     "40%"
    ],
    [
     "Calzado",
     90,
     "0,30",
     "30%"
    ],
    [
     "Accesorios",
     60,
     "0,20",
     "20%"
    ],
    [
     "Electrónica",
     30,
     "0,10",
     "10%"
    ],
    [
     "Total",
     300,
     "1,00",
     "100%"
    ]
   ],
   "N": 300
  },
  "ask": "¿Cuántas boletas incluyen ropa o calzado?",
  "alts": [
   "$276$",
   "$210$",
   "$173$",
   "$110$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=300.",
  "pautaSteps": [
   "f(\\text{Ropa})+f(\\text{Calzado}) = 120+90 = 210"
  ],
  "conc": "El valor pedido es <b>210</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Categorías de producto",
  "enun": "Una tienda por departamento registró la categoría de producto más vendida en $n=300$ boletas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Ropa",
     120,
     "0,40",
     "40%"
    ],
    [
     "Calzado",
     90,
     "0,30",
     "30%"
    ],
    [
     "Accesorios",
     60,
     "0,20",
     "20%"
    ],
    [
     "Electrónica",
     30,
     "0,10",
     "10%"
    ],
    [
     "Total",
     300,
     "1,00",
     "100%"
    ]
   ],
   "N": 300
  },
  "ask": "¿Qué porcentaje corresponde a accesorios?",
  "alts": [
   "$35\\%$",
   "$4\\%$",
   "$31\\%$",
   "$20\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=300.",
  "pautaSteps": [
   "\\dfrac{60}{300}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Categorías de producto",
  "enun": "Una tienda por departamento registró la categoría de producto más vendida en $n=300$ boletas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Ropa",
     120,
     "0,40",
     "40%"
    ],
    [
     "Calzado",
     90,
     "0,30",
     "30%"
    ],
    [
     "Accesorios",
     60,
     "0,20",
     "20%"
    ],
    [
     "Electrónica",
     30,
     "0,10",
     "10%"
    ],
    [
     "Total",
     300,
     "1,00",
     "100%"
    ]
   ],
   "N": 300
  },
  "ask": "¿Cuántas boletas NO corresponden a ropa?",
  "alts": [
   "$235$",
   "$96$",
   "$180$",
   "$149$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=300.",
  "pautaSteps": [
   "N - f(\\text{Ropa}) = 300 - 120 = 180"
  ],
  "conc": "El valor pedido es <b>180</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Retail · Categorías de producto",
  "enun": "Una tienda por departamento registró la categoría de producto más vendida en $n=300$ boletas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Ropa",
     120,
     "0,40",
     "40%"
    ],
    [
     "Calzado",
     90,
     "0,30",
     "30%"
    ],
    [
     "Accesorios",
     60,
     "0,20",
     "20%"
    ],
    [
     "Electrónica",
     30,
     "0,10",
     "10%"
    ],
    [
     "Total",
     300,
     "1,00",
     "100%"
    ]
   ],
   "N": 300
  },
  "ask": "¿Cuántas boletas corresponden a electrónica?",
  "alts": [
   "$36$",
   "$50$",
   "$30$",
   "$17$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=300.",
  "pautaSteps": [
   "f(\\text{Electrónica}) = 30"
  ],
  "conc": "El valor pedido es <b>30</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Salud · Pabellón quirúrgico",
  "enun": "Un pabellón quirúrgico registró el tipo de anestesia usada en $n=60$ cirugías:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "General",
     30,
     "0,50",
     "50%"
    ],
    [
     "Local",
     15,
     "0,25",
     "25%"
    ],
    [
     "Regional",
     9,
     "0,15",
     "15%"
    ],
    [
     "Sedación",
     6,
     "0,10",
     "10%"
    ],
    [
     "Total",
     60,
     "1,00",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántas cirugías usaron anestesia general?",
  "alts": [
   "$30$",
   "$22$",
   "$45$",
   "$13$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=60.",
  "pautaSteps": [
   "f(\\text{General}) = 30"
  ],
  "conc": "El valor pedido es <b>30</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Salud · Pabellón quirúrgico",
  "enun": "Un pabellón quirúrgico registró el tipo de anestesia usada en $n=60$ cirugías:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "General",
     30,
     "0,50",
     "50%"
    ],
    [
     "Local",
     15,
     "0,25",
     "25%"
    ],
    [
     "Regional",
     9,
     "0,15",
     "15%"
    ],
    [
     "Sedación",
     6,
     "0,10",
     "10%"
    ],
    [
     "Total",
     60,
     "1,00",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Qué porcentaje usó anestesia local o regional?",
  "alts": [
   "$49\\%$",
   "$79\\%$",
   "$28\\%$",
   "$40\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=60.",
  "pautaSteps": [
   "\\dfrac{15+9}{60}\\times 100 = 40\\%"
  ],
  "conc": "El porcentaje pedido es <b>40%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Salud · Pabellón quirúrgico",
  "enun": "Un pabellón quirúrgico registró el tipo de anestesia usada en $n=60$ cirugías:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "General",
     30,
     "0,50",
     "50%"
    ],
    [
     "Local",
     15,
     "0,25",
     "25%"
    ],
    [
     "Regional",
     9,
     "0,15",
     "15%"
    ],
    [
     "Sedación",
     6,
     "0,10",
     "10%"
    ],
    [
     "Total",
     60,
     "1,00",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántas cirugías NO usaron anestesia general?",
  "alts": [
   "$30$",
   "$23$",
   "$14$",
   "$44$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=60.",
  "pautaSteps": [
   "N - f(\\text{General}) = 60 - 30 = 30"
  ],
  "conc": "El valor pedido es <b>30</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Salud · Pabellón quirúrgico",
  "enun": "Un pabellón quirúrgico registró el tipo de anestesia usada en $n=60$ cirugías:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "General",
     30,
     "0,50",
     "50%"
    ],
    [
     "Local",
     15,
     "0,25",
     "25%"
    ],
    [
     "Regional",
     9,
     "0,15",
     "15%"
    ],
    [
     "Sedación",
     6,
     "0,10",
     "10%"
    ],
    [
     "Total",
     60,
     "1,00",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántas cirugías usaron sedación?",
  "alts": [
   "$3$",
   "$6$",
   "$11$",
   "$12$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=60.",
  "pautaSteps": [
   "f(\\text{Sedación}) = 6"
  ],
  "conc": "El valor pedido es <b>6</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Banca · Gasto con tarjeta de crédito",
  "enun": "Un banco registró la categoría de gasto principal en $n=400$ tarjetas de crédito:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Supermercado",
     160,
     "0,40",
     "40%"
    ],
    [
     "Restaurantes",
     100,
     "0,25",
     "25%"
    ],
    [
     "Vestuario",
     80,
     "0,20",
     "20%"
    ],
    [
     "Tecnología",
     60,
     "0,15",
     "15%"
    ],
    [
     "Total",
     400,
     "1,00",
     "100%"
    ]
   ],
   "N": 400
  },
  "ask": "¿Cuántas tarjetas gastan principalmente en supermercado o restaurantes?",
  "alts": [
   "$138$",
   "$341$",
   "$220$",
   "$260$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=400.",
  "pautaSteps": [
   "f(\\text{Supermercado})+f(\\text{Restaurantes}) = 160+100 = 260"
  ],
  "conc": "El valor pedido es <b>260</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Banca · Gasto con tarjeta de crédito",
  "enun": "Un banco registró la categoría de gasto principal en $n=400$ tarjetas de crédito:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Supermercado",
     160,
     "0,40",
     "40%"
    ],
    [
     "Restaurantes",
     100,
     "0,25",
     "25%"
    ],
    [
     "Vestuario",
     80,
     "0,20",
     "20%"
    ],
    [
     "Tecnología",
     60,
     "0,15",
     "15%"
    ],
    [
     "Total",
     400,
     "1,00",
     "100%"
    ]
   ],
   "N": 400
  },
  "ask": "¿Qué porcentaje gasta principalmente en vestuario?",
  "alts": [
   "$0\\%$",
   "$53\\%$",
   "$20\\%$",
   "$27\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=400.",
  "pautaSteps": [
   "\\dfrac{80}{400}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Banca · Gasto con tarjeta de crédito",
  "enun": "Un banco registró la categoría de gasto principal en $n=400$ tarjetas de crédito:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Supermercado",
     160,
     "0,40",
     "40%"
    ],
    [
     "Restaurantes",
     100,
     "0,25",
     "25%"
    ],
    [
     "Vestuario",
     80,
     "0,20",
     "20%"
    ],
    [
     "Tecnología",
     60,
     "0,15",
     "15%"
    ],
    [
     "Total",
     400,
     "1,00",
     "100%"
    ]
   ],
   "N": 400
  },
  "ask": "¿Cuántas tarjetas NO gastan principalmente en supermercado?",
  "alts": [
   "$199$",
   "$128$",
   "$240$",
   "$314$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=400.",
  "pautaSteps": [
   "N - f(\\text{Supermercado}) = 400 - 160 = 240"
  ],
  "conc": "El valor pedido es <b>240</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Banca · Gasto con tarjeta de crédito",
  "enun": "Un banco registró la categoría de gasto principal en $n=400$ tarjetas de crédito:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Supermercado",
     160,
     "0,40",
     "40%"
    ],
    [
     "Restaurantes",
     100,
     "0,25",
     "25%"
    ],
    [
     "Vestuario",
     80,
     "0,20",
     "20%"
    ],
    [
     "Tecnología",
     60,
     "0,15",
     "15%"
    ],
    [
     "Total",
     400,
     "1,00",
     "100%"
    ]
   ],
   "N": 400
  },
  "ask": "¿Cuántas gastan principalmente en tecnología?",
  "alts": [
   "$60$",
   "$71$",
   "$38$",
   "$88$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=400.",
  "pautaSteps": [
   "f(\\text{Tecnología}) = 60"
  ],
  "conc": "El valor pedido es <b>60</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Laboral · Ausentismo",
  "enun": "Una empresa registró el motivo de ausentismo laboral en $n=140$ casos:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Enfermedad",
     70,
     "0,50",
     "50%"
    ],
    [
     "Trámites personales",
     28,
     "0,20",
     "20%"
    ],
    [
     "Otro",
     28,
     "0,20",
     "20%"
    ],
    [
     "Accidente",
     14,
     "0,10",
     "10%"
    ],
    [
     "Total",
     140,
     "1,00",
     "100%"
    ]
   ],
   "N": 140
  },
  "ask": "¿Cuántos casos fueron por enfermedad?",
  "alts": [
   "$55$",
   "$34$",
   "$93$",
   "$70$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=140.",
  "pautaSteps": [
   "f(\\text{Enfermedad}) = 70"
  ],
  "conc": "El valor pedido es <b>70</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Laboral · Ausentismo",
  "enun": "Una empresa registró el motivo de ausentismo laboral en $n=140$ casos:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Enfermedad",
     70,
     "0,50",
     "50%"
    ],
    [
     "Trámites personales",
     28,
     "0,20",
     "20%"
    ],
    [
     "Otro",
     28,
     "0,20",
     "20%"
    ],
    [
     "Accidente",
     14,
     "0,10",
     "10%"
    ],
    [
     "Total",
     140,
     "1,00",
     "100%"
    ]
   ],
   "N": 140
  },
  "ask": "¿Qué porcentaje fue por trámites personales u otro motivo?",
  "alts": [
   "$40\\%$",
   "$16\\%$",
   "$67\\%$",
   "$45\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=140.",
  "pautaSteps": [
   "\\dfrac{28+28}{140}\\times 100 = 40\\%"
  ],
  "conc": "El porcentaje pedido es <b>40%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Laboral · Ausentismo",
  "enun": "Una empresa registró el motivo de ausentismo laboral en $n=140$ casos:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Enfermedad",
     70,
     "0,50",
     "50%"
    ],
    [
     "Trámites personales",
     28,
     "0,20",
     "20%"
    ],
    [
     "Otro",
     28,
     "0,20",
     "20%"
    ],
    [
     "Accidente",
     14,
     "0,10",
     "10%"
    ],
    [
     "Total",
     140,
     "1,00",
     "100%"
    ]
   ],
   "N": 140
  },
  "ask": "¿Cuántos casos NO fueron por enfermedad?",
  "alts": [
   "$35$",
   "$70$",
   "$56$",
   "$97$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=140.",
  "pautaSteps": [
   "N - f(\\text{Enfermedad}) = 140 - 70 = 70"
  ],
  "conc": "El valor pedido es <b>70</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Laboral · Ausentismo",
  "enun": "Una empresa registró el motivo de ausentismo laboral en $n=140$ casos:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Enfermedad",
     70,
     "0,50",
     "50%"
    ],
    [
     "Trámites personales",
     28,
     "0,20",
     "20%"
    ],
    [
     "Otro",
     28,
     "0,20",
     "20%"
    ],
    [
     "Accidente",
     14,
     "0,10",
     "10%"
    ],
    [
     "Total",
     140,
     "1,00",
     "100%"
    ]
   ],
   "N": 140
  },
  "ask": "¿Cuántos casos fueron por accidente?",
  "alts": [
   "$24$",
   "$8$",
   "$21$",
   "$14$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=140.",
  "pautaSteps": [
   "f(\\text{Accidente}) = 14"
  ],
  "conc": "El valor pedido es <b>14</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Reciclaje · Punto limpio",
  "enun": "Un punto limpio registró el tipo de envase reciclado en $n=250$ entregas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Plástico",
     100,
     "0,40",
     "40%"
    ],
    [
     "Vidrio",
     75,
     "0,30",
     "30%"
    ],
    [
     "Papel/cartón",
     50,
     "0,20",
     "20%"
    ],
    [
     "Metal",
     25,
     "0,10",
     "10%"
    ],
    [
     "Total",
     250,
     "1,00",
     "100%"
    ]
   ],
   "N": 250
  },
  "ask": "¿Cuántas entregas fueron de plástico o vidrio?",
  "alts": [
   "$231$",
   "$96$",
   "$175$",
   "$147$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=250.",
  "pautaSteps": [
   "f(\\text{Plástico})+f(\\text{Vidrio}) = 100+75 = 175"
  ],
  "conc": "El valor pedido es <b>175</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Reciclaje · Punto limpio",
  "enun": "Un punto limpio registró el tipo de envase reciclado en $n=250$ entregas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Plástico",
     100,
     "0,40",
     "40%"
    ],
    [
     "Vidrio",
     75,
     "0,30",
     "30%"
    ],
    [
     "Papel/cartón",
     50,
     "0,20",
     "20%"
    ],
    [
     "Metal",
     25,
     "0,10",
     "10%"
    ],
    [
     "Total",
     250,
     "1,00",
     "100%"
    ]
   ],
   "N": 250
  },
  "ask": "¿Qué porcentaje correspondió a metal?",
  "alts": [
   "$23\\%$",
   "$31\\%$",
   "$10\\%$",
   "$0\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=250.",
  "pautaSteps": [
   "\\dfrac{25}{250}\\times 100 = 10\\%"
  ],
  "conc": "El porcentaje pedido es <b>10%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Reciclaje · Punto limpio",
  "enun": "Un punto limpio registró el tipo de envase reciclado en $n=250$ entregas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Plástico",
     100,
     "0,40",
     "40%"
    ],
    [
     "Vidrio",
     75,
     "0,30",
     "30%"
    ],
    [
     "Papel/cartón",
     50,
     "0,20",
     "20%"
    ],
    [
     "Metal",
     25,
     "0,10",
     "10%"
    ],
    [
     "Total",
     250,
     "1,00",
     "100%"
    ]
   ],
   "N": 250
  },
  "ask": "¿Cuántas entregas NO fueron de plástico?",
  "alts": [
   "$150$",
   "$126$",
   "$199$",
   "$76$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=250.",
  "pautaSteps": [
   "N - f(\\text{Plástico}) = 250 - 100 = 150"
  ],
  "conc": "El valor pedido es <b>150</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Reciclaje · Punto limpio",
  "enun": "Un punto limpio registró el tipo de envase reciclado en $n=250$ entregas:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "Plástico",
     100,
     "0,40",
     "40%"
    ],
    [
     "Vidrio",
     75,
     "0,30",
     "30%"
    ],
    [
     "Papel/cartón",
     50,
     "0,20",
     "20%"
    ],
    [
     "Metal",
     25,
     "0,10",
     "10%"
    ],
    [
     "Total",
     250,
     "1,00",
     "100%"
    ]
   ],
   "N": 250
  },
  "ask": "¿Cuántas entregas fueron de papel o cartón?",
  "alts": [
   "$61$",
   "$76$",
   "$29$",
   "$50$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=250.",
  "pautaSteps": [
   "f(\\text{Papel/cartón}) = 50"
  ],
  "conc": "El valor pedido es <b>50</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Educación · Laptops universitarias",
  "enun": "Una universidad registró la marca de laptop usada por $n=180$ estudiantes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "HP",
     63,
     "0,35",
     "35%"
    ],
    [
     "Lenovo",
     45,
     "0,25",
     "25%"
    ],
    [
     "Apple",
     36,
     "0,20",
     "20%"
    ],
    [
     "Asus",
     27,
     "0,15",
     "15%"
    ],
    [
     "Otra",
     9,
     "0,05",
     "5%"
    ],
    [
     "Total",
     180,
     "1,00",
     "100%"
    ]
   ],
   "N": 180
  },
  "ask": "¿Cuántos estudiantes usan HP o Lenovo?",
  "alts": [
   "$108$",
   "$142$",
   "$56$",
   "$87$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=180.",
  "pautaSteps": [
   "f(\\text{HP})+f(\\text{Lenovo}) = 63+45 = 108"
  ],
  "conc": "El valor pedido es <b>108</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Educación · Laptops universitarias",
  "enun": "Una universidad registró la marca de laptop usada por $n=180$ estudiantes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "HP",
     63,
     "0,35",
     "35%"
    ],
    [
     "Lenovo",
     45,
     "0,25",
     "25%"
    ],
    [
     "Apple",
     36,
     "0,20",
     "20%"
    ],
    [
     "Asus",
     27,
     "0,15",
     "15%"
    ],
    [
     "Otra",
     9,
     "0,05",
     "5%"
    ],
    [
     "Total",
     180,
     "1,00",
     "100%"
    ]
   ],
   "N": 180
  },
  "ask": "¿Qué porcentaje usa Apple?",
  "alts": [
   "$35\\%$",
   "$20\\%$",
   "$31\\%$",
   "$4\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } N=180.",
  "pautaSteps": [
   "\\dfrac{36}{180}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Educación · Laptops universitarias",
  "enun": "Una universidad registró la marca de laptop usada por $n=180$ estudiantes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "HP",
     63,
     "0,35",
     "35%"
    ],
    [
     "Lenovo",
     45,
     "0,25",
     "25%"
    ],
    [
     "Apple",
     36,
     "0,20",
     "20%"
    ],
    [
     "Asus",
     27,
     "0,15",
     "15%"
    ],
    [
     "Otra",
     9,
     "0,05",
     "5%"
    ],
    [
     "Total",
     180,
     "1,00",
     "100%"
    ]
   ],
   "N": 180
  },
  "ask": "¿Cuántos estudiantes NO usan HP?",
  "alts": [
   "$154$",
   "$95$",
   "$117$",
   "$60$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=180.",
  "pautaSteps": [
   "N - f(\\text{HP}) = 180 - 63 = 117"
  ],
  "conc": "El valor pedido es <b>117</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Educación · Laptops universitarias",
  "enun": "Una universidad registró la marca de laptop usada por $n=180$ estudiantes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "HP",
     63,
     "0,35",
     "35%"
    ],
    [
     "Lenovo",
     45,
     "0,25",
     "25%"
    ],
    [
     "Apple",
     36,
     "0,20",
     "20%"
    ],
    [
     "Asus",
     27,
     "0,15",
     "15%"
    ],
    [
     "Otra",
     9,
     "0,05",
     "5%"
    ],
    [
     "Total",
     180,
     "1,00",
     "100%"
    ]
   ],
   "N": 180
  },
  "ask": "¿Cuántos usan Asus u otra marca?",
  "alts": [
   "$42$",
   "$23$",
   "$56$",
   "$36$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=180.",
  "pautaSteps": [
   "f(\\text{Asus})+f(\\text{Otra}) = 27+9 = 36"
  ],
  "conc": "El valor pedido es <b>36</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Servicios · Canal de comunicación",
  "enun": "Una empresa de servicios registró el canal de comunicación preferido por $n=210$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "WhatsApp",
     105,
     "0,50",
     "50%"
    ],
    [
     "Correo electrónico",
     42,
     "0,20",
     "20%"
    ],
    [
     "Teléfono",
     42,
     "0,20",
     "20%"
    ],
    [
     "Redes sociales",
     21,
     "0,10",
     "10%"
    ],
    [
     "Total",
     210,
     "1,00",
     "100%"
    ]
   ],
   "N": 210
  },
  "ask": "¿Cuántos clientes prefieren WhatsApp?",
  "alts": [
   "$86$",
   "$55$",
   "$105$",
   "$142$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } N=210.",
  "pautaSteps": [
   "f(\\text{WhatsApp}) = 105"
  ],
  "conc": "El valor pedido es <b>105</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Servicios · Canal de comunicación",
  "enun": "Una empresa de servicios registró el canal de comunicación preferido por $n=210$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "WhatsApp",
     105,
     "0,50",
     "50%"
    ],
    [
     "Correo electrónico",
     42,
     "0,20",
     "20%"
    ],
    [
     "Teléfono",
     42,
     "0,20",
     "20%"
    ],
    [
     "Redes sociales",
     21,
     "0,10",
     "10%"
    ],
    [
     "Total",
     210,
     "1,00",
     "100%"
    ]
   ],
   "N": 210
  },
  "ask": "¿Qué porcentaje prefiere correo electrónico o teléfono?",
  "alts": [
   "$40\\%$",
   "$49\\%$",
   "$28\\%$",
   "$79\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=210.",
  "pautaSteps": [
   "\\dfrac{42+42}{210}\\times 100 = 40\\%"
  ],
  "conc": "El porcentaje pedido es <b>40%</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Servicios · Canal de comunicación",
  "enun": "Una empresa de servicios registró el canal de comunicación preferido por $n=210$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "WhatsApp",
     105,
     "0,50",
     "50%"
    ],
    [
     "Correo electrónico",
     42,
     "0,20",
     "20%"
    ],
    [
     "Teléfono",
     42,
     "0,20",
     "20%"
    ],
    [
     "Redes sociales",
     21,
     "0,10",
     "10%"
    ],
    [
     "Total",
     210,
     "1,00",
     "100%"
    ]
   ],
   "N": 210
  },
  "ask": "¿Cuántos clientes NO prefieren WhatsApp?",
  "alts": [
   "$87$",
   "$56$",
   "$141$",
   "$105$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } N=210.",
  "pautaSteps": [
   "N - f(\\text{WhatsApp}) = 210 - 105 = 105"
  ],
  "conc": "El valor pedido es <b>105</b>."
 },
 {
  "tipo": "Lectura de tabla de frecuencias",
  "ctx": "Servicios · Canal de comunicación",
  "enun": "Una empresa de servicios registró el canal de comunicación preferido por $n=210$ clientes:",
  "table": {
   "head": [
    "Categoría",
    "$f_i$",
    "$h_i$",
    "$h_i\\%$"
   ],
   "rows": [
    [
     "WhatsApp",
     105,
     "0,50",
     "50%"
    ],
    [
     "Correo electrónico",
     42,
     "0,20",
     "20%"
    ],
    [
     "Teléfono",
     42,
     "0,20",
     "20%"
    ],
    [
     "Redes sociales",
     21,
     "0,10",
     "10%"
    ],
    [
     "Total",
     210,
     "1,00",
     "100%"
    ]
   ],
   "N": 210
  },
  "ask": "¿Cuántos prefieren redes sociales?",
  "alts": [
   "$21$",
   "$14$",
   "$33$",
   "$28$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } N=210.",
  "pautaSteps": [
   "f(\\text{Redes sociales}) = 21"
  ],
  "conc": "El valor pedido es <b>21</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Medios de pago (gráfico)",
  "enun": "El siguiente gráfico muestra el medio de pago utilizado en las cajas de un supermercado durante un día:",
  "chart": {
   "type": "bar",
   "labels": [
    "Efectivo",
    "Débito",
    "Crédito",
    "Transferencia"
   ],
   "values": [
    40,
    70,
    60,
    30
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el número total de pagos registrados (sume las frecuencias del gráfico).",
  "alts": [
   "$105$",
   "$200$",
   "$169$",
   "$263$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=200.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 40+70+60+30 = 200"
  ],
  "conc": "El total es <b>200</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Medios de pago (gráfico)",
  "enun": "El siguiente gráfico muestra el medio de pago utilizado en las cajas de un supermercado durante un día:",
  "chart": {
   "type": "bar",
   "labels": [
    "Efectivo",
    "Débito",
    "Crédito",
    "Transferencia"
   ],
   "values": [
    40,
    70,
    60,
    30
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Indique la categoría modal.",
  "alts": [
   "Efectivo ($f=40$)",
   "Crédito ($f=60$)",
   "Débito ($f=70$)",
   "Transferencia ($f=30$)"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=200.",
  "pautaSteps": [
   "f(\\text{Débito}) = 70\\ \\text{es el valor máximo entre } 40, 70, 60, 30"
  ],
  "conc": "La categoría pedida es \"<b>Débito</b>\", con frecuencia absoluta <b>70</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Medios de pago (gráfico)",
  "enun": "El siguiente gráfico muestra el medio de pago utilizado en las cajas de un supermercado durante un día:",
  "chart": {
   "type": "bar",
   "labels": [
    "Efectivo",
    "Débito",
    "Crédito",
    "Transferencia"
   ],
   "values": [
    40,
    70,
    60,
    30
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje que representan los pagos con débito.",
  "alts": [
   "$21\\%$",
   "$57\\%$",
   "$11\\%$",
   "$35\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=200.",
  "pautaSteps": [
   "\\dfrac{70}{200}\\times 100 = 35\\%"
  ],
  "conc": "El porcentaje pedido es <b>35%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Medios de pago (gráfico)",
  "enun": "El siguiente gráfico muestra el medio de pago utilizado en las cajas de un supermercado durante un día:",
  "chart": {
   "type": "bar",
   "labels": [
    "Efectivo",
    "Débito",
    "Crédito",
    "Transferencia"
   ],
   "values": [
    40,
    70,
    60,
    30
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Cuántos pagos más hubo con crédito que con transferencia?",
  "alts": [
   "$46$",
   "$30$",
   "$16$",
   "$37$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=200.",
  "pautaSteps": [
   "Crédito - Transferencia = 60 - 30 = 30"
  ],
  "conc": "La diferencia pedida es <b>30</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Turismo · Quejas de hotel (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de queja recibida en un hotel durante un mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Limpieza",
    "Ruido",
    "Wifi",
    "Personal",
    "Otro"
   ],
   "values": [
    18,
    12,
    9,
    6,
    5
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el número total de quejas registradas.",
  "alts": [
   "$50$",
   "$38$",
   "$67$",
   "$23$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=50.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 18+12+9+6+5 = 50"
  ],
  "conc": "El total es <b>50</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Turismo · Quejas de hotel (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de queja recibida en un hotel durante un mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Limpieza",
    "Ruido",
    "Wifi",
    "Personal",
    "Otro"
   ],
   "values": [
    18,
    12,
    9,
    6,
    5
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Indique el tipo de queja más frecuente.",
  "alts": [
   "Wifi ($f=9$)",
   "Personal ($f=6$)",
   "Ruido ($f=12$)",
   "Limpieza ($f=18$)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=50.",
  "pautaSteps": [
   "f(\\text{Limpieza}) = 18\\ \\text{es el valor máximo entre } 18, 12, 9, 6, 5"
  ],
  "conc": "La categoría pedida es \"<b>Limpieza</b>\", con frecuencia absoluta <b>18</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Turismo · Quejas de hotel (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de queja recibida en un hotel durante un mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Limpieza",
    "Ruido",
    "Wifi",
    "Personal",
    "Otro"
   ],
   "values": [
    18,
    12,
    9,
    6,
    5
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje de quejas por wifi.",
  "alts": [
   "$18\\%$",
   "$36\\%$",
   "$0\\%$",
   "$6\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=50.",
  "pautaSteps": [
   "\\dfrac{9}{50}\\times 100 = 18\\%"
  ],
  "conc": "El porcentaje pedido es <b>18%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Turismo · Quejas de hotel (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de queja recibida en un hotel durante un mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Limpieza",
    "Ruido",
    "Wifi",
    "Personal",
    "Otro"
   ],
   "values": [
    18,
    12,
    9,
    6,
    5
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Cuántas quejas más hubo por limpieza que por personal?",
  "alts": [
   "$22$",
   "$12$",
   "$19$",
   "$6$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=50.",
  "pautaSteps": [
   "Limpieza - Personal = 18 - 6 = 12"
  ],
  "conc": "La diferencia pedida es <b>12</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Entretenimiento · Consolas (gráfico)",
  "enun": "El siguiente gráfico muestra la consola de videojuegos preferida por un grupo de estudiantes:",
  "chart": {
   "type": "bar",
   "labels": [
    "PlayStation",
    "Xbox",
    "PC",
    "Switch",
    "Móvil"
   ],
   "values": [
    45,
    25,
    50,
    30,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el total de estudiantes encuestados.",
  "alts": [
   "$226$",
   "$142$",
   "$170$",
   "$91$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=170.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 45+25+50+30+20 = 170"
  ],
  "conc": "El total es <b>170</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Entretenimiento · Consolas (gráfico)",
  "enun": "El siguiente gráfico muestra la consola de videojuegos preferida por un grupo de estudiantes:",
  "chart": {
   "type": "bar",
   "labels": [
    "PlayStation",
    "Xbox",
    "PC",
    "Switch",
    "Móvil"
   ],
   "values": [
    45,
    25,
    50,
    30,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Indique la categoría modal.",
  "alts": [
   "Switch ($f=30$)",
   "Xbox ($f=25$)",
   "Móvil ($f=20$)",
   "PC ($f=50$)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=170.",
  "pautaSteps": [
   "f(\\text{PC}) = 50\\ \\text{es el valor máximo entre } 45, 25, 50, 30, 20"
  ],
  "conc": "La categoría pedida es \"<b>PC</b>\", con frecuencia absoluta <b>50</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Entretenimiento · Consolas (gráfico)",
  "enun": "El siguiente gráfico muestra la consola de videojuegos preferida por un grupo de estudiantes:",
  "chart": {
   "type": "bar",
   "labels": [
    "PlayStation",
    "Xbox",
    "PC",
    "Switch",
    "Móvil"
   ],
   "values": [
    45,
    25,
    50,
    30,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje que prefiere PC.",
  "alts": [
   "$0\\%$",
   "$29{,}41\\%$",
   "$43{,}41\\%$",
   "$19{,}41\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=170.",
  "pautaSteps": [
   "\\dfrac{50}{170}\\times 100 = 29{,}41\\%"
  ],
  "conc": "El porcentaje pedido es <b>29{,}41%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Entretenimiento · Consolas (gráfico)",
  "enun": "El siguiente gráfico muestra la consola de videojuegos preferida por un grupo de estudiantes:",
  "chart": {
   "type": "bar",
   "labels": [
    "PlayStation",
    "Xbox",
    "PC",
    "Switch",
    "Móvil"
   ],
   "values": [
    45,
    25,
    50,
    30,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Qué porcentaje conjunto representan Xbox y Switch?",
  "alts": [
   "$32{,}35\\%$",
   "$39{,}35\\%$",
   "$65{,}35\\%$",
   "$4{,}35\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=170.",
  "pautaSteps": [
   "\\dfrac{25+30}{170}\\times 100 = 32{,}35\\%"
  ],
  "conc": "El porcentaje pedido es <b>32{,}35%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Streaming · Idioma de películas (gráfico)",
  "enun": "El siguiente gráfico muestra el idioma de las películas vistas en una plataforma de streaming durante el último mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Español",
    "Inglés",
    "Coreano",
    "Francés"
   ],
   "values": [
    80,
    120,
    40,
    10
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el total de películas vistas.",
  "alts": [
   "$328$",
   "$250$",
   "$207$",
   "$132$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=250.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 80+120+40+10 = 250"
  ],
  "conc": "El total es <b>250</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Streaming · Idioma de películas (gráfico)",
  "enun": "El siguiente gráfico muestra el idioma de las películas vistas en una plataforma de streaming durante el último mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Español",
    "Inglés",
    "Coreano",
    "Francés"
   ],
   "values": [
    80,
    120,
    40,
    10
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje de películas en inglés.",
  "alts": [
   "$48\\%$",
   "$32\\%$",
   "$63\\%$",
   "$59\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=250.",
  "pautaSteps": [
   "\\dfrac{120}{250}\\times 100 = 48\\%"
  ],
  "conc": "El porcentaje pedido es <b>48%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Streaming · Idioma de películas (gráfico)",
  "enun": "El siguiente gráfico muestra el idioma de las películas vistas en una plataforma de streaming durante el último mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Español",
    "Inglés",
    "Coreano",
    "Francés"
   ],
   "values": [
    80,
    120,
    40,
    10
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Cuántas películas más se vieron en español que en coreano?",
  "alts": [
   "$19$",
   "$40$",
   "$30$",
   "$53$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=250.",
  "pautaSteps": [
   "Español - Coreano = 80 - 40 = 40"
  ],
  "conc": "La diferencia pedida es <b>40</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Streaming · Idioma de películas (gráfico)",
  "enun": "El siguiente gráfico muestra el idioma de las películas vistas en una plataforma de streaming durante el último mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Español",
    "Inglés",
    "Coreano",
    "Francés"
   ],
   "values": [
    80,
    120,
    40,
    10
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Qué porcentaje conjunto representan coreano y francés?",
  "alts": [
   "$0\\%$",
   "$25\\%$",
   "$20\\%$",
   "$47\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=250.",
  "pautaSteps": [
   "\\dfrac{40+10}{250}\\times 100 = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Muebles (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de mueble vendido por una tienda durante una semana:",
  "chart": {
   "type": "bar",
   "labels": [
    "Sillas",
    "Mesas",
    "Sofás",
    "Camas",
    "Estantes"
   ],
   "values": [
    35,
    20,
    15,
    10,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el total de muebles vendidos.",
  "alts": [
   "$82$",
   "$135$",
   "$53$",
   "$100$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=100.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 35+20+15+10+20 = 100"
  ],
  "conc": "El total es <b>100</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Muebles (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de mueble vendido por una tienda durante una semana:",
  "chart": {
   "type": "bar",
   "labels": [
    "Sillas",
    "Mesas",
    "Sofás",
    "Camas",
    "Estantes"
   ],
   "values": [
    35,
    20,
    15,
    10,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Indique la categoría modal.",
  "alts": [
   "Sillas ($f=35$)",
   "Mesas ($f=20$)",
   "Camas ($f=10$)",
   "Estantes ($f=20$)"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=100.",
  "pautaSteps": [
   "f(\\text{Sillas}) = 35\\ \\text{es el valor máximo entre } 35, 20, 15, 10, 20"
  ],
  "conc": "La categoría pedida es \"<b>Sillas</b>\", con frecuencia absoluta <b>35</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Muebles (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de mueble vendido por una tienda durante una semana:",
  "chart": {
   "type": "bar",
   "labels": [
    "Sillas",
    "Mesas",
    "Sofás",
    "Camas",
    "Estantes"
   ],
   "values": [
    35,
    20,
    15,
    10,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje que representan las camas.",
  "alts": [
   "$10\\%$",
   "$4\\%$",
   "$0\\%$",
   "$36\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=100.",
  "pautaSteps": [
   "\\dfrac{10}{100}\\times 100 = 10\\%"
  ],
  "conc": "El porcentaje pedido es <b>10%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Muebles (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de mueble vendido por una tienda durante una semana:",
  "chart": {
   "type": "bar",
   "labels": [
    "Sillas",
    "Mesas",
    "Sofás",
    "Camas",
    "Estantes"
   ],
   "values": [
    35,
    20,
    15,
    10,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Cuántos muebles más se vendieron entre mesas y estantes que sofás?",
  "alts": [
   "$16$",
   "$25$",
   "$33$",
   "$40$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=100.",
  "pautaSteps": [
   "Mesas+Estantes - Sofás = 40 - 15 = 25"
  ],
  "conc": "La diferencia pedida es <b>25</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Salud · Especialidades médicas (gráfico)",
  "enun": "El siguiente gráfico muestra la especialidad médica más consultada en un centro de salud durante una semana:",
  "chart": {
   "type": "bar",
   "labels": [
    "Pediatría",
    "Cardiología",
    "Dermatología",
    "Traumatología"
   ],
   "values": [
    60,
    30,
    25,
    35
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el total de consultas registradas.",
  "alts": [
   "$76$",
   "$199$",
   "$126$",
   "$150$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=150.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 60+30+25+35 = 150"
  ],
  "conc": "El total es <b>150</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Salud · Especialidades médicas (gráfico)",
  "enun": "El siguiente gráfico muestra la especialidad médica más consultada en un centro de salud durante una semana:",
  "chart": {
   "type": "bar",
   "labels": [
    "Pediatría",
    "Cardiología",
    "Dermatología",
    "Traumatología"
   ],
   "values": [
    60,
    30,
    25,
    35
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Indique la especialidad menos consultada.",
  "alts": [
   "Traumatología ($f=35$)",
   "Cardiología ($f=30$)",
   "Dermatología ($f=25$)",
   "Pediatría ($f=60$)"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=150.",
  "pautaSteps": [
   "f(\\text{Dermatología}) = 25\\ \\text{es el valor mínimo entre } 60, 30, 25, 35"
  ],
  "conc": "La categoría pedida es \"<b>Dermatología</b>\", con frecuencia absoluta <b>25</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Salud · Especialidades médicas (gráfico)",
  "enun": "El siguiente gráfico muestra la especialidad médica más consultada en un centro de salud durante una semana:",
  "chart": {
   "type": "bar",
   "labels": [
    "Pediatría",
    "Cardiología",
    "Dermatología",
    "Traumatología"
   ],
   "values": [
    60,
    30,
    25,
    35
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje de consultas de pediatría.",
  "alts": [
   "$62\\%$",
   "$26\\%$",
   "$40\\%$",
   "$16\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=150.",
  "pautaSteps": [
   "\\dfrac{60}{150}\\times 100 = 40\\%"
  ],
  "conc": "El porcentaje pedido es <b>40%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Salud · Especialidades médicas (gráfico)",
  "enun": "El siguiente gráfico muestra la especialidad médica más consultada en un centro de salud durante una semana:",
  "chart": {
   "type": "bar",
   "labels": [
    "Pediatría",
    "Cardiología",
    "Dermatología",
    "Traumatología"
   ],
   "values": [
    60,
    30,
    25,
    35
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Qué porcentaje conjunto representan cardiología y dermatología?",
  "alts": [
   "$47{,}67\\%$",
   "$20{,}67\\%$",
   "$51{,}67\\%$",
   "$36{,}67\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=150.",
  "pautaSteps": [
   "\\dfrac{30+25}{150}\\times 100 = 36{,}67\\%"
  ],
  "conc": "El porcentaje pedido es <b>36{,}67%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Soporte técnico · App (gráfico)",
  "enun": "El siguiente gráfico muestra el motivo de contacto a soporte técnico de una aplicación:",
  "chart": {
   "type": "bar",
   "labels": [
    "Error",
    "Consulta",
    "Sugerencia",
    "Reclamo"
   ],
   "values": [
    50,
    30,
    10,
    10
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el total de contactos registrados.",
  "alts": [
   "$100$",
   "$52$",
   "$131$",
   "$81$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=100.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 50+30+10+10 = 100"
  ],
  "conc": "El total es <b>100</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Soporte técnico · App (gráfico)",
  "enun": "El siguiente gráfico muestra el motivo de contacto a soporte técnico de una aplicación:",
  "chart": {
   "type": "bar",
   "labels": [
    "Error",
    "Consulta",
    "Sugerencia",
    "Reclamo"
   ],
   "values": [
    50,
    30,
    10,
    10
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje de contactos por error.",
  "alts": [
   "$50\\%$",
   "$55\\%$",
   "$77\\%$",
   "$26\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=100.",
  "pautaSteps": [
   "\\dfrac{50}{100}\\times 100 = 50\\%"
  ],
  "conc": "El porcentaje pedido es <b>50%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Soporte técnico · App (gráfico)",
  "enun": "El siguiente gráfico muestra el motivo de contacto a soporte técnico de una aplicación:",
  "chart": {
   "type": "bar",
   "labels": [
    "Error",
    "Consulta",
    "Sugerencia",
    "Reclamo"
   ],
   "values": [
    50,
    30,
    10,
    10
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Cuántos contactos fueron por sugerencia o reclamo?",
  "alts": [
   "$31$",
   "$20$",
   "$14$",
   "$9$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=100.",
  "pautaSteps": [
   "f(\\text{Sugerencia})+f(\\text{Reclamo}) = 10+10 = 20"
  ],
  "conc": "El valor pedido es <b>20</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Soporte técnico · App (gráfico)",
  "enun": "El siguiente gráfico muestra el motivo de contacto a soporte técnico de una aplicación:",
  "chart": {
   "type": "bar",
   "labels": [
    "Error",
    "Consulta",
    "Sugerencia",
    "Reclamo"
   ],
   "values": [
    50,
    30,
    10,
    10
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Qué porcentaje NO fue por error?",
  "alts": [
   "$89\\%$",
   "$38\\%$",
   "$59\\%$",
   "$50\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=100.",
  "pautaSteps": [
   "100\\% - \\dfrac{50}{100}\\times 100 = 100\\% - 50\\% = 50\\%"
  ],
  "conc": "El porcentaje pedido es <b>50%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Vivienda · Arriendos (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de vivienda arrendada en una comuna:",
  "chart": {
   "type": "bar",
   "labels": [
    "Departamento",
    "Casa",
    "Estudio",
    "Otro"
   ],
   "values": [
    140,
    90,
    30,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el total de viviendas arrendadas registradas.",
  "alts": [
   "$153$",
   "$368$",
   "$280$",
   "$236$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=280.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 140+90+30+20 = 280"
  ],
  "conc": "El total es <b>280</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Vivienda · Arriendos (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de vivienda arrendada en una comuna:",
  "chart": {
   "type": "bar",
   "labels": [
    "Departamento",
    "Casa",
    "Estudio",
    "Otro"
   ],
   "values": [
    140,
    90,
    30,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Indique la categoría modal.",
  "alts": [
   "Otro ($f=20$)",
   "Estudio ($f=30$)",
   "Departamento ($f=140$)",
   "Casa ($f=90$)"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=280.",
  "pautaSteps": [
   "f(\\text{Departamento}) = 140\\ \\text{es el valor máximo entre } 140, 90, 30, 20"
  ],
  "conc": "La categoría pedida es \"<b>Departamento</b>\", con frecuencia absoluta <b>140</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Vivienda · Arriendos (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de vivienda arrendada en una comuna:",
  "chart": {
   "type": "bar",
   "labels": [
    "Departamento",
    "Casa",
    "Estudio",
    "Otro"
   ],
   "values": [
    140,
    90,
    30,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje de viviendas tipo estudio.",
  "alts": [
   "$0{,}71\\%$",
   "$0\\%$",
   "$24{,}71\\%$",
   "$10{,}71\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=280.",
  "pautaSteps": [
   "\\dfrac{30}{280}\\times 100 = 10{,}71\\%"
  ],
  "conc": "El porcentaje pedido es <b>10{,}71%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Vivienda · Arriendos (gráfico)",
  "enun": "El siguiente gráfico muestra el tipo de vivienda arrendada en una comuna:",
  "chart": {
   "type": "bar",
   "labels": [
    "Departamento",
    "Casa",
    "Estudio",
    "Otro"
   ],
   "values": [
    140,
    90,
    30,
    20
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Cuántas viviendas más son departamento que casa?",
  "alts": [
   "$50$",
   "$76$",
   "$29$",
   "$61$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=280.",
  "pautaSteps": [
   "Departamento - Casa = 140 - 90 = 50"
  ],
  "conc": "La diferencia pedida es <b>50</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Bebidas energéticas (gráfico)",
  "enun": "El siguiente gráfico muestra la marca de bebida energética comprada en un kiosco:",
  "chart": {
   "type": "bar",
   "labels": [
    "RedBull",
    "Monster",
    "Sport",
    "Otra"
   ],
   "values": [
    48,
    36,
    24,
    12
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el total de bebidas vendidas.",
  "alts": [
   "$120$",
   "$97$",
   "$62$",
   "$158$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=120.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 48+36+24+12 = 120"
  ],
  "conc": "El total es <b>120</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Bebidas energéticas (gráfico)",
  "enun": "El siguiente gráfico muestra la marca de bebida energética comprada en un kiosco:",
  "chart": {
   "type": "bar",
   "labels": [
    "RedBull",
    "Monster",
    "Sport",
    "Otra"
   ],
   "values": [
    48,
    36,
    24,
    12
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje de ventas de RedBull.",
  "alts": [
   "$24\\%$",
   "$40\\%$",
   "$51\\%$",
   "$55\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=120.",
  "pautaSteps": [
   "\\dfrac{48}{120}\\times 100 = 40\\%"
  ],
  "conc": "El porcentaje pedido es <b>40%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Bebidas energéticas (gráfico)",
  "enun": "El siguiente gráfico muestra la marca de bebida energética comprada en un kiosco:",
  "chart": {
   "type": "bar",
   "labels": [
    "RedBull",
    "Monster",
    "Sport",
    "Otra"
   ],
   "values": [
    48,
    36,
    24,
    12
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Cuántas ventas más tuvo RedBull que Sport?",
  "alts": [
   "$9$",
   "$33$",
   "$16$",
   "$24$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=120.",
  "pautaSteps": [
   "RedBull - Sport = 48 - 24 = 24"
  ],
  "conc": "La diferencia pedida es <b>24</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Retail · Bebidas energéticas (gráfico)",
  "enun": "El siguiente gráfico muestra la marca de bebida energética comprada en un kiosco:",
  "chart": {
   "type": "bar",
   "labels": [
    "RedBull",
    "Monster",
    "Sport",
    "Otra"
   ],
   "values": [
    48,
    36,
    24,
    12
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Qué porcentaje corresponde a Sport u Otra?",
  "alts": [
   "$57\\%$",
   "$6\\%$",
   "$30\\%$",
   "$35\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=120.",
  "pautaSteps": [
   "\\dfrac{24+12}{120}\\times 100 = 30\\%"
  ],
  "conc": "El porcentaje pedido es <b>30%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Biblioteca · Préstamos (gráfico)",
  "enun": "El siguiente gráfico muestra la categoría de libro prestado en una biblioteca municipal durante un mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Novela",
    "Infantil",
    "Ciencia",
    "Otro"
   ],
   "values": [
    90,
    54,
    36,
    36
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Determine el total de préstamos registrados.",
  "alts": [
   "$118$",
   "$181$",
   "$216$",
   "$285$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=216.",
  "pautaSteps": [
   "\\text{Suma de todas las frecuencias} = 90+54+36+36 = 216"
  ],
  "conc": "El total es <b>216</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Biblioteca · Préstamos (gráfico)",
  "enun": "El siguiente gráfico muestra la categoría de libro prestado en una biblioteca municipal durante un mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Novela",
    "Infantil",
    "Ciencia",
    "Otro"
   ],
   "values": [
    90,
    54,
    36,
    36
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Indique la categoría modal.",
  "alts": [
   "Ciencia ($f=36$)",
   "Novela ($f=90$)",
   "Infantil ($f=54$)",
   "Otro ($f=36$)"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=216.",
  "pautaSteps": [
   "f(\\text{Novela}) = 90\\ \\text{es el valor máximo entre } 90, 54, 36, 36"
  ],
  "conc": "La categoría pedida es \"<b>Novela</b>\", con frecuencia absoluta <b>90</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Biblioteca · Préstamos (gráfico)",
  "enun": "El siguiente gráfico muestra la categoría de libro prestado en una biblioteca municipal durante un mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Novela",
    "Infantil",
    "Ciencia",
    "Otro"
   ],
   "values": [
    90,
    54,
    36,
    36
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "Calcule el porcentaje de préstamos de libros de ciencia.",
  "alts": [
   "$0\\%$",
   "$10{,}67\\%$",
   "$42{,}67\\%$",
   "$16{,}67\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=216.",
  "pautaSteps": [
   "\\dfrac{36}{216}\\times 100 = 16{,}67\\%"
  ],
  "conc": "El porcentaje pedido es <b>16{,}67%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de barras",
  "ctx": "Biblioteca · Préstamos (gráfico)",
  "enun": "El siguiente gráfico muestra la categoría de libro prestado en una biblioteca municipal durante un mes:",
  "chart": {
   "type": "bar",
   "labels": [
    "Novela",
    "Infantil",
    "Ciencia",
    "Otro"
   ],
   "values": [
    90,
    54,
    36,
    36
   ],
   "unit": "Frecuencia absoluta"
  },
  "ask": "¿Cuántos préstamos corresponden a infantil u otro?",
  "alts": [
   "$90$",
   "$135$",
   "$108$",
   "$61$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=216.",
  "pautaSteps": [
   "f(\\text{Infantil})+f(\\text{Otro}) = 54+36 = 90"
  ],
  "conc": "El valor pedido es <b>90</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Laboral · Tipo de contrato (torta)",
  "enun": "El siguiente gráfico muestra la distribución porcentual del tipo de contrato en una empresa de $n=400$ trabajadores:",
  "chart": {
   "type": "pie",
   "labels": [
    "Indefinido",
    "Plazo fijo",
    "Honorarios",
    "Part-time"
   ],
   "pct": [
    55,
    25,
    15,
    5
   ],
   "N": 400
  },
  "ask": "¿Cuántos trabajadores tienen contrato indefinido?",
  "alts": [
   "$289$",
   "$220$",
   "$186$",
   "$116$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=400.",
  "pautaSteps": [
   "f(\\text{Indefinido}) = 220"
  ],
  "conc": "El valor pedido es <b>220</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Laboral · Tipo de contrato (torta)",
  "enun": "El siguiente gráfico muestra la distribución porcentual del tipo de contrato en una empresa de $n=400$ trabajadores:",
  "chart": {
   "type": "pie",
   "labels": [
    "Indefinido",
    "Plazo fijo",
    "Honorarios",
    "Part-time"
   ],
   "pct": [
    55,
    25,
    15,
    5
   ],
   "N": 400
  },
  "ask": "¿Cuántos trabajadores NO tienen contrato indefinido?",
  "alts": [
   "$121$",
   "$210$",
   "$263$",
   "$180$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=400.",
  "pautaSteps": [
   "N - f(\\text{Indefinido}) = 400 - 220 = 180"
  ],
  "conc": "El valor pedido es <b>180</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Laboral · Tipo de contrato (torta)",
  "enun": "El siguiente gráfico muestra la distribución porcentual del tipo de contrato en una empresa de $n=400$ trabajadores:",
  "chart": {
   "type": "pie",
   "labels": [
    "Indefinido",
    "Plazo fijo",
    "Honorarios",
    "Part-time"
   ],
   "pct": [
    55,
    25,
    15,
    5
   ],
   "N": 400
  },
  "ask": "Indique la categoría menos frecuente y calcule su frecuencia absoluta.",
  "alts": [
   "Indefinido ($f=220$)",
   "Honorarios ($f=60$)",
   "Part-time ($f=20$)",
   "Plazo fijo ($f=100$)"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=400.",
  "pautaSteps": [
   "f(\\text{Part-time}) = 20\\ \\text{es el valor mínimo entre } 220, 100, 60, 20"
  ],
  "conc": "La categoría pedida es \"<b>Part-time</b>\", con frecuencia absoluta <b>20</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Laboral · Tipo de contrato (torta)",
  "enun": "El siguiente gráfico muestra la distribución porcentual del tipo de contrato en una empresa de $n=400$ trabajadores:",
  "chart": {
   "type": "pie",
   "labels": [
    "Indefinido",
    "Plazo fijo",
    "Honorarios",
    "Part-time"
   ],
   "pct": [
    55,
    25,
    15,
    5
   ],
   "N": 400
  },
  "ask": "¿Cuántos trabajadores tienen honorarios o part-time?",
  "alts": [
   "$117$",
   "$94$",
   "$80$",
   "$52$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=400.",
  "pautaSteps": [
   "f(\\text{Honorarios})+f(\\text{Part-time}) = 60+20 = 80"
  ],
  "conc": "El valor pedido es <b>80</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Comercio · Pago online (torta)",
  "enun": "El siguiente gráfico muestra el método de pago online preferido por $n=500$ compradores:",
  "chart": {
   "type": "pie",
   "labels": [
    "Tarjeta débito",
    "Tarjeta crédito",
    "Transferencia",
    "Billetera digital"
   ],
   "pct": [
    40,
    35,
    15,
    10
   ],
   "N": 500
  },
  "ask": "¿Cuántos compradores pagan con tarjeta débito?",
  "alts": [
   "$166$",
   "$200$",
   "$261$",
   "$107$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=500.",
  "pautaSteps": [
   "f(\\text{Tarjeta débito}) = 200"
  ],
  "conc": "El valor pedido es <b>200</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Comercio · Pago online (torta)",
  "enun": "El siguiente gráfico muestra el método de pago online preferido por $n=500$ compradores:",
  "chart": {
   "type": "pie",
   "labels": [
    "Tarjeta débito",
    "Tarjeta crédito",
    "Transferencia",
    "Billetera digital"
   ],
   "pct": [
    40,
    35,
    15,
    10
   ],
   "N": 500
  },
  "ask": "¿Qué porcentaje NO paga con tarjeta débito?",
  "alts": [
   "$87\\%$",
   "$65\\%$",
   "$36\\%$",
   "$60\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=500.",
  "pautaSteps": [
   "100\\% - \\dfrac{200}{500}\\times 100 = 100\\% - 40\\% = 60\\%"
  ],
  "conc": "El porcentaje pedido es <b>60%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Comercio · Pago online (torta)",
  "enun": "El siguiente gráfico muestra el método de pago online preferido por $n=500$ compradores:",
  "chart": {
   "type": "pie",
   "labels": [
    "Tarjeta débito",
    "Tarjeta crédito",
    "Transferencia",
    "Billetera digital"
   ],
   "pct": [
    40,
    35,
    15,
    10
   ],
   "N": 500
  },
  "ask": "¿Cuántos compradores pagan con transferencia o billetera digital?",
  "alts": [
   "$168$",
   "$125$",
   "$66$",
   "$103$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=500.",
  "pautaSteps": [
   "f(\\text{Transferencia})+f(\\text{Billetera digital}) = 75+50 = 125"
  ],
  "conc": "El valor pedido es <b>125</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Comercio · Pago online (torta)",
  "enun": "El siguiente gráfico muestra el método de pago online preferido por $n=500$ compradores:",
  "chart": {
   "type": "pie",
   "labels": [
    "Tarjeta débito",
    "Tarjeta crédito",
    "Transferencia",
    "Billetera digital"
   ],
   "pct": [
    40,
    35,
    15,
    10
   ],
   "N": 500
  },
  "ask": "Indique la categoría con menor frecuencia y calcule su frecuencia absoluta.",
  "alts": [
   "Tarjeta crédito ($f=175$)",
   "Billetera digital ($f=50$)",
   "Tarjeta débito ($f=200$)",
   "Transferencia ($f=75$)"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=500.",
  "pautaSteps": [
   "f(\\text{Billetera digital}) = 50\\ \\text{es el valor mínimo entre } 200, 175, 75, 50"
  ],
  "conc": "La categoría pedida es \"<b>Billetera digital</b>\", con frecuencia absoluta <b>50</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Municipal · Mascotas (torta)",
  "enun": "El siguiente gráfico muestra la especie de mascota registrada en una municipalidad, sobre $n=600$ registros:",
  "chart": {
   "type": "pie",
   "labels": [
    "Perro",
    "Gato",
    "Otro"
   ],
   "pct": [
    60,
    30,
    10
   ],
   "N": 600
  },
  "ask": "¿Cuántas mascotas registradas son perros?",
  "alts": [
   "$472$",
   "$304$",
   "$197$",
   "$360$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=600.",
  "pautaSteps": [
   "f(\\text{Perro}) = 360"
  ],
  "conc": "El valor pedido es <b>360</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Municipal · Mascotas (torta)",
  "enun": "El siguiente gráfico muestra la especie de mascota registrada en una municipalidad, sobre $n=600$ registros:",
  "chart": {
   "type": "pie",
   "labels": [
    "Perro",
    "Gato",
    "Otro"
   ],
   "pct": [
    60,
    30,
    10
   ],
   "N": 600
  },
  "ask": "¿Cuántas mascotas NO son perros?",
  "alts": [
   "$351$",
   "$167$",
   "$240$",
   "$280$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=600.",
  "pautaSteps": [
   "N - f(\\text{Perro}) = 600 - 360 = 240"
  ],
  "conc": "El valor pedido es <b>240</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Municipal · Mascotas (torta)",
  "enun": "El siguiente gráfico muestra la especie de mascota registrada en una municipalidad, sobre $n=600$ registros:",
  "chart": {
   "type": "pie",
   "labels": [
    "Perro",
    "Gato",
    "Otro"
   ],
   "pct": [
    60,
    30,
    10
   ],
   "N": 600
  },
  "ask": "¿Cuántas mascotas son gatos?",
  "alts": [
   "$180$",
   "$152$",
   "$94$",
   "$237$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=600.",
  "pautaSteps": [
   "f(\\text{Gato}) = 180"
  ],
  "conc": "El valor pedido es <b>180</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Municipal · Mascotas (torta)",
  "enun": "El siguiente gráfico muestra la especie de mascota registrada en una municipalidad, sobre $n=600$ registros:",
  "chart": {
   "type": "pie",
   "labels": [
    "Perro",
    "Gato",
    "Otro"
   ],
   "pct": [
    60,
    30,
    10
   ],
   "N": 600
  },
  "ask": "¿Qué porcentaje corresponde a la categoría \"Otro\"?",
  "alts": [
   "$17\\%$",
   "$10\\%$",
   "$0\\%$",
   "$43\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=600.",
  "pautaSteps": [
   "\\dfrac{60}{600}\\times 100 = 10\\%"
  ],
  "conc": "El porcentaje pedido es <b>10%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Transporte · Taxis (torta)",
  "enun": "El siguiente gráfico muestra el tipo de combustible de una flota de $n=250$ taxis:",
  "chart": {
   "type": "pie",
   "labels": [
    "Bencina",
    "GLP",
    "Eléctrico"
   ],
   "pct": [
    48,
    32,
    20
   ],
   "N": 250
  },
  "ask": "¿Cuántos taxis funcionan a bencina?",
  "alts": [
   "$62$",
   "$97$",
   "$158$",
   "$120$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=250.",
  "pautaSteps": [
   "f(\\text{Bencina}) = 120"
  ],
  "conc": "El valor pedido es <b>120</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Transporte · Taxis (torta)",
  "enun": "El siguiente gráfico muestra el tipo de combustible de una flota de $n=250$ taxis:",
  "chart": {
   "type": "pie",
   "labels": [
    "Bencina",
    "GLP",
    "Eléctrico"
   ],
   "pct": [
    48,
    32,
    20
   ],
   "N": 250
  },
  "ask": "¿Cuántos taxis funcionan a GLP o son eléctricos?",
  "alts": [
   "$86$",
   "$130$",
   "$191$",
   "$152$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=250.",
  "pautaSteps": [
   "f(\\text{GLP})+f(\\text{Eléctrico}) = 80+50 = 130"
  ],
  "conc": "El valor pedido es <b>130</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Transporte · Taxis (torta)",
  "enun": "El siguiente gráfico muestra el tipo de combustible de una flota de $n=250$ taxis:",
  "chart": {
   "type": "pie",
   "labels": [
    "Bencina",
    "GLP",
    "Eléctrico"
   ],
   "pct": [
    48,
    32,
    20
   ],
   "N": 250
  },
  "ask": "¿Qué porcentaje NO es a bencina?",
  "alts": [
   "$16\\%$",
   "$52\\%$",
   "$44\\%$",
   "$62\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=250.",
  "pautaSteps": [
   "100\\% - \\dfrac{120}{250}\\times 100 = 100\\% - 48\\% = 52\\%"
  ],
  "conc": "El porcentaje pedido es <b>52%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Transporte · Taxis (torta)",
  "enun": "El siguiente gráfico muestra el tipo de combustible de una flota de $n=250$ taxis:",
  "chart": {
   "type": "pie",
   "labels": [
    "Bencina",
    "GLP",
    "Eléctrico"
   ],
   "pct": [
    48,
    32,
    20
   ],
   "N": 250
  },
  "ask": "¿Cuántos taxis son eléctricos?",
  "alts": [
   "$31$",
   "$59$",
   "$50$",
   "$79$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=250.",
  "pautaSteps": [
   "f(\\text{Eléctrico}) = 50"
  ],
  "conc": "El valor pedido es <b>50</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Eventos · Presupuesto corporativo (torta)",
  "enun": "El siguiente gráfico muestra la categoría de gasto en un evento corporativo de $n=180$ unidades presupuestarias, según ítem:",
  "chart": {
   "type": "pie",
   "labels": [
    "Alimentación",
    "Arriendo de sala",
    "Transporte",
    "Otros"
   ],
   "pct": [
    45,
    25,
    20,
    10
   ],
   "N": 180
  },
  "ask": "¿Cuántas unidades presupuestarias corresponden a alimentación?",
  "alts": [
   "$43$",
   "$110$",
   "$81$",
   "$66$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=180.",
  "pautaSteps": [
   "f(\\text{Alimentación}) = 81"
  ],
  "conc": "El valor pedido es <b>81</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Eventos · Presupuesto corporativo (torta)",
  "enun": "El siguiente gráfico muestra la categoría de gasto en un evento corporativo de $n=180$ unidades presupuestarias, según ítem:",
  "chart": {
   "type": "pie",
   "labels": [
    "Alimentación",
    "Arriendo de sala",
    "Transporte",
    "Otros"
   ],
   "pct": [
    45,
    25,
    20,
    10
   ],
   "N": 180
  },
  "ask": "¿Cuántas corresponden a arriendo de sala o transporte?",
  "alts": [
   "$81$",
   "$98$",
   "$121$",
   "$55$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=180.",
  "pautaSteps": [
   "f(\\text{Arriendo de sala})+f(\\text{Transporte}) = 45+36 = 81"
  ],
  "conc": "El valor pedido es <b>81</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Eventos · Presupuesto corporativo (torta)",
  "enun": "El siguiente gráfico muestra la categoría de gasto en un evento corporativo de $n=180$ unidades presupuestarias, según ítem:",
  "chart": {
   "type": "pie",
   "labels": [
    "Alimentación",
    "Arriendo de sala",
    "Transporte",
    "Otros"
   ],
   "pct": [
    45,
    25,
    20,
    10
   ],
   "N": 180
  },
  "ask": "¿Qué porcentaje NO corresponde a alimentación?",
  "alts": [
   "$49\\%$",
   "$55\\%$",
   "$81\\%$",
   "$25\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=180.",
  "pautaSteps": [
   "100\\% - \\dfrac{81}{180}\\times 100 = 100\\% - 45\\% = 55\\%"
  ],
  "conc": "El porcentaje pedido es <b>55%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Eventos · Presupuesto corporativo (torta)",
  "enun": "El siguiente gráfico muestra la categoría de gasto en un evento corporativo de $n=180$ unidades presupuestarias, según ítem:",
  "chart": {
   "type": "pie",
   "labels": [
    "Alimentación",
    "Arriendo de sala",
    "Transporte",
    "Otros"
   ],
   "pct": [
    45,
    25,
    20,
    10
   ],
   "N": 180
  },
  "ask": "Indique la categoría menos frecuente y su valor absoluto.",
  "alts": [
   "Alimentación ($f=81$)",
   "Arriendo de sala ($f=45$)",
   "Transporte ($f=36$)",
   "Otros ($f=18$)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=180.",
  "pautaSteps": [
   "f(\\text{Otros}) = 18\\ \\text{es el valor mínimo entre } 81, 45, 36, 18"
  ],
  "conc": "La categoría pedida es \"<b>Otros</b>\", con frecuencia absoluta <b>18</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Comercio · Origen de la fruta (torta)",
  "enun": "El siguiente gráfico muestra el origen de la fruta vendida en una feria, sobre $n=320$ cajas:",
  "chart": {
   "type": "pie",
   "labels": [
    "Nacional",
    "Importada"
   ],
   "pct": [
    70,
    30
   ],
   "N": 320
  },
  "ask": "¿Cuántas cajas son de fruta nacional?",
  "alts": [
   "$295$",
   "$224$",
   "$117$",
   "$189$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=320.",
  "pautaSteps": [
   "f(\\text{Nacional}) = 224"
  ],
  "conc": "El valor pedido es <b>224</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Comercio · Origen de la fruta (torta)",
  "enun": "El siguiente gráfico muestra el origen de la fruta vendida en una feria, sobre $n=320$ cajas:",
  "chart": {
   "type": "pie",
   "labels": [
    "Nacional",
    "Importada"
   ],
   "pct": [
    70,
    30
   ],
   "N": 320
  },
  "ask": "¿Cuántas cajas son de fruta importada?",
  "alts": [
   "$140$",
   "$96$",
   "$113$",
   "$63$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=320.",
  "pautaSteps": [
   "f(\\text{Importada}) = 96"
  ],
  "conc": "El valor pedido es <b>96</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Comercio · Origen de la fruta (torta)",
  "enun": "El siguiente gráfico muestra el origen de la fruta vendida en una feria, sobre $n=320$ cajas:",
  "chart": {
   "type": "pie",
   "labels": [
    "Nacional",
    "Importada"
   ],
   "pct": [
    70,
    30
   ],
   "N": 320
  },
  "ask": "¿Qué porcentaje NO es de origen nacional?",
  "alts": [
   "$52\\%$",
   "$16\\%$",
   "$30\\%$",
   "$6\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=320.",
  "pautaSteps": [
   "100\\% - \\dfrac{224}{320}\\times 100 = 100\\% - 70\\% = 30\\%"
  ],
  "conc": "El porcentaje pedido es <b>30%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Comercio · Origen de la fruta (torta)",
  "enun": "El siguiente gráfico muestra el origen de la fruta vendida en una feria, sobre $n=320$ cajas:",
  "chart": {
   "type": "pie",
   "labels": [
    "Nacional",
    "Importada"
   ],
   "pct": [
    70,
    30
   ],
   "N": 320
  },
  "ask": "Si se retiraran todas las cajas importadas, ¿cuántas cajas quedarían?",
  "alts": [
   "$260$",
   "$152$",
   "$327$",
   "$224$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=320.",
  "pautaSteps": [
   "N - f(\\text{Importada}) = 320 - 96 = 224"
  ],
  "conc": "El valor pedido es <b>224</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Salud · Laboratorio clínico (torta)",
  "enun": "El siguiente gráfico muestra el tipo de examen solicitado en un laboratorio clínico, sobre $n=450$ órdenes:",
  "chart": {
   "type": "pie",
   "labels": [
    "Sangre",
    "Orina",
    "Otro"
   ],
   "pct": [
    50,
    30,
    20
   ],
   "N": 450
  },
  "ask": "¿Cuántas órdenes corresponden a examen de sangre?",
  "alts": [
   "$225$",
   "$187$",
   "$120$",
   "$294$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=450.",
  "pautaSteps": [
   "f(\\text{Sangre}) = 225"
  ],
  "conc": "El valor pedido es <b>225</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Salud · Laboratorio clínico (torta)",
  "enun": "El siguiente gráfico muestra el tipo de examen solicitado en un laboratorio clínico, sobre $n=450$ órdenes:",
  "chart": {
   "type": "pie",
   "labels": [
    "Sangre",
    "Orina",
    "Otro"
   ],
   "pct": [
    50,
    30,
    20
   ],
   "N": 450
  },
  "ask": "¿Cuántas corresponden a orina u otro tipo?",
  "alts": [
   "$260$",
   "$225$",
   "$154$",
   "$332$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=450.",
  "pautaSteps": [
   "f(\\text{Orina})+f(\\text{Otro}) = 135+90 = 225"
  ],
  "conc": "El valor pedido es <b>225</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Salud · Laboratorio clínico (torta)",
  "enun": "El siguiente gráfico muestra el tipo de examen solicitado en un laboratorio clínico, sobre $n=450$ órdenes:",
  "chart": {
   "type": "pie",
   "labels": [
    "Sangre",
    "Orina",
    "Otro"
   ],
   "pct": [
    50,
    30,
    20
   ],
   "N": 450
  },
  "ask": "¿Qué porcentaje NO corresponde a examen de sangre?",
  "alts": [
   "$32\\%$",
   "$68\\%$",
   "$38\\%$",
   "$50\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=450.",
  "pautaSteps": [
   "100\\% - \\dfrac{225}{450}\\times 100 = 100\\% - 50\\% = 50\\%"
  ],
  "conc": "El porcentaje pedido es <b>50%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Salud · Laboratorio clínico (torta)",
  "enun": "El siguiente gráfico muestra el tipo de examen solicitado en un laboratorio clínico, sobre $n=450$ órdenes:",
  "chart": {
   "type": "pie",
   "labels": [
    "Sangre",
    "Orina",
    "Otro"
   ],
   "pct": [
    50,
    30,
    20
   ],
   "N": 450
  },
  "ask": "¿Cuántas órdenes corresponden a la categoría \"Otro\"?",
  "alts": [
   "$60$",
   "$90$",
   "$136$",
   "$109$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=450.",
  "pautaSteps": [
   "f(\\text{Otro}) = 90"
  ],
  "conc": "El valor pedido es <b>90</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Marketing · Redes sociales (torta)",
  "enun": "El siguiente gráfico muestra la red social usada para promocionar un negocio, sobre $n=200$ publicaciones:",
  "chart": {
   "type": "pie",
   "labels": [
    "Instagram",
    "Facebook",
    "TikTok",
    "Otra"
   ],
   "pct": [
    45,
    25,
    20,
    10
   ],
   "N": 200
  },
  "ask": "¿Cuántas publicaciones se hicieron en Instagram?",
  "alts": [
   "$47$",
   "$74$",
   "$90$",
   "$122$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=200.",
  "pautaSteps": [
   "f(\\text{Instagram}) = 90"
  ],
  "conc": "El valor pedido es <b>90</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Marketing · Redes sociales (torta)",
  "enun": "El siguiente gráfico muestra la red social usada para promocionar un negocio, sobre $n=200$ publicaciones:",
  "chart": {
   "type": "pie",
   "labels": [
    "Instagram",
    "Facebook",
    "TikTok",
    "Otra"
   ],
   "pct": [
    45,
    25,
    20,
    10
   ],
   "N": 200
  },
  "ask": "¿Cuántas se hicieron en Facebook o TikTok?",
  "alts": [
   "$61$",
   "$108$",
   "$90$",
   "$135$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=200.",
  "pautaSteps": [
   "f(\\text{Facebook})+f(\\text{TikTok}) = 50+40 = 90"
  ],
  "conc": "El valor pedido es <b>90</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Marketing · Redes sociales (torta)",
  "enun": "El siguiente gráfico muestra la red social usada para promocionar un negocio, sobre $n=200$ publicaciones:",
  "chart": {
   "type": "pie",
   "labels": [
    "Instagram",
    "Facebook",
    "TikTok",
    "Otra"
   ],
   "pct": [
    45,
    25,
    20,
    10
   ],
   "N": 200
  },
  "ask": "¿Qué porcentaje NO se hizo en Instagram?",
  "alts": [
   "$45\\%$",
   "$69\\%$",
   "$13\\%$",
   "$55\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=200.",
  "pautaSteps": [
   "100\\% - \\dfrac{90}{200}\\times 100 = 100\\% - 45\\% = 55\\%"
  ],
  "conc": "El porcentaje pedido es <b>55%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Marketing · Redes sociales (torta)",
  "enun": "El siguiente gráfico muestra la red social usada para promocionar un negocio, sobre $n=200$ publicaciones:",
  "chart": {
   "type": "pie",
   "labels": [
    "Instagram",
    "Facebook",
    "TikTok",
    "Otra"
   ],
   "pct": [
    45,
    25,
    20,
    10
   ],
   "N": 200
  },
  "ask": "Indique la categoría menos frecuente y su frecuencia absoluta.",
  "alts": [
   "Otra ($f=20$)",
   "Facebook ($f=50$)",
   "Instagram ($f=90$)",
   "TikTok ($f=40$)"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=200.",
  "pautaSteps": [
   "f(\\text{Otra}) = 20\\ \\text{es el valor mínimo entre } 90, 50, 40, 20"
  ],
  "conc": "La categoría pedida es \"<b>Otra</b>\", con frecuencia absoluta <b>20</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Vivienda · Calefacción en edificio (torta)",
  "enun": "El siguiente gráfico muestra el tipo de calefacción en los departamentos de un edificio, sobre $n=160$ unidades:",
  "chart": {
   "type": "pie",
   "labels": [
    "Eléctrica",
    "Gas",
    "Ninguna"
   ],
   "pct": [
    40,
    35,
    25
   ],
   "N": 160
  },
  "ask": "¿Cuántos departamentos tienen calefacción eléctrica?",
  "alts": [
   "$49$",
   "$64$",
   "$30$",
   "$86$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=160.",
  "pautaSteps": [
   "f(\\text{Eléctrica}) = 64"
  ],
  "conc": "El valor pedido es <b>64</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Vivienda · Calefacción en edificio (torta)",
  "enun": "El siguiente gráfico muestra el tipo de calefacción en los departamentos de un edificio, sobre $n=160$ unidades:",
  "chart": {
   "type": "pie",
   "labels": [
    "Eléctrica",
    "Gas",
    "Ninguna"
   ],
   "pct": [
    40,
    35,
    25
   ],
   "N": 160
  },
  "ask": "¿Cuántos tienen calefacción a gas o eléctrica?",
  "alts": [
   "$175$",
   "$80$",
   "$140$",
   "$120$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=160.",
  "pautaSteps": [
   "f(\\text{Gas})+f(\\text{Eléctrica}) = 56+64 = 120"
  ],
  "conc": "El valor pedido es <b>120</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Vivienda · Calefacción en edificio (torta)",
  "enun": "El siguiente gráfico muestra el tipo de calefacción en los departamentos de un edificio, sobre $n=160$ unidades:",
  "chart": {
   "type": "pie",
   "labels": [
    "Eléctrica",
    "Gas",
    "Ninguna"
   ],
   "pct": [
    40,
    35,
    25
   ],
   "N": 160
  },
  "ask": "¿Qué porcentaje no tiene ningún tipo de calefacción?",
  "alts": [
   "$35\\%$",
   "$25\\%$",
   "$0\\%$",
   "$17\\%$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=160.",
  "pautaSteps": [
   "\\dfrac{40}{160}\\times 100 = 25\\%"
  ],
  "conc": "El porcentaje pedido es <b>25%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Vivienda · Calefacción en edificio (torta)",
  "enun": "El siguiente gráfico muestra el tipo de calefacción en los departamentos de un edificio, sobre $n=160$ unidades:",
  "chart": {
   "type": "pie",
   "labels": [
    "Eléctrica",
    "Gas",
    "Ninguna"
   ],
   "pct": [
    40,
    35,
    25
   ],
   "N": 160
  },
  "ask": "¿Cuántos departamentos corresponden a la categoría \"Ninguna\"?",
  "alts": [
   "$63$",
   "$47$",
   "$40$",
   "$25$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=160.",
  "pautaSteps": [
   "f(\\text{Ninguna}) = 40"
  ],
  "conc": "El valor pedido es <b>40</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Viajes · Reservas de vuelo (torta)",
  "enun": "El siguiente gráfico muestra la categoría de vuelo reservado en una agencia de viajes, sobre $n=240$ reservas:",
  "chart": {
   "type": "pie",
   "labels": [
    "Nacional",
    "Internacional"
   ],
   "pct": [
    65,
    35
   ],
   "N": 240
  },
  "ask": "¿Cuántas reservas fueron de vuelos nacionales?",
  "alts": [
   "$207$",
   "$130$",
   "$156$",
   "$85$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Gráfico con } N=240.",
  "pautaSteps": [
   "f(\\text{Nacional}) = 156"
  ],
  "conc": "El valor pedido es <b>156</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Viajes · Reservas de vuelo (torta)",
  "enun": "El siguiente gráfico muestra la categoría de vuelo reservado en una agencia de viajes, sobre $n=240$ reservas:",
  "chart": {
   "type": "pie",
   "labels": [
    "Nacional",
    "Internacional"
   ],
   "pct": [
    65,
    35
   ],
   "N": 240
  },
  "ask": "¿Cuántas reservas fueron de vuelos internacionales?",
  "alts": [
   "$102$",
   "$127$",
   "$56$",
   "$84$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Gráfico con } N=240.",
  "pautaSteps": [
   "f(\\text{Internacional}) = 84"
  ],
  "conc": "El valor pedido es <b>84</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Viajes · Reservas de vuelo (torta)",
  "enun": "El siguiente gráfico muestra la categoría de vuelo reservado en una agencia de viajes, sobre $n=240$ reservas:",
  "chart": {
   "type": "pie",
   "labels": [
    "Nacional",
    "Internacional"
   ],
   "pct": [
    65,
    35
   ],
   "N": 240
  },
  "ask": "¿Qué porcentaje corresponde a vuelos nacionales?",
  "alts": [
   "$65\\%$",
   "$35\\%$",
   "$91\\%$",
   "$59\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Gráfico con } N=240.",
  "pautaSteps": [
   "\\dfrac{156}{240}\\times 100 = 65\\%"
  ],
  "conc": "El porcentaje pedido es <b>65%</b>."
 },
 {
  "tipo": "Interpretación de gráfico de torta",
  "ctx": "Viajes · Reservas de vuelo (torta)",
  "enun": "El siguiente gráfico muestra la categoría de vuelo reservado en una agencia de viajes, sobre $n=240$ reservas:",
  "chart": {
   "type": "pie",
   "labels": [
    "Nacional",
    "Internacional"
   ],
   "pct": [
    65,
    35
   ],
   "N": 240
  },
  "ask": "Si se anularan todas las reservas internacionales, ¿cuántas reservas quedarían vigentes?",
  "alts": [
   "$183$",
   "$156$",
   "$228$",
   "$109$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Gráfico con } N=240.",
  "pautaSteps": [
   "N - f(\\text{Internacional}) = 240 - 84 = 156"
  ],
  "conc": "El valor pedido es <b>156</b>."
 }
];
