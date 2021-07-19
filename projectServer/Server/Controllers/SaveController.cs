using IRepositories;
using Logic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaveController : ControllerBase
    {

        private IPersonRepository _context;
        public SaveController(PersonRepository context)
        {
            _context = context;
        }
       
        [HttpPost]
        [Route("AddPerson")]
        public IActionResult AddPerson( [FromBody]DAL.Person person)
        {
            _context.save(person);
            if (person.personID != 0)
            {
                return Ok(person.personID);
            }
            return NotFound();
        }
    }
}
