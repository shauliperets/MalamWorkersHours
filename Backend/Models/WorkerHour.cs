namespace Backend.Models
{
    public class WorkerHour
    {
        public int Id { get; set; }
        public string WorkerName { get; set; }
        public string TaskName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

    }
}