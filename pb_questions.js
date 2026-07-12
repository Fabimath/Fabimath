// Banco de 140 ejercicios de Percentiles y Boxplot - Datos Cuantitativos Discretos (guia oficial Fabimath)
// Parte I (60): interpretacion de percentiles, cuartiles y deciles + porcentajes y conteos
// Parte II (80): lectura de diagramas de caja, afirmaciones V/F con justificacion
const PB_QUESTIONS = [
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Laboral · Sueldos",
  "enun": "Sobre $n=200$ empleados se sabe que $P_{80} = $ \\$850.000.",
  "ask": "¿Cuál es la interpretación correcta de $P_{80}$?",
  "alts": [
   "El sueldo promedio de los empleados es \\$850.000.",
   "El 80% de los empleados gana más de \\$850.000.",
   "El 20% de los empleados gana \\$850.000 o menos.",
   "El 80% de los empleados gana \\$850.000 o menos."
  ],
  "correct": 3,
  "pautaHead": "\\text{El percentil } P_{80} \\text{ acumula el } 80\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "P_{80} = \\text{valor bajo el cual está el } 80\\% \\text{ de las observaciones}",
   "\\text{El } 20\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 80% de los empleados gana \\$850.000 o menos.</b>"
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Laboral · Sueldos",
  "enun": "Sobre $n=200$ empleados se sabe que $P_{80} = $ \\$850.000.",
  "ask": "¿Qué porcentaje de empleados gana más de \\$850.000?",
  "alts": [
   "$20\\%$",
   "$30\\%$",
   "$25\\%$",
   "$50\\%$"
  ],
  "correct": 0,
  "pautaHead": "P_{80}\\text{ deja el } 80\\%\\text{ abajo y el } 20\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } P_{80}: 100\\% - 80\\% = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Laboral · Sueldos",
  "enun": "Sobre $n=200$ empleados se sabe que $P_{80} = $ \\$850.000.",
  "ask": "¿Cuántos empleados ganan \\$850.000 o menos?",
  "alts": [
   "$136$",
   "$84$",
   "$160$",
   "$210$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=200.",
  "pautaSteps": [
   "0{,}80\\times 200 = 160"
  ],
  "conc": "La cantidad pedida es <b>160</b> empleados."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Logística · Delivery",
  "enun": "Sobre $n=150$ entregas se sabe que $Q_1 = $ 18 minutos.",
  "ask": "¿Cuál es la interpretación correcta de $Q_1$?",
  "alts": [
   "El 75% de los entregas tardó 18 minutos o menos.",
   "El tiempo promedio de entrega es 18 minutos.",
   "El 25% de los entregas tardó más de 18 minutos.",
   "El 25% de los entregas tardó 18 minutos o menos."
  ],
  "correct": 3,
  "pautaHead": "\\text{El percentil } Q_1 \\text{ acumula el } 25\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "Q_1 = \\text{valor bajo el cual está el } 25\\% \\text{ de las observaciones}",
   "\\text{El } 75\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 25% de los entregas tardó 18 minutos o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Logística · Delivery",
  "enun": "Sobre $n=150$ entregas se sabe que $Q_1 = $ 18 minutos.",
  "ask": "¿Cuántas entregas tardaron 18 minutos o menos?",
  "alts": [
   "$38$",
   "$51$",
   "$28$",
   "$17$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=150.",
  "pautaSteps": [
   "0{,}25\\times 150 = 37{,}5 \\approx 38"
  ],
  "conc": "La cantidad pedida es <b>38</b> entregas."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Logística · Delivery",
  "enun": "Sobre $n=150$ entregas se sabe que $Q_1 = $ 18 minutos.",
  "ask": "¿Qué porcentaje de entregas tardó más de 18 minutos?",
  "alts": [
   "$85\\%$",
   "$75\\%$",
   "$80\\%$",
   "$38\\%$"
  ],
  "correct": 1,
  "pautaHead": "Q_1\\text{ deja el } 25\\%\\text{ abajo y el } 75\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } Q_1: 100\\% - 25\\% = 75\\%"
  ],
  "conc": "El porcentaje pedido es <b>75%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Educación · Admisión",
  "enun": "Sobre $n=500$ postulantes se sabe que $P_{90} = $ 720 puntos.",
  "ask": "¿Cuál es la interpretación correcta de $P_{90}$?",
  "alts": [
   "El 10% de los postulantes obtuvo 720 puntos o menos.",
   "El 90% de los postulantes obtuvo más de 720 puntos.",
   "El puntaje promedio de los postulantes es 720.",
   "El 90% de los postulantes obtuvo 720 puntos o menos."
  ],
  "correct": 3,
  "pautaHead": "\\text{El percentil } P_{90} \\text{ acumula el } 90\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "P_{90} = \\text{valor bajo el cual está el } 90\\% \\text{ de las observaciones}",
   "\\text{El } 10\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 90% de los postulantes obtuvo 720 puntos o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Educación · Admisión",
  "enun": "Sobre $n=500$ postulantes se sabe que $P_{90} = $ 720 puntos.",
  "ask": "¿Cuántos postulantes obtuvieron un puntaje inferior a 720?",
  "alts": [
   "$518$",
   "$312$",
   "$450$",
   "$658$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=500.",
  "pautaSteps": [
   "0{,}90\\times 500 = 450"
  ],
  "conc": "La cantidad pedida es <b>450</b> postulantes."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Educación · Admisión",
  "enun": "Sobre $n=500$ postulantes se sabe que $P_{90} = $ 720 puntos.",
  "ask": "¿Qué porcentaje obtuvo 720 puntos o más?",
  "alts": [
   "$75\\%$",
   "$50\\%$",
   "$10\\%$",
   "$5\\%$"
  ],
  "correct": 2,
  "pautaHead": "P_{90}\\text{ deja el } 90\\%\\text{ abajo y el } 10\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } P_{90}: 100\\% - 90\\% = 10\\%"
  ],
  "conc": "El porcentaje pedido es <b>10%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Salud · Neonatología",
  "enun": "Sobre $n=120$ recién nacidos se sabe que $Q_3 = $ 3.400 gramos.",
  "ask": "¿Cuál es la interpretación correcta de $Q_3$?",
  "alts": [
   "El 25% de los recién nacidos pesó 3.400 gramos o menos.",
   "El 75% de los recién nacidos pesó 3.400 gramos o menos.",
   "El peso promedio al nacer es 3.400 gramos.",
   "El 75% de los recién nacidos pesó más de 3.400 gramos."
  ],
  "correct": 1,
  "pautaHead": "\\text{El percentil } Q_3 \\text{ acumula el } 75\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "Q_3 = \\text{valor bajo el cual está el } 75\\% \\text{ de las observaciones}",
   "\\text{El } 25\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 75% de los recién nacidos pesó 3.400 gramos o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Salud · Neonatología",
  "enun": "Sobre $n=120$ recién nacidos se sabe que $Q_3 = $ 3.400 gramos.",
  "ask": "¿Cuántos recién nacidos pesaron 3.400 gramos o menos?",
  "alts": [
   "$90$",
   "$75$",
   "$121$",
   "$48$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=120.",
  "pautaSteps": [
   "0{,}75\\times 120 = 90"
  ],
  "conc": "La cantidad pedida es <b>90</b> recién nacidos."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Salud · Neonatología",
  "enun": "Sobre $n=120$ recién nacidos se sabe que $Q_3 = $ 3.400 gramos.",
  "ask": "¿Qué porcentaje pesó más de 3.400 gramos?",
  "alts": [
   "$30\\%$",
   "$25\\%$",
   "$50\\%$",
   "$35\\%$"
  ],
  "correct": 1,
  "pautaHead": "Q_3\\text{ deja el } 75\\%\\text{ abajo y el } 25\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } Q_3: 100\\% - 75\\% = 25\\%"
  ],
  "conc": "El porcentaje pedido es <b>25%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Banca · Atención en caja",
  "enun": "Sobre $n=180$ clientes se sabe que $D_9 = $ 15 minutos.",
  "ask": "¿Cuál es la interpretación correcta de $D_9$?",
  "alts": [
   "El 10% de los clientes esperó 15 minutos o menos.",
   "El tiempo de espera promedio es 15 minutos.",
   "El 90% de los clientes esperó 15 minutos o menos.",
   "El 90% de los clientes esperó más de 15 minutos."
  ],
  "correct": 2,
  "pautaHead": "\\text{El percentil } D_9 \\text{ acumula el } 90\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "D_9 = \\text{valor bajo el cual está el } 90\\% \\text{ de las observaciones}",
   "\\text{El } 10\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 90% de los clientes esperó 15 minutos o menos.</b>"
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Banca · Atención en caja",
  "enun": "Sobre $n=180$ clientes se sabe que $D_9 = $ 15 minutos.",
  "ask": "¿Qué porcentaje de clientes esperó más de 15 minutos?",
  "alts": [
   "$75\\%$",
   "$50\\%$",
   "$90\\%$",
   "$10\\%$"
  ],
  "correct": 3,
  "pautaHead": "D_9\\text{ deja el } 90\\%\\text{ abajo y el } 10\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } D_9: 100\\% - 90\\% = 10\\%"
  ],
  "conc": "El porcentaje pedido es <b>10%</b>."
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Banca · Atención en caja",
  "enun": "Sobre $n=180$ clientes se sabe que $D_9 = $ 15 minutos.",
  "ask": "¿Cuántos clientes esperaron 15 minutos o menos?",
  "alts": [
   "$162$",
   "$87$",
   "$134$",
   "$211$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=180.",
  "pautaSteps": [
   "0{,}90\\times 180 = 162"
  ],
  "conc": "La cantidad pedida es <b>162</b> clientes."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Retail · Ventas diarias",
  "enun": "Sobre $n=90$ días se sabe que $Q_2 = $ \\$250.000.",
  "ask": "¿Cuál es la interpretación correcta de $Q_2$?",
  "alts": [
   "La venta promedio diaria es \\$250.000.",
   "El 50% de los días las ventas fueron de \\$250.000 o menos.",
   "El 25% de los días las ventas fueron de \\$250.000 o menos.",
   "El 50% de los días las ventas superaron \\$250.000."
  ],
  "correct": 1,
  "pautaHead": "\\text{El percentil } Q_2 \\text{ acumula el } 50\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "Q_2 = \\text{valor bajo el cual está el } 50\\% \\text{ de las observaciones}",
   "\\text{El } 50\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 50% de los días las ventas fueron de \\$250.000 o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Retail · Ventas diarias",
  "enun": "Sobre $n=90$ días se sabe que $Q_2 = $ \\$250.000.",
  "ask": "¿Cuántos días las ventas fueron inferiores a \\$250.000?",
  "alts": [
   "$22$",
   "$35$",
   "$59$",
   "$45$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=90.",
  "pautaSteps": [
   "0{,}50\\times 90 = 45"
  ],
  "conc": "La cantidad pedida es <b>45</b> días."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Retail · Ventas diarias",
  "enun": "Sobre $n=90$ días se sabe que $Q_2 = $ \\$250.000.",
  "ask": "¿Qué porcentaje de días las ventas superaron \\$250.000?",
  "alts": [
   "$40\\%$",
   "$55\\%$",
   "$50\\%$",
   "$75\\%$"
  ],
  "correct": 2,
  "pautaHead": "Q_2\\text{ deja el } 50\\%\\text{ abajo y el } 50\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } Q_2: 100\\% - 50\\% = 50\\%"
  ],
  "conc": "El porcentaje pedido es <b>50%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Deporte · Gimnasio",
  "enun": "Sobre $n=250$ clientes se sabe que $P_{25} = $ 22 años.",
  "ask": "¿Cuál es la interpretación correcta de $P_{25}$?",
  "alts": [
   "El 75% de los clientes tiene 22 años o menos.",
   "El 25% de los clientes tiene 22 años o menos.",
   "La edad promedio de los clientes es 22 años.",
   "El 25% de los clientes tiene más de 22 años."
  ],
  "correct": 1,
  "pautaHead": "\\text{El percentil } P_{25} \\text{ acumula el } 25\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "P_{25} = \\text{valor bajo el cual está el } 25\\% \\text{ de las observaciones}",
   "\\text{El } 75\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 25% de los clientes tiene 22 años o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Deporte · Gimnasio",
  "enun": "Sobre $n=250$ clientes se sabe que $P_{25} = $ 22 años.",
  "ask": "¿Cuántos clientes tienen 22 años o menos?",
  "alts": [
   "$44$",
   "$93$",
   "$76$",
   "$63$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=250.",
  "pautaSteps": [
   "0{,}25\\times 250 = 62{,}5 \\approx 63"
  ],
  "conc": "La cantidad pedida es <b>63</b> clientes."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Deporte · Gimnasio",
  "enun": "Sobre $n=250$ clientes se sabe que $P_{25} = $ 22 años.",
  "ask": "¿Qué porcentaje de clientes tiene más de 22 años?",
  "alts": [
   "$75\\%$",
   "$38\\%$",
   "$85\\%$",
   "$65\\%$"
  ],
  "correct": 0,
  "pautaHead": "P_{25}\\text{ deja el } 25\\%\\text{ abajo y el } 75\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } P_{25}: 100\\% - 25\\% = 75\\%"
  ],
  "conc": "El porcentaje pedido es <b>75%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Call center · Llamadas",
  "enun": "Sobre $n=300$ llamadas se sabe que $Q_1 = $ 3 minutos.",
  "ask": "¿Cuál es la interpretación correcta de $Q_1$?",
  "alts": [
   "El 75% de los llamadas duró 3 minutos o menos.",
   "La duración promedio de las llamadas es 3 minutos.",
   "El 25% de los llamadas duró 3 minutos o menos.",
   "El 25% de los llamadas duró más de 3 minutos."
  ],
  "correct": 2,
  "pautaHead": "\\text{El percentil } Q_1 \\text{ acumula el } 25\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "Q_1 = \\text{valor bajo el cual está el } 25\\% \\text{ de las observaciones}",
   "\\text{El } 75\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 25% de los llamadas duró 3 minutos o menos.</b>"
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Call center · Llamadas",
  "enun": "Sobre $n=300$ llamadas se sabe que $Q_1 = $ 3 minutos.",
  "ask": "¿Qué porcentaje de llamadas duró más de 3 minutos?",
  "alts": [
   "$80\\%$",
   "$85\\%$",
   "$65\\%$",
   "$75\\%$"
  ],
  "correct": 3,
  "pautaHead": "Q_1\\text{ deja el } 25\\%\\text{ abajo y el } 75\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } Q_1: 100\\% - 25\\% = 75\\%"
  ],
  "conc": "El porcentaje pedido es <b>75%</b>."
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Call center · Llamadas",
  "enun": "Sobre $n=300$ llamadas se sabe que $Q_1 = $ 3 minutos.",
  "ask": "¿Cuántas llamadas duraron 3 minutos o menos?",
  "alts": [
   "$49$",
   "$75$",
   "$88$",
   "$109$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=300.",
  "pautaSteps": [
   "0{,}25\\times 300 = 75"
  ],
  "conc": "La cantidad pedida es <b>75</b> llamadas."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Educación · Calificaciones",
  "enun": "Sobre $n=140$ estudiantes se sabe que $P_{60} = $ 5,2.",
  "ask": "¿Cuál es la interpretación correcta de $P_{60}$?",
  "alts": [
   "La calificación promedio del curso es 5,2.",
   "El 60% de los estudiantes obtuvo una calificación de 5,2 o menos.",
   "El 40% de los estudiantes obtuvo una calificación de 5,2 o menos.",
   "El 60% de los estudiantes obtuvo una calificación superior a 5,2."
  ],
  "correct": 1,
  "pautaHead": "\\text{El percentil } P_{60} \\text{ acumula el } 60\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "P_{60} = \\text{valor bajo el cual está el } 60\\% \\text{ de las observaciones}",
   "\\text{El } 40\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 60% de los estudiantes obtuvo una calificación de 5,2 o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Educación · Calificaciones",
  "enun": "Sobre $n=140$ estudiantes se sabe que $P_{60} = $ 5,2.",
  "ask": "¿Cuántos estudiantes obtuvieron una calificación de 5,2 o menos?",
  "alts": [
   "$123$",
   "$98$",
   "$55$",
   "$84$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=140.",
  "pautaSteps": [
   "0{,}60\\times 140 = 84"
  ],
  "conc": "La cantidad pedida es <b>84</b> estudiantes."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Educación · Calificaciones",
  "enun": "Sobre $n=140$ estudiantes se sabe que $P_{60} = $ 5,2.",
  "ask": "¿Qué porcentaje obtuvo una calificación superior a 5,2?",
  "alts": [
   "$60\\%$",
   "$20\\%$",
   "$40\\%$",
   "$25\\%$"
  ],
  "correct": 2,
  "pautaHead": "P_{60}\\text{ deja el } 60\\%\\text{ abajo y el } 40\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } P_{60}: 100\\% - 60\\% = 40\\%"
  ],
  "conc": "El porcentaje pedido es <b>40%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Economía · Ingresos de hogares",
  "enun": "Sobre $n=400$ hogares se sabe que $D_5 = $ \\$600.000.",
  "ask": "¿Cuál es la interpretación correcta de $D_5$?",
  "alts": [
   "El 50% de los hogares tiene ingresos de \\$600.000 o menos.",
   "El 25% de los hogares tiene ingresos de \\$600.000 o menos.",
   "El ingreso promedio de los hogares es \\$600.000.",
   "El 50% de los hogares tiene ingresos superiores a \\$600.000."
  ],
  "correct": 0,
  "pautaHead": "\\text{El percentil } D_5 \\text{ acumula el } 50\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "D_5 = \\text{valor bajo el cual está el } 50\\% \\text{ de las observaciones}",
   "\\text{El } 50\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 50% de los hogares tiene ingresos de \\$600.000 o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Economía · Ingresos de hogares",
  "enun": "Sobre $n=400$ hogares se sabe que $D_5 = $ \\$600.000.",
  "ask": "¿Cuántos hogares tienen ingresos inferiores a \\$600.000?",
  "alts": [
   "$264$",
   "$109$",
   "$168$",
   "$200$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=400.",
  "pautaSteps": [
   "0{,}50\\times 400 = 200"
  ],
  "conc": "La cantidad pedida es <b>200</b> hogares."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Economía · Ingresos de hogares",
  "enun": "Sobre $n=400$ hogares se sabe que $D_5 = $ \\$600.000.",
  "ask": "¿Qué porcentaje de hogares tiene ingresos de \\$600.000 o más?",
  "alts": [
   "$50\\%$",
   "$60\\%$",
   "$25\\%$",
   "$40\\%$"
  ],
  "correct": 0,
  "pautaHead": "D_5\\text{ deja el } 50\\%\\text{ abajo y el } 50\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } D_5: 100\\% - 50\\% = 50\\%"
  ],
  "conc": "El porcentaje pedido es <b>50%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Tecnología · Uso de apps",
  "enun": "Sobre $n=220$ usuarios se sabe que $Q_3 = $ 45 minutos.",
  "ask": "¿Cuál es la interpretación correcta de $Q_3$?",
  "alts": [
   "El 75% de los usuarios usa la app más de 45 minutos al día.",
   "El uso promedio diario de la app es 45 minutos.",
   "El 75% de los usuarios usa la app 45 minutos o menos al día.",
   "El 25% de los usuarios usa la app 45 minutos o menos al día."
  ],
  "correct": 2,
  "pautaHead": "\\text{El percentil } Q_3 \\text{ acumula el } 75\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "Q_3 = \\text{valor bajo el cual está el } 75\\% \\text{ de las observaciones}",
   "\\text{El } 25\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 75% de los usuarios usa la app 45 minutos o menos al día.</b>"
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Tecnología · Uso de apps",
  "enun": "Sobre $n=220$ usuarios se sabe que $Q_3 = $ 45 minutos.",
  "ask": "¿Qué porcentaje de usuarios usa la app menos de 45 minutos?",
  "alts": [
   "$65\\%$",
   "$85\\%$",
   "$25\\%$",
   "$75\\%$"
  ],
  "correct": 3,
  "pautaHead": "Q_3\\text{ deja el } 75\\%\\text{ abajo y el } 25\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Bajo } Q_3: 75\\%"
  ],
  "conc": "El porcentaje pedido es <b>75%</b>."
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Tecnología · Uso de apps",
  "enun": "Sobre $n=220$ usuarios se sabe que $Q_3 = $ 45 minutos.",
  "ask": "¿Cuántos usuarios usan la app más de 45 minutos?",
  "alts": [
   "$73$",
   "$55$",
   "$47$",
   "$27$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=220.",
  "pautaSteps": [
   "0{,}25\\times 220 = 55"
  ],
  "conc": "La cantidad pedida es <b>55</b> usuarios."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Software · Control de calidad",
  "enun": "Sobre $n=80$ pruebas se sabe que $P_{95} = $ 10 errores.",
  "ask": "¿Cuál es la interpretación correcta de $P_{95}$?",
  "alts": [
   "El 95% de los pruebas tuvo 10 errores o menos.",
   "El 95% de los pruebas tuvo más de 10 errores.",
   "El número promedio de errores por prueba es 10.",
   "El 5% de los pruebas tuvo 10 errores o menos."
  ],
  "correct": 0,
  "pautaHead": "\\text{El percentil } P_{95} \\text{ acumula el } 95\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "P_{95} = \\text{valor bajo el cual está el } 95\\% \\text{ de las observaciones}",
   "\\text{El } 5\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 95% de los pruebas tuvo 10 errores o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Software · Control de calidad",
  "enun": "Sobre $n=80$ pruebas se sabe que $P_{95} = $ 10 errores.",
  "ask": "¿Cuántas pruebas tuvieron más de 10 errores?",
  "alts": [
   "$14$",
   "$4$",
   "$8$",
   "$7$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=80.",
  "pautaSteps": [
   "0{,}05\\times 80 = 4"
  ],
  "conc": "La cantidad pedida es <b>4</b> pruebas."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Software · Control de calidad",
  "enun": "Sobre $n=80$ pruebas se sabe que $P_{95} = $ 10 errores.",
  "ask": "¿Qué porcentaje tuvo 10 errores o menos?",
  "alts": [
   "$95\\%$",
   "$48\\%$",
   "$75\\%$",
   "$50\\%$"
  ],
  "correct": 0,
  "pautaHead": "P_{95}\\text{ deja el } 95\\%\\text{ abajo y el } 5\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Bajo } P_{95}: 95\\%"
  ],
  "conc": "El porcentaje pedido es <b>95%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Educación · Examen de admisión",
  "enun": "Sobre $n=350$ postulantes se sabe que $Q_1 = $ 450 puntos.",
  "ask": "¿Cuál es la interpretación correcta de $Q_1$?",
  "alts": [
   "El 25% de los postulantes obtuvo 450 puntos o menos.",
   "El puntaje promedio del examen es 450.",
   "El 25% de los postulantes obtuvo más de 450 puntos.",
   "El 75% de los postulantes obtuvo 450 puntos o menos."
  ],
  "correct": 0,
  "pautaHead": "\\text{El percentil } Q_1 \\text{ acumula el } 25\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "Q_1 = \\text{valor bajo el cual está el } 25\\% \\text{ de las observaciones}",
   "\\text{El } 75\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 25% de los postulantes obtuvo 450 puntos o menos.</b>"
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Educación · Examen de admisión",
  "enun": "Sobre $n=350$ postulantes se sabe que $Q_1 = $ 450 puntos.",
  "ask": "¿Qué porcentaje de postulantes obtuvo menos de 450 puntos?",
  "alts": [
   "$25\\%$",
   "$75\\%$",
   "$30\\%$",
   "$15\\%$"
  ],
  "correct": 0,
  "pautaHead": "Q_1\\text{ deja el } 25\\%\\text{ abajo y el } 75\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Bajo } Q_1: 25\\%"
  ],
  "conc": "El porcentaje pedido es <b>25%</b>."
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Educación · Examen de admisión",
  "enun": "Sobre $n=350$ postulantes se sabe que $Q_1 = $ 450 puntos.",
  "ask": "¿Cuántos postulantes obtuvieron 450 puntos o más?",
  "alts": [
   "$345$",
   "$263$",
   "$222$",
   "$145$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=350.",
  "pautaSteps": [
   "0{,}75\\times 350 = 262{,}5 \\approx 263"
  ],
  "conc": "La cantidad pedida es <b>263</b> postulantes."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Servicio técnico · Reparaciones",
  "enun": "Sobre $n=95$ equipos se sabe que $D_8 = $ 6 horas.",
  "ask": "¿Cuál es la interpretación correcta de $D_8$?",
  "alts": [
   "El 80% de los equipos tardó más de 6 horas en repararse.",
   "El 80% de los equipos se reparó en 6 horas o menos.",
   "El tiempo promedio de reparación es 6 horas.",
   "El 20% de los equipos se reparó en 6 horas o menos."
  ],
  "correct": 1,
  "pautaHead": "\\text{El percentil } D_8 \\text{ acumula el } 80\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "D_8 = \\text{valor bajo el cual está el } 80\\% \\text{ de las observaciones}",
   "\\text{El } 20\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 80% de los equipos se reparó en 6 horas o menos.</b>"
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Servicio técnico · Reparaciones",
  "enun": "Sobre $n=95$ equipos se sabe que $D_8 = $ 6 horas.",
  "ask": "¿Qué porcentaje de equipos se reparó en más de 6 horas?",
  "alts": [
   "$75\\%$",
   "$25\\%$",
   "$20\\%$",
   "$10\\%$"
  ],
  "correct": 2,
  "pautaHead": "D_8\\text{ deja el } 80\\%\\text{ abajo y el } 20\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } D_8: 100\\% - 80\\% = 20\\%"
  ],
  "conc": "El porcentaje pedido es <b>20%</b>."
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Servicio técnico · Reparaciones",
  "enun": "Sobre $n=95$ equipos se sabe que $D_8 = $ 6 horas.",
  "ask": "¿Cuántos equipos se repararon en 6 horas o menos?",
  "alts": [
   "$54$",
   "$90$",
   "$76$",
   "$111$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=95.",
  "pautaSteps": [
   "0{,}80\\times 95 = 76"
  ],
  "conc": "La cantidad pedida es <b>76</b> equipos."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Energía · Consumo eléctrico",
  "enun": "Sobre $n=260$ hogares se sabe que $P_{40} = $ 210 kWh.",
  "ask": "¿Cuál es la interpretación correcta de $P_{40}$?",
  "alts": [
   "El 40% de los hogares consume 210 kWh o menos.",
   "El consumo promedio mensual es 210 kWh.",
   "El 40% de los hogares consume más de 210 kWh.",
   "El 60% de los hogares consume 210 kWh o menos."
  ],
  "correct": 0,
  "pautaHead": "\\text{El percentil } P_{40} \\text{ acumula el } 40\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "P_{40} = \\text{valor bajo el cual está el } 40\\% \\text{ de las observaciones}",
   "\\text{El } 60\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 40% de los hogares consume 210 kWh o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Energía · Consumo eléctrico",
  "enun": "Sobre $n=260$ hogares se sabe que $P_{40} = $ 210 kWh.",
  "ask": "¿Cuántos hogares consumen menos de 210 kWh?",
  "alts": [
   "$104$",
   "$68$",
   "$153$",
   "$122$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=260.",
  "pautaSteps": [
   "0{,}40\\times 260 = 104"
  ],
  "conc": "La cantidad pedida es <b>104</b> hogares."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Energía · Consumo eléctrico",
  "enun": "Sobre $n=260$ hogares se sabe que $P_{40} = $ 210 kWh.",
  "ask": "¿Qué porcentaje consume 210 kWh o más?",
  "alts": [
   "$75\\%$",
   "$30\\%$",
   "$25\\%$",
   "$60\\%$"
  ],
  "correct": 3,
  "pautaHead": "P_{40}\\text{ deja el } 40\\%\\text{ abajo y el } 60\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } P_{40}: 100\\% - 40\\% = 60\\%"
  ],
  "conc": "El porcentaje pedido es <b>60%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Deporte · Maratón",
  "enun": "Sobre $n=500$ corredores se sabe que $Q_3 = $ 240 minutos.",
  "ask": "¿Cuál es la interpretación correcta de $Q_3$?",
  "alts": [
   "El 75% de los corredores terminó después de los 240 minutos.",
   "El tiempo promedio de carrera es 240 minutos.",
   "El 75% de los corredores terminó en 240 minutos o menos.",
   "El 25% de los corredores terminó en 240 minutos o menos."
  ],
  "correct": 2,
  "pautaHead": "\\text{El percentil } Q_3 \\text{ acumula el } 75\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "Q_3 = \\text{valor bajo el cual está el } 75\\% \\text{ de las observaciones}",
   "\\text{El } 25\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 75% de los corredores terminó en 240 minutos o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Deporte · Maratón",
  "enun": "Sobre $n=500$ corredores se sabe que $Q_3 = $ 240 minutos.",
  "ask": "¿Cuántos corredores terminaron después de los 240 minutos?",
  "alts": [
   "$163$",
   "$66$",
   "$125$",
   "$103$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=500.",
  "pautaSteps": [
   "0{,}25\\times 500 = 125"
  ],
  "conc": "La cantidad pedida es <b>125</b> corredores."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Deporte · Maratón",
  "enun": "Sobre $n=500$ corredores se sabe que $Q_3 = $ 240 minutos.",
  "ask": "¿Qué porcentaje terminó en 240 minutos o menos?",
  "alts": [
   "$80\\%$",
   "$38\\%$",
   "$25\\%$",
   "$75\\%$"
  ],
  "correct": 3,
  "pautaHead": "Q_3\\text{ deja el } 75\\%\\text{ abajo y el } 25\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Bajo } Q_3: 75\\%"
  ],
  "conc": "El porcentaje pedido es <b>75%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "E-commerce · Montos de compra",
  "enun": "Sobre $n=310$ clientes se sabe que $P_{70} = $ \\$85.000.",
  "ask": "¿Cuál es la interpretación correcta de $P_{70}$?",
  "alts": [
   "El 70% de los clientes gastó \\$85.000 o menos.",
   "El 70% de los clientes gastó más de \\$85.000.",
   "El gasto promedio por cliente es \\$85.000.",
   "El 30% de los clientes gastó \\$85.000 o menos."
  ],
  "correct": 0,
  "pautaHead": "\\text{El percentil } P_{70} \\text{ acumula el } 70\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "P_{70} = \\text{valor bajo el cual está el } 70\\% \\text{ de las observaciones}",
   "\\text{El } 30\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 70% de los clientes gastó \\$85.000 o menos.</b>"
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "E-commerce · Montos de compra",
  "enun": "Sobre $n=310$ clientes se sabe que $P_{70} = $ \\$85.000.",
  "ask": "¿Qué porcentaje de clientes gastó menos de \\$85.000?",
  "alts": [
   "$60\\%$",
   "$70\\%$",
   "$25\\%$",
   "$35\\%$"
  ],
  "correct": 1,
  "pautaHead": "P_{70}\\text{ deja el } 70\\%\\text{ abajo y el } 30\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Bajo } P_{70}: 70\\%"
  ],
  "conc": "El porcentaje pedido es <b>70%</b>."
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "E-commerce · Montos de compra",
  "enun": "Sobre $n=310$ clientes se sabe que $P_{70} = $ \\$85.000.",
  "ask": "¿Cuántos clientes gastaron \\$85.000 o más?",
  "alts": [
   "$124$",
   "$78$",
   "$51$",
   "$93$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=310.",
  "pautaSteps": [
   "0{,}30\\times 310 = 93"
  ],
  "conc": "La cantidad pedida es <b>93</b> clientes."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Tecnología · Baterías",
  "enun": "Sobre $n=75$ celulares se sabe que $D_2 = $ 8 horas.",
  "ask": "¿Cuál es la interpretación correcta de $D_2$?",
  "alts": [
   "La duración promedio de las baterías es 8 horas.",
   "El 20% de los celulares tiene una batería que dura 8 horas o menos.",
   "El 20% de los celulares tiene una batería que dura más de 8 horas.",
   "El 80% de los celulares tiene una batería que dura 8 horas o menos."
  ],
  "correct": 1,
  "pautaHead": "\\text{El percentil } D_2 \\text{ acumula el } 20\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "D_2 = \\text{valor bajo el cual está el } 20\\% \\text{ de las observaciones}",
   "\\text{El } 80\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 20% de los celulares tiene una batería que dura 8 horas o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Tecnología · Baterías",
  "enun": "Sobre $n=75$ celulares se sabe que $D_2 = $ 8 horas.",
  "ask": "¿Cuántos celulares tienen una batería que dura menos de 8 horas?",
  "alts": [
   "$15$",
   "$21$",
   "$5$",
   "$13$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=75.",
  "pautaSteps": [
   "0{,}20\\times 75 = 15"
  ],
  "conc": "La cantidad pedida es <b>15</b> celulares."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Tecnología · Baterías",
  "enun": "Sobre $n=75$ celulares se sabe que $D_2 = $ 8 horas.",
  "ask": "¿Qué porcentaje dura 8 horas o más?",
  "alts": [
   "$70\\%$",
   "$50\\%$",
   "$25\\%$",
   "$80\\%$"
  ],
  "correct": 3,
  "pautaHead": "D_2\\text{ deja el } 20\\%\\text{ abajo y el } 80\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } D_2: 100\\% - 20\\% = 80\\%"
  ],
  "conc": "El porcentaje pedido es <b>80%</b>."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Correo · Paquetería",
  "enun": "Sobre $n=430$ paquetes se sabe que $Q_1 = $ 1,2 kg.",
  "ask": "¿Cuál es la interpretación correcta de $Q_1$?",
  "alts": [
   "El 75% de los paquetes pesa 1,2 kg o menos.",
   "El 25% de los paquetes pesa más de 1,2 kg.",
   "El 25% de los paquetes pesa 1,2 kg o menos.",
   "El peso promedio de los paquetes es 1,2 kg."
  ],
  "correct": 2,
  "pautaHead": "\\text{El percentil } Q_1 \\text{ acumula el } 25\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "Q_1 = \\text{valor bajo el cual está el } 25\\% \\text{ de las observaciones}",
   "\\text{El } 75\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 25% de los paquetes pesa 1,2 kg o menos.</b>"
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Correo · Paquetería",
  "enun": "Sobre $n=430$ paquetes se sabe que $Q_1 = $ 1,2 kg.",
  "ask": "¿Qué porcentaje de paquetes pesa más de 1,2 kg?",
  "alts": [
   "$50\\%$",
   "$80\\%$",
   "$75\\%$",
   "$25\\%$"
  ],
  "correct": 2,
  "pautaHead": "Q_1\\text{ deja el } 25\\%\\text{ abajo y el } 75\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Sobre } Q_1: 100\\% - 25\\% = 75\\%"
  ],
  "conc": "El porcentaje pedido es <b>75%</b>."
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Correo · Paquetería",
  "enun": "Sobre $n=430$ paquetes se sabe que $Q_1 = $ 1,2 kg.",
  "ask": "¿Cuántos paquetes pesan 1,2 kg o menos?",
  "alts": [
   "$58$",
   "$140$",
   "$89$",
   "$108$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=430.",
  "pautaSteps": [
   "0{,}25\\times 430 = 107{,}5 \\approx 108"
  ],
  "conc": "La cantidad pedida es <b>108</b> paquetes."
 },
 {
  "tipo": "Interpretación de percentil",
  "ctx": "Servicio al cliente · Reclamos",
  "enun": "Sobre $n=160$ reclamos se sabe que $P_{85} = $ 12 días.",
  "ask": "¿Cuál es la interpretación correcta de $P_{85}$?",
  "alts": [
   "El 85% de los reclamos se resolvió en 12 días o menos.",
   "El 85% de los reclamos tardó más de 12 días en resolverse.",
   "El 15% de los reclamos se resolvió en 12 días o menos.",
   "El tiempo promedio de respuesta es 12 días."
  ],
  "correct": 0,
  "pautaHead": "\\text{El percentil } P_{85} \\text{ acumula el } 85\\% \\text{ de los datos hacia abajo.}",
  "pautaSteps": [
   "P_{85} = \\text{valor bajo el cual está el } 85\\% \\text{ de las observaciones}",
   "\\text{El } 15\\% \\text{ restante queda por sobre ese valor}"
  ],
  "conc": "Interpretación: <b>El 85% de los reclamos se resolvió en 12 días o menos.</b>"
 },
 {
  "tipo": "Conteo sobre/bajo el percentil",
  "ctx": "Servicio al cliente · Reclamos",
  "enun": "Sobre $n=160$ reclamos se sabe que $P_{85} = $ 12 días.",
  "ask": "¿Cuántos reclamos se resolvieron en más de 12 días?",
  "alts": [
   "$24$",
   "$18$",
   "$11$",
   "$36$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Cantidad} = \\text{proporción} \\times n,\\ n=160.",
  "pautaSteps": [
   "0{,}15\\times 160 = 24"
  ],
  "conc": "La cantidad pedida es <b>24</b> reclamos."
 },
 {
  "tipo": "Porcentaje sobre/bajo el percentil",
  "ctx": "Servicio al cliente · Reclamos",
  "enun": "Sobre $n=160$ reclamos se sabe que $P_{85} = $ 12 días.",
  "ask": "¿Qué porcentaje se resolvió en 12 días o menos?",
  "alts": [
   "$25\\%$",
   "$75\\%$",
   "$15\\%$",
   "$85\\%$"
  ],
  "correct": 3,
  "pautaHead": "P_{85}\\text{ deja el } 85\\%\\text{ abajo y el } 15\\%\\text{ arriba.}",
  "pautaSteps": [
   "\\text{Bajo } P_{85}: 85\\%"
  ],
  "conc": "El porcentaje pedido es <b>85%</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Urgencias",
  "enun": "El diagrama de caja muestra tiempo de espera en urgencias (minutos). Mín $=5$, $Q_1=15$, mediana $=22$, $Q_3=30$, máx $=55$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 15,
   "med": 22,
   "q3": 30,
   "max": 55,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 15 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es la mediana menos $Q_1 = 7$",
   "Verdadera: $RIC = Q_3 - Q_1 = 30 - 15 = 15$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 50$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 50$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=15,\\ Me=22,\\ Q_3=30,\\ \\text{máx}=55.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 30 - 15 = 15"
  ],
  "conc": "VERDADERA: el RIC real es <b>15</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Urgencias",
  "enun": "El diagrama de caja muestra tiempo de espera en urgencias (minutos). Mín $=5$, $Q_1=15$, mediana $=22$, $Q_3=30$, máx $=55$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 15,
   "med": 22,
   "q3": 30,
   "max": 55,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"La mediana es 25 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana es la línea central de la caja, 22",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 30$",
   "Verdadera: la línea central de la caja está en 25",
   "Verdadera: la mediana es el punto medio del rango $= 30$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=15,\\ Me=22,\\ Q_3=30,\\ \\text{máx}=55.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 22"
  ],
  "conc": "FALSA: la mediana real es <b>22</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Urgencias",
  "enun": "El diagrama de caja muestra tiempo de espera en urgencias (minutos). Mín $=5$, $Q_1=15$, mediana $=22$, $Q_3=30$, máx $=55$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 15,
   "med": 22,
   "q3": 30,
   "max": 55,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El valor máximo (55) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: 55 no supera la cerca de $52{,}5$",
   "Verdadera: todo valor fuera de la caja es atípico",
   "Falsa: la cerca es $Q_3 + RIC = 45$",
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 30 + 22{,}5 = 52{,}5$ y $55 > 52{,}5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=15,\\ Me=22,\\ Q_3=30,\\ \\text{máx}=55.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 30 + 22{,}5 = 52{,}5",
   "\\text{Comparación: } 55 > 52{,}5 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>52,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Urgencias",
  "enun": "El diagrama de caja muestra tiempo de espera en urgencias (minutos). Mín $=5$, $Q_1=15$, mediana $=22$, $Q_3=30$, máx $=55$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 15,
   "med": 22,
   "q3": 30,
   "max": 55,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El 50% central de los datos está entre 15 y 30 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: la caja $Q_1$–$Q_3$ ($15$ a $30$) contiene al 50% central",
   "Verdadera: cada bigote contiene el 10% de los datos"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=15,\\ Me=22,\\ Q_3=30,\\ \\text{máx}=55.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 15,\\ \\text{mediana} = 22,\\ Q_3 = 30"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Laboral · Sueldos",
  "enun": "El diagrama de caja muestra sueldos (cientos de miles de $). Mín $=8$, $Q_1=15$, mediana $=20$, $Q_3=28$, máx $=60$.",
  "chart": {
   "type": "box",
   "min": 8,
   "q1": 15,
   "med": 20,
   "q3": 28,
   "max": 60,
   "unit": "cientos de miles de $"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 13 cientos de miles de $\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 52$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 52$",
   "Verdadera: $RIC = Q_3 - Q_1 = 28 - 15 = 13$",
   "Falsa: el RIC es la mediana menos $Q_1 = 5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=8,\\ Q_1=15,\\ Me=20,\\ Q_3=28,\\ \\text{máx}=60.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 28 - 15 = 13"
  ],
  "conc": "VERDADERA: el RIC real es <b>13</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Laboral · Sueldos",
  "enun": "El diagrama de caja muestra sueldos (cientos de miles de $). Mín $=8$, $Q_1=15$, mediana $=20$, $Q_3=28$, máx $=60$.",
  "chart": {
   "type": "box",
   "min": 8,
   "q1": 15,
   "med": 20,
   "q3": 28,
   "max": 60,
   "unit": "cientos de miles de $"
  },
  "ask": "Afirmación: \"La mediana es 22 cientos de miles de $\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 34$",
   "Verdadera: la mediana es el punto medio del rango $= 34$",
   "Verdadera: la línea central de la caja está en 22",
   "Falsa: la mediana es la línea central de la caja, 20"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=8,\\ Q_1=15,\\ Me=20,\\ Q_3=28,\\ \\text{máx}=60.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 20"
  ],
  "conc": "FALSA: la mediana real es <b>20</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Laboral · Sueldos",
  "enun": "El diagrama de caja muestra sueldos (cientos de miles de $). Mín $=8$, $Q_1=15$, mediana $=20$, $Q_3=28$, máx $=60$.",
  "chart": {
   "type": "box",
   "min": 8,
   "q1": 15,
   "med": 20,
   "q3": 28,
   "max": 60,
   "unit": "cientos de miles de $"
  },
  "ask": "Afirmación: \"El valor máximo (60) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la cerca es $Q_3 + RIC = 41$",
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 28 + 19{,}5 = 47{,}5$ y $60 > 47{,}5$",
   "Falsa: 60 no supera la cerca de $47{,}5$",
   "Verdadera: todo valor fuera de la caja es atípico"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=8,\\ Q_1=15,\\ Me=20,\\ Q_3=28,\\ \\text{máx}=60.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 28 + 19{,}5 = 47{,}5",
   "\\text{Comparación: } 60 > 47{,}5 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>47,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Laboral · Sueldos",
  "enun": "El diagrama de caja muestra sueldos (cientos de miles de $). Mín $=8$, $Q_1=15$, mediana $=20$, $Q_3=28$, máx $=60$.",
  "chart": {
   "type": "box",
   "min": 8,
   "q1": 15,
   "med": 20,
   "q3": 28,
   "max": 60,
   "unit": "cientos de miles de $"
  },
  "ask": "Afirmación: \"El 25% de los datos es menor que 15 cientos de miles de $\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $Q_1 = 15$ deja el 25% de los datos por debajo",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=8,\\ Q_1=15,\\ Me=20,\\ Q_3=28,\\ \\text{máx}=60.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 15,\\ \\text{mediana} = 20,\\ Q_3 = 28"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Notas",
  "enun": "El diagrama de caja muestra notas de un curso (0 a 100) (puntos). Mín $=30$, $Q_1=55$, mediana $=65$, $Q_3=75$, máx $=95$.",
  "chart": {
   "type": "box",
   "min": 30,
   "q1": 55,
   "med": 65,
   "q3": 75,
   "max": 95,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 20 puntos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 65$",
   "Falsa: el RIC es la mediana menos $Q_1 = 10$",
   "Verdadera: $RIC = Q_3 - Q_1 = 75 - 55 = 20$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 65$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=30,\\ Q_1=55,\\ Me=65,\\ Q_3=75,\\ \\text{máx}=95.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 75 - 55 = 20"
  ],
  "conc": "VERDADERA: el RIC real es <b>20</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Notas",
  "enun": "El diagrama de caja muestra notas de un curso (0 a 100) (puntos). Mín $=30$, $Q_1=55$, mediana $=65$, $Q_3=75$, máx $=95$.",
  "chart": {
   "type": "box",
   "min": 30,
   "q1": 55,
   "med": 65,
   "q3": 75,
   "max": 95,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"La mediana es 70 puntos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la mediana es el punto medio del rango $= 62{,}5$",
   "Verdadera: la línea central de la caja está en 70",
   "Falsa: la mediana es la línea central de la caja, 65",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 62{,}5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=30,\\ Q_1=55,\\ Me=65,\\ Q_3=75,\\ \\text{máx}=95.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 65"
  ],
  "conc": "FALSA: la mediana real es <b>65</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Notas",
  "enun": "El diagrama de caja muestra notas de un curso (0 a 100) (puntos). Mín $=30$, $Q_1=55$, mediana $=65$, $Q_3=75$, máx $=95$.",
  "chart": {
   "type": "box",
   "min": 30,
   "q1": 55,
   "med": 65,
   "q3": 75,
   "max": 95,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El valor mínimo (30) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: todo valor fuera de la caja es atípico",
   "Falsa: la cerca es $Q_1 - 1{,}5\\cdot RIC = 55 - 30 = 25$ y $30 \\ge 25$, no la supera",
   "Verdadera: 30 supera la cerca de $25$",
   "Verdadera: la cerca es $Q_1 - RIC = 35$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=30,\\ Q_1=55,\\ Me=65,\\ Q_3=75,\\ \\text{máx}=95.",
  "pautaSteps": [
   "Q_1 - 1{,}5\\cdot RIC = 55 - 30 = 25",
   "\\text{Comparación: } 30 \\ge 25 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>25</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Notas",
  "enun": "El diagrama de caja muestra notas de un curso (0 a 100) (puntos). Mín $=30$, $Q_1=55$, mediana $=65$, $Q_3=75$, máx $=95$.",
  "chart": {
   "type": "box",
   "min": 30,
   "q1": 55,
   "med": 65,
   "q3": 75,
   "max": 95,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El 75% de los datos es 75 puntos o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $Q_3 = 75$ acumula el 75% abajo y deja el 25% arriba",
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Falsa: la caja solo muestra el rango total de los datos"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=30,\\ Q_1=55,\\ Me=65,\\ Q_3=75,\\ \\text{máx}=95.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 55,\\ \\text{mediana} = 65,\\ Q_3 = 75"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Pacientes",
  "enun": "El diagrama de caja muestra edad de pacientes (años). Mín $=5$, $Q_1=25$, mediana $=40$, $Q_3=55$, máx $=80$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 25,
   "med": 40,
   "q3": 55,
   "max": 80,
   "unit": "años"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 30 años\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 75$",
   "Verdadera: $RIC = Q_3 - Q_1 = 55 - 25 = 30$",
   "Falsa: el RIC es la mediana menos $Q_1 = 15$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 75$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=25,\\ Me=40,\\ Q_3=55,\\ \\text{máx}=80.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 55 - 25 = 30"
  ],
  "conc": "VERDADERA: el RIC real es <b>30</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Pacientes",
  "enun": "El diagrama de caja muestra edad de pacientes (años). Mín $=5$, $Q_1=25$, mediana $=40$, $Q_3=55$, máx $=80$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 25,
   "med": 40,
   "q3": 55,
   "max": 80,
   "unit": "años"
  },
  "ask": "Afirmación: \"La mediana es 45 años\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 42{,}5$",
   "Verdadera: la línea central de la caja está en 45",
   "Falsa: la mediana es la línea central de la caja, 40",
   "Verdadera: la mediana es el punto medio del rango $= 42{,}5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=25,\\ Me=40,\\ Q_3=55,\\ \\text{máx}=80.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 40"
  ],
  "conc": "FALSA: la mediana real es <b>40</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Pacientes",
  "enun": "El diagrama de caja muestra edad de pacientes (años). Mín $=5$, $Q_1=25$, mediana $=40$, $Q_3=55$, máx $=80$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 25,
   "med": 40,
   "q3": 55,
   "max": 80,
   "unit": "años"
  },
  "ask": "Afirmación: \"El valor máximo (80) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la cerca es $Q_3 + RIC = 85$",
   "Falsa: la cerca es $Q_3 + 1{,}5\\cdot RIC = 55 + 45 = 100$ y $80 \\le 100$, no la supera",
   "Falsa: todo valor fuera de la caja es atípico",
   "Verdadera: 80 supera la cerca de $100$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=25,\\ Me=40,\\ Q_3=55,\\ \\text{máx}=80.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 55 + 45 = 100",
   "\\text{Comparación: } 80 \\le 100 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>100</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Pacientes",
  "enun": "El diagrama de caja muestra edad de pacientes (años). Mín $=5$, $Q_1=25$, mediana $=40$, $Q_3=55$, máx $=80$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 25,
   "med": 40,
   "q3": 55,
   "max": 80,
   "unit": "años"
  },
  "ask": "Afirmación: \"El 50% central de los datos está entre 25 y 55 años\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: la caja $Q_1$–$Q_3$ ($25$ a $55$) contiene al 50% central"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=25,\\ Me=40,\\ Q_3=55,\\ \\text{máx}=80.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 25,\\ \\text{mediana} = 40,\\ Q_3 = 55"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Logística · Entregas",
  "enun": "El diagrama de caja muestra tiempo de entrega (minutos). Mín $=10$, $Q_1=20$, mediana $=28$, $Q_3=35$, máx $=50$.",
  "chart": {
   "type": "box",
   "min": 10,
   "q1": 20,
   "med": 28,
   "q3": 35,
   "max": 50,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 20 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $RIC = Q_3 - Q_1 = 20$",
   "Falsa: $RIC = Q_3 - Q_1 = 15$, no 20",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 40$",
   "Verdadera: el RIC es la mediana menos $Q_1 = 8$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=10,\\ Q_1=20,\\ Me=28,\\ Q_3=35,\\ \\text{máx}=50.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 35 - 20 = 15"
  ],
  "conc": "FALSA: el RIC real es <b>15</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Logística · Entregas",
  "enun": "El diagrama de caja muestra tiempo de entrega (minutos). Mín $=10$, $Q_1=20$, mediana $=28$, $Q_3=35$, máx $=50$.",
  "chart": {
   "type": "box",
   "min": 10,
   "q1": 20,
   "med": 28,
   "q3": 35,
   "max": 50,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"La mediana es 28 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la línea central de la caja está en 28",
   "Verdadera: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 30$",
   "Falsa: la mediana es el punto medio del rango $= 30$",
   "Falsa: la mediana es el promedio de $Q_1$ y $Q_3 = 27{,}5$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=10,\\ Q_1=20,\\ Me=28,\\ Q_3=35,\\ \\text{máx}=50.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 28"
  ],
  "conc": "VERDADERA: la mediana real es <b>28</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Logística · Entregas",
  "enun": "El diagrama de caja muestra tiempo de entrega (minutos). Mín $=10$, $Q_1=20$, mediana $=28$, $Q_3=35$, máx $=50$.",
  "chart": {
   "type": "box",
   "min": 10,
   "q1": 20,
   "med": 28,
   "q3": 35,
   "max": 50,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El valor máximo (50) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la cerca es $Q_3 + RIC = 50$",
   "Verdadera: 50 supera la cerca de $57{,}5$",
   "Falsa: todo valor fuera de la caja es atípico",
   "Falsa: la cerca es $Q_3 + 1{,}5\\cdot RIC = 35 + 22{,}5 = 57{,}5$ y $50 \\le 57{,}5$, no la supera"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=10,\\ Q_1=20,\\ Me=28,\\ Q_3=35,\\ \\text{máx}=50.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 35 + 22{,}5 = 57{,}5",
   "\\text{Comparación: } 50 \\le 57{,}5 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>57,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Logística · Entregas",
  "enun": "El diagrama de caja muestra tiempo de entrega (minutos). Mín $=10$, $Q_1=20$, mediana $=28$, $Q_3=35$, máx $=50$.",
  "chart": {
   "type": "box",
   "min": 10,
   "q1": 20,
   "med": 28,
   "q3": 35,
   "max": 50,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El 25% de los datos supera 35 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Verdadera: $Q_3 = 35$ acumula el 75% abajo y deja el 25% arriba",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=10,\\ Q_1=20,\\ Me=28,\\ Q_3=35,\\ \\text{máx}=50.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 20,\\ \\text{mediana} = 28,\\ Q_3 = 35"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Retail · Ventas",
  "enun": "El diagrama de caja muestra ventas diarias (miles de $). Mín $=20$, $Q_1=45$, mediana $=60$, $Q_3=80$, máx $=140$.",
  "chart": {
   "type": "box",
   "min": 20,
   "q1": 45,
   "med": 60,
   "q3": 80,
   "max": 140,
   "unit": "miles de $"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 35 miles de $\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $RIC = Q_3 - Q_1 = 80 - 45 = 35$",
   "Falsa: el RIC es la mediana menos $Q_1 = 15$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 120$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 120$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=20,\\ Q_1=45,\\ Me=60,\\ Q_3=80,\\ \\text{máx}=140.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 80 - 45 = 35"
  ],
  "conc": "VERDADERA: el RIC real es <b>35</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Retail · Ventas",
  "enun": "El diagrama de caja muestra ventas diarias (miles de $). Mín $=20$, $Q_1=45$, mediana $=60$, $Q_3=80$, máx $=140$.",
  "chart": {
   "type": "box",
   "min": 20,
   "q1": 45,
   "med": 60,
   "q3": 80,
   "max": 140,
   "unit": "miles de $"
  },
  "ask": "Afirmación: \"La mediana es 65 miles de $\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la línea central de la caja está en 65",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 80$",
   "Verdadera: la mediana es el punto medio del rango $= 80$",
   "Falsa: la mediana es la línea central de la caja, 60"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=20,\\ Q_1=45,\\ Me=60,\\ Q_3=80,\\ \\text{máx}=140.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 60"
  ],
  "conc": "FALSA: la mediana real es <b>60</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Retail · Ventas",
  "enun": "El diagrama de caja muestra ventas diarias (miles de $). Mín $=20$, $Q_1=45$, mediana $=60$, $Q_3=80$, máx $=140$.",
  "chart": {
   "type": "box",
   "min": 20,
   "q1": 45,
   "med": 60,
   "q3": 80,
   "max": 140,
   "unit": "miles de $"
  },
  "ask": "Afirmación: \"El valor máximo (140) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: todo valor fuera de la caja es atípico",
   "Falsa: 140 no supera la cerca de $132{,}5$",
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 80 + 52{,}5 = 132{,}5$ y $140 > 132{,}5$",
   "Falsa: la cerca es $Q_3 + RIC = 115$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=20,\\ Q_1=45,\\ Me=60,\\ Q_3=80,\\ \\text{máx}=140.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 80 + 52{,}5 = 132{,}5",
   "\\text{Comparación: } 140 > 132{,}5 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>132,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Retail · Ventas",
  "enun": "El diagrama de caja muestra ventas diarias (miles de $). Mín $=20$, $Q_1=45$, mediana $=60$, $Q_3=80$, máx $=140$.",
  "chart": {
   "type": "box",
   "min": 20,
   "q1": 45,
   "med": 60,
   "q3": 80,
   "max": 140,
   "unit": "miles de $"
  },
  "ask": "Afirmación: \"El 25% de los datos es menor que 45 miles de $\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: $Q_1 = 45$ deja el 25% de los datos por debajo",
   "Falsa: la caja solo muestra el rango total de los datos"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=20,\\ Q_1=45,\\ Me=60,\\ Q_3=80,\\ \\text{máx}=140.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 45,\\ \\text{mediana} = 60,\\ Q_3 = 80"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Call center · Llamadas",
  "enun": "El diagrama de caja muestra duración de llamadas (minutos). Mín $=1$, $Q_1=3$, mediana $=5$, $Q_3=8$, máx $=20$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 3,
   "med": 5,
   "q3": 8,
   "max": 20,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 5 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 19$",
   "Falsa: el RIC es la mediana menos $Q_1 = 2$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 19$",
   "Verdadera: $RIC = Q_3 - Q_1 = 8 - 3 = 5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=3,\\ Me=5,\\ Q_3=8,\\ \\text{máx}=20.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 8 - 3 = 5"
  ],
  "conc": "VERDADERA: el RIC real es <b>5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Call center · Llamadas",
  "enun": "El diagrama de caja muestra duración de llamadas (minutos). Mín $=1$, $Q_1=3$, mediana $=5$, $Q_3=8$, máx $=20$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 3,
   "med": 5,
   "q3": 8,
   "max": 20,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"La mediana es 6 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la mediana es el punto medio del rango $= 10{,}5$",
   "Falsa: la mediana es la línea central de la caja, 5",
   "Verdadera: la línea central de la caja está en 6",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 10{,}5$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=3,\\ Me=5,\\ Q_3=8,\\ \\text{máx}=20.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 5"
  ],
  "conc": "FALSA: la mediana real es <b>5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Call center · Llamadas",
  "enun": "El diagrama de caja muestra duración de llamadas (minutos). Mín $=1$, $Q_1=3$, mediana $=5$, $Q_3=8$, máx $=20$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 3,
   "med": 5,
   "q3": 8,
   "max": 20,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El valor máximo (20) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 8 + 7{,}5 = 15{,}5$ y $20 > 15{,}5$",
   "Verdadera: todo valor fuera de la caja es atípico",
   "Falsa: la cerca es $Q_3 + RIC = 13$",
   "Falsa: 20 no supera la cerca de $15{,}5$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=3,\\ Me=5,\\ Q_3=8,\\ \\text{máx}=20.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 8 + 7{,}5 = 15{,}5",
   "\\text{Comparación: } 20 > 15{,}5 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>15,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Call center · Llamadas",
  "enun": "El diagrama de caja muestra duración de llamadas (minutos). Mín $=1$, $Q_1=3$, mediana $=5$, $Q_3=8$, máx $=20$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 3,
   "med": 5,
   "q3": 8,
   "max": 20,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El 50% central de los datos está entre 3 y 8 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la caja solo muestra el rango total de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Verdadera: la caja $Q_1$–$Q_3$ ($3$ a $8$) contiene al 50% central"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=3,\\ Me=5,\\ Q_3=8,\\ \\text{máx}=20.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 3,\\ \\text{mediana} = 5,\\ Q_3 = 8"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Correo · Paquetes",
  "enun": "El diagrama de caja muestra peso de paquetes (cientos de gramos). Mín $=5$, $Q_1=20$, mediana $=35$, $Q_3=50$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 20,
   "med": 35,
   "q3": 50,
   "max": 100,
   "unit": "cientos de gramos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 30 cientos de gramos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es la mediana menos $Q_1 = 15$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 95$",
   "Verdadera: $RIC = Q_3 - Q_1 = 50 - 20 = 30$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 95$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=20,\\ Me=35,\\ Q_3=50,\\ \\text{máx}=100.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 50 - 20 = 30"
  ],
  "conc": "VERDADERA: el RIC real es <b>30</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Correo · Paquetes",
  "enun": "El diagrama de caja muestra peso de paquetes (cientos de gramos). Mín $=5$, $Q_1=20$, mediana $=35$, $Q_3=50$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 20,
   "med": 35,
   "q3": 50,
   "max": 100,
   "unit": "cientos de gramos"
  },
  "ask": "Afirmación: \"La mediana es 30 cientos de gramos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la mediana es el punto medio del rango $= 52{,}5$",
   "Falsa: la mediana es la línea central de la caja, 35",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 52{,}5$",
   "Verdadera: la línea central de la caja está en 30"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=20,\\ Me=35,\\ Q_3=50,\\ \\text{máx}=100.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 35"
  ],
  "conc": "FALSA: la mediana real es <b>35</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Correo · Paquetes",
  "enun": "El diagrama de caja muestra peso de paquetes (cientos de gramos). Mín $=5$, $Q_1=20$, mediana $=35$, $Q_3=50$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 20,
   "med": 35,
   "q3": 50,
   "max": 100,
   "unit": "cientos de gramos"
  },
  "ask": "Afirmación: \"El valor máximo (100) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: todo valor fuera de la caja es atípico",
   "Falsa: 100 no supera la cerca de $95$",
   "Falsa: la cerca es $Q_3 + RIC = 80$",
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 50 + 45 = 95$ y $100 > 95$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=20,\\ Me=35,\\ Q_3=50,\\ \\text{máx}=100.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 50 + 45 = 95",
   "\\text{Comparación: } 100 > 95 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>95</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Correo · Paquetes",
  "enun": "El diagrama de caja muestra peso de paquetes (cientos de gramos). Mín $=5$, $Q_1=20$, mediana $=35$, $Q_3=50$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 20,
   "med": 35,
   "q3": 50,
   "max": 100,
   "unit": "cientos de gramos"
  },
  "ask": "Afirmación: \"El 75% de los datos es 50 cientos de gramos o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: $Q_3 = 50$ acumula el 75% abajo y deja el 25% arriba",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=20,\\ Me=35,\\ Q_3=50,\\ \\text{máx}=100.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 20,\\ \\text{mediana} = 35,\\ Q_3 = 50"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Admisión",
  "enun": "El diagrama de caja muestra puntajes de un examen de admisión (puntos). Mín $=350$, $Q_1=500$, mediana $=600$, $Q_3=700$, máx $=950$.",
  "chart": {
   "type": "box",
   "min": 350,
   "q1": 500,
   "med": 600,
   "q3": 700,
   "max": 950,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 200 puntos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 600$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 600$",
   "Verdadera: $RIC = Q_3 - Q_1 = 700 - 500 = 200$",
   "Falsa: el RIC es la mediana menos $Q_1 = 100$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=350,\\ Q_1=500,\\ Me=600,\\ Q_3=700,\\ \\text{máx}=950.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 700 - 500 = 200"
  ],
  "conc": "VERDADERA: el RIC real es <b>200</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Admisión",
  "enun": "El diagrama de caja muestra puntajes de un examen de admisión (puntos). Mín $=350$, $Q_1=500$, mediana $=600$, $Q_3=700$, máx $=950$.",
  "chart": {
   "type": "box",
   "min": 350,
   "q1": 500,
   "med": 600,
   "q3": 700,
   "max": 950,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"La mediana es 650 puntos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la mediana es el punto medio del rango $= 650$",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 650$",
   "Verdadera: la línea central de la caja está en 650",
   "Falsa: la mediana es la línea central de la caja, 600"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=350,\\ Q_1=500,\\ Me=600,\\ Q_3=700,\\ \\text{máx}=950.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 600"
  ],
  "conc": "FALSA: la mediana real es <b>600</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Admisión",
  "enun": "El diagrama de caja muestra puntajes de un examen de admisión (puntos). Mín $=350$, $Q_1=500$, mediana $=600$, $Q_3=700$, máx $=950$.",
  "chart": {
   "type": "box",
   "min": 350,
   "q1": 500,
   "med": 600,
   "q3": 700,
   "max": 950,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El valor mínimo (350) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la cerca es $Q_1 - 1{,}5\\cdot RIC = 500 - 300 = 200$ y $350 \\ge 200$, no la supera",
   "Verdadera: la cerca es $Q_1 - RIC = 300$",
   "Verdadera: 350 supera la cerca de $200$",
   "Falsa: todo valor fuera de la caja es atípico"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=350,\\ Q_1=500,\\ Me=600,\\ Q_3=700,\\ \\text{máx}=950.",
  "pautaSteps": [
   "Q_1 - 1{,}5\\cdot RIC = 500 - 300 = 200",
   "\\text{Comparación: } 350 \\ge 200 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>200</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Admisión",
  "enun": "El diagrama de caja muestra puntajes de un examen de admisión (puntos). Mín $=350$, $Q_1=500$, mediana $=600$, $Q_3=700$, máx $=950$.",
  "chart": {
   "type": "box",
   "min": 350,
   "q1": 500,
   "med": 600,
   "q3": 700,
   "max": 950,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El 25% de los datos es igual o superior a 700 puntos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: $Q_3 = 700$ acumula el 75% abajo y deja el 25% arriba",
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=350,\\ Q_1=500,\\ Me=600,\\ Q_3=700,\\ \\text{máx}=950.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 500,\\ \\text{mediana} = 600,\\ Q_3 = 700"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Servicio técnico · Reparaciones",
  "enun": "El diagrama de caja muestra tiempo de reparación (horas). Mín $=1$, $Q_1=4$, mediana $=6$, $Q_3=9$, máx $=20$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 4,
   "med": 6,
   "q3": 9,
   "max": 20,
   "unit": "horas"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 6 horas\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 19$",
   "Verdadera: $RIC = Q_3 - Q_1 = 6$",
   "Verdadera: el RIC es la mediana menos $Q_1 = 2$",
   "Falsa: $RIC = Q_3 - Q_1 = 5$, no 6"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=4,\\ Me=6,\\ Q_3=9,\\ \\text{máx}=20.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 9 - 4 = 5"
  ],
  "conc": "FALSA: el RIC real es <b>5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Servicio técnico · Reparaciones",
  "enun": "El diagrama de caja muestra tiempo de reparación (horas). Mín $=1$, $Q_1=4$, mediana $=6$, $Q_3=9$, máx $=20$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 4,
   "med": 6,
   "q3": 9,
   "max": 20,
   "unit": "horas"
  },
  "ask": "Afirmación: \"La mediana es 6 horas\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana es el promedio de $Q_1$ y $Q_3 = 6{,}5$",
   "Falsa: la mediana es el punto medio del rango $= 10{,}5$",
   "Verdadera: la línea central de la caja está en 6",
   "Verdadera: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 10{,}5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=4,\\ Me=6,\\ Q_3=9,\\ \\text{máx}=20.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 6"
  ],
  "conc": "VERDADERA: la mediana real es <b>6</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Servicio técnico · Reparaciones",
  "enun": "El diagrama de caja muestra tiempo de reparación (horas). Mín $=1$, $Q_1=4$, mediana $=6$, $Q_3=9$, máx $=20$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 4,
   "med": 6,
   "q3": 9,
   "max": 20,
   "unit": "horas"
  },
  "ask": "Afirmación: \"El valor máximo (20) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 9 + 7{,}5 = 16{,}5$ y $20 > 16{,}5$",
   "Verdadera: todo valor fuera de la caja es atípico",
   "Falsa: 20 no supera la cerca de $16{,}5$",
   "Falsa: la cerca es $Q_3 + RIC = 14$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=4,\\ Me=6,\\ Q_3=9,\\ \\text{máx}=20.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 9 + 7{,}5 = 16{,}5",
   "\\text{Comparación: } 20 > 16{,}5 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>16,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Servicio técnico · Reparaciones",
  "enun": "El diagrama de caja muestra tiempo de reparación (horas). Mín $=1$, $Q_1=4$, mediana $=6$, $Q_3=9$, máx $=20$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 4,
   "med": 6,
   "q3": 9,
   "max": 20,
   "unit": "horas"
  },
  "ask": "Afirmación: \"El 50% central de los datos está entre 4 y 9 horas\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la caja $Q_1$–$Q_3$ ($4$ a $9$) contiene al 50% central",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: la caja solo muestra el rango total de los datos"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=4,\\ Me=6,\\ Q_3=9,\\ \\text{máx}=20.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 4,\\ \\text{mediana} = 6,\\ Q_3 = 9"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Energía · Consumo",
  "enun": "El diagrama de caja muestra consumo eléctrico mensual (kWh). Mín $=80$, $Q_1=150$, mediana $=200$, $Q_3=260$, máx $=400$.",
  "chart": {
   "type": "box",
   "min": 80,
   "q1": 150,
   "med": 200,
   "q3": 260,
   "max": 400,
   "unit": "kWh"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 110 kWh\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 320$",
   "Verdadera: $RIC = Q_3 - Q_1 = 260 - 150 = 110$",
   "Falsa: el RIC es la mediana menos $Q_1 = 50$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 320$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=80,\\ Q_1=150,\\ Me=200,\\ Q_3=260,\\ \\text{máx}=400.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 260 - 150 = 110"
  ],
  "conc": "VERDADERA: el RIC real es <b>110</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Energía · Consumo",
  "enun": "El diagrama de caja muestra consumo eléctrico mensual (kWh). Mín $=80$, $Q_1=150$, mediana $=200$, $Q_3=260$, máx $=400$.",
  "chart": {
   "type": "box",
   "min": 80,
   "q1": 150,
   "med": 200,
   "q3": 260,
   "max": 400,
   "unit": "kWh"
  },
  "ask": "Afirmación: \"La mediana es 210 kWh\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 240$",
   "Verdadera: la línea central de la caja está en 210",
   "Falsa: la mediana es la línea central de la caja, 200",
   "Verdadera: la mediana es el punto medio del rango $= 240$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=80,\\ Q_1=150,\\ Me=200,\\ Q_3=260,\\ \\text{máx}=400.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 200"
  ],
  "conc": "FALSA: la mediana real es <b>200</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Energía · Consumo",
  "enun": "El diagrama de caja muestra consumo eléctrico mensual (kWh). Mín $=80$, $Q_1=150$, mediana $=200$, $Q_3=260$, máx $=400$.",
  "chart": {
   "type": "box",
   "min": 80,
   "q1": 150,
   "med": 200,
   "q3": 260,
   "max": 400,
   "unit": "kWh"
  },
  "ask": "Afirmación: \"El valor máximo (400) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: todo valor fuera de la caja es atípico",
   "Verdadera: la cerca es $Q_3 + RIC = 370$",
   "Falsa: la cerca es $Q_3 + 1{,}5\\cdot RIC = 260 + 165 = 425$ y $400 \\le 425$, no la supera",
   "Verdadera: 400 supera la cerca de $425$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=80,\\ Q_1=150,\\ Me=200,\\ Q_3=260,\\ \\text{máx}=400.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 260 + 165 = 425",
   "\\text{Comparación: } 400 \\le 425 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>425</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Energía · Consumo",
  "enun": "El diagrama de caja muestra consumo eléctrico mensual (kWh). Mín $=80$, $Q_1=150$, mediana $=200$, $Q_3=260$, máx $=400$.",
  "chart": {
   "type": "box",
   "min": 80,
   "q1": 150,
   "med": 200,
   "q3": 260,
   "max": 400,
   "unit": "kWh"
  },
  "ask": "Afirmación: \"El 25% de los datos es 150 kWh o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $Q_1 = 150$ deja el 25% de los datos por debajo",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=80,\\ Q_1=150,\\ Me=200,\\ Q_3=260,\\ \\text{máx}=400.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 150,\\ \\text{mediana} = 200,\\ Q_3 = 260"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Web · Tráfico",
  "enun": "El diagrama de caja muestra número de visitas al sitio web (miles). Mín $=2$, $Q_1=8$, mediana $=12$, $Q_3=18$, máx $=35$.",
  "chart": {
   "type": "box",
   "min": 2,
   "q1": 8,
   "med": 12,
   "q3": 18,
   "max": 35,
   "unit": "miles"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 10 miles\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 33$",
   "Verdadera: $RIC = Q_3 - Q_1 = 18 - 8 = 10$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 33$",
   "Falsa: el RIC es la mediana menos $Q_1 = 4$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=2,\\ Q_1=8,\\ Me=12,\\ Q_3=18,\\ \\text{máx}=35.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 18 - 8 = 10"
  ],
  "conc": "VERDADERA: el RIC real es <b>10</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Web · Tráfico",
  "enun": "El diagrama de caja muestra número de visitas al sitio web (miles). Mín $=2$, $Q_1=8$, mediana $=12$, $Q_3=18$, máx $=35$.",
  "chart": {
   "type": "box",
   "min": 2,
   "q1": 8,
   "med": 12,
   "q3": 18,
   "max": 35,
   "unit": "miles"
  },
  "ask": "Afirmación: \"La mediana es 14 miles\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana es la línea central de la caja, 12",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 18{,}5$",
   "Verdadera: la mediana es el punto medio del rango $= 18{,}5$",
   "Verdadera: la línea central de la caja está en 14"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=2,\\ Q_1=8,\\ Me=12,\\ Q_3=18,\\ \\text{máx}=35.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 12"
  ],
  "conc": "FALSA: la mediana real es <b>12</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Web · Tráfico",
  "enun": "El diagrama de caja muestra número de visitas al sitio web (miles). Mín $=2$, $Q_1=8$, mediana $=12$, $Q_3=18$, máx $=35$.",
  "chart": {
   "type": "box",
   "min": 2,
   "q1": 8,
   "med": 12,
   "q3": 18,
   "max": 35,
   "unit": "miles"
  },
  "ask": "Afirmación: \"El valor máximo (35) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: 35 no supera la cerca de $33$",
   "Falsa: la cerca es $Q_3 + RIC = 28$",
   "Verdadera: todo valor fuera de la caja es atípico",
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 18 + 15 = 33$ y $35 > 33$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=2,\\ Q_1=8,\\ Me=12,\\ Q_3=18,\\ \\text{máx}=35.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 18 + 15 = 33",
   "\\text{Comparación: } 35 > 33 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>33</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Web · Tráfico",
  "enun": "El diagrama de caja muestra número de visitas al sitio web (miles). Mín $=2$, $Q_1=8$, mediana $=12$, $Q_3=18$, máx $=35$.",
  "chart": {
   "type": "box",
   "min": 2,
   "q1": 8,
   "med": 12,
   "q3": 18,
   "max": 35,
   "unit": "miles"
  },
  "ask": "Afirmación: \"El 75% de los datos es 18 miles o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: $Q_3 = 18$ acumula el 75% abajo y deja el 25% arriba",
   "Falsa: los bigotes contienen al 50% central de los datos"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=2,\\ Q_1=8,\\ Me=12,\\ Q_3=18,\\ \\text{máx}=35.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 8,\\ \\text{mediana} = 12,\\ Q_3 = 18"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Hábitos de estudio",
  "enun": "El diagrama de caja muestra tiempo de estudio semanal (horas). Mín $=1$, $Q_1=6$, mediana $=10$, $Q_3=15$, máx $=25$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 6,
   "med": 10,
   "q3": 15,
   "max": 25,
   "unit": "horas"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 9 horas\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es la mediana menos $Q_1 = 4$",
   "Verdadera: $RIC = Q_3 - Q_1 = 15 - 6 = 9$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 24$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 24$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=6,\\ Me=10,\\ Q_3=15,\\ \\text{máx}=25.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 15 - 6 = 9"
  ],
  "conc": "VERDADERA: el RIC real es <b>9</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Hábitos de estudio",
  "enun": "El diagrama de caja muestra tiempo de estudio semanal (horas). Mín $=1$, $Q_1=6$, mediana $=10$, $Q_3=15$, máx $=25$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 6,
   "med": 10,
   "q3": 15,
   "max": 25,
   "unit": "horas"
  },
  "ask": "Afirmación: \"La mediana es 10 horas\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 13$",
   "Falsa: la mediana es el promedio de $Q_1$ y $Q_3 = 10{,}5$",
   "Falsa: la mediana es el punto medio del rango $= 13$",
   "Verdadera: la línea central de la caja está en 10"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=6,\\ Me=10,\\ Q_3=15,\\ \\text{máx}=25.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 10"
  ],
  "conc": "VERDADERA: la mediana real es <b>10</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Hábitos de estudio",
  "enun": "El diagrama de caja muestra tiempo de estudio semanal (horas). Mín $=1$, $Q_1=6$, mediana $=10$, $Q_3=15$, máx $=25$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 6,
   "med": 10,
   "q3": 15,
   "max": 25,
   "unit": "horas"
  },
  "ask": "Afirmación: \"El valor máximo (25) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: 25 supera la cerca de $28{,}5$",
   "Falsa: la cerca es $Q_3 + 1{,}5\\cdot RIC = 15 + 13{,}5 = 28{,}5$ y $25 \\le 28{,}5$, no la supera",
   "Falsa: todo valor fuera de la caja es atípico",
   "Verdadera: la cerca es $Q_3 + RIC = 24$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=6,\\ Me=10,\\ Q_3=15,\\ \\text{máx}=25.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 15 + 13{,}5 = 28{,}5",
   "\\text{Comparación: } 25 \\le 28{,}5 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>28,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Educación · Hábitos de estudio",
  "enun": "El diagrama de caja muestra tiempo de estudio semanal (horas). Mín $=1$, $Q_1=6$, mediana $=10$, $Q_3=15$, máx $=25$.",
  "chart": {
   "type": "box",
   "min": 1,
   "q1": 6,
   "med": 10,
   "q3": 15,
   "max": 25,
   "unit": "horas"
  },
  "ask": "Afirmación: \"El 50% central de los datos está entre 6 y 20 horas\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: los bigotes contienen al 50% central de los datos",
   "Falsa: cada bigote contiene el 10% de los datos",
   "Falsa: la caja va de $Q_1=6$ a $Q_3=15$, no de 6 a 20",
   "Verdadera: la caja $Q_1$–$Q_3$ ($6$ a $15$) contiene al 50% central"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=1,\\ Q_1=6,\\ Me=10,\\ Q_3=15,\\ \\text{máx}=25.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 6,\\ \\text{mediana} = 10,\\ Q_3 = 15"
  ],
  "conc": "FALSA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Inmobiliaria · Precios",
  "enun": "El diagrama de caja muestra precio de propiedades (millones de $). Mín $=40$, $Q_1=90$, mediana $=130$, $Q_3=180$, máx $=350$.",
  "chart": {
   "type": "box",
   "min": 40,
   "q1": 90,
   "med": 130,
   "q3": 180,
   "max": 350,
   "unit": "millones de $"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 90 millones de $\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es la mediana menos $Q_1 = 40$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 310$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 310$",
   "Verdadera: $RIC = Q_3 - Q_1 = 180 - 90 = 90$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=40,\\ Q_1=90,\\ Me=130,\\ Q_3=180,\\ \\text{máx}=350.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 180 - 90 = 90"
  ],
  "conc": "VERDADERA: el RIC real es <b>90</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Inmobiliaria · Precios",
  "enun": "El diagrama de caja muestra precio de propiedades (millones de $). Mín $=40$, $Q_1=90$, mediana $=130$, $Q_3=180$, máx $=350$.",
  "chart": {
   "type": "box",
   "min": 40,
   "q1": 90,
   "med": 130,
   "q3": 180,
   "max": 350,
   "unit": "millones de $"
  },
  "ask": "Afirmación: \"La mediana es 140 millones de $\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana es la línea central de la caja, 130",
   "Verdadera: la mediana es el punto medio del rango $= 195$",
   "Verdadera: la línea central de la caja está en 140",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 195$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=40,\\ Q_1=90,\\ Me=130,\\ Q_3=180,\\ \\text{máx}=350.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 130"
  ],
  "conc": "FALSA: la mediana real es <b>130</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Inmobiliaria · Precios",
  "enun": "El diagrama de caja muestra precio de propiedades (millones de $). Mín $=40$, $Q_1=90$, mediana $=130$, $Q_3=180$, máx $=350$.",
  "chart": {
   "type": "box",
   "min": 40,
   "q1": 90,
   "med": 130,
   "q3": 180,
   "max": 350,
   "unit": "millones de $"
  },
  "ask": "Afirmación: \"El valor máximo (350) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: todo valor fuera de la caja es atípico",
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 180 + 135 = 315$ y $350 > 315$",
   "Falsa: la cerca es $Q_3 + RIC = 270$",
   "Falsa: 350 no supera la cerca de $315$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=40,\\ Q_1=90,\\ Me=130,\\ Q_3=180,\\ \\text{máx}=350.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 180 + 135 = 315",
   "\\text{Comparación: } 350 > 315 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>315</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Inmobiliaria · Precios",
  "enun": "El diagrama de caja muestra precio de propiedades (millones de $). Mín $=40$, $Q_1=90$, mediana $=130$, $Q_3=180$, máx $=350$.",
  "chart": {
   "type": "box",
   "min": 40,
   "q1": 90,
   "med": 130,
   "q3": 180,
   "max": 350,
   "unit": "millones de $"
  },
  "ask": "Afirmación: \"El 25% de los datos es 90 millones de $ o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: $Q_1 = 90$ deja el 25% de los datos por debajo"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=40,\\ Q_1=90,\\ Me=130,\\ Q_3=180,\\ \\text{máx}=350.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 90,\\ \\text{mediana} = 130,\\ Q_3 = 180"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Transporte · Vuelos",
  "enun": "El diagrama de caja muestra retraso de vuelos (minutos). Mín $=0$, $Q_1=5$, mediana $=10$, $Q_3=20$, máx $=60$.",
  "chart": {
   "type": "box",
   "min": 0,
   "q1": 5,
   "med": 10,
   "q3": 20,
   "max": 60,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 15 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 60$",
   "Falsa: el RIC es la mediana menos $Q_1 = 5$",
   "Verdadera: $RIC = Q_3 - Q_1 = 20 - 5 = 15$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 60$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=0,\\ Q_1=5,\\ Me=10,\\ Q_3=20,\\ \\text{máx}=60.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 20 - 5 = 15"
  ],
  "conc": "VERDADERA: el RIC real es <b>15</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Transporte · Vuelos",
  "enun": "El diagrama de caja muestra retraso de vuelos (minutos). Mín $=0$, $Q_1=5$, mediana $=10$, $Q_3=20$, máx $=60$.",
  "chart": {
   "type": "box",
   "min": 0,
   "q1": 5,
   "med": 10,
   "q3": 20,
   "max": 60,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"La mediana es 12 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana es la línea central de la caja, 10",
   "Verdadera: la mediana es el punto medio del rango $= 30$",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 30$",
   "Verdadera: la línea central de la caja está en 12"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=0,\\ Q_1=5,\\ Me=10,\\ Q_3=20,\\ \\text{máx}=60.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 10"
  ],
  "conc": "FALSA: la mediana real es <b>10</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Transporte · Vuelos",
  "enun": "El diagrama de caja muestra retraso de vuelos (minutos). Mín $=0$, $Q_1=5$, mediana $=10$, $Q_3=20$, máx $=60$.",
  "chart": {
   "type": "box",
   "min": 0,
   "q1": 5,
   "med": 10,
   "q3": 20,
   "max": 60,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El valor máximo (60) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la cerca es $Q_3 + RIC = 35$",
   "Verdadera: todo valor fuera de la caja es atípico",
   "Falsa: 60 no supera la cerca de $42{,}5$",
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 20 + 22{,}5 = 42{,}5$ y $60 > 42{,}5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=0,\\ Q_1=5,\\ Me=10,\\ Q_3=20,\\ \\text{máx}=60.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 20 + 22{,}5 = 42{,}5",
   "\\text{Comparación: } 60 > 42{,}5 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>42,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Transporte · Vuelos",
  "enun": "El diagrama de caja muestra retraso de vuelos (minutos). Mín $=0$, $Q_1=5$, mediana $=10$, $Q_3=20$, máx $=60$.",
  "chart": {
   "type": "box",
   "min": 0,
   "q1": 5,
   "med": 10,
   "q3": 20,
   "max": 60,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El 25% de los datos es 5 minutos o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $Q_1 = 5$ deja el 25% de los datos por debajo",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=0,\\ Q_1=5,\\ Me=10,\\ Q_3=20,\\ \\text{máx}=60.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 5,\\ \\text{mediana} = 10,\\ Q_3 = 20"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Servicios · Satisfacción",
  "enun": "El diagrama de caja muestra calificaciones de satisfacción (0 a 100) (puntos). Mín $=40$, $Q_1=65$, mediana $=75$, $Q_3=85$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 40,
   "q1": 65,
   "med": 75,
   "q3": 85,
   "max": 100,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 20 puntos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 60$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 60$",
   "Verdadera: $RIC = Q_3 - Q_1 = 85 - 65 = 20$",
   "Falsa: el RIC es la mediana menos $Q_1 = 10$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=40,\\ Q_1=65,\\ Me=75,\\ Q_3=85,\\ \\text{máx}=100.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 85 - 65 = 20"
  ],
  "conc": "VERDADERA: el RIC real es <b>20</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Servicios · Satisfacción",
  "enun": "El diagrama de caja muestra calificaciones de satisfacción (0 a 100) (puntos). Mín $=40$, $Q_1=65$, mediana $=75$, $Q_3=85$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 40,
   "q1": 65,
   "med": 75,
   "q3": 85,
   "max": 100,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"La mediana es 80 puntos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la línea central de la caja está en 80",
   "Verdadera: la mediana es el punto medio del rango $= 70$",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 70$",
   "Falsa: la mediana es la línea central de la caja, 75"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=40,\\ Q_1=65,\\ Me=75,\\ Q_3=85,\\ \\text{máx}=100.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 75"
  ],
  "conc": "FALSA: la mediana real es <b>75</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Servicios · Satisfacción",
  "enun": "El diagrama de caja muestra calificaciones de satisfacción (0 a 100) (puntos). Mín $=40$, $Q_1=65$, mediana $=75$, $Q_3=85$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 40,
   "q1": 65,
   "med": 75,
   "q3": 85,
   "max": 100,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El valor mínimo (40) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la cerca es $Q_1 - 1{,}5\\cdot RIC = 65 - 30 = 35$ y $40 \\ge 35$, no la supera",
   "Verdadera: la cerca es $Q_1 - RIC = 45$",
   "Verdadera: 40 supera la cerca de $35$",
   "Falsa: todo valor fuera de la caja es atípico"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=40,\\ Q_1=65,\\ Me=75,\\ Q_3=85,\\ \\text{máx}=100.",
  "pautaSteps": [
   "Q_1 - 1{,}5\\cdot RIC = 65 - 30 = 35",
   "\\text{Comparación: } 40 \\ge 35 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>35</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Servicios · Satisfacción",
  "enun": "El diagrama de caja muestra calificaciones de satisfacción (0 a 100) (puntos). Mín $=40$, $Q_1=65$, mediana $=75$, $Q_3=85$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 40,
   "q1": 65,
   "med": 75,
   "q3": 85,
   "max": 100,
   "unit": "puntos"
  },
  "ask": "Afirmación: \"El 75% de los datos es 85 puntos o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Verdadera: $Q_3 = 85$ acumula el 75% abajo y deja el 25% arriba",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=40,\\ Q_1=65,\\ Me=75,\\ Q_3=85,\\ \\text{máx}=100.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 65,\\ \\text{mediana} = 75,\\ Q_3 = 85"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Neonatología",
  "enun": "El diagrama de caja muestra peso al nacer (cientos de gramos). Mín $=20$, $Q_1=28$, mediana $=32$, $Q_3=36$, máx $=45$.",
  "chart": {
   "type": "box",
   "min": 20,
   "q1": 28,
   "med": 32,
   "q3": 36,
   "max": 45,
   "unit": "cientos de gramos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 8 cientos de gramos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 25$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 25$",
   "Falsa: el RIC es la mediana menos $Q_1 = 4$",
   "Verdadera: $RIC = Q_3 - Q_1 = 36 - 28 = 8$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=20,\\ Q_1=28,\\ Me=32,\\ Q_3=36,\\ \\text{máx}=45.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 36 - 28 = 8"
  ],
  "conc": "VERDADERA: el RIC real es <b>8</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Neonatología",
  "enun": "El diagrama de caja muestra peso al nacer (cientos de gramos). Mín $=20$, $Q_1=28$, mediana $=32$, $Q_3=36$, máx $=45$.",
  "chart": {
   "type": "box",
   "min": 20,
   "q1": 28,
   "med": 32,
   "q3": 36,
   "max": 45,
   "unit": "cientos de gramos"
  },
  "ask": "Afirmación: \"La mediana es 34 cientos de gramos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la línea central de la caja está en 34",
   "Verdadera: la mediana es el punto medio del rango $= 32{,}5$",
   "Falsa: la mediana es la línea central de la caja, 32",
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 32{,}5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=20,\\ Q_1=28,\\ Me=32,\\ Q_3=36,\\ \\text{máx}=45.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 32"
  ],
  "conc": "FALSA: la mediana real es <b>32</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Neonatología",
  "enun": "El diagrama de caja muestra peso al nacer (cientos de gramos). Mín $=20$, $Q_1=28$, mediana $=32$, $Q_3=36$, máx $=45$.",
  "chart": {
   "type": "box",
   "min": 20,
   "q1": 28,
   "med": 32,
   "q3": 36,
   "max": 45,
   "unit": "cientos de gramos"
  },
  "ask": "Afirmación: \"El valor máximo (45) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: todo valor fuera de la caja es atípico",
   "Verdadera: 45 supera la cerca de $48$",
   "Falsa: la cerca es $Q_3 + 1{,}5\\cdot RIC = 36 + 12 = 48$ y $45 \\le 48$, no la supera",
   "Verdadera: la cerca es $Q_3 + RIC = 44$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=20,\\ Q_1=28,\\ Me=32,\\ Q_3=36,\\ \\text{máx}=45.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 36 + 12 = 48",
   "\\text{Comparación: } 45 \\le 48 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>48</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Salud · Neonatología",
  "enun": "El diagrama de caja muestra peso al nacer (cientos de gramos). Mín $=20$, $Q_1=28$, mediana $=32$, $Q_3=36$, máx $=45$.",
  "chart": {
   "type": "box",
   "min": 20,
   "q1": 28,
   "med": 32,
   "q3": 36,
   "max": 45,
   "unit": "cientos de gramos"
  },
  "ask": "Afirmación: \"El 50% central de los datos está entre 28 y 36 cientos de gramos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: la caja $Q_1$–$Q_3$ ($28$ a $36$) contiene al 50% central"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=20,\\ Q_1=28,\\ Me=32,\\ Q_3=36,\\ \\text{máx}=45.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 28,\\ \\text{mediana} = 32,\\ Q_3 = 36"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Deporte · Maratón",
  "enun": "El diagrama de caja muestra distancia recorrida por corredores (km). Mín $=5$, $Q_1=15$, mediana $=21$, $Q_3=28$, máx $=42$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 15,
   "med": 21,
   "q3": 28,
   "max": 42,
   "unit": "km"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 13 km\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $RIC = Q_3 - Q_1 = 28 - 15 = 13$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 37$",
   "Falsa: el RIC es la mediana menos $Q_1 = 6$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 37$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=15,\\ Me=21,\\ Q_3=28,\\ \\text{máx}=42.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 28 - 15 = 13"
  ],
  "conc": "VERDADERA: el RIC real es <b>13</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Deporte · Maratón",
  "enun": "El diagrama de caja muestra distancia recorrida por corredores (km). Mín $=5$, $Q_1=15$, mediana $=21$, $Q_3=28$, máx $=42$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 15,
   "med": 21,
   "q3": 28,
   "max": 42,
   "unit": "km"
  },
  "ask": "Afirmación: \"La mediana es 21 km\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana es el promedio de $Q_1$ y $Q_3 = 21{,}5$",
   "Verdadera: la línea central de la caja está en 21",
   "Verdadera: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 23{,}5$",
   "Falsa: la mediana es el punto medio del rango $= 23{,}5$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=15,\\ Me=21,\\ Q_3=28,\\ \\text{máx}=42.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 21"
  ],
  "conc": "VERDADERA: la mediana real es <b>21</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Deporte · Maratón",
  "enun": "El diagrama de caja muestra distancia recorrida por corredores (km). Mín $=5$, $Q_1=15$, mediana $=21$, $Q_3=28$, máx $=42$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 15,
   "med": 21,
   "q3": 28,
   "max": 42,
   "unit": "km"
  },
  "ask": "Afirmación: \"El valor máximo (42) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la cerca es $Q_3 + RIC = 41$",
   "Falsa: todo valor fuera de la caja es atípico",
   "Falsa: la cerca es $Q_3 + 1{,}5\\cdot RIC = 28 + 19{,}5 = 47{,}5$ y $42 \\le 47{,}5$, no la supera",
   "Verdadera: 42 supera la cerca de $47{,}5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=15,\\ Me=21,\\ Q_3=28,\\ \\text{máx}=42.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 28 + 19{,}5 = 47{,}5",
   "\\text{Comparación: } 42 \\le 47{,}5 \\Rightarrow \\text{no atípico}"
  ],
  "conc": "FALSA: la cerca vale <b>47,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Deporte · Maratón",
  "enun": "El diagrama de caja muestra distancia recorrida por corredores (km). Mín $=5$, $Q_1=15$, mediana $=21$, $Q_3=28$, máx $=42$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 15,
   "med": 21,
   "q3": 28,
   "max": 42,
   "unit": "km"
  },
  "ask": "Afirmación: \"El 25% de los datos supera 28 km\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: $Q_3 = 28$ acumula el 75% abajo y deja el 25% arriba",
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=15,\\ Me=21,\\ Q_3=28,\\ \\text{máx}=42.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 15,\\ \\text{mediana} = 21,\\ Q_3 = 28"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Tecnología · Apps",
  "enun": "El diagrama de caja muestra tiempo de uso diario de una app (minutos). Mín $=2$, $Q_1=15$, mediana $=25$, $Q_3=40$, máx $=90$.",
  "chart": {
   "type": "box",
   "min": 2,
   "q1": 15,
   "med": 25,
   "q3": 40,
   "max": 90,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 25 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $RIC = Q_3 - Q_1 = 40 - 15 = 25$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 88$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 88$",
   "Falsa: el RIC es la mediana menos $Q_1 = 10$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=2,\\ Q_1=15,\\ Me=25,\\ Q_3=40,\\ \\text{máx}=90.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 40 - 15 = 25"
  ],
  "conc": "VERDADERA: el RIC real es <b>25</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Tecnología · Apps",
  "enun": "El diagrama de caja muestra tiempo de uso diario de una app (minutos). Mín $=2$, $Q_1=15$, mediana $=25$, $Q_3=40$, máx $=90$.",
  "chart": {
   "type": "box",
   "min": 2,
   "q1": 15,
   "med": 25,
   "q3": 40,
   "max": 90,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"La mediana es 28 minutos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 46$",
   "Falsa: la mediana es la línea central de la caja, 25",
   "Verdadera: la mediana es el punto medio del rango $= 46$",
   "Verdadera: la línea central de la caja está en 28"
  ],
  "correct": 1,
  "pautaHead": "\\text{Boxplot: mín}=2,\\ Q_1=15,\\ Me=25,\\ Q_3=40,\\ \\text{máx}=90.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 25"
  ],
  "conc": "FALSA: la mediana real es <b>25</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Tecnología · Apps",
  "enun": "El diagrama de caja muestra tiempo de uso diario de una app (minutos). Mín $=2$, $Q_1=15$, mediana $=25$, $Q_3=40$, máx $=90$.",
  "chart": {
   "type": "box",
   "min": 2,
   "q1": 15,
   "med": 25,
   "q3": 40,
   "max": 90,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El valor máximo (90) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 40 + 37{,}5 = 77{,}5$ y $90 > 77{,}5$",
   "Falsa: 90 no supera la cerca de $77{,}5$",
   "Falsa: la cerca es $Q_3 + RIC = 65$",
   "Verdadera: todo valor fuera de la caja es atípico"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=2,\\ Q_1=15,\\ Me=25,\\ Q_3=40,\\ \\text{máx}=90.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 40 + 37{,}5 = 77{,}5",
   "\\text{Comparación: } 90 > 77{,}5 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>77,5</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "Tecnología · Apps",
  "enun": "El diagrama de caja muestra tiempo de uso diario de una app (minutos). Mín $=2$, $Q_1=15$, mediana $=25$, $Q_3=40$, máx $=90$.",
  "chart": {
   "type": "box",
   "min": 2,
   "q1": 15,
   "med": 25,
   "q3": 40,
   "max": 90,
   "unit": "minutos"
  },
  "ask": "Afirmación: \"El 25% de los datos es 15 minutos o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la caja solo muestra el rango total de los datos",
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Verdadera: $Q_1 = 15$ deja el 25% de los datos por debajo",
   "Falsa: los bigotes contienen al 50% central de los datos"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=2,\\ Q_1=15,\\ Me=25,\\ Q_3=40,\\ \\text{máx}=90.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 15,\\ \\text{mediana} = 25,\\ Q_3 = 40"
  ],
  "conc": "VERDADERA."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "E-commerce · Compras",
  "enun": "El diagrama de caja muestra monto de compra en una tienda online (miles de $). Mín $=5$, $Q_1=20$, mediana $=32$, $Q_3=50$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 20,
   "med": 32,
   "q3": 50,
   "max": 100,
   "unit": "miles de $"
  },
  "ask": "Afirmación: \"El rango intercuartílico (RIC) es 30 miles de $\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: $RIC = Q_3 - Q_1 = 50 - 20 = 30$",
   "Falsa: el RIC es la mediana menos $Q_1 = 12$",
   "Verdadera: el RIC es $\\text{máx} - \\text{mín} = 95$",
   "Falsa: el RIC es $\\text{máx} - \\text{mín} = 95$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=20,\\ Me=32,\\ Q_3=50,\\ \\text{máx}=100.",
  "pautaSteps": [
   "RIC = Q_3 - Q_1 = 50 - 20 = 30"
  ],
  "conc": "VERDADERA: el RIC real es <b>30</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "E-commerce · Compras",
  "enun": "El diagrama de caja muestra monto de compra en una tienda online (miles de $). Mín $=5$, $Q_1=20$, mediana $=32$, $Q_3=50$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 20,
   "med": 32,
   "q3": 50,
   "max": 100,
   "unit": "miles de $"
  },
  "ask": "Afirmación: \"La mediana es 32 miles de $\". ¿Verdadera o falsa?",
  "alts": [
   "Falsa: la mediana es el punto medio del rango $= 52{,}5$",
   "Verdadera: la mediana se calcula como $(\\text{mín}+\\text{máx})/2 = 52{,}5$",
   "Falsa: la mediana es el promedio de $Q_1$ y $Q_3 = 35$",
   "Verdadera: la línea central de la caja está en 32"
  ],
  "correct": 3,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=20,\\ Me=32,\\ Q_3=50,\\ \\text{máx}=100.",
  "pautaSteps": [
   "\\text{La mediana es la línea vertical dentro de la caja: } 32"
  ],
  "conc": "VERDADERA: la mediana real es <b>32</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "E-commerce · Compras",
  "enun": "El diagrama de caja muestra monto de compra en una tienda online (miles de $). Mín $=5$, $Q_1=20$, mediana $=32$, $Q_3=50$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 20,
   "med": 32,
   "q3": 50,
   "max": 100,
   "unit": "miles de $"
  },
  "ask": "Afirmación: \"El valor máximo (100) es un dato atípico según la regla de $1{,}5\\times RIC$\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: la cerca es $Q_3 + 1{,}5\\cdot RIC = 50 + 45 = 95$ y $100 > 95$",
   "Falsa: 100 no supera la cerca de $95$",
   "Verdadera: todo valor fuera de la caja es atípico",
   "Falsa: la cerca es $Q_3 + RIC = 80$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=20,\\ Me=32,\\ Q_3=50,\\ \\text{máx}=100.",
  "pautaSteps": [
   "Q_3 + 1{,}5\\cdot RIC = 50 + 45 = 95",
   "\\text{Comparación: } 100 > 95 \\Rightarrow \\text{atípico}"
  ],
  "conc": "VERDADERA: la cerca vale <b>95</b>."
 },
 {
  "tipo": "Lectura de boxplot · V/F",
  "ctx": "E-commerce · Compras",
  "enun": "El diagrama de caja muestra monto de compra en una tienda online (miles de $). Mín $=5$, $Q_1=20$, mediana $=32$, $Q_3=50$, máx $=100$.",
  "chart": {
   "type": "box",
   "min": 5,
   "q1": 20,
   "med": 32,
   "q3": 50,
   "max": 100,
   "unit": "miles de $"
  },
  "ask": "Afirmación: \"El 75% de los datos es 50 miles de $ o menos\". ¿Verdadera o falsa?",
  "alts": [
   "Verdadera: cada bigote contiene el 10% de los datos",
   "Falsa: los bigotes contienen al 50% central de los datos",
   "Verdadera: $Q_3 = 50$ acumula el 75% abajo y deja el 25% arriba",
   "Falsa: la caja solo muestra el rango total de los datos"
  ],
  "correct": 2,
  "pautaHead": "\\text{Boxplot: mín}=5,\\ Q_1=20,\\ Me=32,\\ Q_3=50,\\ \\text{máx}=100.",
  "pautaSteps": [
   "\\text{La caja } Q_1\\text{–}Q_3 \\text{ contiene el 50\\% central; cada sector externo acumula 25\\%}",
   "Q_1 = 20,\\ \\text{mediana} = 32,\\ Q_3 = 50"
  ],
  "conc": "VERDADERA."
 }
];
