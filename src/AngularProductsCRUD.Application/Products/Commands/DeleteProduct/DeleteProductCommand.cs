using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Commands.DeleteProduct;

public record DeleteProductCommand(Guid Id) : IRequest<ErrorOr<Unit>>;