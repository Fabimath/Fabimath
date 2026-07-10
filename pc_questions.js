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
"ask": "Calcule la probabilidad de que un perro sea macho y tenga un diagnóstico infeccioso.",
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
"conc": "La probabilidad de que un perro sea macho y tenga un diagnóstico infeccioso es 0,2700 (27,00%)."
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
"ask": "Calcule la probabilidad de que un perro sea macho o tenga un diagnóstico infeccioso (o ambas).",
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
"conc": "La probabilidad de que un perro sea macho o tenga un diagnóstico infeccioso (o ambas) es 0,7600 (76,00%)."
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
"ask": "Calcule la probabilidad de que un perro tenga un diagnóstico infeccioso, dado que es macho.",
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
"\\text{El denominador es el subtotal de la condición }(n=120),\\ \\text{no el total }N."
],
"conc": "Sabiendo que es macho, la probabilidad de que un perro tenga un diagnóstico infeccioso es 0,4500 (45,00%)."
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
"ask": "Calcule la probabilidad de que un perro sea macho, dado que tiene un diagnóstico infeccioso.",
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
"\\text{El denominador es el subtotal de la condición }(n=86)."
],
"conc": "Sabiendo que tiene un diagnóstico infeccioso, la probabilidad de que un perro sea macho es 0,6279 (62,79%)."
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
"ask": "Calcule la probabilidad de que una vaca tenga condición corporal adecuada y esté gestante.",
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
"conc": "La probabilidad de que una vaca tenga condición corporal adecuada y esté gestante es 0,4800 (48,00%)."
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
"ask": "Calcule la probabilidad de que una vaca tenga condición corporal adecuada o esté gestante (o ambas).",
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
"conc": "La probabilidad de que una vaca tenga condición corporal adecuada o esté gestante (o ambas) es 0,7867 (78,67%)."
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
"ask": "Calcule la probabilidad de que una vaca esté gestante, dado que tiene condición corporal adecuada.",
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
"\\text{El denominador es el subtotal de la condición }(n=100),\\ \\text{no el total }N."
],
"conc": "Sabiendo que tiene condición corporal adecuada, la probabilidad de que una vaca esté gestante es 0,7200 (72,00%)."
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
"ask": "Calcule la probabilidad de que una vaca tenga condición corporal adecuada, dado que está gestante.",
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
"\\text{El denominador es el subtotal de la condición }(n=90)."
],
"conc": "Sabiendo que está gestante, la probabilidad de que una vaca tenga condición corporal adecuada es 0,8000 (80,00%)."
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
"ask": "Calcule la probabilidad de que una muestra provenga de zona rural y resulte positiva al coprológico.",
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
"conc": "La probabilidad de que una muestra provenga de zona rural y resulte positiva al coprológico es 0,2167 (21,67%)."
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
"ask": "Calcule la probabilidad de que una muestra provenga de zona rural o resulte positiva al coprológico (o ambas).",
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
"conc": "La probabilidad de que una muestra provenga de zona rural o resulte positiva al coprológico (o ambas) es 0,5917 (59,17%)."
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
"ask": "Calcule la probabilidad de que una muestra resulte positiva al coprológico, dado que proviene de zona rural.",
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
"\\text{El denominador es el subtotal de la condición }(n=80),\\ \\text{no el total }N."
],
"conc": "Sabiendo que proviene de zona rural, la probabilidad de que una muestra resulte positiva al coprológico es 0,6500 (65,00%)."
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
"ask": "Calcule la probabilidad de que una muestra provenga de zona rural, dado que resultó positiva al coprológico.",
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
"\\text{El denominador es el subtotal de la condición }(n=114)."
],
"conc": "Sabiendo que resultó positiva al coprológico, la probabilidad de que una muestra provenga de zona rural es 0,4561 (45,61%)."
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
"ask": "Calcule la probabilidad de que un pollo tenga peso normal y presente lesiones.",
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
"conc": "La probabilidad de que un pollo tenga peso normal y presente lesiones es 0,1375 (13,75%)."
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
"ask": "Calcule la probabilidad de que un pollo tenga peso normal o presente lesiones (o ambas).",
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
"conc": "La probabilidad de que un pollo tenga peso normal o presente lesiones (o ambas) es 0,7812 (78,12%)."
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
"ask": "Calcule la probabilidad de que un pollo presente lesiones, dado que tiene peso normal.",
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
"\\text{El denominador es el subtotal de la condición }(n=200),\\ \\text{no el total }N."
],
"conc": "Sabiendo que tiene peso normal, la probabilidad de que un pollo presente lesiones es 0,2200 (22,00%)."
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
"ask": "Calcule la probabilidad de que un pollo tenga peso normal, dado que presenta lesiones.",
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
"\\text{El denominador es el subtotal de la condición }(n=94)."
],
"conc": "Sabiendo que presenta lesiones, la probabilidad de que un pollo tenga peso normal es 0,4681 (46,81%)."
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
"ask": "Calcule la probabilidad de que un paciente sea adherente al tratamiento y tenga la presión controlada.",
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
"conc": "La probabilidad de que un paciente sea adherente al tratamiento y tenga la presión controlada es 0,5444 (54,44%)."
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
"ask": "Calcule la probabilidad de que un paciente sea adherente al tratamiento o tenga la presión controlada (o ambas).",
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
"conc": "La probabilidad de que un paciente sea adherente al tratamiento o tenga la presión controlada (o ambas) es 0,7444 (74,44%)."
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
"ask": "Calcule la probabilidad de que un paciente tenga la presión controlada, dado que es adherente al tratamiento.",
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
"\\text{El denominador es el subtotal de la condición }(n=120),\\ \\text{no el total }N."
],
"conc": "Sabiendo que es adherente al tratamiento, la probabilidad de que un paciente tenga la presión controlada es 0,8167 (81,67%)."
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
"ask": "Calcule la probabilidad de que un paciente sea adherente al tratamiento, dado que tiene la presión controlada.",
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
"\\text{El denominador es el subtotal de la condición }(n=112)."
],
"conc": "Sabiendo que tiene la presión controlada, la probabilidad de que un paciente sea adherente al tratamiento es 0,8750 (87,50%)."
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
"ask": "Calcule la probabilidad de que un paciente esté en turno nocturno y haya sufrido una caída.",
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
"conc": "La probabilidad de que un paciente esté en turno nocturno y haya sufrido una caída es 0,1280 (12,80%)."
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
"ask": "Calcule la probabilidad de que un paciente esté en turno nocturno o haya sufrido una caída (o ambas).",
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
"conc": "La probabilidad de que un paciente esté en turno nocturno o haya sufrido una caída (o ambas) es 0,4720 (47,20%)."
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
"ask": "Calcule la probabilidad de que un paciente haya sufrido una caída, dado que está en turno nocturno.",
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
"\\text{El denominador es el subtotal de la condición }(n=100),\\ \\text{no el total }N."
],
"conc": "Sabiendo que está en turno nocturno, la probabilidad de que un paciente haya sufrido una caída es 0,3200 (32,00%)."
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
"ask": "Calcule la probabilidad de que un paciente esté en turno nocturno, dado que sufrió una caída.",
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
"\\text{El denominador es el subtotal de la condición }(n=50)."
],
"conc": "Sabiendo que sufrió una caída, la probabilidad de que un paciente esté en turno nocturno es 0,6400 (64,00%)."
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
"ask": "Calcule la probabilidad de que un paciente reciba quimioterapia y presente náuseas.",
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
"conc": "La probabilidad de que un paciente reciba quimioterapia y presente náuseas es 0,2750 (27,50%)."
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
"ask": "Calcule la probabilidad de que un paciente reciba quimioterapia o presente náuseas (o ambas).",
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
"conc": "La probabilidad de que un paciente reciba quimioterapia o presente náuseas (o ambas) es 0,6750 (67,50%)."
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
"ask": "Calcule la probabilidad de que un paciente presente náuseas, dado que recibe quimioterapia.",
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
"\\text{El denominador es el subtotal de la condición }(n=60),\\ \\text{no el total }N."
],
"conc": "Sabiendo que recibe quimioterapia, la probabilidad de que un paciente presente náuseas es 0,7333 (73,33%)."
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
"ask": "Calcule la probabilidad de que un paciente reciba quimioterapia, dado que presenta náuseas.",
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
"\\text{El denominador es el subtotal de la condición }(n=92)."
],
"conc": "Sabiendo que presenta náuseas, la probabilidad de que un paciente reciba quimioterapia es 0,4783 (47,83%)."
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
"ask": "Calcule la probabilidad de que un paciente sea mayor de 60 años y tenga un tamizaje positivo.",
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
"conc": "La probabilidad de que un paciente sea mayor de 60 años y tenga un tamizaje positivo es 0,0900 (9,00%)."
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
"ask": "Calcule la probabilidad de que un paciente sea mayor de 60 años o tenga un tamizaje positivo (o ambas).",
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
"conc": "La probabilidad de que un paciente sea mayor de 60 años o tenga un tamizaje positivo (o ambas) es 0,5100 (51,00%)."
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
"ask": "Calcule la probabilidad de que un paciente tenga un tamizaje positivo, dado que es mayor de 60 años.",
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
"\\text{El denominador es el subtotal de la condición }(n=40),\\ \\text{no el total }N."
],
"conc": "Sabiendo que es mayor de 60 años, la probabilidad de que un paciente tenga un tamizaje positivo es 0,4500 (45,00%)."
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
"ask": "Calcule la probabilidad de que un paciente sea mayor de 60 años, dado que tiene un tamizaje positivo.",
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
"\\text{El denominador es el subtotal de la condición }(n=80)."
],
"conc": "Sabiendo que tiene un tamizaje positivo, la probabilidad de que un paciente sea mayor de 60 años es 0,2250 (22,50%)."
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
"ask": "Calcule la probabilidad de que un recién nacido haya nacido por parto vaginal y tenga bajo peso al nacer.",
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
"conc": "La probabilidad de que un recién nacido haya nacido por parto vaginal y tenga bajo peso al nacer es 0,0600 (6,00%)."
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
"ask": "Calcule la probabilidad de que un recién nacido haya nacido por parto vaginal o tenga bajo peso al nacer (o ambas).",
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
"conc": "La probabilidad de que un recién nacido haya nacido por parto vaginal o tenga bajo peso al nacer (o ambas) es 0,6400 (64,00%)."
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
"ask": "Calcule la probabilidad de que un recién nacido tenga bajo peso al nacer, dado que nació por parto vaginal.",
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
"\\text{El denominador es el subtotal de la condición }(n=180),\\ \\text{no el total }N."
],
"conc": "Sabiendo que nació por parto vaginal, la probabilidad de que un recién nacido tenga bajo peso al nacer es 0,1000 (10,00%)."
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
"ask": "Calcule la probabilidad de que un recién nacido haya nacido por parto vaginal, dado que tiene bajo peso al nacer.",
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
"\\text{El denominador es el subtotal de la condición }(n=30)."
],
"conc": "Sabiendo que tiene bajo peso al nacer, la probabilidad de que un recién nacido haya nacido por parto vaginal es 0,6000 (60,00%)."
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
"ask": "Calcule la probabilidad de que una madre haya tenido parto vaginal y dé lactancia exclusiva.",
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
"conc": "La probabilidad de que una madre haya tenido parto vaginal y dé lactancia exclusiva es 0,4000 (40,00%)."
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
"ask": "Calcule la probabilidad de que una madre haya tenido parto vaginal o dé lactancia exclusiva (o ambas).",
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
"conc": "La probabilidad de que una madre haya tenido parto vaginal o dé lactancia exclusiva (o ambas) es 0,8091 (80,91%)."
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
"ask": "Calcule la probabilidad de que una madre dé lactancia exclusiva, dado que tuvo parto vaginal.",
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
"\\text{El denominador es el subtotal de la condición }(n=120),\\ \\text{no el total }N."
],
"conc": "Sabiendo que tuvo parto vaginal, la probabilidad de que una madre dé lactancia exclusiva es 0,7333 (73,33%)."
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
"ask": "Calcule la probabilidad de que una madre haya tenido parto vaginal, dado que da lactancia exclusiva.",
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
"\\text{El denominador es el subtotal de la condición }(n=146)."
],
"conc": "Sabiendo que da lactancia exclusiva, la probabilidad de que una madre haya tenido parto vaginal es 0,6027 (60,27%)."
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
"ask": "Calcule la probabilidad de que una embarazada tenga diabetes gestacional y presente complicaciones neonatales.",
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
"conc": "La probabilidad de que una embarazada tenga diabetes gestacional y presente complicaciones neonatales es 0,2111 (21,11%)."
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
"ask": "Calcule la probabilidad de que una embarazada tenga diabetes gestacional o presente complicaciones neonatales (o ambas).",
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
"conc": "La probabilidad de que una embarazada tenga diabetes gestacional o presente complicaciones neonatales (o ambas) es 0,5111 (51,11%)."
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
"ask": "Calcule la probabilidad de que una embarazada presente complicaciones neonatales, dado que tiene diabetes gestacional.",
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
"\\text{El denominador es el subtotal de la condición }(n=80),\\ \\text{no el total }N."
],
"conc": "Sabiendo que tiene diabetes gestacional, la probabilidad de que una embarazada presente complicaciones neonatales es 0,4750 (47,50%)."
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
"ask": "Calcule la probabilidad de que una embarazada tenga diabetes gestacional, dado que presentó complicaciones neonatales.",
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
"\\text{El denominador es el subtotal de la condición }(n=50)."
],
"conc": "Sabiendo que presentó complicaciones neonatales, la probabilidad de que una embarazada tenga diabetes gestacional es 0,7600 (76,00%)."
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
"ask": "Calcule la probabilidad de que una puérpera sea primípara y tenga un tamizaje positivo.",
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
"conc": "La probabilidad de que una puérpera sea primípara y tenga un tamizaje positivo es 0,2250 (22,50%)."
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
"ask": "Calcule la probabilidad de que una puérpera sea primípara o tenga un tamizaje positivo (o ambas).",
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
"conc": "La probabilidad de que una puérpera sea primípara o tenga un tamizaje positivo (o ambas) es 0,6167 (61,67%)."
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
"ask": "Calcule la probabilidad de que una puérpera tenga un tamizaje positivo, dado que es primípara.",
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
"\\text{El denominador es el subtotal de la condición }(n=120),\\ \\text{no el total }N."
],
"conc": "Sabiendo que es primípara, la probabilidad de que una puérpera tenga un tamizaje positivo es 0,4500 (45,00%)."
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
"ask": "Calcule la probabilidad de que una puérpera sea primípara, dado que tiene un tamizaje positivo.",
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
"\\text{El denominador es el subtotal de la condición }(n=82)."
],
"conc": "Sabiendo que tiene un tamizaje positivo, la probabilidad de que una puérpera sea primípara es 0,6585 (65,85%)."
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
"ask": "Calcule la probabilidad de que un paciente tenga cumplimiento alto del programa y tenga un resultado satisfactorio.",
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
"conc": "La probabilidad de que un paciente tenga cumplimiento alto del programa y tenga un resultado satisfactorio es 0,3900 (39,00%)."
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
"ask": "Calcule la probabilidad de que un paciente tenga cumplimiento alto del programa o tenga un resultado satisfactorio (o ambas).",
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
"conc": "La probabilidad de que un paciente tenga cumplimiento alto del programa o tenga un resultado satisfactorio (o ambas) es 0,7600 (76,00%)."
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
"ask": "Calcule la probabilidad de que un paciente tenga un resultado satisfactorio, dado que tiene cumplimiento alto del programa.",
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
"\\text{El denominador es el subtotal de la condición }(n=90),\\ \\text{no el total }N."
],
"conc": "Sabiendo que tiene cumplimiento alto del programa, la probabilidad de que un paciente tenga un resultado satisfactorio es 0,8667 (86,67%)."
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
"ask": "Calcule la probabilidad de que un paciente tenga cumplimiento alto del programa, dado que tiene un resultado satisfactorio.",
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
"\\text{El denominador es el subtotal de la condición }(n=140)."
],
"conc": "Sabiendo que tiene un resultado satisfactorio, la probabilidad de que un paciente tenga cumplimiento alto del programa es 0,5571 (55,71%)."
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
"ask": "Calcule la probabilidad de que un trabajador trabaje en planta y presente dolor lumbar.",
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
"conc": "La probabilidad de que un trabajador trabaje en planta y presente dolor lumbar es 0,2000 (20,00%)."
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
"ask": "Calcule la probabilidad de que un trabajador trabaje en planta o presente dolor lumbar (o ambas).",
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
"conc": "La probabilidad de que un trabajador trabaje en planta o presente dolor lumbar (o ambas) es 0,6500 (65,00%)."
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
"ask": "Calcule la probabilidad de que un trabajador presente dolor lumbar, dado que trabaja en planta.",
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
"\\text{El denominador es el subtotal de la condición }(n=60),\\ \\text{no el total }N."
],
"conc": "Sabiendo que trabaja en planta, la probabilidad de que un trabajador presente dolor lumbar es 0,5333 (53,33%)."
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
"ask": "Calcule la probabilidad de que un trabajador trabaje en planta, dado que presenta dolor lumbar.",
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
"\\text{El denominador es el subtotal de la condición }(n=76)."
],
"conc": "Sabiendo que presenta dolor lumbar, la probabilidad de que un trabajador trabaje en planta es 0,4211 (42,11%)."
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
"ask": "Calcule la probabilidad de que un deportista practique fútbol y haya tenido una lesión en el último año.",
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
"conc": "La probabilidad de que un deportista practique fútbol y haya tenido una lesión en el último año es 0,1556 (15,56%)."
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
"ask": "Calcule la probabilidad de que un deportista practique fútbol o haya tenido una lesión en el último año (o ambas).",
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
"conc": "La probabilidad de que un deportista practique fútbol o haya tenido una lesión en el último año (o ambas) es 0,4944 (49,44%)."
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
"ask": "Calcule la probabilidad de que un deportista haya tenido una lesión en el último año, dado que practica fútbol.",
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
"\\text{El denominador es el subtotal de la condición }(n=45),\\ \\text{no el total }N."
],
"conc": "Sabiendo que practica fútbol, la probabilidad de que un deportista haya tenido una lesión en el último año es 0,6222 (62,22%)."
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
"ask": "Calcule la probabilidad de que un deportista practique fútbol, dado que tuvo una lesión en el último año.",
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
"\\text{El denominador es el subtotal de la condición }(n=72)."
],
"conc": "Sabiendo que tuvo una lesión en el último año, la probabilidad de que un deportista practique fútbol es 0,3889 (38,89%)."
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
"ask": "Calcule la probabilidad de que un residente sea dependiente total y haya sufrido una caída.",
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
"conc": "La probabilidad de que un residente sea dependiente total y haya sufrido una caída es 0,2000 (20,00%)."
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
"ask": "Calcule la probabilidad de que un residente sea dependiente total o haya sufrido una caída (o ambas).",
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
"conc": "La probabilidad de que un residente sea dependiente total o haya sufrido una caída (o ambas) es 0,5500 (55,00%)."
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
"ask": "Calcule la probabilidad de que un residente haya sufrido una caída, dado que es dependiente total.",
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
"\\text{El denominador es el subtotal de la condición }(n=40),\\ \\text{no el total }N."
],
"conc": "Sabiendo que es dependiente total, la probabilidad de que un residente haya sufrido una caída es 0,6000 (60,00%)."
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
"ask": "Calcule la probabilidad de que un residente sea dependiente total, dado que sufrió una caída.",
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
"\\text{El denominador es el subtotal de la condición }(n=50)."
],
"conc": "Sabiendo que sufrió una caída, la probabilidad de que un residente sea dependiente total es 0,4800 (48,00%)."
}
];
