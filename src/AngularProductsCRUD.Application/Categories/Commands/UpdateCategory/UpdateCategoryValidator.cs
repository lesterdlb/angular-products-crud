using FluentValidation;

namespace AngularProductsCRUD.Application.Categories.Commands.UpdateCategory;

public class UpdateCategoryValidator : AbstractValidator<UpdateCategoryCommand>
{
    public UpdateCategoryValidator()
    {
        RuleFor(x => x.CategoryDto.Name)
            .NotEmpty()
            .MaximumLength(20)
            .WithMessage("Name is required and must be less than 20 characters");
    }
}