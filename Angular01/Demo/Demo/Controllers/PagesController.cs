using Demo.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagesController : ControllerBase
    {
        private readonly AngularBackEndContext _context;
        public PagesController(AngularBackEndContext context)
        {
            _context = context;
        }

        // GET: api/Pages  
        [HttpGet]
        public IActionResult Get()
        {
            var pages = _context.Pages.ToList();
            return Ok(pages);
        }

        // GET: api/Pages/5  
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Pages  
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Pages/5  
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5  
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
