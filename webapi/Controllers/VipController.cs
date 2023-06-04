using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VipController : ControllerBase
    {
        [HttpPost(Name = "PostVip")]
        public int Post()
        {
            return 11111111;
        }
     
    }
}
