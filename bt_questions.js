// Banco de 32 ejercicios de Probabilidad Total y Teorema de Bayes (guia oficial Fabimath)
const BT_QUESTIONS = [
{
"tipo": "Probabilidad total",
"ctx": "Veterinaria · Medicina preventiva",
"enun": "En una clínica veterinaria se atiende a perros de la comunidad. El 70% de los perros que llegan a la clínica están vacunados y el 30% no lo están. De los perros vacunados, el 5% contrae parvovirus durante el año. De los perros no vacunados, el 40% lo contrae. Se selecciona un perro al azar de la clínica.",
"ask": "Determine la probabilidad de que un perro contraiga parvovirus.",
"alts": [
"$P = 0{,}1550$",
"$P = 0{,}8450$",
"$P = 0{,}1200$",
"$P = 0{,}3000$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,05\\cdot 0,70 + 0,40\\cdot 0,30",
"P(B)=0,0350 + 0,1200=0{,}1550"
],
"conc": "La probabilidad de que un perro contraiga parvovirus es 0,1550 (15,50%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Veterinaria · Medicina preventiva",
"enun": "En una clínica veterinaria se atiende a perros de la comunidad. El 70% de los perros que llegan a la clínica están vacunados y el 30% no lo están. De los perros vacunados, el 5% contrae parvovirus durante el año. De los perros no vacunados, el 40% lo contrae. Se selecciona un perro al azar de la clínica.",
"ask": "Determine la probabilidad de que un perro no estuviese vacunado, dado que contrajo parvovirus.",
"alts": [
"$P = 0{,}7742$",
"$P = 0{,}4000$",
"$P = 0{,}1200$",
"$P = 0{,}2258$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,0350 + 0,1200=0{,}1550\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,40\\cdot 0,30}{0{,}1550}=\\dfrac{0{,}1200}{0{,}1550}=0{,}7742"
],
"conc": "Sabiendo que contrajo parvovirus, la probabilidad de que un perro no estuviese vacunado es 0,7742 (77,42%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Veterinaria · Producción ovina",
"enun": "En un rebaño ovino del sur de Chile, el 60% de los animales proviene de zona húmeda y el 40% proviene de zona seca. La prevalencia de fasciola hepática es del 35% en los animales de zona húmeda y del 8% en los de zona seca. Se selecciona un animal al azar del rebaño.",
"ask": "Determine la probabilidad de que un animal tenga fasciola.",
"alts": [
"$P = 0{,}2420$",
"$P = 0{,}7580$",
"$P = 0{,}2100$",
"$P = 0{,}6000$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,35\\cdot 0,60 + 0,08\\cdot 0,40",
"P(B)=0,2100 + 0,0320=0{,}2420"
],
"conc": "La probabilidad de que un animal tenga fasciola es 0,2420 (24,20%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Veterinaria · Producción ovina",
"enun": "En un rebaño ovino del sur de Chile, el 60% de los animales proviene de zona húmeda y el 40% proviene de zona seca. La prevalencia de fasciola hepática es del 35% en los animales de zona húmeda y del 8% en los de zona seca. Se selecciona un animal al azar del rebaño.",
"ask": "Determine la probabilidad de que un animal provenga de zona húmeda, dado que tiene fasciola.",
"alts": [
"$P = 0{,}8678$",
"$P = 0{,}3500$",
"$P = 0{,}2100$",
"$P = 0{,}1322$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,2100 + 0,0320=0{,}2420\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,35\\cdot 0,60}{0{,}2420}=\\dfrac{0{,}2100}{0{,}2420}=0{,}8678"
],
"conc": "Sabiendo que tiene fasciola, la probabilidad de que un animal provenga de zona húmeda es 0,8678 (86,78%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Veterinaria · Avicultura",
"enun": "En una empresa avícola se crían aves de tres líneas genéticas. El 50% de las aves proviene de la Línea A, el 30% de la Línea B y el 20% de la Línea C. La proporción de aves con mala conversión alimenticia es del 10% en la Línea A, del 20% en la Línea B y del 35% en la Línea C. Se selecciona un ave al azar.",
"ask": "Determine la probabilidad de que un ave tenga mala conversión alimenticia.",
"alts": [
"$P = 0{,}1800$",
"$P = 0{,}8200$",
"$P = 0{,}0700$",
"$P = 0{,}2000$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,10\\cdot 0,50 + 0,20\\cdot 0,30 + 0,35\\cdot 0,20",
"P(B)=0,0500 + 0,0600 + 0,0700=0{,}1800"
],
"conc": "La probabilidad de que un ave tenga mala conversión alimenticia es 0,1800 (18,00%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Veterinaria · Avicultura",
"enun": "En una empresa avícola se crían aves de tres líneas genéticas. El 50% de las aves proviene de la Línea A, el 30% de la Línea B y el 20% de la Línea C. La proporción de aves con mala conversión alimenticia es del 10% en la Línea A, del 20% en la Línea B y del 35% en la Línea C. Se selecciona un ave al azar.",
"ask": "Determine la probabilidad de que un ave sea de la Línea C, dado que tiene mala conversión alimenticia.",
"alts": [
"$P = 0{,}3889$",
"$P = 0{,}3500$",
"$P = 0{,}0700$",
"$P = 0{,}6111$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,0500 + 0,0600 + 0,0700=0{,}1800\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,35\\cdot 0,20}{0{,}1800}=\\dfrac{0{,}0700}{0{,}1800}=0{,}3889"
],
"conc": "Sabiendo que tiene mala conversión alimenticia, la probabilidad de que un ave sea de la Línea C es 0,3889 (38,89%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Veterinaria · Felinos",
"enun": "En una región se estudia la población felina. El 55% de los gatos son de interior y el 45% son de exterior. La probabilidad de contraer leucemia felina (FeLV) es del 4% en los gatos de interior y del 18% en los gatos de exterior. Se selecciona un gato al azar de la región.",
"ask": "Determine la probabilidad de que un gato contraiga leucemia felina (FeLV).",
"alts": [
"$P = 0{,}1030$",
"$P = 0{,}8970$",
"$P = 0{,}0810$",
"$P = 0{,}4500$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,04\\cdot 0,55 + 0,18\\cdot 0,45",
"P(B)=0,0220 + 0,0810=0{,}1030"
],
"conc": "La probabilidad de que un gato contraiga leucemia felina (FeLV) es 0,1030 (10,30%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Veterinaria · Felinos",
"enun": "En una región se estudia la población felina. El 55% de los gatos son de interior y el 45% son de exterior. La probabilidad de contraer leucemia felina (FeLV) es del 4% en los gatos de interior y del 18% en los gatos de exterior. Se selecciona un gato al azar de la región.",
"ask": "Determine la probabilidad de que un gato sea de exterior, dado que tiene FeLV.",
"alts": [
"$P = 0{,}7864$",
"$P = 0{,}1800$",
"$P = 0{,}0810$",
"$P = 0{,}2136$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,0220 + 0,0810=0{,}1030\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,18\\cdot 0,45}{0{,}1030}=\\dfrac{0{,}0810}{0{,}1030}=0{,}7864"
],
"conc": "Sabiendo que tiene FeLV, la probabilidad de que un gato sea de exterior es 0,7864 (78,64%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Enfermería · Tamizaje HTA",
"enun": "La prevalencia de hipertensión no diagnosticada en una población adulta es del 20%. Una enfermera aplica un test rápido de presión arterial con sensibilidad del 90% (detecta correctamente a los hipertensos) y especificidad del 85% (identifica correctamente a los normotensos). Se evalúa a una persona al azar de esa población.",
"ask": "Determine la probabilidad de que una persona obtenga un test positivo.",
"alts": [
"$P = 0{,}3000$",
"$P = 0{,}7000$",
"$P = 0{,}1800$",
"$P = 0{,}2000$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,90\\cdot 0,20 + 0,15\\cdot 0,80",
"P(B)=0,1800 + 0,1200=0{,}3000"
],
"conc": "La probabilidad de que una persona obtenga un test positivo es 0,3000 (30,00%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Enfermería · Tamizaje HTA",
"enun": "La prevalencia de hipertensión no diagnosticada en una población adulta es del 20%. Una enfermera aplica un test rápido de presión arterial con sensibilidad del 90% (detecta correctamente a los hipertensos) y especificidad del 85% (identifica correctamente a los normotensos). Se evalúa a una persona al azar de esa población.",
"ask": "Determine la probabilidad de que una persona sea realmente hipertensa, dado que obtuvo un test positivo.",
"alts": [
"$P = 0{,}6000$",
"$P = 0{,}9000$",
"$P = 0{,}1800$",
"$P = 0{,}4000$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,1800 + 0,1200=0{,}3000\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,90\\cdot 0,20}{0{,}3000}=\\dfrac{0{,}1800}{0{,}3000}=0{,}6000"
],
"conc": "Sabiendo que obtuvo un test positivo, la probabilidad de que una persona sea realmente hipertensa es 0,6000 (60,00%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Enfermería · Endocrinología",
"enun": "En una campaña de tamizaje de diabetes tipo 2, la prevalencia de la enfermedad en la población estudiada es del 12%. El test rápido de glucemia capilar utilizado tiene una sensibilidad del 88% y una especificidad del 80%. Se evalúa a una persona al azar de la población.",
"ask": "Determine la probabilidad de que una persona obtenga un test positivo.",
"alts": [
"$P = 0{,}2816$",
"$P = 0{,}7184$",
"$P = 0{,}1056$",
"$P = 0{,}1200$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,88\\cdot 0,12 + 0,20\\cdot 0,88",
"P(B)=0,1056 + 0,1760=0{,}2816"
],
"conc": "La probabilidad de que una persona obtenga un test positivo es 0,2816 (28,16%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Enfermería · Endocrinología",
"enun": "En una campaña de tamizaje de diabetes tipo 2, la prevalencia de la enfermedad en la población estudiada es del 12%. El test rápido de glucemia capilar utilizado tiene una sensibilidad del 88% y una especificidad del 80%. Se evalúa a una persona al azar de la población.",
"ask": "Determine la probabilidad de que una persona tenga diabetes, dado que obtuvo un test positivo.",
"alts": [
"$P = 0{,}3750$",
"$P = 0{,}8800$",
"$P = 0{,}1056$",
"$P = 0{,}6250$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,1056 + 0,1760=0{,}2816\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,88\\cdot 0,12}{0{,}2816}=\\dfrac{0{,}1056}{0{,}2816}=0{,}3750"
],
"conc": "Sabiendo que obtuvo un test positivo, la probabilidad de que una persona tenga diabetes es 0,3750 (37,50%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Enfermería · Neumología",
"enun": "En una unidad de urgencias se atiende a pacientes que consultan por disnea. El 45% de estos pacientes tiene EPOC, el 35% tiene asma y el 20% tiene otra causa. La probabilidad de presentar saturación baja (menor a 92%) es del 60% en los pacientes con EPOC, del 30% en los pacientes con asma y del 15% en los de otras causas.",
"ask": "Determine la probabilidad de que un paciente con disnea tenga saturación baja.",
"alts": [
"$P = 0{,}4050$",
"$P = 0{,}5950$",
"$P = 0{,}2700$",
"$P = 0{,}4500$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,60\\cdot 0,45 + 0,30\\cdot 0,35 + 0,15\\cdot 0,20",
"P(B)=0,2700 + 0,1050 + 0,0300=0{,}4050"
],
"conc": "La probabilidad de que un paciente con disnea tenga saturación baja es 0,4050 (40,50%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Enfermería · Neumología",
"enun": "En una unidad de urgencias se atiende a pacientes que consultan por disnea. El 45% de estos pacientes tiene EPOC, el 35% tiene asma y el 20% tiene otra causa. La probabilidad de presentar saturación baja (menor a 92%) es del 60% en los pacientes con EPOC, del 30% en los pacientes con asma y del 15% en los de otras causas.",
"ask": "Determine la probabilidad de que un paciente con disnea tenga EPOC, dado que tiene saturación baja.",
"alts": [
"$P = 0{,}6667$",
"$P = 0{,}6000$",
"$P = 0{,}2700$",
"$P = 0{,}3333$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,2700 + 0,1050 + 0,0300=0{,}4050\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,60\\cdot 0,45}{0{,}4050}=\\dfrac{0{,}2700}{0{,}4050}=0{,}6667"
],
"conc": "Sabiendo que tiene saturación baja, la probabilidad de que un paciente con disnea tenga EPOC es 0,6667 (66,67%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Enfermería · Adulto mayor",
"enun": "En un hogar de larga estadía, el 65% de los adultos mayores tiene deterioro cognitivo leve o mayor. De los residentes que tienen deterioro cognitivo, el 70% presenta al menos una caída durante el año. De los que no tienen deterioro, el 25% también presenta al menos una caída. Se elige un residente al azar.",
"ask": "Determine la probabilidad de que un residente tenga al menos una caída.",
"alts": [
"$P = 0{,}5425$",
"$P = 0{,}4575$",
"$P = 0{,}4550$",
"$P = 0{,}6500$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,70\\cdot 0,65 + 0,25\\cdot 0,35",
"P(B)=0,4550 + 0,0875=0{,}5425"
],
"conc": "La probabilidad de que un residente tenga al menos una caída es 0,5425 (54,25%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Enfermería · Adulto mayor",
"enun": "En un hogar de larga estadía, el 65% de los adultos mayores tiene deterioro cognitivo leve o mayor. De los residentes que tienen deterioro cognitivo, el 70% presenta al menos una caída durante el año. De los que no tienen deterioro, el 25% también presenta al menos una caída. Se elige un residente al azar.",
"ask": "Determine la probabilidad de que un residente tenga deterioro cognitivo, dado que tuvo una caída.",
"alts": [
"$P = 0{,}8387$",
"$P = 0{,}7000$",
"$P = 0{,}4550$",
"$P = 0{,}1613$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,4550 + 0,0875=0{,}5425\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,70\\cdot 0,65}{0{,}5425}=\\dfrac{0{,}4550}{0{,}5425}=0{,}8387"
],
"conc": "Sabiendo que tuvo una caída, la probabilidad de que un residente tenga deterioro cognitivo es 0,8387 (83,87%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Obstetricia · Tamizaje prenatal",
"enun": "La prevalencia de diabetes gestacional (DG) en la población atendida en una maternidad es del 15%. El test de O'Sullivan utilizado para el tamizaje tiene una sensibilidad del 80% y una especificidad del 78%. Se realiza el test a una embarazada al azar de esa población.",
"ask": "Determine la probabilidad de que una embarazada obtenga un test de O'Sullivan positivo.",
"alts": [
"$P = 0{,}3070$",
"$P = 0{,}6930$",
"$P = 0{,}1200$",
"$P = 0{,}1500$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,80\\cdot 0,15 + 0,22\\cdot 0,85",
"P(B)=0,1200 + 0,1870=0{,}3070"
],
"conc": "La probabilidad de que una embarazada obtenga un test de O'Sullivan positivo es 0,3070 (30,70%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Obstetricia · Tamizaje prenatal",
"enun": "La prevalencia de diabetes gestacional (DG) en la población atendida en una maternidad es del 15%. El test de O'Sullivan utilizado para el tamizaje tiene una sensibilidad del 80% y una especificidad del 78%. Se realiza el test a una embarazada al azar de esa población.",
"ask": "Determine la probabilidad de que una embarazada tenga diabetes gestacional, dado que obtuvo un test positivo.",
"alts": [
"$P = 0{,}3909$",
"$P = 0{,}8000$",
"$P = 0{,}1200$",
"$P = 0{,}6091$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,1200 + 0,1870=0{,}3070\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,80\\cdot 0,15}{0{,}3070}=\\dfrac{0{,}1200}{0{,}3070}=0{,}3909"
],
"conc": "Sabiendo que obtuvo un test positivo, la probabilidad de que una embarazada tenga diabetes gestacional es 0,3909 (39,09%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Obstetricia · Parto prematuro",
"enun": "En un hospital regional, el 12% de los partos son prematuros. De los partos prematuros, el 65% presenta ruptura prematura de membranas (RPM) antes del parto. De los partos de término, el 10% también presenta RPM. Se elige un parto al azar de los registros del hospital.",
"ask": "Determine la probabilidad de que un parto presente ruptura prematura de membranas (RPM).",
"alts": [
"$P = 0{,}1660$",
"$P = 0{,}8340$",
"$P = 0{,}0780$",
"$P = 0{,}1200$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,65\\cdot 0,12 + 0,10\\cdot 0,88",
"P(B)=0,0780 + 0,0880=0{,}1660"
],
"conc": "La probabilidad de que un parto presente ruptura prematura de membranas (RPM) es 0,1660 (16,60%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Obstetricia · Parto prematuro",
"enun": "En un hospital regional, el 12% de los partos son prematuros. De los partos prematuros, el 65% presenta ruptura prematura de membranas (RPM) antes del parto. De los partos de término, el 10% también presenta RPM. Se elige un parto al azar de los registros del hospital.",
"ask": "Determine la probabilidad de que un parto sea prematuro, dado que presenta RPM.",
"alts": [
"$P = 0{,}4699$",
"$P = 0{,}6500$",
"$P = 0{,}0780$",
"$P = 0{,}5301$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,0780 + 0,0880=0{,}1660\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,65\\cdot 0,12}{0{,}1660}=\\dfrac{0{,}0780}{0{,}1660}=0{,}4699"
],
"conc": "Sabiendo que presenta RPM, la probabilidad de que un parto sea prematuro es 0,4699 (46,99%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Obstetricia · Tipo de parto",
"enun": "En una clínica, el 55% de los partos son vaginales espontáneos, el 25% son cesáreas electivas y el 20% son cesáreas de urgencia. La probabilidad de que el recién nacido requiera ingreso a la UCI neonatal es del 4% en los partos vaginales, del 6% en las cesáreas electivas y del 22% en las cesáreas de urgencia. Se elige un recién nacido al azar.",
"ask": "Determine la probabilidad de que un recién nacido ingrese a la UCI neonatal.",
"alts": [
"$P = 0{,}0810$",
"$P = 0{,}9190$",
"$P = 0{,}0440$",
"$P = 0{,}2000$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,04\\cdot 0,55 + 0,06\\cdot 0,25 + 0,22\\cdot 0,20",
"P(B)=0,0220 + 0,0150 + 0,0440=0{,}0810"
],
"conc": "La probabilidad de que un recién nacido ingrese a la UCI neonatal es 0,0810 (8,10%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Obstetricia · Tipo de parto",
"enun": "En una clínica, el 55% de los partos son vaginales espontáneos, el 25% son cesáreas electivas y el 20% son cesáreas de urgencia. La probabilidad de que el recién nacido requiera ingreso a la UCI neonatal es del 4% en los partos vaginales, del 6% en las cesáreas electivas y del 22% en las cesáreas de urgencia. Se elige un recién nacido al azar.",
"ask": "Determine la probabilidad de que un recién nacido haya nacido por cesárea de urgencia, dado que ingresó a la UCI.",
"alts": [
"$P = 0{,}5432$",
"$P = 0{,}2200$",
"$P = 0{,}0440$",
"$P = 0{,}4568$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,0220 + 0,0150 + 0,0440=0{,}0810\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,22\\cdot 0,20}{0{,}0810}=\\dfrac{0{,}0440}{0{,}0810}=0{,}5432"
],
"conc": "Sabiendo que ingresó a la UCI, la probabilidad de que un recién nacido haya nacido por cesárea de urgencia es 0,5432 (54,32%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Obstetricia · Depresión postparto",
"enun": "En el seguimiento de puérperas de un centro de salud, el 30% de las puérperas son primíparas y el 70% son multíparas. La probabilidad de desarrollar depresión postparto es del 35% en las primíparas y del 18% en las multíparas. Se elige una puérpera al azar.",
"ask": "Determine la probabilidad de que una puérpera desarrolle depresión postparto.",
"alts": [
"$P = 0{,}2310$",
"$P = 0{,}7690$",
"$P = 0{,}1050$",
"$P = 0{,}3000$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,35\\cdot 0,30 + 0,18\\cdot 0,70",
"P(B)=0,1050 + 0,1260=0{,}2310"
],
"conc": "La probabilidad de que una puérpera desarrolle depresión postparto es 0,2310 (23,10%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Obstetricia · Depresión postparto",
"enun": "En el seguimiento de puérperas de un centro de salud, el 30% de las puérperas son primíparas y el 70% son multíparas. La probabilidad de desarrollar depresión postparto es del 35% en las primíparas y del 18% en las multíparas. Se elige una puérpera al azar.",
"ask": "Determine la probabilidad de que una puérpera sea primípara, dado que tiene depresión postparto.",
"alts": [
"$P = 0{,}4545$",
"$P = 0{,}3500$",
"$P = 0{,}1050$",
"$P = 0{,}5455$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,1050 + 0,1260=0{,}2310\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,35\\cdot 0,30}{0{,}2310}=\\dfrac{0{,}1050}{0{,}2310}=0{,}4545"
],
"conc": "Sabiendo que tiene depresión postparto, la probabilidad de que una puérpera sea primípara es 0,4545 (45,45%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Kinesiología · Rehabilitación",
"enun": "En un servicio de rehabilitación, el 40% de los pacientes tiene adherencia alta al programa y el 60% tiene adherencia baja. La probabilidad de alcanzar los objetivos funcionales es del 85% en los pacientes con adherencia alta y del 30% en los pacientes con adherencia baja. Se elige un paciente al azar del servicio.",
"ask": "Determine la probabilidad de que un paciente alcance los objetivos funcionales.",
"alts": [
"$P = 0{,}5200$",
"$P = 0{,}4800$",
"$P = 0{,}3400$",
"$P = 0{,}4000$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,85\\cdot 0,40 + 0,30\\cdot 0,60",
"P(B)=0,3400 + 0,1800=0{,}5200"
],
"conc": "La probabilidad de que un paciente alcance los objetivos funcionales es 0,5200 (52,00%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Kinesiología · Rehabilitación",
"enun": "En un servicio de rehabilitación, el 40% de los pacientes tiene adherencia alta al programa y el 60% tiene adherencia baja. La probabilidad de alcanzar los objetivos funcionales es del 85% en los pacientes con adherencia alta y del 30% en los pacientes con adherencia baja. Se elige un paciente al azar del servicio.",
"ask": "Determine la probabilidad de que un paciente tuviese adherencia alta, dado que alcanzó los objetivos.",
"alts": [
"$P = 0{,}6538$",
"$P = 0{,}8500$",
"$P = 0{,}3400$",
"$P = 0{,}3462$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,3400 + 0,1800=0{,}5200\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,85\\cdot 0,40}{0{,}5200}=\\dfrac{0{,}3400}{0{,}5200}=0{,}6538"
],
"conc": "Sabiendo que alcanzó los objetivos, la probabilidad de que un paciente tuviese adherencia alta es 0,6538 (65,38%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Kinesiología · Deportiva",
"enun": "En un centro de alto rendimiento, el 50% de los deportistas de élite son de fútbol, el 30% de atletismo y el 20% de natación. La probabilidad de sufrir una lesión musculoesquelética durante la temporada es del 45% en los futbolistas, del 28% en los atletas y del 12% en los nadadores. Se elige un deportista al azar.",
"ask": "Determine la probabilidad de que un deportista de élite se lesione en la temporada.",
"alts": [
"$P = 0{,}3330$",
"$P = 0{,}6670$",
"$P = 0{,}2250$",
"$P = 0{,}5000$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,45\\cdot 0,50 + 0,28\\cdot 0,30 + 0,12\\cdot 0,20",
"P(B)=0,2250 + 0,0840 + 0,0240=0{,}3330"
],
"conc": "La probabilidad de que un deportista de élite se lesione en la temporada es 0,3330 (33,30%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Kinesiología · Deportiva",
"enun": "En un centro de alto rendimiento, el 50% de los deportistas de élite son de fútbol, el 30% de atletismo y el 20% de natación. La probabilidad de sufrir una lesión musculoesquelética durante la temporada es del 45% en los futbolistas, del 28% en los atletas y del 12% en los nadadores. Se elige un deportista al azar.",
"ask": "Determine la probabilidad de que un deportista de élite sea futbolista, dado que se lesionó.",
"alts": [
"$P = 0{,}6757$",
"$P = 0{,}4500$",
"$P = 0{,}2250$",
"$P = 0{,}3243$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,2250 + 0,0840 + 0,0240=0{,}3330\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,45\\cdot 0,50}{0{,}3330}=\\dfrac{0{,}2250}{0{,}3330}=0{,}6757"
],
"conc": "Sabiendo que se lesionó, la probabilidad de que un deportista de élite sea futbolista es 0,6757 (67,57%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Kinesiología · Neurología",
"enun": "En un servicio de neurología, el 25% de los pacientes tiene esclerosis múltiple (EM) y el 75% tiene otra patología neurológica. La probabilidad de requerir ayuda técnica para la marcha es del 60% en los pacientes con EM y del 20% en los pacientes con otras patologías. Se elige un paciente al azar del servicio.",
"ask": "Determine la probabilidad de que un paciente neurológico requiera ayuda técnica para la marcha.",
"alts": [
"$P = 0{,}3000$",
"$P = 0{,}7000$",
"$P = 0{,}1500$",
"$P = 0{,}2500$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,60\\cdot 0,25 + 0,20\\cdot 0,75",
"P(B)=0,1500 + 0,1500=0{,}3000"
],
"conc": "La probabilidad de que un paciente neurológico requiera ayuda técnica para la marcha es 0,3000 (30,00%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Kinesiología · Neurología",
"enun": "En un servicio de neurología, el 25% de los pacientes tiene esclerosis múltiple (EM) y el 75% tiene otra patología neurológica. La probabilidad de requerir ayuda técnica para la marcha es del 60% en los pacientes con EM y del 20% en los pacientes con otras patologías. Se elige un paciente al azar del servicio.",
"ask": "Determine la probabilidad de que un paciente neurológico tenga esclerosis múltiple, dado que requiere ayuda técnica.",
"alts": [
"$P = 0{,}5000$",
"$P = 0{,}6000$",
"$P = 0{,}1500$",
"$P = 0{,}5011$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,1500 + 0,1500=0{,}3000\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,60\\cdot 0,25}{0{,}3000}=\\dfrac{0{,}1500}{0{,}3000}=0{,}5000"
],
"conc": "Sabiendo que requiere ayuda técnica, la probabilidad de que un paciente neurológico tenga esclerosis múltiple es 0,5000 (50,00%)."
},
{
"tipo": "Probabilidad total",
"ctx": "Kinesiología · Gerontología",
"enun": "En una evaluación de adultos mayores de la comunidad, el 35% tiene sarcopenia y el 65% no la tiene. De los adultos mayores que tienen sarcopenia, el 70% presenta déficit de equilibrio. De los que no tienen sarcopenia, el 25% también presenta déficit de equilibrio. Se elige un adulto mayor al azar.",
"ask": "Determine la probabilidad de que un adulto mayor presente déficit de equilibrio.",
"alts": [
"$P = 0{,}4075$",
"$P = 0{,}5925$",
"$P = 0{,}2450$",
"$P = 0{,}3500$"
],
"correct": 0,
"pautaHead": "\\textbf{Probabilidad total: } P(B)=\\sum_i P(B\\mid A_i)\\,P(A_i).",
"pautaSteps": [
"P(B)=0,70\\cdot 0,35 + 0,25\\cdot 0,65",
"P(B)=0,2450 + 0,1625=0{,}4075"
],
"conc": "La probabilidad de que un adulto mayor presente déficit de equilibrio es 0,4075 (40,75%)."
},
{
"tipo": "Teorema de Bayes",
"ctx": "Kinesiología · Gerontología",
"enun": "En una evaluación de adultos mayores de la comunidad, el 35% tiene sarcopenia y el 65% no la tiene. De los adultos mayores que tienen sarcopenia, el 70% presenta déficit de equilibrio. De los que no tienen sarcopenia, el 25% también presenta déficit de equilibrio. Se elige un adulto mayor al azar.",
"ask": "Determine la probabilidad de que un adulto mayor tenga sarcopenia, dado que presenta déficit de equilibrio.",
"alts": [
"$P = 0{,}6012$",
"$P = 0{,}7000$",
"$P = 0{,}2450$",
"$P = 0{,}3988$"
],
"correct": 0,
"pautaHead": "\\textbf{Bayes: } P(A_k\\mid B)=\\dfrac{P(B\\mid A_k)\\,P(A_k)}{P(B)}.",
"pautaSteps": [
"P(B)=0,2450 + 0,1625=0{,}4075\\quad\\text{(probabilidad total)}",
"P(A_k\\mid B)=\\dfrac{0,70\\cdot 0,35}{0{,}4075}=\\dfrac{0{,}2450}{0{,}4075}=0{,}6012"
],
"conc": "Sabiendo que presenta déficit de equilibrio, la probabilidad de que un adulto mayor tenga sarcopenia es 0,6012 (60,12%)."
}
];
