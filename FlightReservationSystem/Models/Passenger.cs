using System.ComponentModel.DataAnnotations;

namespace FlightReservationSystem.Models
{
    public class Passenger
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string? FullName { get; set; }

        [Required]
        [MaxLength(50)]
        public string? PassportNumber { get; set; }
    }
}
