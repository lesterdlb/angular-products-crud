using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using FluentValidation;

namespace AngularProductsCRUD.Application.Categories.Commands.DeleteCategory;

public class DeleteCategoryValidator : AbstractValidator<DeleteCategoryCommand>
{
    public DeleteCategoryValidator(IProductsRepository productsRepository)
    {
        RuleFor(x => x.Id)
            .MustAsync(async (id, _) => await productsRepository.Get(p => p.CategoryId == id) == null)
            .WithMessage("Can't delete the category because it has related products");
    }
}