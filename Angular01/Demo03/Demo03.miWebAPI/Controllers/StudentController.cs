using Demo03.BusinessLayer;
using Demo03.miWebAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Demo03.miWebAPI.Controllers
{
    [EnableCors("myCORSPolicy")]
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly StudentBL studentBL;
        public StudentController()
        {
            studentBL = new StudentBL();
        }

        [HttpGet]
        public ActionResult<StudentsModel> Get()
        {
            Students result = studentBL.GetStudents();
            StudentsModel students = StudentsModel.ToStudentsModel(result);
            return students;
        }

        [HttpGet(), Route("ById/{id}")]
        public ActionResult<StudentModel> GetById(int id)
        {
            Student result = studentBL.GetStudentById(id);
            StudentModel student = StudentModel.ToStudentModel(result);
            return student;
        }

        [HttpGet(), Route("ByName/{name}")]
        public ActionResult<StudentsModel> GetByName(string name)
        {
            Students result = studentBL.GetStudentsByName(name);
            StudentsModel student = StudentsModel.ToStudentsModel(result);
            return student;
        }

        [HttpPost]
        public ActionResult<StudentModel> PostNewStudent([FromBody] StudentModel model)
        {
            Student student = studentBL.CreateStudent(StudentModel.ToStudent(model));
            StudentModel studentModel = StudentModel.ToStudentModel(student);
            return studentModel;
        }

        [HttpPut]
        public ActionResult<StudentModel> UpdateStudent([FromBody] StudentModel model)
        {
            Student student = studentBL.UpdateStudent(StudentModel.ToStudent(model));
            StudentModel studentModel = StudentModel.ToStudentModel(student);
            return studentModel;
        }

        [HttpDelete, Route("Del/{id}")]
        public ActionResult<bool> DeleteStudent(int id)
        {
            bool result = studentBL.DeleteStudent(id);
            return result;
        }
    }
}
