using AngularProductsCRUD.Application.Common.Dto.Categories;
using ErrorOr;
using MediatR;

namespace AngularProductsCRUD.Application.Categories.Queries.GetCategory;

public record GetCategoryQuery(Guid Id) : IRequest<ErrorOr<ViewCategoryDto>>;