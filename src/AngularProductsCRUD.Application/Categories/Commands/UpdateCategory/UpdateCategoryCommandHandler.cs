using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Common.Errors;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Commands.UpdateCategory;

public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, ErrorOr<Unit>>
{
    private readonly ICategoriesRepository _categoriesRepository;

    public UpdateCategoryCommandHandler(ICategoriesRepository categoriesRepository)
    {
        _categoriesRepository = categoriesRepository;
    }

    public async Task<ErrorOr<Unit>> Handle(UpdateCategoryCommand command, CancellationToken cancellationToken)
    {
        var category = await _categoriesRepository.Get(command.Id);

        if (category == null) return Errors.Entity.EntityNotFound;

        category.Update(command.CategoryDto.Name);

        await _categoriesRepository.Update(category);

        return Unit.Value;
    }
}