using FlightReservationSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightReservationSystem.Data
{
    public class MyDbContext : DbContext
    {
        public DbSet<Flight> Flights { get; set; }

        public DbSet<Passenger> Passengers { get; set; }

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Users> Users { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }
    }
}
