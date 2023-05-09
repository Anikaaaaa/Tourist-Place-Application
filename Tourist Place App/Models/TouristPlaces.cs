using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tourist_Place_App.Models
{
    public class TouristPlaces
    {
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Address { get; set; }
        [Required]
        [Range(1,5)]
        public decimal Rating { get; set; }
        public string? Type { get; set; }
        public string? Picture { get; set; }
    }
}
