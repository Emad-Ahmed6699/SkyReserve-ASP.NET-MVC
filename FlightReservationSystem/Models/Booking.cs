using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FlightReservationSystem.Models
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int FlightId { get; set; }

        [ForeignKey("FlightId")]
        public Flight? Flight { get; set; }

        [Required]
        public int PassengerId { get; set; }

        [ForeignKey("PassengerId")]
        public Passenger? Passenger { get; set; }

        [Required]
        [MaxLength(10)]
        public string? SeatNumber { get; set; }
    }
}
