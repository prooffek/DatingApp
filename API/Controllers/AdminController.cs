using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AdminController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly DataContext _context;

        public AdminController(UserManager<AppUser> userManager, DataContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("users-with-roles")]
        public async Task<ActionResult> GetUsersWithRoles()
        {
            //var test = await _context.UserRoles
            //    .Include(ur => ur.User)
            //    .Include(ur => ur.Role)
            //    .ToListAsync();

            var test2 = await _context.Users
                .Include(u => u.Photos)
                .Include(u => u.UserRoles)
                .ToListAsync();

            var users = await _userManager.Users
                .OrderBy(u => u.UserName)
                .Select(u => new
                {
                    u.Id,
                    UserName = u.UserName,
                    Roles = u.UserRoles.Select(r => r.Role.Name).ToList()
                }).ToListAsync();

            return Ok(users);
        }

        [Authorize(Policy = "ModeratePhote")]
        [HttpGet("photos-to-moderate")]
        public ActionResult GetPhotosForModoration()
        {
            return Ok("Admins or moderators can see this");
        }
    }
}
