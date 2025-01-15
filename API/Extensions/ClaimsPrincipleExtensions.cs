using System.Security.Authentication;
using System.Security.Claims;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class ClaimsPrincipleExtensions
{
    public static async Task<AppUser> GetUserByEmail(this UserManager<AppUser> userManager, ClaimsPrincipal claims)
    {
        return await userManager.Users.FirstOrDefaultAsync(x => x.Email == claims.GetEmail()) ?? throw new AuthenticationException("User not found");
    }

    public static async Task<AppUser> GetUserByEmailWithAddress(this UserManager<AppUser> userManager, ClaimsPrincipal claims)
    {
        return await userManager.Users.Include(user => user.Address).FirstOrDefaultAsync(x => x.Email == claims.GetEmail()) ?? throw new AuthenticationException("User not found");
    }

    public static string GetEmail(this ClaimsPrincipal claims)
    {
        return claims.FindFirstValue(ClaimTypes.Email) ?? throw new AuthenticationException("Email not found");
    }
}