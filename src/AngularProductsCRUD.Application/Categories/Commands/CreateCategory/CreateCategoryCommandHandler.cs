using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Categories;
using ErrorOr;
using MapsterMapper;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Commands.CreateCategory;

public class CreateCategoryCommandHandler : IRequestHandler<CreateCategoryCommand, ErrorOr<Guid>>
{
    private readonly ICategoriesRepository _categoriesRepository;
    private readonly IMapper _mapper;

    public CreateCategoryCommandHandler(ICategoriesRepository categoriesRepository, IMapper mapper)
    {
        _categoriesRepository = categoriesRepository;
        _mapper = mapper;
    }

    public async Task<ErrorOr<Guid>> Handle(CreateCategoryCommand command, CancellationToken cancellationToken)
    {
        var category = _mapper.Map<Category>(command.CategoryDto);

        var entity = await _categoriesRepository.Add(category);

        return entity.Id;
    }
}