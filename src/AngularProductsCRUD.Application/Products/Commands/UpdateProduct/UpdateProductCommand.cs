using AngularProductsCRUD.Application.Common.Dto.Products;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Commands.UpdateProduct;

public record UpdateProductCommand(Guid Id, ProductDto ProductDto) : IRequest<ErrorOr<Unit>>;