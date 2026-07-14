// Banco de 210 ejercicios de Tablas de Frecuencia para Datos Cuantitativos Continuos (guia oficial Fabimath)
// Parte I (100): lectura de tabla completa (m_i,f_i,F_i,h_i,H_i%)
// Parte II (30): marca de clase y promedio muestral
// Parte III (20): clase mediana y mediana interpolada
// Parte IV (20): clase modal y moda interpolada
// Parte V (40): rango, varianza, desviacion estandar y CV
const CC_QUESTIONS = [
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Salud · Maternidad",
  "enun": "Se registró peso (kg) de recién nacidos de 40 recién nacidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 2,5)",
     "2,25",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[2,5, 3)",
     "2,75",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[3, 3,5)",
     "3,25",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[3,5, 4)",
     "3,75",
     8,
     35,
     "0,2",
     "87,5%"
    ],
    [
     "[4, 4,5)",
     "4,25",
     5,
     40,
     "0,125",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos datos son menores a 3 kg?",
  "alts": [
   "$4$",
   "$18$",
   "$13$",
   "$7$"
  ],
  "correct": 2,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [2,5, 3) = 13"
  ],
  "conc": "Son <b>13</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Salud · Maternidad",
  "enun": "Se registró peso (kg) de recién nacidos de 40 recién nacidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 2,5)",
     "2,25",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[2,5, 3)",
     "2,75",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[3, 3,5)",
     "3,25",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[3,5, 4)",
     "3,75",
     8,
     35,
     "0,2",
     "87,5%"
    ],
    [
     "[4, 4,5)",
     "4,25",
     5,
     40,
     "0,125",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Qué porcentaje de datos son de al menos 3,5 kg?",
  "alts": [
   "$32{,}5\\%$",
   "$25{,}93\\%$",
   "$35{,}75\\%$",
   "$42{,}39\\%$"
  ],
  "correct": 0,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [3, 3,5) = 100\\% - 67{,}5\\% = 32{,}5\\%"
  ],
  "conc": "Es el <b>32{,}5\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Salud · Maternidad",
  "enun": "Se registró peso (kg) de recién nacidos de 40 recién nacidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 2,5)",
     "2,25",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[2,5, 3)",
     "2,75",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[3, 3,5)",
     "3,25",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[3,5, 4)",
     "3,75",
     8,
     35,
     "0,2",
     "87,5%"
    ],
    [
     "[4, 4,5)",
     "4,25",
     5,
     40,
     "0,125",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos datos están entre 2,5 y 4 kg?",
  "alts": [
   "$23$",
   "$31$",
   "$14$",
   "$46$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 9+14+8 = 31"
  ],
  "conc": "Están entre esos límites <b>31</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Salud · Maternidad",
  "enun": "Se registró peso (kg) de recién nacidos de 40 recién nacidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 2,5)",
     "2,25",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[2,5, 3)",
     "2,75",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[3, 3,5)",
     "3,25",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[3,5, 4)",
     "3,75",
     8,
     35,
     "0,2",
     "87,5%"
    ],
    [
     "[4, 4,5)",
     "4,25",
     5,
     40,
     "0,125",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [2,5, 3)?",
  "alts": [
   "$2{,}75$",
   "$2{,}25$",
   "$4{,}25$",
   "$3{,}75$"
  ],
  "correct": 0,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{2{,}5+3}{2} = 2{,}75"
  ],
  "conc": "La marca de clase de [2,5, 3) es $m_i=2{,}75$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Salud · Maternidad",
  "enun": "Se registró peso (kg) de recién nacidos de 40 recién nacidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 2,5)",
     "2,25",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[2,5, 3)",
     "2,75",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[3, 3,5)",
     "3,25",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[3,5, 4)",
     "3,75",
     8,
     35,
     "0,2",
     "87,5%"
    ],
    [
     "[4, 4,5)",
     "4,25",
     5,
     40,
     "0,125",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [3,5, 4)?",
  "alts": [
   "$0{,}225$",
   "$0{,}35$",
   "$0{,}2$",
   "$0{,}1$"
  ],
  "correct": 2,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=40.",
  "pautaSteps": [
   "h_i = \\dfrac{8}{40} = 0{,}2"
  ],
  "conc": "La frecuencia relativa de [3,5, 4) es $h_i=0{,}2$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró tiempo (min) que esperan en fila de 45 clientes de un banco, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 4)",
     "2",
     6,
     6,
     "0,133",
     "13,33%"
    ],
    [
     "[4, 8)",
     "6",
     12,
     18,
     "0,267",
     "40%"
    ],
    [
     "[8, 12)",
     "10",
     15,
     33,
     "0,333",
     "73,33%"
    ],
    [
     "[12, 16)",
     "14",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 20)",
     "18",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuántos datos son menores a 8 min?",
  "alts": [
   "$30$",
   "$25$",
   "$18$",
   "$11$"
  ],
  "correct": 2,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [4, 8) = 18"
  ],
  "conc": "Son <b>18</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró tiempo (min) que esperan en fila de 45 clientes de un banco, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 4)",
     "2",
     6,
     6,
     "0,133",
     "13,33%"
    ],
    [
     "[4, 8)",
     "6",
     12,
     18,
     "0,267",
     "40%"
    ],
    [
     "[8, 12)",
     "10",
     15,
     33,
     "0,333",
     "73,33%"
    ],
    [
     "[12, 16)",
     "14",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 20)",
     "18",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Qué porcentaje de datos son de al menos 12 min?",
  "alts": [
   "$32{,}14\\%$",
   "$26{,}67\\%$",
   "$18{,}46\\%$",
   "$23{,}93\\%$"
  ],
  "correct": 1,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [8, 12) = 100\\% - 73{,}33\\% = 26{,}67\\%"
  ],
  "conc": "Es el <b>26{,}67\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró tiempo (min) que esperan en fila de 45 clientes de un banco, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 4)",
     "2",
     6,
     6,
     "0,133",
     "13,33%"
    ],
    [
     "[4, 8)",
     "6",
     12,
     18,
     "0,267",
     "40%"
    ],
    [
     "[8, 12)",
     "10",
     15,
     33,
     "0,333",
     "73,33%"
    ],
    [
     "[12, 16)",
     "14",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 20)",
     "18",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuántos datos están entre 4 y 16 min?",
  "alts": [
   "$52$",
   "$43$",
   "$20$",
   "$35$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 12+15+8 = 35"
  ],
  "conc": "Están entre esos límites <b>35</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró tiempo (min) que esperan en fila de 45 clientes de un banco, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 4)",
     "2",
     6,
     6,
     "0,133",
     "13,33%"
    ],
    [
     "[4, 8)",
     "6",
     12,
     18,
     "0,267",
     "40%"
    ],
    [
     "[8, 12)",
     "10",
     15,
     33,
     "0,333",
     "73,33%"
    ],
    [
     "[12, 16)",
     "14",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 20)",
     "18",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [8, 12)?",
  "alts": [
   "$6$",
   "$10$",
   "$2$",
   "$18$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{8+12}{2} = 10"
  ],
  "conc": "La marca de clase de [8, 12) es $m_i=10$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró tiempo (min) que esperan en fila de 45 clientes de un banco, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 4)",
     "2",
     6,
     6,
     "0,133",
     "13,33%"
    ],
    [
     "[4, 8)",
     "6",
     12,
     18,
     "0,267",
     "40%"
    ],
    [
     "[8, 12)",
     "10",
     15,
     33,
     "0,333",
     "73,33%"
    ],
    [
     "[12, 16)",
     "14",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 20)",
     "18",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [16, 20)?",
  "alts": [
   "$0{,}333$",
   "$0{,}178$",
   "$0{,}089$",
   "$0{,}133$"
  ],
  "correct": 2,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=45.",
  "pautaSteps": [
   "h_i = \\dfrac{4}{45} = 0{,}089"
  ],
  "conc": "La frecuencia relativa de [16, 20) es $h_i=0{,}089$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Laboral · Sueldos",
  "enun": "Se registró ingreso mensual (miles $) de 50 trabajadores de una empresa, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[300, 450)",
     "375",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 600)",
     "525",
     14,
     22,
     "0,28",
     "44%"
    ],
    [
     "[600, 750)",
     "675",
     16,
     38,
     "0,32",
     "76%"
    ],
    [
     "[750, 900)",
     "825",
     9,
     47,
     "0,18",
     "94%"
    ],
    [
     "[900, 1050)",
     "975",
     3,
     50,
     "0,06",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos datos son menores a 600 miles $?",
  "alts": [
   "$29$",
   "$10$",
   "$15$",
   "$22$"
  ],
  "correct": 3,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [450, 600) = 22"
  ],
  "conc": "Son <b>22</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Laboral · Sueldos",
  "enun": "Se registró ingreso mensual (miles $) de 50 trabajadores de una empresa, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[300, 450)",
     "375",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 600)",
     "525",
     14,
     22,
     "0,28",
     "44%"
    ],
    [
     "[600, 750)",
     "675",
     16,
     38,
     "0,32",
     "76%"
    ],
    [
     "[750, 900)",
     "825",
     9,
     47,
     "0,18",
     "94%"
    ],
    [
     "[900, 1050)",
     "975",
     3,
     50,
     "0,06",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Qué porcentaje de datos son de al menos 750 miles $?",
  "alts": [
   "$24\\%$",
   "$31{,}2\\%$",
   "$26{,}54\\%$",
   "$18{,}99\\%$"
  ],
  "correct": 0,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [600, 750) = 100\\% - 76\\% = 24\\%"
  ],
  "conc": "Es el <b>24\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Laboral · Sueldos",
  "enun": "Se registró ingreso mensual (miles $) de 50 trabajadores de una empresa, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[300, 450)",
     "375",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 600)",
     "525",
     14,
     22,
     "0,28",
     "44%"
    ],
    [
     "[600, 750)",
     "675",
     16,
     38,
     "0,32",
     "76%"
    ],
    [
     "[750, 900)",
     "825",
     9,
     47,
     "0,18",
     "94%"
    ],
    [
     "[900, 1050)",
     "975",
     3,
     50,
     "0,06",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos datos están entre 450 y 900 miles $?",
  "alts": [
   "$19$",
   "$39$",
   "$56$",
   "$30$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 14+16+9 = 39"
  ],
  "conc": "Están entre esos límites <b>39</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Laboral · Sueldos",
  "enun": "Se registró ingreso mensual (miles $) de 50 trabajadores de una empresa, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[300, 450)",
     "375",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 600)",
     "525",
     14,
     22,
     "0,28",
     "44%"
    ],
    [
     "[600, 750)",
     "675",
     16,
     38,
     "0,32",
     "76%"
    ],
    [
     "[750, 900)",
     "825",
     9,
     47,
     "0,18",
     "94%"
    ],
    [
     "[900, 1050)",
     "975",
     3,
     50,
     "0,06",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [750, 900)?",
  "alts": [
   "$675$",
   "$525$",
   "$975$",
   "$825$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{750+900}{2} = 825"
  ],
  "conc": "La marca de clase de [750, 900) es $m_i=825$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Laboral · Sueldos",
  "enun": "Se registró ingreso mensual (miles $) de 50 trabajadores de una empresa, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[300, 450)",
     "375",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 600)",
     "525",
     14,
     22,
     "0,28",
     "44%"
    ],
    [
     "[600, 750)",
     "675",
     16,
     38,
     "0,32",
     "76%"
    ],
    [
     "[750, 900)",
     "825",
     9,
     47,
     "0,18",
     "94%"
    ],
    [
     "[900, 1050)",
     "975",
     3,
     50,
     "0,06",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [300, 450)?",
  "alts": [
   "$0{,}28$",
   "$0{,}06$",
   "$0{,}16$",
   "$0{,}32$"
  ],
  "correct": 2,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=50.",
  "pautaSteps": [
   "h_i = \\dfrac{8}{50} = 0{,}16"
  ],
  "conc": "La frecuencia relativa de [300, 450) es $h_i=0{,}16$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Deporte · Baloncesto",
  "enun": "Se registró estatura (cm) de 42 jugadores juveniles, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[160, 168)",
     "164",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[168, 176)",
     "172",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[176, 184)",
     "180",
     15,
     30,
     "0,357",
     "71,43%"
    ],
    [
     "[184, 192)",
     "188",
     9,
     39,
     "0,214",
     "92,86%"
    ],
    [
     "[192, 200)",
     "196",
     3,
     42,
     "0,071",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuántos datos son menores a 176 cm?",
  "alts": [
   "$15$",
   "$10$",
   "$24$",
   "$21$"
  ],
  "correct": 0,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [168, 176) = 15"
  ],
  "conc": "Son <b>15</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Deporte · Baloncesto",
  "enun": "Se registró estatura (cm) de 42 jugadores juveniles, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[160, 168)",
     "164",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[168, 176)",
     "172",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[176, 184)",
     "180",
     15,
     30,
     "0,357",
     "71,43%"
    ],
    [
     "[184, 192)",
     "188",
     9,
     39,
     "0,214",
     "92,86%"
    ],
    [
     "[192, 200)",
     "196",
     3,
     42,
     "0,071",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Qué porcentaje de datos son de al menos 184 cm?",
  "alts": [
   "$34{,}29\\%$",
   "$19{,}93\\%$",
   "$25{,}5\\%$",
   "$28{,}57\\%$"
  ],
  "correct": 3,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [176, 184) = 100\\% - 71{,}43\\% = 28{,}57\\%"
  ],
  "conc": "Es el <b>28{,}57\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Deporte · Baloncesto",
  "enun": "Se registró estatura (cm) de 42 jugadores juveniles, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[160, 168)",
     "164",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[168, 176)",
     "172",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[176, 184)",
     "180",
     15,
     30,
     "0,357",
     "71,43%"
    ],
    [
     "[184, 192)",
     "188",
     9,
     39,
     "0,214",
     "92,86%"
    ],
    [
     "[192, 200)",
     "196",
     3,
     42,
     "0,071",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuántos datos están entre 168 y 192 cm?",
  "alts": [
   "$34$",
   "$42$",
   "$19$",
   "$51$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 10+15+9 = 34"
  ],
  "conc": "Están entre esos límites <b>34</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Deporte · Baloncesto",
  "enun": "Se registró estatura (cm) de 42 jugadores juveniles, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[160, 168)",
     "164",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[168, 176)",
     "172",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[176, 184)",
     "180",
     15,
     30,
     "0,357",
     "71,43%"
    ],
    [
     "[184, 192)",
     "188",
     9,
     39,
     "0,214",
     "92,86%"
    ],
    [
     "[192, 200)",
     "196",
     3,
     42,
     "0,071",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [192, 200)?",
  "alts": [
   "$164$",
   "$188$",
   "$196$",
   "$180$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{192+200}{2} = 196"
  ],
  "conc": "La marca de clase de [192, 200) es $m_i=196$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Deporte · Baloncesto",
  "enun": "Se registró estatura (cm) de 42 jugadores juveniles, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[160, 168)",
     "164",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[168, 176)",
     "172",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[176, 184)",
     "180",
     15,
     30,
     "0,357",
     "71,43%"
    ],
    [
     "[184, 192)",
     "188",
     9,
     39,
     "0,214",
     "92,86%"
    ],
    [
     "[192, 200)",
     "196",
     3,
     42,
     "0,071",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [168, 176)?",
  "alts": [
   "$0{,}071$",
   "$0{,}214$",
   "$0{,}357$",
   "$0{,}238$"
  ],
  "correct": 3,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=42.",
  "pautaSteps": [
   "h_i = \\dfrac{10}{42} = 0{,}238"
  ],
  "conc": "La frecuencia relativa de [168, 176) es $h_i=0{,}238$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Hogar · Consumo",
  "enun": "Se registró consumo de agua (m³) mensual de 48 hogares, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 15)",
     "12,5",
     7,
     7,
     "0,146",
     "14,58%"
    ],
    [
     "[15, 20)",
     "17,5",
     13,
     20,
     "0,271",
     "41,67%"
    ],
    [
     "[20, 25)",
     "22,5",
     16,
     36,
     "0,333",
     "75%"
    ],
    [
     "[25, 30)",
     "27,5",
     8,
     44,
     "0,167",
     "91,67%"
    ],
    [
     "[30, 35)",
     "32,5",
     4,
     48,
     "0,083",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuántos datos son menores a 20 m³?",
  "alts": [
   "$20$",
   "$27$",
   "$13$",
   "$8$"
  ],
  "correct": 0,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [15, 20) = 20"
  ],
  "conc": "Son <b>20</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Hogar · Consumo",
  "enun": "Se registró consumo de agua (m³) mensual de 48 hogares, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 15)",
     "12,5",
     7,
     7,
     "0,146",
     "14,58%"
    ],
    [
     "[15, 20)",
     "17,5",
     13,
     20,
     "0,271",
     "41,67%"
    ],
    [
     "[20, 25)",
     "22,5",
     16,
     36,
     "0,333",
     "75%"
    ],
    [
     "[25, 30)",
     "27,5",
     8,
     44,
     "0,167",
     "91,67%"
    ],
    [
     "[30, 35)",
     "32,5",
     4,
     48,
     "0,083",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Qué porcentaje de datos son de al menos 25 m³?",
  "alts": [
   "$27{,}5\\%$",
   "$25\\%$",
   "$32{,}64\\%$",
   "$19{,}93\\%$"
  ],
  "correct": 1,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [20, 25) = 100\\% - 75\\% = 25\\%"
  ],
  "conc": "Es el <b>25\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Hogar · Consumo",
  "enun": "Se registró consumo de agua (m³) mensual de 48 hogares, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 15)",
     "12,5",
     7,
     7,
     "0,146",
     "14,58%"
    ],
    [
     "[15, 20)",
     "17,5",
     13,
     20,
     "0,271",
     "41,67%"
    ],
    [
     "[20, 25)",
     "22,5",
     16,
     36,
     "0,333",
     "75%"
    ],
    [
     "[25, 30)",
     "27,5",
     8,
     44,
     "0,167",
     "91,67%"
    ],
    [
     "[30, 35)",
     "32,5",
     4,
     48,
     "0,083",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuántos datos están entre 15 y 30 m³?",
  "alts": [
   "$17$",
   "$28$",
   "$54$",
   "$37$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 13+16+8 = 37"
  ],
  "conc": "Están entre esos límites <b>37</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Hogar · Consumo",
  "enun": "Se registró consumo de agua (m³) mensual de 48 hogares, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 15)",
     "12,5",
     7,
     7,
     "0,146",
     "14,58%"
    ],
    [
     "[15, 20)",
     "17,5",
     13,
     20,
     "0,271",
     "41,67%"
    ],
    [
     "[20, 25)",
     "22,5",
     16,
     36,
     "0,333",
     "75%"
    ],
    [
     "[25, 30)",
     "27,5",
     8,
     44,
     "0,167",
     "91,67%"
    ],
    [
     "[30, 35)",
     "32,5",
     4,
     48,
     "0,083",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [10, 15)?",
  "alts": [
   "$22{,}5$",
   "$27{,}5$",
   "$12{,}5$",
   "$17{,}5$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{10+15}{2} = 12{,}5"
  ],
  "conc": "La marca de clase de [10, 15) es $m_i=12{,}5$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Hogar · Consumo",
  "enun": "Se registró consumo de agua (m³) mensual de 48 hogares, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 15)",
     "12,5",
     7,
     7,
     "0,146",
     "14,58%"
    ],
    [
     "[15, 20)",
     "17,5",
     13,
     20,
     "0,271",
     "41,67%"
    ],
    [
     "[20, 25)",
     "22,5",
     16,
     36,
     "0,333",
     "75%"
    ],
    [
     "[25, 30)",
     "27,5",
     8,
     44,
     "0,167",
     "91,67%"
    ],
    [
     "[30, 35)",
     "32,5",
     4,
     48,
     "0,083",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [20, 25)?",
  "alts": [
   "$0{,}271$",
   "$0{,}146$",
   "$0{,}333$",
   "$0{,}083$"
  ],
  "correct": 2,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=48.",
  "pautaSteps": [
   "h_i = \\dfrac{16}{48} = 0{,}333"
  ],
  "conc": "La frecuencia relativa de [20, 25) es $h_i=0{,}333$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Servicio · Call center",
  "enun": "Se registró duración (min) de llamadas de 40 llamadas, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 3)",
     "1,5",
     5,
     5,
     "0,125",
     "12,5%"
    ],
    [
     "[3, 6)",
     "4,5",
     11,
     16,
     "0,275",
     "40%"
    ],
    [
     "[6, 9)",
     "7,5",
     14,
     30,
     "0,35",
     "75%"
    ],
    [
     "[9, 12)",
     "10,5",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[12, 15)",
     "13,5",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos datos son menores a 6 min?",
  "alts": [
   "$11$",
   "$25$",
   "$22$",
   "$16$"
  ],
  "correct": 3,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [3, 6) = 16"
  ],
  "conc": "Son <b>16</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Servicio · Call center",
  "enun": "Se registró duración (min) de llamadas de 40 llamadas, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 3)",
     "1,5",
     5,
     5,
     "0,125",
     "12,5%"
    ],
    [
     "[3, 6)",
     "4,5",
     11,
     16,
     "0,275",
     "40%"
    ],
    [
     "[6, 9)",
     "7,5",
     14,
     30,
     "0,35",
     "75%"
    ],
    [
     "[9, 12)",
     "10,5",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[12, 15)",
     "13,5",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Qué porcentaje de datos son de al menos 9 min?",
  "alts": [
   "$25\\%$",
   "$22{,}43\\%$",
   "$30{,}14\\%$",
   "$17{,}29\\%$"
  ],
  "correct": 0,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [6, 9) = 100\\% - 75\\% = 25\\%"
  ],
  "conc": "Es el <b>25\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Servicio · Call center",
  "enun": "Se registró duración (min) de llamadas de 40 llamadas, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 3)",
     "1,5",
     5,
     5,
     "0,125",
     "12,5%"
    ],
    [
     "[3, 6)",
     "4,5",
     11,
     16,
     "0,275",
     "40%"
    ],
    [
     "[6, 9)",
     "7,5",
     14,
     30,
     "0,35",
     "75%"
    ],
    [
     "[9, 12)",
     "10,5",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[12, 15)",
     "13,5",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos datos están entre 3 y 12 min?",
  "alts": [
   "$40$",
   "$32$",
   "$49$",
   "$17$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 11+14+7 = 32"
  ],
  "conc": "Están entre esos límites <b>32</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Servicio · Call center",
  "enun": "Se registró duración (min) de llamadas de 40 llamadas, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 3)",
     "1,5",
     5,
     5,
     "0,125",
     "12,5%"
    ],
    [
     "[3, 6)",
     "4,5",
     11,
     16,
     "0,275",
     "40%"
    ],
    [
     "[6, 9)",
     "7,5",
     14,
     30,
     "0,35",
     "75%"
    ],
    [
     "[9, 12)",
     "10,5",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[12, 15)",
     "13,5",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [3, 6)?",
  "alts": [
   "$10{,}5$",
   "$7{,}5$",
   "$4{,}5$",
   "$13{,}5$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{3+6}{2} = 4{,}5"
  ],
  "conc": "La marca de clase de [3, 6) es $m_i=4{,}5$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Servicio · Call center",
  "enun": "Se registró duración (min) de llamadas de 40 llamadas, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 3)",
     "1,5",
     5,
     5,
     "0,125",
     "12,5%"
    ],
    [
     "[3, 6)",
     "4,5",
     11,
     16,
     "0,275",
     "40%"
    ],
    [
     "[6, 9)",
     "7,5",
     14,
     30,
     "0,35",
     "75%"
    ],
    [
     "[9, 12)",
     "10,5",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[12, 15)",
     "13,5",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [9, 12)?",
  "alts": [
   "$0{,}125$",
   "$0{,}175$",
   "$0{,}35$",
   "$0{,}275$"
  ],
  "correct": 1,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=40.",
  "pautaSteps": [
   "h_i = \\dfrac{7}{40} = 0{,}175"
  ],
  "conc": "La frecuencia relativa de [9, 12) es $h_i=0{,}175$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Educación · Selección",
  "enun": "Se registró puntaje (pts) en prueba de selección de 44 postulantes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[400, 440)",
     "420",
     6,
     6,
     "0,136",
     "13,64%"
    ],
    [
     "[440, 480)",
     "460",
     10,
     16,
     "0,227",
     "36,36%"
    ],
    [
     "[480, 520)",
     "500",
     15,
     31,
     "0,341",
     "70,45%"
    ],
    [
     "[520, 560)",
     "540",
     9,
     40,
     "0,205",
     "90,91%"
    ],
    [
     "[560, 600)",
     "580",
     4,
     44,
     "0,091",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuántos datos son menores a 480 pts?",
  "alts": [
   "$16$",
   "$7$",
   "$10$",
   "$21$"
  ],
  "correct": 0,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [440, 480) = 16"
  ],
  "conc": "Son <b>16</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Educación · Selección",
  "enun": "Se registró puntaje (pts) en prueba de selección de 44 postulantes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[400, 440)",
     "420",
     6,
     6,
     "0,136",
     "13,64%"
    ],
    [
     "[440, 480)",
     "460",
     10,
     16,
     "0,227",
     "36,36%"
    ],
    [
     "[480, 520)",
     "500",
     15,
     31,
     "0,341",
     "70,45%"
    ],
    [
     "[520, 560)",
     "540",
     9,
     40,
     "0,205",
     "90,91%"
    ],
    [
     "[560, 600)",
     "580",
     4,
     44,
     "0,091",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Qué porcentaje de datos son de al menos 520 pts?",
  "alts": [
   "$38{,}41\\%$",
   "$29{,}55\\%$",
   "$23{,}43\\%$",
   "$32{,}64\\%$"
  ],
  "correct": 1,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [480, 520) = 100\\% - 70{,}45\\% = 29{,}55\\%"
  ],
  "conc": "Es el <b>29{,}55\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Educación · Selección",
  "enun": "Se registró puntaje (pts) en prueba de selección de 44 postulantes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[400, 440)",
     "420",
     6,
     6,
     "0,136",
     "13,64%"
    ],
    [
     "[440, 480)",
     "460",
     10,
     16,
     "0,227",
     "36,36%"
    ],
    [
     "[480, 520)",
     "500",
     15,
     31,
     "0,341",
     "70,45%"
    ],
    [
     "[520, 560)",
     "540",
     9,
     40,
     "0,205",
     "90,91%"
    ],
    [
     "[560, 600)",
     "580",
     4,
     44,
     "0,091",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuántos datos están entre 440 y 560 pts?",
  "alts": [
   "$49$",
   "$26$",
   "$34$",
   "$17$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 10+15+9 = 34"
  ],
  "conc": "Están entre esos límites <b>34</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Educación · Selección",
  "enun": "Se registró puntaje (pts) en prueba de selección de 44 postulantes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[400, 440)",
     "420",
     6,
     6,
     "0,136",
     "13,64%"
    ],
    [
     "[440, 480)",
     "460",
     10,
     16,
     "0,227",
     "36,36%"
    ],
    [
     "[480, 520)",
     "500",
     15,
     31,
     "0,341",
     "70,45%"
    ],
    [
     "[520, 560)",
     "540",
     9,
     40,
     "0,205",
     "90,91%"
    ],
    [
     "[560, 600)",
     "580",
     4,
     44,
     "0,091",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [480, 520)?",
  "alts": [
   "$420$",
   "$460$",
   "$500$",
   "$580$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{480+520}{2} = 500"
  ],
  "conc": "La marca de clase de [480, 520) es $m_i=500$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Educación · Selección",
  "enun": "Se registró puntaje (pts) en prueba de selección de 44 postulantes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[400, 440)",
     "420",
     6,
     6,
     "0,136",
     "13,64%"
    ],
    [
     "[440, 480)",
     "460",
     10,
     16,
     "0,227",
     "36,36%"
    ],
    [
     "[480, 520)",
     "500",
     15,
     31,
     "0,341",
     "70,45%"
    ],
    [
     "[520, 560)",
     "540",
     9,
     40,
     "0,205",
     "90,91%"
    ],
    [
     "[560, 600)",
     "580",
     4,
     44,
     "0,091",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [560, 600)?",
  "alts": [
   "$0{,}091$",
   "$0{,}136$",
   "$0{,}205$",
   "$0{,}341$"
  ],
  "correct": 0,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=44.",
  "pautaSteps": [
   "h_i = \\dfrac{4}{44} = 0{,}091"
  ],
  "conc": "La frecuencia relativa de [560, 600) es $h_i=0{,}091$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró edad (años) de 46 pacientes atendidos en urgencias, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 15)",
     "7,5",
     8,
     8,
     "0,174",
     "17,39%"
    ],
    [
     "[15, 30)",
     "22,5",
     12,
     20,
     "0,261",
     "43,48%"
    ],
    [
     "[30, 45)",
     "37,5",
     14,
     34,
     "0,304",
     "73,91%"
    ],
    [
     "[45, 60)",
     "52,5",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[60, 75)",
     "67,5",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Cuántos datos son menores a 30 años?",
  "alts": [
   "$13$",
   "$32$",
   "$27$",
   "$20$"
  ],
  "correct": 3,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [15, 30) = 20"
  ],
  "conc": "Son <b>20</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró edad (años) de 46 pacientes atendidos en urgencias, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 15)",
     "7,5",
     8,
     8,
     "0,174",
     "17,39%"
    ],
    [
     "[15, 30)",
     "22,5",
     12,
     20,
     "0,261",
     "43,48%"
    ],
    [
     "[30, 45)",
     "37,5",
     14,
     34,
     "0,304",
     "73,91%"
    ],
    [
     "[45, 60)",
     "52,5",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[60, 75)",
     "67,5",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Qué porcentaje de datos son de al menos 45 años?",
  "alts": [
   "$26{,}09\\%$",
   "$23{,}27\\%$",
   "$18{,}19\\%$",
   "$31{,}3\\%$"
  ],
  "correct": 0,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [30, 45) = 100\\% - 73{,}91\\% = 26{,}09\\%"
  ],
  "conc": "Es el <b>26{,}09\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró edad (años) de 46 pacientes atendidos en urgencias, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 15)",
     "7,5",
     8,
     8,
     "0,174",
     "17,39%"
    ],
    [
     "[15, 30)",
     "22,5",
     12,
     20,
     "0,261",
     "43,48%"
    ],
    [
     "[30, 45)",
     "37,5",
     14,
     34,
     "0,304",
     "73,91%"
    ],
    [
     "[45, 60)",
     "52,5",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[60, 75)",
     "67,5",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Cuántos datos están entre 15 y 60 años?",
  "alts": [
   "$51$",
   "$19$",
   "$34$",
   "$42$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 12+14+8 = 34"
  ],
  "conc": "Están entre esos límites <b>34</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró edad (años) de 46 pacientes atendidos en urgencias, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 15)",
     "7,5",
     8,
     8,
     "0,174",
     "17,39%"
    ],
    [
     "[15, 30)",
     "22,5",
     12,
     20,
     "0,261",
     "43,48%"
    ],
    [
     "[30, 45)",
     "37,5",
     14,
     34,
     "0,304",
     "73,91%"
    ],
    [
     "[45, 60)",
     "52,5",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[60, 75)",
     "67,5",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [45, 60)?",
  "alts": [
   "$67{,}5$",
   "$37{,}5$",
   "$22{,}5$",
   "$52{,}5$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{45+60}{2} = 52{,}5"
  ],
  "conc": "La marca de clase de [45, 60) es $m_i=52{,}5$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró edad (años) de 46 pacientes atendidos en urgencias, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[0, 15)",
     "7,5",
     8,
     8,
     "0,174",
     "17,39%"
    ],
    [
     "[15, 30)",
     "22,5",
     12,
     20,
     "0,261",
     "43,48%"
    ],
    [
     "[30, 45)",
     "37,5",
     14,
     34,
     "0,304",
     "73,91%"
    ],
    [
     "[45, 60)",
     "52,5",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[60, 75)",
     "67,5",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [0, 15)?",
  "alts": [
   "$0{,}087$",
   "$0{,}174$",
   "$0{,}261$",
   "$0{,}304$"
  ],
  "correct": 1,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=46.",
  "pautaSteps": [
   "h_i = \\dfrac{8}{46} = 0{,}174"
  ],
  "conc": "La frecuencia relativa de [0, 15) es $h_i=0{,}174$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Transporte · Combustible",
  "enun": "Se registró gasto mensual en combustible (miles $) de 50 conductores, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     9,
     9,
     "0,18",
     "18%"
    ],
    [
     "[30, 40)",
     "35",
     14,
     23,
     "0,28",
     "46%"
    ],
    [
     "[40, 50)",
     "45",
     15,
     38,
     "0,3",
     "76%"
    ],
    [
     "[50, 60)",
     "55",
     8,
     46,
     "0,16",
     "92%"
    ],
    [
     "[60, 70)",
     "65",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos datos son menores a 40 miles $?",
  "alts": [
   "$23$",
   "$11$",
   "$30$",
   "$16$"
  ],
  "correct": 0,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [30, 40) = 23"
  ],
  "conc": "Son <b>23</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Transporte · Combustible",
  "enun": "Se registró gasto mensual en combustible (miles $) de 50 conductores, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     9,
     9,
     "0,18",
     "18%"
    ],
    [
     "[30, 40)",
     "35",
     14,
     23,
     "0,28",
     "46%"
    ],
    [
     "[40, 50)",
     "45",
     15,
     38,
     "0,3",
     "76%"
    ],
    [
     "[50, 60)",
     "55",
     8,
     46,
     "0,16",
     "92%"
    ],
    [
     "[60, 70)",
     "65",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Qué porcentaje de datos son de al menos 50 miles $?",
  "alts": [
   "$31{,}34\\%$",
   "$26{,}4\\%$",
   "$19{,}13\\%$",
   "$24\\%$"
  ],
  "correct": 3,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [40, 50) = 100\\% - 76\\% = 24\\%"
  ],
  "conc": "Es el <b>24\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Transporte · Combustible",
  "enun": "Se registró gasto mensual en combustible (miles $) de 50 conductores, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     9,
     9,
     "0,18",
     "18%"
    ],
    [
     "[30, 40)",
     "35",
     14,
     23,
     "0,28",
     "46%"
    ],
    [
     "[40, 50)",
     "45",
     15,
     38,
     "0,3",
     "76%"
    ],
    [
     "[50, 60)",
     "55",
     8,
     46,
     "0,16",
     "92%"
    ],
    [
     "[60, 70)",
     "65",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos datos están entre 30 y 60 miles $?",
  "alts": [
   "$28$",
   "$54$",
   "$37$",
   "$17$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 14+15+8 = 37"
  ],
  "conc": "Están entre esos límites <b>37</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Transporte · Combustible",
  "enun": "Se registró gasto mensual en combustible (miles $) de 50 conductores, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     9,
     9,
     "0,18",
     "18%"
    ],
    [
     "[30, 40)",
     "35",
     14,
     23,
     "0,28",
     "46%"
    ],
    [
     "[40, 50)",
     "45",
     15,
     38,
     "0,3",
     "76%"
    ],
    [
     "[50, 60)",
     "55",
     8,
     46,
     "0,16",
     "92%"
    ],
    [
     "[60, 70)",
     "65",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [60, 70)?",
  "alts": [
   "$45$",
   "$55$",
   "$65$",
   "$25$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{60+70}{2} = 65"
  ],
  "conc": "La marca de clase de [60, 70) es $m_i=65$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Transporte · Combustible",
  "enun": "Se registró gasto mensual en combustible (miles $) de 50 conductores, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     9,
     9,
     "0,18",
     "18%"
    ],
    [
     "[30, 40)",
     "35",
     14,
     23,
     "0,28",
     "46%"
    ],
    [
     "[40, 50)",
     "45",
     15,
     38,
     "0,3",
     "76%"
    ],
    [
     "[50, 60)",
     "55",
     8,
     46,
     "0,16",
     "92%"
    ],
    [
     "[60, 70)",
     "65",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [30, 40)?",
  "alts": [
   "$0{,}08$",
   "$0{,}16$",
   "$0{,}3$",
   "$0{,}28$"
  ],
  "correct": 3,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=50.",
  "pautaSteps": [
   "h_i = \\dfrac{14}{50} = 0{,}28"
  ],
  "conc": "La frecuencia relativa de [30, 40) es $h_i=0{,}28$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Logística · Reparto",
  "enun": "Se registró tiempo de entrega (horas) de 40 pedidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,15",
     "15%"
    ],
    [
     "[6, 10)",
     "8",
     11,
     17,
     "0,275",
     "42,5%"
    ],
    [
     "[10, 14)",
     "12",
     13,
     30,
     "0,325",
     "75%"
    ],
    [
     "[14, 18)",
     "16",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[18, 22)",
     "20",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos datos son menores a 10 horas?",
  "alts": [
   "$17$",
   "$24$",
   "$10$",
   "$29$"
  ],
  "correct": 0,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [6, 10) = 17"
  ],
  "conc": "Son <b>17</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Logística · Reparto",
  "enun": "Se registró tiempo de entrega (horas) de 40 pedidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,15",
     "15%"
    ],
    [
     "[6, 10)",
     "8",
     11,
     17,
     "0,275",
     "42,5%"
    ],
    [
     "[10, 14)",
     "12",
     13,
     30,
     "0,325",
     "75%"
    ],
    [
     "[14, 18)",
     "16",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[18, 22)",
     "20",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Qué porcentaje de datos son de al menos 14 horas?",
  "alts": [
   "$17{,}29\\%$",
   "$25\\%$",
   "$30{,}14\\%$",
   "$22{,}43\\%$"
  ],
  "correct": 1,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [10, 14) = 100\\% - 75\\% = 25\\%"
  ],
  "conc": "Es el <b>25\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Logística · Reparto",
  "enun": "Se registró tiempo de entrega (horas) de 40 pedidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,15",
     "15%"
    ],
    [
     "[6, 10)",
     "8",
     11,
     17,
     "0,275",
     "42,5%"
    ],
    [
     "[10, 14)",
     "12",
     13,
     30,
     "0,325",
     "75%"
    ],
    [
     "[14, 18)",
     "16",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[18, 22)",
     "20",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos datos están entre 6 y 18 horas?",
  "alts": [
   "$16$",
   "$39$",
   "$48$",
   "$31$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 11+13+7 = 31"
  ],
  "conc": "Están entre esos límites <b>31</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Logística · Reparto",
  "enun": "Se registró tiempo de entrega (horas) de 40 pedidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,15",
     "15%"
    ],
    [
     "[6, 10)",
     "8",
     11,
     17,
     "0,275",
     "42,5%"
    ],
    [
     "[10, 14)",
     "12",
     13,
     30,
     "0,325",
     "75%"
    ],
    [
     "[14, 18)",
     "16",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[18, 22)",
     "20",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [2, 6)?",
  "alts": [
   "$8$",
   "$4$",
   "$16$",
   "$12$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{2+6}{2} = 4"
  ],
  "conc": "La marca de clase de [2, 6) es $m_i=4$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Logística · Reparto",
  "enun": "Se registró tiempo de entrega (horas) de 40 pedidos, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,15",
     "15%"
    ],
    [
     "[6, 10)",
     "8",
     11,
     17,
     "0,275",
     "42,5%"
    ],
    [
     "[10, 14)",
     "12",
     13,
     30,
     "0,325",
     "75%"
    ],
    [
     "[14, 18)",
     "16",
     7,
     37,
     "0,175",
     "92,5%"
    ],
    [
     "[18, 22)",
     "20",
     3,
     40,
     "0,075",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [10, 14)?",
  "alts": [
   "$0{,}325$",
   "$0{,}075$",
   "$0{,}175$",
   "$0{,}15$"
  ],
  "correct": 0,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=40.",
  "pautaSteps": [
   "h_i = \\dfrac{13}{40} = 0{,}325"
  ],
  "conc": "La frecuencia relativa de [10, 14) es $h_i=0{,}325$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Transporte · Vehículos",
  "enun": "Se registró rendimiento de combustible (km/L) de 45 vehículos, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[8, 10)",
     "9",
     7,
     7,
     "0,156",
     "15,56%"
    ],
    [
     "[10, 12)",
     "11",
     12,
     19,
     "0,267",
     "42,22%"
    ],
    [
     "[12, 14)",
     "13",
     14,
     33,
     "0,311",
     "73,33%"
    ],
    [
     "[14, 16)",
     "15",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 18)",
     "17",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuántos datos son menores a 12 km/L?",
  "alts": [
   "$12$",
   "$7$",
   "$26$",
   "$19$"
  ],
  "correct": 3,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [10, 12) = 19"
  ],
  "conc": "Son <b>19</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Transporte · Vehículos",
  "enun": "Se registró rendimiento de combustible (km/L) de 45 vehículos, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[8, 10)",
     "9",
     7,
     7,
     "0,156",
     "15,56%"
    ],
    [
     "[10, 12)",
     "11",
     12,
     19,
     "0,267",
     "42,22%"
    ],
    [
     "[12, 14)",
     "13",
     14,
     33,
     "0,311",
     "73,33%"
    ],
    [
     "[14, 16)",
     "15",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 18)",
     "17",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Qué porcentaje de datos son de al menos 14 km/L?",
  "alts": [
   "$21{,}12\\%$",
   "$29{,}47\\%$",
   "$26{,}67\\%$",
   "$34{,}67\\%$"
  ],
  "correct": 2,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [12, 14) = 100\\% - 73{,}33\\% = 26{,}67\\%"
  ],
  "conc": "Es el <b>26{,}67\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Transporte · Vehículos",
  "enun": "Se registró rendimiento de combustible (km/L) de 45 vehículos, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[8, 10)",
     "9",
     7,
     7,
     "0,156",
     "15,56%"
    ],
    [
     "[10, 12)",
     "11",
     12,
     19,
     "0,267",
     "42,22%"
    ],
    [
     "[12, 14)",
     "13",
     14,
     33,
     "0,311",
     "73,33%"
    ],
    [
     "[14, 16)",
     "15",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 18)",
     "17",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuántos datos están entre 10 y 16 km/L?",
  "alts": [
   "$26$",
   "$17$",
   "$34$",
   "$49$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 12+14+8 = 34"
  ],
  "conc": "Están entre esos límites <b>34</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Transporte · Vehículos",
  "enun": "Se registró rendimiento de combustible (km/L) de 45 vehículos, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[8, 10)",
     "9",
     7,
     7,
     "0,156",
     "15,56%"
    ],
    [
     "[10, 12)",
     "11",
     12,
     19,
     "0,267",
     "42,22%"
    ],
    [
     "[12, 14)",
     "13",
     14,
     33,
     "0,311",
     "73,33%"
    ],
    [
     "[14, 16)",
     "15",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 18)",
     "17",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [10, 12)?",
  "alts": [
   "$13$",
   "$17$",
   "$15$",
   "$11$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{10+12}{2} = 11"
  ],
  "conc": "La marca de clase de [10, 12) es $m_i=11$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Transporte · Vehículos",
  "enun": "Se registró rendimiento de combustible (km/L) de 45 vehículos, obteniéndose $n=45$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[8, 10)",
     "9",
     7,
     7,
     "0,156",
     "15,56%"
    ],
    [
     "[10, 12)",
     "11",
     12,
     19,
     "0,267",
     "42,22%"
    ],
    [
     "[12, 14)",
     "13",
     14,
     33,
     "0,311",
     "73,33%"
    ],
    [
     "[14, 16)",
     "15",
     8,
     41,
     "0,178",
     "91,11%"
    ],
    [
     "[16, 18)",
     "17",
     4,
     45,
     "0,089",
     "100%"
    ],
    [
     "Total",
     "",
     45,
     45,
     "",
     ""
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [14, 16)?",
  "alts": [
   "$0{,}267$",
   "$0{,}178$",
   "$0{,}156$",
   "$0{,}311$"
  ],
  "correct": 1,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=45.",
  "pautaSteps": [
   "h_i = \\dfrac{8}{45} = 0{,}178"
  ],
  "conc": "La frecuencia relativa de [14, 16) es $h_i=0{,}178$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró superficie (m²) de 42 departamentos en arriendo, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[35, 50)",
     "42,5",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[50, 65)",
     "57,5",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[65, 80)",
     "72,5",
     14,
     29,
     "0,333",
     "69,05%"
    ],
    [
     "[80, 95)",
     "87,5",
     9,
     38,
     "0,214",
     "90,48%"
    ],
    [
     "[95, 110)",
     "102,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuántos datos son menores a 65 m²?",
  "alts": [
   "$15$",
   "$21$",
   "$24$",
   "$10$"
  ],
  "correct": 0,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [50, 65) = 15"
  ],
  "conc": "Son <b>15</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró superficie (m²) de 42 departamentos en arriendo, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[35, 50)",
     "42,5",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[50, 65)",
     "57,5",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[65, 80)",
     "72,5",
     14,
     29,
     "0,333",
     "69,05%"
    ],
    [
     "[80, 95)",
     "87,5",
     9,
     38,
     "0,214",
     "90,48%"
    ],
    [
     "[95, 110)",
     "102,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Qué porcentaje de datos son de al menos 80 m²?",
  "alts": [
   "$27{,}65\\%$",
   "$37{,}14\\%$",
   "$21{,}6\\%$",
   "$30{,}95\\%$"
  ],
  "correct": 3,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [65, 80) = 100\\% - 69{,}05\\% = 30{,}95\\%"
  ],
  "conc": "Es el <b>30{,}95\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró superficie (m²) de 42 departamentos en arriendo, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[35, 50)",
     "42,5",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[50, 65)",
     "57,5",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[65, 80)",
     "72,5",
     14,
     29,
     "0,333",
     "69,05%"
    ],
    [
     "[80, 95)",
     "87,5",
     9,
     38,
     "0,214",
     "90,48%"
    ],
    [
     "[95, 110)",
     "102,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuántos datos están entre 50 y 95 m²?",
  "alts": [
   "$18$",
   "$41$",
   "$33$",
   "$50$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 10+14+9 = 33"
  ],
  "conc": "Están entre esos límites <b>33</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró superficie (m²) de 42 departamentos en arriendo, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[35, 50)",
     "42,5",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[50, 65)",
     "57,5",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[65, 80)",
     "72,5",
     14,
     29,
     "0,333",
     "69,05%"
    ],
    [
     "[80, 95)",
     "87,5",
     9,
     38,
     "0,214",
     "90,48%"
    ],
    [
     "[95, 110)",
     "102,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [65, 80)?",
  "alts": [
   "$57{,}5$",
   "$72{,}5$",
   "$42{,}5$",
   "$102{,}5$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{65+80}{2} = 72{,}5"
  ],
  "conc": "La marca de clase de [65, 80) es $m_i=72{,}5$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró superficie (m²) de 42 departamentos en arriendo, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[35, 50)",
     "42,5",
     5,
     5,
     "0,119",
     "11,9%"
    ],
    [
     "[50, 65)",
     "57,5",
     10,
     15,
     "0,238",
     "35,71%"
    ],
    [
     "[65, 80)",
     "72,5",
     14,
     29,
     "0,333",
     "69,05%"
    ],
    [
     "[80, 95)",
     "87,5",
     9,
     38,
     "0,214",
     "90,48%"
    ],
    [
     "[95, 110)",
     "102,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [95, 110)?",
  "alts": [
   "$0{,}095$",
   "$0{,}333$",
   "$0{,}214$",
   "$0{,}238$"
  ],
  "correct": 0,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=42.",
  "pautaSteps": [
   "h_i = \\dfrac{4}{42} = 0{,}095"
  ],
  "conc": "La frecuencia relativa de [95, 110) es $h_i=0{,}095$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Educación · Tecnología",
  "enun": "Se registró tiempo de uso diario de celular (min) de 48 estudiantes, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[60, 90)",
     "75",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[90, 120)",
     "105",
     13,
     19,
     "0,271",
     "39,58%"
    ],
    [
     "[120, 150)",
     "135",
     15,
     34,
     "0,313",
     "70,83%"
    ],
    [
     "[150, 180)",
     "165",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[180, 210)",
     "195",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuántos datos son menores a 120 min?",
  "alts": [
   "$12$",
   "$19$",
   "$26$",
   "$7$"
  ],
  "correct": 1,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [90, 120) = 19"
  ],
  "conc": "Son <b>19</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Educación · Tecnología",
  "enun": "Se registró tiempo de uso diario de celular (min) de 48 estudiantes, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[60, 90)",
     "75",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[90, 120)",
     "105",
     13,
     19,
     "0,271",
     "39,58%"
    ],
    [
     "[120, 150)",
     "135",
     15,
     34,
     "0,313",
     "70,83%"
    ],
    [
     "[150, 180)",
     "165",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[180, 210)",
     "195",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Qué porcentaje de datos son de al menos 150 min?",
  "alts": [
   "$38{,}06\\%$",
   "$32{,}08\\%$",
   "$29{,}17\\%$",
   "$23{,}26\\%$"
  ],
  "correct": 2,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [120, 150) = 100\\% - 70{,}83\\% = 29{,}17\\%"
  ],
  "conc": "Es el <b>29{,}17\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Educación · Tecnología",
  "enun": "Se registró tiempo de uso diario de celular (min) de 48 estudiantes, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[60, 90)",
     "75",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[90, 120)",
     "105",
     13,
     19,
     "0,271",
     "39,58%"
    ],
    [
     "[120, 150)",
     "135",
     15,
     34,
     "0,313",
     "70,83%"
    ],
    [
     "[150, 180)",
     "165",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[180, 210)",
     "195",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuántos datos están entre 90 y 180 min?",
  "alts": [
   "$54$",
   "$17$",
   "$37$",
   "$28$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 13+15+9 = 37"
  ],
  "conc": "Están entre esos límites <b>37</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Educación · Tecnología",
  "enun": "Se registró tiempo de uso diario de celular (min) de 48 estudiantes, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[60, 90)",
     "75",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[90, 120)",
     "105",
     13,
     19,
     "0,271",
     "39,58%"
    ],
    [
     "[120, 150)",
     "135",
     15,
     34,
     "0,313",
     "70,83%"
    ],
    [
     "[150, 180)",
     "165",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[180, 210)",
     "195",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [150, 180)?",
  "alts": [
   "$75$",
   "$165$",
   "$105$",
   "$135$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{150+180}{2} = 165"
  ],
  "conc": "La marca de clase de [150, 180) es $m_i=165$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Educación · Tecnología",
  "enun": "Se registró tiempo de uso diario de celular (min) de 48 estudiantes, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[60, 90)",
     "75",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[90, 120)",
     "105",
     13,
     19,
     "0,271",
     "39,58%"
    ],
    [
     "[120, 150)",
     "135",
     15,
     34,
     "0,313",
     "70,83%"
    ],
    [
     "[150, 180)",
     "165",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[180, 210)",
     "195",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [60, 90)?",
  "alts": [
   "$0{,}125$",
   "$0{,}271$",
   "$0{,}104$",
   "$0{,}313$"
  ],
  "correct": 0,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=48.",
  "pautaSteps": [
   "h_i = \\dfrac{6}{48} = 0{,}125"
  ],
  "conc": "La frecuencia relativa de [60, 90) es $h_i=0{,}125$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Logística · Correo",
  "enun": "Se registró peso (gramos) de paquetes despachados de 44 paquetes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 200)",
     "150",
     7,
     7,
     "0,159",
     "15,91%"
    ],
    [
     "[200, 300)",
     "250",
     11,
     18,
     "0,25",
     "40,91%"
    ],
    [
     "[300, 400)",
     "350",
     13,
     31,
     "0,295",
     "70,45%"
    ],
    [
     "[400, 500)",
     "450",
     8,
     39,
     "0,182",
     "88,64%"
    ],
    [
     "[500, 600)",
     "550",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuántos datos son menores a 300 gramos?",
  "alts": [
   "$30$",
   "$18$",
   "$11$",
   "$25$"
  ],
  "correct": 1,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [200, 300) = 18"
  ],
  "conc": "Son <b>18</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Logística · Correo",
  "enun": "Se registró peso (gramos) de paquetes despachados de 44 paquetes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 200)",
     "150",
     7,
     7,
     "0,159",
     "15,91%"
    ],
    [
     "[200, 300)",
     "250",
     11,
     18,
     "0,25",
     "40,91%"
    ],
    [
     "[300, 400)",
     "350",
     13,
     31,
     "0,295",
     "70,45%"
    ],
    [
     "[400, 500)",
     "450",
     8,
     39,
     "0,182",
     "88,64%"
    ],
    [
     "[500, 600)",
     "550",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Qué porcentaje de datos son de al menos 400 gramos?",
  "alts": [
   "$35{,}59\\%$",
   "$26{,}52\\%$",
   "$20{,}47\\%$",
   "$29{,}55\\%$"
  ],
  "correct": 3,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [300, 400) = 100\\% - 70{,}45\\% = 29{,}55\\%"
  ],
  "conc": "Es el <b>29{,}55\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Logística · Correo",
  "enun": "Se registró peso (gramos) de paquetes despachados de 44 paquetes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 200)",
     "150",
     7,
     7,
     "0,159",
     "15,91%"
    ],
    [
     "[200, 300)",
     "250",
     11,
     18,
     "0,25",
     "40,91%"
    ],
    [
     "[300, 400)",
     "350",
     13,
     31,
     "0,295",
     "70,45%"
    ],
    [
     "[400, 500)",
     "450",
     8,
     39,
     "0,182",
     "88,64%"
    ],
    [
     "[500, 600)",
     "550",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuántos datos están entre 200 y 500 gramos?",
  "alts": [
   "$49$",
   "$32$",
   "$40$",
   "$17$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 11+13+8 = 32"
  ],
  "conc": "Están entre esos límites <b>32</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Logística · Correo",
  "enun": "Se registró peso (gramos) de paquetes despachados de 44 paquetes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 200)",
     "150",
     7,
     7,
     "0,159",
     "15,91%"
    ],
    [
     "[200, 300)",
     "250",
     11,
     18,
     "0,25",
     "40,91%"
    ],
    [
     "[300, 400)",
     "350",
     13,
     31,
     "0,295",
     "70,45%"
    ],
    [
     "[400, 500)",
     "450",
     8,
     39,
     "0,182",
     "88,64%"
    ],
    [
     "[500, 600)",
     "550",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [500, 600)?",
  "alts": [
   "$550$",
   "$450$",
   "$350$",
   "$150$"
  ],
  "correct": 0,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{500+600}{2} = 550"
  ],
  "conc": "La marca de clase de [500, 600) es $m_i=550$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Logística · Correo",
  "enun": "Se registró peso (gramos) de paquetes despachados de 44 paquetes, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 200)",
     "150",
     7,
     7,
     "0,159",
     "15,91%"
    ],
    [
     "[200, 300)",
     "250",
     11,
     18,
     "0,25",
     "40,91%"
    ],
    [
     "[300, 400)",
     "350",
     13,
     31,
     "0,295",
     "70,45%"
    ],
    [
     "[400, 500)",
     "450",
     8,
     39,
     "0,182",
     "88,64%"
    ],
    [
     "[500, 600)",
     "550",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [200, 300)?",
  "alts": [
   "$0{,}295$",
   "$0{,}182$",
   "$0{,}114$",
   "$0{,}25$"
  ],
  "correct": 3,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=44.",
  "pautaSteps": [
   "h_i = \\dfrac{11}{44} = 0{,}25"
  ],
  "conc": "La frecuencia relativa de [200, 300) es $h_i=0{,}25$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Clima · Registro diario",
  "enun": "Se registró temperatura máxima diaria (°C) de 40 días, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[12, 16)",
     "14",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[16, 20)",
     "18",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[20, 24)",
     "22",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[24, 28)",
     "26",
     9,
     36,
     "0,225",
     "90%"
    ],
    [
     "[28, 32)",
     "30",
     4,
     40,
     "0,1",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos datos son menores a 20 °C?",
  "alts": [
   "$4$",
   "$7$",
   "$13$",
   "$18$"
  ],
  "correct": 2,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [16, 20) = 13"
  ],
  "conc": "Son <b>13</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Clima · Registro diario",
  "enun": "Se registró temperatura máxima diaria (°C) de 40 días, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[12, 16)",
     "14",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[16, 20)",
     "18",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[20, 24)",
     "22",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[24, 28)",
     "26",
     9,
     36,
     "0,225",
     "90%"
    ],
    [
     "[28, 32)",
     "30",
     4,
     40,
     "0,1",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Qué porcentaje de datos son de al menos 24 °C?",
  "alts": [
   "$42{,}25\\%$",
   "$25{,}79\\%$",
   "$32{,}5\\%$",
   "$35{,}89\\%$"
  ],
  "correct": 2,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [20, 24) = 100\\% - 67{,}5\\% = 32{,}5\\%"
  ],
  "conc": "Es el <b>32{,}5\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Clima · Registro diario",
  "enun": "Se registró temperatura máxima diaria (°C) de 40 días, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[12, 16)",
     "14",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[16, 20)",
     "18",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[20, 24)",
     "22",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[24, 28)",
     "26",
     9,
     36,
     "0,225",
     "90%"
    ],
    [
     "[28, 32)",
     "30",
     4,
     40,
     "0,1",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos datos están entre 16 y 28 °C?",
  "alts": [
   "$15$",
   "$47$",
   "$24$",
   "$32$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 9+14+9 = 32"
  ],
  "conc": "Están entre esos límites <b>32</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Clima · Registro diario",
  "enun": "Se registró temperatura máxima diaria (°C) de 40 días, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[12, 16)",
     "14",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[16, 20)",
     "18",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[20, 24)",
     "22",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[24, 28)",
     "26",
     9,
     36,
     "0,225",
     "90%"
    ],
    [
     "[28, 32)",
     "30",
     4,
     40,
     "0,1",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [12, 16)?",
  "alts": [
   "$18$",
   "$14$",
   "$22$",
   "$30$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{12+16}{2} = 14"
  ],
  "conc": "La marca de clase de [12, 16) es $m_i=14$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Clima · Registro diario",
  "enun": "Se registró temperatura máxima diaria (°C) de 40 días, obteniéndose $n=40$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[12, 16)",
     "14",
     4,
     4,
     "0,1",
     "10%"
    ],
    [
     "[16, 20)",
     "18",
     9,
     13,
     "0,225",
     "32,5%"
    ],
    [
     "[20, 24)",
     "22",
     14,
     27,
     "0,35",
     "67,5%"
    ],
    [
     "[24, 28)",
     "26",
     9,
     36,
     "0,225",
     "90%"
    ],
    [
     "[28, 32)",
     "30",
     4,
     40,
     "0,1",
     "100%"
    ],
    [
     "Total",
     "",
     40,
     40,
     "",
     ""
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [20, 24)?",
  "alts": [
   "$0{,}35$",
   "$0{,}13$",
   "$0{,}225$",
   "$0{,}1$"
  ],
  "correct": 0,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=40.",
  "pautaSteps": [
   "h_i = \\dfrac{14}{40} = 0{,}35"
  ],
  "conc": "La frecuencia relativa de [20, 24) es $h_i=0{,}35$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Retail · Retail",
  "enun": "Se registró sueldo líquido (miles $) de 50 empleados de una cadena de retail, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[350, 450)",
     "400",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 550)",
     "500",
     13,
     21,
     "0,26",
     "42%"
    ],
    [
     "[550, 650)",
     "600",
     16,
     37,
     "0,32",
     "74%"
    ],
    [
     "[650, 750)",
     "700",
     9,
     46,
     "0,18",
     "92%"
    ],
    [
     "[750, 850)",
     "800",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos datos son menores a 550 miles $?",
  "alts": [
   "$28$",
   "$14$",
   "$33$",
   "$21$"
  ],
  "correct": 3,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [450, 550) = 21"
  ],
  "conc": "Son <b>21</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Retail · Retail",
  "enun": "Se registró sueldo líquido (miles $) de 50 empleados de una cadena de retail, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[350, 450)",
     "400",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 550)",
     "500",
     13,
     21,
     "0,26",
     "42%"
    ],
    [
     "[550, 650)",
     "600",
     16,
     37,
     "0,32",
     "74%"
    ],
    [
     "[650, 750)",
     "700",
     9,
     46,
     "0,18",
     "92%"
    ],
    [
     "[750, 850)",
     "800",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Qué porcentaje de datos son de al menos 650 miles $?",
  "alts": [
   "$31{,}2\\%$",
   "$23{,}19\\%$",
   "$26\\%$",
   "$18{,}13\\%$"
  ],
  "correct": 2,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [550, 650) = 100\\% - 74\\% = 26\\%"
  ],
  "conc": "Es el <b>26\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Retail · Retail",
  "enun": "Se registró sueldo líquido (miles $) de 50 empleados de una cadena de retail, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[350, 450)",
     "400",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 550)",
     "500",
     13,
     21,
     "0,26",
     "42%"
    ],
    [
     "[550, 650)",
     "600",
     16,
     37,
     "0,32",
     "74%"
    ],
    [
     "[650, 750)",
     "700",
     9,
     46,
     "0,18",
     "92%"
    ],
    [
     "[750, 850)",
     "800",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos datos están entre 450 y 750 miles $?",
  "alts": [
   "$21$",
   "$38$",
   "$58$",
   "$47$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 13+16+9 = 38"
  ],
  "conc": "Están entre esos límites <b>38</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Retail · Retail",
  "enun": "Se registró sueldo líquido (miles $) de 50 empleados de una cadena de retail, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[350, 450)",
     "400",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 550)",
     "500",
     13,
     21,
     "0,26",
     "42%"
    ],
    [
     "[550, 650)",
     "600",
     16,
     37,
     "0,32",
     "74%"
    ],
    [
     "[650, 750)",
     "700",
     9,
     46,
     "0,18",
     "92%"
    ],
    [
     "[750, 850)",
     "800",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [450, 550)?",
  "alts": [
   "$700$",
   "$600$",
   "$800$",
   "$500$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{450+550}{2} = 500"
  ],
  "conc": "La marca de clase de [450, 550) es $m_i=500$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Retail · Retail",
  "enun": "Se registró sueldo líquido (miles $) de 50 empleados de una cadena de retail, obteniéndose $n=50$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[350, 450)",
     "400",
     8,
     8,
     "0,16",
     "16%"
    ],
    [
     "[450, 550)",
     "500",
     13,
     21,
     "0,26",
     "42%"
    ],
    [
     "[550, 650)",
     "600",
     16,
     37,
     "0,32",
     "74%"
    ],
    [
     "[650, 750)",
     "700",
     9,
     46,
     "0,18",
     "92%"
    ],
    [
     "[750, 850)",
     "800",
     4,
     50,
     "0,08",
     "100%"
    ],
    [
     "Total",
     "",
     50,
     50,
     "",
     ""
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [650, 750)?",
  "alts": [
   "$0{,}32$",
   "$0{,}18$",
   "$0{,}26$",
   "$0{,}16$"
  ],
  "correct": 1,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=50.",
  "pautaSteps": [
   "h_i = \\dfrac{9}{50} = 0{,}18"
  ],
  "conc": "La frecuencia relativa de [650, 750) es $h_i=0{,}18$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Automotriz · Taller",
  "enun": "Se registró tiempo de reparación (horas) de 42 vehículos, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[1, 4)",
     "2,5",
     6,
     6,
     "0,143",
     "14,29%"
    ],
    [
     "[4, 7)",
     "5,5",
     11,
     17,
     "0,262",
     "40,48%"
    ],
    [
     "[7, 10)",
     "8,5",
     14,
     31,
     "0,333",
     "73,81%"
    ],
    [
     "[10, 13)",
     "11,5",
     7,
     38,
     "0,167",
     "90,48%"
    ],
    [
     "[13, 16)",
     "14,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuántos datos son menores a 7 horas?",
  "alts": [
   "$5$",
   "$10$",
   "$17$",
   "$24$"
  ],
  "correct": 2,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [4, 7) = 17"
  ],
  "conc": "Son <b>17</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Automotriz · Taller",
  "enun": "Se registró tiempo de reparación (horas) de 42 vehículos, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[1, 4)",
     "2,5",
     6,
     6,
     "0,143",
     "14,29%"
    ],
    [
     "[4, 7)",
     "5,5",
     11,
     17,
     "0,262",
     "40,48%"
    ],
    [
     "[7, 10)",
     "8,5",
     14,
     31,
     "0,333",
     "73,81%"
    ],
    [
     "[10, 13)",
     "11,5",
     7,
     38,
     "0,167",
     "90,48%"
    ],
    [
     "[13, 16)",
     "14,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Qué porcentaje de datos son de al menos 10 horas?",
  "alts": [
   "$28{,}81\\%$",
   "$20{,}88\\%$",
   "$34{,}19\\%$",
   "$26{,}19\\%$"
  ],
  "correct": 3,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [7, 10) = 100\\% - 73{,}81\\% = 26{,}19\\%"
  ],
  "conc": "Es el <b>26{,}19\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Automotriz · Taller",
  "enun": "Se registró tiempo de reparación (horas) de 42 vehículos, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[1, 4)",
     "2,5",
     6,
     6,
     "0,143",
     "14,29%"
    ],
    [
     "[4, 7)",
     "5,5",
     11,
     17,
     "0,262",
     "40,48%"
    ],
    [
     "[7, 10)",
     "8,5",
     14,
     31,
     "0,333",
     "73,81%"
    ],
    [
     "[10, 13)",
     "11,5",
     7,
     38,
     "0,167",
     "90,48%"
    ],
    [
     "[13, 16)",
     "14,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuántos datos están entre 4 y 13 horas?",
  "alts": [
   "$32$",
   "$47$",
   "$24$",
   "$15$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 11+14+7 = 32"
  ],
  "conc": "Están entre esos límites <b>32</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Automotriz · Taller",
  "enun": "Se registró tiempo de reparación (horas) de 42 vehículos, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[1, 4)",
     "2,5",
     6,
     6,
     "0,143",
     "14,29%"
    ],
    [
     "[4, 7)",
     "5,5",
     11,
     17,
     "0,262",
     "40,48%"
    ],
    [
     "[7, 10)",
     "8,5",
     14,
     31,
     "0,333",
     "73,81%"
    ],
    [
     "[10, 13)",
     "11,5",
     7,
     38,
     "0,167",
     "90,48%"
    ],
    [
     "[13, 16)",
     "14,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [7, 10)?",
  "alts": [
   "$8{,}5$",
   "$2{,}5$",
   "$14{,}5$",
   "$5{,}5$"
  ],
  "correct": 0,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{7+10}{2} = 8{,}5"
  ],
  "conc": "La marca de clase de [7, 10) es $m_i=8{,}5$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Automotriz · Taller",
  "enun": "Se registró tiempo de reparación (horas) de 42 vehículos, obteniéndose $n=42$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[1, 4)",
     "2,5",
     6,
     6,
     "0,143",
     "14,29%"
    ],
    [
     "[4, 7)",
     "5,5",
     11,
     17,
     "0,262",
     "40,48%"
    ],
    [
     "[7, 10)",
     "8,5",
     14,
     31,
     "0,333",
     "73,81%"
    ],
    [
     "[10, 13)",
     "11,5",
     7,
     38,
     "0,167",
     "90,48%"
    ],
    [
     "[13, 16)",
     "14,5",
     4,
     42,
     "0,095",
     "100%"
    ],
    [
     "Total",
     "",
     42,
     42,
     "",
     ""
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [13, 16)?",
  "alts": [
   "$0{,}262$",
   "$0{,}167$",
   "$0{,}333$",
   "$0{,}095$"
  ],
  "correct": 3,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=42.",
  "pautaSteps": [
   "h_i = \\dfrac{4}{42} = 0{,}095"
  ],
  "conc": "La frecuencia relativa de [13, 16) es $h_i=0{,}095$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Hogar · Energía",
  "enun": "Se registró consumo eléctrico mensual (kWh) de 46 hogares, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 150)",
     "125",
     7,
     7,
     "0,152",
     "15,22%"
    ],
    [
     "[150, 200)",
     "175",
     12,
     19,
     "0,261",
     "41,3%"
    ],
    [
     "[200, 250)",
     "225",
     15,
     34,
     "0,326",
     "73,91%"
    ],
    [
     "[250, 300)",
     "275",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[300, 350)",
     "325",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Cuántos datos son menores a 200 kWh?",
  "alts": [
   "$12$",
   "$26$",
   "$19$",
   "$31$"
  ],
  "correct": 2,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [150, 200) = 19"
  ],
  "conc": "Son <b>19</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Hogar · Energía",
  "enun": "Se registró consumo eléctrico mensual (kWh) de 46 hogares, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 150)",
     "125",
     7,
     7,
     "0,152",
     "15,22%"
    ],
    [
     "[150, 200)",
     "175",
     12,
     19,
     "0,261",
     "41,3%"
    ],
    [
     "[200, 250)",
     "225",
     15,
     34,
     "0,326",
     "73,91%"
    ],
    [
     "[250, 300)",
     "275",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[300, 350)",
     "325",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Qué porcentaje de datos son de al menos 250 kWh?",
  "alts": [
   "$18{,}05\\%$",
   "$26{,}09\\%$",
   "$23{,}41\\%$",
   "$31{,}44\\%$"
  ],
  "correct": 1,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [200, 250) = 100\\% - 73{,}91\\% = 26{,}09\\%"
  ],
  "conc": "Es el <b>26{,}09\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Hogar · Energía",
  "enun": "Se registró consumo eléctrico mensual (kWh) de 46 hogares, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 150)",
     "125",
     7,
     7,
     "0,152",
     "15,22%"
    ],
    [
     "[150, 200)",
     "175",
     12,
     19,
     "0,261",
     "41,3%"
    ],
    [
     "[200, 250)",
     "225",
     15,
     34,
     "0,326",
     "73,91%"
    ],
    [
     "[250, 300)",
     "275",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[300, 350)",
     "325",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Cuántos datos están entre 150 y 300 kWh?",
  "alts": [
   "$35$",
   "$20$",
   "$52$",
   "$43$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 12+15+8 = 35"
  ],
  "conc": "Están entre esos límites <b>35</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Hogar · Energía",
  "enun": "Se registró consumo eléctrico mensual (kWh) de 46 hogares, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 150)",
     "125",
     7,
     7,
     "0,152",
     "15,22%"
    ],
    [
     "[150, 200)",
     "175",
     12,
     19,
     "0,261",
     "41,3%"
    ],
    [
     "[200, 250)",
     "225",
     15,
     34,
     "0,326",
     "73,91%"
    ],
    [
     "[250, 300)",
     "275",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[300, 350)",
     "325",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [250, 300)?",
  "alts": [
   "$175$",
   "$275$",
   "$125$",
   "$225$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{250+300}{2} = 275"
  ],
  "conc": "La marca de clase de [250, 300) es $m_i=275$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Hogar · Energía",
  "enun": "Se registró consumo eléctrico mensual (kWh) de 46 hogares, obteniéndose $n=46$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[100, 150)",
     "125",
     7,
     7,
     "0,152",
     "15,22%"
    ],
    [
     "[150, 200)",
     "175",
     12,
     19,
     "0,261",
     "41,3%"
    ],
    [
     "[200, 250)",
     "225",
     15,
     34,
     "0,326",
     "73,91%"
    ],
    [
     "[250, 300)",
     "275",
     8,
     42,
     "0,174",
     "91,3%"
    ],
    [
     "[300, 350)",
     "325",
     4,
     46,
     "0,087",
     "100%"
    ],
    [
     "Total",
     "",
     46,
     46,
     "",
     ""
    ]
   ],
   "N": 46
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [100, 150)?",
  "alts": [
   "$0{,}261$",
   "$0{,}087$",
   "$0{,}152$",
   "$0{,}326$"
  ],
  "correct": 2,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=46.",
  "pautaSteps": [
   "h_i = \\dfrac{7}{46} = 0{,}152"
  ],
  "conc": "La frecuencia relativa de [100, 150) es $h_i=0{,}152$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Logística · Reparto",
  "enun": "Se registró distancia recorrida diariamente (km) de 44 repartidores, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 18)",
     "14",
     5,
     5,
     "0,114",
     "11,36%"
    ],
    [
     "[18, 26)",
     "22",
     10,
     15,
     "0,227",
     "34,09%"
    ],
    [
     "[26, 34)",
     "30",
     15,
     30,
     "0,341",
     "68,18%"
    ],
    [
     "[34, 42)",
     "38",
     9,
     39,
     "0,205",
     "88,64%"
    ],
    [
     "[42, 50)",
     "46",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuántos datos son menores a 26 km?",
  "alts": [
   "$6$",
   "$20$",
   "$15$",
   "$9$"
  ],
  "correct": 2,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [18, 26) = 15"
  ],
  "conc": "Son <b>15</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Logística · Reparto",
  "enun": "Se registró distancia recorrida diariamente (km) de 44 repartidores, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 18)",
     "14",
     5,
     5,
     "0,114",
     "11,36%"
    ],
    [
     "[18, 26)",
     "22",
     10,
     15,
     "0,227",
     "34,09%"
    ],
    [
     "[26, 34)",
     "30",
     15,
     30,
     "0,341",
     "68,18%"
    ],
    [
     "[34, 42)",
     "38",
     9,
     39,
     "0,205",
     "88,64%"
    ],
    [
     "[42, 50)",
     "46",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Qué porcentaje de datos son de al menos 34 km?",
  "alts": [
   "$31{,}82\\%$",
   "$25{,}24\\%$",
   "$35{,}14\\%$",
   "$41{,}36\\%$"
  ],
  "correct": 0,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [26, 34) = 100\\% - 68{,}18\\% = 31{,}82\\%"
  ],
  "conc": "Es el <b>31{,}82\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Logística · Reparto",
  "enun": "Se registró distancia recorrida diariamente (km) de 44 repartidores, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 18)",
     "14",
     5,
     5,
     "0,114",
     "11,36%"
    ],
    [
     "[18, 26)",
     "22",
     10,
     15,
     "0,227",
     "34,09%"
    ],
    [
     "[26, 34)",
     "30",
     15,
     30,
     "0,341",
     "68,18%"
    ],
    [
     "[34, 42)",
     "38",
     9,
     39,
     "0,205",
     "88,64%"
    ],
    [
     "[42, 50)",
     "46",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuántos datos están entre 18 y 42 km?",
  "alts": [
   "$17$",
   "$34$",
   "$26$",
   "$49$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 10+15+9 = 34"
  ],
  "conc": "Están entre esos límites <b>34</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Logística · Reparto",
  "enun": "Se registró distancia recorrida diariamente (km) de 44 repartidores, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 18)",
     "14",
     5,
     5,
     "0,114",
     "11,36%"
    ],
    [
     "[18, 26)",
     "22",
     10,
     15,
     "0,227",
     "34,09%"
    ],
    [
     "[26, 34)",
     "30",
     15,
     30,
     "0,341",
     "68,18%"
    ],
    [
     "[34, 42)",
     "38",
     9,
     39,
     "0,205",
     "88,64%"
    ],
    [
     "[42, 50)",
     "46",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [42, 50)?",
  "alts": [
   "$46$",
   "$14$",
   "$38$",
   "$30$"
  ],
  "correct": 0,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{42+50}{2} = 46"
  ],
  "conc": "La marca de clase de [42, 50) es $m_i=46$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Logística · Reparto",
  "enun": "Se registró distancia recorrida diariamente (km) de 44 repartidores, obteniéndose $n=44$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[10, 18)",
     "14",
     5,
     5,
     "0,114",
     "11,36%"
    ],
    [
     "[18, 26)",
     "22",
     10,
     15,
     "0,227",
     "34,09%"
    ],
    [
     "[26, 34)",
     "30",
     15,
     30,
     "0,341",
     "68,18%"
    ],
    [
     "[34, 42)",
     "38",
     9,
     39,
     "0,205",
     "88,64%"
    ],
    [
     "[42, 50)",
     "46",
     5,
     44,
     "0,114",
     "100%"
    ],
    [
     "Total",
     "",
     44,
     44,
     "",
     ""
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [18, 26)?",
  "alts": [
   "$0{,}341$",
   "$0{,}205$",
   "$0{,}114$",
   "$0{,}227$"
  ],
  "correct": 3,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=44.",
  "pautaSteps": [
   "h_i = \\dfrac{10}{44} = 0{,}227"
  ],
  "conc": "La frecuencia relativa de [18, 26) es $h_i=0{,}227$."
 },
 {
  "tipo": "Lectura de tabla · menores a",
  "ctx": "Educación · Universidad",
  "enun": "Se registró tiempo de estudio semanal (horas) de 48 estudiantes universitarios, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[6, 10)",
     "8",
     12,
     18,
     "0,25",
     "37,5%"
    ],
    [
     "[10, 14)",
     "12",
     16,
     34,
     "0,333",
     "70,83%"
    ],
    [
     "[14, 18)",
     "16",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[18, 22)",
     "20",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuántos datos son menores a 10 horas?",
  "alts": [
   "$30$",
   "$25$",
   "$18$",
   "$11$"
  ],
  "correct": 2,
  "pautaHead": "\\text{El total de datos menores a un límite de clase es el } F_i \\text{ de la clase que termina ahí.}",
  "pautaSteps": [
   "F_i \\text{ de la clase } [6, 10) = 18"
  ],
  "conc": "Son <b>18</b> datos."
 },
 {
  "tipo": "Lectura de tabla · al menos",
  "ctx": "Educación · Universidad",
  "enun": "Se registró tiempo de estudio semanal (horas) de 48 estudiantes universitarios, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[6, 10)",
     "8",
     12,
     18,
     "0,25",
     "37,5%"
    ],
    [
     "[10, 14)",
     "12",
     16,
     34,
     "0,333",
     "70,83%"
    ],
    [
     "[14, 18)",
     "16",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[18, 22)",
     "20",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Qué porcentaje de datos son de al menos 14 horas?",
  "alts": [
   "$35\\%$",
   "$29{,}17\\%$",
   "$20{,}35\\%$",
   "$26{,}04\\%$"
  ],
  "correct": 1,
  "pautaHead": "100\\% - H_i\\% \\text{ (clase anterior al límite pedido)}.",
  "pautaSteps": [
   "100\\% - H_i\\% \\text{ de } [10, 14) = 100\\% - 70{,}83\\% = 29{,}17\\%"
  ],
  "conc": "Es el <b>29{,}17\\%</b> de los datos."
 },
 {
  "tipo": "Lectura de tabla · entre",
  "ctx": "Educación · Universidad",
  "enun": "Se registró tiempo de estudio semanal (horas) de 48 estudiantes universitarios, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[6, 10)",
     "8",
     12,
     18,
     "0,25",
     "37,5%"
    ],
    [
     "[10, 14)",
     "12",
     16,
     34,
     "0,333",
     "70,83%"
    ],
    [
     "[14, 18)",
     "16",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[18, 22)",
     "20",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuántos datos están entre 6 y 18 horas?",
  "alts": [
   "$57$",
   "$46$",
   "$20$",
   "$37$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se suman las } f_i \\text{ de las clases comprendidas en el rango.}",
  "pautaSteps": [
   "f_2+f_3+f_4 = 12+16+9 = 37"
  ],
  "conc": "Están entre esos límites <b>37</b> datos."
 },
 {
  "tipo": "Lectura de tabla · m_i",
  "ctx": "Educación · Universidad",
  "enun": "Se registró tiempo de estudio semanal (horas) de 48 estudiantes universitarios, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[6, 10)",
     "8",
     12,
     18,
     "0,25",
     "37,5%"
    ],
    [
     "[10, 14)",
     "12",
     16,
     34,
     "0,333",
     "70,83%"
    ],
    [
     "[14, 18)",
     "16",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[18, 22)",
     "20",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuál es la marca de clase $m_i$ de la clase [2, 6)?",
  "alts": [
   "$20$",
   "$4$",
   "$8$",
   "$12$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{2+6}{2} = 4"
  ],
  "conc": "La marca de clase de [2, 6) es $m_i=4$."
 },
 {
  "tipo": "Lectura de tabla · h_i",
  "ctx": "Educación · Universidad",
  "enun": "Se registró tiempo de estudio semanal (horas) de 48 estudiantes universitarios, obteniéndose $n=48$. La tabla de frecuencias completa es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "[2, 6)",
     "4",
     6,
     6,
     "0,125",
     "12,5%"
    ],
    [
     "[6, 10)",
     "8",
     12,
     18,
     "0,25",
     "37,5%"
    ],
    [
     "[10, 14)",
     "12",
     16,
     34,
     "0,333",
     "70,83%"
    ],
    [
     "[14, 18)",
     "16",
     9,
     43,
     "0,188",
     "89,58%"
    ],
    [
     "[18, 22)",
     "20",
     5,
     48,
     "0,104",
     "100%"
    ],
    [
     "Total",
     "",
     48,
     48,
     "",
     ""
    ]
   ],
   "N": 48
  },
  "ask": "¿Cuál es la frecuencia relativa $h_i$ de la clase [10, 14)?",
  "alts": [
   "$0{,}188$",
   "$0{,}125$",
   "$0{,}333$",
   "$0{,}104$"
  ],
  "correct": 2,
  "pautaHead": "h_i=\\dfrac{f_i}{n},\\ n=48.",
  "pautaSteps": [
   "h_i = \\dfrac{16}{48} = 0{,}333"
  ],
  "conc": "La frecuencia relativa de [10, 14) es $h_i=0{,}333$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró monto de compra (miles $) de 36 clientes, obteniéndose $n=36$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     6
    ],
    [
     "[10, 15)",
     10
    ],
    [
     "[15, 20)",
     12
    ],
    [
     "[20, 25)",
     6
    ],
    [
     "[25, 30)",
     2
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [10, 15).",
  "alts": [
   "$27{,}5$",
   "$22{,}5$",
   "$17{,}5$",
   "$12{,}5$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{10+15}{2} = 12{,}5"
  ],
  "conc": "La marca de clase de [10, 15) es $m_i=12{,}5$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró monto de compra (miles $) de 36 clientes, obteniéndose $n=36$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     6
    ],
    [
     "[10, 15)",
     10
    ],
    [
     "[15, 20)",
     12
    ],
    [
     "[20, 25)",
     6
    ],
    [
     "[25, 30)",
     2
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [20, 25).",
  "alts": [
   "$22{,}5$",
   "$27{,}5$",
   "$12{,}5$",
   "$7{,}5$"
  ],
  "correct": 0,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{20+25}{2} = 22{,}5"
  ],
  "conc": "La marca de clase de [20, 25) es $m_i=22{,}5$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró monto de compra (miles $) de 36 clientes, obteniéndose $n=36$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     6
    ],
    [
     "[10, 15)",
     10
    ],
    [
     "[15, 20)",
     12
    ],
    [
     "[20, 25)",
     6
    ],
    [
     "[25, 30)",
     2
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$10{,}87$",
   "$15{,}83$",
   "$19{,}14$",
   "$14{,}18$"
  ],
  "correct": 1,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=36.",
  "pautaSteps": [
   "m_{1}=7{,}5,\\ m_{2}=12{,}5,\\ m_{3}=17{,}5,\\ m_{4}=22{,}5,\\ m_{5}=27{,}5",
   "\\bar{x} = \\dfrac{570}{36} = 15{,}83\\ \\text{miles \\$}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 15{,}83$ miles $."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Deporte · Maratón",
  "enun": "Se registró agua consumida (litros) de 40 atletas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[1, 2)",
     5
    ],
    [
     "[2, 3)",
     11
    ],
    [
     "[3, 4)",
     14
    ],
    [
     "[4, 5)",
     7
    ],
    [
     "[5, 6)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [3, 4).",
  "alts": [
   "$5{,}5$",
   "$2{,}5$",
   "$4{,}5$",
   "$3{,}5$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{3+4}{2} = 3{,}5"
  ],
  "conc": "La marca de clase de [3, 4) es $m_i=3{,}5$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Deporte · Maratón",
  "enun": "Se registró agua consumida (litros) de 40 atletas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[1, 2)",
     5
    ],
    [
     "[2, 3)",
     11
    ],
    [
     "[3, 4)",
     14
    ],
    [
     "[4, 5)",
     7
    ],
    [
     "[5, 6)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [5, 6).",
  "alts": [
   "$2{,}5$",
   "$4{,}5$",
   "$5{,}5$",
   "$1{,}5$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{5+6}{2} = 5{,}5"
  ],
  "conc": "La marca de clase de [5, 6) es $m_i=5{,}5$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Deporte · Maratón",
  "enun": "Se registró agua consumida (litros) de 40 atletas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[1, 2)",
     5
    ],
    [
     "[2, 3)",
     11
    ],
    [
     "[3, 4)",
     14
    ],
    [
     "[4, 5)",
     7
    ],
    [
     "[5, 6)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$2{,}57$",
   "$3{,}3$",
   "$4{,}43$",
   "$3{,}63$"
  ],
  "correct": 1,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=40.",
  "pautaSteps": [
   "m_{1}=1{,}5,\\ m_{2}=2{,}5,\\ m_{3}=3{,}5,\\ m_{4}=4{,}5,\\ m_{5}=5{,}5",
   "\\bar{x} = \\dfrac{132}{40} = 3{,}3\\ \\text{litros}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 3{,}3$ litros."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Tecnología · Internet",
  "enun": "Se registró tiempo de conexión a internet (horas) de 38 usuarios, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[0, 2)",
     6
    ],
    [
     "[2, 4)",
     10
    ],
    [
     "[4, 6)",
     13
    ],
    [
     "[6, 8)",
     6
    ],
    [
     "[8, 10)",
     3
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [6, 8).",
  "alts": [
   "$5$",
   "$3$",
   "$9$",
   "$7$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{6+8}{2} = 7"
  ],
  "conc": "La marca de clase de [6, 8) es $m_i=7$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Tecnología · Internet",
  "enun": "Se registró tiempo de conexión a internet (horas) de 38 usuarios, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[0, 2)",
     6
    ],
    [
     "[2, 4)",
     10
    ],
    [
     "[4, 6)",
     13
    ],
    [
     "[6, 8)",
     6
    ],
    [
     "[8, 10)",
     3
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [0, 2).",
  "alts": [
   "$5$",
   "$1$",
   "$3$",
   "$7$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{0+2}{2} = 1"
  ],
  "conc": "La marca de clase de [0, 2) es $m_i=1$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Tecnología · Internet",
  "enun": "Se registró tiempo de conexión a internet (horas) de 38 usuarios, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[0, 2)",
     6
    ],
    [
     "[2, 4)",
     10
    ],
    [
     "[4, 6)",
     13
    ],
    [
     "[6, 8)",
     6
    ],
    [
     "[8, 10)",
     3
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$5{,}37$",
   "$3{,}06$",
   "$4{,}47$",
   "$3{,}82$"
  ],
  "correct": 2,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=38.",
  "pautaSteps": [
   "m_{1}=1,\\ m_{2}=3,\\ m_{3}=5,\\ m_{4}=7,\\ m_{5}=9",
   "\\bar{x} = \\dfrac{170}{38} = 4{,}47\\ \\text{horas}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 4{,}47$ horas."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Industria · Cemento",
  "enun": "Se registró peso (kg) de sacos de cemento de 42 sacos producidos, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[24, 26)",
     5
    ],
    [
     "[26, 28)",
     10
    ],
    [
     "[28, 30)",
     15
    ],
    [
     "[30, 32)",
     8
    ],
    [
     "[32, 34)",
     4
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [32, 34).",
  "alts": [
   "$29$",
   "$31$",
   "$27$",
   "$33$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{32+34}{2} = 33"
  ],
  "conc": "La marca de clase de [32, 34) es $m_i=33$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Industria · Cemento",
  "enun": "Se registró peso (kg) de sacos de cemento de 42 sacos producidos, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[24, 26)",
     5
    ],
    [
     "[26, 28)",
     10
    ],
    [
     "[28, 30)",
     15
    ],
    [
     "[30, 32)",
     8
    ],
    [
     "[32, 34)",
     4
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [26, 28).",
  "alts": [
   "$27$",
   "$31$",
   "$25$",
   "$29$"
  ],
  "correct": 0,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{26+28}{2} = 27"
  ],
  "conc": "La marca de clase de [26, 28) es $m_i=27$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Industria · Cemento",
  "enun": "Se registró peso (kg) de sacos de cemento de 42 sacos producidos, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[24, 26)",
     5
    ],
    [
     "[26, 28)",
     10
    ],
    [
     "[28, 30)",
     15
    ],
    [
     "[30, 32)",
     8
    ],
    [
     "[32, 34)",
     4
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$37{,}45$",
   "$28{,}81$",
   "$31{,}83$",
   "$22{,}84$"
  ],
  "correct": 1,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=42.",
  "pautaSteps": [
   "m_{1}=25,\\ m_{2}=27,\\ m_{3}=29,\\ m_{4}=31,\\ m_{5}=33",
   "\\bar{x} = \\dfrac{1210}{42} = 28{,}81\\ \\text{kg}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 28{,}81$ kg."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró duración (meses) de contratos de arriendo de 44 contratos firmados, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[6, 12)",
     7
    ],
    [
     "[12, 18)",
     12
    ],
    [
     "[18, 24)",
     14
    ],
    [
     "[24, 30)",
     7
    ],
    [
     "[30, 36)",
     4
    ],
    [
     "Total",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [6, 12).",
  "alts": [
   "$33$",
   "$27$",
   "$21$",
   "$9$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{6+12}{2} = 9"
  ],
  "conc": "La marca de clase de [6, 12) es $m_i=9$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró duración (meses) de contratos de arriendo de 44 contratos firmados, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[6, 12)",
     7
    ],
    [
     "[12, 18)",
     12
    ],
    [
     "[18, 24)",
     14
    ],
    [
     "[24, 30)",
     7
    ],
    [
     "[30, 36)",
     4
    ],
    [
     "Total",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [18, 24).",
  "alts": [
   "$15$",
   "$27$",
   "$21$",
   "$9$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{18+24}{2} = 21"
  ],
  "conc": "La marca de clase de [18, 24) es $m_i=21$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró duración (meses) de contratos de arriendo de 44 contratos firmados, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[6, 12)",
     7
    ],
    [
     "[12, 18)",
     12
    ],
    [
     "[18, 24)",
     14
    ],
    [
     "[24, 30)",
     7
    ],
    [
     "[30, 36)",
     4
    ],
    [
     "Total",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$13{,}44$",
   "$17{,}48$",
   "$19{,}5$",
   "$23{,}54$"
  ],
  "correct": 2,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=44.",
  "pautaSteps": [
   "m_{1}=9,\\ m_{2}=15,\\ m_{3}=21,\\ m_{4}=27,\\ m_{5}=33",
   "\\bar{x} = \\dfrac{858}{44} = 19{,}5\\ \\text{meses}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 19{,}5$ meses."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Tecnología · Drones",
  "enun": "Se registró tiempo de vuelo (min) de 40 drones de reparto, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     6
    ],
    [
     "[10, 15)",
     11
    ],
    [
     "[15, 20)",
     13
    ],
    [
     "[20, 25)",
     7
    ],
    [
     "[25, 30)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [10, 15).",
  "alts": [
   "$27{,}5$",
   "$17{,}5$",
   "$22{,}5$",
   "$12{,}5$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{10+15}{2} = 12{,}5"
  ],
  "conc": "La marca de clase de [10, 15) es $m_i=12{,}5$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Tecnología · Drones",
  "enun": "Se registró tiempo de vuelo (min) de 40 drones de reparto, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     6
    ],
    [
     "[10, 15)",
     11
    ],
    [
     "[15, 20)",
     13
    ],
    [
     "[20, 25)",
     7
    ],
    [
     "[25, 30)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [20, 25).",
  "alts": [
   "$22{,}5$",
   "$12{,}5$",
   "$7{,}5$",
   "$17{,}5$"
  ],
  "correct": 0,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{20+25}{2} = 22{,}5"
  ],
  "conc": "La marca de clase de [20, 25) es $m_i=22{,}5$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Tecnología · Drones",
  "enun": "Se registró tiempo de vuelo (min) de 40 drones de reparto, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     6
    ],
    [
     "[10, 15)",
     11
    ],
    [
     "[15, 20)",
     13
    ],
    [
     "[20, 25)",
     7
    ],
    [
     "[25, 30)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$17{,}88$",
   "$16{,}25$",
   "$21{,}27$",
   "$12{,}93$"
  ],
  "correct": 1,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=40.",
  "pautaSteps": [
   "m_{1}=7{,}5,\\ m_{2}=12{,}5,\\ m_{3}=17{,}5,\\ m_{4}=22{,}5,\\ m_{5}=27{,}5",
   "\\bar{x} = \\dfrac{650}{40} = 16{,}25\\ \\text{min}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 16{,}25$ min."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Marketing · Publicidad",
  "enun": "Se registró gasto en publicidad (miles $) de 36 pequeñas empresas, obteniéndose $n=36$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[100, 150)",
     5
    ],
    [
     "[150, 200)",
     9
    ],
    [
     "[200, 250)",
     12
    ],
    [
     "[250, 300)",
     7
    ],
    [
     "[300, 350)",
     3
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [200, 250).",
  "alts": [
   "$275$",
   "$325$",
   "$225$",
   "$175$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{200+250}{2} = 225"
  ],
  "conc": "La marca de clase de [200, 250) es $m_i=225$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Marketing · Publicidad",
  "enun": "Se registró gasto en publicidad (miles $) de 36 pequeñas empresas, obteniéndose $n=36$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[100, 150)",
     5
    ],
    [
     "[150, 200)",
     9
    ],
    [
     "[200, 250)",
     12
    ],
    [
     "[250, 300)",
     7
    ],
    [
     "[300, 350)",
     3
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [300, 350).",
  "alts": [
   "$125$",
   "$225$",
   "$325$",
   "$175$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{300+350}{2} = 325"
  ],
  "conc": "La marca de clase de [300, 350) es $m_i=325$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Marketing · Publicidad",
  "enun": "Se registró gasto en publicidad (miles $) de 36 pequeñas empresas, obteniéndose $n=36$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[100, 150)",
     5
    ],
    [
     "[150, 200)",
     9
    ],
    [
     "[200, 250)",
     12
    ],
    [
     "[250, 300)",
     7
    ],
    [
     "[300, 350)",
     3
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$216{,}67$",
   "$151{,}6$",
   "$194{,}79$",
   "$260$"
  ],
  "correct": 0,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=36.",
  "pautaSteps": [
   "m_{1}=125,\\ m_{2}=175,\\ m_{3}=225,\\ m_{4}=275,\\ m_{5}=325",
   "\\bar{x} = \\dfrac{7800}{36} = 216{,}67\\ \\text{miles \\$}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 216{,}67$ miles $."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Agricultura · Invernadero",
  "enun": "Se registró altura (cm) de plantas de tomate de 45 plantas, obteniéndose $n=45$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 30)",
     6
    ],
    [
     "[30, 40)",
     11
    ],
    [
     "[40, 50)",
     15
    ],
    [
     "[50, 60)",
     8
    ],
    [
     "[60, 70)",
     5
    ],
    [
     "Total",
     45
    ]
   ],
   "N": 45
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [50, 60).",
  "alts": [
   "$45$",
   "$55$",
   "$65$",
   "$25$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{50+60}{2} = 55"
  ],
  "conc": "La marca de clase de [50, 60) es $m_i=55$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Agricultura · Invernadero",
  "enun": "Se registró altura (cm) de plantas de tomate de 45 plantas, obteniéndose $n=45$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 30)",
     6
    ],
    [
     "[30, 40)",
     11
    ],
    [
     "[40, 50)",
     15
    ],
    [
     "[50, 60)",
     8
    ],
    [
     "[60, 70)",
     5
    ],
    [
     "Total",
     45
    ]
   ],
   "N": 45
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [20, 30).",
  "alts": [
   "$25$",
   "$45$",
   "$55$",
   "$35$"
  ],
  "correct": 0,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{20+30}{2} = 25"
  ],
  "conc": "La marca de clase de [20, 30) es $m_i=25$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Agricultura · Invernadero",
  "enun": "Se registró altura (cm) de plantas de tomate de 45 plantas, obteniéndose $n=45$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 30)",
     6
    ],
    [
     "[30, 40)",
     11
    ],
    [
     "[40, 50)",
     15
    ],
    [
     "[50, 60)",
     8
    ],
    [
     "[60, 70)",
     5
    ],
    [
     "Total",
     45
    ]
   ],
   "N": 45
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$48{,}42$",
   "$57{,}06$",
   "$43{,}89$",
   "$34{,}9$"
  ],
  "correct": 2,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=45.",
  "pautaSteps": [
   "m_{1}=25,\\ m_{2}=35,\\ m_{3}=45,\\ m_{4}=55,\\ m_{5}=65",
   "\\bar{x} = \\dfrac{1975}{45} = 43{,}89\\ \\text{cm}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 43{,}89$ cm."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Salud · Dental",
  "enun": "Se registró tiempo de espera (min) en atención de 42 pacientes dentales, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[0, 6)",
     5
    ],
    [
     "[6, 12)",
     10
    ],
    [
     "[12, 18)",
     15
    ],
    [
     "[18, 24)",
     8
    ],
    [
     "[24, 30)",
     4
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [24, 30).",
  "alts": [
   "$3$",
   "$27$",
   "$21$",
   "$15$"
  ],
  "correct": 1,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{24+30}{2} = 27"
  ],
  "conc": "La marca de clase de [24, 30) es $m_i=27$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Salud · Dental",
  "enun": "Se registró tiempo de espera (min) en atención de 42 pacientes dentales, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[0, 6)",
     5
    ],
    [
     "[6, 12)",
     10
    ],
    [
     "[12, 18)",
     15
    ],
    [
     "[18, 24)",
     8
    ],
    [
     "[24, 30)",
     4
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [6, 12).",
  "alts": [
   "$21$",
   "$15$",
   "$3$",
   "$9$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{6+12}{2} = 9"
  ],
  "conc": "La marca de clase de [6, 12) es $m_i=9$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Salud · Dental",
  "enun": "Se registró tiempo de espera (min) en atención de 42 pacientes dentales, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[0, 6)",
     5
    ],
    [
     "[6, 12)",
     10
    ],
    [
     "[12, 18)",
     15
    ],
    [
     "[18, 24)",
     8
    ],
    [
     "[24, 30)",
     4
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$12{,}92$",
   "$14{,}43$",
   "$9{,}89$",
   "$17{,}45$"
  ],
  "correct": 1,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=42.",
  "pautaSteps": [
   "m_{1}=3,\\ m_{2}=9,\\ m_{3}=15,\\ m_{4}=21,\\ m_{5}=27",
   "\\bar{x} = \\dfrac{606}{42} = 14{,}43\\ \\text{min}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 14{,}43$ min."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Telecomunicaciones · Datos móviles",
  "enun": "Se registró consumo de datos móviles (GB) mensual de 40 usuarios, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[2, 5)",
     6
    ],
    [
     "[5, 8)",
     10
    ],
    [
     "[8, 11)",
     13
    ],
    [
     "[11, 14)",
     7
    ],
    [
     "[14, 17)",
     4
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [2, 5).",
  "alts": [
   "$15{,}5$",
   "$6{,}5$",
   "$3{,}5$",
   "$12{,}5$"
  ],
  "correct": 2,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{2+5}{2} = 3{,}5"
  ],
  "conc": "La marca de clase de [2, 5) es $m_i=3{,}5$."
 },
 {
  "tipo": "Marca de clase",
  "ctx": "Telecomunicaciones · Datos móviles",
  "enun": "Se registró consumo de datos móviles (GB) mensual de 40 usuarios, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[2, 5)",
     6
    ],
    [
     "[5, 8)",
     10
    ],
    [
     "[8, 11)",
     13
    ],
    [
     "[11, 14)",
     7
    ],
    [
     "[14, 17)",
     4
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Determine la marca de clase $m_i$ de la clase [8, 11).",
  "alts": [
   "$12{,}5$",
   "$15{,}5$",
   "$6{,}5$",
   "$9{,}5$"
  ],
  "correct": 3,
  "pautaHead": "m_i=\\dfrac{L_i+L_s}{2}.",
  "pautaSteps": [
   "m_i = \\dfrac{8+11}{2} = 9{,}5"
  ],
  "conc": "La marca de clase de [8, 11) es $m_i=9{,}5$."
 },
 {
  "tipo": "Promedio muestral",
  "ctx": "Telecomunicaciones · Datos móviles",
  "enun": "Se registró consumo de datos móviles (GB) mensual de 40 usuarios, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[2, 5)",
     6
    ],
    [
     "[5, 8)",
     10
    ],
    [
     "[8, 11)",
     13
    ],
    [
     "[11, 14)",
     7
    ],
    [
     "[14, 17)",
     4
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el promedio muestral $\\bar{x}$ (aproximado a 2 decimales).",
  "alts": [
   "$8{,}97$",
   "$11{,}81$",
   "$9{,}87$",
   "$7{,}11$"
  ],
  "correct": 0,
  "pautaHead": "\\bar{x}=\\dfrac{1}{n}\\sum f_i m_i,\\ n=40.",
  "pautaSteps": [
   "m_{1}=3{,}5,\\ m_{2}=6{,}5,\\ m_{3}=9{,}5,\\ m_{4}=12{,}5,\\ m_{5}=15{,}5",
   "\\bar{x} = \\dfrac{359}{40} = 8{,}97\\ \\text{GB}"
  ],
  "conc": "El promedio muestral es $\\bar{x} = 8{,}97$ GB."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Manufactura · Muebles",
  "enun": "Se registró tiempo de armado (min) de 38 muebles, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[15, 20)",
     5,
     5
    ],
    [
     "[20, 25)",
     9,
     14
    ],
    [
     "[25, 30)",
     13,
     27
    ],
    [
     "[30, 35)",
     7,
     34
    ],
    [
     "[35, 40)",
     4,
     38
    ],
    [
     "Total",
     38,
     38
    ]
   ],
   "N": 38
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[15, 20)",
   "[25, 30)",
   "[30, 35)",
   "[35, 40)"
  ],
  "correct": 1,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 19.\\ \\text{Primera clase con } F_i\\geq 19: [25, 30)"
  ],
  "conc": "La clase mediana es <b>[25, 30)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Manufactura · Muebles",
  "enun": "Se registró tiempo de armado (min) de 38 muebles, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[15, 20)",
     5,
     5
    ],
    [
     "[20, 25)",
     9,
     14
    ],
    [
     "[25, 30)",
     13,
     27
    ],
    [
     "[30, 35)",
     7,
     34
    ],
    [
     "[35, 40)",
     4,
     38
    ],
    [
     "Total",
     38,
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$35$",
   "$29{,}76$",
   "$21{,}33$",
   "$26{,}92$"
  ],
  "correct": 3,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 25+\\left(\\dfrac{19-14}{13}\\right)(5) = 26{,}92"
  ],
  "conc": "La mediana interpolada es $Me = 26{,}92$ min."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Tecnología · Programación",
  "enun": "Se registró puntaje (pts) en torneo de programación de 40 competidores, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[50, 70)",
     6,
     6
    ],
    [
     "[70, 90)",
     10,
     16
    ],
    [
     "[90, 110)",
     13,
     29
    ],
    [
     "[110, 130)",
     7,
     36
    ],
    [
     "[130, 150)",
     4,
     40
    ],
    [
     "Total",
     40,
     40
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[70, 90)",
   "[130, 150)",
   "[90, 110)",
   "[50, 70)"
  ],
  "correct": 2,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 20.\\ \\text{Primera clase con } F_i\\geq 20: [90, 110)"
  ],
  "conc": "La clase mediana es <b>[90, 110)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Tecnología · Programación",
  "enun": "Se registró puntaje (pts) en torneo de programación de 40 competidores, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[50, 70)",
     6,
     6
    ],
    [
     "[70, 90)",
     10,
     16
    ],
    [
     "[90, 110)",
     13,
     29
    ],
    [
     "[110, 130)",
     7,
     36
    ],
    [
     "[130, 150)",
     4,
     40
    ],
    [
     "Total",
     40,
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$76{,}85$",
   "$125{,}14$",
   "$96{,}15$",
   "$105{,}77$"
  ],
  "correct": 2,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 90+\\left(\\dfrac{20-16}{13}\\right)(20) = 96{,}15"
  ],
  "conc": "La mediana interpolada es $Me = 96{,}15$ pts."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Transporte · Taxis",
  "enun": "Se registró kilómetros recorridos de 36 taxis en un turno, obteniéndose $n=36$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[80, 100)",
     5,
     5
    ],
    [
     "[100, 120)",
     9,
     14
    ],
    [
     "[120, 140)",
     12,
     26
    ],
    [
     "[140, 160)",
     6,
     32
    ],
    [
     "[160, 180)",
     4,
     36
    ],
    [
     "Total",
     36,
     36
    ]
   ],
   "N": 36
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[160, 180)",
   "[100, 120)",
   "[140, 160)",
   "[120, 140)"
  ],
  "correct": 3,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 18.\\ \\text{Primera clase con } F_i\\geq 18: [120, 140)"
  ],
  "conc": "La clase mediana es <b>[120, 140)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Transporte · Taxis",
  "enun": "Se registró kilómetros recorridos de 36 taxis en un turno, obteniéndose $n=36$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[80, 100)",
     5,
     5
    ],
    [
     "[100, 120)",
     9,
     14
    ],
    [
     "[120, 140)",
     12,
     26
    ],
    [
     "[140, 160)",
     6,
     32
    ],
    [
     "[160, 180)",
     4,
     36
    ],
    [
     "Total",
     36,
     36
    ]
   ],
   "N": 36
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$126{,}67$",
   "$139{,}47$",
   "$101{,}12$",
   "$164{,}67$"
  ],
  "correct": 0,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 120+\\left(\\dfrac{18-14}{12}\\right)(20) = 126{,}67"
  ],
  "conc": "La mediana interpolada es $Me = 126{,}67$ km."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "E-commerce · Electrónica",
  "enun": "Se registró precio (miles $) de productos electrónicos de 42 productos vendidos online, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[50, 90)",
     6,
     6
    ],
    [
     "[90, 130)",
     11,
     17
    ],
    [
     "[130, 170)",
     14,
     31
    ],
    [
     "[170, 210)",
     7,
     38
    ],
    [
     "[210, 250)",
     4,
     42
    ],
    [
     "Total",
     42,
     42
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[50, 90)",
   "[130, 170)",
   "[170, 210)",
   "[210, 250)"
  ],
  "correct": 1,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 21.\\ \\text{Primera clase con } F_i\\geq 21: [130, 170)"
  ],
  "conc": "La clase mediana es <b>[130, 170)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "E-commerce · Electrónica",
  "enun": "Se registró precio (miles $) de productos electrónicos de 42 productos vendidos online, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[50, 90)",
     6,
     6
    ],
    [
     "[90, 130)",
     11,
     17
    ],
    [
     "[130, 170)",
     14,
     31
    ],
    [
     "[170, 210)",
     7,
     38
    ],
    [
     "[210, 250)",
     4,
     42
    ],
    [
     "Total",
     42,
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$113{,}07$",
   "$155{,}57$",
   "$184$",
   "$141{,}43$"
  ],
  "correct": 3,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 130+\\left(\\dfrac{21-17}{14}\\right)(40) = 141{,}43"
  ],
  "conc": "La mediana interpolada es $Me = 141{,}43$ miles $."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Movilidad eléctrica · Carga",
  "enun": "Se registró tiempo de carga (min) de 40 vehículos eléctricos, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[10, 20)",
     5,
     5
    ],
    [
     "[20, 30)",
     10,
     15
    ],
    [
     "[30, 40)",
     14,
     29
    ],
    [
     "[40, 50)",
     7,
     36
    ],
    [
     "[50, 60)",
     4,
     40
    ],
    [
     "Total",
     40,
     40
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[10, 20)",
   "[40, 50)",
   "[30, 40)",
   "[20, 30)"
  ],
  "correct": 2,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 20.\\ \\text{Primera clase con } F_i\\geq 20: [30, 40)"
  ],
  "conc": "La clase mediana es <b>[30, 40)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Movilidad eléctrica · Carga",
  "enun": "Se registró tiempo de carga (min) de 40 vehículos eléctricos, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[10, 20)",
     5,
     5
    ],
    [
     "[20, 30)",
     10,
     15
    ],
    [
     "[30, 40)",
     14,
     29
    ],
    [
     "[40, 50)",
     7,
     36
    ],
    [
     "[50, 60)",
     4,
     40
    ],
    [
     "Total",
     40,
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$33{,}57$",
   "$43{,}64$",
   "$37{,}07$",
   "$26{,}65$"
  ],
  "correct": 0,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 30+\\left(\\dfrac{20-15}{14}\\right)(10) = 33{,}57"
  ],
  "conc": "La mediana interpolada es $Me = 33{,}57$ min."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró cantidad de visitas diarias de 38 sucursales, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[40, 60)",
     5,
     5
    ],
    [
     "[60, 80)",
     9,
     14
    ],
    [
     "[80, 100)",
     13,
     27
    ],
    [
     "[100, 120)",
     7,
     34
    ],
    [
     "[120, 140)",
     4,
     38
    ],
    [
     "Total",
     38,
     38
    ]
   ],
   "N": 38
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[120, 140)",
   "[100, 120)",
   "[60, 80)",
   "[80, 100)"
  ],
  "correct": 3,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 19.\\ \\text{Primera clase con } F_i\\geq 19: [80, 100)"
  ],
  "conc": "La clase mediana es <b>[80, 100)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró cantidad de visitas diarias de 38 sucursales, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[40, 60)",
     5,
     5
    ],
    [
     "[60, 80)",
     9,
     14
    ],
    [
     "[80, 100)",
     13,
     27
    ],
    [
     "[100, 120)",
     7,
     34
    ],
    [
     "[120, 140)",
     4,
     38
    ],
    [
     "Total",
     38,
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$87{,}69$",
   "$96{,}46$",
   "$70{,}08$",
   "$114{,}14$"
  ],
  "correct": 0,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 80+\\left(\\dfrac{19-14}{13}\\right)(20) = 87{,}69"
  ],
  "conc": "La mediana interpolada es $Me = 87{,}69$ visitas."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Logística · Bodega",
  "enun": "Se registró peso (kg) de cajas despachadas de 44 cajas, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     6,
     6
    ],
    [
     "[10, 15)",
     11,
     17
    ],
    [
     "[15, 20)",
     15,
     32
    ],
    [
     "[20, 25)",
     8,
     40
    ],
    [
     "[25, 30)",
     4,
     44
    ],
    [
     "Total",
     44,
     44
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[20, 25)",
   "[5, 10)",
   "[15, 20)",
   "[25, 30)"
  ],
  "correct": 2,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 22.\\ \\text{Primera clase con } F_i\\geq 22: [15, 20)"
  ],
  "conc": "La clase mediana es <b>[15, 20)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Logística · Bodega",
  "enun": "Se registró peso (kg) de cajas despachadas de 44 cajas, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     6,
     6
    ],
    [
     "[10, 15)",
     11,
     17
    ],
    [
     "[15, 20)",
     15,
     32
    ],
    [
     "[20, 25)",
     8,
     40
    ],
    [
     "[25, 30)",
     4,
     44
    ],
    [
     "Total",
     44,
     44
    ]
   ],
   "N": 44
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$21{,}67$",
   "$13{,}12$",
   "$18{,}47$",
   "$16{,}67$"
  ],
  "correct": 3,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 15+\\left(\\dfrac{22-17}{15}\\right)(5) = 16{,}67"
  ],
  "conc": "La mediana interpolada es $Me = 16{,}67$ kg."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Tecnología · Baterías",
  "enun": "Se registró tiempo de vida útil (meses) de baterías de 40 baterías probadas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[12, 18)",
     5,
     5
    ],
    [
     "[18, 24)",
     10,
     15
    ],
    [
     "[24, 30)",
     14,
     29
    ],
    [
     "[30, 36)",
     7,
     36
    ],
    [
     "[36, 42)",
     4,
     40
    ],
    [
     "Total",
     40,
     40
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[18, 24)",
   "[24, 30)",
   "[12, 18)",
   "[30, 36)"
  ],
  "correct": 1,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 20.\\ \\text{Primera clase con } F_i\\geq 20: [24, 30)"
  ],
  "conc": "La clase mediana es <b>[24, 30)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Tecnología · Baterías",
  "enun": "Se registró tiempo de vida útil (meses) de baterías de 40 baterías probadas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[12, 18)",
     5,
     5
    ],
    [
     "[18, 24)",
     10,
     15
    ],
    [
     "[24, 30)",
     14,
     29
    ],
    [
     "[30, 36)",
     7,
     36
    ],
    [
     "[36, 42)",
     4,
     40
    ],
    [
     "Total",
     40,
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$28{,}76$",
   "$26{,}14$",
   "$34{,}13$",
   "$20{,}84$"
  ],
  "correct": 1,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 24+\\left(\\dfrac{20-15}{14}\\right)(6) = 26{,}14"
  ],
  "conc": "La mediana interpolada es $Me = 26{,}14$ meses."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Comercio · Ventas",
  "enun": "Se registró ingreso semanal (miles $) de 42 vendedores independientes, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[100, 150)",
     6,
     6
    ],
    [
     "[150, 200)",
     10,
     16
    ],
    [
     "[200, 250)",
     15,
     31
    ],
    [
     "[250, 300)",
     7,
     38
    ],
    [
     "[300, 350)",
     4,
     42
    ],
    [
     "Total",
     42,
     42
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[150, 200)",
   "[250, 300)",
   "[300, 350)",
   "[200, 250)"
  ],
  "correct": 3,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 21.\\ \\text{Primera clase con } F_i\\geq 21: [200, 250)"
  ],
  "conc": "La clase mediana es <b>[200, 250)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Comercio · Ventas",
  "enun": "Se registró ingreso semanal (miles $) de 42 vendedores independientes, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[100, 150)",
     6,
     6
    ],
    [
     "[150, 200)",
     10,
     16
    ],
    [
     "[200, 250)",
     15,
     31
    ],
    [
     "[250, 300)",
     7,
     38
    ],
    [
     "[300, 350)",
     4,
     42
    ],
    [
     "Total",
     42,
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$238{,}47$",
   "$173{,}12$",
   "$216{,}67$",
   "$281{,}67$"
  ],
  "correct": 2,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 200+\\left(\\dfrac{21-16}{15}\\right)(50) = 216{,}67"
  ],
  "conc": "La mediana interpolada es $Me = 216{,}67$ miles $."
 },
 {
  "tipo": "Clase mediana",
  "ctx": "Entretenimiento · Streaming",
  "enun": "Se registró duración (min) de videos publicados de 38 videos, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[0, 5)",
     5,
     5
    ],
    [
     "[5, 10)",
     9,
     14
    ],
    [
     "[10, 15)",
     13,
     27
    ],
    [
     "[15, 20)",
     7,
     34
    ],
    [
     "[20, 25)",
     4,
     38
    ],
    [
     "Total",
     38,
     38
    ]
   ],
   "N": 38
  },
  "ask": "¿Cuál es la clase mediana?",
  "alts": [
   "[10, 15)",
   "[5, 10)",
   "[0, 5)",
   "[20, 25)"
  ],
  "correct": 0,
  "pautaHead": "\\text{La clase mediana es la primera con } F_i \\geq \\dfrac{n}{2}.",
  "pautaSteps": [
   "\\dfrac{n}{2} = 19.\\ \\text{Primera clase con } F_i\\geq 19: [10, 15)"
  ],
  "conc": "La clase mediana es <b>[10, 15)</b>."
 },
 {
  "tipo": "Mediana interpolada",
  "ctx": "Entretenimiento · Streaming",
  "enun": "Se registró duración (min) de videos publicados de 38 videos, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "[0, 5)",
     5,
     5
    ],
    [
     "[5, 10)",
     9,
     14
    ],
    [
     "[10, 15)",
     13,
     27
    ],
    [
     "[15, 20)",
     7,
     34
    ],
    [
     "[20, 25)",
     4,
     38
    ],
    [
     "Total",
     38,
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la mediana interpolada $Me$ (aproximada a 2 decimales).",
  "alts": [
   "$9{,}47$",
   "$11{,}92$",
   "$15{,}64$",
   "$13{,}12$"
  ],
  "correct": 1,
  "pautaHead": "Me=L_i+\\left(\\dfrac{\\frac{n}{2}-F_{i-1}}{f_i}\\right)A.",
  "pautaSteps": [
   "Me = 10+\\left(\\dfrac{19-14}{13}\\right)(5) = 11{,}92"
  ],
  "conc": "La mediana interpolada es $Me = 11{,}92$ min."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Encuestas · Web",
  "enun": "Se registró tiempo de respuesta (seg) en encuestas web de 40 encuestas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     5
    ],
    [
     "[10, 15)",
     14
    ],
    [
     "[15, 20)",
     12
    ],
    [
     "[20, 25)",
     6
    ],
    [
     "[25, 30)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[10, 15)",
   "[20, 25)",
   "[15, 20)",
   "[5, 10)"
  ],
  "correct": 0,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=14): [10, 15)"
  ],
  "conc": "La clase modal es <b>[10, 15)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Encuestas · Web",
  "enun": "Se registró tiempo de respuesta (seg) en encuestas web de 40 encuestas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 10)",
     5
    ],
    [
     "[10, 15)",
     14
    ],
    [
     "[15, 20)",
     12
    ],
    [
     "[20, 25)",
     6
    ],
    [
     "[25, 30)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$15{,}64$",
   "$18{,}32$",
   "$14{,}09$",
   "$11{,}06$"
  ],
  "correct": 2,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=9,\\ \\Delta_2=2",
   "Mo = 10+\\left(\\dfrac{9}{9+2}\\right)(5) = 14{,}09"
  ],
  "conc": "La moda interpolada es $Mo = 14{,}09$ seg."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Educación · Sueño",
  "enun": "Se registró horas de sueño de 42 estudiantes universitarios, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[4, 5)",
     3
    ],
    [
     "[5, 6)",
     8
    ],
    [
     "[6, 7)",
     17
    ],
    [
     "[7, 8)",
     9
    ],
    [
     "[8, 9)",
     5
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[7, 8)",
   "[8, 9)",
   "[6, 7)",
   "[4, 5)"
  ],
  "correct": 2,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=17): [6, 7)"
  ],
  "conc": "La clase modal es <b>[6, 7)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Educación · Sueño",
  "enun": "Se registró horas de sueño de 42 estudiantes universitarios, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[4, 5)",
     3
    ],
    [
     "[5, 6)",
     8
    ],
    [
     "[6, 7)",
     17
    ],
    [
     "[7, 8)",
     9
    ],
    [
     "[8, 9)",
     5
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$5{,}15$",
   "$6{,}53$",
   "$7{,}18$",
   "$8{,}63$"
  ],
  "correct": 1,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=9,\\ \\Delta_2=8",
   "Mo = 6+\\left(\\dfrac{9}{9+8}\\right)(1) = 6{,}53"
  ],
  "conc": "La moda interpolada es $Mo = 6{,}53$ horas."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Entretenimiento · Reventa",
  "enun": "Se registró precio (miles $) de entradas revendidas de 38 entradas para un concierto, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 35)",
     4
    ],
    [
     "[35, 50)",
     7
    ],
    [
     "[50, 65)",
     16
    ],
    [
     "[65, 80)",
     7
    ],
    [
     "[80, 95)",
     4
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[50, 65)",
   "[20, 35)",
   "[80, 95)",
   "[35, 50)"
  ],
  "correct": 0,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=16): [50, 65)"
  ],
  "conc": "La clase modal es <b>[50, 65)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Entretenimiento · Reventa",
  "enun": "Se registró precio (miles $) de entradas revendidas de 38 entradas para un concierto, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 35)",
     4
    ],
    [
     "[35, 50)",
     7
    ],
    [
     "[50, 65)",
     16
    ],
    [
     "[65, 80)",
     7
    ],
    [
     "[80, 95)",
     4
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$74{,}75$",
   "$57{,}5$",
   "$45{,}79$",
   "$63{,}39$"
  ],
  "correct": 1,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=9,\\ \\Delta_2=9",
   "Mo = 50+\\left(\\dfrac{9}{9+9}\\right)(15) = 57{,}5"
  ],
  "conc": "La moda interpolada es $Mo = 57{,}5$ miles $."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Salud · Farmacia",
  "enun": "Se registró tiempo de espera (min) en caja de 44 clientes de farmacia, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[0, 3)",
     5
    ],
    [
     "[3, 6)",
     9
    ],
    [
     "[6, 9)",
     18
    ],
    [
     "[9, 12)",
     8
    ],
    [
     "[12, 15)",
     4
    ],
    [
     "Total",
     44
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[3, 6)",
   "[9, 12)",
   "[0, 3)",
   "[6, 9)"
  ],
  "correct": 3,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=18): [6, 9)"
  ],
  "conc": "La clase modal es <b>[6, 9)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Salud · Farmacia",
  "enun": "Se registró tiempo de espera (min) en caja de 44 clientes de farmacia, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[0, 3)",
     5
    ],
    [
     "[3, 6)",
     9
    ],
    [
     "[6, 9)",
     18
    ],
    [
     "[9, 12)",
     8
    ],
    [
     "[12, 15)",
     4
    ],
    [
     "Total",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$8{,}16$",
   "$9{,}79$",
   "$7{,}42$",
   "$5{,}87$"
  ],
  "correct": 2,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=9,\\ \\Delta_2=10",
   "Mo = 6+\\left(\\dfrac{9}{9+10}\\right)(3) = 7{,}42"
  ],
  "conc": "La moda interpolada es $Mo = 7{,}42$ min."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Salud · Signos vitales",
  "enun": "Se registró temperatura corporal (°C) de 40 pacientes, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[36, 36,5)",
     4
    ],
    [
     "[36,5, 37)",
     8
    ],
    [
     "[37, 37,5)",
     17
    ],
    [
     "[37,5, 38)",
     7
    ],
    [
     "[38, 38,5)",
     4
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[37, 37,5)",
   "[36, 36,5)",
   "[37,5, 38)",
   "[38, 38,5)"
  ],
  "correct": 0,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=17): [37, 37,5)"
  ],
  "conc": "La clase modal es <b>[37, 37,5)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Salud · Signos vitales",
  "enun": "Se registró temperatura corporal (°C) de 40 pacientes, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[36, 36,5)",
     4
    ],
    [
     "[36,5, 37)",
     8
    ],
    [
     "[37, 37,5)",
     17
    ],
    [
     "[37,5, 38)",
     7
    ],
    [
     "[38, 38,5)",
     4
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$41{,}1$",
   "$48{,}41$",
   "$29{,}58$",
   "$37{,}24$"
  ],
  "correct": 3,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=9,\\ \\Delta_2=10",
   "Mo = 37+\\left(\\dfrac{9}{9+10}\\right)(0{,}5) = 37{,}24"
  ],
  "conc": "La moda interpolada es $Mo = 37{,}24$ °C."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Hogar · Gas",
  "enun": "Se registró consumo mensual de gas (m³) de 42 hogares, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[10, 18)",
     5
    ],
    [
     "[18, 26)",
     9
    ],
    [
     "[26, 34)",
     16
    ],
    [
     "[34, 42)",
     8
    ],
    [
     "[42, 50)",
     4
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[26, 34)",
   "[18, 26)",
   "[10, 18)",
   "[42, 50)"
  ],
  "correct": 0,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=16): [26, 34)"
  ],
  "conc": "La clase modal es <b>[26, 34)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Hogar · Gas",
  "enun": "Se registró consumo mensual de gas (m³) de 42 hogares, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[10, 18)",
     5
    ],
    [
     "[18, 26)",
     9
    ],
    [
     "[26, 34)",
     16
    ],
    [
     "[34, 42)",
     8
    ],
    [
     "[42, 50)",
     4
    ],
    [
     "Total",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$38{,}79$",
   "$23{,}72$",
   "$29{,}73$",
   "$32{,}71$"
  ],
  "correct": 2,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=7,\\ \\Delta_2=8",
   "Mo = 26+\\left(\\dfrac{7}{7+8}\\right)(8) = 29{,}73"
  ],
  "conc": "La moda interpolada es $Mo = 29{,}73$ m³."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Cultura · Lectura",
  "enun": "Se registró cantidad de páginas leídas al mes de 38 lectores, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[50, 100)",
     4
    ],
    [
     "[100, 150)",
     8
    ],
    [
     "[150, 200)",
     15
    ],
    [
     "[200, 250)",
     7
    ],
    [
     "[250, 300)",
     4
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[100, 150)",
   "[250, 300)",
   "[200, 250)",
   "[150, 200)"
  ],
  "correct": 3,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=15): [150, 200)"
  ],
  "conc": "La clase modal es <b>[150, 200)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Cultura · Lectura",
  "enun": "Se registró cantidad de páginas leídas al mes de 38 lectores, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[50, 100)",
     4
    ],
    [
     "[100, 150)",
     8
    ],
    [
     "[150, 200)",
     15
    ],
    [
     "[200, 250)",
     7
    ],
    [
     "[250, 300)",
     4
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$138{,}46$",
   "$173{,}33$",
   "$190{,}81$",
   "$225{,}33$"
  ],
  "correct": 1,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=7,\\ \\Delta_2=8",
   "Mo = 150+\\left(\\dfrac{7}{7+8}\\right)(50) = 173{,}33"
  ],
  "conc": "La moda interpolada es $Mo = 173{,}33$ páginas."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Redes corporativas · Archivos",
  "enun": "Se registró tiempo de descarga (seg) de archivos de 40 archivos, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[2, 6)",
     5
    ],
    [
     "[6, 10)",
     9
    ],
    [
     "[10, 14)",
     17
    ],
    [
     "[14, 18)",
     6
    ],
    [
     "[18, 22)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[10, 14)",
   "[14, 18)",
   "[2, 6)",
   "[18, 22)"
  ],
  "correct": 0,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=17): [10, 14)"
  ],
  "conc": "La clase modal es <b>[10, 14)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Redes corporativas · Archivos",
  "enun": "Se registró tiempo de descarga (seg) de archivos de 40 archivos, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[2, 6)",
     5
    ],
    [
     "[6, 10)",
     9
    ],
    [
     "[10, 14)",
     17
    ],
    [
     "[14, 18)",
     6
    ],
    [
     "[18, 22)",
     3
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$12{,}85$",
   "$9{,}28$",
   "$15{,}33$",
   "$11{,}68$"
  ],
  "correct": 3,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=8,\\ \\Delta_2=11",
   "Mo = 10+\\left(\\dfrac{8}{8+11}\\right)(4) = 11{,}68"
  ],
  "conc": "La moda interpolada es $Mo = 11{,}68$ seg."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Educación · Mochilas",
  "enun": "Se registró peso (kg) de mochilas escolares de 44 mochilas revisadas, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[3, 4,5)",
     4
    ],
    [
     "[4,5, 6)",
     9
    ],
    [
     "[6, 7,5)",
     18
    ],
    [
     "[7,5, 9)",
     8
    ],
    [
     "[9, 10,5)",
     5
    ],
    [
     "Total",
     44
    ]
   ],
   "N": 44
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[7,5, 9)",
   "[3, 4,5)",
   "[6, 7,5)",
   "[4,5, 6)"
  ],
  "correct": 2,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=18): [6, 7,5)"
  ],
  "conc": "La clase modal es <b>[6, 7,5)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Educación · Mochilas",
  "enun": "Se registró peso (kg) de mochilas escolares de 44 mochilas revisadas, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[3, 4,5)",
     4
    ],
    [
     "[4,5, 6)",
     9
    ],
    [
     "[6, 7,5)",
     18
    ],
    [
     "[7,5, 9)",
     8
    ],
    [
     "[9, 10,5)",
     5
    ],
    [
     "Total",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$6{,}71$",
   "$5{,}16$",
   "$8{,}72$",
   "$7{,}52$"
  ],
  "correct": 0,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=9,\\ \\Delta_2=10",
   "Mo = 6+\\left(\\dfrac{9}{9+10}\\right)(1{,}5) = 6{,}71"
  ],
  "conc": "La moda interpolada es $Mo = 6{,}71$ kg."
 },
 {
  "tipo": "Clase modal",
  "ctx": "Oficina · Reuniones",
  "enun": "Se registró duración (min) de reuniones de trabajo de 40 reuniones registradas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[10, 20)",
     5
    ],
    [
     "[20, 30)",
     8
    ],
    [
     "[30, 40)",
     16
    ],
    [
     "[40, 50)",
     7
    ],
    [
     "[50, 60)",
     4
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál es la clase modal?",
  "alts": [
   "[50, 60)",
   "[40, 50)",
   "[20, 30)",
   "[30, 40)"
  ],
  "correct": 3,
  "pautaHead": "\\text{La clase modal es la de mayor } f_i.",
  "pautaSteps": [
   "\\text{Clase con mayor } f_i\\ (f_i=16): [30, 40)"
  ],
  "conc": "La clase modal es <b>[30, 40)</b>."
 },
 {
  "tipo": "Moda interpolada",
  "ctx": "Oficina · Reuniones",
  "enun": "Se registró duración (min) de reuniones de trabajo de 40 reuniones registradas, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$f_i$"
   ],
   "rows": [
    [
     "[10, 20)",
     5
    ],
    [
     "[20, 30)",
     8
    ],
    [
     "[30, 40)",
     16
    ],
    [
     "[40, 50)",
     7
    ],
    [
     "[50, 60)",
     4
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la moda interpolada $Mo$ (aproximada a 2 decimales).",
  "alts": [
   "$34{,}71$",
   "$38{,}18$",
   "$27{,}69$",
   "$45{,}26$"
  ],
  "correct": 0,
  "pautaHead": "Mo=L_i+\\left(\\dfrac{\\Delta_1}{\\Delta_1+\\Delta_2}\\right)A,\\ \\Delta_1=f_i-f_{i-1},\\ \\Delta_2=f_i-f_{i+1}.",
  "pautaSteps": [
   "\\Delta_1=8,\\ \\Delta_2=9",
   "Mo = 30+\\left(\\dfrac{8}{8+9}\\right)(10) = 34{,}71"
  ],
  "conc": "La moda interpolada es $Mo = 34{,}71$ min."
 },
 {
  "tipo": "Rango",
  "ctx": "Educación · Ensayo",
  "enun": "Se registró rendimiento académico (pts) de 40 estudiantes, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[400, 450)",
     "425",
     5
    ],
    [
     "[450, 500)",
     "475",
     9
    ],
    [
     "[500, 550)",
     "525",
     14
    ],
    [
     "[550, 600)",
     "575",
     8
    ],
    [
     "[600, 650)",
     "625",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$208$",
   "$133$",
   "$250$",
   "$327$"
  ],
  "correct": 2,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 650 - 400 = 250"
  ],
  "conc": "El rango es <b>250</b> pts."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Educación · Ensayo",
  "enun": "Se registró rendimiento académico (pts) de 40 estudiantes, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[400, 450)",
     "425",
     5
    ],
    [
     "[450, 500)",
     "475",
     9
    ],
    [
     "[500, 550)",
     "525",
     14
    ],
    [
     "[550, 600)",
     "575",
     8
    ],
    [
     "[600, 650)",
     "625",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2706{,}2$",
   "$3721{,}45$",
   "$4397{,}92$",
   "$3383{,}01$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = 521{,}25\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 131937{,}5",
   "s^2 = \\dfrac{131937{,}5}{39} = 3383{,}01"
  ],
  "conc": "La varianza muestral es $s^2 = 3383{,}01$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Educación · Ensayo",
  "enun": "Se registró rendimiento académico (pts) de 40 estudiantes, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[400, 450)",
     "425",
     5
    ],
    [
     "[450, 500)",
     "475",
     9
    ],
    [
     "[500, 550)",
     "525",
     14
    ],
    [
     "[550, 600)",
     "575",
     8
    ],
    [
     "[600, 650)",
     "625",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$69{,}8$",
   "$58{,}16$",
   "$52{,}14$",
   "$40{,}64$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = 521{,}25\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 131937{,}5",
   "s^2 = \\dfrac{131937{,}5}{39} = 3383{,}01",
   "s = \\sqrt{3383{,}01} = 58{,}16"
  ],
  "conc": "La desviación estándar es $s = 58{,}16$ pts."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Educación · Ensayo",
  "enun": "Se registró rendimiento académico (pts) de 40 estudiantes, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[400, 450)",
     "425",
     5
    ],
    [
     "[450, 500)",
     "475",
     9
    ],
    [
     "[500, 550)",
     "525",
     14
    ],
    [
     "[550, 600)",
     "575",
     8
    ],
    [
     "[600, 650)",
     "625",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$11{,}16\\%$",
   "$12{,}27\\%$",
   "$14{,}65\\%$",
   "$8{,}86\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 521{,}25\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 131937{,}5",
   "s = 58{,}16",
   "CV = \\dfrac{58{,}16}{521{,}25}\\times 100\\% = 11{,}16\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 11{,}16\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Tecnología · Sistemas",
  "enun": "Se registró tiempo de procesamiento (seg) de solicitudes de 42 solicitudes, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[1, 3)",
     "2",
     6
    ],
    [
     "[3, 5)",
     "4",
     10
    ],
    [
     "[5, 7)",
     "6",
     14
    ],
    [
     "[7, 9)",
     "8",
     7
    ],
    [
     "[9, 11)",
     "10",
     5
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$6$",
   "$3$",
   "$18$",
   "$10$"
  ],
  "correct": 3,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 11 - 1 = 10"
  ],
  "conc": "El rango es <b>10</b> seg."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Tecnología · Sistemas",
  "enun": "Se registró tiempo de procesamiento (seg) de solicitudes de 42 solicitudes, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[1, 3)",
     "2",
     6
    ],
    [
     "[3, 5)",
     "4",
     10
    ],
    [
     "[5, 7)",
     "6",
     14
    ],
    [
     "[7, 9)",
     "8",
     7
    ],
    [
     "[9, 11)",
     "10",
     5
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$4{,}5$",
   "$6{,}62$",
   "$5{,}89$",
   "$7{,}66$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=42.",
  "pautaSteps": [
   "\\bar{x} = 5{,}76\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 241{,}62",
   "s^2 = \\dfrac{241{,}62}{41} = 5{,}89"
  ],
  "conc": "La varianza muestral es $s^2 = 5{,}89$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Tecnología · Sistemas",
  "enun": "Se registró tiempo de procesamiento (seg) de solicitudes de 42 solicitudes, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[1, 3)",
     "2",
     6
    ],
    [
     "[3, 5)",
     "4",
     10
    ],
    [
     "[5, 7)",
     "6",
     14
    ],
    [
     "[7, 9)",
     "8",
     7
    ],
    [
     "[9, 11)",
     "10",
     5
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}97$",
   "$1{,}63$",
   "$2{,}43$",
   "$2{,}91$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=42.",
  "pautaSteps": [
   "\\bar{x} = 5{,}76\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 241{,}62",
   "s^2 = \\dfrac{241{,}62}{41} = 5{,}89",
   "s = \\sqrt{5{,}89} = 2{,}43"
  ],
  "conc": "La desviación estándar es $s = 2{,}43$ seg."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Tecnología · Sistemas",
  "enun": "Se registró tiempo de procesamiento (seg) de solicitudes de 42 solicitudes, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[1, 3)",
     "2",
     6
    ],
    [
     "[3, 5)",
     "4",
     10
    ],
    [
     "[5, 7)",
     "6",
     14
    ],
    [
     "[7, 9)",
     "8",
     7
    ],
    [
     "[9, 11)",
     "10",
     5
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$42{,}13\\%$",
   "$33{,}64\\%$",
   "$54{,}91\\%$",
   "$46{,}34\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 5{,}76\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 241{,}62",
   "s = 2{,}43",
   "CV = \\dfrac{2{,}43}{5{,}76}\\times 100\\% = 42{,}13\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 42{,}13\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Manufactura · Planta",
  "enun": "Se registró producción diaria (unidades) de 38 operarios, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[40, 55)",
     "47,5",
     5
    ],
    [
     "[55, 70)",
     "62,5",
     9
    ],
    [
     "[70, 85)",
     "77,5",
     13
    ],
    [
     "[85, 100)",
     "92,5",
     7
    ],
    [
     "[100, 115)",
     "107,5",
     4
    ],
    [
     "Total",
     "",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$59$",
   "$75$",
   "$99$",
   "$38$"
  ],
  "correct": 1,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 115 - 40 = 75"
  ],
  "conc": "El rango es <b>75</b> unidades."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Manufactura · Planta",
  "enun": "Se registró producción diaria (unidades) de 38 operarios, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[40, 55)",
     "47,5",
     5
    ],
    [
     "[55, 70)",
     "62,5",
     9
    ],
    [
     "[70, 85)",
     "77,5",
     13
    ],
    [
     "[85, 100)",
     "92,5",
     7
    ],
    [
     "[100, 115)",
     "107,5",
     4
    ],
    [
     "Total",
     "",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$313{,}66$",
   "$345{,}16$",
   "$407{,}75$",
   "$250{,}71$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=38.",
  "pautaSteps": [
   "\\bar{x} = 75{,}92\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 11605{,}26",
   "s^2 = \\dfrac{11605{,}26}{37} = 313{,}66"
  ],
  "conc": "La varianza muestral es $s^2 = 313{,}66$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Manufactura · Planta",
  "enun": "Se registró producción diaria (unidades) de 38 operarios, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[40, 55)",
     "47,5",
     5
    ],
    [
     "[55, 70)",
     "62,5",
     9
    ],
    [
     "[70, 85)",
     "77,5",
     13
    ],
    [
     "[85, 100)",
     "92,5",
     7
    ],
    [
     "[100, 115)",
     "107,5",
     4
    ],
    [
     "Total",
     "",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$12{,}33$",
   "$21{,}25$",
   "$17{,}71$",
   "$15{,}73$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=38.",
  "pautaSteps": [
   "\\bar{x} = 75{,}92\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 11605{,}26",
   "s^2 = \\dfrac{11605{,}26}{37} = 313{,}66",
   "s = \\sqrt{313{,}66} = 17{,}71"
  ],
  "conc": "La desviación estándar es $s = 17{,}71$ unidades."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Manufactura · Planta",
  "enun": "Se registró producción diaria (unidades) de 38 operarios, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[40, 55)",
     "47,5",
     5
    ],
    [
     "[55, 70)",
     "62,5",
     9
    ],
    [
     "[70, 85)",
     "77,5",
     13
    ],
    [
     "[85, 100)",
     "92,5",
     7
    ],
    [
     "[100, 115)",
     "107,5",
     4
    ],
    [
     "Total",
     "",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$23{,}33\\%$",
   "$18{,}59\\%$",
   "$25{,}66\\%$",
   "$30{,}47\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 75{,}92\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 11605{,}26",
   "s = 17{,}71",
   "CV = \\dfrac{17{,}71}{75{,}92}\\times 100\\% = 23{,}33\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 23{,}33\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Hogar · Alimentación",
  "enun": "Se registró gasto semanal en alimentación (miles $) de 44 familias, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 35)",
     "27,5",
     6
    ],
    [
     "[35, 50)",
     "42,5",
     11
    ],
    [
     "[50, 65)",
     "57,5",
     15
    ],
    [
     "[65, 80)",
     "72,5",
     8
    ],
    [
     "[80, 95)",
     "87,5",
     4
    ],
    [
     "Total",
     "",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$40$",
   "$75$",
   "$61$",
   "$102$"
  ],
  "correct": 1,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 95 - 20 = 75"
  ],
  "conc": "El rango es <b>75</b> miles $."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Hogar · Alimentación",
  "enun": "Se registró gasto semanal en alimentación (miles $) de 44 familias, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 35)",
     "27,5",
     6
    ],
    [
     "[35, 50)",
     "42,5",
     11
    ],
    [
     "[50, 65)",
     "57,5",
     15
    ],
    [
     "[65, 80)",
     "72,5",
     8
    ],
    [
     "[80, 95)",
     "87,5",
     4
    ],
    [
     "Total",
     "",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$302{,}89$",
   "$393{,}76$",
   "$242{,}11$",
   "$333{,}32$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=44.",
  "pautaSteps": [
   "\\bar{x} = 55{,}11\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 13024{,}43",
   "s^2 = \\dfrac{13024{,}43}{43} = 302{,}89"
  ],
  "conc": "La varianza muestral es $s^2 = 302{,}89$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Hogar · Alimentación",
  "enun": "Se registró gasto semanal en alimentación (miles $) de 44 familias, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 35)",
     "27,5",
     6
    ],
    [
     "[35, 50)",
     "42,5",
     11
    ],
    [
     "[50, 65)",
     "57,5",
     15
    ],
    [
     "[65, 80)",
     "72,5",
     8
    ],
    [
     "[80, 95)",
     "87,5",
     4
    ],
    [
     "Total",
     "",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$15{,}45$",
   "$20{,}88$",
   "$12{,}11$",
   "$17{,}4$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=44.",
  "pautaSteps": [
   "\\bar{x} = 55{,}11\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 13024{,}43",
   "s^2 = \\dfrac{13024{,}43}{43} = 302{,}89",
   "s = \\sqrt{302{,}89} = 17{,}4"
  ],
  "conc": "La desviación estándar es $s = 17{,}4$ miles $."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Hogar · Alimentación",
  "enun": "Se registró gasto semanal en alimentación (miles $) de 44 familias, obteniéndose $n=44$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 35)",
     "27,5",
     6
    ],
    [
     "[35, 50)",
     "42,5",
     11
    ],
    [
     "[50, 65)",
     "57,5",
     15
    ],
    [
     "[65, 80)",
     "72,5",
     8
    ],
    [
     "[80, 95)",
     "87,5",
     4
    ],
    [
     "Total",
     "",
     44
    ]
   ],
   "N": 44
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$41{,}19\\%$",
   "$34{,}74\\%$",
   "$31{,}58\\%$",
   "$25{,}19\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 55{,}11\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 13024{,}43",
   "s = 17{,}4",
   "CV = \\dfrac{17{,}4}{55{,}11}\\times 100\\% = 31{,}58\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 31{,}58\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró velocidad de conexión (Mbps) de 40 hogares, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[10, 30)",
     "20",
     5
    ],
    [
     "[30, 50)",
     "40",
     10
    ],
    [
     "[50, 70)",
     "60",
     14
    ],
    [
     "[70, 90)",
     "80",
     7
    ],
    [
     "[90, 110)",
     "100",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$133$",
   "$100$",
   "$50$",
   "$84$"
  ],
  "correct": 1,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 110 - 10 = 100"
  ],
  "conc": "El rango es <b>100</b> Mbps."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró velocidad de conexión (Mbps) de 40 hogares, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[10, 30)",
     "20",
     5
    ],
    [
     "[30, 50)",
     "40",
     10
    ],
    [
     "[50, 70)",
     "60",
     14
    ],
    [
     "[70, 90)",
     "80",
     7
    ],
    [
     "[90, 110)",
     "100",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$429{,}53$",
   "$698{,}33$",
   "$591{,}04$",
   "$537{,}18$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = 57{,}5\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 20950",
   "s^2 = \\dfrac{20950}{39} = 537{,}18"
  ],
  "conc": "La varianza muestral es $s^2 = 537{,}18$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró velocidad de conexión (Mbps) de 40 hogares, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[10, 30)",
     "20",
     5
    ],
    [
     "[30, 50)",
     "40",
     10
    ],
    [
     "[50, 70)",
     "60",
     14
    ],
    [
     "[70, 90)",
     "80",
     7
    ],
    [
     "[90, 110)",
     "100",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$23{,}18$",
   "$20{,}65$",
   "$16{,}15$",
   "$27{,}81$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = 57{,}5\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 20950",
   "s^2 = \\dfrac{20950}{39} = 537{,}18",
   "s = \\sqrt{537{,}18} = 23{,}18"
  ],
  "conc": "La desviación estándar es $s = 23{,}18$ Mbps."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró velocidad de conexión (Mbps) de 40 hogares, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[10, 30)",
     "20",
     5
    ],
    [
     "[30, 50)",
     "40",
     10
    ],
    [
     "[50, 70)",
     "60",
     14
    ],
    [
     "[70, 90)",
     "80",
     7
    ],
    [
     "[90, 110)",
     "100",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$52{,}54\\%$",
   "$32{,}18\\%$",
   "$40{,}31\\%$",
   "$44{,}34\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 57{,}5\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 20950",
   "s = 23{,}18",
   "CV = \\dfrac{23{,}18}{57{,}5}\\times 100\\% = 40{,}31\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 40{,}31\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Laboral · Movilidad",
  "enun": "Se registró tiempo de traslado al trabajo (min) de 42 empleados, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 15)",
     "10",
     6
    ],
    [
     "[15, 25)",
     "20",
     10
    ],
    [
     "[25, 35)",
     "30",
     15
    ],
    [
     "[35, 45)",
     "40",
     7
    ],
    [
     "[45, 55)",
     "50",
     4
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$67$",
   "$38$",
   "$23$",
   "$50$"
  ],
  "correct": 3,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 55 - 5 = 50"
  ],
  "conc": "El rango es <b>50</b> min."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Laboral · Movilidad",
  "enun": "Se registró tiempo de traslado al trabajo (min) de 42 empleados, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 15)",
     "10",
     6
    ],
    [
     "[15, 25)",
     "20",
     10
    ],
    [
     "[25, 35)",
     "30",
     15
    ],
    [
     "[35, 45)",
     "40",
     7
    ],
    [
     "[45, 55)",
     "50",
     4
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$177{,}03$",
   "$136{,}18$",
   "$149{,}94$",
   "$108{,}73$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=42.",
  "pautaSteps": [
   "\\bar{x} = 28{,}33\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5583{,}33",
   "s^2 = \\dfrac{5583{,}33}{41} = 136{,}18"
  ],
  "conc": "La varianza muestral es $s^2 = 136{,}18$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Laboral · Movilidad",
  "enun": "Se registró tiempo de traslado al trabajo (min) de 42 empleados, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 15)",
     "10",
     6
    ],
    [
     "[15, 25)",
     "20",
     10
    ],
    [
     "[25, 35)",
     "30",
     15
    ],
    [
     "[35, 45)",
     "40",
     7
    ],
    [
     "[45, 55)",
     "50",
     4
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$11{,}67$",
   "$8{,}1$",
   "$14$",
   "$10{,}29$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=42.",
  "pautaSteps": [
   "\\bar{x} = 28{,}33\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5583{,}33",
   "s^2 = \\dfrac{5583{,}33}{41} = 136{,}18",
   "s = \\sqrt{136{,}18} = 11{,}67"
  ],
  "conc": "La desviación estándar es $s = 11{,}67$ min."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Laboral · Movilidad",
  "enun": "Se registró tiempo de traslado al trabajo (min) de 42 empleados, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[5, 15)",
     "10",
     6
    ],
    [
     "[15, 25)",
     "20",
     10
    ],
    [
     "[25, 35)",
     "30",
     15
    ],
    [
     "[35, 45)",
     "40",
     7
    ],
    [
     "[45, 55)",
     "50",
     4
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$45{,}31\\%$",
   "$53{,}68\\%$",
   "$32{,}88\\%$",
   "$41{,}19\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 28{,}33\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5583{,}33",
   "s = 11{,}67",
   "CV = \\dfrac{11{,}67}{28{,}33}\\times 100\\% = 41{,}19\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 41{,}19\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Medioambiente · Ciudad",
  "enun": "Se registró nivel de ruido (dB) de 38 puntos de una ciudad, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[40, 50)",
     "45",
     5
    ],
    [
     "[50, 60)",
     "55",
     9
    ],
    [
     "[60, 70)",
     "65",
     13
    ],
    [
     "[70, 80)",
     "75",
     7
    ],
    [
     "[80, 90)",
     "85",
     4
    ],
    [
     "Total",
     "",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$70$",
   "$40$",
   "$50$",
   "$25$"
  ],
  "correct": 2,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 90 - 40 = 50"
  ],
  "conc": "El rango es <b>50</b> dB."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Medioambiente · Ciudad",
  "enun": "Se registró nivel de ruido (dB) de 38 puntos de una ciudad, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[40, 50)",
     "45",
     5
    ],
    [
     "[50, 60)",
     "55",
     9
    ],
    [
     "[60, 70)",
     "65",
     13
    ],
    [
     "[70, 80)",
     "75",
     7
    ],
    [
     "[80, 90)",
     "85",
     4
    ],
    [
     "Total",
     "",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$181{,}22$",
   "$111{,}31$",
   "$139{,}4$",
   "$153{,}48$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=38.",
  "pautaSteps": [
   "\\bar{x} = 63{,}95\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5157{,}89",
   "s^2 = \\dfrac{5157{,}89}{37} = 139{,}4"
  ],
  "conc": "La varianza muestral es $s^2 = 139{,}4$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Medioambiente · Ciudad",
  "enun": "Se registró nivel de ruido (dB) de 38 puntos de una ciudad, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[40, 50)",
     "45",
     5
    ],
    [
     "[50, 60)",
     "55",
     9
    ],
    [
     "[60, 70)",
     "65",
     13
    ],
    [
     "[70, 80)",
     "75",
     7
    ],
    [
     "[80, 90)",
     "85",
     4
    ],
    [
     "Total",
     "",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$8{,}19$",
   "$14{,}17$",
   "$10{,}42$",
   "$11{,}81$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=38.",
  "pautaSteps": [
   "\\bar{x} = 63{,}95\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5157{,}89",
   "s^2 = \\dfrac{5157{,}89}{37} = 139{,}4",
   "s = \\sqrt{139{,}4} = 11{,}81"
  ],
  "conc": "La desviación estándar es $s = 11{,}81$ dB."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Medioambiente · Ciudad",
  "enun": "Se registró nivel de ruido (dB) de 38 puntos de una ciudad, obteniéndose $n=38$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[40, 50)",
     "45",
     5
    ],
    [
     "[50, 60)",
     "55",
     9
    ],
    [
     "[60, 70)",
     "65",
     13
    ],
    [
     "[70, 80)",
     "75",
     7
    ],
    [
     "[80, 90)",
     "85",
     4
    ],
    [
     "Total",
     "",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$20{,}31\\%$",
   "$18{,}46\\%$",
   "$14{,}7\\%$",
   "$24{,}14\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 63{,}95\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5157{,}89",
   "s = 11{,}81",
   "CV = \\dfrac{11{,}81}{63{,}95}\\times 100\\% = 18{,}46\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 18{,}46\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró cantidad de ventas diarias (miles $) de 40 sucursales, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[100, 160)",
     "130",
     6
    ],
    [
     "[160, 220)",
     "190",
     10
    ],
    [
     "[220, 280)",
     "250",
     14
    ],
    [
     "[280, 340)",
     "310",
     6
    ],
    [
     "[340, 400)",
     "370",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$300$",
   "$161$",
   "$392$",
   "$250$"
  ],
  "correct": 0,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 400 - 100 = 300"
  ],
  "conc": "El rango es <b>300</b> miles $."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró cantidad de ventas diarias (miles $) de 40 sucursales, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[100, 160)",
     "130",
     6
    ],
    [
     "[160, 220)",
     "190",
     10
    ],
    [
     "[220, 280)",
     "250",
     14
    ],
    [
     "[280, 340)",
     "310",
     6
    ],
    [
     "[340, 400)",
     "370",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$5523{,}83$",
   "$4017{,}02$",
   "$6528$",
   "$5021{,}54$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = 238\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 195840",
   "s^2 = \\dfrac{195840}{39} = 5021{,}54"
  ],
  "conc": "La varianza muestral es $s^2 = 5021{,}54$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró cantidad de ventas diarias (miles $) de 40 sucursales, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[100, 160)",
     "130",
     6
    ],
    [
     "[160, 220)",
     "190",
     10
    ],
    [
     "[220, 280)",
     "250",
     14
    ],
    [
     "[280, 340)",
     "310",
     6
    ],
    [
     "[340, 400)",
     "370",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$70{,}86$",
   "$85{,}04$",
   "$63{,}57$",
   "$49{,}53$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = 238\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 195840",
   "s^2 = \\dfrac{195840}{39} = 5021{,}54",
   "s = \\sqrt{5021{,}54} = 70{,}86"
  ],
  "conc": "La desviación estándar es $s = 70{,}86$ miles $."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró cantidad de ventas diarias (miles $) de 40 sucursales, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[100, 160)",
     "130",
     6
    ],
    [
     "[160, 220)",
     "190",
     10
    ],
    [
     "[220, 280)",
     "250",
     14
    ],
    [
     "[280, 340)",
     "310",
     6
    ],
    [
     "[340, 400)",
     "370",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$38{,}85\\%$",
   "$29{,}77\\%$",
   "$32{,}75\\%$",
   "$23{,}75\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 238\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 195840",
   "s = 70{,}86",
   "CV = \\dfrac{70{,}86}{238}\\times 100\\% = 29{,}77\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 29{,}77\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Manufactura · Pintura",
  "enun": "Se registró tiempo de secado (min) de piezas pintadas de 42 piezas, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     5
    ],
    [
     "[30, 40)",
     "35",
     10
    ],
    [
     "[40, 50)",
     "45",
     15
    ],
    [
     "[50, 60)",
     "55",
     8
    ],
    [
     "[60, 70)",
     "65",
     4
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$24$",
   "$39$",
   "$71$",
   "$50$"
  ],
  "correct": 3,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 70 - 20 = 50"
  ],
  "conc": "El rango es <b>50</b> min."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Manufactura · Pintura",
  "enun": "Se registró tiempo de secado (min) de piezas pintadas de 42 piezas, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     5
    ],
    [
     "[30, 40)",
     "35",
     10
    ],
    [
     "[40, 50)",
     "45",
     15
    ],
    [
     "[50, 60)",
     "55",
     8
    ],
    [
     "[60, 70)",
     "65",
     4
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$144$",
   "$104{,}41$",
   "$130{,}78$",
   "$170{,}01$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=42.",
  "pautaSteps": [
   "\\bar{x} = 44{,}05\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5361{,}9",
   "s^2 = \\dfrac{5361{,}9}{41} = 130{,}78"
  ],
  "conc": "La varianza muestral es $s^2 = 130{,}78$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Manufactura · Pintura",
  "enun": "Se registró tiempo de secado (min) de piezas pintadas de 42 piezas, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     5
    ],
    [
     "[30, 40)",
     "35",
     10
    ],
    [
     "[40, 50)",
     "45",
     15
    ],
    [
     "[50, 60)",
     "55",
     8
    ],
    [
     "[60, 70)",
     "65",
     4
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$7{,}94$",
   "$10{,}08$",
   "$11{,}44$",
   "$13{,}72$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=42.",
  "pautaSteps": [
   "\\bar{x} = 44{,}05\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5361{,}9",
   "s^2 = \\dfrac{5361{,}9}{41} = 130{,}78",
   "s = \\sqrt{130{,}78} = 11{,}44"
  ],
  "conc": "La desviación estándar es $s = 11{,}44$ min."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Manufactura · Pintura",
  "enun": "Se registró tiempo de secado (min) de piezas pintadas de 42 piezas, obteniéndose $n=42$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[20, 30)",
     "25",
     5
    ],
    [
     "[30, 40)",
     "35",
     10
    ],
    [
     "[40, 50)",
     "45",
     15
    ],
    [
     "[50, 60)",
     "55",
     8
    ],
    [
     "[60, 70)",
     "65",
     4
    ],
    [
     "Total",
     "",
     42
    ]
   ],
   "N": 42
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$20{,}7\\%$",
   "$33{,}89\\%$",
   "$28{,}56\\%$",
   "$25{,}96\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 44{,}05\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 5361{,}9",
   "s = 11{,}44",
   "CV = \\dfrac{11{,}44}{44{,}05}\\times 100\\% = 25{,}96\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 25{,}96\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Salud · Nutrición",
  "enun": "Se registró consumo calórico diario (kcal) de 40 personas en un estudio, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[1500, 1800)",
     "1650",
     5
    ],
    [
     "[1800, 2100)",
     "1950",
     9
    ],
    [
     "[2100, 2400)",
     "2250",
     15
    ],
    [
     "[2400, 2700)",
     "2550",
     7
    ],
    [
     "[2700, 3000)",
     "2850",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$1500$",
   "$1953$",
   "$1274$",
   "$820$"
  ],
  "correct": 0,
  "pautaHead": "Rg = L_{s,\\text{última clase}} - L_{i,\\text{primera clase}}.",
  "pautaSteps": [
   "Rg = 3000 - 1500 = 1500"
  ],
  "conc": "El rango es <b>1500</b> kcal."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Salud · Nutrición",
  "enun": "Se registró consumo calórico diario (kcal) de 40 personas en un estudio, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[1500, 1800)",
     "1650",
     5
    ],
    [
     "[1800, 2100)",
     "1950",
     9
    ],
    [
     "[2100, 2400)",
     "2250",
     15
    ],
    [
     "[2400, 2700)",
     "2550",
     7
    ],
    [
     "[2700, 3000)",
     "2850",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$130984{,}76$",
   "$119076{,}92$",
   "$154800$",
   "$95261{,}33$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(m_i-\\bar{x})^2,\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = 2220\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 4644000",
   "s^2 = \\dfrac{4644000}{39} = 119076{,}92"
  ],
  "conc": "La varianza muestral es $s^2 = 119076{,}92$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Salud · Nutrición",
  "enun": "Se registró consumo calórico diario (kcal) de 40 personas en un estudio, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[1500, 1800)",
     "1650",
     5
    ],
    [
     "[1800, 2100)",
     "1950",
     9
    ],
    [
     "[2100, 2400)",
     "2250",
     15
    ],
    [
     "[2400, 2700)",
     "2550",
     7
    ],
    [
     "[2700, 3000)",
     "2850",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$241{,}48$",
   "$414{,}09$",
   "$345{,}08$",
   "$310{,}36$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = 2220\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 4644000",
   "s^2 = \\dfrac{4644000}{39} = 119076{,}92",
   "s = \\sqrt{119076{,}92} = 345{,}08"
  ],
  "conc": "La desviación estándar es $s = 345{,}08$ kcal."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Salud · Nutrición",
  "enun": "Se registró consumo calórico diario (kcal) de 40 personas en un estudio, obteniéndose $n=40$. La tabla de frecuencias es:",
  "table": {
   "head": [
    "Clase",
    "$m_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "[1500, 1800)",
     "1650",
     5
    ],
    [
     "[1800, 2100)",
     "1950",
     9
    ],
    [
     "[2100, 2400)",
     "2250",
     15
    ],
    [
     "[2400, 2700)",
     "2550",
     7
    ],
    [
     "[2700, 3000)",
     "2850",
     4
    ],
    [
     "Total",
     "",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$12{,}37\\%$",
   "$17{,}1\\%$",
   "$15{,}54\\%$",
   "$20{,}35\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = 2220\\ \\text{(dado)}",
   "\\sum f_i(m_i-\\bar{x})^2 = 4644000",
   "s = 345{,}08",
   "CV = \\dfrac{345{,}08}{2220}\\times 100\\% = 15{,}54\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 15{,}54\\%$."
 }
];
