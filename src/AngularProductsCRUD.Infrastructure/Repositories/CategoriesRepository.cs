using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Categories;

namespace AngularProductsCRUD.Infrastructure.Repositories;

public class CategoriesRepository : GenericRepository<Category>, ICategoriesRepository
{
    public CategoriesRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
    }
}