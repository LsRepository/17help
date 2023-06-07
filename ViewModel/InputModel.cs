using System.ComponentModel.DataAnnotations;

namespace ViewModel
{
    public class InputModel
    {
        //[Required(ErrorMessage = "*")]
        public string NickName { get; set; }
        public string? Platform { get; set; }
        public string? PlatformNickName { get; set; }
        public string? PersonalHomepage { get; set; }
        public string? Name { get; set; }
        public DateTime? Birthday { get; set; }
        //public bool? Gender { get; set; }
        //public string? Company { get; set; }
        //public string? City { get; set; }
        //public string? Merit { get; set; }
        //public int? WorkYears { get; set; }
        //public int? Phone { get; set; }
        //public string? Wechat { get; set; }
        //public int? QQ { get; set; }
        //public string? Email { get; set; }
        //public string? Rests { get; set; }
        //public Dictionary <string, string> PlatformNickNameArray { get; set;}
        //public Dictionary<string, string> MeritWorkYearsArray { get; set; }
    }
}