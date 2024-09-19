using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkersHoursAPI.Controllers
{
    [ApiController]
    public class WorkersHoursController : ControllerBase
    {
        private readonly DataContext context;

        public WorkersHoursController(DataContext context)
        {
            this.context = context;
        }
        
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public async Task<ActionResult<IEnumerable<WorkerHour>>> GetWorkersHours()
        {
            return await this.context.WorkerHours.ToListAsync();
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<ActionResult<WorkerHour>> SaveWorkerHour(WorkerHour workerHour)
        {
            this.context.WorkerHours.Add(workerHour);
            await this.context.SaveChangesAsync();
            
            return Ok();
        }
    }
}
