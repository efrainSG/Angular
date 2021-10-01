using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        List<Contact> contacts = new List<Contact>();

        public ContactsController()
        {
            contacts.Add(new Contact { Id = 1, Name = "Efra", Address = "street 1", Phone = "000", Favorite = false });
            contacts.Add(new Contact { Id = 2, Name = "May", Address = "street 1", Phone = "000", Favorite = true });
            contacts.Add(new Contact { Id = 3, Name = "Juan", Address = "street 1", Phone = "000", Favorite = true });
            contacts.Add(new Contact { Id = 4, Name = "Josh", Address = "street 1", Phone = "000", Favorite = true });
            contacts.Add(new Contact { Id = 5, Name = "Yesa", Address = "street 1", Phone = "000", Favorite = true });
            contacts.Add(new Contact { Id = 6, Name = "Casca", Address = "street 1", Phone = "000", Favorite = false });
            contacts.Add(new Contact { Id = 7, Name = "Moon", Address = "street 1", Phone = "000", Favorite = false });
        }

        [HttpGet]
        public ActionResult Index()
        {
            return RedirectToAction("list", "Contacts");
        }

        [HttpGet, Route("list")]
        public ActionResult<List<Contact>> Contacts()
        {
            return contacts.ToList();
        }

        [HttpGet, Route("detail/{id}")]
        public ActionResult<Contact> getContact(int id)
        {
            return contacts.FirstOrDefault(c => c.Id.Equals(id));
        }

        [HttpDelete, Route("quit/{id}")]
        public ActionResult<List<Contact>> delContact(int id)
        {
            return contacts.Where(c => c.Id != id).ToList();
        }

        [HttpPost, Route("add")]
        public ActionResult<List<Contact>> addContact([FromBody] Contact contact)
        {
            contacts.Add(contact);
            return contacts.ToList();
        }
    }
}
