using AngularProductsCRUD.Application.Common.Dto.Products;
using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using MapsterMapper;
using MediatR;

namespace AngularProductsCRUD.Application.Products.Queries.GetProducts;

public class GetProductsQueryHandler : IRequestHandler<GetProductsQuery, List<ViewProductDto>>
{
    private readonly IProductsRepository _productsRepository;
    private readonly IMapper _mapper;

    public GetProductsQueryHandler(IProductsRepository productsRepository, IMapper mapper)
    {
        _productsRepository = productsRepository;
        _mapper = mapper;
    }

    public async Task<List<ViewProductDto>> Handle(GetProductsQuery query, CancellationToken cancellationToken)
    {
        var products = await _productsRepository.GetAll(p => p.Category);

        return _mapper.Map<List<ViewProductDto>>(products);
    }
}