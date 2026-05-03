using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlightReservationSystem.Models
{
    public class Flight
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string? FlightNumber { get; set; }

        [Required]
        [MaxLength(100)]
        public string? FromCity { get; set; }

        [Required]
        [MaxLength(100)]
        public string? ToCity { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
    }
}
