Cantidadalumno=int(input("ingrese la cantidad de alumnos a añadir: "))
notamayor=[]
promedio=0
i=0
Totalalumno=[]

while i!=Cantidadalumno:
    alumno=[]
    alumno.append(input("Nombre: "))
    alumno.append(int(input("Edad: ")))
    alumno.append(int(input("Nota: ")))
    Totalalumno.append(alumno)
    notamayor.append(Totalalumno[i][2])
    Totalnota=promedio+alumno[2]
    i += 1
if Cantidadalumno==0:
    print("no hay alumnos")
notamayor.sort(reverse=True)
promedio=Totalnota/Cantidadalumno
print("Alumno: ",Totalalumno)
print("Notas ordenadas de mayor a menor: ",notamayor)
print("Promedio:",promedio)