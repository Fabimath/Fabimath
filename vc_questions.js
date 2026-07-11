// Banco de 100 ejercicios de Identificación y Clasificación de Variables (guía oficial Fabimath, 50 problemas x 2 tipos)
// Cada problema genera dos preguntas: "Identificar la variable" y "Clasificar la variable".
const VC_CLASES = ["Cualitativa nominal", "Cualitativa ordinal", "Cuantitativa continua", "Cuantitativa discreta"];
// clase: índice en VC_CLASES · v: variable correcta · d: distractores para identificar · razon: justificación de la pauta
const VC_RAW = [
{
ctx: "Salud · Banco de sangre",
enun: "Un hospital registra el tipo de sangre (A, B, AB u O) de cada paciente que ingresa a urgencias con el fin de planificar adecuadamente el banco de sangre.",
v: "El tipo de sangre del paciente",
d: ["Cada paciente que ingresa a urgencias", "El número de pacientes que ingresan por día", "La cantidad de sangre disponible en el banco"],
clase: 0,
razon: "las categorías (A, B, AB, O) son atributos sin orden ni magnitud; ninguna es «mayor» que otra."
},
{
ctx: "Educación · Prueba estandarizada",
enun: "Una prueba estandarizada clasifica el rendimiento de los estudiantes de enseñanza media en cuatro niveles de logro: Insuficiente, Elemental, Adecuado y Sobresaliente.",
v: "El nivel de logro del estudiante",
d: ["El puntaje exacto obtenido en la prueba", "Cada estudiante de enseñanza media", "El número de estudiantes evaluados"],
clase: 1,
razon: "las categorías tienen orden natural (Insuficiente < Elemental < Adecuado < Sobresaliente), pero sin una distancia numérica definida entre ellas."
},
{
ctx: "Salud · Maternidad",
enun: "En una sala de maternidad, se registra el peso de cada recién nacido (en gramos) al momento del parto, con el objetivo de detectar posibles casos de bajo peso al nacer.",
v: "El peso del recién nacido (en gramos)",
d: ["Cada recién nacido de la sala de maternidad", "El número de partos registrados", "La condición de bajo peso al nacer (sí o no)"],
clase: 2,
razon: "el peso puede tomar cualquier valor positivo dentro de un intervalo; hay infinitos valores posibles entre dos mediciones."
},
{
ctx: "Sociedad · Encuesta de hogares",
enun: "En una encuesta sobre composición del hogar, se pregunta a cada familia cuántos hijos menores de 18 años viven actualmente con ellos.",
v: "El número de hijos menores de 18 años en el hogar",
d: ["Cada familia encuestada", "La edad de los hijos del hogar", "La composición del hogar"],
clase: 3,
razon: "se cuentan individuos; los valores posibles son enteros no negativos (0, 1, 2, …) sin valores intermedios."
},
{
ctx: "Mercado · Encuesta de consumo",
enun: "Una empresa de cosméticos realiza una encuesta a sus clientes para conocer cuál de cinco opciones es la marca de shampoo que prefieren utilizar habitualmente.",
v: "La marca de shampoo preferida por el cliente",
d: ["Cada cliente encuestado", "El número de marcas disponibles", "La frecuencia de uso del shampoo"],
clase: 0,
razon: "las marcas son categorías cualitativas sin ningún orden jerárquico entre sí."
},
{
ctx: "Salud · Triage de urgencias",
enun: "En la sala de urgencias, el personal de triage registra el nivel de dolor reportado por cada paciente usando la escala: Sin dolor, Leve, Moderado o Severo.",
v: "El nivel de dolor reportado por el paciente",
d: ["Cada paciente atendido en triage", "El diagnóstico del paciente", "El tiempo de espera en urgencias"],
clase: 1,
razon: "existe un orden claro de intensidad (Sin dolor < Leve < Moderado < Severo), pero la diferencia entre categorías no es numéricamente uniforme."
},
{
ctx: "Clima · Estación meteorológica",
enun: "Una estación meteorológica registra la temperatura del aire (en grados Celsius) cada hora durante un mes completo para estudiar las variaciones climáticas estacionales.",
v: "La temperatura del aire (en °C)",
d: ["Cada hora del mes en que se mide", "La estación meteorológica", "El número de mediciones realizadas en el mes"],
clase: 2,
razon: "la temperatura puede tomar cualquier valor real dentro de su rango; admite decimales y valores intermedios entre dos observaciones."
},
{
ctx: "Educación · Redacción",
enun: "Un docente contabiliza la cantidad de errores ortográficos presentes en cada redacción entregada por sus estudiantes de primer año de enseñanza media.",
v: "La cantidad de errores ortográficos por redacción",
d: ["Cada redacción entregada", "La calidad de la redacción", "La nota obtenida en la redacción"],
clase: 3,
razon: "los errores se cuentan uno a uno; el resultado es siempre un número entero no negativo."
},
{
ctx: "Turismo · Registro de visitantes",
enun: "El Servicio Nacional de Turismo registra el país de origen de cada visitante extranjero que ingresa al país a través de los aeropuertos internacionales.",
v: "El país de origen del visitante",
d: ["Cada visitante extranjero", "El número de visitantes que ingresan", "El aeropuerto de ingreso al país"],
clase: 0,
razon: "los países son categorías que no admiten un orden natural entre ellas."
},
{
ctx: "Trabajo · Recursos humanos",
enun: "En una empresa se registra el nivel educacional máximo alcanzado por cada trabajador al momento de su incorporación: Educación básica, Media, Técnica o Universitaria.",
v: "El nivel educacional máximo del trabajador",
d: ["Cada trabajador de la empresa", "Los años de estudio cursados", "El cargo que ocupa el trabajador"],
clase: 1,
razon: "las categorías tienen un orden jerárquico claro (Básica < Media < Técnica < Universitaria), pero las diferencias entre niveles no son cuantificables."
},
{
ctx: "Salud · Control preventivo",
enun: "En un control preventivo de salud, se mide la presión arterial sistólica (en mmHg) de cada participante adulto mayor inscrito en el programa de salud cardiovascular.",
v: "La presión arterial sistólica (en mmHg)",
d: ["Cada adulto mayor del programa", "El diagnóstico de hipertensión (sí o no)", "El número de controles realizados"],
clase: 2,
razon: "es una magnitud física medida en una escala continua que puede asumir cualquier valor positivo real."
},
{
ctx: "Transporte · Seguridad vial",
enun: "Una municipalidad lleva un registro del número de accidentes de tránsito ocurridos en su territorio cada semana, con el fin de identificar períodos de mayor riesgo vial.",
v: "El número de accidentes de tránsito por semana",
d: ["Cada semana del registro municipal", "La gravedad de los accidentes", "La causa de cada accidente"],
clase: 3,
razon: "los accidentes se contabilizan; el resultado es siempre un entero no negativo y no pueden ocurrir 2,5 accidentes."
},
{
ctx: "Sociedad · Estudio sociológico",
enun: "En un estudio sociológico sobre identidad cultural, se registra la religión declarada por cada uno de los participantes de la muestra.",
v: "La religión declarada por el participante",
d: ["Cada participante de la muestra", "El nivel de religiosidad del participante", "El número de religiones presentes en la muestra"],
clase: 0,
razon: "las categorías religiosas (católica, evangélica, judía, sin religión, etc.) no tienen un orden lógico entre sí."
},
{
ctx: "Salud · Vida sana",
enun: "Un programa gubernamental de vida sana clasifica el nivel de actividad física de los participantes en cuatro categorías: Sedentario, Levemente activo, Moderadamente activo e Intensamente activo.",
v: "El nivel de actividad física del participante",
d: ["Cada participante del programa", "Las horas de ejercicio semanales", "El deporte practicado por el participante"],
clase: 1,
razon: "las cuatro categorías tienen una jerarquía de intensidad creciente, pero sin unidad de medida numérica que cuantifique la diferencia entre ellas."
},
{
ctx: "Logística · Reparto a domicilio",
enun: "Una empresa de reparto a domicilio registra el tiempo de entrega (en minutos) transcurrido desde que se despacha cada pedido hasta que llega al domicilio del cliente.",
v: "El tiempo de entrega del pedido (en minutos)",
d: ["Cada pedido despachado", "El número de pedidos entregados por día", "La distancia recorrida por el repartidor"],
clase: 2,
razon: "el tiempo es una magnitud continua; puede tomar cualquier valor real positivo, incluyendo fracciones de minuto."
},
{
ctx: "Transporte · Movilidad urbana",
enun: "En un estudio de movilidad urbana, se registra cuántos automóviles posee cada hogar encuestado en una ciudad metropolitana.",
v: "El número de automóviles del hogar",
d: ["Cada hogar encuestado", "La marca de los automóviles", "El uso que se da a los automóviles"],
clase: 3,
razon: "se cuentan vehículos; los valores posibles son enteros no negativos (0, 1, 2, …)."
},
{
ctx: "Trabajo · Mercado laboral",
enun: "En un censo del mercado del trabajo, se registra el tipo de contrato bajo el cual trabaja cada empleado encuestado: Indefinido, A plazo fijo u Honorarios.",
v: "El tipo de contrato del trabajador",
d: ["Cada empleado encuestado", "La antigüedad laboral del empleado", "El sueldo del trabajador"],
clase: 0,
razon: "las modalidades contractuales son categorías cualitativas que no poseen un orden jerárquico inherente."
},
{
ctx: "Finanzas · Calificación de bonos",
enun: "Una agencia calificadora asigna a cada bono corporativo un nivel de riesgo crediticio: Bajo, Moderado, Alto o Muy alto, según la probabilidad de incumplimiento del emisor.",
v: "El nivel de riesgo crediticio del bono",
d: ["Cada bono corporativo evaluado", "La probabilidad exacta de incumplimiento", "El monto del bono emitido"],
clase: 1,
razon: "las categorías (Bajo < Moderado < Alto < Muy alto) tienen un orden claro, pero sin una escala numérica precisa entre niveles."
},
{
ctx: "Salud · Laboratorio clínico",
enun: "En un laboratorio clínico, se mide la concentración de glucosa en sangre (en mg/dL) de pacientes en ayunas, con el fin de detectar posibles casos de diabetes mellitus.",
v: "La concentración de glucosa en sangre (en mg/dL)",
d: ["Cada paciente en ayunas", "El diagnóstico de diabetes (sí o no)", "El número de exámenes procesados"],
clase: 2,
razon: "es una magnitud bioquímica que puede asumir cualquier valor real positivo dentro del rango fisiológico y más allá."
},
{
ctx: "Cultura · Fomento lector",
enun: "Una biblioteca pública registra cuántos libros leyó cada usuario inscrito a lo largo del último año calendario, para evaluar el programa de fomento lector.",
v: "El número de libros leídos por el usuario en el año",
d: ["Cada usuario inscrito en la biblioteca", "El género de los libros leídos", "El tiempo dedicado a la lectura"],
clase: 3,
razon: "los libros se cuentan individualmente; el resultado es un entero no negativo."
},
{
ctx: "Salud · Encuesta nacional",
enun: "En una encuesta de salud nacional, se registra la macrozona de residencia de cada participante: Norte, Centro o Sur del país.",
v: "La macrozona de residencia del participante",
d: ["Cada participante de la encuesta", "La distancia al centro de salud más cercano", "El número de regiones del país"],
clase: 0,
razon: "Norte, Centro y Sur son etiquetas geográficas sin un orden natural único entre ellas."
},
{
ctx: "Salud · Satisfacción usuaria",
enun: "Tras ser atendido en un consultorio de atención primaria, cada paciente evalúa la calidad de la atención recibida: Muy mala, Mala, Buena o Muy buena.",
v: "La calidad de la atención percibida por el paciente",
d: ["Cada paciente atendido en el consultorio", "El tiempo de espera de la atención", "El profesional que realizó la atención"],
clase: 1,
razon: "las opciones tienen un orden de valoración creciente (Muy mala < Mala < Buena < Muy buena), aunque sin una distancia numérica definida."
},
{
ctx: "Clima · Hidrología",
enun: "En un estudio hidrológico, se registra el volumen de precipitaciones acumulado (en milímetros) durante cada mes del año en distintas estaciones pluviométricas del país.",
v: "El volumen mensual de precipitaciones (en mm)",
d: ["Cada estación pluviométrica", "El número de días con lluvia en el mes", "La estación del año"],
clase: 2,
razon: "las precipitaciones se miden en una escala continua; puede llover 23,7 mm o cualquier otro valor real no negativo."
},
{
ctx: "Emergencias · Gestión de turnos",
enun: "Una central de emergencias registra el número total de llamadas recibidas cada día para optimizar la dotación de personal en los distintos turnos.",
v: "El número de llamadas recibidas por día",
d: ["Cada día del registro", "La duración de cada llamada", "El motivo de cada llamada"],
clase: 3,
razon: "las llamadas se cuentan; el resultado es un entero no negativo sin valores fraccionarios posibles."
},
{
ctx: "Deporte · Natación",
enun: "En un campeonato nacional de natación, se registra la prueba en que compite cada deportista: estilo libre, pecho, espalda o mariposa.",
v: "La prueba en que compite el deportista",
d: ["Cada deportista del campeonato", "El tiempo que demora en completar la prueba", "El número de pruebas del campeonato"],
clase: 0,
razon: "los estilos (libre, pecho, espalda, mariposa) son categorías sin relación de orden entre sí."
},
{
ctx: "Mercado · Estudio de consumo",
enun: "En un estudio de consumo, cada hogar participante es clasificado según su nivel socioeconómico: Bajo, Medio-bajo, Medio, Medio-alto o Alto.",
v: "El nivel socioeconómico del hogar",
d: ["Cada hogar participante", "El ingreso exacto del hogar", "El número de integrantes del hogar"],
clase: 1,
razon: "las categorías representan niveles de bienestar con orden ascendente (Bajo < Medio-bajo < Medio < Medio-alto < Alto), sin que las diferencias sean numéricamente iguales."
},
{
ctx: "Agro · Ensayo agrícola",
enun: "En un ensayo agrícola, se mide el rendimiento del trigo cosechado en cada parcela experimental, expresado en toneladas por hectárea.",
v: "El rendimiento del trigo por hectárea (en ton/ha)",
d: ["Cada parcela experimental", "El número de parcelas sembradas", "El tipo de semilla utilizada"],
clase: 2,
razon: "el rendimiento puede asumir cualquier valor real positivo dentro de un intervalo; incluye valores decimales."
},
{
ctx: "Vivienda · Catastro habitacional",
enun: "En un catastro habitacional, se registra la cantidad de dormitorios que posee cada vivienda encuestada, para caracterizar la densidad de ocupación.",
v: "La cantidad de dormitorios de la vivienda",
d: ["Cada vivienda encuestada", "La superficie de la vivienda", "El material de construcción de la vivienda"],
clase: 3,
razon: "los dormitorios se cuentan; los valores son enteros positivos (1, 2, 3, …) y no existe un dormitorio fraccionario."
},
{
ctx: "Educación · Inclusión",
enun: "Un programa de inclusión educativa registra el idioma materno de cada estudiante extranjero matriculado: español, inglés, portugués, francés u otro.",
v: "El idioma materno del estudiante",
d: ["Cada estudiante extranjero matriculado", "El número de idiomas que habla el estudiante", "El país de origen del estudiante"],
clase: 0,
razon: "los idiomas son atributos cualitativos sin una jerarquía natural entre ellos."
},
{
ctx: "Comercio · Tienda en línea",
enun: "Una tienda en línea pide a sus clientes que califiquen su experiencia de compra tras recibir el pedido: Muy insatisfecho, Insatisfecho, Satisfecho o Muy satisfecho.",
v: "La satisfacción del cliente con la experiencia de compra",
d: ["Cada cliente que recibió su pedido", "El monto de la compra realizada", "El producto comprado"],
clase: 1,
razon: "las respuestas tienen un orden de satisfacción creciente (Muy insatisfecho < Insatisfecho < Satisfecho < Muy satisfecho) sin distancias numéricas equiparables."
},
{
ctx: "Clima · Monitoreo costero",
enun: "Una estación meteorológica costera mide la velocidad del viento (en km/h) cada 10 minutos durante una semana, para monitorear posibles condiciones adversas en el mar.",
v: "La velocidad del viento (en km/h)",
d: ["Cada medición de 10 minutos", "La dirección del viento", "El número de alertas emitidas"],
clase: 2,
razon: "la velocidad es una magnitud física continua; puede registrar, por ejemplo, 47,3 km/h o cualquier otro valor real no negativo."
},
{
ctx: "Deporte · Fútbol",
enun: "En un torneo de fútbol profesional, se registra el número de goles marcados por cada equipo participante a lo largo de toda la fase regular del campeonato.",
v: "El número de goles marcados por el equipo",
d: ["Cada equipo participante", "La posición del equipo en la tabla", "El rendimiento general del equipo"],
clase: 3,
razon: "los goles se contabilizan uno a uno; el resultado es siempre un entero no negativo."
},
{
ctx: "Salud · Hospital universitario",
enun: "En un hospital universitario, se registra la especialidad médica del doctor que atendió a cada paciente en su última consulta: Cardiología, Neurología, Traumatología, Pediatría u otra.",
v: "La especialidad médica que atendió al paciente",
d: ["Cada paciente atendido", "El número de consultas realizadas", "La duración de la consulta"],
clase: 0,
razon: "las especialidades médicas son categorías cualitativas sin un orden inherente entre ellas."
},
{
ctx: "Educación · Evaluación",
enun: "Tras rendir un examen de matemáticas, cada estudiante responde una encuesta en la que indica la dificultad percibida de la prueba: Muy fácil, Fácil, Difícil o Muy difícil.",
v: "La dificultad percibida del examen",
d: ["Cada estudiante que rindió el examen", "La nota obtenida en el examen", "El número de preguntas del examen"],
clase: 1,
razon: "las categorías expresan grados de dificultad con orden creciente (Muy fácil < Fácil < Difícil < Muy difícil), pero sin valores numéricos precisos."
},
{
ctx: "Tecnología · Auditoría informática",
enun: "En una auditoría informática empresarial, se registra el sistema operativo instalado en cada equipo de la compañía: Windows, macOS, Linux u otro.",
v: "El sistema operativo instalado en el equipo",
d: ["Cada equipo de la compañía", "La antigüedad del equipo", "El número de equipos auditados"],
clase: 0,
razon: "los sistemas operativos (Windows, macOS, Linux, etc.) son categorías cualitativas sin orden natural entre sí."
},
{
ctx: "Trabajo · Bienestar organizacional",
enun: "En un estudio de bienestar organizacional, los trabajadores de una empresa autoevalúan su nivel de estrés laboral: Sin estrés, Leve, Moderado o Severo.",
v: "El nivel de estrés laboral autopercibido",
d: ["Cada trabajador de la empresa", "Las horas trabajadas por semana", "El cargo del trabajador"],
clase: 1,
razon: "las categorías poseen una escala ordinal ascendente (Sin estrés < Leve < Moderado < Severo), pero sin unidad de medida numérica entre niveles."
},
{
ctx: "Agro · Fertilidad del suelo",
enun: "En un estudio de fertilidad del suelo, se mide el pH de muestras de suelo extraídas de distintos sectores de un predio agrícola para evaluar su aptitud de cultivo.",
v: "El pH de la muestra de suelo",
d: ["Cada muestra de suelo extraída", "El sector del predio muestreado", "El cultivo que se desea sembrar"],
clase: 2,
razon: "el pH es un valor numérico real que puede tomar cualquier valor en el intervalo [0, 14], con infinitos valores posibles entre dos mediciones."
},
{
ctx: "Telecomunicaciones · Servicio al cliente",
enun: "Una empresa de telecomunicaciones contabiliza el número de quejas formales recibidas en cada una de sus sucursales durante el último trimestre del año.",
v: "El número de quejas formales por sucursal en el trimestre",
d: ["Cada sucursal de la empresa", "El motivo de las quejas", "La satisfacción de los clientes"],
clase: 3,
razon: "las quejas se cuentan individualmente; el resultado es siempre un entero no negativo."
},
{
ctx: "Salud · Oncología",
enun: "Un oncólogo registra el estadio de avance del cáncer de cada paciente al momento del diagnóstico, según la clasificación TNM internacional: Estadio I, II, III o IV.",
v: "El estadio de avance del cáncer al momento del diagnóstico",
d: ["Cada paciente diagnosticado", "El tipo de cáncer del paciente", "El tamaño del tumor en centímetros"],
clase: 1,
razon: "los estadios (I, II, III, IV) tienen un orden ascendente de gravedad, pero la diferencia entre estadios no es numéricamente constante."
},
{
ctx: "Ciencia · Fisiología vegetal",
enun: "En un experimento de fisiología vegetal, se mide la concentración de dióxido de carbono (en ppm) en el interior de distintas cámaras de cultivo de plantas a lo largo del día.",
v: "La concentración de CO₂ en la cámara (en ppm)",
d: ["Cada cámara de cultivo", "El número de plantas por cámara", "La especie vegetal cultivada"],
clase: 2,
razon: "la concentración de CO₂ es una magnitud continua que puede asumir cualquier valor real no negativo; incluye valores decimales."
},
{
ctx: "Salud · Atención primaria",
enun: "El sistema de salud primaria registra cuántas veces consultó cada paciente a su médico de cabecera durante el año anterior, con el fin de estimar la demanda futura.",
v: "El número de consultas médicas del paciente en el año",
d: ["Cada paciente del sistema de salud", "El motivo de cada consulta", "El médico de cabecera asignado"],
clase: 3,
razon: "las consultas se cuentan; el resultado es un entero no negativo sin posibilidad de valores fraccionarios."
},
{
ctx: "Ciencia · Jardín botánico",
enun: "En un jardín botánico, se registra el color predominante de la flor de cada ejemplar de una especie estudiada: blanco, amarillo, rojo, rosado o violeta.",
v: "El color predominante de la flor del ejemplar",
d: ["Cada ejemplar de la especie estudiada", "El número de flores por planta", "El tamaño de la flor"],
clase: 0,
razon: "los colores (blanco, amarillo, rojo, rosado, violeta) son atributos cualitativos sin orden natural ni magnitud numérica."
},
{
ctx: "Sociedad · Condiciones de vida",
enun: "En una encuesta sobre condiciones de vida, se registra el ingreso mensual total del hogar (en pesos), considerando todas las fuentes de ingreso declaradas por los miembros.",
v: "El ingreso mensual total del hogar (en pesos)",
d: ["Cada hogar encuestado", "El número de personas que aportan ingreso", "El nivel socioeconómico del hogar"],
clase: 2,
razon: "el ingreso monetario puede tomar cualquier valor real no negativo, incluyendo decimales; no está restringido a enteros."
},
{
ctx: "Transporte · Fiscalización vial",
enun: "En un operativo de fiscalización vial, la policía registra el tipo de infracción cometida por cada conductor detenido: exceso de velocidad, no respetar señal, uso del teléfono u otra.",
v: "El tipo de infracción cometida por el conductor",
d: ["Cada conductor detenido", "El número de infracciones cursadas", "El monto de la multa"],
clase: 0,
razon: "los tipos de infracción son categorías cualitativas sin un orden jerárquico definido entre sí."
},
{
ctx: "Salud · Nutrición",
enun: "En un programa de salud preventiva, se calcula el índice de masa corporal (IMC, en kg/m²) de cada adulto participante para evaluar su estado nutricional.",
v: "El índice de masa corporal del participante (en kg/m²)",
d: ["Cada adulto participante", "El estado nutricional (bajo peso, normal, sobrepeso)", "El número de participantes del programa"],
clase: 2,
razon: "el IMC es un valor numérico calculado como cociente de dos magnitudes continuas; puede tomar cualquier valor real positivo."
},
{
ctx: "Trabajo · Desarrollo de competencias",
enun: "El área de recursos humanos de una empresa registra cuántas capacitaciones completó cada trabajador durante el año, como parte del plan de desarrollo de competencias.",
v: "El número de capacitaciones completadas por el trabajador en el año",
d: ["Cada trabajador de la empresa", "Las horas de duración de cada capacitación", "El tema de las capacitaciones"],
clase: 3,
razon: "las capacitaciones se cuentan una a una; el resultado es un entero no negativo."
},
{
ctx: "Educación · Egresados",
enun: "En un registro de egresados universitarios, se anota el área de conocimiento de la carrera cursada por cada titulado: Salud, Ingeniería, Humanidades, Ciencias Sociales o Arte.",
v: "El área de conocimiento de la carrera del titulado",
d: ["Cada titulado registrado", "El número de titulados por año", "La universidad de egreso"],
clase: 0,
razon: "las áreas de conocimiento (Salud, Ingeniería, Humanidades, etc.) son categorías cualitativas sin un orden natural entre ellas."
},
{
ctx: "Gobierno · Infraestructura",
enun: "Una municipalidad clasifica las obras de infraestructura pendientes según su nivel de urgencia: Baja, Media, Alta o Crítica, para priorizar la ejecución del presupuesto.",
v: "El nivel de urgencia de la obra",
d: ["Cada obra de infraestructura pendiente", "El costo estimado de la obra", "La comuna donde se ejecuta la obra"],
clase: 1,
razon: "las categorías (Baja < Media < Alta < Crítica) tienen un orden claro de prioridad creciente, pero sin una escala numérica uniforme entre niveles."
},
{
ctx: "Salud · Salud mental",
enun: "En un centro de salud mental, se registra cuántas sesiones de psicoterapia completó cada paciente durante su tratamiento, para evaluar la adherencia al programa terapéutico.",
v: "El número de sesiones de psicoterapia completadas",
d: ["Cada paciente en tratamiento", "La duración de cada sesión", "El diagnóstico del paciente"],
clase: 3,
razon: "las sesiones se cuentan individualmente; el resultado es un entero no negativo sin valores intermedios posibles."
},
{
ctx: "Sociedad · Convivencia ciudadana",
enun: "En una encuesta de convivencia ciudadana, cada residente evalúa su percepción de seguridad en el barrio donde vive: Muy inseguro, Inseguro, Seguro o Muy seguro.",
v: "La percepción de seguridad del residente en su barrio",
d: ["Cada residente encuestado", "El número de delitos ocurridos en el barrio", "La comuna de residencia"],
clase: 1,
razon: "las respuestas tienen un orden de seguridad percibida creciente (Muy inseguro < Inseguro < Seguro < Muy seguro), pero sin una distancia numérica cuantificable."
}
];

const VC_QUESTIONS = [];
VC_RAW.forEach(r => {
  VC_QUESTIONS.push({
    tipo: "Identificar la variable",
    ctx: r.ctx,
    enun: r.enun,
    ask: "Identifique la variable de estudio.",
    alts: [r.v, r.d[0], r.d[1], r.d[2]],
    correct: 0,
    pautaHead: "\\textbf{Variable de estudio: } \\text{la característica que se registra en cada unidad observada.}",
    pautaSteps: [
      "\\text{1. Reconoce la unidad de estudio: a quién o a qué se observa.}",
      "\\text{2. Identifica qué característica se registra de cada unidad.}"
    ],
    conc: `La variable de estudio es <b>${r.v.charAt(0).toLowerCase() + r.v.slice(1)}</b>: es lo que se registra para cada unidad observada. Las demás alternativas corresponden a la unidad de estudio o a datos del contexto.`
  });
  VC_QUESTIONS.push({
    tipo: "Clasificar la variable",
    ctx: r.ctx,
    enun: r.enun,
    ask: "Clasifique la variable según su naturaleza.",
    alts: VC_CLASES.slice(),
    correct: r.clase,
    pautaHead: "\\textbf{Clasificación: } \\text{cualitativa (nominal u ordinal) o cuantitativa (discreta o continua).}",
    pautaSteps: [
      "\\text{1. Decide si los valores son categorías o números: cualitativa o cuantitativa.}",
      "\\text{2. Cualitativa con orden natural: ordinal; sin orden: nominal.}",
      "\\text{3. Cuantitativa que se cuenta: discreta; que se mide: continua.}"
    ],
    conc: `<b>${VC_CLASES[r.clase]}</b>: ${r.razon}`
  });
});
