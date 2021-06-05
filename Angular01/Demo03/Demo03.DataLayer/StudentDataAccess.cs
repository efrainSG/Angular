using System;
using System.Collections.Generic;
using System.Linq;

namespace Demo03.DataLayer
{
    public class StudentDataAccess
    {
        private readonly cotedivEntities dataContext;
        public StudentDataAccess()
        {
            dataContext = new cotedivEntities();
        }

        public List<Estudiante> getStudents()
        {
            return dataContext.Estudiantes.ToList();
        }

        public Estudiante getStudentById(int id)
        {
            Estudiante estudiante = dataContext.Estudiantes.FirstOrDefault(s => s.Id.Equals(id));
            if (estudiante == null)
                estudiante = new Estudiante();
            return estudiante;
        }

        public List<Estudiante> getStudentsByName(string name)
        {
            List<Estudiante> estudiantes = dataContext.Estudiantes.Where(s => s.Nombre.Contains(name)).ToList();
            return estudiantes;
        }

        public Estudiante createStudent(Estudiante estudiante)
        {
            Elemento elemento = dataContext.Elementos.Find(estudiante.IdGrado);
            Estudiante _estudiante = new Estudiante
            {
                Modificado = DateTime.Today,
                Nombre = estudiante.Nombre
            };
            elemento.Estudiantes.Add(_estudiante);
            dataContext.SaveChanges();
            return _estudiante;
        }

        public Estudiante updateStudent(Estudiante estudiante)
        {
            Elemento elemento = dataContext.Elementos.Find(estudiante.IdGrado);
            Estudiante _estudiante = dataContext.Estudiantes.FirstOrDefault(s => s.Id.Equals(estudiante.Id));
            _estudiante.Modificado = DateTime.Today;
            _estudiante.Nombre = estudiante.Nombre;
            elemento.Estudiantes.Add(_estudiante);
            dataContext.SaveChanges();
            return _estudiante;
        }

        public bool deleteStudent(int id)
        {
            Estudiante _estudiante = dataContext.Estudiantes.FirstOrDefault(s => s.Id.Equals(id));
            if (_estudiante == null)
                return false;
            Elemento elemento = dataContext.Elementos.Find(_estudiante.IdGrado);
            elemento.Estudiantes.Remove(_estudiante);
            dataContext.Estudiantes.Remove(_estudiante);
            dataContext.SaveChanges();
            return true;
        }
    }
}
