using AngularProductsCRUD.Application.Common.Interfaces.Persistence;
using FluentValidation;

namespace AngularProductsCRUD.Application.Products.Commands.UpdateProduct;

public class UpdateProductValidator : AbstractValidator<UpdateProductCommand>
{
    public UpdateProductValidator(ICategoriesRepository categoriesRepository)
    {
        RuleFor(x => x.ProductDto.Title)
            .NotEmpty()
            .MaximumLength(20)
            .WithMessage("Title is required and must be less than 20 characters");

        RuleFor(x => x.ProductDto.CategoryId)
            .NotEmpty()
            .WithMessage("Category Id is required")
            .MustAsync(async (id, _) => await categoriesRepository.Exists(id))
            .WithMessage("Category Id does not exist");

        RuleFor(x => x.ProductDto.Price)
            .GreaterThan(0)
            .WithMessage("Price must be greater than 0");
    }
}