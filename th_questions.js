// Banco de 40 ejercicios de Test de Hipotesis (guias oficiales Fabimath)
const TH_QUESTIONS = [
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Veterinaria · Producción porcina",
"enun": "La norma establece que el peso promedio de cerdas Landrace adultas es 210 kg. Un productor sospecha que sus cerdas pesan más. Pesó 36 cerdas, promedio 217 kg. La desviación estándar poblacional es 24 kg. Con α=0,05, ¿el peso promedio supera el estándar?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 1{,}750\\;$ · se rechaza $H_0$",
"$\\;Z_c = 1{,}750\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}292\\;$ · se rechaza $H_0$",
"$\\;Z_c = −1{,}750\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=210,\\ \\bar{x}=217,\\ \\sigma=24,\\ n=36,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=210\\quad\\text{vs}\\quad H_1:\\mu>210",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{217-210}{24/\\sqrt{36}}=1{,}750",
"\\text{Región de rechazo: }Z_c > 1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=1{,}750\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 210 kg."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Veterinaria · Nefrología canina",
"enun": "La hemoglobina de referencia en perros sanos es 15 g/dL. Se sospecha que perros con enfermedad renal crónica tienen hemoglobina menor. En 25 perros el promedio fue 12,8 g/dL. La desviación estándar poblacional es 3,1 g/dL. Con α=0,01, ¿la hemoglobina media es inferior?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −3{,}548\\;$ · se rechaza $H_0$",
"$\\;Z_c = −3{,}548\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}710\\;$ · se rechaza $H_0$",
"$\\;Z_c = 3{,}548\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=15,\\ \\bar{x}=12{,}80,\\ \\sigma=3,1,\\ n=25,\\ \\alpha=0,01.",
"pautaSteps": [
"H_0:\\mu=15\\quad\\text{vs}\\quad H_1:\\mu<15",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{12{,}80-15}{3,1/\\sqrt{25}}=−3{,}548",
"\\text{Región de rechazo: }Z_c < −2{,}326\\quad(z_{crit}=2{,}326)",
"\\text{Como }Z_c=−3{,}548\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 15 g/dL."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Veterinaria · Bienestar animal",
"enun": "La temperatura corporal normal de bovinos es 38,5 °C. Se evalúa si 49 novillos bajo estrés por transporte tienen temperatura distinta. El promedio fue 39,1 °C y la desviación estándar poblacional 0,8 °C. Con α=0,05, ¿difiere de lo normal?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 5{,}250\\;$ · se rechaza $H_0$",
"$\\;Z_c = 5{,}250\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}750\\;$ · se rechaza $H_0$",
"$\\;Z_c = −5{,}250\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=38{,}50,\\ \\bar{x}=39{,}10,\\ \\sigma=0,8,\\ n=49,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=38{,}50\\quad\\text{vs}\\quad H_1:\\mu\\neq38{,}50",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{39{,}10-38{,}50}{0,8/\\sqrt{49}}=5{,}250",
"\\text{Región de rechazo: }|Z_c| > 1{,}960\\quad(z_{crit}=1{,}960)",
"\\text{Como }Z_c=5{,}250\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 38,50 °C."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Veterinaria · Reproducción felina",
"enun": "La gestación promedio en gatas es 65 días. Un criador sospecha gestaciones más cortas. En 16 gestaciones el promedio fue 62,5 días. La desviación estándar poblacional es 4 días. Con α=0,05, ¿son más cortas?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −2{,}500\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}500\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}625\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}500\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=65,\\ \\bar{x}=62{,}50,\\ \\sigma=4,\\ n=16,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=65\\quad\\text{vs}\\quad H_1:\\mu<65",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{62{,}50-65}{4/\\sqrt{16}}=−2{,}500",
"\\text{Región de rechazo: }Z_c < −1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=−2{,}500\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 65 días."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Veterinaria · Nutrición avícola",
"enun": "La ganancia diaria estándar en broilers es 58 g/día. Con un nuevo suplemento, en 64 pollos la ganancia promedio fue 61,3 g/día. La desviación estándar poblacional es 9 g/día. Con α=0,01, ¿aumentó la ganancia?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 2{,}933\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}933\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}367\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}933\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=58,\\ \\bar{x}=61{,}30,\\ \\sigma=9,\\ n=64,\\ \\alpha=0,01.",
"pautaSteps": [
"H_0:\\mu=58\\quad\\text{vs}\\quad H_1:\\mu>58",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{61{,}30-58}{9/\\sqrt{64}}=2{,}933",
"\\text{Región de rechazo: }Z_c > 2{,}326\\quad(z_{crit}=2{,}326)",
"\\text{Como }Z_c=2{,}933\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 58 g/día."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Veterinaria · Medicina equina",
"enun": "La glucosa plasmática en equinos sanos es 85 mg/dL. Se evalúa si 30 caballos de polo en competencia difieren. El promedio fue 91 mg/dL y la desviación estándar poblacional 14 mg/dL. Con α=0,05, ¿difiere del valor de referencia?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 2{,}347\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}347\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}429\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}347\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=85,\\ \\bar{x}=91,\\ \\sigma=14,\\ n=30,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=85\\quad\\text{vs}\\quad H_1:\\mu\\neq85",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{91-85}{14/\\sqrt{30}}=2{,}347",
"\\text{Región de rechazo: }|Z_c| > 1{,}960\\quad(z_{crit}=1{,}960)",
"\\text{Como }Z_c=2{,}347\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 85 mg/dL."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Enfermería · Urgencias",
"enun": "El tiempo de espera previo era 45 minutos. Tras un nuevo triaje, en 50 pacientes el promedio fue 47,8 minutos. La desviación estándar poblacional es 12 minutos. Con α=0,05, ¿aumentó el tiempo de espera?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 1{,}650\\;$ · se rechaza $H_0$",
"$\\;Z_c = 1{,}650\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}233\\;$ · se rechaza $H_0$",
"$\\;Z_c = −1{,}650\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=45,\\ \\bar{x}=47{,}80,\\ \\sigma=12,\\ n=50,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=45\\quad\\text{vs}\\quad H_1:\\mu>45",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{47{,}80-45}{12/\\sqrt{50}}=1{,}650",
"\\text{Región de rechazo: }Z_c > 1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=1{,}650\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 45 min."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Enfermería · Neumología",
"enun": "La SpO2 normal es al menos 97%. Se sospecha que adultos mayores con neumonía tienen menor saturación. En 40 pacientes el promedio fue 94,2%. La desviación estándar poblacional es 4,5%. Con α=0,01, ¿la saturación es inferior?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −3{,}935\\;$ · se rechaza $H_0$",
"$\\;Z_c = −3{,}935\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}622\\;$ · se rechaza $H_0$",
"$\\;Z_c = 3{,}935\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=97,\\ \\bar{x}=94{,}20,\\ \\sigma=4,5,\\ n=40,\\ \\alpha=0,01.",
"pautaSteps": [
"H_0:\\mu=97\\quad\\text{vs}\\quad H_1:\\mu<97",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{94{,}20-97}{4,5/\\sqrt{40}}=−3{,}935",
"\\text{Región de rechazo: }Z_c < −2{,}326\\quad(z_{crit}=2{,}326)",
"\\text{Como }Z_c=−3{,}935\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 97 %."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Enfermería · Endocrinología",
"enun": "La frecuencia cardíaca de referencia es 72 lpm. Se evalúa si pacientes con hipotiroidismo difieren. En 36 pacientes el promedio fue 68 lpm. La desviación estándar poblacional es 10 lpm. Con α=0,05, ¿difiere del valor de referencia?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −2{,}400\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}400\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}400\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}400\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=72,\\ \\bar{x}=68,\\ \\sigma=10,\\ n=36,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=72\\quad\\text{vs}\\quad H_1:\\mu\\neq72",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{68-72}{10/\\sqrt{36}}=−2{,}400",
"\\text{Región de rechazo: }|Z_c| > 1{,}960\\quad(z_{crit}=1{,}960)",
"\\text{Como }Z_c=−2{,}400\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 72 lpm."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Enfermería · Heridas",
"enun": "La cicatrización estándar de úlceras grado II es 21 días. Con un nuevo apósito, en 25 pacientes el promedio fue 18,4 días. La desviación estándar poblacional es 6 días. Con α=0,05, ¿reduce el tiempo de cicatrización?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −2{,}167\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}167\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}433\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}167\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=21,\\ \\bar{x}=18{,}40,\\ \\sigma=6,\\ n=25,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=21\\quad\\text{vs}\\quad H_1:\\mu<21",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{18{,}40-21}{6/\\sqrt{25}}=−2{,}167",
"\\text{Región de rechazo: }Z_c < −1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=−2{,}167\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 21 días."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Enfermería · Salud ocupacional",
"enun": "El cortisol basal sin estrés crónico es 18 µg/dL. Se postula que enfermeras de turno nocturno tienen cortisol mayor. En 49 enfermeras el promedio fue 20,6 µg/dL. La desviación estándar poblacional es 8 µg/dL. Con α=0,05, ¿el cortisol es mayor?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 2{,}275\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}275\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}325\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}275\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=18,\\ \\bar{x}=20{,}60,\\ \\sigma=8,\\ n=49,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=18\\quad\\text{vs}\\quad H_1:\\mu>18",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{20{,}60-18}{8/\\sqrt{49}}=2{,}275",
"\\text{Región de rechazo: }Z_c > 1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=2{,}275\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 18 µg/dL."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Enfermería · Manejo del dolor",
"enun": "La dosis media estándar es 120 mg de tramadol en 24 h. Se verifica si el servicio se ajusta. En 64 pacientes el promedio fue 114 mg. La desviación estándar poblacional es 28 mg. Con α=0,05, ¿difiere del estándar?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −1{,}714\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −1{,}714\\;$ · se rechaza $H_0$",
"$\\;Z_c = −0{,}214\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 1{,}714\\;$ · se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=120,\\ \\bar{x}=114,\\ \\sigma=28,\\ n=64,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=120\\quad\\text{vs}\\quad H_1:\\mu\\neq120",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{114-120}{28/\\sqrt{64}}=−1{,}714",
"\\text{Región de rechazo: }|Z_c| > 1{,}960\\quad(z_{crit}=1{,}960)",
"\\text{Como }Z_c=−1{,}714\\ \\text{no cae en la región de rechazo}\\Rightarrow \\text{no se rechaza }H_0"
],
"conc": "No se rechaza H₀: no hay evidencia de que la media difiera de 120 mg."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Obstetricia · Neonatología",
"enun": "El peso al nacer nacional es 3.350 g. Se evalúa si una clínica difiere. En 81 nacimientos el promedio fue 3.480 g. La desviación estándar poblacional es 450 g. Con α=0,05, ¿difiere del promedio nacional?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 2{,}600\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}600\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}289\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}600\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=3350,\\ \\bar{x}=3480,\\ \\sigma=450,\\ n=81,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=3350\\quad\\text{vs}\\quad H_1:\\mu\\neq3350",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{3480-3350}{450/\\sqrt{81}}=2{,}600",
"\\text{Región de rechazo: }|Z_c| > 1{,}960\\quad(z_{crit}=1{,}960)",
"\\text{Como }Z_c=2{,}600\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 3350 g."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Obstetricia · Alto riesgo",
"enun": "La edad gestacional promedio es 39,2 semanas. Se sospecha que embarazadas con lupus paren antes. En 25 partos el promedio fue 37,8 semanas. La desviación estándar poblacional es 2,5 semanas. Con α=0,05, ¿ocurren antes?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −2{,}800\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}800\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}560\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}800\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=39{,}20,\\ \\bar{x}=37{,}80,\\ \\sigma=2,5,\\ n=25,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=39{,}20\\quad\\text{vs}\\quad H_1:\\mu<39{,}20",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{37{,}80-39{,}20}{2,5/\\sqrt{25}}=−2{,}800",
"\\text{Región de rechazo: }Z_c < −1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=−2{,}800\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 39,20 semanas."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Obstetricia · Puerperio",
"enun": "El sangrado normal es 350 mL de loquios en 24 h. Se sospecha mayor sangrado con episiotomía amplia. En 36 puérperas el promedio fue 398 mL. La desviación estándar poblacional es 90 mL. Con α=0,05, ¿hay mayor sangrado?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 3{,}200\\;$ · se rechaza $H_0$",
"$\\;Z_c = 3{,}200\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}533\\;$ · se rechaza $H_0$",
"$\\;Z_c = −3{,}200\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=350,\\ \\bar{x}=398,\\ \\sigma=90,\\ n=36,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=350\\quad\\text{vs}\\quad H_1:\\mu>350",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{398-350}{90/\\sqrt{36}}=3{,}200",
"\\text{Región de rechazo: }Z_c > 1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=3{,}200\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 350 mL."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Obstetricia · Puericultura",
"enun": "Las tomas recomendadas son 8 al día. Se verifica si lactantes de madres primerizas se ajustan. En 49 lactantes el promedio fue 9,2 tomas. La desviación estándar poblacional es 2,1 tomas. Con α=0,01, ¿difiere de lo recomendado?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 4{,}000\\;$ · se rechaza $H_0$",
"$\\;Z_c = 4{,}000\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}571\\;$ · se rechaza $H_0$",
"$\\;Z_c = −4{,}000\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=8,\\ \\bar{x}=9{,}20,\\ \\sigma=2,1,\\ n=49,\\ \\alpha=0,01.",
"pautaSteps": [
"H_0:\\mu=8\\quad\\text{vs}\\quad H_1:\\mu\\neq8",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{9{,}20-8}{2,1/\\sqrt{49}}=4{,}000",
"\\text{Región de rechazo: }|Z_c| > 2{,}576\\quad(z_{crit}=2{,}576)",
"\\text{Como }Z_c=4{,}000\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 8 tomas."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Obstetricia · Salud perinatal",
"enun": "El perímetro cefálico normal es 34,5 cm. Se sospecha microcefalia relativa en una zona. En 64 neonatos el promedio fue 33,8 cm. La desviación estándar poblacional es 1,8 cm. Con α=0,01, ¿el perímetro es menor?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −3{,}111\\;$ · se rechaza $H_0$",
"$\\;Z_c = −3{,}111\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}389\\;$ · se rechaza $H_0$",
"$\\;Z_c = 3{,}111\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=34{,}50,\\ \\bar{x}=33{,}80,\\ \\sigma=1,8,\\ n=64,\\ \\alpha=0,01.",
"pautaSteps": [
"H_0:\\mu=34{,}50\\quad\\text{vs}\\quad H_1:\\mu<34{,}50",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{33{,}80-34{,}50}{1,8/\\sqrt{64}}=−3{,}111",
"\\text{Región de rechazo: }Z_c < −2{,}326\\quad(z_{crit}=2{,}326)",
"\\text{Como }Z_c=−3{,}111\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 34,50 cm."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Kinesiología · Deporte",
"enun": "La prensión palmar normativa es 45 kg. Se postula que rugbiers tienen mayor fuerza. En 36 jugadores el promedio fue 51 kg. La desviación estándar poblacional es 12 kg. Con α=0,05, ¿la fuerza es mayor?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = 3{,}000\\;$ · se rechaza $H_0$",
"$\\;Z_c = 3{,}000\\;$ · no se rechaza $H_0$",
"$\\;Z_c = 0{,}500\\;$ · se rechaza $H_0$",
"$\\;Z_c = −3{,}000\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=45,\\ \\bar{x}=51,\\ \\sigma=12,\\ n=36,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=45\\quad\\text{vs}\\quad H_1:\\mu>45",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{51-45}{12/\\sqrt{36}}=3{,}000",
"\\text{Región de rechazo: }Z_c > 1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=3{,}000\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 45 kg."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Kinesiología · Laboral",
"enun": "La extensibilidad normativa de isquiotibiales es 75°. Se sospecha menor extensibilidad por sedentarismo. En 40 trabajadores el promedio fue 69°. La desviación estándar poblacional es 12°. Con α=0,05, ¿es menor?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −3{,}162\\;$ · se rechaza $H_0$",
"$\\;Z_c = −3{,}162\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}500\\;$ · se rechaza $H_0$",
"$\\;Z_c = 3{,}162\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=75,\\ \\bar{x}=69,\\ \\sigma=12,\\ n=40,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=75\\quad\\text{vs}\\quad H_1:\\mu<75",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{69-75}{12/\\sqrt{40}}=−3{,}162",
"\\text{Región de rechazo: }Z_c < −1{,}645\\quad(z_{crit}=1{,}645)",
"\\text{Como }Z_c=−3{,}162\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 75 grados."
},
{
"tipo": "Media · σ conocida (Z)",
"ctx": "Kinesiología · Respiratoria",
"enun": "La CVF esperada es 3,2 litros. Se evalúa si pacientes con artritis reumatoide difieren. En 25 pacientes el promedio fue 2,9 litros. La desviación estándar poblacional es 0,6 litros. Con α=0,05, ¿difiere del valor esperado?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;Z_c = −2{,}500\\;$ · se rechaza $H_0$",
"$\\;Z_c = −2{,}500\\;$ · no se rechaza $H_0$",
"$\\;Z_c = −0{,}500\\;$ · se rechaza $H_0$",
"$\\;Z_c = 2{,}500\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=3{,}20,\\ \\bar{x}=2{,}90,\\ \\sigma=0,6,\\ n=25,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=3{,}20\\quad\\text{vs}\\quad H_1:\\mu\\neq3{,}20",
"Z_c=\\dfrac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}=\\dfrac{2{,}90-3{,}20}{0,6/\\sqrt{25}}=−2{,}500",
"\\text{Región de rechazo: }|Z_c| > 1{,}960\\quad(z_{crit}=1{,}960)",
"\\text{Como }Z_c=−2{,}500\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 3,20 litros."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Laboratorio clínico",
"enun": "La proteína total de referencia en perros sanos es 6,5 g/dL. Se sospecha nivel mayor en Rottweiler. En 13 perros el promedio fue 7,2 g/dL con desviación estándar muestral 1,1 g/dL. Con α=0,05, ¿el nivel proteico es superior?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 2{,}294\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}294\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}636\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}294\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=6{,}50,\\ \\bar{x}=7{,}20,\\ s=1,1,\\ n=13,\\ \\nu=12,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=6{,}50\\quad\\text{vs}\\quad H_1:\\mu>6{,}50",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{7{,}20-6{,}50}{1,1/\\sqrt{13}}=2{,}294",
"\\text{Región de rechazo: }T_c > 1{,}782\\quad(t_{crit}=1{,}782)",
"\\text{Como }T_c=2{,}294\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 6,50 g/dL."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Bienestar animal",
"enun": "La temperatura normal de conejos es 39,0 °C. Se sospecha menor temperatura por hacinamiento. En 10 conejos el promedio fue 38,2 °C con desviación estándar muestral 0,9 °C. Con α=0,05, ¿la temperatura es inferior?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −2{,}811\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}811\\;$ · no se rechaza $H_0$",
"$\\;T_c = −0{,}889\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}811\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=39,\\ \\bar{x}=38{,}20,\\ s=0,9,\\ n=10,\\ \\nu=9,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=39\\quad\\text{vs}\\quad H_1:\\mu<39",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{38{,}20-39}{0,9/\\sqrt{10}}=−2{,}811",
"\\text{Región de rechazo: }T_c < −1{,}833\\quad(t_{crit}=1{,}833)",
"\\text{Como }T_c=−2{,}811\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 39 °C."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Producción porcina",
"enun": "El peso al destete esperado es 6,2 kg. Se evalúa si un nuevo programa modifica el peso. En 16 lechones el promedio fue 6,9 kg con desviación estándar muestral 0,8 kg. Con α=0,05, ¿el peso difiere?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 3{,}500\\;$ · se rechaza $H_0$",
"$\\;T_c = 3{,}500\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}875\\;$ · se rechaza $H_0$",
"$\\;T_c = −3{,}500\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=6{,}20,\\ \\bar{x}=6{,}90,\\ s=0,8,\\ n=16,\\ \\nu=15,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=6{,}20\\quad\\text{vs}\\quad H_1:\\mu\\neq6{,}20",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{6{,}90-6{,}20}{0,8/\\sqrt{16}}=3{,}500",
"\\text{Región de rechazo: }|T_c| > 2{,}131\\quad(t_{crit}=2{,}131)",
"\\text{Como }T_c=3{,}500\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 6,20 kg."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Hematología felina",
"enun": "El recuento normal de eritrocitos es 7,5 (×10⁶/µL). Se sospecha anemia en gatos con enfermedad intestinal. En 9 gatos el promedio fue 6,8 con desviación estándar muestral 0,9. Con α=0,05, ¿hay anemia (recuento menor)?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −2{,}333\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}333\\;$ · no se rechaza $H_0$",
"$\\;T_c = −0{,}778\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}333\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=7{,}50,\\ \\bar{x}=6{,}80,\\ s=0,9,\\ n=9,\\ \\nu=8,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=7{,}50\\quad\\text{vs}\\quad H_1:\\mu<7{,}50",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{6{,}80-7{,}50}{0,9/\\sqrt{9}}=−2{,}333",
"\\text{Región de rechazo: }T_c < −1{,}860\\quad(t_{crit}=1{,}860)",
"\\text{Como }T_c=−2{,}333\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 7,50 ×10⁶/µL."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Nutrición avícola",
"enun": "La conversión alimenticia estándar es 1,80. Con un aditivo, en 20 parvadas el promedio fue 1,91 con desviación estándar muestral 0,18. Con α=0,05, ¿empeoró la conversión (aumentó)?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 2{,}733\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}733\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}611\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}733\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=1{,}80,\\ \\bar{x}=1{,}91,\\ s=0,18,\\ n=20,\\ \\nu=19,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=1{,}80\\quad\\text{vs}\\quad H_1:\\mu>1{,}80",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{1{,}91-1{,}80}{0,18/\\sqrt{20}}=2{,}733",
"\\text{Región de rechazo: }T_c > 1{,}729\\quad(t_{crit}=1{,}729)",
"\\text{Como }T_c=2{,}733\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 1,80 ."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Oftalmología",
"enun": "La presión intraocular normal en perros es 15 mmHg. Se evalúa si Cocker Spaniel difiere. En 12 perros el promedio fue 18 mmHg con desviación estándar muestral 4 mmHg. Con α=0,05, ¿la PIO difiere?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 2{,}598\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}598\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}750\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}598\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=15,\\ \\bar{x}=18,\\ s=4,\\ n=12,\\ \\nu=11,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=15\\quad\\text{vs}\\quad H_1:\\mu\\neq15",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{18-15}{4/\\sqrt{12}}=2{,}598",
"\\text{Región de rechazo: }|T_c| > 2{,}201\\quad(t_{crit}=2{,}201)",
"\\text{Como }T_c=2{,}598\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 15 mmHg."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Gestión de calidad",
"enun": "El tiempo de respuesta estándar es 4 minutos. Se sospecha tiempo mayor. En 11 llamados el promedio fue 5,8 minutos con desviación estándar muestral 2,2 minutos. Con α=0,05, ¿supera el estándar?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 2{,}714\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}714\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}818\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}714\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=4,\\ \\bar{x}=5{,}80,\\ s=2,2,\\ n=11,\\ \\nu=10,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=4\\quad\\text{vs}\\quad H_1:\\mu>4",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{5{,}80-4}{2,2/\\sqrt{11}}=2{,}714",
"\\text{Región de rechazo: }T_c > 1{,}812\\quad(t_{crit}=1{,}812)",
"\\text{Como }T_c=2{,}714\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 4 min."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Cardiología",
"enun": "La FC de referencia con betabloqueadores es 72 lpm. Se sospecha frecuencia menor. En 15 pacientes el promedio fue 65 lpm con desviación estándar muestral 9 lpm. Con α=0,05, ¿la FC es menor?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −3{,}012\\;$ · se rechaza $H_0$",
"$\\;T_c = −3{,}012\\;$ · no se rechaza $H_0$",
"$\\;T_c = −0{,}778\\;$ · se rechaza $H_0$",
"$\\;T_c = 3{,}012\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=72,\\ \\bar{x}=65,\\ s=9,\\ n=15,\\ \\nu=14,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=72\\quad\\text{vs}\\quad H_1:\\mu<72",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{65-72}{9/\\sqrt{15}}=−3{,}012",
"\\text{Región de rechazo: }T_c < −1{,}761\\quad(t_{crit}=1{,}761)",
"\\text{Como }T_c=−3{,}012\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 72 lpm."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Endocrinología",
"enun": "La glucemia preprandial de referencia es 110 mg/dL. Se verifica si difiere. En 10 pacientes el promedio fue 128 mg/dL con desviación estándar muestral 24 mg/dL. Con α=0,05, ¿la glucemia difiere?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 2{,}372\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}372\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}750\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}372\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=110,\\ \\bar{x}=128,\\ s=24,\\ n=10,\\ \\nu=9,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=110\\quad\\text{vs}\\quad H_1:\\mu\\neq110",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{128-110}{24/\\sqrt{10}}=2{,}372",
"\\text{Región de rechazo: }|T_c| > 2{,}262\\quad(t_{crit}=2{,}262)",
"\\text{Como }T_c=2{,}372\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 110 mg/dL."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Simulación clínica",
"enun": "El tiempo de colocación de vía es 8 minutos. Tras entrenamiento se postula menor tiempo. En 12 estudiantes el promedio fue 6,3 minutos con desviación estándar muestral 1,8 minutos. Con α=0,05, ¿se redujo el tiempo?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −3{,}272\\;$ · se rechaza $H_0$",
"$\\;T_c = −3{,}272\\;$ · no se rechaza $H_0$",
"$\\;T_c = −0{,}944\\;$ · se rechaza $H_0$",
"$\\;T_c = 3{,}272\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=8,\\ \\bar{x}=6{,}30,\\ s=1,8,\\ n=12,\\ \\nu=11,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=8\\quad\\text{vs}\\quad H_1:\\mu<8",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{6{,}30-8}{1,8/\\sqrt{12}}=−3{,}272",
"\\text{Región de rechazo: }T_c < −1{,}796\\quad(t_{crit}=1{,}796)",
"\\text{Como }T_c=−3{,}272\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 8 min."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Geriatría",
"enun": "La cantidad promedio de fármacos es 4,5. Se sospecha polifarmacia. En 8 pacientes el promedio fue 6,8 con desviación estándar muestral 2,1. Con α=0,10, ¿hay polifarmacia excesiva?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 3{,}098\\;$ · se rechaza $H_0$",
"$\\;T_c = 3{,}098\\;$ · no se rechaza $H_0$",
"$\\;T_c = 1{,}095\\;$ · se rechaza $H_0$",
"$\\;T_c = −3{,}098\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=4{,}50,\\ \\bar{x}=6{,}80,\\ s=2,1,\\ n=8,\\ \\nu=7,\\ \\alpha=0,10.",
"pautaSteps": [
"H_0:\\mu=4{,}50\\quad\\text{vs}\\quad H_1:\\mu>4{,}50",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{6{,}80-4{,}50}{2,1/\\sqrt{8}}=3{,}098",
"\\text{Región de rechazo: }T_c > 1{,}415\\quad(t_{crit}=1{,}415)",
"\\text{Como }T_c=3{,}098\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 4,50 fármacos."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Calidad y gestión",
"enun": "La satisfacción usuaria estándar es 7,8 puntos. Se evalúa si el servicio difiere. En 20 pacientes el promedio fue 8,4 puntos con desviación estándar muestral 1,3 puntos. Con α=0,05, ¿difiere del estándar?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 2{,}064\\;$ · no se rechaza $H_0$",
"$\\;T_c = 2{,}064\\;$ · se rechaza $H_0$",
"$\\;T_c = 0{,}462\\;$ · no se rechaza $H_0$",
"$\\;T_c = −2{,}064\\;$ · se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=7{,}80,\\ \\bar{x}=8{,}40,\\ s=1,3,\\ n=20,\\ \\nu=19,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=7{,}80\\quad\\text{vs}\\quad H_1:\\mu\\neq7{,}80",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{8{,}40-7{,}80}{1,3/\\sqrt{20}}=2{,}064",
"\\text{Región de rechazo: }|T_c| > 2{,}093\\quad(t_{crit}=2{,}093)",
"\\text{Como }T_c=2{,}064\\ \\text{no cae en la región de rechazo}\\Rightarrow \\text{no se rechaza }H_0"
],
"conc": "No se rechaza H₀: no hay evidencia de que la media difiera de 7,80 puntos."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Alto riesgo",
"enun": "La duración media del embarazo es 280 días. Se evalúa si embarazadas de alto riesgo difieren. En 11 fichas el promedio fue 271 días con desviación estándar muestral 14 días. Con α=0,05, ¿la duración difiere?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −2{,}132\\;$ · no se rechaza $H_0$",
"$\\;T_c = −2{,}132\\;$ · se rechaza $H_0$",
"$\\;T_c = −0{,}643\\;$ · no se rechaza $H_0$",
"$\\;T_c = 2{,}132\\;$ · se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=280,\\ \\bar{x}=271,\\ s=14,\\ n=11,\\ \\nu=10,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=280\\quad\\text{vs}\\quad H_1:\\mu\\neq280",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{271-280}{14/\\sqrt{11}}=−2{,}132",
"\\text{Región de rechazo: }|T_c| > 2{,}228\\quad(t_{crit}=2{,}228)",
"\\text{Como }T_c=−2{,}132\\ \\text{no cae en la región de rechazo}\\Rightarrow \\text{no se rechaza }H_0"
],
"conc": "No se rechaza H₀: no hay evidencia de que la media difiera de 280 días."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Neonatología",
"enun": "El Apgar promedio en parto eutócico es 8,5. Se sospecha puntaje menor con registro no reactivo. En 9 neonatos el promedio fue 7,2 con desviación estándar muestral 1,4. Con α=0,05, ¿el Apgar es inferior?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −2{,}786\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}786\\;$ · no se rechaza $H_0$",
"$\\;T_c = −0{,}929\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}786\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=8{,}50,\\ \\bar{x}=7{,}20,\\ s=1,4,\\ n=9,\\ \\nu=8,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=8{,}50\\quad\\text{vs}\\quad H_1:\\mu<8{,}50",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{7{,}20-8{,}50}{1,4/\\sqrt{9}}=−2{,}786",
"\\text{Región de rechazo: }T_c < −1{,}860\\quad(t_{crit}=1{,}860)",
"\\text{Como }T_c=−2{,}786\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 8,50 puntos."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Nutrición gestacional",
"enun": "La ganancia de peso recomendada es 12 kg. Se sospecha ganancia excesiva. En 15 embarazadas el promedio fue 15,2 kg con desviación estándar muestral 4,1 kg. Con α=0,05, ¿la ganancia es excesiva (mayor)?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 3{,}023\\;$ · se rechaza $H_0$",
"$\\;T_c = 3{,}023\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}780\\;$ · se rechaza $H_0$",
"$\\;T_c = −3{,}023\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=12,\\ \\bar{x}=15{,}20,\\ s=4,1,\\ n=15,\\ \\nu=14,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=12\\quad\\text{vs}\\quad H_1:\\mu>12",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{15{,}20-12}{4,1/\\sqrt{15}}=3{,}023",
"\\text{Región de rechazo: }T_c > 1{,}761\\quad(t_{crit}=1{,}761)",
"\\text{Como }T_c=3{,}023\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 12 kg."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Lactancia",
"enun": "La producción de leche a los 5 días es 500 mL/día. Se evalúa si tras cesárea electiva difiere. En 10 madres el promedio fue 420 mL con desviación estándar muestral 95 mL. Con α=0,05, ¿el volumen difiere?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −2{,}663\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}663\\;$ · no se rechaza $H_0$",
"$\\;T_c = −0{,}842\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}663\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=500,\\ \\bar{x}=420,\\ s=95,\\ n=10,\\ \\nu=9,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=500\\quad\\text{vs}\\quad H_1:\\mu\\neq500",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{420-500}{95/\\sqrt{10}}=−2{,}663",
"\\text{Región de rechazo: }|T_c| > 2{,}262\\quad(t_{crit}=2{,}262)",
"\\text{Como }T_c=−2{,}663\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 500 mL."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Perinatología",
"enun": "El peso placentario normal es 500 g. Se estudia si con RCIU es menor. En 8 placentas el promedio fue 388 g con desviación estándar muestral 72 g. Con α=0,01, ¿el peso placentario es menor?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −4{,}400\\;$ · se rechaza $H_0$",
"$\\;T_c = −4{,}400\\;$ · no se rechaza $H_0$",
"$\\;T_c = −1{,}556\\;$ · se rechaza $H_0$",
"$\\;T_c = 4{,}400\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=500,\\ \\bar{x}=388,\\ s=72,\\ n=8,\\ \\nu=7,\\ \\alpha=0,01.",
"pautaSteps": [
"H_0:\\mu=500\\quad\\text{vs}\\quad H_1:\\mu<500",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{388-500}{72/\\sqrt{8}}=−4{,}400",
"\\text{Región de rechazo: }T_c < −2{,}998\\quad(t_{crit}=2{,}998)",
"\\text{Como }T_c=−4{,}400\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 500 g."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Kinesiología · Deporte",
"enun": "El torque de cuádriceps normativo es 120 Nm. Se postula mayor torque en ciclistas. En 16 ciclistas el promedio fue 138 Nm con desviación estándar muestral 28 Nm. Con α=0,05, ¿el torque es mayor?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 2{,}571\\;$ · se rechaza $H_0$",
"$\\;T_c = 2{,}571\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}643\\;$ · se rechaza $H_0$",
"$\\;T_c = −2{,}571\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=120,\\ \\bar{x}=138,\\ s=28,\\ n=16,\\ \\nu=15,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=120\\quad\\text{vs}\\quad H_1:\\mu>120",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{138-120}{28/\\sqrt{16}}=2{,}571",
"\\text{Región de rechazo: }T_c > 1{,}753\\quad(t_{crit}=1{,}753)",
"\\text{Como }T_c=2{,}571\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media supera 120 Nm."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Kinesiología · Geriatría",
"enun": "El alcance funcional en adultos mayores sanos es 28 cm. Se sospecha menor alcance con antecedente de caídas. En 9 pacientes el promedio fue 21 cm con desviación estándar muestral 6 cm. Con α=0,05, ¿el alcance es menor?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = −3{,}500\\;$ · se rechaza $H_0$",
"$\\;T_c = −3{,}500\\;$ · no se rechaza $H_0$",
"$\\;T_c = −1{,}167\\;$ · se rechaza $H_0$",
"$\\;T_c = 3{,}500\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=28,\\ \\bar{x}=21,\\ s=6,\\ n=9,\\ \\nu=8,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=28\\quad\\text{vs}\\quad H_1:\\mu<28",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{21-28}{6/\\sqrt{9}}=−3{,}500",
"\\text{Región de rechazo: }T_c < −1{,}860\\quad(t_{crit}=1{,}860)",
"\\text{Como }T_c=−3{,}500\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: hay evidencia de que la media es inferior a 28 cm."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Kinesiología · Neurología",
"enun": "El tiempo de ciclo de marcha normal es 1,10 s. Se evalúa si pacientes con esclerosis múltiple difieren. En 12 pacientes el promedio fue 1,38 s con desviación estándar muestral 0,32 s. Con α=0,05, ¿el tiempo difiere?",
"ask": "El estadístico de prueba y la decisión correctos son:",
"alts": [
"$\\;T_c = 3{,}031\\;$ · se rechaza $H_0$",
"$\\;T_c = 3{,}031\\;$ · no se rechaza $H_0$",
"$\\;T_c = 0{,}875\\;$ · se rechaza $H_0$",
"$\\;T_c = −3{,}031\\;$ · no se rechaza $H_0$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu_0=1{,}10,\\ \\bar{x}=1{,}38,\\ s=0,32,\\ n=12,\\ \\nu=11,\\ \\alpha=0,05.",
"pautaSteps": [
"H_0:\\mu=1{,}10\\quad\\text{vs}\\quad H_1:\\mu\\neq1{,}10",
"T_c=\\dfrac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}=\\dfrac{1{,}38-1{,}10}{0,32/\\sqrt{12}}=3{,}031",
"\\text{Región de rechazo: }|T_c| > 2{,}201\\quad(t_{crit}=2{,}201)",
"\\text{Como }T_c=3{,}031\\ \\text{cae en la región de rechazo}\\Rightarrow \\text{se rechaza }H_0"
],
"conc": "Se rechaza H₀: la media difiere significativamente de 1,10 s."
}
];
