using AngularProductsCRUD.Application.Common.Dto.Products;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Queries.GetProducts;

public record GetProductsQuery : IRequest<List<ViewProductDto>>;