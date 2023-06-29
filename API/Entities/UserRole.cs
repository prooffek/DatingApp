using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class UserRole : IdentityUserRole<int>
    {
        public AppRole Role { get; set; }
        public AppUser User { get; set; }
    }
}
