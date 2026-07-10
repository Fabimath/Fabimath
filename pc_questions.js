// Banco de 64 ejercicios de Probabilidad Condicional / tablas de contingencia (guia oficial Fabimath)
const PC_QUESTIONS = [
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Veterinaria · Medicina preventiva",
"enun": "En una clínica veterinaria se registraron 200 consultas de perros, clasificadas por sexo y diagnóstico principal.",
"table": {
"head": [
"",
"Infeccioso",
"No infeccioso"
],
"rows": [
[
"Macho",
54,
66
],
[
"Hembra",
32,
48
]
],
"N": 200
},
"ask": "Calcule la probabilidad conjunta P(Macho ∩ Infeccioso):",
"alts": [
"$P = 0{,}2700$",
"$P = 0{,}4500$",
"$P = 0{,}6279$",
"$P = 0{,}7600$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{54}{200}=0{,}2700"
],
"conc": "La probabilidad de Macho y Infeccioso a la vez es 0,2700 (27,00%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Veterinaria · Medicina preventiva",
"enun": "En una clínica veterinaria se registraron 200 consultas de perros, clasificadas por sexo y diagnóstico principal.",
"table": {
"head": [
"",
"Infeccioso",
"No infeccioso"
],
"rows": [
[
"Macho",
54,
66
],
[
"Hembra",
32,
48
]
],
"N": 200
},
"ask": "Calcule la probabilidad de la unión P(Macho ∪ Infeccioso):",
"alts": [
"$P = 0{,}7600$",
"$P = 1{,}0300$",
"$P = 0{,}2700$",
"$P = 1{,}2667$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{120}{200}=0{,}6000\\;;\\quad P(B)=\\dfrac{86}{200}=0{,}4300\\;;\\quad P(A\\cap B)=\\dfrac{54}{200}=0{,}2700",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{120+86-54}{200}=0{,}7600"
],
"conc": "La probabilidad de Macho o Infeccioso (o ambos) es 0,7600 (76,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Veterinaria · Medicina preventiva",
"enun": "En una clínica veterinaria se registraron 200 consultas de perros, clasificadas por sexo y diagnóstico principal.",
"table": {
"head": [
"",
"Infeccioso",
"No infeccioso"
],
"rows": [
[
"Macho",
54,
66
],
[
"Hembra",
32,
48
]
],
"N": 200
},
"ask": "Calcule la probabilidad condicional P(Infeccioso | Macho):",
"alts": [
"$P = 0{,}4500$",
"$P = 0{,}2700$",
"$P = 0{,}6279$",
"$P = 0{,}6000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{54}{120}=0{,}4500",
"\\text{El denominador es el subtotal de }Macho\\ (n=120),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Macho, la probabilidad de Infeccioso es 0,4500 (45,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Veterinaria · Medicina preventiva",
"enun": "En una clínica veterinaria se registraron 200 consultas de perros, clasificadas por sexo y diagnóstico principal.",
"table": {
"head": [
"",
"Infeccioso",
"No infeccioso"
],
"rows": [
[
"Macho",
54,
66
],
[
"Hembra",
32,
48
]
],
"N": 200
},
"ask": "Calcule la probabilidad condicional P(Macho | Infeccioso):",
"alts": [
"$P = 0{,}6279$",
"$P = 0{,}2700$",
"$P = 0{,}4500$",
"$P = 0{,}4300$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{54}{86}=0{,}6279",
"\\text{El denominador es el subtotal de }Infeccioso\\ (n=86)."
],
"conc": "Entre los casos de Infeccioso, la probabilidad de Macho es 0,6279 (62,79%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Veterinaria · Producción bovina",
"enun": "En un fundo se revisaron 150 vacas, clasificadas por condición corporal y estado reproductivo.",
"table": {
"head": [
"",
"Gestante",
"No gestante"
],
"rows": [
[
"Cond. adecuada",
72,
28
],
[
"Cond. deficiente",
18,
32
]
],
"N": 150
},
"ask": "Calcule la probabilidad conjunta P(Cond. adecuada ∩ Gestante):",
"alts": [
"$P = 0{,}4800$",
"$P = 0{,}7200$",
"$P = 0{,}8000$",
"$P = 0{,}7867$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=150.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{72}{150}=0{,}4800"
],
"conc": "La probabilidad de Cond. adecuada y Gestante a la vez es 0,4800 (48,00%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Veterinaria · Producción bovina",
"enun": "En un fundo se revisaron 150 vacas, clasificadas por condición corporal y estado reproductivo.",
"table": {
"head": [
"",
"Gestante",
"No gestante"
],
"rows": [
[
"Cond. adecuada",
72,
28
],
[
"Cond. deficiente",
18,
32
]
],
"N": 150
},
"ask": "Calcule la probabilidad de la unión P(Cond. adecuada ∪ Gestante):",
"alts": [
"$P = 0{,}7867$",
"$P = 1{,}2667$",
"$P = 0{,}4800$",
"$P = 1{,}1800$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=150.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{100}{150}=0{,}6667\\;;\\quad P(B)=\\dfrac{90}{150}=0{,}6000\\;;\\quad P(A\\cap B)=\\dfrac{72}{150}=0{,}4800",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{100+90-72}{150}=0{,}7867"
],
"conc": "La probabilidad de Cond. adecuada o Gestante (o ambos) es 0,7867 (78,67%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Veterinaria · Producción bovina",
"enun": "En un fundo se revisaron 150 vacas, clasificadas por condición corporal y estado reproductivo.",
"table": {
"head": [
"",
"Gestante",
"No gestante"
],
"rows": [
[
"Cond. adecuada",
72,
28
],
[
"Cond. deficiente",
18,
32
]
],
"N": 150
},
"ask": "Calcule la probabilidad condicional P(Gestante | Cond. adecuada):",
"alts": [
"$P = 0{,}7200$",
"$P = 0{,}4800$",
"$P = 0{,}8000$",
"$P = 0{,}6667$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=150.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{72}{100}=0{,}7200",
"\\text{El denominador es el subtotal de }Cond. adecuada\\ (n=100),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Cond. adecuada, la probabilidad de Gestante es 0,7200 (72,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Veterinaria · Producción bovina",
"enun": "En un fundo se revisaron 150 vacas, clasificadas por condición corporal y estado reproductivo.",
"table": {
"head": [
"",
"Gestante",
"No gestante"
],
"rows": [
[
"Cond. adecuada",
72,
28
],
[
"Cond. deficiente",
18,
32
]
],
"N": 150
},
"ask": "Calcule la probabilidad condicional P(Cond. adecuada | Gestante):",
"alts": [
"$P = 0{,}8000$",
"$P = 0{,}4800$",
"$P = 0{,}7200$",
"$P = 0{,}6000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=150.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{72}{90}=0{,}8000",
"\\text{El denominador es el subtotal de }Gestante\\ (n=90)."
],
"conc": "Entre los casos de Gestante, la probabilidad de Cond. adecuada es 0,8000 (80,00%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Veterinaria · Parasitología",
"enun": "Se analizaron 240 muestras fecales de perros, clasificadas por resultado coprológico y zona de procedencia.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"Urbana",
24,
56
],
[
"Rural",
52,
28
],
[
"Periurbana",
38,
42
]
],
"N": 240
},
"ask": "Calcule la probabilidad conjunta P(Rural ∩ Positivo):",
"alts": [
"$P = 0{,}2167$",
"$P = 0{,}6500$",
"$P = 0{,}4561$",
"$P = 0{,}5917$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=240.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{52}{240}=0{,}2167"
],
"conc": "La probabilidad de Rural y Positivo a la vez es 0,2167 (21,67%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Veterinaria · Parasitología",
"enun": "Se analizaron 240 muestras fecales de perros, clasificadas por resultado coprológico y zona de procedencia.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"Urbana",
24,
56
],
[
"Rural",
52,
28
],
[
"Periurbana",
38,
42
]
],
"N": 240
},
"ask": "Calcule la probabilidad de la unión P(Rural ∪ Positivo):",
"alts": [
"$P = 0{,}5917$",
"$P = 0{,}8083$",
"$P = 0{,}2167$",
"$P = 1{,}7750$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=240.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{80}{240}=0{,}3333\\;;\\quad P(B)=\\dfrac{114}{240}=0{,}4750\\;;\\quad P(A\\cap B)=\\dfrac{52}{240}=0{,}2167",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{80+114-52}{240}=0{,}5917"
],
"conc": "La probabilidad de Rural o Positivo (o ambos) es 0,5917 (59,17%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Veterinaria · Parasitología",
"enun": "Se analizaron 240 muestras fecales de perros, clasificadas por resultado coprológico y zona de procedencia.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"Urbana",
24,
56
],
[
"Rural",
52,
28
],
[
"Periurbana",
38,
42
]
],
"N": 240
},
"ask": "Calcule la probabilidad condicional P(Positivo | Rural):",
"alts": [
"$P = 0{,}6500$",
"$P = 0{,}2167$",
"$P = 0{,}4561$",
"$P = 0{,}3333$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=240.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{52}{80}=0{,}6500",
"\\text{El denominador es el subtotal de }Rural\\ (n=80),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Rural, la probabilidad de Positivo es 0,6500 (65,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Veterinaria · Parasitología",
"enun": "Se analizaron 240 muestras fecales de perros, clasificadas por resultado coprológico y zona de procedencia.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"Urbana",
24,
56
],
[
"Rural",
52,
28
],
[
"Periurbana",
38,
42
]
],
"N": 240
},
"ask": "Calcule la probabilidad condicional P(Rural | Positivo):",
"alts": [
"$P = 0{,}4561$",
"$P = 0{,}2167$",
"$P = 0{,}6500$",
"$P = 0{,}4750$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=240.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{52}{114}=0{,}4561",
"\\text{El denominador es el subtotal de }Positivo\\ (n=114)."
],
"conc": "Entre los casos de Positivo, la probabilidad de Rural es 0,4561 (45,61%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Veterinaria · Avicultura",
"enun": "Se inspeccionaron 320 pollos al faenamiento, clasificados por peso y presencia de lesiones.",
"table": {
"head": [
"",
"Con lesión",
"Sin lesión"
],
"rows": [
[
"Peso bajo",
38,
22
],
[
"Peso normal",
44,
156
],
[
"Peso alto",
12,
48
]
],
"N": 320
},
"ask": "Calcule la probabilidad conjunta P(Peso normal ∩ Con lesión):",
"alts": [
"$P = 0{,}1375$",
"$P = 0{,}2200$",
"$P = 0{,}4681$",
"$P = 0{,}7812$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=320.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{44}{320}=0{,}1375"
],
"conc": "La probabilidad de Peso normal y Con lesión a la vez es 0,1375 (13,75%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Veterinaria · Avicultura",
"enun": "Se inspeccionaron 320 pollos al faenamiento, clasificados por peso y presencia de lesiones.",
"table": {
"head": [
"",
"Con lesión",
"Sin lesión"
],
"rows": [
[
"Peso bajo",
38,
22
],
[
"Peso normal",
44,
156
],
[
"Peso alto",
12,
48
]
],
"N": 320
},
"ask": "Calcule la probabilidad de la unión P(Peso normal ∪ Con lesión):",
"alts": [
"$P = 0{,}7812$",
"$P = 0{,}9187$",
"$P = 0{,}1375$",
"$P = 1{,}2500$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=320.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{200}{320}=0{,}6250\\;;\\quad P(B)=\\dfrac{94}{320}=0{,}2938\\;;\\quad P(A\\cap B)=\\dfrac{44}{320}=0{,}1375",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{200+94-44}{320}=0{,}7812"
],
"conc": "La probabilidad de Peso normal o Con lesión (o ambos) es 0,7812 (78,12%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Veterinaria · Avicultura",
"enun": "Se inspeccionaron 320 pollos al faenamiento, clasificados por peso y presencia de lesiones.",
"table": {
"head": [
"",
"Con lesión",
"Sin lesión"
],
"rows": [
[
"Peso bajo",
38,
22
],
[
"Peso normal",
44,
156
],
[
"Peso alto",
12,
48
]
],
"N": 320
},
"ask": "Calcule la probabilidad condicional P(Con lesión | Peso normal):",
"alts": [
"$P = 0{,}2200$",
"$P = 0{,}1375$",
"$P = 0{,}4681$",
"$P = 0{,}6250$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=320.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{44}{200}=0{,}2200",
"\\text{El denominador es el subtotal de }Peso normal\\ (n=200),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Peso normal, la probabilidad de Con lesión es 0,2200 (22,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Veterinaria · Avicultura",
"enun": "Se inspeccionaron 320 pollos al faenamiento, clasificados por peso y presencia de lesiones.",
"table": {
"head": [
"",
"Con lesión",
"Sin lesión"
],
"rows": [
[
"Peso bajo",
38,
22
],
[
"Peso normal",
44,
156
],
[
"Peso alto",
12,
48
]
],
"N": 320
},
"ask": "Calcule la probabilidad condicional P(Peso normal | Con lesión):",
"alts": [
"$P = 0{,}4681$",
"$P = 0{,}1375$",
"$P = 0{,}2200$",
"$P = 0{,}2938$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=320.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{44}{94}=0{,}4681",
"\\text{El denominador es el subtotal de }Con lesión\\ (n=94)."
],
"conc": "Entre los casos de Con lesión, la probabilidad de Peso normal es 0,4681 (46,81%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Enfermería · Salud cardiovascular",
"enun": "En un CESFAM se registraron 180 pacientes hipertensos, clasificados por adherencia y control de presión.",
"table": {
"head": [
"",
"Controlado",
"No controlado"
],
"rows": [
[
"Adherente",
98,
22
],
[
"No adherente",
14,
46
]
],
"N": 180
},
"ask": "Calcule la probabilidad conjunta P(Adherente ∩ Controlado):",
"alts": [
"$P = 0{,}5444$",
"$P = 0{,}8167$",
"$P = 0{,}8750$",
"$P = 0{,}7444$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{98}{180}=0{,}5444"
],
"conc": "La probabilidad de Adherente y Controlado a la vez es 0,5444 (54,44%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Enfermería · Salud cardiovascular",
"enun": "En un CESFAM se registraron 180 pacientes hipertensos, clasificados por adherencia y control de presión.",
"table": {
"head": [
"",
"Controlado",
"No controlado"
],
"rows": [
[
"Adherente",
98,
22
],
[
"No adherente",
14,
46
]
],
"N": 180
},
"ask": "Calcule la probabilidad de la unión P(Adherente ∪ Controlado):",
"alts": [
"$P = 0{,}7444$",
"$P = 1{,}2889$",
"$P = 0{,}5444$",
"$P = 1{,}1167$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{120}{180}=0{,}6667\\;;\\quad P(B)=\\dfrac{112}{180}=0{,}6222\\;;\\quad P(A\\cap B)=\\dfrac{98}{180}=0{,}5444",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{120+112-98}{180}=0{,}7444"
],
"conc": "La probabilidad de Adherente o Controlado (o ambos) es 0,7444 (74,44%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Enfermería · Salud cardiovascular",
"enun": "En un CESFAM se registraron 180 pacientes hipertensos, clasificados por adherencia y control de presión.",
"table": {
"head": [
"",
"Controlado",
"No controlado"
],
"rows": [
[
"Adherente",
98,
22
],
[
"No adherente",
14,
46
]
],
"N": 180
},
"ask": "Calcule la probabilidad condicional P(Controlado | Adherente):",
"alts": [
"$P = 0{,}8167$",
"$P = 0{,}5444$",
"$P = 0{,}8750$",
"$P = 0{,}6667$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{98}{120}=0{,}8167",
"\\text{El denominador es el subtotal de }Adherente\\ (n=120),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Adherente, la probabilidad de Controlado es 0,8167 (81,67%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Enfermería · Salud cardiovascular",
"enun": "En un CESFAM se registraron 180 pacientes hipertensos, clasificados por adherencia y control de presión.",
"table": {
"head": [
"",
"Controlado",
"No controlado"
],
"rows": [
[
"Adherente",
98,
22
],
[
"No adherente",
14,
46
]
],
"N": 180
},
"ask": "Calcule la probabilidad condicional P(Adherente | Controlado):",
"alts": [
"$P = 0{,}8750$",
"$P = 0{,}5444$",
"$P = 0{,}8167$",
"$P = 0{,}6222$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{98}{112}=0{,}8750",
"\\text{El denominador es el subtotal de }Controlado\\ (n=112)."
],
"conc": "Entre los casos de Controlado, la probabilidad de Adherente es 0,8750 (87,50%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Enfermería · Seguridad del paciente",
"enun": "Se revisaron 250 registros hospitalarios, clasificados por turno y ocurrencia de caída.",
"table": {
"head": [
"",
"Caída: Sí",
"Caída: No"
],
"rows": [
[
"Turno diurno",
18,
132
],
[
"Turno nocturno",
32,
68
]
],
"N": 250
},
"ask": "Calcule la probabilidad conjunta P(Turno nocturno ∩ Caída: Sí):",
"alts": [
"$P = 0{,}1280$",
"$P = 0{,}3200$",
"$P = 0{,}6400$",
"$P = 0{,}4720$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=250.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{32}{250}=0{,}1280"
],
"conc": "La probabilidad de Turno nocturno y Caída: Sí a la vez es 0,1280 (12,80%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Enfermería · Seguridad del paciente",
"enun": "Se revisaron 250 registros hospitalarios, clasificados por turno y ocurrencia de caída.",
"table": {
"head": [
"",
"Caída: Sí",
"Caída: No"
],
"rows": [
[
"Turno diurno",
18,
132
],
[
"Turno nocturno",
32,
68
]
],
"N": 250
},
"ask": "Calcule la probabilidad de la unión P(Turno nocturno ∪ Caída: Sí):",
"alts": [
"$P = 0{,}4720$",
"$P = 0{,}6000$",
"$P = 0{,}1280$",
"$P = 1{,}1800$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=250.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{100}{250}=0{,}4000\\;;\\quad P(B)=\\dfrac{50}{250}=0{,}2000\\;;\\quad P(A\\cap B)=\\dfrac{32}{250}=0{,}1280",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{100+50-32}{250}=0{,}4720"
],
"conc": "La probabilidad de Turno nocturno o Caída: Sí (o ambos) es 0,4720 (47,20%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Enfermería · Seguridad del paciente",
"enun": "Se revisaron 250 registros hospitalarios, clasificados por turno y ocurrencia de caída.",
"table": {
"head": [
"",
"Caída: Sí",
"Caída: No"
],
"rows": [
[
"Turno diurno",
18,
132
],
[
"Turno nocturno",
32,
68
]
],
"N": 250
},
"ask": "Calcule la probabilidad condicional P(Caída: Sí | Turno nocturno):",
"alts": [
"$P = 0{,}3200$",
"$P = 0{,}1280$",
"$P = 0{,}6400$",
"$P = 0{,}4000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=250.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{32}{100}=0{,}3200",
"\\text{El denominador es el subtotal de }Turno nocturno\\ (n=100),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Turno nocturno, la probabilidad de Caída: Sí es 0,3200 (32,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Enfermería · Seguridad del paciente",
"enun": "Se revisaron 250 registros hospitalarios, clasificados por turno y ocurrencia de caída.",
"table": {
"head": [
"",
"Caída: Sí",
"Caída: No"
],
"rows": [
[
"Turno diurno",
18,
132
],
[
"Turno nocturno",
32,
68
]
],
"N": 250
},
"ask": "Calcule la probabilidad condicional P(Turno nocturno | Caída: Sí):",
"alts": [
"$P = 0{,}6400$",
"$P = 0{,}1280$",
"$P = 0{,}3200$",
"$P = 0{,}2000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=250.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{32}{50}=0{,}6400",
"\\text{El denominador es el subtotal de }Caída: Sí\\ (n=50)."
],
"conc": "Entre los casos de Caída: Sí, la probabilidad de Turno nocturno es 0,6400 (64,00%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Enfermería · Oncología",
"enun": "Se revisaron 160 pacientes oncológicos, clasificados por tratamiento y presencia de náuseas.",
"table": {
"head": [
"",
"Náuseas: Sí",
"Náuseas: No"
],
"rows": [
[
"Quimioterapia",
44,
16
],
[
"Radioterapia",
18,
42
],
[
"Combinado",
30,
10
]
],
"N": 160
},
"ask": "Calcule la probabilidad conjunta P(Quimioterapia ∩ Náuseas: Sí):",
"alts": [
"$P = 0{,}2750$",
"$P = 0{,}7333$",
"$P = 0{,}4783$",
"$P = 0{,}6750$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=160.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{44}{160}=0{,}2750"
],
"conc": "La probabilidad de Quimioterapia y Náuseas: Sí a la vez es 0,2750 (27,50%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Enfermería · Oncología",
"enun": "Se revisaron 160 pacientes oncológicos, clasificados por tratamiento y presencia de náuseas.",
"table": {
"head": [
"",
"Náuseas: Sí",
"Náuseas: No"
],
"rows": [
[
"Quimioterapia",
44,
16
],
[
"Radioterapia",
18,
42
],
[
"Combinado",
30,
10
]
],
"N": 160
},
"ask": "Calcule la probabilidad de la unión P(Quimioterapia ∪ Náuseas: Sí):",
"alts": [
"$P = 0{,}6750$",
"$P = 0{,}9500$",
"$P = 0{,}2750$",
"$P = 1{,}8000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=160.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{60}{160}=0{,}3750\\;;\\quad P(B)=\\dfrac{92}{160}=0{,}5750\\;;\\quad P(A\\cap B)=\\dfrac{44}{160}=0{,}2750",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{60+92-44}{160}=0{,}6750"
],
"conc": "La probabilidad de Quimioterapia o Náuseas: Sí (o ambos) es 0,6750 (67,50%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Enfermería · Oncología",
"enun": "Se revisaron 160 pacientes oncológicos, clasificados por tratamiento y presencia de náuseas.",
"table": {
"head": [
"",
"Náuseas: Sí",
"Náuseas: No"
],
"rows": [
[
"Quimioterapia",
44,
16
],
[
"Radioterapia",
18,
42
],
[
"Combinado",
30,
10
]
],
"N": 160
},
"ask": "Calcule la probabilidad condicional P(Náuseas: Sí | Quimioterapia):",
"alts": [
"$P = 0{,}7333$",
"$P = 0{,}2750$",
"$P = 0{,}4783$",
"$P = 0{,}3750$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=160.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{44}{60}=0{,}7333",
"\\text{El denominador es el subtotal de }Quimioterapia\\ (n=60),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Quimioterapia, la probabilidad de Náuseas: Sí es 0,7333 (73,33%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Enfermería · Oncología",
"enun": "Se revisaron 160 pacientes oncológicos, clasificados por tratamiento y presencia de náuseas.",
"table": {
"head": [
"",
"Náuseas: Sí",
"Náuseas: No"
],
"rows": [
[
"Quimioterapia",
44,
16
],
[
"Radioterapia",
18,
42
],
[
"Combinado",
30,
10
]
],
"N": 160
},
"ask": "Calcule la probabilidad condicional P(Quimioterapia | Náuseas: Sí):",
"alts": [
"$P = 0{,}4783$",
"$P = 0{,}2750$",
"$P = 0{,}7333$",
"$P = 0{,}5750$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=160.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{44}{92}=0{,}4783",
"\\text{El denominador es el subtotal de }Náuseas: Sí\\ (n=92)."
],
"conc": "Entre los casos de Náuseas: Sí, la probabilidad de Quimioterapia es 0,4783 (47,83%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Enfermería · Salud mental",
"enun": "Se aplicó un tamizaje PHQ-9 a 200 pacientes, clasificados por resultado y grupo etario.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"18–40 años",
28,
52
],
[
"41–60 años",
34,
46
],
[
">60 años",
18,
22
]
],
"N": 200
},
"ask": "Calcule la probabilidad conjunta P(>60 años ∩ Positivo):",
"alts": [
"$P = 0{,}0900$",
"$P = 0{,}4500$",
"$P = 0{,}2250$",
"$P = 0{,}5100$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{18}{200}=0{,}0900"
],
"conc": "La probabilidad de >60 años y Positivo a la vez es 0,0900 (9,00%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Enfermería · Salud mental",
"enun": "Se aplicó un tamizaje PHQ-9 a 200 pacientes, clasificados por resultado y grupo etario.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"18–40 años",
28,
52
],
[
"41–60 años",
34,
46
],
[
">60 años",
18,
22
]
],
"N": 200
},
"ask": "Calcule la probabilidad de la unión P(>60 años ∪ Positivo):",
"alts": [
"$P = 0{,}5100$",
"$P = 0{,}6000$",
"$P = 0{,}0900$",
"$P = 2{,}5500$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{40}{200}=0{,}2000\\;;\\quad P(B)=\\dfrac{80}{200}=0{,}4000\\;;\\quad P(A\\cap B)=\\dfrac{18}{200}=0{,}0900",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{40+80-18}{200}=0{,}5100"
],
"conc": "La probabilidad de >60 años o Positivo (o ambos) es 0,5100 (51,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Enfermería · Salud mental",
"enun": "Se aplicó un tamizaje PHQ-9 a 200 pacientes, clasificados por resultado y grupo etario.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"18–40 años",
28,
52
],
[
"41–60 años",
34,
46
],
[
">60 años",
18,
22
]
],
"N": 200
},
"ask": "Calcule la probabilidad condicional P(Positivo | >60 años):",
"alts": [
"$P = 0{,}4500$",
"$P = 0{,}0900$",
"$P = 0{,}2250$",
"$P = 0{,}2000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{18}{40}=0{,}4500",
"\\text{El denominador es el subtotal de }>60 años\\ (n=40),\\ \\text{no el total }N."
],
"conc": "Entre los casos de >60 años, la probabilidad de Positivo es 0,4500 (45,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Enfermería · Salud mental",
"enun": "Se aplicó un tamizaje PHQ-9 a 200 pacientes, clasificados por resultado y grupo etario.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"18–40 años",
28,
52
],
[
"41–60 años",
34,
46
],
[
">60 años",
18,
22
]
],
"N": 200
},
"ask": "Calcule la probabilidad condicional P(>60 años | Positivo):",
"alts": [
"$P = 0{,}2250$",
"$P = 0{,}0900$",
"$P = 0{,}4500$",
"$P = 0{,}4000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{18}{80}=0{,}2250",
"\\text{El denominador es el subtotal de }Positivo\\ (n=80)."
],
"conc": "Entre los casos de Positivo, la probabilidad de >60 años es 0,2250 (22,50%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Obstetricia · Neonatología",
"enun": "En una maternidad se registraron 300 nacimientos, clasificados por tipo de parto y peso neonatal.",
"table": {
"head": [
"",
"Peso normal",
"Bajo peso"
],
"rows": [
[
"Parto vaginal",
162,
18
],
[
"Cesárea",
108,
12
]
],
"N": 300
},
"ask": "Calcule la probabilidad conjunta P(Parto vaginal ∩ Bajo peso):",
"alts": [
"$P = 0{,}0600$",
"$P = 0{,}1000$",
"$P = 0{,}6000$",
"$P = 0{,}6400$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=300.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{18}{300}=0{,}0600"
],
"conc": "La probabilidad de Parto vaginal y Bajo peso a la vez es 0,0600 (6,00%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Obstetricia · Neonatología",
"enun": "En una maternidad se registraron 300 nacimientos, clasificados por tipo de parto y peso neonatal.",
"table": {
"head": [
"",
"Peso normal",
"Bajo peso"
],
"rows": [
[
"Parto vaginal",
162,
18
],
[
"Cesárea",
108,
12
]
],
"N": 300
},
"ask": "Calcule la probabilidad de la unión P(Parto vaginal ∪ Bajo peso):",
"alts": [
"$P = 0{,}6400$",
"$P = 0{,}7000$",
"$P = 0{,}0600$",
"$P = 1{,}0667$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=300.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{180}{300}=0{,}6000\\;;\\quad P(B)=\\dfrac{30}{300}=0{,}1000\\;;\\quad P(A\\cap B)=\\dfrac{18}{300}=0{,}0600",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{180+30-18}{300}=0{,}6400"
],
"conc": "La probabilidad de Parto vaginal o Bajo peso (o ambos) es 0,6400 (64,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Obstetricia · Neonatología",
"enun": "En una maternidad se registraron 300 nacimientos, clasificados por tipo de parto y peso neonatal.",
"table": {
"head": [
"",
"Peso normal",
"Bajo peso"
],
"rows": [
[
"Parto vaginal",
162,
18
],
[
"Cesárea",
108,
12
]
],
"N": 300
},
"ask": "Calcule la probabilidad condicional P(Bajo peso | Parto vaginal):",
"alts": [
"$P = 0{,}1000$",
"$P = 0{,}0600$",
"$P = 0{,}6000$",
"$P = 0{,}6007$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=300.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{18}{180}=0{,}1000",
"\\text{El denominador es el subtotal de }Parto vaginal\\ (n=180),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Parto vaginal, la probabilidad de Bajo peso es 0,1000 (10,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Obstetricia · Neonatología",
"enun": "En una maternidad se registraron 300 nacimientos, clasificados por tipo de parto y peso neonatal.",
"table": {
"head": [
"",
"Peso normal",
"Bajo peso"
],
"rows": [
[
"Parto vaginal",
162,
18
],
[
"Cesárea",
108,
12
]
],
"N": 300
},
"ask": "Calcule la probabilidad condicional P(Parto vaginal | Bajo peso):",
"alts": [
"$P = 0{,}6000$",
"$P = 0{,}0600$",
"$P = 0{,}1000$",
"$P = 0{,}1007$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=300.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{18}{30}=0{,}6000",
"\\text{El denominador es el subtotal de }Bajo peso\\ (n=30)."
],
"conc": "Entre los casos de Bajo peso, la probabilidad de Parto vaginal es 0,6000 (60,00%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Obstetricia · Lactancia",
"enun": "Se siguió a 220 madres al mes de vida, clasificadas por tipo de parto y tipo de lactancia.",
"table": {
"head": [
"",
"Exclusiva",
"Mixta/Fórmula"
],
"rows": [
[
"Parto vaginal",
88,
32
],
[
"Cesárea electiva",
36,
24
],
[
"Cesárea urgencia",
22,
18
]
],
"N": 220
},
"ask": "Calcule la probabilidad conjunta P(Parto vaginal ∩ Exclusiva):",
"alts": [
"$P = 0{,}4000$",
"$P = 0{,}7333$",
"$P = 0{,}6027$",
"$P = 0{,}8091$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=220.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{88}{220}=0{,}4000"
],
"conc": "La probabilidad de Parto vaginal y Exclusiva a la vez es 0,4000 (40,00%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Obstetricia · Lactancia",
"enun": "Se siguió a 220 madres al mes de vida, clasificadas por tipo de parto y tipo de lactancia.",
"table": {
"head": [
"",
"Exclusiva",
"Mixta/Fórmula"
],
"rows": [
[
"Parto vaginal",
88,
32
],
[
"Cesárea electiva",
36,
24
],
[
"Cesárea urgencia",
22,
18
]
],
"N": 220
},
"ask": "Calcule la probabilidad de la unión P(Parto vaginal ∪ Exclusiva):",
"alts": [
"$P = 0{,}8091$",
"$P = 1{,}2091$",
"$P = 0{,}4000$",
"$P = 1{,}4833$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=220.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{120}{220}=0{,}5455\\;;\\quad P(B)=\\dfrac{146}{220}=0{,}6636\\;;\\quad P(A\\cap B)=\\dfrac{88}{220}=0{,}4000",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{120+146-88}{220}=0{,}8091"
],
"conc": "La probabilidad de Parto vaginal o Exclusiva (o ambos) es 0,8091 (80,91%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Obstetricia · Lactancia",
"enun": "Se siguió a 220 madres al mes de vida, clasificadas por tipo de parto y tipo de lactancia.",
"table": {
"head": [
"",
"Exclusiva",
"Mixta/Fórmula"
],
"rows": [
[
"Parto vaginal",
88,
32
],
[
"Cesárea electiva",
36,
24
],
[
"Cesárea urgencia",
22,
18
]
],
"N": 220
},
"ask": "Calcule la probabilidad condicional P(Exclusiva | Parto vaginal):",
"alts": [
"$P = 0{,}7333$",
"$P = 0{,}4000$",
"$P = 0{,}6027$",
"$P = 0{,}5455$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=220.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{88}{120}=0{,}7333",
"\\text{El denominador es el subtotal de }Parto vaginal\\ (n=120),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Parto vaginal, la probabilidad de Exclusiva es 0,7333 (73,33%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Obstetricia · Lactancia",
"enun": "Se siguió a 220 madres al mes de vida, clasificadas por tipo de parto y tipo de lactancia.",
"table": {
"head": [
"",
"Exclusiva",
"Mixta/Fórmula"
],
"rows": [
[
"Parto vaginal",
88,
32
],
[
"Cesárea electiva",
36,
24
],
[
"Cesárea urgencia",
22,
18
]
],
"N": 220
},
"ask": "Calcule la probabilidad condicional P(Parto vaginal | Exclusiva):",
"alts": [
"$P = 0{,}6027$",
"$P = 0{,}4000$",
"$P = 0{,}7333$",
"$P = 0{,}6636$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=220.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{88}{146}=0{,}6027",
"\\text{El denominador es el subtotal de }Exclusiva\\ (n=146)."
],
"conc": "Entre los casos de Exclusiva, la probabilidad de Parto vaginal es 0,6027 (60,27%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Obstetricia · Diabetes gestacional",
"enun": "Se revisaron 180 fichas de embarazadas, clasificadas por diabetes gestacional y resultado neonatal.",
"table": {
"head": [
"",
"Sin compl.",
"Con compl."
],
"rows": [
[
"Diabetes: Sí",
42,
38
],
[
"Diabetes: No",
88,
12
]
],
"N": 180
},
"ask": "Calcule la probabilidad conjunta P(Diabetes: Sí ∩ Con compl.):",
"alts": [
"$P = 0{,}2111$",
"$P = 0{,}4750$",
"$P = 0{,}7600$",
"$P = 0{,}5111$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{38}{180}=0{,}2111"
],
"conc": "La probabilidad de Diabetes: Sí y Con compl. a la vez es 0,2111 (21,11%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Obstetricia · Diabetes gestacional",
"enun": "Se revisaron 180 fichas de embarazadas, clasificadas por diabetes gestacional y resultado neonatal.",
"table": {
"head": [
"",
"Sin compl.",
"Con compl."
],
"rows": [
[
"Diabetes: Sí",
42,
38
],
[
"Diabetes: No",
88,
12
]
],
"N": 180
},
"ask": "Calcule la probabilidad de la unión P(Diabetes: Sí ∪ Con compl.):",
"alts": [
"$P = 0{,}5111$",
"$P = 0{,}7222$",
"$P = 0{,}2111$",
"$P = 1{,}1500$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{80}{180}=0{,}4444\\;;\\quad P(B)=\\dfrac{50}{180}=0{,}2778\\;;\\quad P(A\\cap B)=\\dfrac{38}{180}=0{,}2111",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{80+50-38}{180}=0{,}5111"
],
"conc": "La probabilidad de Diabetes: Sí o Con compl. (o ambos) es 0,5111 (51,11%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Obstetricia · Diabetes gestacional",
"enun": "Se revisaron 180 fichas de embarazadas, clasificadas por diabetes gestacional y resultado neonatal.",
"table": {
"head": [
"",
"Sin compl.",
"Con compl."
],
"rows": [
[
"Diabetes: Sí",
42,
38
],
[
"Diabetes: No",
88,
12
]
],
"N": 180
},
"ask": "Calcule la probabilidad condicional P(Con compl. | Diabetes: Sí):",
"alts": [
"$P = 0{,}4750$",
"$P = 0{,}2111$",
"$P = 0{,}7600$",
"$P = 0{,}4444$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{38}{80}=0{,}4750",
"\\text{El denominador es el subtotal de }Diabetes: Sí\\ (n=80),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Diabetes: Sí, la probabilidad de Con compl. es 0,4750 (47,50%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Obstetricia · Diabetes gestacional",
"enun": "Se revisaron 180 fichas de embarazadas, clasificadas por diabetes gestacional y resultado neonatal.",
"table": {
"head": [
"",
"Sin compl.",
"Con compl."
],
"rows": [
[
"Diabetes: Sí",
42,
38
],
[
"Diabetes: No",
88,
12
]
],
"N": 180
},
"ask": "Calcule la probabilidad condicional P(Diabetes: Sí | Con compl.):",
"alts": [
"$P = 0{,}7600$",
"$P = 0{,}2111$",
"$P = 0{,}4750$",
"$P = 0{,}2778$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{38}{50}=0{,}7600",
"\\text{El denominador es el subtotal de }Con compl.\\ (n=50)."
],
"conc": "Entre los casos de Con compl., la probabilidad de Diabetes: Sí es 0,7600 (76,00%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Obstetricia · Depresión postparto",
"enun": "Se siguió a 240 puérperas, clasificadas por paridad y tamizaje de depresión postparto.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"Primípara",
54,
66
],
[
"Multípara",
28,
92
]
],
"N": 240
},
"ask": "Calcule la probabilidad conjunta P(Primípara ∩ Positivo):",
"alts": [
"$P = 0{,}2250$",
"$P = 0{,}4500$",
"$P = 0{,}6585$",
"$P = 0{,}6167$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=240.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{54}{240}=0{,}2250"
],
"conc": "La probabilidad de Primípara y Positivo a la vez es 0,2250 (22,50%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Obstetricia · Depresión postparto",
"enun": "Se siguió a 240 puérperas, clasificadas por paridad y tamizaje de depresión postparto.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"Primípara",
54,
66
],
[
"Multípara",
28,
92
]
],
"N": 240
},
"ask": "Calcule la probabilidad de la unión P(Primípara ∪ Positivo):",
"alts": [
"$P = 0{,}6167$",
"$P = 0{,}8417$",
"$P = 0{,}2250$",
"$P = 1{,}2333$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=240.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{120}{240}=0{,}5000\\;;\\quad P(B)=\\dfrac{82}{240}=0{,}3417\\;;\\quad P(A\\cap B)=\\dfrac{54}{240}=0{,}2250",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{120+82-54}{240}=0{,}6167"
],
"conc": "La probabilidad de Primípara o Positivo (o ambos) es 0,6167 (61,67%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Obstetricia · Depresión postparto",
"enun": "Se siguió a 240 puérperas, clasificadas por paridad y tamizaje de depresión postparto.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"Primípara",
54,
66
],
[
"Multípara",
28,
92
]
],
"N": 240
},
"ask": "Calcule la probabilidad condicional P(Positivo | Primípara):",
"alts": [
"$P = 0{,}4500$",
"$P = 0{,}2250$",
"$P = 0{,}6585$",
"$P = 0{,}5000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=240.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{54}{120}=0{,}4500",
"\\text{El denominador es el subtotal de }Primípara\\ (n=120),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Primípara, la probabilidad de Positivo es 0,4500 (45,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Obstetricia · Depresión postparto",
"enun": "Se siguió a 240 puérperas, clasificadas por paridad y tamizaje de depresión postparto.",
"table": {
"head": [
"",
"Positivo",
"Negativo"
],
"rows": [
[
"Primípara",
54,
66
],
[
"Multípara",
28,
92
]
],
"N": 240
},
"ask": "Calcule la probabilidad condicional P(Primípara | Positivo):",
"alts": [
"$P = 0{,}6585$",
"$P = 0{,}2250$",
"$P = 0{,}4500$",
"$P = 0{,}3417$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=240.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{54}{82}=0{,}6585",
"\\text{El denominador es el subtotal de }Positivo\\ (n=82)."
],
"conc": "Entre los casos de Positivo, la probabilidad de Primípara es 0,6585 (65,85%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Kinesiología · Rehabilitación",
"enun": "Se siguió a 200 post-operados de rodilla, clasificados por cumplimiento y resultado funcional.",
"table": {
"head": [
"",
"Satisfactorio",
"No satisfactorio"
],
"rows": [
[
"Cumpl. alto",
78,
12
],
[
"Cumpl. medio",
52,
28
],
[
"Cumpl. bajo",
10,
20
]
],
"N": 200
},
"ask": "Calcule la probabilidad conjunta P(Cumpl. alto ∩ Satisfactorio):",
"alts": [
"$P = 0{,}3900$",
"$P = 0{,}8667$",
"$P = 0{,}5571$",
"$P = 0{,}7600$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{78}{200}=0{,}3900"
],
"conc": "La probabilidad de Cumpl. alto y Satisfactorio a la vez es 0,3900 (39,00%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Kinesiología · Rehabilitación",
"enun": "Se siguió a 200 post-operados de rodilla, clasificados por cumplimiento y resultado funcional.",
"table": {
"head": [
"",
"Satisfactorio",
"No satisfactorio"
],
"rows": [
[
"Cumpl. alto",
78,
12
],
[
"Cumpl. medio",
52,
28
],
[
"Cumpl. bajo",
10,
20
]
],
"N": 200
},
"ask": "Calcule la probabilidad de la unión P(Cumpl. alto ∪ Satisfactorio):",
"alts": [
"$P = 0{,}7600$",
"$P = 1{,}1500$",
"$P = 0{,}3900$",
"$P = 1{,}6889$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{90}{200}=0{,}4500\\;;\\quad P(B)=\\dfrac{140}{200}=0{,}7000\\;;\\quad P(A\\cap B)=\\dfrac{78}{200}=0{,}3900",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{90+140-78}{200}=0{,}7600"
],
"conc": "La probabilidad de Cumpl. alto o Satisfactorio (o ambos) es 0,7600 (76,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Kinesiología · Rehabilitación",
"enun": "Se siguió a 200 post-operados de rodilla, clasificados por cumplimiento y resultado funcional.",
"table": {
"head": [
"",
"Satisfactorio",
"No satisfactorio"
],
"rows": [
[
"Cumpl. alto",
78,
12
],
[
"Cumpl. medio",
52,
28
],
[
"Cumpl. bajo",
10,
20
]
],
"N": 200
},
"ask": "Calcule la probabilidad condicional P(Satisfactorio | Cumpl. alto):",
"alts": [
"$P = 0{,}8667$",
"$P = 0{,}3900$",
"$P = 0{,}5571$",
"$P = 0{,}4500$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{78}{90}=0{,}8667",
"\\text{El denominador es el subtotal de }Cumpl. alto\\ (n=90),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Cumpl. alto, la probabilidad de Satisfactorio es 0,8667 (86,67%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Kinesiología · Rehabilitación",
"enun": "Se siguió a 200 post-operados de rodilla, clasificados por cumplimiento y resultado funcional.",
"table": {
"head": [
"",
"Satisfactorio",
"No satisfactorio"
],
"rows": [
[
"Cumpl. alto",
78,
12
],
[
"Cumpl. medio",
52,
28
],
[
"Cumpl. bajo",
10,
20
]
],
"N": 200
},
"ask": "Calcule la probabilidad condicional P(Cumpl. alto | Satisfactorio):",
"alts": [
"$P = 0{,}5571$",
"$P = 0{,}3900$",
"$P = 0{,}8667$",
"$P = 0{,}7000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=200.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{78}{140}=0{,}5571",
"\\text{El denominador es el subtotal de }Satisfactorio\\ (n=140)."
],
"conc": "Entre los casos de Satisfactorio, la probabilidad de Cumpl. alto es 0,5571 (55,71%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Kinesiología · Laboral",
"enun": "Se evaluaron 160 trabajadores, clasificados por puesto y presencia de dolor lumbar.",
"table": {
"head": [
"",
"Dolor: Sí",
"Dolor: No"
],
"rows": [
[
"Oficina",
18,
42
],
[
"Planta",
32,
28
],
[
"Bodega",
26,
14
]
],
"N": 160
},
"ask": "Calcule la probabilidad conjunta P(Planta ∩ Dolor: Sí):",
"alts": [
"$P = 0{,}2000$",
"$P = 0{,}5333$",
"$P = 0{,}4211$",
"$P = 0{,}6500$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=160.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{32}{160}=0{,}2000"
],
"conc": "La probabilidad de Planta y Dolor: Sí a la vez es 0,2000 (20,00%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Kinesiología · Laboral",
"enun": "Se evaluaron 160 trabajadores, clasificados por puesto y presencia de dolor lumbar.",
"table": {
"head": [
"",
"Dolor: Sí",
"Dolor: No"
],
"rows": [
[
"Oficina",
18,
42
],
[
"Planta",
32,
28
],
[
"Bodega",
26,
14
]
],
"N": 160
},
"ask": "Calcule la probabilidad de la unión P(Planta ∪ Dolor: Sí):",
"alts": [
"$P = 0{,}6500$",
"$P = 0{,}8500$",
"$P = 0{,}2000$",
"$P = 1{,}7333$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=160.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{60}{160}=0{,}3750\\;;\\quad P(B)=\\dfrac{76}{160}=0{,}4750\\;;\\quad P(A\\cap B)=\\dfrac{32}{160}=0{,}2000",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{60+76-32}{160}=0{,}6500"
],
"conc": "La probabilidad de Planta o Dolor: Sí (o ambos) es 0,6500 (65,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Kinesiología · Laboral",
"enun": "Se evaluaron 160 trabajadores, clasificados por puesto y presencia de dolor lumbar.",
"table": {
"head": [
"",
"Dolor: Sí",
"Dolor: No"
],
"rows": [
[
"Oficina",
18,
42
],
[
"Planta",
32,
28
],
[
"Bodega",
26,
14
]
],
"N": 160
},
"ask": "Calcule la probabilidad condicional P(Dolor: Sí | Planta):",
"alts": [
"$P = 0{,}5333$",
"$P = 0{,}2000$",
"$P = 0{,}4211$",
"$P = 0{,}3750$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=160.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{32}{60}=0{,}5333",
"\\text{El denominador es el subtotal de }Planta\\ (n=60),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Planta, la probabilidad de Dolor: Sí es 0,5333 (53,33%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Kinesiología · Laboral",
"enun": "Se evaluaron 160 trabajadores, clasificados por puesto y presencia de dolor lumbar.",
"table": {
"head": [
"",
"Dolor: Sí",
"Dolor: No"
],
"rows": [
[
"Oficina",
18,
42
],
[
"Planta",
32,
28
],
[
"Bodega",
26,
14
]
],
"N": 160
},
"ask": "Calcule la probabilidad condicional P(Planta | Dolor: Sí):",
"alts": [
"$P = 0{,}4211$",
"$P = 0{,}2000$",
"$P = 0{,}5333$",
"$P = 0{,}4750$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=160.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{32}{76}=0{,}4211",
"\\text{El denominador es el subtotal de }Dolor: Sí\\ (n=76)."
],
"conc": "Entre los casos de Dolor: Sí, la probabilidad de Planta es 0,4211 (42,11%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Kinesiología · Deporte",
"enun": "Se evaluaron 180 deportistas amateurs, clasificados por deporte principal e historial de lesión.",
"table": {
"head": [
"",
"Con lesión",
"Sin lesión"
],
"rows": [
[
"Fútbol",
28,
17
],
[
"Running",
22,
23
],
[
"Ciclismo",
14,
31
],
[
"Natación",
8,
37
]
],
"N": 180
},
"ask": "Calcule la probabilidad conjunta P(Fútbol ∩ Con lesión):",
"alts": [
"$P = 0{,}1556$",
"$P = 0{,}6222$",
"$P = 0{,}3889$",
"$P = 0{,}4944$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{28}{180}=0{,}1556"
],
"conc": "La probabilidad de Fútbol y Con lesión a la vez es 0,1556 (15,56%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Kinesiología · Deporte",
"enun": "Se evaluaron 180 deportistas amateurs, clasificados por deporte principal e historial de lesión.",
"table": {
"head": [
"",
"Con lesión",
"Sin lesión"
],
"rows": [
[
"Fútbol",
28,
17
],
[
"Running",
22,
23
],
[
"Ciclismo",
14,
31
],
[
"Natación",
8,
37
]
],
"N": 180
},
"ask": "Calcule la probabilidad de la unión P(Fútbol ∪ Con lesión):",
"alts": [
"$P = 0{,}4944$",
"$P = 0{,}6500$",
"$P = 0{,}1556$",
"$P = 1{,}9778$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{45}{180}=0{,}2500\\;;\\quad P(B)=\\dfrac{72}{180}=0{,}4000\\;;\\quad P(A\\cap B)=\\dfrac{28}{180}=0{,}1556",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{45+72-28}{180}=0{,}4944"
],
"conc": "La probabilidad de Fútbol o Con lesión (o ambos) es 0,4944 (49,44%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Kinesiología · Deporte",
"enun": "Se evaluaron 180 deportistas amateurs, clasificados por deporte principal e historial de lesión.",
"table": {
"head": [
"",
"Con lesión",
"Sin lesión"
],
"rows": [
[
"Fútbol",
28,
17
],
[
"Running",
22,
23
],
[
"Ciclismo",
14,
31
],
[
"Natación",
8,
37
]
],
"N": 180
},
"ask": "Calcule la probabilidad condicional P(Con lesión | Fútbol):",
"alts": [
"$P = 0{,}6222$",
"$P = 0{,}1556$",
"$P = 0{,}3889$",
"$P = 0{,}2500$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{28}{45}=0{,}6222",
"\\text{El denominador es el subtotal de }Fútbol\\ (n=45),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Fútbol, la probabilidad de Con lesión es 0,6222 (62,22%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Kinesiología · Deporte",
"enun": "Se evaluaron 180 deportistas amateurs, clasificados por deporte principal e historial de lesión.",
"table": {
"head": [
"",
"Con lesión",
"Sin lesión"
],
"rows": [
[
"Fútbol",
28,
17
],
[
"Running",
22,
23
],
[
"Ciclismo",
14,
31
],
[
"Natación",
8,
37
]
],
"N": 180
},
"ask": "Calcule la probabilidad condicional P(Fútbol | Con lesión):",
"alts": [
"$P = 0{,}3889$",
"$P = 0{,}1556$",
"$P = 0{,}6222$",
"$P = 0{,}4000$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=180.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{28}{72}=0{,}3889",
"\\text{El denominador es el subtotal de }Con lesión\\ (n=72)."
],
"conc": "Entre los casos de Con lesión, la probabilidad de Fútbol es 0,3889 (38,89%)."
},
{
"tipo": "Probabilidad conjunta P(A∩B)",
"ctx": "Kinesiología · Geriatría",
"enun": "Se evaluaron 120 residentes, clasificados por dependencia funcional y antecedente de caída.",
"table": {
"head": [
"",
"Caída: Sí",
"Caída: No"
],
"rows": [
[
"Independiente",
8,
32
],
[
"Dep. parcial",
18,
22
],
[
"Dep. total",
24,
16
]
],
"N": 120
},
"ask": "Calcule la probabilidad conjunta P(Dep. total ∩ Caída: Sí):",
"alts": [
"$P = 0{,}2000$",
"$P = 0{,}6000$",
"$P = 0{,}4800$",
"$P = 0{,}5500$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=120.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\cap B)=\\dfrac{n(A\\cap B)}{N}=\\dfrac{24}{120}=0{,}2000"
],
"conc": "La probabilidad de Dep. total y Caída: Sí a la vez es 0,2000 (20,00%)."
},
{
"tipo": "Probabilidad de la unión P(A∪B)",
"ctx": "Kinesiología · Geriatría",
"enun": "Se evaluaron 120 residentes, clasificados por dependencia funcional y antecedente de caída.",
"table": {
"head": [
"",
"Caída: Sí",
"Caída: No"
],
"rows": [
[
"Independiente",
8,
32
],
[
"Dep. parcial",
18,
22
],
[
"Dep. total",
24,
16
]
],
"N": 120
},
"ask": "Calcule la probabilidad de la unión P(Dep. total ∪ Caída: Sí):",
"alts": [
"$P = 0{,}5500$",
"$P = 0{,}7500$",
"$P = 0{,}2000$",
"$P = 1{,}6500$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=120.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A)=\\dfrac{40}{120}=0{,}3333\\;;\\quad P(B)=\\dfrac{50}{120}=0{,}4167\\;;\\quad P(A\\cap B)=\\dfrac{24}{120}=0{,}2000",
"P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{40+50-24}{120}=0{,}5500"
],
"conc": "La probabilidad de Dep. total o Caída: Sí (o ambos) es 0,5500 (55,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Kinesiología · Geriatría",
"enun": "Se evaluaron 120 residentes, clasificados por dependencia funcional y antecedente de caída.",
"table": {
"head": [
"",
"Caída: Sí",
"Caída: No"
],
"rows": [
[
"Independiente",
8,
32
],
[
"Dep. parcial",
18,
22
],
[
"Dep. total",
24,
16
]
],
"N": 120
},
"ask": "Calcule la probabilidad condicional P(Caída: Sí | Dep. total):",
"alts": [
"$P = 0{,}6000$",
"$P = 0{,}2000$",
"$P = 0{,}4800$",
"$P = 0{,}3333$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=120.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(B\\mid A)=\\dfrac{n(A\\cap B)}{n(A)}=\\dfrac{24}{40}=0{,}6000",
"\\text{El denominador es el subtotal de }Dep. total\\ (n=40),\\ \\text{no el total }N."
],
"conc": "Entre los casos de Dep. total, la probabilidad de Caída: Sí es 0,6000 (60,00%)."
},
{
"tipo": "Probabilidad condicional P(A|B)",
"ctx": "Kinesiología · Geriatría",
"enun": "Se evaluaron 120 residentes, clasificados por dependencia funcional y antecedente de caída.",
"table": {
"head": [
"",
"Caída: Sí",
"Caída: No"
],
"rows": [
[
"Independiente",
8,
32
],
[
"Dep. parcial",
18,
22
],
[
"Dep. total",
24,
16
]
],
"N": 120
},
"ask": "Calcule la probabilidad condicional P(Dep. total | Caída: Sí):",
"alts": [
"$P = 0{,}4800$",
"$P = 0{,}2000$",
"$P = 0{,}6000$",
"$P = 0{,}4167$"
],
"correct": 0,
"pautaHead": "\\textbf{Total } N=120.\\ \\text{Frecuencias de la tabla.}",
"pautaSteps": [
"P(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}=\\dfrac{24}{50}=0{,}4800",
"\\text{El denominador es el subtotal de }Caída: Sí\\ (n=50)."
],
"conc": "Entre los casos de Caída: Sí, la probabilidad de Dep. total es 0,4800 (48,00%)."
}
];
