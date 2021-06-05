using Demo03.DataLayer;
using System;
using System.Collections.Generic;

namespace Demo03.BusinessLayer
{
    public class Student
    {
        public int Id { get; set; }
        public int IdGrade { get; set; }
        public string Grade { get; set; }
        public string Name { get; set; }
        public DateTime Modified { get; set; }

        public static Estudiante ToEstudiante(Student student)
        {
            return new Estudiante
            {
                Id = student.Id,
                IdGrado = student.IdGrade,
                Modificado = student.Modified,
                Nombre = student.Name
            };
        }

        public static Student ToStudent(Estudiante estudiante)
        {
            return new Student
            {
                Id = estudiante.Id,
                IdGrade = estudiante.IdGrado,
                Name = estudiante.Nombre,
                Modified = estudiante.Modificado,
                Grade = estudiante.Elemento.Nombre
            };
        }
    }

    public class Students
    {
        public List<Student> Items { get; set; }
        public Students()
        {
            Items = new List<Student>();
        }
    }
}
