using AngularProductsCRUD.Domain.Categories;
using AngularProductsCRUD.Domain.Products;
using Microsoft.EntityFrameworkCore;

namespace AngularProductsCRUD.Infrastructure;

public class ApplicationDbContext : DbContext
{
    public DbSet<Category> Categories { get; set; } = null!;
    public DbSet<Product> Products { get; set; } = null!;

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
}