using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Products;

namespace AngularProductsCRUD.Infrastructure.Repositories;

public class ProductsRepository : GenericRepository<Product>, IProductsRepository
{
    public ProductsRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
    }
}