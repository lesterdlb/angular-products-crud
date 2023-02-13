using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Commands.DeleteCategory;

public record DeleteCategoryCommand(Guid Id) : IRequest<ErrorOr<Unit>>;