using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(destination => destination.PhotoUrl, options => 
                        options.MapFrom( src => src.Photos.FirstOrDefault(pic => pic.IsMain).Url));
            CreateMap<Photo, PhotoDto>();
        }
    }
}
