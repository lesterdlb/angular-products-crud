using AngularProductsCRUD.Application.Common.Dto.Products;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Commands.CreateProduct;

public record CreateProductCommand(ProductDto ProductDto) : IRequest<ErrorOr<Guid>>;