using Demo03.DataLayer;
using System.Linq;

namespace Demo03.BusinessLayer
{
    public class StudentBL
    {
        private readonly StudentDataAccess studentDataAccess;
        public StudentBL()
        {
            studentDataAccess = new StudentDataAccess();
        }

        public Student GetStudentById(int id)
        {
            Estudiante estudiante = studentDataAccess.getStudentById(id);

            return Student.ToStudent(estudiante);
        }

        public Students GetStudents()
        {
            Students students = new Students();

            students.Items.AddRange(studentDataAccess.getStudents().Select(s => new Student
            {
                Id = s.Id,
                IdGrade = s.IdGrado,
                Modified = s.Modificado,
                Name = s.Nombre,
                Grade = s.Elemento.Nombre
            }));
            return students;
        }

        public Students GetStudentsByName(string name)
        {
            Students students = new Students();

            students.Items.AddRange(studentDataAccess.getStudentsByName(name).Select(s => new Student
            {
                Id = s.Id,
                IdGrade = s.IdGrado,
                Modified = s.Modificado,
                Name = s.Nombre,
                Grade = s.Elemento.Nombre
            }));
            return students;
        }

        public Student CreateStudent(Student student)
        {
            Estudiante estudiante = studentDataAccess.createStudent(Student.ToEstudiante(student));

            return Student.ToStudent(estudiante);
        }

        public Student UpdateStudent(Student student)
        {
            Estudiante estudiante = studentDataAccess.updateStudent(Student.ToEstudiante(student));

            return Student.ToStudent(estudiante);
        }

        public bool DeleteStudent(int id)
        {
            bool result = studentDataAccess.deleteStudent(id);
            return result;
        }
    }
}
