using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Common.Errors;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Commands.DeleteProduct;

public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand, ErrorOr<Unit>>
{
    private readonly IProductsRepository _productsRepository;

    public DeleteProductCommandHandler(IProductsRepository productsRepository)
    {
        _productsRepository = productsRepository;
    }

    public async Task<ErrorOr<Unit>> Handle(DeleteProductCommand command, CancellationToken cancellationToken)
    {
        var product = await _productsRepository.Get(command.Id);

        if (product is null) return Errors.Entity.EntityNotFound;

        await _productsRepository.Delete(product);

        return Unit.Value;
    }
}