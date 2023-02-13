namespace AngularProductsCRUD.Application.Common.Dto.Products;

public record ProductDto
(
    string Title,
    Guid CategoryId,
    decimal Price
);