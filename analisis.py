56 #Analizando los datos del registro de empleados
import pandas as pd


#cargar los datos a analizar
datosEmpleados=pd.read_csv("datos_empleados_bar.csv")
#aplicando transformaciones y filtros

#clasificar los empleados con salario mayor a 3 millones
salariosMayoresATres=datosEmpleados.query("`Salario (COP)` > 3000000")
print(salariosMayoresATres.head(5))

#obtener empleados con mas de 10 años de experiencia
empleadosExperienciaDiez=datosEmpleados.query("`Experiencia (años)` > 10")
print(empleadosExperienciaDiez.head(5))

#empleados que trabajan mas de 180 horas
Empleados180=datosEmpleados.query("`Horas laboradas/mes` > 180")
print(Empleados180.head(5))

#empleados cuyo cargo es Bartender
EmpleadosCargo=datosEmpleados.query("`Cargo en el bar`=='Bartender'")
print(EmpleadosCargo.head(5))

