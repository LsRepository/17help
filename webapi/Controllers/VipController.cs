using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using ViewModel;

namespace webapi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VipController : ControllerBase
    {
        [HttpPost(Name = "PostVip")]
        public int Post([FromBody] InputModel model)
        {
            return 11111111;
        }

    }


}
