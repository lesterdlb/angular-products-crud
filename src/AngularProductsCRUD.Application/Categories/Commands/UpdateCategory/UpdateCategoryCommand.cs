using AngularProductsCRUD.Application.Common.Dto.Categories;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Commands.UpdateCategory;

public record UpdateCategoryCommand(Guid Id, CategoryDto CategoryDto) : IRequest<ErrorOr<Unit>>;