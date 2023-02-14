using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Products;
using ErrorOr;
using MapsterMapper;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Commands.CreateProduct;

public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, ErrorOr<Guid>>
{
    private readonly IProductsRepository _productsRepository;
    private readonly IMapper _mapper;

    public CreateProductCommandHandler(IProductsRepository productsRepository, IMapper mapper)
    {
        _productsRepository = productsRepository;
        _mapper = mapper;
    }

    public async Task<ErrorOr<Guid>> Handle(CreateProductCommand command, CancellationToken cancellationToken)
    {
        var product = _mapper.Map<Product>(command.ProductDto);

        var entity = await _productsRepository.Add(product);

        return entity.Id;
    }
}