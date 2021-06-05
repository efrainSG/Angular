using Demo03.BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo03.miWebAPI.Models
{
    public class StudentModel
    {
        public int Id { get; set; }
        public int IdGrade { get; set; }
        public string Name { get; set; }
        public string Grade { get; set; }
        public DateTime Modified { get; set; }

        public static StudentModel ToStudentModel(Student student)
        {
            return new StudentModel
            {
                Id = student.Id,
                IdGrade = student.IdGrade,
                Modified = student.Modified,
                Name = student.Name,
                Grade = student.Grade
            };
        }

        public static Student ToStudent(StudentModel student)
        {
            return new Student
            {
                Id = student.Id,
                IdGrade = student.IdGrade,
                Modified = student.Modified,
                Name = student.Name,
                Grade = student.Grade
            };
        }
    }

    public class StudentsModel
    {
        public List<StudentModel> Items { get; set; }
        public StudentsModel()
        {
            Items = new List<StudentModel>();
        }

        public static StudentsModel ToStudentsModel(Students result)
        {
            StudentsModel studentsModel = new StudentsModel();
            studentsModel.Items.AddRange(result.Items.Select(s => new StudentModel
            {
                Id = s.Id,
                IdGrade = s.IdGrade,
                Modified = s.Modified,
                Name = s.Name,
                Grade = s.Grade
            }));
            return studentsModel;
        }
    }
}
