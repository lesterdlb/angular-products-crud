using AngularProductsCRUD.Application.Common.Dto.Products;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Queries.GetProduct;

public record GetProductQuery(Guid Id) : IRequest<ErrorOr<ViewProductDto>>;