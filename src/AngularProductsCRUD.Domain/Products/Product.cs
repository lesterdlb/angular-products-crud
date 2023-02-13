using AngularProductsCRUD.Domain.Categories;
using AngularProductsCRUD.Domain.Common.Models;

namespace AngularProductsCRUD.Domain.Products;

public sealed class Product : Entity<Guid>
{
    public string Title { get; private set; } = null!;
    public decimal Price { get; private set; }

    public Guid CategoryId { get; private set; }
    public  Category Category { get; private set; }

    public Product()
    {
    }

    private Product(string title, Guid categoryId, decimal price)
    {
        Id = Guid.NewGuid();
        Title = title;
        CategoryId = categoryId;
        Price = price;
    }

    public static Product Create(string title, Guid categoryId, decimal price)
    {
        return new Product(title, categoryId, price);
    }

    public void Update(string title, Guid categoryId, decimal price)
    {
        Title = title;
        CategoryId = categoryId;
        Price = price;
    }
}