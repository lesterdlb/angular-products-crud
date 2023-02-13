using AngularProductsCRUD.Application.Common.Dto.Categories;
using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Common.Errors;
using ErrorOr;
using MapsterMapper;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Queries.GetCategory;

public class GetCategoryQueryHandler : IRequestHandler<GetCategoryQuery, ErrorOr<ViewCategoryDto>>
{
    private readonly ICategoriesRepository _categoriesRepository;
    private readonly IMapper _mapper;

    public GetCategoryQueryHandler(ICategoriesRepository categoriesRepository, IMapper mapper)
    {
        _categoriesRepository = categoriesRepository;
        _mapper = mapper;
    }

    public async Task<ErrorOr<ViewCategoryDto>> Handle(GetCategoryQuery query, CancellationToken cancellationToken)
    {
        var category = await _categoriesRepository.Get(query.Id);

        if (category is null) return Errors.Entity.EntityNotFound;

        return _mapper.Map<ViewCategoryDto>(category);
    }
}