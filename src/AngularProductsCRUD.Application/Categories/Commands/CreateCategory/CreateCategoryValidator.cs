using FluentValidation;

namespace AngularProductsCRUD.Application.Categories.Commands.CreateCategory;

public class CreateCategoryValidator : AbstractValidator<CreateCategoryCommand>
{
    public CreateCategoryValidator()
    {
        RuleFor(x => x.CategoryDto.Name)
            .NotEmpty()
            .MaximumLength(20)
            .WithMessage("Name is required and must be less than 20 characters");
    }
}