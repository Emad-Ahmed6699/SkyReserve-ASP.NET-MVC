namespace FlightReservationSystem.Models
{
    public class Booking
    {
        public int Id { get; set; }

        public int FlightId { get; set; }

        public Flight Flight { get; set; }

        public int PassengerId { get; set; }

        public Passenger Passenger { get; set; }

        public string SeatNumber { get; set; }
    }
}
