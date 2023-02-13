using AngularProductsCRUD.Domain.Common.Models;

namespace AngularProductsCRUD.Domain.Categories;

public class Category : Entity<Guid>
{
    public string Name { get; private set; }

    public Category()
    {
    }

    private Category(string name)
    {
        Id = Guid.NewGuid();
        Name = name;
    }

    public static Category Create(string name)
    {
        return new Category(name);
    }

    public void Update(string name)
    {
        Name = name;
    }
}