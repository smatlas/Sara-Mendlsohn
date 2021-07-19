using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    [Table("Children")]
   public class Child
    {
        public int ChildID { get; set; }
        [required]
        [Column(TypeName = "nvarchar(9)")]
        public string ID { get; set; }
        [required]
        [Column(TypeName = "nvarchar(15)")]
        public string name { get; set; }
        [required]
        public DateTime birthDate { get; set; }
    }
}
