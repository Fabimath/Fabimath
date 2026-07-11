// Banco de 219 ejercicios de Medidas de Variabilidad - Datos Cuantitativos Discretos (guia oficial Fabimath)
// Parte I (80): rango, varianza, desviacion estandar y CV desde datos sin tabular
// Parte II (80): mismas medidas desde tabla (x_i, f_i)
// Parte III (59): comparacion de homogeneidad entre variables via CV
const MV_QUESTIONS = [
 {
  "tipo": "Rango",
  "ctx": "Educación · Estudiantes",
  "enun": "Se registró el número de hermanos en 14 estudiantes. Datos: 1, 2, 0, 3, 1, 2, 1, 0, 2, 1, 3, 2, 1, 0.",
  "ask": "Calcule el rango.",
  "alts": [
   "$3$",
   "$7$",
   "$1$",
   "$0$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 3 - 0 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Educación · Estudiantes",
  "enun": "Se registró el número de hermanos en 14 estudiantes. Datos: 1, 2, 0, 3, 1, 2, 1, 0, 2, 1, 3, 2, 1, 0.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}65$",
   "$1{,}02$",
   "$1{,}61$",
   "$1{,}17$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{19}{14} = 1{,}36",
   "\\sum (x_i-\\bar{x})^2 = 13{,}21",
   "s^2 = \\dfrac{13{,}21}{13} = 1{,}02"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}02$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Educación · Estudiantes",
  "enun": "Se registró el número de hermanos en 14 estudiantes. Datos: 1, 2, 0, 3, 1, 2, 1, 0, 2, 1, 3, 2, 1, 0.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}79$",
   "$1{,}45$",
   "$0{,}35$",
   "$1{,}01$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{19}{14} = 1{,}36",
   "\\sum (x_i-\\bar{x})^2 = 13{,}21",
   "s^2 = \\dfrac{13{,}21}{13} = 1{,}02",
   "s = \\sqrt{1{,}02} = 1{,}01"
  ],
  "conc": "La desviación estándar es $s = 1{,}01$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Educación · Estudiantes",
  "enun": "Se registró el número de hermanos en 14 estudiantes. Datos: 1, 2, 0, 3, 1, 2, 1, 0, 2, 1, 3, 2, 1, 0.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$101{,}03\\%$",
   "$83{,}34\\%$",
   "$74{,}29\\%$",
   "$56{,}25\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{19}{14} = 1{,}36",
   "\\sum (x_i-\\bar{x})^2 = 13{,}21",
   "s = 1{,}01",
   "CV = \\dfrac{1{,}01}{1{,}36}\\times 100\\% = 74{,}29\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 74{,}29\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Entretenimiento · Cine",
  "enun": "Se registró el número de entradas vendidas en 15 funciones de un cine. Datos: 40, 35, 50, 42, 38, 45, 33, 48, 41, 36, 44, 39, 47, 43, 37.",
  "ask": "Calcule el rango.",
  "alts": [
   "$12$",
   "$23$",
   "$7$",
   "$17$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 50 - 33 = 17"
  ],
  "conc": "El rango es <b>17</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Entretenimiento · Cine",
  "enun": "Se registró el número de entradas vendidas en 15 funciones de un cine. Datos: 40, 35, 50, 42, 38, 45, 33, 48, 41, 36, 44, 39, 47, 43, 37.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$28{,}03$",
   "$25{,}03$",
   "$34{,}18$",
   "$18{,}95$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{618}{15} = 41{,}20",
   "\\sum (x_i-\\bar{x})^2 = 350{,}40",
   "s^2 = \\dfrac{350{,}40}{14} = 25{,}03"
  ],
  "conc": "La varianza muestral es $s^2 = 25{,}03$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Entretenimiento · Cine",
  "enun": "Se registró el número de entradas vendidas en 15 funciones de un cine. Datos: 40, 35, 50, 42, 38, 45, 33, 48, 41, 36, 44, 39, 47, 43, 37.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}99$",
   "$4{,}33$",
   "$6{,}34$",
   "$5{,}00$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{618}{15} = 41{,}20",
   "\\sum (x_i-\\bar{x})^2 = 350{,}40",
   "s^2 = \\dfrac{350{,}40}{14} = 25{,}03",
   "s = \\sqrt{25{,}03} = 5{,}00"
  ],
  "conc": "La desviación estándar es $s = 5{,}00$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Entretenimiento · Cine",
  "enun": "Se registró el número de entradas vendidas en 15 funciones de un cine. Datos: 40, 35, 50, 42, 38, 45, 33, 48, 41, 36, 44, 39, 47, 43, 37.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$16{,}51\\%$",
   "$12{,}14\\%$",
   "$13{,}74\\%$",
   "$9{,}02\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{618}{15} = 41{,}20",
   "\\sum (x_i-\\bar{x})^2 = 350{,}40",
   "s = 5{,}00",
   "CV = \\dfrac{5{,}00}{41{,}20}\\times 100\\% = 12{,}14\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 12{,}14\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Retail · Compras",
  "enun": "Se registró el número de artículos en el carro de compra en 13 clientes. Datos: 5, 8, 3, 6, 10, 4, 7, 5, 9, 6, 3, 8, 5.",
  "ask": "Calcule el rango.",
  "alts": [
   "$10$",
   "$2$",
   "$6$",
   "$7$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 10 - 3 = 7"
  ],
  "conc": "El rango es <b>7</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Retail · Compras",
  "enun": "Se registró el número de artículos en el carro de compra en 13 clientes. Datos: 5, 8, 3, 6, 10, 4, 7, 5, 9, 6, 3, 8, 5.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$4{,}91$",
   "$6{,}82$",
   "$5{,}50$",
   "$3{,}66$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{79}{13} = 6{,}08",
   "\\sum (x_i-\\bar{x})^2 = 58{,}92",
   "s^2 = \\dfrac{58{,}92}{12} = 4{,}91"
  ],
  "conc": "La varianza muestral es $s^2 = 4{,}91$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Retail · Compras",
  "enun": "Se registró el número de artículos en el carro de compra en 13 clientes. Datos: 5, 8, 3, 6, 10, 4, 7, 5, 9, 6, 3, 8, 5.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}88$",
   "$2{,}89$",
   "$1{,}21$",
   "$2{,}22$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{79}{13} = 6{,}08",
   "\\sum (x_i-\\bar{x})^2 = 58{,}92",
   "s^2 = \\dfrac{58{,}92}{12} = 4{,}91",
   "s = \\sqrt{4{,}91} = 2{,}22"
  ],
  "conc": "La desviación estándar es $s = 2{,}22$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Retail · Compras",
  "enun": "Se registró el número de artículos en el carro de compra en 13 clientes. Datos: 5, 8, 3, 6, 10, 4, 7, 5, 9, 6, 3, 8, 5.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$40{,}98\\%$",
   "$49{,}59\\%$",
   "$36{,}46\\%$",
   "$27{,}50\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{79}{13} = 6{,}08",
   "\\sum (x_i-\\bar{x})^2 = 58{,}92",
   "s = 2{,}22",
   "CV = \\dfrac{2{,}22}{6{,}08}\\times 100\\% = 36{,}46\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 36{,}46\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de turnos con horas extra en un mes en 14 empleados. Datos: 2, 4, 1, 3, 5, 2, 0, 3, 4, 2, 1, 3, 2, 4.",
  "ask": "Calcule el rango.",
  "alts": [
   "$2$",
   "$3$",
   "$9$",
   "$5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 5 - 0 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de turnos con horas extra en un mes en 14 empleados. Datos: 2, 4, 1, 3, 5, 2, 0, 3, 4, 2, 1, 3, 2, 4.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}19$",
   "$1{,}96$",
   "$2{,}80$",
   "$1{,}42$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{36}{14} = 2{,}57",
   "\\sum (x_i-\\bar{x})^2 = 25{,}43",
   "s^2 = \\dfrac{25{,}43}{13} = 1{,}96"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}96$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de turnos con horas extra en un mes en 14 empleados. Datos: 2, 4, 1, 3, 5, 2, 0, 3, 4, 2, 1, 3, 2, 4.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}16$",
   "$0{,}69$",
   "$1{,}87$",
   "$1{,}40$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{36}{14} = 2{,}57",
   "\\sum (x_i-\\bar{x})^2 = 25{,}43",
   "s^2 = \\dfrac{25{,}43}{13} = 1{,}96",
   "s = \\sqrt{1{,}96} = 1{,}40"
  ],
  "conc": "La desviación estándar es $s = 1{,}40$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de turnos con horas extra en un mes en 14 empleados. Datos: 2, 4, 1, 3, 5, 2, 0, 3, 4, 2, 1, 3, 2, 4.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$54{,}39\\%$",
   "$73{,}97\\%$",
   "$61{,}06\\%$",
   "$41{,}13\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{36}{14} = 2{,}57",
   "\\sum (x_i-\\bar{x})^2 = 25{,}43",
   "s = 1{,}40",
   "CV = \\dfrac{1{,}40}{2{,}57}\\times 100\\% = 54{,}39\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 54{,}39\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Transporte · Aeropuerto",
  "enun": "Se registró el número de vuelos retrasados por día en 15 días. Datos: 3, 5, 2, 4, 6, 3, 1, 4, 5, 2, 3, 4, 2, 5, 3.",
  "ask": "Calcule el rango.",
  "alts": [
   "$7$",
   "$5$",
   "$1$",
   "$2$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 6 - 1 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Transporte · Aeropuerto",
  "enun": "Se registró el número de vuelos retrasados por día en 15 días. Datos: 3, 5, 2, 4, 6, 3, 1, 4, 5, 2, 3, 4, 2, 5, 3.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}22$",
   "$1{,}44$",
   "$1{,}98$",
   "$2{,}83$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{52}{15} = 3{,}47",
   "\\sum (x_i-\\bar{x})^2 = 27{,}73",
   "s^2 = \\dfrac{27{,}73}{14} = 1{,}98"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}98$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Transporte · Aeropuerto",
  "enun": "Se registró el número de vuelos retrasados por día en 15 días. Datos: 3, 5, 2, 4, 6, 3, 1, 4, 5, 2, 3, 4, 2, 5, 3.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}89$",
   "$0{,}69$",
   "$1{,}41$",
   "$1{,}17$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{52}{15} = 3{,}47",
   "\\sum (x_i-\\bar{x})^2 = 27{,}73",
   "s^2 = \\dfrac{27{,}73}{14} = 1{,}98",
   "s = \\sqrt{1{,}98} = 1{,}41"
  ],
  "conc": "La desviación estándar es $s = 1{,}41$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Transporte · Aeropuerto",
  "enun": "Se registró el número de vuelos retrasados por día en 15 días. Datos: 3, 5, 2, 4, 6, 3, 1, 4, 5, 2, 3, 4, 2, 5, 3.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$45{,}61\\%$",
   "$30{,}65\\%$",
   "$40{,}60\\%$",
   "$55{,}22\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{52}{15} = 3{,}47",
   "\\sum (x_i-\\bar{x})^2 = 27{,}73",
   "s = 1{,}41",
   "CV = \\dfrac{1{,}41}{3{,}47}\\times 100\\% = 40{,}60\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 40{,}60\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Telecomunicaciones · Soporte",
  "enun": "Se registró el número de llamadas caídas por técnico en 13 turnos. Datos: 1, 3, 0, 2, 4, 1, 2, 0, 3, 1, 2, 1, 3.",
  "ask": "Calcule el rango.",
  "alts": [
   "$8$",
   "$4$",
   "$7$",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Telecomunicaciones · Soporte",
  "enun": "Se registró el número de llamadas caídas por técnico en 13 turnos. Datos: 1, 3, 0, 2, 4, 1, 2, 0, 3, 1, 2, 1, 3.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}53$",
   "$1{,}71$",
   "$1{,}09$",
   "$2{,}21$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{13} = 1{,}77",
   "\\sum (x_i-\\bar{x})^2 = 18{,}31",
   "s^2 = \\dfrac{18{,}31}{12} = 1{,}53"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}53$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Telecomunicaciones · Soporte",
  "enun": "Se registró el número de llamadas caídas por técnico en 13 turnos. Datos: 1, 3, 0, 2, 4, 1, 2, 0, 3, 1, 2, 1, 3.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}68$",
   "$1{,}24$",
   "$0{,}58$",
   "$1{,}02$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{13} = 1{,}77",
   "\\sum (x_i-\\bar{x})^2 = 18{,}31",
   "s^2 = \\dfrac{18{,}31}{12} = 1{,}53",
   "s = \\sqrt{1{,}53} = 1{,}24"
  ],
  "conc": "La desviación estándar es $s = 1{,}24$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Telecomunicaciones · Soporte",
  "enun": "Se registró el número de llamadas caídas por técnico en 13 turnos. Datos: 1, 3, 0, 2, 4, 1, 2, 0, 3, 1, 2, 1, 3.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$69{,}81\\%$",
   "$52{,}85\\%$",
   "$78{,}33\\%$",
   "$94{,}95\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{13} = 1{,}77",
   "\\sum (x_i-\\bar{x})^2 = 18{,}31",
   "s = 1{,}24",
   "CV = \\dfrac{1{,}24}{1{,}77}\\times 100\\% = 69{,}81\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 69{,}81\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró el número de pacientes ingresados a urgencias por hora en 16 horas. Datos: 4, 6, 3, 5, 7, 4, 2, 5, 6, 3, 4, 5, 3, 6, 4, 5.",
  "ask": "Calcule el rango.",
  "alts": [
   "$5$",
   "$9$",
   "$2$",
   "$3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 7 - 2 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró el número de pacientes ingresados a urgencias por hora en 16 horas. Datos: 4, 6, 3, 5, 7, 4, 2, 5, 6, 3, 4, 5, 3, 6, 4, 5.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}09$",
   "$1{,}35$",
   "$1{,}87$",
   "$2{,}68$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=16.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{72}{16} = 4{,}50",
   "\\sum (x_i-\\bar{x})^2 = 28{,}00",
   "s^2 = \\dfrac{28{,}00}{15} = 1{,}87"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}87$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró el número de pacientes ingresados a urgencias por hora en 16 horas. Datos: 4, 6, 3, 5, 7, 4, 2, 5, 6, 3, 4, 5, 3, 6, 4, 5.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}83$",
   "$0{,}66$",
   "$1{,}37$",
   "$1{,}13$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=16.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{72}{16} = 4{,}50",
   "\\sum (x_i-\\bar{x})^2 = 28{,}00",
   "s^2 = \\dfrac{28{,}00}{15} = 1{,}87",
   "s = \\sqrt{1{,}87} = 1{,}37"
  ],
  "conc": "La desviación estándar es $s = 1{,}37$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Salud · Urgencias",
  "enun": "Se registró el número de pacientes ingresados a urgencias por hora en 16 horas. Datos: 4, 6, 3, 5, 7, 4, 2, 5, 6, 3, 4, 5, 3, 6, 4, 5.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$30{,}36\\%$",
   "$34{,}14\\%$",
   "$22{,}86\\%$",
   "$41{,}29\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{72}{16} = 4{,}50",
   "\\sum (x_i-\\bar{x})^2 = 28{,}00",
   "s = 1{,}37",
   "CV = \\dfrac{1{,}37}{4{,}50}\\times 100\\% = 30{,}36\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 30{,}36\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Deporte · Fútbol",
  "enun": "Se registró el número de goles recibidos en 14 partidos. Datos: 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 1, 2, 0, 1.",
  "ask": "Calcule el rango.",
  "alts": [
   "$9$",
   "$3$",
   "$5$",
   "$0$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 3 - 0 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Deporte · Fútbol",
  "enun": "Se registró el número de goles recibidos en 14 partidos. Datos: 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 1, 2, 0, 1.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}39$",
   "$0{,}95$",
   "$0{,}43$",
   "$0{,}80$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{17}{14} = 1{,}21",
   "\\sum (x_i-\\bar{x})^2 = 10{,}36",
   "s^2 = \\dfrac{10{,}36}{13} = 0{,}80"
  ],
  "conc": "La varianza muestral es $s^2 = 0{,}80$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Deporte · Fútbol",
  "enun": "Se registró el número de goles recibidos en 14 partidos. Datos: 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 1, 2, 0, 1.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}89$",
   "$0{,}23$",
   "$0{,}67$",
   "$1{,}33$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{17}{14} = 1{,}21",
   "\\sum (x_i-\\bar{x})^2 = 10{,}36",
   "s^2 = \\dfrac{10{,}36}{13} = 0{,}80",
   "s = \\sqrt{0{,}80} = 0{,}89"
  ],
  "conc": "La desviación estándar es $s = 0{,}89$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Deporte · Fútbol",
  "enun": "Se registró el número de goles recibidos en 14 partidos. Datos: 1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 1, 2, 0, 1.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$55{,}66\\%$",
   "$99{,}97\\%$",
   "$82{,}47\\%$",
   "$73{,}51\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{17}{14} = 1{,}21",
   "\\sum (x_i-\\bar{x})^2 = 10{,}36",
   "s = 0{,}89",
   "CV = \\dfrac{0{,}89}{1{,}21}\\times 100\\% = 73{,}51\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 73{,}51\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de errores de tipeo en 13 correos electrónicos. Datos: 0, 2, 1, 3, 0, 1, 2, 1, 0, 4, 1, 2, 1.",
  "ask": "Calcule el rango.",
  "alts": [
   "$8$",
   "$3$",
   "$4$",
   "$7$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de errores de tipeo en 13 correos electrónicos. Datos: 0, 2, 1, 3, 0, 1, 2, 1, 0, 4, 1, 2, 1.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}01$",
   "$1{,}59$",
   "$2{,}08$",
   "$1{,}42$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{18}{13} = 1{,}38",
   "\\sum (x_i-\\bar{x})^2 = 17{,}08",
   "s^2 = \\dfrac{17{,}08}{12} = 1{,}42"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}42$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de errores de tipeo en 13 correos electrónicos. Datos: 0, 2, 1, 3, 0, 1, 2, 1, 0, 4, 1, 2, 1.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}97$",
   "$0{,}53$",
   "$1{,}19$",
   "$1{,}63$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{18}{13} = 1{,}38",
   "\\sum (x_i-\\bar{x})^2 = 17{,}08",
   "s^2 = \\dfrac{17{,}08}{12} = 1{,}42",
   "s = \\sqrt{1{,}42} = 1{,}19"
  ],
  "conc": "La desviación estándar es $s = 1{,}19$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de errores de tipeo en 13 correos electrónicos. Datos: 0, 2, 1, 3, 0, 1, 2, 1, 0, 4, 1, 2, 1.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$117{,}17\\%$",
   "$96{,}63\\%$",
   "$65{,}27\\%$",
   "$86{,}16\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{18}{13} = 1{,}38",
   "\\sum (x_i-\\bar{x})^2 = 17{,}08",
   "s = 1{,}19",
   "CV = \\dfrac{1{,}19}{1{,}38}\\times 100\\% = 86{,}16\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 86{,}16\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Desarrollo de software · Sprints",
  "enun": "Se registró el número de bugs encontrados por sprint en 15 sprints de desarrollo. Datos: 5, 8, 3, 6, 9, 4, 7, 5, 3, 6, 8, 4, 5, 7, 6.",
  "ask": "Calcule el rango.",
  "alts": [
   "$6$",
   "$4$",
   "$3$",
   "$10$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 9 - 3 = 6"
  ],
  "conc": "El rango es <b>6</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Desarrollo de software · Sprints",
  "enun": "Se registró el número de bugs encontrados por sprint en 15 sprints de desarrollo. Datos: 5, 8, 3, 6, 9, 4, 7, 5, 3, 6, 8, 4, 5, 7, 6.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}48$",
   "$4{,}70$",
   "$3{,}75$",
   "$3{,}35$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{86}{15} = 5{,}73",
   "\\sum (x_i-\\bar{x})^2 = 46{,}93",
   "s^2 = \\dfrac{46{,}93}{14} = 3{,}35"
  ],
  "conc": "La varianza muestral es $s^2 = 3{,}35$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Desarrollo de software · Sprints",
  "enun": "Se registró el número de bugs encontrados por sprint en 15 sprints de desarrollo. Datos: 5, 8, 3, 6, 9, 4, 7, 5, 3, 6, 8, 4, 5, 7, 6.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}83$",
   "$0{,}96$",
   "$1{,}54$",
   "$2{,}41$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{86}{15} = 5{,}73",
   "\\sum (x_i-\\bar{x})^2 = 46{,}93",
   "s^2 = \\dfrac{46{,}93}{14} = 3{,}35",
   "s = \\sqrt{3{,}35} = 1{,}83"
  ],
  "conc": "La desviación estándar es $s = 1{,}83$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Desarrollo de software · Sprints",
  "enun": "Se registró el número de bugs encontrados por sprint en 15 sprints de desarrollo. Datos: 5, 8, 3, 6, 9, 4, 7, 5, 3, 6, 8, 4, 5, 7, 6.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$43{,}43\\%$",
   "$24{,}06\\%$",
   "$35{,}91\\%$",
   "$31{,}94\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{86}{15} = 5{,}73",
   "\\sum (x_i-\\bar{x})^2 = 46{,}93",
   "s = 1{,}83",
   "CV = \\dfrac{1{,}83}{5{,}73}\\times 100\\% = 31{,}94\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 31{,}94\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Transporte · Estación de trenes",
  "enun": "Se registró el número de trenes retrasados por día en 14 días. Datos: 2, 3, 1, 4, 2, 0, 3, 2, 1, 3, 4, 2, 1, 2.",
  "ask": "Calcule el rango.",
  "alts": [
   "$1$",
   "$0$",
   "$4$",
   "$6$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Transporte · Estación de trenes",
  "enun": "Se registró el número de trenes retrasados por día en 14 días. Datos: 2, 3, 1, 4, 2, 0, 3, 2, 1, 3, 4, 2, 1, 2.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}97$",
   "$1{,}53$",
   "$1{,}99$",
   "$1{,}36$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{30}{14} = 2{,}14",
   "\\sum (x_i-\\bar{x})^2 = 17{,}71",
   "s^2 = \\dfrac{17{,}71}{13} = 1{,}36"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}36$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Transporte · Estación de trenes",
  "enun": "Se registró el número de trenes retrasados por día en 14 días. Datos: 2, 3, 1, 4, 2, 0, 3, 2, 1, 3, 4, 2, 1, 2.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}95$",
   "$1{,}17$",
   "$0{,}51$",
   "$1{,}61$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{30}{14} = 2{,}14",
   "\\sum (x_i-\\bar{x})^2 = 17{,}71",
   "s^2 = \\dfrac{17{,}71}{13} = 1{,}36",
   "s = \\sqrt{1{,}36} = 1{,}17"
  ],
  "conc": "La desviación estándar es $s = 1{,}17$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Transporte · Estación de trenes",
  "enun": "Se registró el número de trenes retrasados por día en 14 días. Datos: 2, 3, 1, 4, 2, 0, 3, 2, 1, 3, 4, 2, 1, 2.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$74{,}09\\%$",
   "$54{,}47\\%$",
   "$41{,}19\\%$",
   "$61{,}15\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{30}{14} = 2{,}14",
   "\\sum (x_i-\\bar{x})^2 = 17{,}71",
   "s = 1{,}17",
   "CV = \\dfrac{1{,}17}{2{,}14}\\times 100\\% = 54{,}47\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 54{,}47\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró el número de clientes atendidos por hora en 16 horas. Datos: 8, 10, 7, 9, 12, 8, 6, 9, 11, 7, 8, 10, 9, 8, 7, 9.",
  "ask": "Calcule el rango.",
  "alts": [
   "$6$",
   "$5$",
   "$9$",
   "$1$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 12 - 6 = 6"
  ],
  "conc": "El rango es <b>6</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró el número de clientes atendidos por hora en 16 horas. Datos: 8, 10, 7, 9, 12, 8, 6, 9, 11, 7, 8, 10, 9, 8, 7, 9.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}84$",
   "$2{,}52$",
   "$3{,}56$",
   "$2{,}82$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=16.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{138}{16} = 8{,}63",
   "\\sum (x_i-\\bar{x})^2 = 37{,}75",
   "s^2 = \\dfrac{37{,}75}{15} = 2{,}52"
  ],
  "conc": "La varianza muestral es $s^2 = 2{,}52$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró el número de clientes atendidos por hora en 16 horas. Datos: 8, 10, 7, 9, 12, 8, 6, 9, 11, 7, 8, 10, 9, 8, 7, 9.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}11$",
   "$1{,}59$",
   "$1{,}33$",
   "$0{,}81$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=16.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{138}{16} = 8{,}63",
   "\\sum (x_i-\\bar{x})^2 = 37{,}75",
   "s^2 = \\dfrac{37{,}75}{15} = 2{,}52",
   "s = \\sqrt{2{,}52} = 1{,}59"
  ],
  "conc": "La desviación estándar es $s = 1{,}59$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Banca · Sucursal",
  "enun": "Se registró el número de clientes atendidos por hora en 16 horas. Datos: 8, 10, 7, 9, 12, 8, 6, 9, 11, 7, 8, 10, 9, 8, 7, 9.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$13{,}77\\%$",
   "$25{,}01\\%$",
   "$18{,}39\\%$",
   "$20{,}74\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{138}{16} = 8{,}63",
   "\\sum (x_i-\\bar{x})^2 = 37{,}75",
   "s = 1{,}59",
   "CV = \\dfrac{1{,}59}{8{,}63}\\times 100\\% = 18{,}39\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 18{,}39\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Logística · Reparto",
  "enun": "Se registró el número de pedidos entregados al día en 13 repartidores. Datos: 12, 15, 10, 14, 18, 11, 13, 16, 12, 14, 10, 15, 13.",
  "ask": "Calcule el rango.",
  "alts": [
   "$5$",
   "$14$",
   "$8$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 18 - 10 = 8"
  ],
  "conc": "El rango es <b>8</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Logística · Reparto",
  "enun": "Se registró el número de pedidos entregados al día en 13 repartidores. Datos: 12, 15, 10, 14, 18, 11, 13, 16, 12, 14, 10, 15, 13.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$7{,}71$",
   "$4{,}16$",
   "$5{,}56$",
   "$6{,}23$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{173}{13} = 13{,}31",
   "\\sum (x_i-\\bar{x})^2 = 66{,}77",
   "s^2 = \\dfrac{66{,}77}{12} = 5{,}56"
  ],
  "conc": "La varianza muestral es $s^2 = 5{,}56$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Logística · Reparto",
  "enun": "Se registró el número de pedidos entregados al día en 13 repartidores. Datos: 12, 15, 10, 14, 18, 11, 13, 16, 12, 14, 10, 15, 13.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}36$",
   "$2{,}01$",
   "$3{,}06$",
   "$1{,}30$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{173}{13} = 13{,}31",
   "\\sum (x_i-\\bar{x})^2 = 66{,}77",
   "s^2 = \\dfrac{66{,}77}{12} = 5{,}56",
   "s = \\sqrt{5{,}56} = 2{,}36"
  ],
  "conc": "La desviación estándar es $s = 2{,}36$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Logística · Reparto",
  "enun": "Se registró el número de pedidos entregados al día en 13 repartidores. Datos: 12, 15, 10, 14, 18, 11, 13, 16, 12, 14, 10, 15, 13.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$24{,}11\\%$",
   "$17{,}73\\%$",
   "$13{,}26\\%$",
   "$19{,}99\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{173}{13} = 13{,}31",
   "\\sum (x_i-\\bar{x})^2 = 66{,}77",
   "s = 2{,}36",
   "CV = \\dfrac{2{,}36}{13{,}31}\\times 100\\% = 17{,}73\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 17{,}73\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Cultura · Museo",
  "enun": "Se registró el número de visitantes por hora en 15 horas. Datos: 6, 9, 4, 7, 10, 5, 8, 6, 7, 9, 5, 8, 6, 7, 8.",
  "ask": "Calcule el rango.",
  "alts": [
   "$8$",
   "$6$",
   "$3$",
   "$2$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 10 - 4 = 6"
  ],
  "conc": "El rango es <b>6</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Cultura · Museo",
  "enun": "Se registró el número de visitantes por hora en 15 horas. Datos: 6, 9, 4, 7, 10, 5, 8, 6, 7, 9, 5, 8, 6, 7, 8.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}86$",
   "$2{,}10$",
   "$4{,}03$",
   "$3{,}20$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{105}{15} = 7{,}00",
   "\\sum (x_i-\\bar{x})^2 = 40{,}00",
   "s^2 = \\dfrac{40{,}00}{14} = 2{,}86"
  ],
  "conc": "La varianza muestral es $s^2 = 2{,}86$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Cultura · Museo",
  "enun": "Se registró el número de visitantes por hora en 15 horas. Datos: 6, 9, 4, 7, 10, 5, 8, 6, 7, 9, 5, 8, 6, 7, 8.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}24$",
   "$1{,}69$",
   "$1{,}42$",
   "$0{,}87$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{105}{15} = 7{,}00",
   "\\sum (x_i-\\bar{x})^2 = 40{,}00",
   "s^2 = \\dfrac{40{,}00}{14} = 2{,}86",
   "s = \\sqrt{2{,}86} = 1{,}69"
  ],
  "conc": "La desviación estándar es $s = 1{,}69$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Cultura · Museo",
  "enun": "Se registró el número de visitantes por hora en 15 horas. Datos: 6, 9, 4, 7, 10, 5, 8, 6, 7, 9, 5, 8, 6, 7, 8.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$32{,}84\\%$",
   "$18{,}14\\%$",
   "$24{,}15\\%$",
   "$27{,}18\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{105}{15} = 7{,}00",
   "\\sum (x_i-\\bar{x})^2 = 40{,}00",
   "s = 1{,}69",
   "CV = \\dfrac{1{,}69}{7{,}00}\\times 100\\% = 24{,}15\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 24{,}15\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Redes sociales · Crecimiento",
  "enun": "Se registró el número de nuevos seguidores por día en 14 días. Datos: 20, 35, 15, 28, 40, 18, 25, 30, 22, 33, 17, 27, 24, 29.",
  "ask": "Calcule el rango.",
  "alts": [
   "$36$",
   "$20$",
   "$25$",
   "$8$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 40 - 15 = 25"
  ],
  "conc": "El rango es <b>25</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Redes sociales · Crecimiento",
  "enun": "Se registró el número de nuevos seguidores por día en 14 días. Datos: 20, 35, 15, 28, 40, 18, 25, 30, 22, 33, 17, 27, 24, 29.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$58{,}49$",
   "$71{,}17$",
   "$52{,}23$",
   "$39{,}62$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{363}{14} = 25{,}93",
   "\\sum (x_i-\\bar{x})^2 = 678{,}93",
   "s^2 = \\dfrac{678{,}93}{13} = 52{,}23"
  ],
  "conc": "La varianza muestral es $s^2 = 52{,}23$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Redes sociales · Crecimiento",
  "enun": "Se registró el número de nuevos seguidores por día en 14 días. Datos: 20, 35, 15, 28, 40, 18, 25, 30, 22, 33, 17, 27, 24, 29.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$6{,}29$",
   "$4{,}42$",
   "$9{,}10$",
   "$7{,}23$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{363}{14} = 25{,}93",
   "\\sum (x_i-\\bar{x})^2 = 678{,}93",
   "s^2 = \\dfrac{678{,}93}{13} = 52{,}23",
   "s = \\sqrt{52{,}23} = 7{,}23"
  ],
  "conc": "La desviación estándar es $s = 7{,}23$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Redes sociales · Crecimiento",
  "enun": "Se registró el número de nuevos seguidores por día en 14 días. Datos: 20, 35, 15, 28, 40, 18, 25, 30, 22, 33, 17, 27, 24, 29.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$27{,}87\\%$",
   "$31{,}36\\%$",
   "$37{,}91\\%$",
   "$20{,}97\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{363}{14} = 25{,}93",
   "\\sum (x_i-\\bar{x})^2 = 678{,}93",
   "s = 7{,}23",
   "CV = \\dfrac{7{,}23}{25{,}93}\\times 100\\% = 27{,}87\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 27{,}87\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Biblioteca · Préstamos",
  "enun": "Se registró el número de libros prestados en 13 visitantes. Datos: 1, 3, 2, 1, 4, 2, 1, 3, 2, 1, 2, 3, 1.",
  "ask": "Calcule el rango.",
  "alts": [
   "$7$",
   "$0$",
   "$1$",
   "$3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 1 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Biblioteca · Préstamos",
  "enun": "Se registró el número de libros prestados en 13 visitantes. Datos: 1, 3, 2, 1, 4, 2, 1, 3, 2, 1, 2, 3, 1.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}00$",
   "$1{,}59$",
   "$1{,}15$",
   "$0{,}63$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{26}{13} = 2{,}00",
   "\\sum (x_i-\\bar{x})^2 = 12{,}00",
   "s^2 = \\dfrac{12{,}00}{12} = 1{,}00"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}00$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Biblioteca · Préstamos",
  "enun": "Se registró el número de libros prestados en 13 visitantes. Datos: 1, 3, 2, 1, 4, 2, 1, 3, 2, 1, 2, 3, 1.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}34$",
   "$1{,}44$",
   "$0{,}78$",
   "$1{,}00$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{26}{13} = 2{,}00",
   "\\sum (x_i-\\bar{x})^2 = 12{,}00",
   "s^2 = \\dfrac{12{,}00}{12} = 1{,}00",
   "s = \\sqrt{1{,}00} = 1{,}00"
  ],
  "conc": "La desviación estándar es $s = 1{,}00$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Biblioteca · Préstamos",
  "enun": "Se registró el número de libros prestados en 13 visitantes. Datos: 1, 3, 2, 1, 4, 2, 1, 3, 2, 1, 2, 3, 1.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$56{,}14\\%$",
   "$68{,}00\\%$",
   "$50{,}00\\%$",
   "$37{,}79\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{26}{13} = 2{,}00",
   "\\sum (x_i-\\bar{x})^2 = 12{,}00",
   "s = 1{,}00",
   "CV = \\dfrac{1{,}00}{2{,}00}\\times 100\\% = 50{,}00\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 50{,}00\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Tránsito · Fiscalización",
  "enun": "Se registró el número de multas de estacionamiento emitidas por día en 15 días. Datos: 4, 6, 3, 5, 8, 4, 2, 6, 5, 3, 4, 7, 5, 4, 3.",
  "ask": "Calcule el rango.",
  "alts": [
   "$8$",
   "$3$",
   "$2$",
   "$6$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 8 - 2 = 6"
  ],
  "conc": "El rango es <b>6</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Tránsito · Fiscalización",
  "enun": "Se registró el número de multas de estacionamiento emitidas por día en 15 días. Datos: 4, 6, 3, 5, 8, 4, 2, 6, 5, 3, 4, 7, 5, 4, 3.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}69$",
   "$3{,}01$",
   "$3{,}79$",
   "$1{,}97$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{69}{15} = 4{,}60",
   "\\sum (x_i-\\bar{x})^2 = 37{,}60",
   "s^2 = \\dfrac{37{,}60}{14} = 2{,}69"
  ],
  "conc": "La varianza muestral es $s^2 = 2{,}69$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Tránsito · Fiscalización",
  "enun": "Se registró el número de multas de estacionamiento emitidas por día en 15 días. Datos: 4, 6, 3, 5, 8, 4, 2, 6, 5, 3, 4, 7, 5, 4, 3.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}37$",
   "$0{,}84$",
   "$2{,}17$",
   "$1{,}64$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{69}{15} = 4{,}60",
   "\\sum (x_i-\\bar{x})^2 = 37{,}60",
   "s^2 = \\dfrac{37{,}60}{14} = 2{,}69",
   "s = \\sqrt{2{,}69} = 1{,}64"
  ],
  "conc": "La desviación estándar es $s = 1{,}64$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Tránsito · Fiscalización",
  "enun": "Se registró el número de multas de estacionamiento emitidas por día en 15 días. Datos: 4, 6, 3, 5, 8, 4, 2, 6, 5, 3, 4, 7, 5, 4, 3.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$35{,}63\\%$",
   "$40{,}04\\%$",
   "$48{,}45\\%$",
   "$26{,}87\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{69}{15} = 4{,}60",
   "\\sum (x_i-\\bar{x})^2 = 37{,}60",
   "s = 1{,}64",
   "CV = \\dfrac{1{,}64}{4{,}60}\\times 100\\% = 35{,}63\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 35{,}63\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Seguridad industrial · Fábrica",
  "enun": "Se registró el número de accidentes reportados por semana en 13 semanas. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2, 0, 1.",
  "ask": "Calcule el rango.",
  "alts": [
   "$7$",
   "$6$",
   "$2$",
   "$3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 3 - 0 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Seguridad industrial · Fábrica",
  "enun": "Se registró el número de accidentes reportados por semana en 13 semanas. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2, 0, 1.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}50$",
   "$0{,}91$",
   "$1{,}06$",
   "$0{,}54$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{12}{13} = 0{,}92",
   "\\sum (x_i-\\bar{x})^2 = 10{,}92",
   "s^2 = \\dfrac{10{,}92}{12} = 0{,}91"
  ],
  "conc": "La varianza muestral es $s^2 = 0{,}91$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Seguridad industrial · Fábrica",
  "enun": "Se registró el número de accidentes reportados por semana en 13 semanas. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2, 0, 1.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}39$",
   "$0{,}29$",
   "$0{,}95$",
   "$0{,}73$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=13.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{12}{13} = 0{,}92",
   "\\sum (x_i-\\bar{x})^2 = 10{,}92",
   "s^2 = \\dfrac{10{,}92}{12} = 0{,}91",
   "s = \\sqrt{0{,}91} = 0{,}95"
  ],
  "conc": "La desviación estándar es $s = 0{,}95$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Seguridad industrial · Fábrica",
  "enun": "Se registró el número de accidentes reportados por semana en 13 semanas. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2, 0, 1.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$78{,}34\\%$",
   "$115{,}90\\%$",
   "$103{,}36\\%$",
   "$140{,}57\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{12}{13} = 0{,}92",
   "\\sum (x_i-\\bar{x})^2 = 10{,}92",
   "s = 0{,}95",
   "CV = \\dfrac{0{,}95}{0{,}92}\\times 100\\% = 103{,}36\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 103{,}36\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "Biblioteca · Sucursales",
  "enun": "Se registró el número de libros vencidos en 14 sucursales. Datos: 3, 5, 2, 4, 6, 3, 1, 4, 5, 2, 3, 4, 2, 5.",
  "ask": "Calcule el rango.",
  "alts": [
   "$2$",
   "$9$",
   "$5$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 6 - 1 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "Biblioteca · Sucursales",
  "enun": "Se registró el número de libros vencidos en 14 sucursales. Datos: 3, 5, 2, 4, 6, 3, 1, 4, 5, 2, 3, 4, 2, 5.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}12$",
   "$2{,}37$",
   "$1{,}54$",
   "$3{,}02$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{49}{14} = 3{,}50",
   "\\sum (x_i-\\bar{x})^2 = 27{,}50",
   "s^2 = \\dfrac{27{,}50}{13} = 2{,}12"
  ],
  "conc": "La varianza muestral es $s^2 = 2{,}12$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "Biblioteca · Sucursales",
  "enun": "Se registró el número de libros vencidos en 14 sucursales. Datos: 3, 5, 2, 4, 6, 3, 1, 4, 5, 2, 3, 4, 2, 5.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}45$",
   "$0{,}72$",
   "$1{,}94$",
   "$1{,}21$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=14.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{49}{14} = 3{,}50",
   "\\sum (x_i-\\bar{x})^2 = 27{,}50",
   "s^2 = \\dfrac{27{,}50}{13} = 2{,}12",
   "s = \\sqrt{2{,}12} = 1{,}45"
  ],
  "conc": "La desviación estándar es $s = 1{,}45$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "Biblioteca · Sucursales",
  "enun": "Se registró el número de libros vencidos en 14 sucursales. Datos: 3, 5, 2, 4, 6, 3, 1, 4, 5, 2, 3, 4, 2, 5.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$31{,}37\\%$",
   "$41{,}56\\%$",
   "$46{,}68\\%$",
   "$56{,}52\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{49}{14} = 3{,}50",
   "\\sum (x_i-\\bar{x})^2 = 27{,}50",
   "s = 1{,}45",
   "CV = \\dfrac{1{,}45}{3{,}50}\\times 100\\% = 41{,}56\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 41{,}56\\%$."
 },
 {
  "tipo": "Rango",
  "ctx": "E-commerce · Reseñas",
  "enun": "Se registró el número de reseñas dejadas en 15 productos. Datos: 10, 15, 8, 12, 18, 9, 14, 11, 13, 16, 10, 12, 9, 14, 11.",
  "ask": "Calcule el rango.",
  "alts": [
   "$10$",
   "$14$",
   "$3$",
   "$6$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 18 - 8 = 10"
  ],
  "conc": "El rango es <b>10</b>."
 },
 {
  "tipo": "Varianza muestral",
  "ctx": "E-commerce · Reseñas",
  "enun": "Se registró el número de reseñas dejadas en 15 productos. Datos: 10, 15, 8, 12, 18, 9, 14, 11, 13, 16, 10, 12, 9, 14, 11.",
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$8{,}12$",
   "$6{,}10$",
   "$9{,}10$",
   "$11{,}19$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum (x_i-\\bar{x})^2,\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{182}{15} = 12{,}13",
   "\\sum (x_i-\\bar{x})^2 = 113{,}73",
   "s^2 = \\dfrac{113{,}73}{14} = 8{,}12"
  ],
  "conc": "La varianza muestral es $s^2 = 8{,}12$."
 },
 {
  "tipo": "Desviación estándar",
  "ctx": "E-commerce · Reseñas",
  "enun": "Se registró el número de reseñas dejadas en 15 productos. Datos: 10, 15, 8, 12, 18, 9, 14, 11, 13, 16, 10, 12, 9, 14, 11.",
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}61$",
   "$3{,}67$",
   "$2{,}85$",
   "$2{,}44$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=15.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{182}{15} = 12{,}13",
   "\\sum (x_i-\\bar{x})^2 = 113{,}73",
   "s^2 = \\dfrac{113{,}73}{14} = 8{,}12",
   "s = \\sqrt{8{,}12} = 2{,}85"
  ],
  "conc": "La desviación estándar es $s = 2{,}85$."
 },
 {
  "tipo": "Coeficiente de variación",
  "ctx": "E-commerce · Reseñas",
  "enun": "Se registró el número de reseñas dejadas en 15 productos. Datos: 10, 15, 8, 12, 18, 9, 14, 11, 13, 16, 10, 12, 9, 14, 11.",
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$17{,}64\\%$",
   "$26{,}45\\%$",
   "$23{,}49\\%$",
   "$31{,}95\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{182}{15} = 12{,}13",
   "\\sum (x_i-\\bar{x})^2 = 113{,}73",
   "s = 2{,}85",
   "CV = \\dfrac{2{,}85}{12{,}13}\\times 100\\% = 23{,}49\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 23{,}49\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=30$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     10
    ],
    [
     "2",
     8
    ],
    [
     "3",
     4
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     30
    ]
   ],
   "N": 30
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$8$",
   "$4$",
   "$7$",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=30$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     10
    ],
    [
     "2",
     8
    ],
    [
     "3",
     4
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     30
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}52$",
   "$1{,}36$",
   "$0{,}96$",
   "$1{,}99$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=30.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{46}{30} = 1{,}53",
   "\\sum f_i(x_i-\\bar{x})^2 = 39{,}47",
   "s^2 = \\dfrac{39{,}47}{29} = 1{,}36"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}36$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=30$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     10
    ],
    [
     "2",
     8
    ],
    [
     "3",
     4
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     30
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}17$",
   "$0{,}51$",
   "$1{,}61$",
   "$0{,}95$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=30.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{46}{30} = 1{,}53",
   "\\sum f_i(x_i-\\bar{x})^2 = 39{,}47",
   "s^2 = \\dfrac{39{,}47}{29} = 1{,}36",
   "s = \\sqrt{1{,}36} = 1{,}17"
  ],
  "conc": "La desviación estándar es $s = 1{,}17$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=30$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     10
    ],
    [
     "2",
     8
    ],
    [
     "3",
     4
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     30
    ]
   ],
   "N": 30
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$57{,}61\\%$",
   "$76{,}08\\%$",
   "$85{,}35\\%$",
   "$103{,}47\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{46}{30} = 1{,}53",
   "\\sum f_i(x_i-\\bar{x})^2 = 39{,}47",
   "s = 1{,}17",
   "CV = \\dfrac{1{,}17}{1{,}53}\\times 100\\% = 76{,}08\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 76{,}08\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=25$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     10
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     25
    ]
   ],
   "N": 25
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$0$",
   "$3$",
   "$1$",
   "$7$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 3 - 0 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=25$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     10
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     25
    ]
   ],
   "N": 25
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}50$",
   "$1{,}02$",
   "$1{,}46$",
   "$0{,}87$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=25.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{26}{25} = 1{,}04",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}96",
   "s^2 = \\dfrac{20{,}96}{24} = 0{,}87"
  ],
  "conc": "La varianza muestral es $s^2 = 0{,}87$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=25$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     10
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     25
    ]
   ],
   "N": 25
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}71$",
   "$0{,}27$",
   "$0{,}93$",
   "$1{,}37$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=25.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{26}{25} = 1{,}04",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}96",
   "s^2 = \\dfrac{20{,}96}{24} = 0{,}87",
   "s = \\sqrt{0{,}87} = 0{,}93"
  ],
  "conc": "La desviación estándar es $s = 0{,}93$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=25$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     10
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     25
    ]
   ],
   "N": 25
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$100{,}78\\%$",
   "$68{,}08\\%$",
   "$122{,}21\\%$",
   "$89{,}86\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{26}{25} = 1{,}04",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}96",
   "s = 0{,}93",
   "CV = \\dfrac{0{,}93}{1{,}04}\\times 100\\% = 89{,}86\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 89{,}86\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Inmobiliaria · Casas",
  "enun": "Se registró el número de dormitorios en $n=28$ casas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "1",
     4
    ],
    [
     "2",
     10
    ],
    [
     "3",
     10
    ],
    [
     "4",
     4
    ],
    [
     "Total",
     28
    ]
   ],
   "N": 28
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$3$",
   "$0$",
   "$9$",
   "$5$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 1 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Inmobiliaria · Casas",
  "enun": "Se registró el número de dormitorios en $n=28$ casas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "1",
     4
    ],
    [
     "2",
     10
    ],
    [
     "3",
     10
    ],
    [
     "4",
     4
    ],
    [
     "Total",
     28
    ]
   ],
   "N": 28
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}00$",
   "$1{,}44$",
   "$0{,}48$",
   "$0{,}85$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=28.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{70}{28} = 2{,}50",
   "\\sum f_i(x_i-\\bar{x})^2 = 23{,}00",
   "s^2 = \\dfrac{23{,}00}{27} = 0{,}85"
  ],
  "conc": "La varianza muestral es $s^2 = 0{,}85$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Inmobiliaria · Casas",
  "enun": "Se registró el número de dormitorios en $n=28$ casas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "1",
     4
    ],
    [
     "2",
     10
    ],
    [
     "3",
     10
    ],
    [
     "4",
     4
    ],
    [
     "Total",
     28
    ]
   ],
   "N": 28
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}26$",
   "$0{,}92$",
   "$0{,}70$",
   "$1{,}36$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=28.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{70}{28} = 2{,}50",
   "\\sum f_i(x_i-\\bar{x})^2 = 23{,}00",
   "s^2 = \\dfrac{23{,}00}{27} = 0{,}85",
   "s = \\sqrt{0{,}85} = 0{,}92"
  ],
  "conc": "La desviación estándar es $s = 0{,}92$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Inmobiliaria · Casas",
  "enun": "Se registró el número de dormitorios en $n=28$ casas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "1",
     4
    ],
    [
     "2",
     10
    ],
    [
     "3",
     10
    ],
    [
     "4",
     4
    ],
    [
     "Total",
     28
    ]
   ],
   "N": 28
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$50{,}21\\%$",
   "$27{,}85\\%$",
   "$41{,}49\\%$",
   "$36{,}92\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{70}{28} = 2{,}50",
   "\\sum f_i(x_i-\\bar{x})^2 = 23{,}00",
   "s = 0{,}92",
   "CV = \\dfrac{0{,}92}{2{,}50}\\times 100\\% = 36{,}92\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 36{,}92\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=32$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     14
    ],
    [
     "2",
     9
    ],
    [
     "3",
     3
    ],
    [
     "Total",
     32
    ]
   ],
   "N": 32
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$7$",
   "$3$",
   "$2$",
   "$6$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 3 - 0 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=32$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     14
    ],
    [
     "2",
     9
    ],
    [
     "3",
     3
    ],
    [
     "Total",
     32
    ]
   ],
   "N": 32
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}94$",
   "$0{,}42$",
   "$1{,}38$",
   "$0{,}79$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=32.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{41}{32} = 1{,}28",
   "\\sum f_i(x_i-\\bar{x})^2 = 24{,}47",
   "s^2 = \\dfrac{24{,}47}{31} = 0{,}79"
  ],
  "conc": "La varianza muestral es $s^2 = 0{,}79$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=32$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     14
    ],
    [
     "2",
     9
    ],
    [
     "3",
     3
    ],
    [
     "Total",
     32
    ]
   ],
   "N": 32
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}23$",
   "$0{,}67$",
   "$0{,}89$",
   "$1{,}33$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=32.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{41}{32} = 1{,}28",
   "\\sum f_i(x_i-\\bar{x})^2 = 24{,}47",
   "s^2 = \\dfrac{24{,}47}{31} = 0{,}79",
   "s = \\sqrt{0{,}79} = 0{,}89"
  ],
  "conc": "La desviación estándar es $s = 0{,}89$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=32$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     14
    ],
    [
     "2",
     9
    ],
    [
     "3",
     3
    ],
    [
     "Total",
     32
    ]
   ],
   "N": 32
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$77{,}80\\%$",
   "$94{,}30\\%$",
   "$52{,}49\\%$",
   "$69{,}34\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{41}{32} = 1{,}28",
   "\\sum f_i(x_i-\\bar{x})^2 = 24{,}47",
   "s = 0{,}89",
   "CV = \\dfrac{0{,}89}{1{,}28}\\times 100\\% = 69{,}34\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 69{,}34\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=26$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "2",
     3
    ],
    [
     "3",
     6
    ],
    [
     "4",
     10
    ],
    [
     "5",
     5
    ],
    [
     "6",
     2
    ],
    [
     "Total",
     26
    ]
   ],
   "N": 26
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$2$",
   "$4$",
   "$1$",
   "$8$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 6 - 2 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=26$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "2",
     3
    ],
    [
     "3",
     6
    ],
    [
     "4",
     10
    ],
    [
     "5",
     5
    ],
    [
     "6",
     2
    ],
    [
     "Total",
     26
    ]
   ],
   "N": 26
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}82$",
   "$1{,}38$",
   "$0{,}86$",
   "$1{,}23$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=26.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{101}{26} = 3{,}88",
   "\\sum f_i(x_i-\\bar{x})^2 = 30{,}65",
   "s^2 = \\dfrac{30{,}65}{25} = 1{,}23"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}23$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=26$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "2",
     3
    ],
    [
     "3",
     6
    ],
    [
     "4",
     10
    ],
    [
     "5",
     5
    ],
    [
     "6",
     2
    ],
    [
     "Total",
     26
    ]
   ],
   "N": 26
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}55$",
   "$1{,}11$",
   "$0{,}89$",
   "$0{,}45$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=26.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{101}{26} = 3{,}88",
   "\\sum f_i(x_i-\\bar{x})^2 = 30{,}65",
   "s^2 = \\dfrac{30{,}65}{25} = 1{,}23",
   "s = \\sqrt{1{,}23} = 1{,}11"
  ],
  "conc": "La desviación estándar es $s = 1{,}11$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=26$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "2",
     3
    ],
    [
     "3",
     6
    ],
    [
     "4",
     10
    ],
    [
     "5",
     5
    ],
    [
     "6",
     2
    ],
    [
     "Total",
     26
    ]
   ],
   "N": 26
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$28{,}51\\%$",
   "$21{,}45\\%$",
   "$38{,}77\\%$",
   "$32{,}07\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{101}{26} = 3{,}88",
   "\\sum f_i(x_i-\\bar{x})^2 = 30{,}65",
   "s = 1{,}11",
   "CV = \\dfrac{1{,}11}{3{,}88}\\times 100\\% = 28{,}51\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 28{,}51\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=40$ hojas revisadas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     10
    ],
    [
     "1",
     14
    ],
    [
     "2",
     9
    ],
    [
     "3",
     5
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$6$",
   "$1$",
   "$4$",
   "$0$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=40$ hojas revisadas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     10
    ],
    [
     "1",
     14
    ],
    [
     "2",
     9
    ],
    [
     "3",
     5
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}93$",
   "$0{,}93$",
   "$1{,}32$",
   "$1{,}48$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{55}{40} = 1{,}38",
   "\\sum f_i(x_i-\\bar{x})^2 = 51{,}38",
   "s^2 = \\dfrac{51{,}38}{39} = 1{,}32"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}32$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=40$ hojas revisadas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     10
    ],
    [
     "1",
     14
    ],
    [
     "2",
     9
    ],
    [
     "3",
     5
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}59$",
   "$0{,}93$",
   "$1{,}15$",
   "$0{,}49$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=40.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{55}{40} = 1{,}38",
   "\\sum f_i(x_i-\\bar{x})^2 = 51{,}38",
   "s^2 = \\dfrac{51{,}38}{39} = 1{,}32",
   "s = \\sqrt{1{,}32} = 1{,}15"
  ],
  "conc": "La desviación estándar es $s = 1{,}15$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=40$ hojas revisadas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     10
    ],
    [
     "1",
     14
    ],
    [
     "2",
     9
    ],
    [
     "3",
     5
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     40
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$83{,}47\\%$",
   "$113{,}52\\%$",
   "$63{,}23\\%$",
   "$93{,}63\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{55}{40} = 1{,}38",
   "\\sum f_i(x_i-\\bar{x})^2 = 51{,}38",
   "s = 1{,}15",
   "CV = \\dfrac{1{,}15}{1{,}38}\\times 100\\% = 83{,}47\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 83{,}47\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=35$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "3",
     5
    ],
    [
     "4",
     8
    ],
    [
     "5",
     12
    ],
    [
     "6",
     7
    ],
    [
     "7",
     3
    ],
    [
     "Total",
     35
    ]
   ],
   "N": 35
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$3$",
   "$4$",
   "$7$",
   "$8$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 7 - 3 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=35$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "3",
     5
    ],
    [
     "4",
     8
    ],
    [
     "5",
     12
    ],
    [
     "6",
     7
    ],
    [
     "7",
     3
    ],
    [
     "Total",
     35
    ]
   ],
   "N": 35
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}36$",
   "$0{,}96$",
   "$1{,}99$",
   "$1{,}52$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=35.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{170}{35} = 4{,}86",
   "\\sum f_i(x_i-\\bar{x})^2 = 46{,}29",
   "s^2 = \\dfrac{46{,}29}{34} = 1{,}36"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}36$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=35$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "3",
     5
    ],
    [
     "4",
     8
    ],
    [
     "5",
     12
    ],
    [
     "6",
     7
    ],
    [
     "7",
     3
    ],
    [
     "Total",
     35
    ]
   ],
   "N": 35
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}17$",
   "$1{,}61$",
   "$0{,}95$",
   "$0{,}51$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=35.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{170}{35} = 4{,}86",
   "\\sum f_i(x_i-\\bar{x})^2 = 46{,}29",
   "s^2 = \\dfrac{46{,}29}{34} = 1{,}36",
   "s = \\sqrt{1{,}36} = 1{,}17"
  ],
  "conc": "La desviación estándar es $s = 1{,}17$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=35$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "3",
     5
    ],
    [
     "4",
     8
    ],
    [
     "5",
     12
    ],
    [
     "6",
     7
    ],
    [
     "7",
     3
    ],
    [
     "Total",
     35
    ]
   ],
   "N": 35
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$18{,}05\\%$",
   "$24{,}02\\%$",
   "$32{,}67\\%$",
   "$27{,}04\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{170}{35} = 4{,}86",
   "\\sum f_i(x_i-\\bar{x})^2 = 46{,}29",
   "s = 1{,}17",
   "CV = \\dfrac{1{,}17}{4{,}86}\\times 100\\% = 24{,}02\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 24{,}02\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=24$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     8
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "4",
     1
    ],
    [
     "Total",
     24
    ]
   ],
   "N": 24
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$8$",
   "$2$",
   "$4$",
   "$1$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=24$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     8
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "4",
     1
    ],
    [
     "Total",
     24
    ]
   ],
   "N": 24
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}91$",
   "$1{,}89$",
   "$1{,}29$",
   "$1{,}44$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=24.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{33}{24} = 1{,}38",
   "\\sum f_i(x_i-\\bar{x})^2 = 29{,}63",
   "s^2 = \\dfrac{29{,}63}{23} = 1{,}29"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}29$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=24$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     8
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "4",
     1
    ],
    [
     "Total",
     24
    ]
   ],
   "N": 24
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}91$",
   "$1{,}13$",
   "$1{,}57$",
   "$0{,}47$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=24.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{33}{24} = 1{,}38",
   "\\sum f_i(x_i-\\bar{x})^2 = 29{,}63",
   "s^2 = \\dfrac{29{,}63}{23} = 1{,}29",
   "s = \\sqrt{1{,}29} = 1{,}13"
  ],
  "conc": "La desviación estándar es $s = 1{,}13$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=24$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     8
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "4",
     1
    ],
    [
     "Total",
     24
    ]
   ],
   "N": 24
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$82{,}54\\%$",
   "$92{,}58\\%$",
   "$112{,}25\\%$",
   "$62{,}52\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{33}{24} = 1{,}38",
   "\\sum f_i(x_i-\\bar{x})^2 = 29{,}63",
   "s = 1{,}13",
   "CV = \\dfrac{1{,}13}{1{,}38}\\times 100\\% = 82{,}54\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 82{,}54\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=27$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     3
    ],
    [
     "1",
     5
    ],
    [
     "2",
     8
    ],
    [
     "3",
     6
    ],
    [
     "4",
     3
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     27
    ]
   ],
   "N": 27
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$1$",
   "$2$",
   "$7$",
   "$5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 5 - 0 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=27$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     3
    ],
    [
     "1",
     5
    ],
    [
     "2",
     8
    ],
    [
     "3",
     6
    ],
    [
     "4",
     3
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     27
    ]
   ],
   "N": 27
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}82$",
   "$1{,}97$",
   "$2{,}20$",
   "$1{,}43$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=27.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{61}{27} = 2{,}26",
   "\\sum f_i(x_i-\\bar{x})^2 = 51{,}19",
   "s^2 = \\dfrac{51{,}19}{26} = 1{,}97"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}97$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=27$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     3
    ],
    [
     "1",
     5
    ],
    [
     "2",
     8
    ],
    [
     "3",
     6
    ],
    [
     "4",
     3
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     27
    ]
   ],
   "N": 27
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}69$",
   "$1{,}88$",
   "$1{,}16$",
   "$1{,}40$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=27.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{61}{27} = 2{,}26",
   "\\sum f_i(x_i-\\bar{x})^2 = 51{,}19",
   "s^2 = \\dfrac{51{,}19}{26} = 1{,}97",
   "s = \\sqrt{1{,}97} = 1{,}40"
  ],
  "conc": "La desviación estándar es $s = 1{,}40$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=27$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     3
    ],
    [
     "1",
     5
    ],
    [
     "2",
     8
    ],
    [
     "3",
     6
    ],
    [
     "4",
     3
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     27
    ]
   ],
   "N": 27
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$84{,}46\\%$",
   "$69{,}70\\%$",
   "$62{,}10\\%$",
   "$46{,}99\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{61}{27} = 2{,}26",
   "\\sum f_i(x_i-\\bar{x})^2 = 51{,}19",
   "s = 1{,}40",
   "CV = \\dfrac{1{,}40}{2{,}26}\\times 100\\% = 62{,}10\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 62{,}10\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Tránsito · Registros",
  "enun": "Se registró el número de accidentes por mes en $n=22$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     7
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     22
    ]
   ],
   "N": 22
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$2$",
   "$6$",
   "$7$",
   "$3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 3 - 0 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Tránsito · Registros",
  "enun": "Se registró el número de accidentes por mes en $n=22$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     7
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     22
    ]
   ],
   "N": 22
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}59$",
   "$1{,}15$",
   "$1{,}00$",
   "$0{,}63$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=22.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{22} = 1{,}05",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}95",
   "s^2 = \\dfrac{20{,}95}{21} = 1{,}00"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}00$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Tránsito · Registros",
  "enun": "Se registró el número de accidentes por mes en $n=22$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     7
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     22
    ]
   ],
   "N": 22
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}78$",
   "$0{,}34$",
   "$1{,}44$",
   "$1{,}00$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=22.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{22} = 1{,}05",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}95",
   "s^2 = \\dfrac{20{,}95}{21} = 1{,}00",
   "s = \\sqrt{1{,}00} = 1{,}00"
  ],
  "conc": "La desviación estándar es $s = 1{,}00$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Tránsito · Registros",
  "enun": "Se registró el número de accidentes por mes en $n=22$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     7
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     22
    ]
   ],
   "N": 22
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$107{,}15\\%$",
   "$95{,}55\\%$",
   "$129{,}95\\%$",
   "$72{,}41\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{22} = 1{,}05",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}95",
   "s = 1{,}00",
   "CV = \\dfrac{1{,}00}{1{,}05}\\times 100\\% = 95{,}55\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 95{,}55\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=36$ producciones. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     10
    ],
    [
     "2",
     9
    ],
    [
     "3",
     6
    ],
    [
     "4",
     3
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$1$",
   "$8$",
   "$2$",
   "$4$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=36$ producciones. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     10
    ],
    [
     "2",
     9
    ],
    [
     "3",
     6
    ],
    [
     "4",
     3
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}26$",
   "$1{,}56$",
   "$1{,}75$",
   "$1{,}11$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=36.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{58}{36} = 1{,}61",
   "\\sum f_i(x_i-\\bar{x})^2 = 54{,}56",
   "s^2 = \\dfrac{54{,}56}{35} = 1{,}56"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}56$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=36$ producciones. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     10
    ],
    [
     "2",
     9
    ],
    [
     "3",
     6
    ],
    [
     "4",
     3
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}69$",
   "$0{,}59$",
   "$1{,}03$",
   "$1{,}25$"
  ],
  "correct": 3,
  "pautaHead": "s=\\sqrt{s^2},\\ n=36.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{58}{36} = 1{,}61",
   "\\sum f_i(x_i-\\bar{x})^2 = 54{,}56",
   "s^2 = \\dfrac{54{,}56}{35} = 1{,}56",
   "s = \\sqrt{1{,}56} = 1{,}25"
  ],
  "conc": "La desviación estándar es $s = 1{,}25$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=36$ producciones. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     8
    ],
    [
     "1",
     10
    ],
    [
     "2",
     9
    ],
    [
     "3",
     6
    ],
    [
     "4",
     3
    ],
    [
     "Total",
     36
    ]
   ],
   "N": 36
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$105{,}39\\%$",
   "$86{,}93\\%$",
   "$77{,}49\\%$",
   "$58{,}68\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{58}{36} = 1{,}61",
   "\\sum f_i(x_i-\\bar{x})^2 = 54{,}56",
   "s = 1{,}25",
   "CV = \\dfrac{1{,}25}{1{,}61}\\times 100\\% = 77{,}49\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 77{,}49\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=33$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     3
    ],
    [
     "1",
     6
    ],
    [
     "2",
     10
    ],
    [
     "3",
     8
    ],
    [
     "4",
     4
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     33
    ]
   ],
   "N": 33
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$2$",
   "$7$",
   "$1$",
   "$5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 5 - 0 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=33$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     3
    ],
    [
     "1",
     6
    ],
    [
     "2",
     10
    ],
    [
     "3",
     8
    ],
    [
     "4",
     4
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     33
    ]
   ],
   "N": 33
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}99$",
   "$1{,}78$",
   "$1{,}28$",
   "$2{,}56$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=33.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{76}{33} = 2{,}30",
   "\\sum f_i(x_i-\\bar{x})^2 = 56{,}97",
   "s^2 = \\dfrac{56{,}97}{32} = 1{,}78"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}78$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=33$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     3
    ],
    [
     "1",
     6
    ],
    [
     "2",
     10
    ],
    [
     "3",
     8
    ],
    [
     "4",
     4
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     33
    ]
   ],
   "N": 33
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}33$",
   "$0{,}64$",
   "$1{,}79$",
   "$1{,}10$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=33.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{76}{33} = 2{,}30",
   "\\sum f_i(x_i-\\bar{x})^2 = 56{,}97",
   "s^2 = \\dfrac{56{,}97}{32} = 1{,}78",
   "s = \\sqrt{1{,}78} = 1{,}33"
  ],
  "conc": "La desviación estándar es $s = 1{,}33$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=33$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     3
    ],
    [
     "1",
     6
    ],
    [
     "2",
     10
    ],
    [
     "3",
     8
    ],
    [
     "4",
     4
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     33
    ]
   ],
   "N": 33
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$65{,}03\\%$",
   "$57{,}94\\%$",
   "$43{,}82\\%$",
   "$78{,}79\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{76}{33} = 2{,}30",
   "\\sum f_i(x_i-\\bar{x})^2 = 56{,}97",
   "s = 1{,}33",
   "CV = \\dfrac{1{,}33}{2{,}30}\\times 100\\% = 57{,}94\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 57{,}94\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=29$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     14
    ],
    [
     "1",
     9
    ],
    [
     "2",
     4
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     29
    ]
   ],
   "N": 29
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$6$",
   "$3$",
   "$7$",
   "$2$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 3 - 0 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=29$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     14
    ],
    [
     "1",
     9
    ],
    [
     "2",
     4
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     29
    ]
   ],
   "N": 29
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}88$",
   "$0{,}51$",
   "$1{,}03$",
   "$1{,}47$"
  ],
  "correct": 0,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=29.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{29} = 0{,}79",
   "\\sum f_i(x_i-\\bar{x})^2 = 24{,}76",
   "s^2 = \\dfrac{24{,}76}{28} = 0{,}88"
  ],
  "conc": "La varianza muestral es $s^2 = 0{,}88$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=29$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     14
    ],
    [
     "1",
     9
    ],
    [
     "2",
     4
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     29
    ]
   ],
   "N": 29
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}28$",
   "$1{,}38$",
   "$0{,}94$",
   "$0{,}72$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=29.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{29} = 0{,}79",
   "\\sum f_i(x_i-\\bar{x})^2 = 24{,}76",
   "s^2 = \\dfrac{24{,}76}{28} = 0{,}88",
   "s = \\sqrt{0{,}88} = 0{,}94"
  ],
  "conc": "La desviación estándar es $s = 0{,}94$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=29$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     14
    ],
    [
     "1",
     9
    ],
    [
     "2",
     4
    ],
    [
     "3",
     2
    ],
    [
     "Total",
     29
    ]
   ],
   "N": 29
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$132{,}93\\%$",
   "$89{,}90\\%$",
   "$118{,}56\\%$",
   "$161{,}25\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{23}{29} = 0{,}79",
   "\\sum f_i(x_i-\\bar{x})^2 = 24{,}76",
   "s = 0{,}94",
   "CV = \\dfrac{0{,}94}{0{,}79}\\times 100\\% = 118{,}56\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 118{,}56\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos recibidos por hora en $n=31$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "3",
     4
    ],
    [
     "4",
     9
    ],
    [
     "5",
     10
    ],
    [
     "6",
     6
    ],
    [
     "7",
     2
    ],
    [
     "Total",
     31
    ]
   ],
   "N": 31
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$8$",
   "$1$",
   "$4$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 7 - 3 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos recibidos por hora en $n=31$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "3",
     4
    ],
    [
     "4",
     9
    ],
    [
     "5",
     10
    ],
    [
     "6",
     6
    ],
    [
     "7",
     2
    ],
    [
     "Total",
     31
    ]
   ],
   "N": 31
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}40$",
   "$1{,}25$",
   "$0{,}88$",
   "$1{,}84$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=31.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{148}{31} = 4{,}77",
   "\\sum f_i(x_i-\\bar{x})^2 = 37{,}42",
   "s^2 = \\dfrac{37{,}42}{30} = 1{,}25"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}25$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos recibidos por hora en $n=31$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "3",
     4
    ],
    [
     "4",
     9
    ],
    [
     "5",
     10
    ],
    [
     "6",
     6
    ],
    [
     "7",
     2
    ],
    [
     "Total",
     31
    ]
   ],
   "N": 31
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}46$",
   "$1{,}12$",
   "$1{,}56$",
   "$0{,}90$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=31.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{148}{31} = 4{,}77",
   "\\sum f_i(x_i-\\bar{x})^2 = 37{,}42",
   "s^2 = \\dfrac{37{,}42}{30} = 1{,}25",
   "s = \\sqrt{1{,}25} = 1{,}12"
  ],
  "conc": "La desviación estándar es $s = 1{,}12$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos recibidos por hora en $n=31$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "3",
     4
    ],
    [
     "4",
     9
    ],
    [
     "5",
     10
    ],
    [
     "6",
     6
    ],
    [
     "7",
     2
    ],
    [
     "Total",
     31
    ]
   ],
   "N": 31
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$23{,}39\\%$",
   "$17{,}57\\%$",
   "$26{,}34\\%$",
   "$31{,}81\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{148}{31} = 4{,}77",
   "\\sum f_i(x_i-\\bar{x})^2 = 37{,}42",
   "s = 1{,}12",
   "CV = \\dfrac{1{,}12}{4{,}77}\\times 100\\% = 23{,}39\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 23{,}39\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Retail · Boletas",
  "enun": "Se registró el número de productos por boleta en $n=34$ compras. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "1",
     4
    ],
    [
     "2",
     7
    ],
    [
     "3",
     10
    ],
    [
     "4",
     7
    ],
    [
     "5",
     4
    ],
    [
     "6",
     2
    ],
    [
     "Total",
     34
    ]
   ],
   "N": 34
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$7$",
   "$5$",
   "$1$",
   "$2$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 6 - 1 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Retail · Boletas",
  "enun": "Se registró el número de productos por boleta en $n=34$ compras. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "1",
     4
    ],
    [
     "2",
     7
    ],
    [
     "3",
     10
    ],
    [
     "4",
     7
    ],
    [
     "5",
     4
    ],
    [
     "6",
     2
    ],
    [
     "Total",
     34
    ]
   ],
   "N": 34
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}38$",
   "$1{,}91$",
   "$2{,}14$",
   "$2{,}73$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=34.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{108}{34} = 3{,}18",
   "\\sum f_i(x_i-\\bar{x})^2 = 62{,}94",
   "s^2 = \\dfrac{62{,}94}{33} = 1{,}91"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}91$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Retail · Boletas",
  "enun": "Se registró el número de productos por boleta en $n=34$ compras. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "1",
     4
    ],
    [
     "2",
     7
    ],
    [
     "3",
     10
    ],
    [
     "4",
     7
    ],
    [
     "5",
     4
    ],
    [
     "6",
     2
    ],
    [
     "Total",
     34
    ]
   ],
   "N": 34
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}85$",
   "$0{,}67$",
   "$1{,}38$",
   "$1{,}15$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=34.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{108}{34} = 3{,}18",
   "\\sum f_i(x_i-\\bar{x})^2 = 62{,}94",
   "s^2 = \\dfrac{62{,}94}{33} = 1{,}91",
   "s = \\sqrt{1{,}91} = 1{,}38"
  ],
  "conc": "La desviación estándar es $s = 1{,}38$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Retail · Boletas",
  "enun": "Se registró el número de productos por boleta en $n=34$ compras. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "1",
     4
    ],
    [
     "2",
     7
    ],
    [
     "3",
     10
    ],
    [
     "4",
     7
    ],
    [
     "5",
     4
    ],
    [
     "6",
     2
    ],
    [
     "Total",
     34
    ]
   ],
   "N": 34
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$48{,}83\\%$",
   "$32{,}83\\%$",
   "$59{,}13\\%$",
   "$43{,}48\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{108}{34} = 3{,}18",
   "\\sum f_i(x_i-\\bar{x})^2 = 62{,}94",
   "s = 1{,}38",
   "CV = \\dfrac{1{,}38}{3{,}18}\\times 100\\% = 43{,}48\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 43{,}48\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=23$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     7
    ],
    [
     "1",
     8
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "4",
     1
    ],
    [
     "Total",
     23
    ]
   ],
   "N": 23
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$4$",
   "$3$",
   "$8$",
   "$7$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=23$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     7
    ],
    [
     "1",
     8
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "4",
     1
    ],
    [
     "Total",
     23
    ]
   ],
   "N": 23
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}87$",
   "$1{,}42$",
   "$0{,}89$",
   "$1{,}27$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=23.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{28}{23} = 1{,}22",
   "\\sum f_i(x_i-\\bar{x})^2 = 27{,}91",
   "s^2 = \\dfrac{27{,}91}{22} = 1{,}27"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}27$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=23$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     7
    ],
    [
     "1",
     8
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "4",
     1
    ],
    [
     "Total",
     23
    ]
   ],
   "N": 23
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}91$",
   "$1{,}13$",
   "$0{,}47$",
   "$1{,}57$"
  ],
  "correct": 1,
  "pautaHead": "s=\\sqrt{s^2},\\ n=23.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{28}{23} = 1{,}22",
   "\\sum f_i(x_i-\\bar{x})^2 = 27{,}91",
   "s^2 = \\dfrac{27{,}91}{22} = 1{,}27",
   "s = \\sqrt{1{,}27} = 1{,}13"
  ],
  "conc": "La desviación estándar es $s = 1{,}13$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=23$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     7
    ],
    [
     "1",
     8
    ],
    [
     "2",
     5
    ],
    [
     "3",
     2
    ],
    [
     "4",
     1
    ],
    [
     "Total",
     23
    ]
   ],
   "N": 23
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$125{,}83\\%$",
   "$70{,}11\\%$",
   "$103{,}77\\%$",
   "$92{,}53\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{28}{23} = 1{,}22",
   "\\sum f_i(x_i-\\bar{x})^2 = 27{,}91",
   "s = 1{,}13",
   "CV = \\dfrac{1{,}13}{1{,}22}\\times 100\\% = 92{,}53\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 92{,}53\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=38$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     14
    ],
    [
     "1",
     10
    ],
    [
     "2",
     6
    ],
    [
     "3",
     4
    ],
    [
     "4",
     2
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$5$",
   "$2$",
   "$3$",
   "$9$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 5 - 0 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=38$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     14
    ],
    [
     "1",
     10
    ],
    [
     "2",
     6
    ],
    [
     "3",
     4
    ],
    [
     "4",
     2
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}45$",
   "$1{,}59$",
   "$3{,}11$",
   "$2{,}18$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=38.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{52}{38} = 1{,}37",
   "\\sum f_i(x_i-\\bar{x})^2 = 80{,}84",
   "s^2 = \\dfrac{80{,}84}{37} = 2{,}18"
  ],
  "conc": "La varianza muestral es $s^2 = 2{,}18$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=38$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     14
    ],
    [
     "1",
     10
    ],
    [
     "2",
     6
    ],
    [
     "3",
     4
    ],
    [
     "4",
     2
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}74$",
   "$1{,}23$",
   "$1{,}48$",
   "$1{,}97$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=38.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{52}{38} = 1{,}37",
   "\\sum f_i(x_i-\\bar{x})^2 = 80{,}84",
   "s^2 = \\dfrac{80{,}84}{37} = 2{,}18",
   "s = \\sqrt{2{,}18} = 1{,}48"
  ],
  "conc": "La desviación estándar es $s = 1{,}48$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=38$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     14
    ],
    [
     "1",
     10
    ],
    [
     "2",
     6
    ],
    [
     "3",
     4
    ],
    [
     "4",
     2
    ],
    [
     "5",
     2
    ],
    [
     "Total",
     38
    ]
   ],
   "N": 38
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$81{,}88\\%$",
   "$121{,}12\\%$",
   "$146{,}91\\%$",
   "$108{,}02\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{52}{38} = 1{,}37",
   "\\sum f_i(x_i-\\bar{x})^2 = 80{,}84",
   "s = 1{,}48",
   "CV = \\dfrac{1{,}48}{1{,}37}\\times 100\\% = 108{,}02\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 108{,}02\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en $n=25$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     8
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     25
    ]
   ],
   "N": 25
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$1$",
   "$4$",
   "$0$",
   "$6$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 4 - 0 = 4"
  ],
  "conc": "El rango es <b>4</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en $n=25$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     8
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     25
    ]
   ],
   "N": 25
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}19$",
   "$1{,}69$",
   "$1{,}08$",
   "$1{,}51$"
  ],
  "correct": 3,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=25.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{37}{25} = 1{,}48",
   "\\sum f_i(x_i-\\bar{x})^2 = 36{,}24",
   "s^2 = \\dfrac{36{,}24}{24} = 1{,}51"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}51$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en $n=25$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     8
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     25
    ]
   ],
   "N": 25
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}23$",
   "$0{,}57$",
   "$1{,}01$",
   "$1{,}67$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=25.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{37}{25} = 1{,}48",
   "\\sum f_i(x_i-\\bar{x})^2 = 36{,}24",
   "s^2 = \\dfrac{36{,}24}{24} = 1{,}51",
   "s = \\sqrt{1{,}51} = 1{,}23"
  ],
  "conc": "La desviación estándar es $s = 1{,}23$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en $n=25$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     6
    ],
    [
     "1",
     8
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "4",
     2
    ],
    [
     "Total",
     25
    ]
   ],
   "N": 25
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$62{,}89\\%$",
   "$112{,}92\\%$",
   "$93{,}13\\%$",
   "$83{,}03\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{37}{25} = 1{,}48",
   "\\sum f_i(x_i-\\bar{x})^2 = 36{,}24",
   "s = 1{,}23",
   "CV = \\dfrac{1{,}23}{1{,}48}\\times 100\\% = 83{,}03\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 83{,}03\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=30$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "2",
     3
    ],
    [
     "3",
     6
    ],
    [
     "4",
     9
    ],
    [
     "5",
     6
    ],
    [
     "6",
     4
    ],
    [
     "7",
     2
    ],
    [
     "Total",
     30
    ]
   ],
   "N": 30
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$5$",
   "$8$",
   "$4$",
   "$0$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 7 - 2 = 5"
  ],
  "conc": "El rango es <b>5</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=30$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "2",
     3
    ],
    [
     "3",
     6
    ],
    [
     "4",
     9
    ],
    [
     "5",
     6
    ],
    [
     "6",
     4
    ],
    [
     "7",
     2
    ],
    [
     "Total",
     30
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}39$",
   "$2{,}76$",
   "$1{,}93$",
   "$2{,}16$"
  ],
  "correct": 2,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=30.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{128}{30} = 4{,}27",
   "\\sum f_i(x_i-\\bar{x})^2 = 55{,}87",
   "s^2 = \\dfrac{55{,}87}{29} = 1{,}93"
  ],
  "conc": "La varianza muestral es $s^2 = 1{,}93$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=30$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "2",
     3
    ],
    [
     "3",
     6
    ],
    [
     "4",
     9
    ],
    [
     "5",
     6
    ],
    [
     "6",
     4
    ],
    [
     "7",
     2
    ],
    [
     "Total",
     30
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}15$",
   "$1{,}86$",
   "$1{,}39$",
   "$0{,}68$"
  ],
  "correct": 2,
  "pautaHead": "s=\\sqrt{s^2},\\ n=30.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{128}{30} = 4{,}27",
   "\\sum f_i(x_i-\\bar{x})^2 = 55{,}87",
   "s^2 = \\dfrac{55{,}87}{29} = 1{,}93",
   "s = \\sqrt{1{,}93} = 1{,}39"
  ],
  "conc": "La desviación estándar es $s = 1{,}39$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=30$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "2",
     3
    ],
    [
     "3",
     6
    ],
    [
     "4",
     9
    ],
    [
     "5",
     6
    ],
    [
     "6",
     4
    ],
    [
     "7",
     2
    ],
    [
     "Total",
     30
    ]
   ],
   "N": 30
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$32{,}53\\%$",
   "$44{,}24\\%$",
   "$24{,}51\\%$",
   "$36{,}57\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{128}{30} = 4{,}27",
   "\\sum f_i(x_i-\\bar{x})^2 = 55{,}87",
   "s = 1{,}39",
   "CV = \\dfrac{1{,}39}{4{,}27}\\times 100\\% = 32{,}53\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 32{,}53\\%$."
 },
 {
  "tipo": "Rango (tabla)",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=24$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     5
    ],
    [
     "1",
     10
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "Total",
     24
    ]
   ],
   "N": 24
  },
  "ask": "Calcule el rango.",
  "alts": [
   "$3$",
   "$1$",
   "$7$",
   "$0$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Rango} = x_{\\max} - x_{\\min}.",
  "pautaSteps": [
   "\\text{Rango} = 3 - 0 = 3"
  ],
  "conc": "El rango es <b>3</b>."
 },
 {
  "tipo": "Varianza muestral (tabla)",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=24$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     5
    ],
    [
     "1",
     10
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "Total",
     24
    ]
   ],
   "N": 24
  },
  "ask": "Calcule la varianza muestral $s^2$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}50$",
   "$0{,}91$",
   "$0{,}54$",
   "$1{,}06$"
  ],
  "correct": 1,
  "pautaHead": "s^2=\\dfrac{1}{n-1}\\sum f_i(x_i-\\bar{x})^2,\\ n=24.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{31}{24} = 1{,}29",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}96",
   "s^2 = \\dfrac{20{,}96}{23} = 0{,}91"
  ],
  "conc": "La varianza muestral es $s^2 = 0{,}91$."
 },
 {
  "tipo": "Desviación estándar (tabla)",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=24$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     5
    ],
    [
     "1",
     10
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "Total",
     24
    ]
   ],
   "N": 24
  },
  "ask": "Calcule la desviación estándar $s$ (aproximada a 2 decimales).",
  "alts": [
   "$0{,}95$",
   "$1{,}39$",
   "$0{,}73$",
   "$0{,}29$"
  ],
  "correct": 0,
  "pautaHead": "s=\\sqrt{s^2},\\ n=24.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{31}{24} = 1{,}29",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}96",
   "s^2 = \\dfrac{20{,}96}{23} = 0{,}91",
   "s = \\sqrt{0{,}91} = 0{,}95"
  ],
  "conc": "La desviación estándar es $s = 0{,}95$."
 },
 {
  "tipo": "Coeficiente de variación (tabla)",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=24$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$"
   ],
   "rows": [
    [
     "0",
     5
    ],
    [
     "1",
     10
    ],
    [
     "2",
     6
    ],
    [
     "3",
     3
    ],
    [
     "Total",
     24
    ]
   ],
   "N": 24
  },
  "ask": "Calcule el coeficiente de variación $CV$ (aproximado a 2 decimales).",
  "alts": [
   "$55{,}96\\%$",
   "$73{,}90\\%$",
   "$100{,}51\\%$",
   "$82{,}91\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.",
  "pautaSteps": [
   "\\bar{x} = \\dfrac{31}{24} = 1{,}29",
   "\\sum f_i(x_i-\\bar{x})^2 = 20{,}96",
   "s = 0{,}95",
   "CV = \\dfrac{0{,}95}{1{,}29}\\times 100\\% = 73{,}90\\%"
  ],
  "conc": "El coeficiente de variación es $CV = 73{,}90\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Empresa · Sucursales",
  "enun": "Se midieron cuatro variables en $n=20$ sucursales. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Ventas mensuales (miles $)",
     20,
     "300",
     "900",
     "600",
     "150"
    ],
    [
     "Número de empleados",
     20,
     "5",
     "25",
     "15",
     "4"
    ],
    [
     "Antigüedad (años)",
     20,
     "1",
     "10",
     "5",
     "2"
    ],
    [
     "Satisfacción del cliente (1-10)",
     20,
     "6",
     "9",
     "7,5",
     "0,5"
    ]
   ],
   "N": 20
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Ventas mensuales (miles $)\".",
  "alts": [
   "$21{,}79\\%$",
   "$31{,}00\\%$",
   "$25{,}00\\%$",
   "$15{,}93\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{150{,}00}{600{,}00}\\times 100\\% = 25{,}00\\%"
  ],
  "conc": "El CV de \"<b>Ventas mensuales (miles $)</b>\" es $25{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Empresa · Sucursales",
  "enun": "Se midieron cuatro variables en $n=20$ sucursales. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Ventas mensuales (miles $)",
     20,
     "300",
     "900",
     "600",
     "150"
    ],
    [
     "Número de empleados",
     20,
     "5",
     "25",
     "15",
     "4"
    ],
    [
     "Antigüedad (años)",
     20,
     "1",
     "10",
     "5",
     "2"
    ],
    [
     "Satisfacción del cliente (1-10)",
     20,
     "6",
     "9",
     "7,5",
     "0,5"
    ]
   ],
   "N": 20
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Antigüedad (años)",
   "Satisfacción del cliente (1-10)",
   "Ventas mensuales (miles $)",
   "Número de empleados"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{150{,}00}{600{,}00}\\times 100\\% = 25{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{4{,}00}{15{,}00}\\times 100\\% = 26{,}67\\%",
   "CV_{\\text{3}} = \\dfrac{2{,}00}{5{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{0{,}50}{7{,}50}\\times 100\\% = 6{,}67\\%",
   "\\text{El menor CV es } 6{,}67\\%"
  ],
  "conc": "La más homogénea es \"<b>Satisfacción del cliente (1-10)</b>\" con $CV = 6{,}67\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Empresa · Sucursales",
  "enun": "Se midieron cuatro variables en $n=20$ sucursales. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Ventas mensuales (miles $)",
     20,
     "300",
     "900",
     "600",
     "150"
    ],
    [
     "Número de empleados",
     20,
     "5",
     "25",
     "15",
     "4"
    ],
    [
     "Antigüedad (años)",
     20,
     "1",
     "10",
     "5",
     "2"
    ],
    [
     "Satisfacción del cliente (1-10)",
     20,
     "6",
     "9",
     "7,5",
     "0,5"
    ]
   ],
   "N": 20
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Satisfacción del cliente (1-10)",
   "Número de empleados",
   "Antigüedad (años)",
   "Ventas mensuales (miles $)"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{150{,}00}{600{,}00}\\times 100\\% = 25{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{4{,}00}{15{,}00}\\times 100\\% = 26{,}67\\%",
   "CV_{\\text{3}} = \\dfrac{2{,}00}{5{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{0{,}50}{7{,}50}\\times 100\\% = 6{,}67\\%",
   "\\text{El mayor CV es } 40{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Antigüedad (años)</b>\" con $CV = 40{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Salud · Clínica dental",
  "enun": "Se midieron cuatro variables en $n=30$ pacientes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Edad (años)",
     30,
     "18",
     "65",
     "35",
     "10"
    ],
    [
     "Tiempo de espera (min)",
     30,
     "5",
     "40",
     "18",
     "6"
    ],
    [
     "Número de piezas tratadas",
     30,
     "1",
     "8",
     "3",
     "1,2"
    ],
    [
     "Gasto en tratamiento (miles $)",
     30,
     "50",
     "400",
     "180",
     "90"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Tiempo de espera (min)\".",
  "alts": [
   "$45{,}33\\%$",
   "$33{,}33\\%$",
   "$25{,}12\\%$",
   "$37{,}47\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{2}} = \\dfrac{6{,}00}{18{,}00}\\times 100\\% = 33{,}33\\%"
  ],
  "conc": "El CV de \"<b>Tiempo de espera (min)</b>\" es $33{,}33\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Salud · Clínica dental",
  "enun": "Se midieron cuatro variables en $n=30$ pacientes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Edad (años)",
     30,
     "18",
     "65",
     "35",
     "10"
    ],
    [
     "Tiempo de espera (min)",
     30,
     "5",
     "40",
     "18",
     "6"
    ],
    [
     "Número de piezas tratadas",
     30,
     "1",
     "8",
     "3",
     "1,2"
    ],
    [
     "Gasto en tratamiento (miles $)",
     30,
     "50",
     "400",
     "180",
     "90"
    ]
   ],
   "N": 30
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Edad (años)",
   "Tiempo de espera (min)",
   "Número de piezas tratadas",
   "Gasto en tratamiento (miles $)"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{10{,}00}{35{,}00}\\times 100\\% = 28{,}57\\%",
   "CV_{\\text{2}} = \\dfrac{6{,}00}{18{,}00}\\times 100\\% = 33{,}33\\%",
   "CV_{\\text{3}} = \\dfrac{1{,}20}{3{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{90{,}00}{180{,}00}\\times 100\\% = 50{,}00\\%",
   "\\text{El menor CV es } 28{,}57\\%"
  ],
  "conc": "La más homogénea es \"<b>Edad (años)</b>\" con $CV = 28{,}57\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Salud · Clínica dental",
  "enun": "Se midieron cuatro variables en $n=30$ pacientes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Edad (años)",
     30,
     "18",
     "65",
     "35",
     "10"
    ],
    [
     "Tiempo de espera (min)",
     30,
     "5",
     "40",
     "18",
     "6"
    ],
    [
     "Número de piezas tratadas",
     30,
     "1",
     "8",
     "3",
     "1,2"
    ],
    [
     "Gasto en tratamiento (miles $)",
     30,
     "50",
     "400",
     "180",
     "90"
    ]
   ],
   "N": 30
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Gasto en tratamiento (miles $)",
   "Tiempo de espera (min)",
   "Edad (años)",
   "Número de piezas tratadas"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{10{,}00}{35{,}00}\\times 100\\% = 28{,}57\\%",
   "CV_{\\text{2}} = \\dfrac{6{,}00}{18{,}00}\\times 100\\% = 33{,}33\\%",
   "CV_{\\text{3}} = \\dfrac{1{,}20}{3{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{90{,}00}{180{,}00}\\times 100\\% = 50{,}00\\%",
   "\\text{El mayor CV es } 50{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Gasto en tratamiento (miles $)</b>\" con $CV = 50{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Educación · Universidad",
  "enun": "Se midieron cuatro variables en $n=40$ estudiantes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Nota final (1-7)",
     40,
     "3,5",
     "6,8",
     "5,2",
     "0,6"
    ],
    [
     "Horas de estudio semanal",
     40,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Asistencia (%)",
     40,
     "60",
     "100",
     "85",
     "8"
    ],
    [
     "Edad (años)",
     40,
     "18",
     "30",
     "21",
     "2"
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Asistencia (%)\".",
  "alts": [
   "$11{,}81\\%$",
   "$5{,}81\\%$",
   "$8{,}21\\%$",
   "$9{,}41\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{3}} = \\dfrac{8{,}00}{85{,}00}\\times 100\\% = 9{,}41\\%"
  ],
  "conc": "El CV de \"<b>Asistencia (%)</b>\" es $9{,}41\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Educación · Universidad",
  "enun": "Se midieron cuatro variables en $n=40$ estudiantes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Nota final (1-7)",
     40,
     "3,5",
     "6,8",
     "5,2",
     "0,6"
    ],
    [
     "Horas de estudio semanal",
     40,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Asistencia (%)",
     40,
     "60",
     "100",
     "85",
     "8"
    ],
    [
     "Edad (años)",
     40,
     "18",
     "30",
     "21",
     "2"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Nota final (1-7)",
   "Edad (años)",
   "Horas de estudio semanal",
   "Asistencia (%)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{0{,}60}{5{,}20}\\times 100\\% = 11{,}54\\%",
   "CV_{\\text{2}} = \\dfrac{4{,}00}{10{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{8{,}00}{85{,}00}\\times 100\\% = 9{,}41\\%",
   "CV_{\\text{4}} = \\dfrac{2{,}00}{21{,}00}\\times 100\\% = 9{,}52\\%",
   "\\text{El menor CV es } 9{,}41\\%"
  ],
  "conc": "La más homogénea es \"<b>Asistencia (%)</b>\" con $CV = 9{,}41\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Educación · Universidad",
  "enun": "Se midieron cuatro variables en $n=40$ estudiantes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Nota final (1-7)",
     40,
     "3,5",
     "6,8",
     "5,2",
     "0,6"
    ],
    [
     "Horas de estudio semanal",
     40,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Asistencia (%)",
     40,
     "60",
     "100",
     "85",
     "8"
    ],
    [
     "Edad (años)",
     40,
     "18",
     "30",
     "21",
     "2"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Edad (años)",
   "Horas de estudio semanal",
   "Asistencia (%)",
   "Nota final (1-7)"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{0{,}60}{5{,}20}\\times 100\\% = 11{,}54\\%",
   "CV_{\\text{2}} = \\dfrac{4{,}00}{10{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{8{,}00}{85{,}00}\\times 100\\% = 9{,}41\\%",
   "CV_{\\text{4}} = \\dfrac{2{,}00}{21{,}00}\\times 100\\% = 9{,}52\\%",
   "\\text{El mayor CV es } 40{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Horas de estudio semanal</b>\" con $CV = 40{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Retail · Productos",
  "enun": "Se midieron cuatro variables en $n=25$ productos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Precio (miles $)",
     25,
     "5",
     "80",
     "30",
     "15"
    ],
    [
     "Stock (unidades)",
     25,
     "10",
     "200",
     "80",
     "40"
    ],
    [
     "Ventas mensuales (unidades)",
     25,
     "5",
     "150",
     "50",
     "20"
    ],
    [
     "Devoluciones (unidades)",
     25,
     "0",
     "10",
     "2",
     "1,5"
    ]
   ],
   "N": 25
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Devoluciones (unidades)\".",
  "alts": [
   "$84{,}00\\%$",
   "$102{,}14\\%$",
   "$75{,}00\\%$",
   "$56{,}93\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{4}} = \\dfrac{1{,}50}{2{,}00}\\times 100\\% = 75{,}00\\%"
  ],
  "conc": "El CV de \"<b>Devoluciones (unidades)</b>\" es $75{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Retail · Productos",
  "enun": "Se midieron cuatro variables en $n=25$ productos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Precio (miles $)",
     25,
     "5",
     "80",
     "30",
     "15"
    ],
    [
     "Stock (unidades)",
     25,
     "10",
     "200",
     "80",
     "40"
    ],
    [
     "Ventas mensuales (unidades)",
     25,
     "5",
     "150",
     "50",
     "20"
    ],
    [
     "Devoluciones (unidades)",
     25,
     "0",
     "10",
     "2",
     "1,5"
    ]
   ],
   "N": 25
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Devoluciones (unidades)",
   "Stock (unidades)",
   "Ventas mensuales (unidades)",
   "Precio (miles $)"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{15{,}00}{30{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{40{,}00}{80{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{20{,}00}{50{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}50}{2{,}00}\\times 100\\% = 75{,}00\\%",
   "\\text{El menor CV es } 40{,}00\\%"
  ],
  "conc": "La más homogénea es \"<b>Ventas mensuales (unidades)</b>\" con $CV = 40{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Retail · Productos",
  "enun": "Se midieron cuatro variables en $n=25$ productos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Precio (miles $)",
     25,
     "5",
     "80",
     "30",
     "15"
    ],
    [
     "Stock (unidades)",
     25,
     "10",
     "200",
     "80",
     "40"
    ],
    [
     "Ventas mensuales (unidades)",
     25,
     "5",
     "150",
     "50",
     "20"
    ],
    [
     "Devoluciones (unidades)",
     25,
     "0",
     "10",
     "2",
     "1,5"
    ]
   ],
   "N": 25
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Precio (miles $)",
   "Devoluciones (unidades)",
   "Stock (unidades)",
   "Ventas mensuales (unidades)"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{15{,}00}{30{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{40{,}00}{80{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{20{,}00}{50{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}50}{2{,}00}\\times 100\\% = 75{,}00\\%",
   "\\text{El mayor CV es } 75{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Devoluciones (unidades)</b>\" con $CV = 75{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Manufactura · Planta",
  "enun": "Se midieron cuatro variables en $n=50$ piezas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Peso (gramos)",
     50,
     "95",
     "105",
     "100",
     "2"
    ],
    [
     "Tiempo de producción (min)",
     50,
     "3",
     "12",
     "7",
     "2,5"
    ],
    [
     "Número de defectos por lote",
     50,
     "0",
     "5",
     "1,5",
     "1,2"
    ],
    [
     "Temperatura del horno (°C)",
     50,
     "180",
     "220",
     "200",
     "5"
    ]
   ],
   "N": 50
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Peso (gramos)\".",
  "alts": [
   "$1{,}55\\%$",
   "$1{,}21\\%$",
   "$2{,}48\\%$",
   "$2{,}00\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{2{,}00}{100{,}00}\\times 100\\% = 2{,}00\\%"
  ],
  "conc": "El CV de \"<b>Peso (gramos)</b>\" es $2{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Manufactura · Planta",
  "enun": "Se midieron cuatro variables en $n=50$ piezas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Peso (gramos)",
     50,
     "95",
     "105",
     "100",
     "2"
    ],
    [
     "Tiempo de producción (min)",
     50,
     "3",
     "12",
     "7",
     "2,5"
    ],
    [
     "Número de defectos por lote",
     50,
     "0",
     "5",
     "1,5",
     "1,2"
    ],
    [
     "Temperatura del horno (°C)",
     50,
     "180",
     "220",
     "200",
     "5"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Peso (gramos)",
   "Temperatura del horno (°C)",
   "Tiempo de producción (min)",
   "Número de defectos por lote"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{2{,}00}{100{,}00}\\times 100\\% = 2{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{2{,}50}{7{,}00}\\times 100\\% = 35{,}71\\%",
   "CV_{\\text{3}} = \\dfrac{1{,}20}{1{,}50}\\times 100\\% = 80{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{5{,}00}{200{,}00}\\times 100\\% = 2{,}50\\%",
   "\\text{El menor CV es } 2{,}00\\%"
  ],
  "conc": "La más homogénea es \"<b>Peso (gramos)</b>\" con $CV = 2{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Manufactura · Planta",
  "enun": "Se midieron cuatro variables en $n=50$ piezas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Peso (gramos)",
     50,
     "95",
     "105",
     "100",
     "2"
    ],
    [
     "Tiempo de producción (min)",
     50,
     "3",
     "12",
     "7",
     "2,5"
    ],
    [
     "Número de defectos por lote",
     50,
     "0",
     "5",
     "1,5",
     "1,2"
    ],
    [
     "Temperatura del horno (°C)",
     50,
     "180",
     "220",
     "200",
     "5"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Número de defectos por lote",
   "Tiempo de producción (min)",
   "Temperatura del horno (°C)",
   "Peso (gramos)"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{2{,}00}{100{,}00}\\times 100\\% = 2{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{2{,}50}{7{,}00}\\times 100\\% = 35{,}71\\%",
   "CV_{\\text{3}} = \\dfrac{1{,}20}{1{,}50}\\times 100\\% = 80{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{5{,}00}{200{,}00}\\times 100\\% = 2{,}50\\%",
   "\\text{El mayor CV es } 80{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Número de defectos por lote</b>\" con $CV = 80{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Deporte · Club de fútbol",
  "enun": "Se midieron cuatro variables en $n=22$ jugadores. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Goles en la temporada",
     22,
     "0",
     "20",
     "6",
     "5"
    ],
    [
     "Edad (años)",
     22,
     "18",
     "35",
     "25",
     "4"
    ],
    [
     "Altura (cm)",
     22,
     "165",
     "195",
     "178",
     "7"
    ],
    [
     "Minutos jugados",
     22,
     "100",
     "3000",
     "1800",
     "700"
    ]
   ],
   "N": 22
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Edad (años)\".",
  "alts": [
   "$18{,}06\\%$",
   "$21{,}76\\%$",
   "$16{,}00\\%$",
   "$11{,}95\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{2}} = \\dfrac{4{,}00}{25{,}00}\\times 100\\% = 16{,}00\\%"
  ],
  "conc": "El CV de \"<b>Edad (años)</b>\" es $16{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Deporte · Club de fútbol",
  "enun": "Se midieron cuatro variables en $n=22$ jugadores. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Goles en la temporada",
     22,
     "0",
     "20",
     "6",
     "5"
    ],
    [
     "Edad (años)",
     22,
     "18",
     "35",
     "25",
     "4"
    ],
    [
     "Altura (cm)",
     22,
     "165",
     "195",
     "178",
     "7"
    ],
    [
     "Minutos jugados",
     22,
     "100",
     "3000",
     "1800",
     "700"
    ]
   ],
   "N": 22
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Altura (cm)",
   "Edad (años)",
   "Minutos jugados",
   "Goles en la temporada"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{5{,}00}{6{,}00}\\times 100\\% = 83{,}33\\%",
   "CV_{\\text{2}} = \\dfrac{4{,}00}{25{,}00}\\times 100\\% = 16{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{7{,}00}{178{,}00}\\times 100\\% = 3{,}93\\%",
   "CV_{\\text{4}} = \\dfrac{700{,}00}{1800{,}00}\\times 100\\% = 38{,}89\\%",
   "\\text{El menor CV es } 3{,}93\\%"
  ],
  "conc": "La más homogénea es \"<b>Altura (cm)</b>\" con $CV = 3{,}93\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Deporte · Club de fútbol",
  "enun": "Se midieron cuatro variables en $n=22$ jugadores. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Goles en la temporada",
     22,
     "0",
     "20",
     "6",
     "5"
    ],
    [
     "Edad (años)",
     22,
     "18",
     "35",
     "25",
     "4"
    ],
    [
     "Altura (cm)",
     22,
     "165",
     "195",
     "178",
     "7"
    ],
    [
     "Minutos jugados",
     22,
     "100",
     "3000",
     "1800",
     "700"
    ]
   ],
   "N": 22
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Goles en la temporada",
   "Edad (años)",
   "Altura (cm)",
   "Minutos jugados"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{5{,}00}{6{,}00}\\times 100\\% = 83{,}33\\%",
   "CV_{\\text{2}} = \\dfrac{4{,}00}{25{,}00}\\times 100\\% = 16{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{7{,}00}{178{,}00}\\times 100\\% = 3{,}93\\%",
   "CV_{\\text{4}} = \\dfrac{700{,}00}{1800{,}00}\\times 100\\% = 38{,}89\\%",
   "\\text{El mayor CV es } 83{,}33\\%"
  ],
  "conc": "La más heterogénea es \"<b>Goles en la temporada</b>\" con $CV = 83{,}33\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Salud · Hospital",
  "enun": "Se midieron cuatro variables en $n=35$ pacientes de urgencia. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Tiempo de espera (min)",
     35,
     "5",
     "90",
     "35",
     "20"
    ],
    [
     "Edad (años)",
     35,
     "1",
     "90",
     "45",
     "18"
    ],
    [
     "Número de exámenes solicitados",
     35,
     "1",
     "6",
     "3",
     "1"
    ],
    [
     "Presión arterial sistólica (mmHg)",
     35,
     "100",
     "160",
     "125",
     "10"
    ]
   ],
   "N": 35
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Número de exámenes solicitados\".",
  "alts": [
   "$21{,}12\\%$",
   "$29{,}26\\%$",
   "$41{,}47\\%$",
   "$33{,}33\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{3}} = \\dfrac{1{,}00}{3{,}00}\\times 100\\% = 33{,}33\\%"
  ],
  "conc": "El CV de \"<b>Número de exámenes solicitados</b>\" es $33{,}33\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Salud · Hospital",
  "enun": "Se midieron cuatro variables en $n=35$ pacientes de urgencia. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Tiempo de espera (min)",
     35,
     "5",
     "90",
     "35",
     "20"
    ],
    [
     "Edad (años)",
     35,
     "1",
     "90",
     "45",
     "18"
    ],
    [
     "Número de exámenes solicitados",
     35,
     "1",
     "6",
     "3",
     "1"
    ],
    [
     "Presión arterial sistólica (mmHg)",
     35,
     "100",
     "160",
     "125",
     "10"
    ]
   ],
   "N": 35
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Tiempo de espera (min)",
   "Edad (años)",
   "Presión arterial sistólica (mmHg)",
   "Número de exámenes solicitados"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{20{,}00}{35{,}00}\\times 100\\% = 57{,}14\\%",
   "CV_{\\text{2}} = \\dfrac{18{,}00}{45{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{1{,}00}{3{,}00}\\times 100\\% = 33{,}33\\%",
   "CV_{\\text{4}} = \\dfrac{10{,}00}{125{,}00}\\times 100\\% = 8{,}00\\%",
   "\\text{El menor CV es } 8{,}00\\%"
  ],
  "conc": "La más homogénea es \"<b>Presión arterial sistólica (mmHg)</b>\" con $CV = 8{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Salud · Hospital",
  "enun": "Se midieron cuatro variables en $n=35$ pacientes de urgencia. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Tiempo de espera (min)",
     35,
     "5",
     "90",
     "35",
     "20"
    ],
    [
     "Edad (años)",
     35,
     "1",
     "90",
     "45",
     "18"
    ],
    [
     "Número de exámenes solicitados",
     35,
     "1",
     "6",
     "3",
     "1"
    ],
    [
     "Presión arterial sistólica (mmHg)",
     35,
     "100",
     "160",
     "125",
     "10"
    ]
   ],
   "N": 35
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Número de exámenes solicitados",
   "Presión arterial sistólica (mmHg)",
   "Tiempo de espera (min)",
   "Edad (años)"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{20{,}00}{35{,}00}\\times 100\\% = 57{,}14\\%",
   "CV_{\\text{2}} = \\dfrac{18{,}00}{45{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{1{,}00}{3{,}00}\\times 100\\% = 33{,}33\\%",
   "CV_{\\text{4}} = \\dfrac{10{,}00}{125{,}00}\\times 100\\% = 8{,}00\\%",
   "\\text{El mayor CV es } 57{,}14\\%"
  ],
  "conc": "La más heterogénea es \"<b>Tiempo de espera (min)</b>\" con $CV = 57{,}14\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Transporte · Aerolínea",
  "enun": "Se midieron cuatro variables en $n=40$ vuelos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Retraso (min)",
     40,
     "0",
     "60",
     "12",
     "10"
    ],
    [
     "Número de pasajeros",
     40,
     "80",
     "220",
     "160",
     "30"
    ],
    [
     "Duración del vuelo (min)",
     40,
     "45",
     "300",
     "150",
     "60"
    ],
    [
     "Consumo de combustible (miles L)",
     40,
     "5",
     "25",
     "15",
     "4"
    ]
   ],
   "N": 40
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Consumo de combustible (miles L)\".",
  "alts": [
   "$26{,}67\\%$",
   "$20{,}20\\%$",
   "$29{,}87\\%$",
   "$36{,}41\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{4}} = \\dfrac{4{,}00}{15{,}00}\\times 100\\% = 26{,}67\\%"
  ],
  "conc": "El CV de \"<b>Consumo de combustible (miles L)</b>\" es $26{,}67\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Transporte · Aerolínea",
  "enun": "Se midieron cuatro variables en $n=40$ vuelos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Retraso (min)",
     40,
     "0",
     "60",
     "12",
     "10"
    ],
    [
     "Número de pasajeros",
     40,
     "80",
     "220",
     "160",
     "30"
    ],
    [
     "Duración del vuelo (min)",
     40,
     "45",
     "300",
     "150",
     "60"
    ],
    [
     "Consumo de combustible (miles L)",
     40,
     "5",
     "25",
     "15",
     "4"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Retraso (min)",
   "Duración del vuelo (min)",
   "Consumo de combustible (miles L)",
   "Número de pasajeros"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{10{,}00}{12{,}00}\\times 100\\% = 83{,}33\\%",
   "CV_{\\text{2}} = \\dfrac{30{,}00}{160{,}00}\\times 100\\% = 18{,}75\\%",
   "CV_{\\text{3}} = \\dfrac{60{,}00}{150{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{4{,}00}{15{,}00}\\times 100\\% = 26{,}67\\%",
   "\\text{El menor CV es } 18{,}75\\%"
  ],
  "conc": "La más homogénea es \"<b>Número de pasajeros</b>\" con $CV = 18{,}75\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Transporte · Aerolínea",
  "enun": "Se midieron cuatro variables en $n=40$ vuelos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Retraso (min)",
     40,
     "0",
     "60",
     "12",
     "10"
    ],
    [
     "Número de pasajeros",
     40,
     "80",
     "220",
     "160",
     "30"
    ],
    [
     "Duración del vuelo (min)",
     40,
     "45",
     "300",
     "150",
     "60"
    ],
    [
     "Consumo de combustible (miles L)",
     40,
     "5",
     "25",
     "15",
     "4"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Retraso (min)",
   "Número de pasajeros",
   "Duración del vuelo (min)",
   "Consumo de combustible (miles L)"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{10{,}00}{12{,}00}\\times 100\\% = 83{,}33\\%",
   "CV_{\\text{2}} = \\dfrac{30{,}00}{160{,}00}\\times 100\\% = 18{,}75\\%",
   "CV_{\\text{3}} = \\dfrac{60{,}00}{150{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{4{,}00}{15{,}00}\\times 100\\% = 26{,}67\\%",
   "\\text{El mayor CV es } 83{,}33\\%"
  ],
  "conc": "La más heterogénea es \"<b>Retraso (min)</b>\" con $CV = 83{,}33\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Call center · Operadores",
  "enun": "Se midieron cuatro variables en $n=28$ operadores. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de llamadas por turno",
     28,
     "20",
     "80",
     "50",
     "12"
    ],
    [
     "Tiempo promedio de llamada (min)",
     28,
     "2",
     "10",
     "5",
     "1,5"
    ],
    [
     "Antigüedad (meses)",
     28,
     "1",
     "48",
     "18",
     "10"
    ],
    [
     "Satisfacción del cliente (1-10)",
     28,
     "5",
     "9,5",
     "7,8",
     "0,8"
    ]
   ],
   "N": 28
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Número de llamadas por turno\".",
  "alts": [
   "$29{,}76\\%$",
   "$15{,}29\\%$",
   "$24{,}00\\%$",
   "$20{,}91\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{12{,}00}{50{,}00}\\times 100\\% = 24{,}00\\%"
  ],
  "conc": "El CV de \"<b>Número de llamadas por turno</b>\" es $24{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Call center · Operadores",
  "enun": "Se midieron cuatro variables en $n=28$ operadores. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de llamadas por turno",
     28,
     "20",
     "80",
     "50",
     "12"
    ],
    [
     "Tiempo promedio de llamada (min)",
     28,
     "2",
     "10",
     "5",
     "1,5"
    ],
    [
     "Antigüedad (meses)",
     28,
     "1",
     "48",
     "18",
     "10"
    ],
    [
     "Satisfacción del cliente (1-10)",
     28,
     "5",
     "9,5",
     "7,8",
     "0,8"
    ]
   ],
   "N": 28
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Número de llamadas por turno",
   "Tiempo promedio de llamada (min)",
   "Antigüedad (meses)",
   "Satisfacción del cliente (1-10)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{12{,}00}{50{,}00}\\times 100\\% = 24{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{1{,}50}{5{,}00}\\times 100\\% = 30{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{10{,}00}{18{,}00}\\times 100\\% = 55{,}56\\%",
   "CV_{\\text{4}} = \\dfrac{0{,}80}{7{,}80}\\times 100\\% = 10{,}26\\%",
   "\\text{El menor CV es } 10{,}26\\%"
  ],
  "conc": "La más homogénea es \"<b>Satisfacción del cliente (1-10)</b>\" con $CV = 10{,}26\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Call center · Operadores",
  "enun": "Se midieron cuatro variables en $n=28$ operadores. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de llamadas por turno",
     28,
     "20",
     "80",
     "50",
     "12"
    ],
    [
     "Tiempo promedio de llamada (min)",
     28,
     "2",
     "10",
     "5",
     "1,5"
    ],
    [
     "Antigüedad (meses)",
     28,
     "1",
     "48",
     "18",
     "10"
    ],
    [
     "Satisfacción del cliente (1-10)",
     28,
     "5",
     "9,5",
     "7,8",
     "0,8"
    ]
   ],
   "N": 28
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Número de llamadas por turno",
   "Antigüedad (meses)",
   "Satisfacción del cliente (1-10)",
   "Tiempo promedio de llamada (min)"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{12{,}00}{50{,}00}\\times 100\\% = 24{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{1{,}50}{5{,}00}\\times 100\\% = 30{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{10{,}00}{18{,}00}\\times 100\\% = 55{,}56\\%",
   "CV_{\\text{4}} = \\dfrac{0{,}80}{7{,}80}\\times 100\\% = 10{,}26\\%",
   "\\text{El mayor CV es } 55{,}56\\%"
  ],
  "conc": "La más heterogénea es \"<b>Antigüedad (meses)</b>\" con $CV = 55{,}56\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Educación · Colegio",
  "enun": "Se midieron cuatro variables en $n=24$ cursos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de alumnos por curso",
     24,
     "20",
     "40",
     "30",
     "5"
    ],
    [
     "Promedio de notas (1-7)",
     24,
     "4,5",
     "6,5",
     "5,5",
     "0,4"
    ],
    [
     "Inasistencias por semestre",
     24,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Edad promedio del curso (años)",
     24,
     "12",
     "18",
     "15",
     "1,5"
    ]
   ],
   "N": 24
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Promedio de notas (1-7)\".",
  "alts": [
   "$7{,}27\\%$",
   "$8{,}29\\%$",
   "$5{,}32\\%$",
   "$9{,}89\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{2}} = \\dfrac{0{,}40}{5{,}50}\\times 100\\% = 7{,}27\\%"
  ],
  "conc": "El CV de \"<b>Promedio de notas (1-7)</b>\" es $7{,}27\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Educación · Colegio",
  "enun": "Se midieron cuatro variables en $n=24$ cursos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de alumnos por curso",
     24,
     "20",
     "40",
     "30",
     "5"
    ],
    [
     "Promedio de notas (1-7)",
     24,
     "4,5",
     "6,5",
     "5,5",
     "0,4"
    ],
    [
     "Inasistencias por semestre",
     24,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Edad promedio del curso (años)",
     24,
     "12",
     "18",
     "15",
     "1,5"
    ]
   ],
   "N": 24
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Número de alumnos por curso",
   "Inasistencias por semestre",
   "Edad promedio del curso (años)",
   "Promedio de notas (1-7)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{5{,}00}{30{,}00}\\times 100\\% = 16{,}67\\%",
   "CV_{\\text{2}} = \\dfrac{0{,}40}{5{,}50}\\times 100\\% = 7{,}27\\%",
   "CV_{\\text{3}} = \\dfrac{4{,}00}{10{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}50}{15{,}00}\\times 100\\% = 10{,}00\\%",
   "\\text{El menor CV es } 7{,}27\\%"
  ],
  "conc": "La más homogénea es \"<b>Promedio de notas (1-7)</b>\" con $CV = 7{,}27\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Educación · Colegio",
  "enun": "Se midieron cuatro variables en $n=24$ cursos. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de alumnos por curso",
     24,
     "20",
     "40",
     "30",
     "5"
    ],
    [
     "Promedio de notas (1-7)",
     24,
     "4,5",
     "6,5",
     "5,5",
     "0,4"
    ],
    [
     "Inasistencias por semestre",
     24,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Edad promedio del curso (años)",
     24,
     "12",
     "18",
     "15",
     "1,5"
    ]
   ],
   "N": 24
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Inasistencias por semestre",
   "Promedio de notas (1-7)",
   "Edad promedio del curso (años)",
   "Número de alumnos por curso"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{5{,}00}{30{,}00}\\times 100\\% = 16{,}67\\%",
   "CV_{\\text{2}} = \\dfrac{0{,}40}{5{,}50}\\times 100\\% = 7{,}27\\%",
   "CV_{\\text{3}} = \\dfrac{4{,}00}{10{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}50}{15{,}00}\\times 100\\% = 10{,}00\\%",
   "\\text{El mayor CV es } 40{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Inasistencias por semestre</b>\" con $CV = 40{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Retail · Supermercado",
  "enun": "Se midieron cuatro variables en $n=18$ cajas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de clientes por hora",
     18,
     "10",
     "40",
     "25",
     "7"
    ],
    [
     "Tiempo promedio de atención (min)",
     18,
     "2",
     "6",
     "3,5",
     "0,8"
    ],
    [
     "Monto promedio de compra (miles $)",
     18,
     "5",
     "50",
     "20",
     "10"
    ],
    [
     "Errores de cobro por semana",
     18,
     "0",
     "5",
     "1",
     "1,2"
    ]
   ],
   "N": 18
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Monto promedio de compra (miles $)\".",
  "alts": [
   "$62{,}14\\%$",
   "$31{,}79\\%$",
   "$50{,}00\\%$",
   "$43{,}93\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{3}} = \\dfrac{10{,}00}{20{,}00}\\times 100\\% = 50{,}00\\%"
  ],
  "conc": "El CV de \"<b>Monto promedio de compra (miles $)</b>\" es $50{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Retail · Supermercado",
  "enun": "Se midieron cuatro variables en $n=18$ cajas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de clientes por hora",
     18,
     "10",
     "40",
     "25",
     "7"
    ],
    [
     "Tiempo promedio de atención (min)",
     18,
     "2",
     "6",
     "3,5",
     "0,8"
    ],
    [
     "Monto promedio de compra (miles $)",
     18,
     "5",
     "50",
     "20",
     "10"
    ],
    [
     "Errores de cobro por semana",
     18,
     "0",
     "5",
     "1",
     "1,2"
    ]
   ],
   "N": 18
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Monto promedio de compra (miles $)",
   "Tiempo promedio de atención (min)",
   "Número de clientes por hora",
   "Errores de cobro por semana"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{7{,}00}{25{,}00}\\times 100\\% = 28{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{0{,}80}{3{,}50}\\times 100\\% = 22{,}86\\%",
   "CV_{\\text{3}} = \\dfrac{10{,}00}{20{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}20}{1{,}00}\\times 100\\% = 120{,}00\\%",
   "\\text{El menor CV es } 22{,}86\\%"
  ],
  "conc": "La más homogénea es \"<b>Tiempo promedio de atención (min)</b>\" con $CV = 22{,}86\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Retail · Supermercado",
  "enun": "Se midieron cuatro variables en $n=18$ cajas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de clientes por hora",
     18,
     "10",
     "40",
     "25",
     "7"
    ],
    [
     "Tiempo promedio de atención (min)",
     18,
     "2",
     "6",
     "3,5",
     "0,8"
    ],
    [
     "Monto promedio de compra (miles $)",
     18,
     "5",
     "50",
     "20",
     "10"
    ],
    [
     "Errores de cobro por semana",
     18,
     "0",
     "5",
     "1",
     "1,2"
    ]
   ],
   "N": 18
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Número de clientes por hora",
   "Tiempo promedio de atención (min)",
   "Errores de cobro por semana",
   "Monto promedio de compra (miles $)"
  ],
  "correct": 2,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{7{,}00}{25{,}00}\\times 100\\% = 28{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{0{,}80}{3{,}50}\\times 100\\% = 22{,}86\\%",
   "CV_{\\text{3}} = \\dfrac{10{,}00}{20{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}20}{1{,}00}\\times 100\\% = 120{,}00\\%",
   "\\text{El mayor CV es } 120{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Errores de cobro por semana</b>\" con $CV = 120{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Seguros · Pólizas",
  "enun": "Se midieron cuatro variables en $n=45$ pólizas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Prima mensual (miles $)",
     45,
     "10",
     "100",
     "40",
     "20"
    ],
    [
     "Número de siniestros por año",
     45,
     "0",
     "5",
     "1",
     "1"
    ],
    [
     "Antigüedad del cliente (años)",
     45,
     "1",
     "20",
     "8",
     "5"
    ],
    [
     "Monto de cobertura (millones $)",
     45,
     "5",
     "100",
     "30",
     "18"
    ]
   ],
   "N": 45
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Monto de cobertura (millones $)\".",
  "alts": [
   "$81{,}74\\%$",
   "$67{,}20\\%$",
   "$45{,}53\\%$",
   "$60{,}00\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{4}} = \\dfrac{18{,}00}{30{,}00}\\times 100\\% = 60{,}00\\%"
  ],
  "conc": "El CV de \"<b>Monto de cobertura (millones $)</b>\" es $60{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Seguros · Pólizas",
  "enun": "Se midieron cuatro variables en $n=45$ pólizas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Prima mensual (miles $)",
     45,
     "10",
     "100",
     "40",
     "20"
    ],
    [
     "Número de siniestros por año",
     45,
     "0",
     "5",
     "1",
     "1"
    ],
    [
     "Antigüedad del cliente (años)",
     45,
     "1",
     "20",
     "8",
     "5"
    ],
    [
     "Monto de cobertura (millones $)",
     45,
     "5",
     "100",
     "30",
     "18"
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Prima mensual (miles $)",
   "Número de siniestros por año",
   "Monto de cobertura (millones $)",
   "Antigüedad del cliente (años)"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{20{,}00}{40{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{1{,}00}{1{,}00}\\times 100\\% = 100{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{5{,}00}{8{,}00}\\times 100\\% = 62{,}50\\%",
   "CV_{\\text{4}} = \\dfrac{18{,}00}{30{,}00}\\times 100\\% = 60{,}00\\%",
   "\\text{El menor CV es } 50{,}00\\%"
  ],
  "conc": "La más homogénea es \"<b>Prima mensual (miles $)</b>\" con $CV = 50{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Seguros · Pólizas",
  "enun": "Se midieron cuatro variables en $n=45$ pólizas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Prima mensual (miles $)",
     45,
     "10",
     "100",
     "40",
     "20"
    ],
    [
     "Número de siniestros por año",
     45,
     "0",
     "5",
     "1",
     "1"
    ],
    [
     "Antigüedad del cliente (años)",
     45,
     "1",
     "20",
     "8",
     "5"
    ],
    [
     "Monto de cobertura (millones $)",
     45,
     "5",
     "100",
     "30",
     "18"
    ]
   ],
   "N": 45
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Antigüedad del cliente (años)",
   "Número de siniestros por año",
   "Monto de cobertura (millones $)",
   "Prima mensual (miles $)"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{20{,}00}{40{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{1{,}00}{1{,}00}\\times 100\\% = 100{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{5{,}00}{8{,}00}\\times 100\\% = 62{,}50\\%",
   "CV_{\\text{4}} = \\dfrac{18{,}00}{30{,}00}\\times 100\\% = 60{,}00\\%",
   "\\text{El mayor CV es } 100{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Número de siniestros por año</b>\" con $CV = 100{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Gastronomía · Restaurante",
  "enun": "Se midieron cuatro variables en $n=20$ mesas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de comensales por mesa",
     20,
     "1",
     "8",
     "4",
     "1,5"
    ],
    [
     "Tiempo de permanencia (min)",
     20,
     "20",
     "120",
     "60",
     "25"
    ],
    [
     "Cuenta total (miles $)",
     20,
     "8",
     "80",
     "35",
     "15"
    ],
    [
     "Propina (%)",
     20,
     "0",
     "20",
     "10",
     "3"
    ]
   ],
   "N": 20
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Número de comensales por mesa\".",
  "alts": [
   "$37{,}50\\%$",
   "$23{,}93\\%$",
   "$32{,}79\\%$",
   "$46{,}50\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{1{,}50}{4{,}00}\\times 100\\% = 37{,}50\\%"
  ],
  "conc": "El CV de \"<b>Número de comensales por mesa</b>\" es $37{,}50\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Gastronomía · Restaurante",
  "enun": "Se midieron cuatro variables en $n=20$ mesas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de comensales por mesa",
     20,
     "1",
     "8",
     "4",
     "1,5"
    ],
    [
     "Tiempo de permanencia (min)",
     20,
     "20",
     "120",
     "60",
     "25"
    ],
    [
     "Cuenta total (miles $)",
     20,
     "8",
     "80",
     "35",
     "15"
    ],
    [
     "Propina (%)",
     20,
     "0",
     "20",
     "10",
     "3"
    ]
   ],
   "N": 20
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Cuenta total (miles $)",
   "Propina (%)",
   "Tiempo de permanencia (min)",
   "Número de comensales por mesa"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{1{,}50}{4{,}00}\\times 100\\% = 37{,}50\\%",
   "CV_{\\text{2}} = \\dfrac{25{,}00}{60{,}00}\\times 100\\% = 41{,}67\\%",
   "CV_{\\text{3}} = \\dfrac{15{,}00}{35{,}00}\\times 100\\% = 42{,}86\\%",
   "CV_{\\text{4}} = \\dfrac{3{,}00}{10{,}00}\\times 100\\% = 30{,}00\\%",
   "\\text{El menor CV es } 30{,}00\\%"
  ],
  "conc": "La más homogénea es \"<b>Propina (%)</b>\" con $CV = 30{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Gastronomía · Restaurante",
  "enun": "Se midieron cuatro variables en $n=20$ mesas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de comensales por mesa",
     20,
     "1",
     "8",
     "4",
     "1,5"
    ],
    [
     "Tiempo de permanencia (min)",
     20,
     "20",
     "120",
     "60",
     "25"
    ],
    [
     "Cuenta total (miles $)",
     20,
     "8",
     "80",
     "35",
     "15"
    ],
    [
     "Propina (%)",
     20,
     "0",
     "20",
     "10",
     "3"
    ]
   ],
   "N": 20
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Número de comensales por mesa",
   "Tiempo de permanencia (min)",
   "Propina (%)",
   "Cuenta total (miles $)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{1{,}50}{4{,}00}\\times 100\\% = 37{,}50\\%",
   "CV_{\\text{2}} = \\dfrac{25{,}00}{60{,}00}\\times 100\\% = 41{,}67\\%",
   "CV_{\\text{3}} = \\dfrac{15{,}00}{35{,}00}\\times 100\\% = 42{,}86\\%",
   "CV_{\\text{4}} = \\dfrac{3{,}00}{10{,}00}\\times 100\\% = 30{,}00\\%",
   "\\text{El mayor CV es } 42{,}86\\%"
  ],
  "conc": "La más heterogénea es \"<b>Cuenta total (miles $)</b>\" con $CV = 42{,}86\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Deporte · Gimnasio",
  "enun": "Se midieron cuatro variables en $n=32$ socios. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Edad (años)",
     32,
     "16",
     "65",
     "32",
     "12"
    ],
    [
     "Número de visitas al mes",
     32,
     "1",
     "30",
     "12",
     "6"
    ],
    [
     "Peso en press banca (kg)",
     32,
     "20",
     "120",
     "60",
     "20"
    ],
    [
     "Antigüedad como socio (meses)",
     32,
     "1",
     "60",
     "18",
     "14"
    ]
   ],
   "N": 32
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Número de visitas al mes\".",
  "alts": [
   "$37{,}79\\%$",
   "$56{,}14\\%$",
   "$68{,}00\\%$",
   "$50{,}00\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{2}} = \\dfrac{6{,}00}{12{,}00}\\times 100\\% = 50{,}00\\%"
  ],
  "conc": "El CV de \"<b>Número de visitas al mes</b>\" es $50{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Deporte · Gimnasio",
  "enun": "Se midieron cuatro variables en $n=32$ socios. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Edad (años)",
     32,
     "16",
     "65",
     "32",
     "12"
    ],
    [
     "Número de visitas al mes",
     32,
     "1",
     "30",
     "12",
     "6"
    ],
    [
     "Peso en press banca (kg)",
     32,
     "20",
     "120",
     "60",
     "20"
    ],
    [
     "Antigüedad como socio (meses)",
     32,
     "1",
     "60",
     "18",
     "14"
    ]
   ],
   "N": 32
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Número de visitas al mes",
   "Edad (años)",
   "Antigüedad como socio (meses)",
   "Peso en press banca (kg)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{12{,}00}{32{,}00}\\times 100\\% = 37{,}50\\%",
   "CV_{\\text{2}} = \\dfrac{6{,}00}{12{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{20{,}00}{60{,}00}\\times 100\\% = 33{,}33\\%",
   "CV_{\\text{4}} = \\dfrac{14{,}00}{18{,}00}\\times 100\\% = 77{,}78\\%",
   "\\text{El menor CV es } 33{,}33\\%"
  ],
  "conc": "La más homogénea es \"<b>Peso en press banca (kg)</b>\" con $CV = 33{,}33\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Deporte · Gimnasio",
  "enun": "Se midieron cuatro variables en $n=32$ socios. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Edad (años)",
     32,
     "16",
     "65",
     "32",
     "12"
    ],
    [
     "Número de visitas al mes",
     32,
     "1",
     "30",
     "12",
     "6"
    ],
    [
     "Peso en press banca (kg)",
     32,
     "20",
     "120",
     "60",
     "20"
    ],
    [
     "Antigüedad como socio (meses)",
     32,
     "1",
     "60",
     "18",
     "14"
    ]
   ],
   "N": 32
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Antigüedad como socio (meses)",
   "Peso en press banca (kg)",
   "Número de visitas al mes",
   "Edad (años)"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{12{,}00}{32{,}00}\\times 100\\% = 37{,}50\\%",
   "CV_{\\text{2}} = \\dfrac{6{,}00}{12{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{20{,}00}{60{,}00}\\times 100\\% = 33{,}33\\%",
   "CV_{\\text{4}} = \\dfrac{14{,}00}{18{,}00}\\times 100\\% = 77{,}78\\%",
   "\\text{El mayor CV es } 77{,}78\\%"
  ],
  "conc": "La más heterogénea es \"<b>Antigüedad como socio (meses)</b>\" con $CV = 77{,}78\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Manufactura · Fábrica textil",
  "enun": "Se midieron cuatro variables en $n=27$ lotes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de prendas por lote",
     27,
     "50",
     "500",
     "250",
     "90"
    ],
    [
     "Tiempo de confección (horas)",
     27,
     "10",
     "80",
     "40",
     "15"
    ],
    [
     "Número de defectos por lote",
     27,
     "0",
     "10",
     "3",
     "2"
    ],
    [
     "Costo por lote (miles $)",
     27,
     "200",
     "2000",
     "900",
     "400"
    ]
   ],
   "N": 27
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Número de defectos por lote\".",
  "alts": [
   "$66{,}67\\%$",
   "$58{,}60\\%$",
   "$42{,}46\\%$",
   "$82{,}81\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{3}} = \\dfrac{2{,}00}{3{,}00}\\times 100\\% = 66{,}67\\%"
  ],
  "conc": "El CV de \"<b>Número de defectos por lote</b>\" es $66{,}67\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Manufactura · Fábrica textil",
  "enun": "Se midieron cuatro variables en $n=27$ lotes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de prendas por lote",
     27,
     "50",
     "500",
     "250",
     "90"
    ],
    [
     "Tiempo de confección (horas)",
     27,
     "10",
     "80",
     "40",
     "15"
    ],
    [
     "Número de defectos por lote",
     27,
     "0",
     "10",
     "3",
     "2"
    ],
    [
     "Costo por lote (miles $)",
     27,
     "200",
     "2000",
     "900",
     "400"
    ]
   ],
   "N": 27
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Número de defectos por lote",
   "Costo por lote (miles $)",
   "Tiempo de confección (horas)",
   "Número de prendas por lote"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{90{,}00}{250{,}00}\\times 100\\% = 36{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{15{,}00}{40{,}00}\\times 100\\% = 37{,}50\\%",
   "CV_{\\text{3}} = \\dfrac{2{,}00}{3{,}00}\\times 100\\% = 66{,}67\\%",
   "CV_{\\text{4}} = \\dfrac{400{,}00}{900{,}00}\\times 100\\% = 44{,}44\\%",
   "\\text{El menor CV es } 36{,}00\\%"
  ],
  "conc": "La más homogénea es \"<b>Número de prendas por lote</b>\" con $CV = 36{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Manufactura · Fábrica textil",
  "enun": "Se midieron cuatro variables en $n=27$ lotes. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de prendas por lote",
     27,
     "50",
     "500",
     "250",
     "90"
    ],
    [
     "Tiempo de confección (horas)",
     27,
     "10",
     "80",
     "40",
     "15"
    ],
    [
     "Número de defectos por lote",
     27,
     "0",
     "10",
     "3",
     "2"
    ],
    [
     "Costo por lote (miles $)",
     27,
     "200",
     "2000",
     "900",
     "400"
    ]
   ],
   "N": 27
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Número de defectos por lote",
   "Tiempo de confección (horas)",
   "Número de prendas por lote",
   "Costo por lote (miles $)"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{90{,}00}{250{,}00}\\times 100\\% = 36{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{15{,}00}{40{,}00}\\times 100\\% = 37{,}50\\%",
   "CV_{\\text{3}} = \\dfrac{2{,}00}{3{,}00}\\times 100\\% = 66{,}67\\%",
   "CV_{\\text{4}} = \\dfrac{400{,}00}{900{,}00}\\times 100\\% = 44{,}44\\%",
   "\\text{El mayor CV es } 66{,}67\\%"
  ],
  "conc": "La más heterogénea es \"<b>Número de defectos por lote</b>\" con $CV = 66{,}67\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Gobierno · Municipalidad",
  "enun": "Se midieron cuatro variables en $n=24$ barrios. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de habitantes (miles)",
     24,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Número de reclamos mensuales",
     24,
     "0",
     "15",
     "5",
     "3"
    ],
    [
     "Ingreso promedio (miles $)",
     24,
     "300",
     "1500",
     "700",
     "250"
    ],
    [
     "Superficie (hectáreas)",
     24,
     "10",
     "100",
     "50",
     "20"
    ]
   ],
   "N": 24
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Superficie (hectáreas)\".",
  "alts": [
   "$30{,}33\\%$",
   "$44{,}80\\%$",
   "$54{,}54\\%$",
   "$40{,}00\\%$"
  ],
  "correct": 3,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{4}} = \\dfrac{20{,}00}{50{,}00}\\times 100\\% = 40{,}00\\%"
  ],
  "conc": "El CV de \"<b>Superficie (hectáreas)</b>\" es $40{,}00\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Gobierno · Municipalidad",
  "enun": "Se midieron cuatro variables en $n=24$ barrios. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de habitantes (miles)",
     24,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Número de reclamos mensuales",
     24,
     "0",
     "15",
     "5",
     "3"
    ],
    [
     "Ingreso promedio (miles $)",
     24,
     "300",
     "1500",
     "700",
     "250"
    ],
    [
     "Superficie (hectáreas)",
     24,
     "10",
     "100",
     "50",
     "20"
    ]
   ],
   "N": 24
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Número de reclamos mensuales",
   "Superficie (hectáreas)",
   "Número de habitantes (miles)",
   "Ingreso promedio (miles $)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{4{,}00}{10{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{3{,}00}{5{,}00}\\times 100\\% = 60{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{250{,}00}{700{,}00}\\times 100\\% = 35{,}71\\%",
   "CV_{\\text{4}} = \\dfrac{20{,}00}{50{,}00}\\times 100\\% = 40{,}00\\%",
   "\\text{El menor CV es } 35{,}71\\%"
  ],
  "conc": "La más homogénea es \"<b>Ingreso promedio (miles $)</b>\" con $CV = 35{,}71\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Gobierno · Municipalidad",
  "enun": "Se midieron cuatro variables en $n=24$ barrios. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de habitantes (miles)",
     24,
     "2",
     "20",
     "10",
     "4"
    ],
    [
     "Número de reclamos mensuales",
     24,
     "0",
     "15",
     "5",
     "3"
    ],
    [
     "Ingreso promedio (miles $)",
     24,
     "300",
     "1500",
     "700",
     "250"
    ],
    [
     "Superficie (hectáreas)",
     24,
     "10",
     "100",
     "50",
     "20"
    ]
   ],
   "N": 24
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Superficie (hectáreas)",
   "Número de habitantes (miles)",
   "Ingreso promedio (miles $)",
   "Número de reclamos mensuales"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{4{,}00}{10{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{3{,}00}{5{,}00}\\times 100\\% = 60{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{250{,}00}{700{,}00}\\times 100\\% = 35{,}71\\%",
   "CV_{\\text{4}} = \\dfrac{20{,}00}{50{,}00}\\times 100\\% = 40{,}00\\%",
   "\\text{El mayor CV es } 60{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Número de reclamos mensuales</b>\" con $CV = 60{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Veterinaria · Clínica",
  "enun": "Se midieron cuatro variables en $n=30$ mascotas atendidas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Edad (años)",
     30,
     "0,5",
     "15",
     "6",
     "3"
    ],
    [
     "Peso (kg)",
     30,
     "1",
     "40",
     "15",
     "9"
    ],
    [
     "Número de consultas al año",
     30,
     "1",
     "8",
     "3",
     "1,5"
    ],
    [
     "Costo total anual (miles $)",
     30,
     "20",
     "300",
     "120",
     "60"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Edad (años)\".",
  "alts": [
   "$50{,}00\\%$",
   "$43{,}79\\%$",
   "$62{,}00\\%$",
   "$31{,}93\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{3{,}00}{6{,}00}\\times 100\\% = 50{,}00\\%"
  ],
  "conc": "El CV de \"<b>Edad (años)</b>\" es $50{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Veterinaria · Clínica",
  "enun": "Se midieron cuatro variables en $n=30$ mascotas atendidas. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Edad (años)",
     30,
     "0,5",
     "15",
     "6",
     "3"
    ],
    [
     "Peso (kg)",
     30,
     "1",
     "40",
     "15",
     "9"
    ],
    [
     "Número de consultas al año",
     30,
     "1",
     "8",
     "3",
     "1,5"
    ],
    [
     "Costo total anual (miles $)",
     30,
     "20",
     "300",
     "120",
     "60"
    ]
   ],
   "N": 30
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Edad (años)",
   "Número de consultas al año",
   "Costo total anual (miles $)",
   "Peso (kg)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{3{,}00}{6{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{9{,}00}{15{,}00}\\times 100\\% = 60{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{1{,}50}{3{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{60{,}00}{120{,}00}\\times 100\\% = 50{,}00\\%",
   "\\text{El mayor CV es } 60{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Peso (kg)</b>\" con $CV = 60{,}00\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Inmobiliaria · Propiedades",
  "enun": "Se midieron cuatro variables en $n=35$ propiedades. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Precio (millones $)",
     35,
     "50",
     "400",
     "150",
     "60"
    ],
    [
     "Superficie (m²)",
     35,
     "40",
     "250",
     "110",
     "40"
    ],
    [
     "Número de dormitorios",
     35,
     "1",
     "5",
     "3",
     "0,9"
    ],
    [
     "Días en el mercado",
     35,
     "5",
     "180",
     "60",
     "35"
    ]
   ],
   "N": 35
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Superficie (m²)\".",
  "alts": [
   "$45{,}23\\%$",
   "$36{,}36\\%$",
   "$31{,}93\\%$",
   "$23{,}06\\%$"
  ],
  "correct": 1,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{2}} = \\dfrac{40{,}00}{110{,}00}\\times 100\\% = 36{,}36\\%"
  ],
  "conc": "El CV de \"<b>Superficie (m²)</b>\" es $36{,}36\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Inmobiliaria · Propiedades",
  "enun": "Se midieron cuatro variables en $n=35$ propiedades. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Precio (millones $)",
     35,
     "50",
     "400",
     "150",
     "60"
    ],
    [
     "Superficie (m²)",
     35,
     "40",
     "250",
     "110",
     "40"
    ],
    [
     "Número de dormitorios",
     35,
     "1",
     "5",
     "3",
     "0,9"
    ],
    [
     "Días en el mercado",
     35,
     "5",
     "180",
     "60",
     "35"
    ]
   ],
   "N": 35
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Precio (millones $)",
   "Número de dormitorios",
   "Días en el mercado",
   "Superficie (m²)"
  ],
  "correct": 1,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{60{,}00}{150{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{40{,}00}{110{,}00}\\times 100\\% = 36{,}36\\%",
   "CV_{\\text{3}} = \\dfrac{0{,}90}{3{,}00}\\times 100\\% = 30{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{35{,}00}{60{,}00}\\times 100\\% = 58{,}33\\%",
   "\\text{El menor CV es } 30{,}00\\%"
  ],
  "conc": "La más homogénea es \"<b>Número de dormitorios</b>\" con $CV = 30{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Inmobiliaria · Propiedades",
  "enun": "Se midieron cuatro variables en $n=35$ propiedades. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Precio (millones $)",
     35,
     "50",
     "400",
     "150",
     "60"
    ],
    [
     "Superficie (m²)",
     35,
     "40",
     "250",
     "110",
     "40"
    ],
    [
     "Número de dormitorios",
     35,
     "1",
     "5",
     "3",
     "0,9"
    ],
    [
     "Días en el mercado",
     35,
     "5",
     "180",
     "60",
     "35"
    ]
   ],
   "N": 35
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Número de dormitorios",
   "Superficie (m²)",
   "Precio (millones $)",
   "Días en el mercado"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{60{,}00}{150{,}00}\\times 100\\% = 40{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{40{,}00}{110{,}00}\\times 100\\% = 36{,}36\\%",
   "CV_{\\text{3}} = \\dfrac{0{,}90}{3{,}00}\\times 100\\% = 30{,}00\\%",
   "CV_{\\text{4}} = \\dfrac{35{,}00}{60{,}00}\\times 100\\% = 58{,}33\\%",
   "\\text{El mayor CV es } 58{,}33\\%"
  ],
  "conc": "La más heterogénea es \"<b>Días en el mercado</b>\" con $CV = 58{,}33\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Transporte · Buses",
  "enun": "Se midieron cuatro variables en $n=22$ buses. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Antigüedad (años)",
     22,
     "1",
     "15",
     "7",
     "4"
    ],
    [
     "Número de pasajeros por viaje",
     22,
     "10",
     "60",
     "35",
     "12"
    ],
    [
     "Consumo de combustible (L/100km)",
     22,
     "25",
     "45",
     "33",
     "5"
    ],
    [
     "Número de mantenciones al año",
     22,
     "1",
     "8",
     "4",
     "1,8"
    ]
   ],
   "N": 22
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Consumo de combustible (L/100km)\".",
  "alts": [
   "$20{,}75\\%$",
   "$11{,}45\\%$",
   "$15{,}15\\%$",
   "$16{,}97\\%$"
  ],
  "correct": 2,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{3}} = \\dfrac{5{,}00}{33{,}00}\\times 100\\% = 15{,}15\\%"
  ],
  "conc": "El CV de \"<b>Consumo de combustible (L/100km)</b>\" es $15{,}15\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Transporte · Buses",
  "enun": "Se midieron cuatro variables en $n=22$ buses. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Antigüedad (años)",
     22,
     "1",
     "15",
     "7",
     "4"
    ],
    [
     "Número de pasajeros por viaje",
     22,
     "10",
     "60",
     "35",
     "12"
    ],
    [
     "Consumo de combustible (L/100km)",
     22,
     "25",
     "45",
     "33",
     "5"
    ],
    [
     "Número de mantenciones al año",
     22,
     "1",
     "8",
     "4",
     "1,8"
    ]
   ],
   "N": 22
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Consumo de combustible (L/100km)",
   "Número de pasajeros por viaje",
   "Antigüedad (años)",
   "Número de mantenciones al año"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{4{,}00}{7{,}00}\\times 100\\% = 57{,}14\\%",
   "CV_{\\text{2}} = \\dfrac{12{,}00}{35{,}00}\\times 100\\% = 34{,}29\\%",
   "CV_{\\text{3}} = \\dfrac{5{,}00}{33{,}00}\\times 100\\% = 15{,}15\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}80}{4{,}00}\\times 100\\% = 45{,}00\\%",
   "\\text{El menor CV es } 15{,}15\\%"
  ],
  "conc": "La más homogénea es \"<b>Consumo de combustible (L/100km)</b>\" con $CV = 15{,}15\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Transporte · Buses",
  "enun": "Se midieron cuatro variables en $n=22$ buses. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Antigüedad (años)",
     22,
     "1",
     "15",
     "7",
     "4"
    ],
    [
     "Número de pasajeros por viaje",
     22,
     "10",
     "60",
     "35",
     "12"
    ],
    [
     "Consumo de combustible (L/100km)",
     22,
     "25",
     "45",
     "33",
     "5"
    ],
    [
     "Número de mantenciones al año",
     22,
     "1",
     "8",
     "4",
     "1,8"
    ]
   ],
   "N": 22
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Antigüedad (años)",
   "Consumo de combustible (L/100km)",
   "Número de mantenciones al año",
   "Número de pasajeros por viaje"
  ],
  "correct": 0,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{4{,}00}{7{,}00}\\times 100\\% = 57{,}14\\%",
   "CV_{\\text{2}} = \\dfrac{12{,}00}{35{,}00}\\times 100\\% = 34{,}29\\%",
   "CV_{\\text{3}} = \\dfrac{5{,}00}{33{,}00}\\times 100\\% = 15{,}15\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}80}{4{,}00}\\times 100\\% = 45{,}00\\%",
   "\\text{El mayor CV es } 57{,}14\\%"
  ],
  "conc": "La más heterogénea es \"<b>Antigüedad (años)</b>\" con $CV = 57{,}14\\%$."
 },
 {
  "tipo": "CV de una variable",
  "ctx": "Educación · Universidad",
  "enun": "Se midieron cuatro variables en $n=15$ carreras. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de estudiantes matriculados",
     15,
     "50",
     "400",
     "180",
     "90"
    ],
    [
     "Duración de la carrera (semestres)",
     15,
     "8",
     "14",
     "10",
     "1,5"
    ],
    [
     "Tasa de titulación (%)",
     15,
     "40",
     "90",
     "65",
     "12"
    ],
    [
     "Arancel anual (millones $)",
     15,
     "2",
     "8",
     "4,5",
     "1,5"
    ]
   ],
   "N": 15
  },
  "ask": "Calcule el coeficiente de variación de la variable \"Arancel anual (millones $)\".",
  "alts": [
   "$33{,}33\\%$",
   "$29{,}12\\%$",
   "$41{,}33\\%$",
   "$21{,}26\\%$"
  ],
  "correct": 0,
  "pautaHead": "CV=\\dfrac{s}{\\bar{x}}\\times 100\\%.\\ \\text{Mín y Máx no se usan.}",
  "pautaSteps": [
   "CV_{\\text{4}} = \\dfrac{1{,}50}{4{,}50}\\times 100\\% = 33{,}33\\%"
  ],
  "conc": "El CV de \"<b>Arancel anual (millones $)</b>\" es $33{,}33\\%$."
 },
 {
  "tipo": "Variable más homogénea",
  "ctx": "Educación · Universidad",
  "enun": "Se midieron cuatro variables en $n=15$ carreras. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de estudiantes matriculados",
     15,
     "50",
     "400",
     "180",
     "90"
    ],
    [
     "Duración de la carrera (semestres)",
     15,
     "8",
     "14",
     "10",
     "1,5"
    ],
    [
     "Tasa de titulación (%)",
     15,
     "40",
     "90",
     "65",
     "12"
    ],
    [
     "Arancel anual (millones $)",
     15,
     "2",
     "8",
     "4,5",
     "1,5"
    ]
   ],
   "N": 15
  },
  "ask": "¿Cuál variable es la más homogénea? (menor coeficiente de variación)",
  "alts": [
   "Número de estudiantes matriculados",
   "Arancel anual (millones $)",
   "Tasa de titulación (%)",
   "Duración de la carrera (semestres)"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{90{,}00}{180{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{1{,}50}{10{,}00}\\times 100\\% = 15{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{12{,}00}{65{,}00}\\times 100\\% = 18{,}46\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}50}{4{,}50}\\times 100\\% = 33{,}33\\%",
   "\\text{El menor CV es } 15{,}00\\%"
  ],
  "conc": "La más homogénea es \"<b>Duración de la carrera (semestres)</b>\" con $CV = 15{,}00\\%$."
 },
 {
  "tipo": "Variable más heterogénea",
  "ctx": "Educación · Universidad",
  "enun": "Se midieron cuatro variables en $n=15$ carreras. La tabla resume los estadísticos (contiene datos que no se necesitan; no compare desviaciones estándar directamente porque las unidades difieren):",
  "table": {
   "head": [
    "Variable",
    "$n$",
    "Mín",
    "Máx",
    "$\\bar{x}$",
    "$s$"
   ],
   "rows": [
    [
     "Número de estudiantes matriculados",
     15,
     "50",
     "400",
     "180",
     "90"
    ],
    [
     "Duración de la carrera (semestres)",
     15,
     "8",
     "14",
     "10",
     "1,5"
    ],
    [
     "Tasa de titulación (%)",
     15,
     "40",
     "90",
     "65",
     "12"
    ],
    [
     "Arancel anual (millones $)",
     15,
     "2",
     "8",
     "4,5",
     "1,5"
    ]
   ],
   "N": 15
  },
  "ask": "¿Cuál variable es la más heterogénea? (mayor coeficiente de variación)",
  "alts": [
   "Tasa de titulación (%)",
   "Duración de la carrera (semestres)",
   "Arancel anual (millones $)",
   "Número de estudiantes matriculados"
  ],
  "correct": 3,
  "pautaHead": "\\text{Se compara con } CV=\\dfrac{s}{\\bar{x}}\\times 100\\%,\\ \\text{no con } s.",
  "pautaSteps": [
   "CV_{\\text{1}} = \\dfrac{90{,}00}{180{,}00}\\times 100\\% = 50{,}00\\%",
   "CV_{\\text{2}} = \\dfrac{1{,}50}{10{,}00}\\times 100\\% = 15{,}00\\%",
   "CV_{\\text{3}} = \\dfrac{12{,}00}{65{,}00}\\times 100\\% = 18{,}46\\%",
   "CV_{\\text{4}} = \\dfrac{1{,}50}{4{,}50}\\times 100\\% = 33{,}33\\%",
   "\\text{El mayor CV es } 50{,}00\\%"
  ],
  "conc": "La más heterogénea es \"<b>Número de estudiantes matriculados</b>\" con $CV = 50{,}00\\%$."
 }
];
