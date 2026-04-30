namespace FlightReservationSystem.Models
{
    public class Flight
    {
        public int Id { get; set; }

        public string FlightNumber { get; set; }

        public string FromCity { get; set; }

        public string ToCity { get; set; }

        public decimal Price { get; set; }
    }
}
