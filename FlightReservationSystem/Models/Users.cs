using System.ComponentModel.DataAnnotations;

namespace FlightReservationSystem.Models
{
    public class Users
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string? Username { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(100)]
        public string? Email { get; set; }

        [Required]
        [MaxLength(255)] // Large enough for hashed passwords
        public string? Password { get; set; }
    }
}
