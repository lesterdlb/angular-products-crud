namespace AngularProductsCRUD.Application.Common.Dto.Products;

public class ViewProductDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = null!;
    public Guid CategoryId { get; set; }
    public string Category { get; set; } = null!;
    public decimal Price { get; set; }
}