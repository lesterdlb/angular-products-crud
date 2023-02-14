using AngularProductsCRUD.Application.Common.Dto.Products;
using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Common.Errors;
using ErrorOr;
using MapsterMapper;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Queries.GetProduct;

public class GetProductQueryHandler : IRequestHandler<GetProductQuery, ErrorOr<ViewProductDto>>
{
    private readonly IProductsRepository _productsRepository;
    private readonly IMapper _mapper;

    public GetProductQueryHandler(IProductsRepository productsRepository, IMapper mapper)
    {
        _productsRepository = productsRepository;
        _mapper = mapper;
    }

    public async Task<ErrorOr<ViewProductDto>> Handle(GetProductQuery query, CancellationToken cancellationToken)
    {
        var product = await _productsRepository.Get(p => p.Id == query.Id, p => p.Category);

        if (product is null) return Errors.Entity.EntityNotFound;

        return _mapper.Map<ViewProductDto>(product);
    }
}