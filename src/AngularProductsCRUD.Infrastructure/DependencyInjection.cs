using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace AngularProductsCRUD.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseInMemoryDatabase("AngularCRUD"));

        services.AddScoped(typeof(GenericRepository<>), typeof(GenericRepository<>));
        services.AddScoped<IProductsRepository, ProductsRepository>();
        services.AddScoped<ICategoriesRepository, CategoriesRepository>();

        return services;
    }
}