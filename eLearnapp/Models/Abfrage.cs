using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eLearnapp.Models
{
    public class Abfrage
    {
        public int AbfrageID { get; set; }
        [Required]
        [MaxLength(500)]
        public string Frage { get; set; }
        [Required]
        [MaxLength(1000)]
        public string Antwort { get; set; }
        public int KursID { get; set; }
        public Kurs Kurs { get; set; }
    }
}
