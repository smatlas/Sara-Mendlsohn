using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    [Table("Person")]
    public class Person
    {          
        public int personID { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(15)")]
        public string lastName  { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(9)")]
        public string ID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(15)")]
        public string birthDate { get; set; }
        [Required]
        public String kind { get; set; }
        [Required]
        public string HMO { get; set; }
        [Required]
        public HashSet<Child> Children { get; set; }
    }
}
