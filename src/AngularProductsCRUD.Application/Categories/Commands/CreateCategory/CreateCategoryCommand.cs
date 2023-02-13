using AngularProductsCRUD.Application.Common.Dto.Categories;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Commands.CreateCategory;

public record CreateCategoryCommand(CategoryDto CategoryDto) : IRequest<ErrorOr<Guid>>;