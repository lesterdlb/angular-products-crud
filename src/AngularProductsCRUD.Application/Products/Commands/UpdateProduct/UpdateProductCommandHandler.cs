using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Common.Errors;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Commands.UpdateProduct;

public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, ErrorOr<Unit>>
{
    private readonly IProductsRepository _productsRepository;

    public UpdateProductCommandHandler(IProductsRepository productsRepository)
    {
        _productsRepository = productsRepository;
    }

    public async Task<ErrorOr<Unit>> Handle(UpdateProductCommand command, CancellationToken cancellationToken)
    {
        var product = await _productsRepository.Get(command.Id);

        if (product is null) return Errors.Entity.EntityNotFound;

        product.Update(
            command.ProductDto.Title,
            command.ProductDto.CategoryId,
            command.ProductDto.Price);

        await _productsRepository.Update(product);

        return Unit.Value;
    }
}