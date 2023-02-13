using AngularProductsCRUD.Application.Common.Dto.Categories;
using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using MapsterMapper;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Queries.GetCategories;

public class GetCategoriesQueryHandler : IRequestHandler<GetCategoriesQuery, List<ViewCategoryDto>>
{
    private readonly ICategoriesRepository _categoriesRepository;
    private readonly IMapper _mapper;

    public GetCategoriesQueryHandler(ICategoriesRepository categoriesRepository, IMapper mapper)
    {
        _categoriesRepository = categoriesRepository;
        _mapper = mapper;
    }

    public async Task<List<ViewCategoryDto>> Handle(GetCategoriesQuery query, CancellationToken cancellationToken)
    {
        var categories = await _categoriesRepository.GetAll();

        return _mapper.Map<List<ViewCategoryDto>>(categories);
    }
}