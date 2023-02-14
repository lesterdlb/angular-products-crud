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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .HasOne<Category>(p => p.Category)
            .WithMany()
            .HasForeignKey(x => x.CategoryId);

        var category1 = Category.Create("Category 1");
        var category2 = Category.Create("Category 2");
        var category3 = Category.Create("Category 3");

        modelBuilder.Entity<Category>().HasData(new List<Category>
        {
            category1,
            category2,
            category3,
        });

        modelBuilder.Entity<Product>().HasData(new List<Product>
        {
            Product.Create("Product A", category3.Id, 100),
            Product.Create("Product B", category1.Id, 200),
            Product.Create("Product C", category2.Id, 300),
        });
    }
}