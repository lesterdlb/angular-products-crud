using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using AngularProductsCRUD.Domain.Common.Errors;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Commands.DeleteCategory;

public class DeleteCategoryCommandHandler : IRequestHandler<DeleteCategoryCommand, ErrorOr<Unit>>
{
    private readonly ICategoriesRepository _categoriesRepository;

    public DeleteCategoryCommandHandler(ICategoriesRepository categoriesRepository)
    {
        _categoriesRepository = categoriesRepository;
    }

    public async Task<ErrorOr<Unit>> Handle(DeleteCategoryCommand command, CancellationToken cancellationToken)
    {
        var category = await _categoriesRepository.Get(command.Id);

        if (category is null) return Errors.Entity.EntityNotFound;

        await _categoriesRepository.Delete(category);

        return Unit.Value;
    }
}