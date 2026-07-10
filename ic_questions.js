// Banco de 60 ejercicios de Intervalos de Confianza (guias oficiales Fabimath)
const IC_QUESTIONS = [
{
"tipo": "Media · σ conocida (z)",
"ctx": "Veterinaria · Biometría felina",
"enun": "Un veterinario desea estimar el peso promedio de gatos domésticos adultos. Seleccionó una muestra de 36 gatos, con peso promedio de 4,2 kg. Estudios previos indican que la desviación estándar poblacional del peso es de 0,9 kg. Construya un intervalo de confianza del 95% para la verdadera media del peso.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,3{,}906\\;;\\;4{,}494\\,\\right]$",
"$\\left[\\,4{,}151\\;;\\;4{,}249\\,\\right]$",
"$\\left[\\,4{,}050\\;;\\;4{,}350\\,\\right]$",
"$\\left[\\,3{,}814\\;;\\;4{,}586\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=36,\\ \\bar{x}=4{,}20,\\ \\sigma=0{,}90,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}960\\cdot\\dfrac{0,90}{\\sqrt{36}}=0{,}294\\ \\text{kg}",
"IC=4{,}20\\pm 0{,}294=\\left[\\,3{,}906\\;;\\;4{,}494\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 3,906 y 4,494 kg."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Veterinaria · Fisiología canina",
"enun": "En un estudio sobre la frecuencia cardíaca en reposo de perros Border Collie se monitoreó a 49 animales, con promedio de 82 latidos por minuto. La desviación estándar poblacional es de 7 lpm. Construya un intervalo de confianza del 99% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,79{,}424\\;;\\;84{,}576\\,\\right]$",
"$\\left[\\,81{,}632\\;;\\;82{,}368\\,\\right]$",
"$\\left[\\,81{,}000\\;;\\;83{,}000\\,\\right]$",
"$\\left[\\,80{,}040\\;;\\;83{,}960\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=49,\\ \\bar{x}=82,\\ \\sigma=7,\\ 99\\%\\Rightarrow z_{1-\\alpha/2}=2{,}576.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=2{,}576\\cdot\\dfrac{7}{\\sqrt{49}}=2{,}576\\ \\text{lpm}",
"IC=82\\pm 2{,}576=\\left[\\,79{,}424\\;;\\;84{,}576\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera media se encuentra en 79,424 y 84,576 lpm."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Veterinaria · Química clínica",
"enun": "Se estima el nivel promedio de glucosa en sangre de conejos de laboratorio. Una muestra de 25 conejos arrojó un promedio de 148 mg/dL. La desviación estándar poblacional es de 18 mg/dL. Determine el intervalo de confianza del 90% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,142{,}078\\;;\\;153{,}922\\,\\right]$",
"$\\left[\\,146{,}816\\;;\\;149{,}184\\,\\right]$",
"$\\left[\\,144{,}400\\;;\\;151{,}600\\,\\right]$",
"$\\left[\\,138{,}726\\;;\\;157{,}274\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=25,\\ \\bar{x}=148,\\ \\sigma=18,\\ 90\\%\\Rightarrow z_{1-\\alpha/2}=1{,}645.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}645\\cdot\\dfrac{18}{\\sqrt{25}}=5{,}922\\ \\text{mg/dL}",
"IC=148\\pm 5{,}922=\\left[\\,142{,}078\\;;\\;153{,}922\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera media se encuentra en 142,078 y 153,922 mg/dL."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Veterinaria · Producción bovina",
"enun": "Un veterinario estudia el peso al nacer de terneros Holstein. De 64 terneros obtuvo un peso promedio de 38,5 kg. La desviación estándar poblacional es de 4,2 kg. Construya un intervalo de confianza del 98% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,37{,}279\\;;\\;39{,}721\\,\\right]$",
"$\\left[\\,38{,}347\\;;\\;38{,}653\\,\\right]$",
"$\\left[\\,37{,}975\\;;\\;39{,}025\\,\\right]$",
"$\\left[\\,37{,}148\\;;\\;39{,}852\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=64,\\ \\bar{x}=38{,}50,\\ \\sigma=4{,}20,\\ 98\\%\\Rightarrow z_{1-\\alpha/2}=2{,}326.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=2{,}326\\cdot\\dfrac{4,20}{\\sqrt{64}}=1{,}221\\ \\text{kg}",
"IC=38{,}50\\pm 1{,}221=\\left[\\,37{,}279\\;;\\;39{,}721\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera media se encuentra en 37,279 y 39,721 kg."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Veterinaria · Avicultura",
"enun": "Se estudia la temperatura corporal promedio de pollos broiler bajo estrés térmico. La medición en 81 aves arrojó una temperatura media de 41,8 °C. La desviación estándar poblacional es de 0,6 °C. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,41{,}669\\;;\\;41{,}931\\,\\right]$",
"$\\left[\\,41{,}785\\;;\\;41{,}815\\,\\right]$",
"$\\left[\\,41{,}733\\;;\\;41{,}867\\,\\right]$",
"$\\left[\\,41{,}628\\;;\\;41{,}972\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=81,\\ \\bar{x}=41{,}80,\\ \\sigma=0{,}60,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}960\\cdot\\dfrac{0,60}{\\sqrt{81}}=0{,}131\\ \\text{°C}",
"IC=41{,}80\\pm 0{,}131=\\left[\\,41{,}669\\;;\\;41{,}931\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 41,669 y 41,931 °C."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Enfermería · Cardiología",
"enun": "Se estima la presión arterial sistólica media de adultos mayores hospitalizados. Los registros de 100 pacientes mostraron una presión promedio de 138 mmHg. La desviación estándar poblacional es de 15 mmHg. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,135{,}060\\;;\\;140{,}940\\,\\right]$",
"$\\left[\\,137{,}706\\;;\\;138{,}294\\,\\right]$",
"$\\left[\\,136{,}500\\;;\\;139{,}500\\,\\right]$",
"$\\left[\\,134{,}136\\;;\\;141{,}864\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=100,\\ \\bar{x}=138,\\ \\sigma=15,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}960\\cdot\\dfrac{15}{\\sqrt{100}}=2{,}940\\ \\text{mmHg}",
"IC=138\\pm 2{,}940=\\left[\\,135{,}060\\;;\\;140{,}940\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 135,060 y 140,940 mmHg."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Enfermería · Urgencias",
"enun": "Se registró la saturación de oxígeno (SpO2) de 40 pacientes con síntomas respiratorios agudos, con promedio de 93,4%. La desviación estándar poblacional es de 3,1%. Determine el intervalo de confianza del 99% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,92{,}137\\;;\\;94{,}663\\,\\right]$",
"$\\left[\\,93{,}200\\;;\\;93{,}600\\,\\right]$",
"$\\left[\\,92{,}910\\;;\\;93{,}890\\,\\right]$",
"$\\left[\\,92{,}439\\;;\\;94{,}361\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=40,\\ \\bar{x}=93{,}40,\\ \\sigma=3{,}10,\\ 99\\%\\Rightarrow z_{1-\\alpha/2}=2{,}576.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=2{,}576\\cdot\\dfrac{3,10}{\\sqrt{40}}=1{,}263\\ \\text{%}",
"IC=93{,}40\\pm 1{,}263=\\left[\\,92{,}137\\;;\\;94{,}663\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera media se encuentra en 92,137 y 94,663 %."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Enfermería · Gestión clínica",
"enun": "Se estima el tiempo promedio de administración de medicamentos endovenosos. Se cronometraron 50 procedimientos, con promedio de 12,3 minutos. La desviación estándar poblacional es de 2,5 minutos. Construya un intervalo de confianza del 90% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,11{,}718\\;;\\;12{,}882\\,\\right]$",
"$\\left[\\,12{,}218\\;;\\;12{,}382\\,\\right]$",
"$\\left[\\,11{,}946\\;;\\;12{,}654\\,\\right]$",
"$\\left[\\,11{,}389\\;;\\;13{,}211\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=50,\\ \\bar{x}=12{,}30,\\ \\sigma=2{,}50,\\ 90\\%\\Rightarrow z_{1-\\alpha/2}=1{,}645.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}645\\cdot\\dfrac{2,50}{\\sqrt{50}}=0{,}582\\ \\text{min}",
"IC=12{,}30\\pm 0{,}582=\\left[\\,11{,}718\\;;\\;12{,}882\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera media se encuentra en 11,718 y 12,882 min."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Enfermería · Neumología",
"enun": "Se estudia la frecuencia respiratoria en reposo de adultos con neumonía leve. En 36 pacientes se obtuvo una media de 22 respiraciones por minuto. La desviación estándar poblacional es de 4 rpm. Construya un intervalo de confianza del 98% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,20{,}449\\;;\\;23{,}551\\,\\right]$",
"$\\left[\\,21{,}742\\;;\\;22{,}258\\,\\right]$",
"$\\left[\\,21{,}333\\;;\\;22{,}667\\,\\right]$",
"$\\left[\\,20{,}283\\;;\\;23{,}717\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=36,\\ \\bar{x}=22,\\ \\sigma=4,\\ 98\\%\\Rightarrow z_{1-\\alpha/2}=2{,}326.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=2{,}326\\cdot\\dfrac{4}{\\sqrt{36}}=1{,}551\\ \\text{rpm}",
"IC=22\\pm 1{,}551=\\left[\\,20{,}449\\;;\\;23{,}551\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera media se encuentra en 20,449 y 23,551 rpm."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Enfermería · Endocrinología",
"enun": "Se midió la hemoglobina glicosilada (HbA1c) de 60 pacientes diabéticos, con promedio de 7,8%. La desviación estándar poblacional es de 1,2%. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,7{,}496\\;;\\;8{,}104\\,\\right]$",
"$\\left[\\,7{,}761\\;;\\;7{,}839\\,\\right]$",
"$\\left[\\,7{,}645\\;;\\;7{,}955\\,\\right]$",
"$\\left[\\,7{,}401\\;;\\;8{,}199\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=60,\\ \\bar{x}=7{,}80,\\ \\sigma=1{,}20,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}960\\cdot\\dfrac{1,20}{\\sqrt{60}}=0{,}304\\ \\text{%}",
"IC=7{,}80\\pm 0{,}304=\\left[\\,7{,}496\\;;\\;8{,}104\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 7,496 y 8,104 %."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Obstetricia · Neonatología",
"enun": "Una matrona investiga el peso al nacer de recién nacidos de término. El análisis de 80 nacimientos arrojó un peso promedio de 3,42 kg. La desviación estándar poblacional es de 0,38 kg. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,3{,}337\\;;\\;3{,}503\\,\\right]$",
"$\\left[\\,3{,}411\\;;\\;3{,}429\\,\\right]$",
"$\\left[\\,3{,}378\\;;\\;3{,}462\\,\\right]$",
"$\\left[\\,3{,}311\\;;\\;3{,}529\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=80,\\ \\bar{x}=3{,}42,\\ \\sigma=0{,}38,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}960\\cdot\\dfrac{0,38}{\\sqrt{80}}=0{,}083\\ \\text{kg}",
"IC=3{,}42\\pm 0{,}083=\\left[\\,3{,}337\\;;\\;3{,}503\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 3,337 y 3,503 kg."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Obstetricia · Obstetricia",
"enun": "Se estudia la duración del trabajo de parto activo en primíparas. Una revisión de 45 fichas mostró un promedio de 8,6 horas. La desviación estándar poblacional es de 1,8 horas. Determine el intervalo de confianza del 99% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,7{,}909\\;;\\;9{,}291\\,\\right]$",
"$\\left[\\,8{,}497\\;;\\;8{,}703\\,\\right]$",
"$\\left[\\,8{,}332\\;;\\;8{,}868\\,\\right]$",
"$\\left[\\,8{,}074\\;;\\;9{,}126\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=45,\\ \\bar{x}=8{,}60,\\ \\sigma=1{,}80,\\ 99\\%\\Rightarrow z_{1-\\alpha/2}=2{,}576.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=2{,}576\\cdot\\dfrac{1,80}{\\sqrt{45}}=0{,}691\\ \\text{horas}",
"IC=8{,}60\\pm 0{,}691=\\left[\\,7{,}909\\;;\\;9{,}291\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera media se encuentra en 7,909 y 9,291 horas."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Obstetricia · Biometría neonatal",
"enun": "Una matrona estima la talla al nacer. Se midieron 55 neonatos de término, con talla promedio de 49,8 cm. La desviación estándar poblacional es de 2,1 cm. Construya un intervalo de confianza del 90% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,49{,}334\\;;\\;50{,}266\\,\\right]$",
"$\\left[\\,49{,}737\\;;\\;49{,}863\\,\\right]$",
"$\\left[\\,49{,}517\\;;\\;50{,}083\\,\\right]$",
"$\\left[\\,49{,}071\\;;\\;50{,}529\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=55,\\ \\bar{x}=49{,}80,\\ \\sigma=2{,}10,\\ 90\\%\\Rightarrow z_{1-\\alpha/2}=1{,}645.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}645\\cdot\\dfrac{2,10}{\\sqrt{55}}=0{,}466\\ \\text{cm}",
"IC=49{,}80\\pm 0{,}466=\\left[\\,49{,}334\\;;\\;50{,}266\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera media se encuentra en 49,334 y 50,266 cm."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Obstetricia · Perinatología",
"enun": "Se estima la edad gestacional media de los partos de un hospital. La revisión de 120 fichas mostró una edad gestacional promedio de 38,7 semanas. La desviación estándar poblacional es de 1,4 semanas. Construya un intervalo de confianza del 98% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,38{,}403\\;;\\;38{,}997\\,\\right]$",
"$\\left[\\,38{,}673\\;;\\;38{,}727\\,\\right]$",
"$\\left[\\,38{,}572\\;;\\;38{,}828\\,\\right]$",
"$\\left[\\,38{,}371\\;;\\;39{,}029\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=120,\\ \\bar{x}=38{,}70,\\ \\sigma=1{,}40,\\ 98\\%\\Rightarrow z_{1-\\alpha/2}=2{,}326.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=2{,}326\\cdot\\dfrac{1,40}{\\sqrt{120}}=0{,}297\\ \\text{semanas}",
"IC=38{,}70\\pm 0{,}297=\\left[\\,38{,}403\\;;\\;38{,}997\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera media se encuentra en 38,403 y 38,997 semanas."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Obstetricia · Diabetes y embarazo",
"enun": "Una matrona estudia el perímetro cefálico al nacer de hijos de madres con diabetes gestacional. En 38 neonatos el perímetro promedio fue de 34,5 cm. La desviación estándar poblacional es de 1,6 cm. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,33{,}991\\;;\\;35{,}009\\,\\right]$",
"$\\left[\\,34{,}417\\;;\\;34{,}583\\,\\right]$",
"$\\left[\\,34{,}240\\;;\\;34{,}760\\,\\right]$",
"$\\left[\\,33{,}831\\;;\\;35{,}169\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=38,\\ \\bar{x}=34{,}50,\\ \\sigma=1{,}60,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}960\\cdot\\dfrac{1,60}{\\sqrt{38}}=0{,}509\\ \\text{cm}",
"IC=34{,}50\\pm 0{,}509=\\left[\\,33{,}991\\;;\\;35{,}009\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 33,991 y 35,009 cm."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Kinesiología · Rehabilitación",
"enun": "Se estima el rango de movimiento en flexión de rodilla tras cirugía de LCA. En 30 pacientes se registró un promedio de 112,4°. La desviación estándar poblacional es de 9,8°. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,108{,}893\\;;\\;115{,}907\\,\\right]$",
"$\\left[\\,111{,}760\\;;\\;113{,}040\\,\\right]$",
"$\\left[\\,110{,}611\\;;\\;114{,}189\\,\\right]$",
"$\\left[\\,107{,}791\\;;\\;117{,}009\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=30,\\ \\bar{x}=112{,}40,\\ \\sigma=9{,}80,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}960\\cdot\\dfrac{9,80}{\\sqrt{30}}=3{,}507\\ \\text{grados}",
"IC=112{,}40\\pm 3{,}507=\\left[\\,108{,}893\\;;\\;115{,}907\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 108,893 y 115,907 grados."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Kinesiología · Traumatología",
"enun": "Se estima el tiempo de recuperación de esguince de tobillo grado II. En 44 pacientes el tiempo promedio fue de 5,3 semanas. La desviación estándar poblacional es de 1,2 semanas. Construya un intervalo de confianza del 99% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,4{,}834\\;;\\;5{,}766\\,\\right]$",
"$\\left[\\,5{,}230\\;;\\;5{,}370\\,\\right]$",
"$\\left[\\,5{,}119\\;;\\;5{,}481\\,\\right]$",
"$\\left[\\,4{,}945\\;;\\;5{,}655\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=44,\\ \\bar{x}=5{,}30,\\ \\sigma=1{,}20,\\ 99\\%\\Rightarrow z_{1-\\alpha/2}=2{,}576.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=2{,}576\\cdot\\dfrac{1,20}{\\sqrt{44}}=0{,}466\\ \\text{semanas}",
"IC=5{,}30\\pm 0{,}466=\\left[\\,4{,}834\\;;\\;5{,}766\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera media se encuentra en 4,834 y 5,766 semanas."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Kinesiología · Respiratoria",
"enun": "Se estudia la capacidad vital forzada (CVF) en adultos con EPOC leve. La espirometría de 52 pacientes mostró un promedio de 2,85 litros. La desviación estándar poblacional es de 0,55 litros. Construya un intervalo de confianza del 90% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,2{,}725\\;;\\;2{,}975\\,\\right]$",
"$\\left[\\,2{,}833\\;;\\;2{,}867\\,\\right]$",
"$\\left[\\,2{,}774\\;;\\;2{,}926\\,\\right]$",
"$\\left[\\,2{,}654\\;;\\;3{,}046\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=52,\\ \\bar{x}=2{,}85,\\ \\sigma=0{,}55,\\ 90\\%\\Rightarrow z_{1-\\alpha/2}=1{,}645.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}645\\cdot\\dfrac{0,55}{\\sqrt{52}}=0{,}125\\ \\text{litros}",
"IC=2{,}85\\pm 0{,}125=\\left[\\,2{,}725\\;;\\;2{,}975\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera media se encuentra en 2,725 y 2,975 litros."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Kinesiología · Geriatría",
"enun": "Se investiga la fuerza de prensión palmar en adultos mayores. La dinamometría en 68 residentes arrojó un promedio de 18,7 kg. La desviación estándar poblacional es de 4,3 kg. Construya un intervalo de confianza del 98% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,17{,}487\\;;\\;19{,}913\\,\\right]$",
"$\\left[\\,18{,}553\\;;\\;18{,}847\\,\\right]$",
"$\\left[\\,18{,}179\\;;\\;19{,}221\\,\\right]$",
"$\\left[\\,17{,}357\\;;\\;20{,}043\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=68,\\ \\bar{x}=18{,}70,\\ \\sigma=4{,}30,\\ 98\\%\\Rightarrow z_{1-\\alpha/2}=2{,}326.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=2{,}326\\cdot\\dfrac{4,30}{\\sqrt{68}}=1{,}213\\ \\text{kg}",
"IC=18{,}70\\pm 1{,}213=\\left[\\,17{,}487\\;;\\;19{,}913\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera media se encuentra en 17,487 y 19,913 kg."
},
{
"tipo": "Media · σ conocida (z)",
"ctx": "Kinesiología · Deporte",
"enun": "Se estudia el equilibrio postural (SEBT anterior, %) en deportistas. La evaluación de 40 deportistas arrojó un promedio de 68,2%. La desviación estándar poblacional es de 7,5%. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,65{,}876\\;;\\;70{,}524\\,\\right]$",
"$\\left[\\,67{,}832\\;;\\;68{,}568\\,\\right]$",
"$\\left[\\,67{,}014\\;;\\;69{,}386\\,\\right]$",
"$\\left[\\,65{,}145\\;;\\;71{,}255\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=40,\\ \\bar{x}=68{,}20,\\ \\sigma=7{,}50,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt{n}}",
"ME=1{,}960\\cdot\\dfrac{7,50}{\\sqrt{40}}=2{,}324\\ \\text{%}",
"IC=68{,}20\\pm 2{,}324=\\left[\\,65{,}876\\;;\\;70{,}524\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 65,876 y 70,524 %."
},
{
"tipo": "Proporción (z)",
"ctx": "Veterinaria · Infectología",
"enun": "En una campaña de detección de leishmaniasis se examinaron 120 perros y 34 resultaron positivos. Construya un intervalo de confianza del 95% para la verdadera proporción de perros con leishmaniasis.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}2027\\;;\\;0{,}3640\\,\\right]$",
"$\\left[\\,0{,}2800\\;;\\;0{,}2866\\,\\right]$",
"$\\left[\\,0{,}2422\\;;\\;0{,}3245\\,\\right]$",
"$\\left[\\,0{,}1774\\;;\\;0{,}3893\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=120,\\ x=34,\\ \\hat{p}=\\dfrac{34}{120}=0{,}2833,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}960\\sqrt{\\dfrac{0{,}2833\\cdot 0{,}7167}{120}}=0{,}0806",
"IC=0{,}2833\\pm 0{,}0806=\\left[\\,0{,}2027\\;;\\;0{,}3640\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera proporción está entre 20,27% y 36,40%."
},
{
"tipo": "Proporción (z)",
"ctx": "Veterinaria · Reproducción felina",
"enun": "Se realizaron ecografías a 85 gatas y se detectaron quistes ováricos en 19. Construya un intervalo de confianza del 99% para la verdadera proporción de gatas con quistes ováricos.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}1071\\;;\\;0{,}3399\\,\\right]$",
"$\\left[\\,0{,}2183\\;;\\;0{,}2288\\,\\right]$",
"$\\left[\\,0{,}1783\\;;\\;0{,}2687\\,\\right]$",
"$\\left[\\,0{,}1350\\;;\\;0{,}3121\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=85,\\ x=19,\\ \\hat{p}=\\dfrac{19}{85}=0{,}2235,\\ 99\\%\\Rightarrow z_{1-\\alpha/2}=2{,}576.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=2{,}576\\sqrt{\\dfrac{0{,}2235\\cdot 0{,}7765}{85}}=0{,}1164",
"IC=0{,}2235\\pm 0{,}1164=\\left[\\,0{,}1071\\;;\\;0{,}3399\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera proporción está entre 10,71% y 33,99%."
},
{
"tipo": "Proporción (z)",
"ctx": "Veterinaria · Producción bovina",
"enun": "Se revisaron 200 terneros al destete y se diagnosticó diarrea neonatal en 52. Determine el intervalo de confianza del 90% para la verdadera proporción de terneros afectados.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}2090\\;;\\;0{,}3110\\,\\right]$",
"$\\left[\\,0{,}2584\\;;\\;0{,}2616\\,\\right]$",
"$\\left[\\,0{,}2290\\;;\\;0{,}2910\\,\\right]$",
"$\\left[\\,0{,}1801\\;;\\;0{,}3399\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=200,\\ x=52,\\ \\hat{p}=\\dfrac{52}{200}=0{,}2600,\\ 90\\%\\Rightarrow z_{1-\\alpha/2}=1{,}645.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}645\\sqrt{\\dfrac{0{,}2600\\cdot 0{,}7400}{200}}=0{,}0510",
"IC=0{,}2600\\pm 0{,}0510=\\left[\\,0{,}2090\\;;\\;0{,}3110\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera proporción está entre 20,90% y 31,10%."
},
{
"tipo": "Proporción (z)",
"ctx": "Veterinaria · Parasitología equina",
"enun": "En 150 equinos el análisis coprológico reveló estróngilos en 63. Construya un intervalo de confianza del 98% para la verdadera proporción de equinos parasitados.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}3263\\;;\\;0{,}5137\\,\\right]$",
"$\\left[\\,0{,}4162\\;;\\;0{,}4238\\,\\right]$",
"$\\left[\\,0{,}3797\\;;\\;0{,}4603\\,\\right]$",
"$\\left[\\,0{,}3162\\;;\\;0{,}5238\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=150,\\ x=63,\\ \\hat{p}=\\dfrac{63}{150}=0{,}4200,\\ 98\\%\\Rightarrow z_{1-\\alpha/2}=2{,}326.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=2{,}326\\sqrt{\\dfrac{0{,}4200\\cdot 0{,}5800}{150}}=0{,}0937",
"IC=0{,}4200\\pm 0{,}0937=\\left[\\,0{,}3263\\;;\\;0{,}5137\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera proporción está entre 32,63% y 51,37%."
},
{
"tipo": "Proporción (z)",
"ctx": "Veterinaria · Avicultura",
"enun": "Se inspeccionaron 300 pollos broiler y se hallaron lesiones de bronquitis en 45. Construya un intervalo de confianza del 95% para la verdadera proporción de aves con lesiones.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}1096\\;;\\;0{,}1904\\,\\right]$",
"$\\left[\\,0{,}1492\\;;\\;0{,}1508\\,\\right]$",
"$\\left[\\,0{,}1294\\;;\\;0{,}1706\\,\\right]$",
"$\\left[\\,0{,}0969\\;;\\;0{,}2031\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=300,\\ x=45,\\ \\hat{p}=\\dfrac{45}{300}=0{,}1500,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}960\\sqrt{\\dfrac{0{,}1500\\cdot 0{,}8500}{300}}=0{,}0404",
"IC=0{,}1500\\pm 0{,}0404=\\left[\\,0{,}1096\\;;\\;0{,}1904\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera proporción está entre 10,96% y 19,04%."
},
{
"tipo": "Proporción (z)",
"ctx": "Enfermería · Cardiovascular",
"enun": "De 180 pacientes hipertensos, 117 declararon adherir a su tratamiento. Construya un intervalo de confianza del 95% para la verdadera proporción con adherencia adecuada.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}5803\\;;\\;0{,}7197\\,\\right]$",
"$\\left[\\,0{,}6475\\;;\\;0{,}6525\\,\\right]$",
"$\\left[\\,0{,}6144\\;;\\;0{,}6856\\,\\right]$",
"$\\left[\\,0{,}5584\\;;\\;0{,}7416\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=180,\\ x=117,\\ \\hat{p}=\\dfrac{117}{180}=0{,}6500,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}960\\sqrt{\\dfrac{0{,}6500\\cdot 0{,}3500}{180}}=0{,}0697",
"IC=0{,}6500\\pm 0{,}0697=\\left[\\,0{,}5803\\;;\\;0{,}7197\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera proporción está entre 58,03% y 71,97%."
},
{
"tipo": "Proporción (z)",
"ctx": "Enfermería · Seguridad del paciente",
"enun": "De 240 registros de adultos mayores hospitalizados, 84 presentaron al menos una caída. Construya un intervalo de confianza del 99% para la verdadera proporción de pacientes con caídas.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}2707\\;;\\;0{,}4293\\,\\right]$",
"$\\left[\\,0{,}3476\\;;\\;0{,}3524\\,\\right]$",
"$\\left[\\,0{,}3192\\;;\\;0{,}3808\\,\\right]$",
"$\\left[\\,0{,}2897\\;;\\;0{,}4103\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=240,\\ x=84,\\ \\hat{p}=\\dfrac{84}{240}=0{,}3500,\\ 99\\%\\Rightarrow z_{1-\\alpha/2}=2{,}576.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=2{,}576\\sqrt{\\dfrac{0{,}3500\\cdot 0{,}6500}{240}}=0{,}0793",
"IC=0{,}3500\\pm 0{,}0793=\\left[\\,0{,}2707\\;;\\;0{,}4293\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera proporción está entre 27,07% y 42,93%."
},
{
"tipo": "Proporción (z)",
"ctx": "Enfermería · Cuidados críticos",
"enun": "De 320 instalaciones de catéter venoso central, 38 tuvieron complicaciones. Determine el intervalo de confianza del 90% para la verdadera proporción con complicaciones.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}0890\\;;\\;0{,}1485\\,\\right]$",
"$\\left[\\,0{,}1182\\;;\\;0{,}1193\\,\\right]$",
"$\\left[\\,0{,}1007\\;;\\;0{,}1368\\,\\right]$",
"$\\left[\\,0{,}0722\\;;\\;0{,}1653\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=320,\\ x=38,\\ \\hat{p}=\\dfrac{38}{320}=0{,}1187,\\ 90\\%\\Rightarrow z_{1-\\alpha/2}=1{,}645.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}645\\sqrt{\\dfrac{0{,}1187\\cdot 0{,}8812}{320}}=0{,}0297",
"IC=0{,}1187\\pm 0{,}0297=\\left[\\,0{,}0890\\;;\\;0{,}1485\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera proporción está entre 8,90% y 14,85%."
},
{
"tipo": "Proporción (z)",
"ctx": "Enfermería · Salud mental",
"enun": "Se aplicó PHQ-9 a 95 pacientes diabéticos y resultó positivo en 27. Construya un intervalo de confianza del 98% para la verdadera proporción con tamizaje positivo.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}1766\\;;\\;0{,}3918\\,\\right]$",
"$\\left[\\,0{,}2792\\;;\\;0{,}2892\\,\\right]$",
"$\\left[\\,0{,}2379\\;;\\;0{,}3305\\,\\right]$",
"$\\left[\\,0{,}1650\\;;\\;0{,}4034\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=95,\\ x=27,\\ \\hat{p}=\\dfrac{27}{95}=0{,}2842,\\ 98\\%\\Rightarrow z_{1-\\alpha/2}=2{,}326.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=2{,}326\\sqrt{\\dfrac{0{,}2842\\cdot 0{,}7158}{95}}=0{,}1076",
"IC=0{,}2842\\pm 0{,}1076=\\left[\\,0{,}1766\\;;\\;0{,}3918\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera proporción está entre 17,66% y 39,18%."
},
{
"tipo": "Proporción (z)",
"ctx": "Enfermería · Gerontología",
"enun": "De 140 adultos mayores dependientes, 49 presentaban úlceras por presión. Construya un intervalo de confianza del 95% para la verdadera proporción con úlceras.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}2710\\;;\\;0{,}4290\\,\\right]$",
"$\\left[\\,0{,}3468\\;;\\;0{,}3532\\,\\right]$",
"$\\left[\\,0{,}3097\\;;\\;0{,}3903\\,\\right]$",
"$\\left[\\,0{,}2462\\;;\\;0{,}4538\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=140,\\ x=49,\\ \\hat{p}=\\dfrac{49}{140}=0{,}3500,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}960\\sqrt{\\dfrac{0{,}3500\\cdot 0{,}6500}{140}}=0{,}0790",
"IC=0{,}3500\\pm 0{,}0790=\\left[\\,0{,}2710\\;;\\;0{,}4290\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera proporción está entre 27,10% y 42,90%."
},
{
"tipo": "Proporción (z)",
"ctx": "Obstetricia · Obstetricia",
"enun": "De 160 partos atendidos, 48 finalizaron en cesárea de urgencia. Construya un intervalo de confianza del 95% para la verdadera proporción de cesáreas de urgencia.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}2290\\;;\\;0{,}3710\\,\\right]$",
"$\\left[\\,0{,}2974\\;;\\;0{,}3026\\,\\right]$",
"$\\left[\\,0{,}2638\\;;\\;0{,}3362\\,\\right]$",
"$\\left[\\,0{,}2067\\;;\\;0{,}3933\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=160,\\ x=48,\\ \\hat{p}=\\dfrac{48}{160}=0{,}3000,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}960\\sqrt{\\dfrac{0{,}3000\\cdot 0{,}7000}{160}}=0{,}0710",
"IC=0{,}3000\\pm 0{,}0710=\\left[\\,0{,}2290\\;;\\;0{,}3710\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera proporción está entre 22,90% y 37,10%."
},
{
"tipo": "Proporción (z)",
"ctx": "Obstetricia · Neonatología",
"enun": "De 210 partos de término, 57 recién nacidos presentaron circular de cordón. Determine el intervalo de confianza del 99% para la verdadera proporción con circular de cordón.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}1924\\;;\\;0{,}3505\\,\\right]$",
"$\\left[\\,0{,}2690\\;;\\;0{,}2739\\,\\right]$",
"$\\left[\\,0{,}2407\\;;\\;0{,}3021\\,\\right]$",
"$\\left[\\,0{,}2113\\;;\\;0{,}3316\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=210,\\ x=57,\\ \\hat{p}=\\dfrac{57}{210}=0{,}2714,\\ 99\\%\\Rightarrow z_{1-\\alpha/2}=2{,}576.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=2{,}576\\sqrt{\\dfrac{0{,}2714\\cdot 0{,}7286}{210}}=0{,}0790",
"IC=0{,}2714\\pm 0{,}0790=\\left[\\,0{,}1924\\;;\\;0{,}3505\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera proporción está entre 19,24% y 35,05%."
},
{
"tipo": "Proporción (z)",
"ctx": "Obstetricia · Salud mental perinatal",
"enun": "De 130 puérperas, 41 presentaron síntomas de depresión postparto. Construya un intervalo de confianza del 90% para la verdadera proporción con depresión postparto.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}2483\\;;\\;0{,}3824\\,\\right]$",
"$\\left[\\,0{,}3127\\;;\\;0{,}3181\\,\\right]$",
"$\\left[\\,0{,}2746\\;;\\;0{,}3561\\,\\right]$",
"$\\left[\\,0{,}2104\\;;\\;0{,}4204\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=130,\\ x=41,\\ \\hat{p}=\\dfrac{41}{130}=0{,}3154,\\ 90\\%\\Rightarrow z_{1-\\alpha/2}=1{,}645.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}645\\sqrt{\\dfrac{0{,}3154\\cdot 0{,}6846}{130}}=0{,}0670",
"IC=0{,}3154\\pm 0{,}0670=\\left[\\,0{,}2483\\;;\\;0{,}3824\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera proporción está entre 24,83% y 38,24%."
},
{
"tipo": "Proporción (z)",
"ctx": "Obstetricia · Puericultura",
"enun": "De 175 recién nacidos, 112 tenían lactancia materna exclusiva al mes. Construya un intervalo de confianza del 98% para la verdadera proporción con lactancia exclusiva.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}5556\\;;\\;0{,}7244\\,\\right]$",
"$\\left[\\,0{,}6369\\;;\\;0{,}6431\\,\\right]$",
"$\\left[\\,0{,}6037\\;;\\;0{,}6763\\,\\right]$",
"$\\left[\\,0{,}5465\\;;\\;0{,}7335\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=175,\\ x=112,\\ \\hat{p}=\\dfrac{112}{175}=0{,}6400,\\ 98\\%\\Rightarrow z_{1-\\alpha/2}=2{,}326.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=2{,}326\\sqrt{\\dfrac{0{,}6400\\cdot 0{,}3600}{175}}=0{,}0844",
"IC=0{,}6400\\pm 0{,}0844=\\left[\\,0{,}5556\\;;\\;0{,}7244\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera proporción está entre 55,56% y 72,44%."
},
{
"tipo": "Proporción (z)",
"ctx": "Obstetricia · Diabetes y embarazo",
"enun": "De 90 embarazos con diabetes gestacional, 33 recién nacidos presentaron macrosomía. Construya un intervalo de confianza del 95% para la verdadera proporción de macrosómicos.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}2671\\;;\\;0{,}4662\\,\\right]$",
"$\\left[\\,0{,}3616\\;;\\;0{,}3717\\,\\right]$",
"$\\left[\\,0{,}3159\\;;\\;0{,}4175\\,\\right]$",
"$\\left[\\,0{,}2358\\;;\\;0{,}4975\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=90,\\ x=33,\\ \\hat{p}=\\dfrac{33}{90}=0{,}3667,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}960\\sqrt{\\dfrac{0{,}3667\\cdot 0{,}6333}{90}}=0{,}0996",
"IC=0{,}3667\\pm 0{,}0996=\\left[\\,0{,}2671\\;;\\;0{,}4662\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera proporción está entre 26,71% y 46,62%."
},
{
"tipo": "Proporción (z)",
"ctx": "Kinesiología · Rehabilitación",
"enun": "De 110 pacientes en rehabilitación de rodilla, 78 lograron el alta funcional a tiempo. Construya un intervalo de confianza del 95% para la verdadera proporción con alta a tiempo.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}6242\\;;\\;0{,}7940\\,\\right]$",
"$\\left[\\,0{,}7054\\;;\\;0{,}7128\\,\\right]$",
"$\\left[\\,0{,}6658\\;;\\;0{,}7524\\,\\right]$",
"$\\left[\\,0{,}5975\\;;\\;0{,}8206\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=110,\\ x=78,\\ \\hat{p}=\\dfrac{78}{110}=0{,}7091,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}960\\sqrt{\\dfrac{0{,}7091\\cdot 0{,}2909}{110}}=0{,}0849",
"IC=0{,}7091\\pm 0{,}0849=\\left[\\,0{,}6242\\;;\\;0{,}7940\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera proporción está entre 62,42% y 79,40%."
},
{
"tipo": "Proporción (z)",
"ctx": "Kinesiología · Laboral",
"enun": "De 75 trabajadores evaluados, 22 presentaron síndrome de túnel carpiano. Construya un intervalo de confianza del 99% para la verdadera proporción con túnel carpiano.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}1579\\;;\\;0{,}4288\\,\\right]$",
"$\\left[\\,0{,}2862\\;;\\;0{,}3005\\,\\right]$",
"$\\left[\\,0{,}2408\\;;\\;0{,}3459\\,\\right]$",
"$\\left[\\,0{,}1903\\;;\\;0{,}3964\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=75,\\ x=22,\\ \\hat{p}=\\dfrac{22}{75}=0{,}2933,\\ 99\\%\\Rightarrow z_{1-\\alpha/2}=2{,}576.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=2{,}576\\sqrt{\\dfrac{0{,}2933\\cdot 0{,}7067}{75}}=0{,}1354",
"IC=0{,}2933\\pm 0{,}1354=\\left[\\,0{,}1579\\;;\\;0{,}4288\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera proporción está entre 15,79% y 42,88%."
},
{
"tipo": "Proporción (z)",
"ctx": "Kinesiología · Rehabilitación cardíaca",
"enun": "De 200 pacientes egresados, 134 mantenían la actividad física a los 6 meses. Determine el intervalo de confianza del 90% para la verdadera proporción que mantiene actividad.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}6153\\;;\\;0{,}7247\\,\\right]$",
"$\\left[\\,0{,}6682\\;;\\;0{,}6718\\,\\right]$",
"$\\left[\\,0{,}6368\\;;\\;0{,}7032\\,\\right]$",
"$\\left[\\,0{,}5844\\;;\\;0{,}7556\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=200,\\ x=134,\\ \\hat{p}=\\dfrac{134}{200}=0{,}6700,\\ 90\\%\\Rightarrow z_{1-\\alpha/2}=1{,}645.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}645\\sqrt{\\dfrac{0{,}6700\\cdot 0{,}3300}{200}}=0{,}0547",
"IC=0{,}6700\\pm 0{,}0547=\\left[\\,0{,}6153\\;;\\;0{,}7247\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera proporción está entre 61,53% y 72,47%."
},
{
"tipo": "Proporción (z)",
"ctx": "Kinesiología · Pediátrica",
"enun": "De 160 escolares evaluados, 44 presentaron escoliosis funcional. Construya un intervalo de confianza del 98% para la verdadera proporción con escoliosis funcional.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}1929\\;;\\;0{,}3571\\,\\right]$",
"$\\left[\\,0{,}2721\\;;\\;0{,}2779\\,\\right]$",
"$\\left[\\,0{,}2397\\;;\\;0{,}3103\\,\\right]$",
"$\\left[\\,0{,}1841\\;;\\;0{,}3659\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=160,\\ x=44,\\ \\hat{p}=\\dfrac{44}{160}=0{,}2750,\\ 98\\%\\Rightarrow z_{1-\\alpha/2}=2{,}326.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=2{,}326\\sqrt{\\dfrac{0{,}2750\\cdot 0{,}7250}{160}}=0{,}0821",
"IC=0{,}2750\\pm 0{,}0821=\\left[\\,0{,}1929\\;;\\;0{,}3571\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera proporción está entre 19,29% y 35,71%."
},
{
"tipo": "Proporción (z)",
"ctx": "Kinesiología · Deporte",
"enun": "De 120 atletas amateur, 53 refirieron una lesión musculoesquelética en el año. Construya un intervalo de confianza del 95% para la verdadera proporción con lesiones.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,0{,}3528\\;;\\;0{,}5305\\,\\right]$",
"$\\left[\\,0{,}4376\\;;\\;0{,}4457\\,\\right]$",
"$\\left[\\,0{,}3963\\;;\\;0{,}4870\\,\\right]$",
"$\\left[\\,0{,}3249\\;;\\;0{,}5584\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=120,\\ x=53,\\ \\hat{p}=\\dfrac{53}{120}=0{,}4417,\\ 95\\%\\Rightarrow z_{1-\\alpha/2}=1{,}960.",
"pautaSteps": [
"IC_p=\\hat{p}\\pm z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}",
"ME=1{,}960\\sqrt{\\dfrac{0{,}4417\\cdot 0{,}5583}{120}}=0{,}0889",
"IC=0{,}4417\\pm 0{,}0889=\\left[\\,0{,}3528\\;;\\;0{,}5305\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera proporción está entre 35,28% y 53,05%."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Endocrinología felina",
"enun": "Un veterinario midió la glucemia en ayunas de 10 gatos con sospecha de diabetes felina, con media de 285 mg/dL y desviación estándar muestral de 42 mg/dL. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,254{,}95\\;;\\;315{,}05\\,\\right]$",
"$\\left[\\,275{,}50\\;;\\;294{,}50\\,\\right]$",
"$\\left[\\,258{,}97\\;;\\;311{,}03\\,\\right]$",
"$\\left[\\,190{,}00\\;;\\;380{,}00\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=10,\\ \\bar{x}=285,\\ s=42,\\ \\nu=n-1=9,\\ 95\\%\\Rightarrow t_{1-\\alpha/2,\\,9}=2{,}262.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}262\\cdot\\dfrac{42}{\\sqrt{10}}=30{,}05\\ \\text{mg/dL}",
"IC=285\\pm 30{,}05=\\left[\\,254{,}95\\;;\\;315{,}05\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 254,95 y 315,05 mg/dL. Al ser σ desconocida se usa t con 9 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Parasitología ovina",
"enun": "Se midió el recuento de huevos por gramo (HPG) en 9 ovinos, con media de 1.240 HPG y desviación estándar muestral de 310 HPG. Construya un intervalo de confianza del 99% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,893{,}317\\;;\\;1586{,}683\\,\\right]$",
"$\\left[\\,1124{,}439\\;;\\;1355{,}561\\,\\right]$",
"$\\left[\\,973{,}813\\;;\\;1506{,}187\\,\\right]$",
"$\\left[\\,199{,}950\\;;\\;2280{,}050\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=9,\\ \\bar{x}=1240,\\ s=310,\\ \\nu=n-1=8,\\ 99\\%\\Rightarrow t_{1-\\alpha/2,\\,8}=3{,}355.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=3{,}355\\cdot\\dfrac{310}{\\sqrt{9}}=346{,}683\\ \\text{HPG}",
"IC=1240\\pm 346{,}683=\\left[\\,893{,}317\\;;\\;1586{,}683\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera media se encuentra en 893,317 y 1586,683 HPG. Al ser σ desconocida se usa t con 8 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Porcicultura",
"enun": "Se evaluó la temperatura rectal de 6 cerdos bajo estrés por calor, con media de 40,7 °C y desviación estándar muestral de 0,5 °C. Determine el intervalo de confianza del 90% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,40{,}289\\;;\\;41{,}111\\,\\right]$",
"$\\left[\\,40{,}532\\;;\\;40{,}868\\,\\right]$",
"$\\left[\\,40{,}364\\;;\\;41{,}036\\,\\right]$",
"$\\left[\\,39{,}693\\;;\\;41{,}708\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=6,\\ \\bar{x}=40{,}70,\\ s=0{,}50,\\ \\nu=n-1=5,\\ 90\\%\\Rightarrow t_{1-\\alpha/2,\\,5}=2{,}015.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}015\\cdot\\dfrac{0,50}{\\sqrt{6}}=0{,}411\\ \\text{°C}",
"IC=40{,}70\\pm 0{,}411=\\left[\\,40{,}289\\;;\\;41{,}111\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera media se encuentra en 40,289 y 41,111 °C. Al ser σ desconocida se usa t con 5 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Camélidos",
"enun": "Se registró el peso vivo de 13 alpacas adultas, con media de 62,4 kg y desviación estándar muestral de 8,7 kg. Construya un intervalo de confianza del 98% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,55{,}931\\;;\\;68{,}869\\,\\right]$",
"$\\left[\\,60{,}606\\;;\\;64{,}194\\,\\right]$",
"$\\left[\\,56{,}787\\;;\\;68{,}013\\,\\right]$",
"$\\left[\\,39{,}075\\;;\\;85{,}725\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=13,\\ \\bar{x}=62{,}40,\\ s=8{,}70,\\ \\nu=n-1=12,\\ 98\\%\\Rightarrow t_{1-\\alpha/2,\\,12}=2{,}681.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}681\\cdot\\dfrac{8,70}{\\sqrt{13}}=6{,}469\\ \\text{kg}",
"IC=62{,}40\\pm 6{,}469=\\left[\\,55{,}931\\;;\\;68{,}869\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera media se encuentra en 55,931 y 68,869 kg. Al ser σ desconocida se usa t con 12 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Veterinaria · Anestesiología",
"enun": "Se midió la frecuencia respiratoria de 16 perros beagle bajo anestesia, con media de 18 rpm y desviación estándar muestral de 3,2 rpm. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,16{,}295\\;;\\;19{,}705\\,\\right]$",
"$\\left[\\,17{,}574\\;;\\;18{,}426\\,\\right]$",
"$\\left[\\,16{,}432\\;;\\;19{,}568\\,\\right]$",
"$\\left[\\,11{,}181\\;;\\;24{,}819\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=16,\\ \\bar{x}=18,\\ s=3{,}20,\\ \\nu=n-1=15,\\ 95\\%\\Rightarrow t_{1-\\alpha/2,\\,15}=2{,}131.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}131\\cdot\\dfrac{3,20}{\\sqrt{16}}=1{,}705\\ \\text{rpm}",
"IC=18\\pm 1{,}705=\\left[\\,16{,}295\\;;\\;19{,}705\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 16,295 y 19,705 rpm. Al ser σ desconocida se usa t con 15 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Urgencias",
"enun": "Se registró el tiempo de espera de 12 pacientes en urgencias nocturnas, con media de 23,4 minutos y desviación estándar muestral de 6,8 minutos. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,19{,}077\\;;\\;27{,}723\\,\\right]$",
"$\\left[\\,22{,}153\\;;\\;24{,}647\\,\\right]$",
"$\\left[\\,19{,}553\\;;\\;27{,}247\\,\\right]$",
"$\\left[\\,8{,}433\\;;\\;38{,}367\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=12,\\ \\bar{x}=23{,}40,\\ s=6{,}80,\\ \\nu=n-1=11,\\ 95\\%\\Rightarrow t_{1-\\alpha/2,\\,11}=2{,}201.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}201\\cdot\\dfrac{6,80}{\\sqrt{12}}=4{,}323\\ \\text{min}",
"IC=23{,}40\\pm 4{,}323=\\left[\\,19{,}077\\;;\\;27{,}723\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 19,077 y 27,723 min. Al ser σ desconocida se usa t con 11 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Oncología",
"enun": "Se midió la hemoglobina de 9 pacientes con quimioterapia activa, con media de 9,6 g/dL y desviación estándar muestral de 1,4 g/dL. Construya un intervalo de confianza del 99% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,8{,}035\\;;\\;11{,}165\\,\\right]$",
"$\\left[\\,9{,}078\\;;\\;10{,}122\\,\\right]$",
"$\\left[\\,8{,}398\\;;\\;10{,}802\\,\\right]$",
"$\\left[\\,4{,}903\\;;\\;14{,}297\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=9,\\ \\bar{x}=9{,}60,\\ s=1{,}40,\\ \\nu=n-1=8,\\ 99\\%\\Rightarrow t_{1-\\alpha/2,\\,8}=3{,}355.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=3{,}355\\cdot\\dfrac{1,40}{\\sqrt{9}}=1{,}565\\ \\text{g/dL}",
"IC=9{,}60\\pm 1{,}565=\\left[\\,8{,}035\\;;\\;11{,}165\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera media se encuentra en 8,035 y 11,165 g/dL. Al ser σ desconocida se usa t con 8 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Cirugía",
"enun": "Se evaluó el dolor postoperatorio (EVA) en 15 pacientes, con media de 4,2 puntos y desviación estándar muestral de 1,9 puntos. Determine el intervalo de confianza del 90% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,3{,}336\\;;\\;5{,}064\\,\\right]$",
"$\\left[\\,3{,}977\\;;\\;4{,}423\\,\\right]$",
"$\\left[\\,3{,}393\\;;\\;5{,}007\\,\\right]$",
"$\\left[\\,0{,}854\\;;\\;7{,}546\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=15,\\ \\bar{x}=4{,}20,\\ s=1{,}90,\\ \\nu=n-1=14,\\ 90\\%\\Rightarrow t_{1-\\alpha/2,\\,14}=1{,}761.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=1{,}761\\cdot\\dfrac{1,90}{\\sqrt{15}}=0{,}864\\ \\text{puntos}",
"IC=4{,}20\\pm 0{,}864=\\left[\\,3{,}336\\;;\\;5{,}064\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera media se encuentra en 3,336 y 5,064 puntos. Al ser σ desconocida se usa t con 14 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Neonatología",
"enun": "Se registró la temperatura axilar de 20 recién nacidos prematuros, con media de 36,6 °C y desviación estándar muestral de 0,4 °C. Construya un intervalo de confianza del 98% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,36{,}373\\;;\\;36{,}827\\,\\right]$",
"$\\left[\\,36{,}549\\;;\\;36{,}651\\,\\right]$",
"$\\left[\\,36{,}392\\;;\\;36{,}808\\,\\right]$",
"$\\left[\\,35{,}584\\;;\\;37{,}616\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=20,\\ \\bar{x}=36{,}60,\\ s=0{,}40,\\ \\nu=n-1=19,\\ 98\\%\\Rightarrow t_{1-\\alpha/2,\\,19}=2{,}539.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}539\\cdot\\dfrac{0,40}{\\sqrt{20}}=0{,}227\\ \\text{°C}",
"IC=36{,}60\\pm 0{,}227=\\left[\\,36{,}373\\;;\\;36{,}827\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera media se encuentra en 36,373 y 36,827 °C. Al ser σ desconocida se usa t con 19 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Enfermería · Rehabilitación cardíaca",
"enun": "Se midió la presión diastólica de 25 pacientes al finalizar ejercicio, con media de 78 mmHg y desviación estándar muestral de 9,5 mmHg. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,74{,}078\\;;\\;81{,}922\\,\\right]$",
"$\\left[\\,77{,}216\\;;\\;78{,}784\\,\\right]$",
"$\\left[\\,74{,}276\\;;\\;81{,}724\\,\\right]$",
"$\\left[\\,58{,}392\\;;\\;97{,}608\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=25,\\ \\bar{x}=78,\\ s=9{,}50,\\ \\nu=n-1=24,\\ 95\\%\\Rightarrow t_{1-\\alpha/2,\\,24}=2{,}064.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}064\\cdot\\dfrac{9,50}{\\sqrt{25}}=3{,}922\\ \\text{mmHg}",
"IC=78\\pm 3{,}922=\\left[\\,74{,}078\\;;\\;81{,}922\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 74,078 y 81,922 mmHg. Al ser σ desconocida se usa t con 24 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Obstetricia",
"enun": "Se registró la duración del período expulsivo en 11 primíparas, con media de 48 minutos y desviación estándar muestral de 12 minutos. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,39{,}938\\;;\\;56{,}062\\,\\right]$",
"$\\left[\\,45{,}569\\;;\\;50{,}431\\,\\right]$",
"$\\left[\\,40{,}908\\;;\\;55{,}092\\,\\right]$",
"$\\left[\\,21{,}264\\;;\\;74{,}736\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=11,\\ \\bar{x}=48,\\ s=12,\\ \\nu=n-1=10,\\ 95\\%\\Rightarrow t_{1-\\alpha/2,\\,10}=2{,}228.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}228\\cdot\\dfrac{12}{\\sqrt{11}}=8{,}062\\ \\text{min}",
"IC=48\\pm 8{,}062=\\left[\\,39{,}938\\;;\\;56{,}062\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 39,938 y 56,062 min. Al ser σ desconocida se usa t con 10 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Perinatología",
"enun": "Se registró el peso placentario de 8 recién nacidos de madres con preeclampsia, con media de 412 g y desviación estándar muestral de 58 g. Determine el intervalo de confianza del 99% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,340{,}238\\;;\\;483{,}762\\,\\right]$",
"$\\left[\\,386{,}632\\;;\\;437{,}368\\,\\right]$",
"$\\left[\\,359{,}176\\;;\\;464{,}824\\,\\right]$",
"$\\left[\\,209{,}058\\;;\\;614{,}942\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=8,\\ \\bar{x}=412,\\ s=58,\\ \\nu=n-1=7,\\ 99\\%\\Rightarrow t_{1-\\alpha/2,\\,7}=3{,}499.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=3{,}499\\cdot\\dfrac{58}{\\sqrt{8}}=71{,}762\\ \\text{g}",
"IC=412\\pm 71{,}762=\\left[\\,340{,}238\\;;\\;483{,}762\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera media se encuentra en 340,238 y 483,762 g. Al ser σ desconocida se usa t con 7 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Neonatología",
"enun": "Se evaluó el Apgar al minuto en 20 recién nacidos con fórceps, con media de 7,3 puntos y desviación estándar muestral de 1,2 puntos. Construya un intervalo de confianza del 90% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,6{,}836\\;;\\;7{,}764\\,\\right]$",
"$\\left[\\,7{,}196\\;;\\;7{,}404\\,\\right]$",
"$\\left[\\,6{,}859\\;;\\;7{,}741\\,\\right]$",
"$\\left[\\,5{,}225\\;;\\;9{,}375\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=20,\\ \\bar{x}=7{,}30,\\ s=1{,}20,\\ \\nu=n-1=19,\\ 90\\%\\Rightarrow t_{1-\\alpha/2,\\,19}=1{,}729.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=1{,}729\\cdot\\dfrac{1,20}{\\sqrt{20}}=0{,}464\\ \\text{puntos}",
"IC=7{,}30\\pm 0{,}464=\\left[\\,6{,}836\\;;\\;7{,}764\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera media se encuentra en 6,836 y 7,764 puntos. Al ser σ desconocida se usa t con 19 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Embarazo adolescente",
"enun": "Se midió la ganancia de peso gestacional en 15 adolescentes, con media de 13,2 kg y desviación estándar muestral de 3,6 kg. Construya un intervalo de confianza del 98% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,10{,}760\\;;\\;15{,}640\\,\\right]$",
"$\\left[\\,12{,}570\\;;\\;13{,}830\\,\\right]$",
"$\\left[\\,11{,}038\\;;\\;15{,}362\\,\\right]$",
"$\\left[\\,3{,}754\\;;\\;22{,}646\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=15,\\ \\bar{x}=13{,}20,\\ s=3{,}60,\\ \\nu=n-1=14,\\ 98\\%\\Rightarrow t_{1-\\alpha/2,\\,14}=2{,}624.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}624\\cdot\\dfrac{3,60}{\\sqrt{15}}=2{,}440\\ \\text{kg}",
"IC=13{,}20\\pm 2{,}440=\\left[\\,10{,}760\\;;\\;15{,}640\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera media se encuentra en 10,760 y 15,640 kg. Al ser σ desconocida se usa t con 14 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Obstetricia · Puericultura",
"enun": "Se registró el número de regurgitaciones diarias en 30 lactantes, con media de 4,1 episodios y desviación estándar muestral de 1,8 episodios. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,3{,}428\\;;\\;4{,}772\\,\\right]$",
"$\\left[\\,3{,}977\\;;\\;4{,}223\\,\\right]$",
"$\\left[\\,3{,}456\\;;\\;4{,}744\\,\\right]$",
"$\\left[\\,0{,}419\\;;\\;7{,}781\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=30,\\ \\bar{x}=4{,}10,\\ s=1{,}80,\\ \\nu=n-1=29,\\ 95\\%\\Rightarrow t_{1-\\alpha/2,\\,29}=2{,}045.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}045\\cdot\\dfrac{1,80}{\\sqrt{30}}=0{,}672\\ \\text{episodios/día}",
"IC=4{,}10\\pm 0{,}672=\\left[\\,3{,}428\\;;\\;4{,}772\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 3,428 y 4,772 episodios/día. Al ser σ desconocida se usa t con 29 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Kinesiología · Rehabilitación",
"enun": "Se evaluó la fuerza de cuádriceps en 12 pacientes tras cirugía de LCA, con media de 186 N y desviación estándar muestral de 34 N. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,164{,}397\\;;\\;207{,}603\\,\\right]$",
"$\\left[\\,179{,}764\\;;\\;192{,}236\\,\\right]$",
"$\\left[\\,166{,}763\\;;\\;205{,}237\\,\\right]$",
"$\\left[\\,111{,}166\\;;\\;260{,}834\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=12,\\ \\bar{x}=186,\\ s=34,\\ \\nu=n-1=11,\\ 95\\%\\Rightarrow t_{1-\\alpha/2,\\,11}=2{,}201.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}201\\cdot\\dfrac{34}{\\sqrt{12}}=21{,}603\\ \\text{N}",
"IC=186\\pm 21{,}603=\\left[\\,164{,}397\\;;\\;207{,}603\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 164,397 y 207,603 N. Al ser σ desconocida se usa t con 11 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Kinesiología · Laboral",
"enun": "Se midió el umbral de dolor a la presión en 10 trabajadores con cervicalgia, con media de 198 kPa y desviación estándar muestral de 41 kPa. Construya un intervalo de confianza del 99% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,155{,}857\\;;\\;240{,}143\\,\\right]$",
"$\\left[\\,184{,}675\\;;\\;211{,}325\\,\\right]$",
"$\\left[\\,164{,}601\\;;\\;231{,}399\\,\\right]$",
"$\\left[\\,64{,}750\\;;\\;331{,}250\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=10,\\ \\bar{x}=198,\\ s=41,\\ \\nu=n-1=9,\\ 99\\%\\Rightarrow t_{1-\\alpha/2,\\,9}=3{,}250.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=3{,}250\\cdot\\dfrac{41}{\\sqrt{10}}=42{,}143\\ \\text{kPa}",
"IC=198\\pm 42{,}143=\\left[\\,155{,}857\\;;\\;240{,}143\\,\\right]"
],
"conc": "Con un 99% de confianza, la verdadera media se encuentra en 155,857 y 240,143 kPa. Al ser σ desconocida se usa t con 9 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Kinesiología · Respiratoria",
"enun": "Se registró el VEF1 de 25 pacientes con asma moderada, con media de 1,74 L y desviación estándar muestral de 0,38 L. Determine el intervalo de confianza del 90% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,1{,}610\\;;\\;1{,}870\\,\\right]$",
"$\\left[\\,1{,}714\\;;\\;1{,}766\\,\\right]$",
"$\\left[\\,1{,}615\\;;\\;1{,}865\\,\\right]$",
"$\\left[\\,1{,}090\\;;\\;2{,}390\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=25,\\ \\bar{x}=1{,}74,\\ s=0{,}38,\\ \\nu=n-1=24,\\ 90\\%\\Rightarrow t_{1-\\alpha/2,\\,24}=1{,}711.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=1{,}711\\cdot\\dfrac{0,38}{\\sqrt{25}}=0{,}130\\ \\text{litros}",
"IC=1{,}74\\pm 0{,}130=\\left[\\,1{,}610\\;;\\;1{,}870\\,\\right]"
],
"conc": "Con un 90% de confianza, la verdadera media se encuentra en 1,610 y 1,870 litros. Al ser σ desconocida se usa t con 24 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Kinesiología · Geriatría",
"enun": "Se evaluó el tiempo de apoyo monopodal en 9 adultos mayores, con media de 6,3 s y desviación estándar muestral de 2,1 s. Construya un intervalo de confianza del 98% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,4{,}273\\;;\\;8{,}327\\,\\right]$",
"$\\left[\\,5{,}624\\;;\\;6{,}976\\,\\right]$",
"$\\left[\\,4{,}672\\;;\\;7{,}928\\,\\right]$",
"$\\left[\\,0{,}218\\;;\\;12{,}382\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=9,\\ \\bar{x}=6{,}30,\\ s=2{,}10,\\ \\nu=n-1=8,\\ 98\\%\\Rightarrow t_{1-\\alpha/2,\\,8}=2{,}896.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}896\\cdot\\dfrac{2,10}{\\sqrt{9}}=2{,}027\\ \\text{segundos}",
"IC=6{,}30\\pm 2{,}027=\\left[\\,4{,}273\\;;\\;8{,}327\\,\\right]"
],
"conc": "Con un 98% de confianza, la verdadera media se encuentra en 4,273 y 8,327 segundos. Al ser σ desconocida se usa t con 8 g.l."
},
{
"tipo": "Media · σ desconocida (t)",
"ctx": "Kinesiología · Deporte",
"enun": "Se midió la potencia anaeróbica pico en 20 ciclistas (Wingate), con media de 742 W y desviación estándar muestral de 98 W. Construya un intervalo de confianza del 95% para la verdadera media.",
"ask": "El intervalo de confianza solicitado es:",
"alts": [
"$\\left[\\,696{,}139\\;;\\;787{,}861\\,\\right]$",
"$\\left[\\,731{,}744\\;;\\;752{,}256\\,\\right]$",
"$\\left[\\,699{,}050\\;;\\;784{,}950\\,\\right]$",
"$\\left[\\,536{,}886\\;;\\;947{,}114\\,\\right]$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ n=20,\\ \\bar{x}=742,\\ s=98,\\ \\nu=n-1=19,\\ 95\\%\\Rightarrow t_{1-\\alpha/2,\\,19}=2{,}093.",
"pautaSteps": [
"IC_\\mu=\\bar{x}\\pm t_{1-\\alpha/2,\\,n-1}\\dfrac{s}{\\sqrt{n}}",
"ME=2{,}093\\cdot\\dfrac{98}{\\sqrt{20}}=45{,}861\\ \\text{W}",
"IC=742\\pm 45{,}861=\\left[\\,696{,}139\\;;\\;787{,}861\\,\\right]"
],
"conc": "Con un 95% de confianza, la verdadera media se encuentra en 696,139 y 787,861 W. Al ser σ desconocida se usa t con 19 g.l."
}
];
