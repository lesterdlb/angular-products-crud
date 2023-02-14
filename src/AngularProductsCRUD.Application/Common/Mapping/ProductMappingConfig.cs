using AngularProductsCRUD.Application.Common.Dto.Products;
using AngularProductsCRUD.Domain.Products;
using Mapster;

namespace AngularProductsCRUD.Application.Common.Mapping;

public class ClientMapping : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<Product, ViewProductDto>()
            .MapWith(p => new ViewProductDto()
            {
                Id = p.Id,
                Title = p.Title,
                CategoryId = p.CategoryId,
                Category = p.Category.Name,
                Price = p.Price
            });
    }
}