using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
    public class PersonRepository : IRepositories.IPersonRepository
    {
        private PersonContext _context;
        public PersonRepository(PersonContext context)
        {
            _context = context;
        }     

        public void save(Person person)
        {
            try
            {
                foreach (var child in person.Children)
                {
                    _context.Child.Add(child);
                }

                _context.Person.Add(person);
                int r = _context.SaveChanges();
                var e = r;
            }
            catch(Exception ex)
            {

            }
        }
    }
}
